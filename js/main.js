/**
 * Recliner.js
 */
$(document).ready(function() {
  $('.lazy iframe').recliner({
    attrib: "data-src",
    throttle: 10,
    threshold: 100,
    printable: true,
    live: true
  })
});
