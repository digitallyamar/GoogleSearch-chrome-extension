chrome.contextMenus.create({
  id: "google-search",
  title: "Search on Google for '%s'",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "google-search") {
    const searchQuery = info.selectionText;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    chrome.tabs.create({ url: searchUrl });
  }
});
