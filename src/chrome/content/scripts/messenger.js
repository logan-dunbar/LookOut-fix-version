// Load an additional JavaScript file.
Services.scriptloader.loadSubScript("chrome://lookout/content/lookout.js", window, "UTF-8");

function onLoad(activatedWhileWindowOpen) {

  WL.injectCSS("resource://lookout/skin/lookout.css");
  WL.injectElements(`
    <menupopup id="taskPopup">
      <menuitem id="lookout-settings" label="&lookout.label;" oncommand="lookout.openSettings();" insertbefore="prefSep" class="menu-iconic lookout-icon menuitem-iconic" />
    </menupopup>`,
  ["chrome://lookout/locale/lookout.dtd"]);

  glookout.loadSettings(false);
}

function onUnload(deactivatedWhileWindowOpen) {
}