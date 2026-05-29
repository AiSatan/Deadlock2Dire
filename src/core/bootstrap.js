  async function toggleCurrentPage() {
    if (document.getElementById(CONFIG.mountId)) {
      restoreOriginalPage();
      return { transformed: false };
    }

    const patch = await run();
    return { transformed: Boolean(patch) };
  }

  function setupExtensionMessages() {
    const api = extensionApi();
    if (!api?.runtime?.onMessage) return;

    api.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message?.type !== "deadlock2dire:toggle") return false;

      toggleCurrentPage()
        .then((result) => sendResponse(result))
        .catch((error) => {
          console.warn("[Deadlock2Dire] Toggle failed:", error);
          sendResponse({ transformed: false, error: error.message });
        });
      return true;
    });
  }

  function setupUserscriptMenu() {
    const registerMenuCommand = userscriptMenuCommand();
    if (!registerMenuCommand) return;

    registerMenuCommand("Toggle Deadlock2Dire", () => {
      toggleCurrentPage().catch((error) => {
        console.warn("[Deadlock2Dire] Toggle failed:", error);
      });
    });
  }

  function extensionApi() {
    if (typeof browser !== "undefined" && browser?.runtime) return browser;
    if (typeof chrome !== "undefined" && chrome?.runtime) return chrome;
    return null;
  }

  function userscriptMenuCommand() {
    if (typeof GM_registerMenuCommand === "function") return GM_registerMenuCommand;
    if (typeof GM !== "undefined" && typeof GM.registerMenuCommand === "function") {
      return GM.registerMenuCommand.bind(GM);
    }
    return null;
  }

  function start() {
    setupExtensionMessages();
    setupUserscriptMenu();

    if (!extensionApi()?.runtime?.id && !userscriptMenuCommand()) {
      toggleCurrentPage().catch((error) => console.warn("[Deadlock2Dire] Could not toggle patch notes:", error));
    }
  }

  start();
