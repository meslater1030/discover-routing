# Discover routing

This repo is designed to understand how routing works within a single page web application written in JavaScript.

## Notes

The primary mechanism to move between pages without _actually_ moving between html pages is `history.pushState(state, title, pageUrl)`. This method will navigate to the specified pageUrl without reloading anything unless specifically requested. Any serializable state information related to the page can be passed into this method for later use.

When the url changes whether by our means or the user interacting with the browser back and forward buttons the `popstate` event will fire. This allows us to listen to url changes and do the right thing in response.

While these two things will work together to navigate between routes one the index.html page is loaded they will not handle the case where a user navigates directly to a subdirectory. That case must be handled by server configuration.

## Examples

### ReactTraining - History

The [History](https://github.com/ReactTraining/history/blob/9ff690785f02d5c2554b860ff1a39a6527d18aa1/modules/createBrowserHistory.js) module is used by React-Router and very many other things. We can see here that the History module wraps `history.pushState` and does a lot of other helpful things besides - like checking browser compatibility. Start looking at line 154. This module also listens to the `popstate` event and then transitions to the requested location. Start looking at line 102.

### Ember - Ember-Routing

The [Ember-Routing](https://github.com/emberjs/ember.js/blob/ae70bd2e18ad777d2070059acd11b80b3f6d7409/packages/ember-routing/lib/location/history_location.js) module also makes use of `history.pushState`. In fact - much of this code is fundamentally the same as what we just saw. pushState is called on line 143 and the `popstate` event handler is found on line 235. This class also checks for compatibility and has other niceties related to routing.

## Angular

By now you know what to expect. Angular implements `history.pushState` on line 58 and listens to the `popstate` event on line 43.

Naturally there are some compatibility concerns. This methodology is only available to modern browsers that implement the HTML5 spec. For previous browsers you might see a path that looks something like `host:domain/#/some/url`. Older browsers are able to programmatically change and listen to hash changes. In the past this functionality existed in order to move the user up and down one page by element id. That purpose was overriden in early SPA's to enable routing like we're used to seeing today.

More functionality exists in the HTML5 history spec than `history.pushState` and the `popstate` event but even from these examples you can see that the technical matter of changing urls and rendering content could be considered relatively trivial. What's difficult in SPA routing is deciding how exactly to respond to a change in url and subsequently communicate that information across the rest of the app.
