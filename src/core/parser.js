  function parsePatch(lines) {
    const patch = createPatch();
    let sectionHint = "general";

    for (const line of lines) {
      const header = parseSectionHeader(line);
      if (header) {
        sectionHint = header;
        continue;
      }

      const bullet = parseBullet(line);
      if (!bullet) continue;

      addBulletToPatch(patch, sectionHint, bullet, line);
    }

    return patch;
  }

  function createPatch() {
    return {
      title: readPatchTitle(),
      sourceUrl: location.href,
      sections: {
        general: { key: "general", title: "General Updates", entries: [] },
        items: { key: "items", title: "Item Updates", entries: [] },
        heroes: { key: "heroes", title: "Hero Updates", entries: [] },
      },
    };
  }

  function readPatchTitle() {
    return cleanText(
      document.querySelector(".p-title-value, h1")?.textContent
      || document.title.replace(/\s*\|\s*Deadlock.*$/i, "")
      || "Deadlock Update"
    );
  }

  function addBulletToPatch(patch, sectionHint, bullet, originalLine) {
    if (bullet.entity && !isValidEntityTitle(bullet.entity)) {
      addSectionGeneralChange(patch, sectionHint, originalLine);
      return;
    }

    if (!bullet.entity) {
      addSectionGeneralChange(patch, sectionHint, bullet.change);
      return;
    }

    if (isHero(bullet.entity) || sectionHint === "heroes") {
      addHeroChange(patch, bullet.entity, bullet.change);
      return;
    }

    if (isItem(bullet.entity) || sectionHint === "items") {
      addItemChange(patch, bullet.entity, bullet.change);
      return;
    }

    addGeneralChange(patch, originalLine);
  }

  function parseBullet(line) {
    const text = cleanText(line);
    if (!text) return null;

    const match = text.match(/^([^:]{2,64}):\s+(.+)$/);
    if (!match) return { entity: "", change: text };

    return {
      entity: cleanTitle(match[1]),
      change: sentenceCase(cleanText(match[2])),
    };
  }

  function isValidEntityTitle(value) {
    const title = cleanTitle(value);
    if (!title || title.length > 64) return false;
    if (title.split(/\s+/).length > 8) return false;
    return !/^(?:some|following|the following|there(?:\b| (?:are|is))|all|these|this|a new|an existing|existing|items?|heroes?|skills?)\b/i.test(title);
  }

  function parseSectionHeader(line) {
    const text = cleanText(line);
    const match = text.match(/^\[\s*(.+?)\s*]$/);
    const title = match ? match[1] : text;

    if (!match && !isPlainSectionHeader(title)) return "";

    if (/heroes?/i.test(title)) return "heroes";
    if (/items?|weapon|vitality|spirit|brawl/i.test(title)) return "items";
    return "general";
  }

  function isPlainSectionHeader(title) {
    return /^(?:General Changes|General Updates|Misc Gameplay|Heroes?|Hero Changes|Hero Updates|Items?|Item Changes|Weapon Items|Vitality Items|Spirit Items|Brawl Items|Map Changes|Bug Fixes|Updates to Patch Notes)$/i.test(cleanText(title));
  }

  function addGeneralChange(patch, change) {
    const entry = patch.sections.general.entries[0] || {
      title: "Core Gameplay",
      iconKind: "general",
      icon: "",
      groups: [{ title: "General", icon: "", changes: [] }],
    };
    entry.groups[0].changes.push(sentenceCase(change));
    if (!patch.sections.general.entries.length) patch.sections.general.entries.push(entry);
  }

  function addSectionGeneralChange(patch, sectionKey, change) {
    if (sectionKey === "items") {
      addGroupedGeneralChange(patch.sections.items, "General Item Changes", change);
      return;
    }

    if (sectionKey === "heroes") {
      addGroupedGeneralChange(patch.sections.heroes, "General Hero Changes", change);
      return;
    }

    addGeneralChange(patch, change);
  }

  function addGroupedGeneralChange(section, title, change) {
    const entry = findOrAddEntry(section, title, {
      iconKind: "general",
      icon: "",
    });
    findOrAddGroup(entry, "General", "").changes.push(sentenceCase(change));
  }

  function addItemChange(patch, itemName, change) {
    const entry = findOrAddEntry(patch.sections.items, itemName, {
      iconKind: "item",
      icon: itemIcon(itemName),
    });
    findOrAddGroup(entry, "General", "").changes.push(sentenceCase(change));
  }

  function addHeroChange(patch, heroName, change) {
    const hero = heroInfo(heroName);
    const entry = findOrAddEntry(patch.sections.heroes, heroName, {
      iconKind: "hero",
      icon: hero?.icon || "",
    });

    const ability = extractAbility(heroName, change);
    const group = findOrAddGroup(entry, ability.title || "General", ability.icon || "");
    group.changes.push(sentenceCase(ability.change || change));
  }

  function findOrAddEntry(section, title, values) {
    const existing = section.entries.find((entry) => normalKey(entry.title) === normalKey(title));
    if (existing) return existing;

    const entry = {
      title,
      iconKind: values.iconKind,
      icon: values.icon,
      groups: [],
    };
    section.entries.push(entry);
    return entry;
  }

  function findOrAddGroup(entry, title, icon) {
    const existing = entry.groups.find((group) => normalKey(group.title) === normalKey(title));
    if (existing) {
      if (icon && !existing.icon) existing.icon = icon;
      return existing;
    }

    const group = { title, icon, changes: [] };
    entry.groups.push(group);
    return group;
  }
