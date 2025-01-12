function initMenuAccord(selector) {
    $(selector).click((function() {
        const e = $(this).next(".menu-wrapper")
          , t = $(this).parent(".menu-wrapper")
          , i = $(this).parents(".menu-wrapper");
        console.log(e.css("max-height")),
        "0px" === e.css("max-height") ? (e.css("max-height", e.children("ul").outerHeight() + "px"),
        i.css("max-height", "+=" + e.children("ul").outerHeight() + "px")) : (e.css("max-height", 0),
        t.css("max-height", 0))
    }
  ))
}


// window.$ = window.jQuery = require('jquery');