# Discover routing

This repo is designed to understand how routing works within a single page web application written in JavaScript.

## Notes

The primary mechanism to move between pages without _actually_ moving between html pages is `history.pushState(state, title, pageUrl)`. This method will navigate to the specified pageUrl without reloading anything unless specifically requested. Any serializable state information related to the page can be passed into this method for later use.

When the url changes whether by our means or the user interacting with the browser back and forward buttons the `popstate` event will fire. This allows us to listen to url changes and do the right thing in response.

While these two things will work together to navigate between routes one the index.html page is loaded they will not handle the case where a user navigates directly to a subdirectory. That case must be handled by server configuration.
