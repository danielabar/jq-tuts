# Tuts Plus: 30 Days to learn jQuery

Learning jQuery with Tuts Plus

[API Reference](http://api.jquery.com/)

### Lesson 1
* jQuery is function
* exposed as global on window
* aliased as $
* can pass it css selectors
* used to 'query' and manipulate DOM

### Lesson 2
* DOM is loaded top to bottom
* Cannot use jQuery to manipulate it until after its been loaded
* Need to tell jQuery to wait until document is ready

### Lesson 2.3 - Basics of Querying the DOM
* `children` is method available on jQuery object, finds _immediate_ children of a parent (i.e. not all descendants)
* if want to match all descendant elements, use `find` method
* `children` is somewhat faster than `find` because jQuery doesn't need to keep searching beyond one level deep
* `eq` method to find elements, is zero based
* `next` method to target next element after currently selected one
* methods can be chained because each one returns the jQuery object
* `parent` to go up to _immediate_ parent
* `parents` to go up ascendant parents, goes _all_ the way up the DOM tree
* `closest` is similar to `parents`, starts are current element, and finds _first_ element matching selector, progressing up DOM tree

### Lesson 2.4 - Events 101
* `this` refers to _DOM_ node that was clicked in click event handler (not jQuery element)
  * to get access to jQuery methods, wrap this like so `$(this)`
* about wrapping - don't keep wrapping same element over and over
  * inefficient because jQuery has to keep going back to the DOM to look for it
  * better to assign results of first wrap to variable, then use the variable reference
* `click` is a convenience method, is equivalent to `.on('click', function...)`