# Google Search Chrome Extension

This Chrome extension adds a "Search on Google" option to the context menu when you select text on a webpage. This is particularly useful for browsers like Brave, where the default search engine for context menu searches might be different.

## Features

-   Adds a "Search on Google for '%s'" option to the context menu.
-   The '%s' is replaced with the text you have selected.
-   Clicking the option opens a new tab with the Google search results for the selected text.

## How to Use

1.  Clone or download this repository.
2.  Open your Chrome or Brave browser and navigate to `chrome://extensions` or `brave://extensions`.
3.  Enable "Developer mode" (usually a toggle switch in the top right corner).
4.  Click on the "Load unpacked" button.
5.  Select the directory where you cloned or downloaded this repository.
6.  The extension should now be loaded and active.
7.  To use it, simply select any text on a webpage, right-click, and you will see the "Search on Google for '...'" option in the context menu.

## Files

-   `manifest.json`: The manifest file for the extension.
-   `background.js`: The service worker that creates the context menu and handles the search functionality.
-   `icons/`: A directory containing the icons for the extension (16x16, 48x48, and 128x128).
