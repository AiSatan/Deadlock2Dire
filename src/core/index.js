  async function run() {
    const root = findSourceRoot(document);
    if (!root) return null;

    injectStyles(document);
    const patch = parsePatch(await collectPatchLines(root));
    renderPatchPage(document, root, patch);
    printStats(patch);
    return patch;
  }

  function printStats(patch) {
    const counts = Object.fromEntries(Object.entries(patch.sections).map(([key, section]) => [key, section.entries.length]));
    console.info("[Deadlock2Dire]", { title: patch.title, counts });
  }

  window.DeadlockDotaPatch = {
    run,
    restoreOriginalPage,
    toggleCurrentPage,
    parsePatch,
    collectLines,
    config: CONFIG,
  };
