chrome.action.onClicked.addListener(async (tab) => {
  if (!tab?.id) return;

  try {
    await chrome.tabs.sendMessage(tab.id, { type: "deadlock2dire:toggle" });
  } catch (error) {
    // Deadlock forum pages have the content script; other tabs ignore the action.
  }
});
