  function extractAbility(heroName, change) {
    const hero = heroInfo(heroName);
    const abilities = abilityEntries(hero?.abilities || {})
      .sort((a, b) => b.pattern.length - a.pattern.length);

    for (const ability of abilities) {
      const pattern = new RegExp(`^${escapeRegExp(ability.pattern)}\\b\\s*:?,?\\s*`, "i");
      if (!pattern.test(change)) continue;

      return {
        title: canonicalAbilityName(heroName, ability.title),
        icon: ability.icon,
        change: cleanText(change.replace(pattern, "")),
      };
    }

    return { title: "", icon: "", change };
  }

  function abilityEntries(abilities) {
    return Object.entries(abilities).map(([title, icon]) => ({ pattern: title, title, icon }));
  }

  function canonicalAbilityName(heroName, abilityName) {
    if (heroName === "Bebop" && compactKey(abilityName) === "hyperbeam") return "Hyper Beam";
    return abilityName;
  }

  function iconIndex() {
    return window.DeadlockDotaIconIndex || { heroes: {}, items: {} };
  }

  function heroInfo(name) {
    return lookupMapValue(iconIndex().heroes, cleanTitle(name)) || null;
  }

  function itemIcon(name) {
    return lookupMapValue(iconIndex().items, cleanTitle(name)) || "";
  }

  function lookupMapValue(map, title) {
    if (!map || !title) return null;

    const clean = cleanTitle(title);
    return map[title]
      || map[clean]
      || map[normalKey(clean)]
      || Object.entries(map).find(([key]) => compactKey(key) === compactKey(clean))?.[1]
      || null;
  }

  function isHero(name) {
    return Boolean(heroInfo(name));
  }

  function isItem(name) {
    return Boolean(itemIcon(name));
  }
