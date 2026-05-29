  function cleanText(value) {
    return String(value || "")
      .replace(/\u00a0/g, " ")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();
  }

  function textOf(node) {
    return cleanText(node?.innerText || node?.textContent || "");
  }

  function cleanTitle(value) {
    return cleanText(value).replace(/^The\s+/i, "").trim();
  }

  function normalKey(value) {
    return cleanTitle(value).toLowerCase();
  }

  function compactKey(value) {
    return normalKey(value).replace(/[^a-z0-9]+/g, "");
  }

  function sentenceCase(value) {
    return cleanText(value).replace(/^([a-z])/, (letter) => letter.toUpperCase());
  }

  function initials(value) {
    const words = cleanTitle(value).split(/\s+/).filter(Boolean);
    return (words[0]?.[0] || "D") + (words[1]?.[0] || "");
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function el(tag, className, children) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (children == null) return node;

    if (Array.isArray(children)) {
      children.filter(Boolean).forEach((child) => node.append(child));
    } else if (children instanceof Node) {
      node.append(children);
    } else {
      node.textContent = String(children);
    }

    return node;
  }
