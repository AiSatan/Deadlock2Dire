  function renderPatchPage(doc, sourceRoot, patch) {
    const page = el("main", "ddp-page", [
      renderHero(patch),
      el("div", "ddp-shell", SECTION_ORDER.map((key) => renderSection(patch.sections[key])).filter(Boolean)),
    ]);

    const mount = doc.createElement("div");
    mount.id = CONFIG.mountId;
    mount.append(page);

    doc.getElementById(CONFIG.mountId)?.remove();
    doc.body.classList.add("ddp-body");
    hideOriginalPage(doc);
    doc.body.prepend(mount);
    sourceRoot.classList.add("ddp-hidden-source");
  }

  function hideOriginalPage(doc) {
    Array.from(doc.body.children).forEach((child) => {
      if (child.id === CONFIG.mountId || child.matches("script,style")) return;
      child.classList.add("ddp-hidden-original");
    });
  }

  function restoreOriginalPage(doc = document) {
    doc.getElementById(CONFIG.mountId)?.remove();
    doc.body.classList.remove("ddp-body");
    Array.from(doc.querySelectorAll(".ddp-hidden-original, .ddp-hidden-source")).forEach((node) => {
      node.classList.remove("ddp-hidden-original", "ddp-hidden-source");
    });
  }

  function renderHero(patch) {
    return el("header", "ddp-hero", [
      el("div", "ddp-hero-inner", [
        el("div", "ddp-eyebrow", "Deadlock Update"),
        el("h1", "ddp-version", patch.title),
      ]),
    ]);
  }

  function renderSection(section) {
    if (!section?.entries.length) return null;

    return el("section", `ddp-section ddp-section-${section.key}`, [
      el("h2", "ddp-section-title", section.title),
      el("div", "ddp-section-body", section.entries.map((entry) => renderEntry(section, entry))),
    ]);
  }

  function renderEntry(section, entry) {
    if (section.key === "general") return renderGeneralEntry(entry);

    return el("article", `ddp-card ddp-card-${entry.iconKind}`, [
      renderIcon(entry.icon, entry.title, "ddp-icon"),
      el("div", "ddp-card-body", [
        el("div", "ddp-card-title", entry.title),
        el("div", "ddp-card-meta", entry.iconKind.toUpperCase()),
        el("div", "ddp-card-groups", entry.groups.map(renderChangeGroup)),
      ]),
    ]);
  }

  function renderGeneralEntry(entry) {
    return el("div", "ddp-general", [
      el("h3", "ddp-subsection-title", entry.title),
      renderChangeList(entry.groups[0]?.changes || []),
    ]);
  }

  function renderChangeGroup(group) {
    return el("section", "ddp-change-group", [
      el("header", "ddp-change-group-header", [
        group.title !== "General" ? renderIcon(group.icon, group.title, "ddp-group-icon") : null,
        el("h4", "ddp-change-group-title", group.title),
      ]),
      renderChangeList(group.changes),
    ]);
  }

  function renderChangeList(changes) {
    return el("ul", "ddp-changes", changes.map((change) => el("li", "", highlightChange(change))));
  }

  function renderIcon(src, title, className) {
    const icon = el("div", className);
    const img = el("img", "", "");
    img.alt = "";
    img.loading = "eager";
    img.decoding = "async";
    img.referrerPolicy = "no-referrer";
    img.src = src || CONFIG.fallbackIcon;
    img.onerror = () => {
      if (img.src !== CONFIG.fallbackIcon) {
        img.src = CONFIG.fallbackIcon;
        return;
      }
      img.remove();
      icon.textContent = initials(title);
    };
    icon.append(img);
    return icon;
  }

  function highlightChange(text) {
    const fragment = document.createDocumentFragment();
    const regex = /[+-]?\d+(?:\.\d+)?(?:-[+-]?\d+(?:\.\d+)?)?%?/g;
    let lastIndex = 0;

    for (const match of text.matchAll(regex)) {
      fragment.append(document.createTextNode(text.slice(lastIndex, match.index)));
      fragment.append(el("span", "ddp-num", match[0]));
      lastIndex = match.index + match[0].length;
    }

    fragment.append(document.createTextNode(text.slice(lastIndex)));
    return fragment;
  }

  function injectStyles(doc) {
    if (!CORE_STYLES || doc.getElementById(CONFIG.styleId)) return;

    const style = doc.createElement("style");
    style.id = CONFIG.styleId;
    style.textContent = CORE_STYLES;
    doc.head.append(style);
  }
