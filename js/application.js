/*! Intecmedia.Bootstrap  | (c) 2014 Intecmedia. | license public domain */
"use strict";
/* Run less.js parser for only file protocol */
(window.location.protocol === "file:") && (function() {
    var startTime = new Date();
    // config less-parser
    window.less = {env: "development", dumpLineNumbers: "comments", logLevel: 2};
    var html = $("html").css("visibility", "hidden");
    // run less-parser
    $.getScript("js/less.js", function() {
        jQuery("link[rel~='stylesheet'][href$='.less']").each(function(){
            window.less.sheets.push(this);
            jQuery(this).remove();
        });
        window.less.refresh();
        html.css("visibility", "");
        // watch mode
        window.less.poll = 1.5 * (new Date() - startTime);
    });
})();

/* Application */
jQuery(function($) {
    var wnd = $(window), doc = $(document);
    /* addtional code here */


});

