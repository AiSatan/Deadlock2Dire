  function findSourceRoot(doc) {
    const threadRoot = findThreadSourceRoot(doc);
    if (threadRoot) return threadRoot;

    const candidates = uniqueNodes(CONFIG.rootSelectors
      .flatMap((selector) => Array.from(doc.querySelectorAll(selector)))
    )
      .filter((node) => isPatchNotesText(textOf(node)))
      .map((node) => ({
        node,
        score: scoreSourceRoot(node),
        length: textOf(node).length,
      }));

    return candidates.sort((a, b) => b.score - a.score || b.length - a.length)[0]?.node || null;
  }

  function findThreadSourceRoot(doc) {
    const roots = uniqueNodes([
      "article.message .bbWrapper",
      ".message-body .bbWrapper",
    ].flatMap((selector) => Array.from(doc.querySelectorAll(selector))))
      .filter((node) => isPatchNotesText(textOf(node)));

    if (roots.length < 2) return null;
    return createCombinedSourceRoot(doc, roots);
  }

  function createCombinedSourceRoot(doc, roots) {
    const root = doc.createElement("div");
    root.textContent = roots.map(textOf).join("\n");
    return root;
  }

  function uniqueNodes(nodes) {
    return Array.from(new Set(nodes));
  }

  function isPatchNotesText(text) {
    const hasPatchTitle = /Update|Patch Notes|\[\s*(?:General|Heroes?|Items?|Weapon Items|Vitality Items|Spirit Items)\s*]/i.test(text);
    const hasPatchTerms = /-\s+\S+|:\s+|Rejuv|Patron|cooldown|damage|range|health|boon|resist|duration|weapon|spirit/i.test(text);
    const hasEntityRows = /(?:^|\n)\s*[-*]?\s*[^:\n]{2,64}:\s+.+/m.test(text);
    const hasMultipleRows = text.split("\n").filter((line) => cleanText(line)).length >= 2;

    return (hasPatchTitle && hasPatchTerms) || (hasEntityRows && hasPatchTerms && hasMultipleRows);
  }

  function scoreSourceRoot(node) {
    let score = 0;
    if (node.matches(".bbWrapper")) score += 6;
    if (node.closest("article.message")) score += 3;
    if (node.querySelector?.(".bbWrapper")) score += 2;
    return score;
  }

  function collectLines(root) {
    return normalizePatchLines(textOf(root));
  }

  async function collectPatchLines(root) {
    return collectLines(root);
  }

  function normalizePatchLines(text) {
    return cleanText(text)
      .split("\n")
      .flatMap(expandInlineSectionLine)
      .map((line) => cleanText(line).replace(/^[-*]\s+/, ""))
      .filter(Boolean)
      .filter((line) => !isIgnoredForumLine(line));
  }

  function isIgnoredForumLine(line) {
    const text = cleanText(line);
    return /^(Like|Reply|Report|Status|Reactions:?)$/i.test(text)
      || /^Reactions:/i.test(text)
      || /^View attachment\b/i.test(text)
      || /^Image:\s+(?:Like|Love|Angry|Wow|Sad|Haha)\b/i.test(text)
      || /^Deadlock\s+-\s+Gameplay Update\s+-\s+\d{2}-\d{2}-\d{4}\s+-\s+.+ News$/i.test(text)
      || /^(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/.test(text)
      || /^Spoiler$/i.test(text)
      || /^(?:Updated|New|Removed) Patch Notes:$/i.test(text)
      || /^(?:Old|New):$/i.test(text)
      || /^Updates for (?:\d{1,2}\/\d{1,2}\/\d{2,4}|\d{4}-\d{2}-\d{2})$/i.test(text)
      || /^[A-Z][A-Za-z& /()-]{2,48}:$/.test(text);
  }

  function expandInlineSectionLine(line) {
    const clean = cleanText(line);
    const match = clean.match(/^(\[\s*[^\]]+\s*])\s+[-–]\s+(.+)$/);
    if (!match) return [line];

    return [
      match[1],
      ...match[2].split(/\s+[-–]\s+/).map((item) => `- ${item}`),
    ];
  }
