function setActiveStyleSheet(e) {
    var r, t;
    for (r = 0; (t = document.getElementsByTagName("link")[r]); r++)
        -1 != t.getAttribute("rel").indexOf("style") &&
            t.getAttribute("title") &&
            ((t.disabled = !0),
            t.getAttribute("title") == e && (t.disabled = !1));
    "dark" == readCookie("color_skin") &&
        (jQuery("#css_dark_skin").remove(),
        jQuery("head").append(
            '<link id="css_dark_skin" href="assets/css/layout-dark.css" rel="stylesheet" type="text/css" title="dark" />'
        ),
        jQuery("#is_dark").trigger("click"),
        jQuery("a.logo img").attr("src", "assets/images/logo_dark.png"));
}
function getActiveStyleSheet() {
    var e, r;
    for (e = 0; (r = document.getElementsByTagName("link")[e]); e++)
        if (
            -1 != r.getAttribute("rel").indexOf("style") &&
            r.getAttribute("title") &&
            !r.disabled
        )
            return r.getAttribute("title");
    return null;
}
function getPreferredStyleSheet() {
    var e, r;
    for (e = 0; (r = document.getElementsByTagName("link")[e]); e++)
        if (
            -1 != r.getAttribute("rel").indexOf("style") &&
            -1 == r.getAttribute("rel").indexOf("alt") &&
            r.getAttribute("title")
        )
            return r.getAttribute("title");
    return null;
}
function createCookie(e, r, t) {
    if (t) {
        var i = new Date();
        i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
        var s = "; expires=" + i.toGMTString();
    } else s = "";
    document.cookie = e + "=" + r + s + ";";
}
function readCookie(e) {
    for (
        var r = e + "=", t = document.cookie.split(";"), i = 0;
        i < t.length;
        i++
    ) {
        for (var s = t[i]; " " == s.charAt(0); ) s = s.substring(1, s.length);
        if (0 == s.indexOf(r)) return s.substring(r.length, s.length);
    }
    return null;
}
jQuery(document).ready(function () {
    "use strict";
    jQuery("#hideSwitcher, #showSwitcher").click(function () {
        if (jQuery("#showSwitcher").is(":visible")) {
            var e = "#showSwitcher";
            jQuery("#switcher").animate({ "margin-left": "0px" }, 500).show(),
                createCookie("switcher_visible", "true", 365);
        } else {
            e = "#switcher";
            jQuery("#showSwitcher").show().animate({ "margin-left": "0" }, 500),
                createCookie("switcher_visible", "false", 365);
        }
        jQuery(e).animate({ "margin-left": "-500px" }, 500, function () {
            jQuery(this).hide();
        });
    }),
        $("a[href='#']").on("click", function (e) {
            e.preventDefault();
        });
});
var switcher_visible = "";
(window.onload = function (e) {
    var r = readCookie("style");
    setActiveStyleSheet(r || getPreferredStyleSheet()),
        "false" != switcher_visible && jQuery("#showSwitcher").trigger("click");
    readCookie("is_light");
    "true" == is_boxed &&
        (jQuery("light").removeClass("light"),
        jQuery("light").addClass("light"),
        jQuery("#is_light").trigger("click"));
}),
    jQuery("input.dark_switch").bind("click", function () {
        "light" == jQuery(this).attr("value")
            ? (jQuery("body").removeClass("dark"),
              jQuery("body").addClass("light"))
            : (jQuery("body").removeClass("light"),
              jQuery("body").addClass("dark"));
    }),
    jQuery("input.boxed_switch").bind("click", function () {
        "boxed" == jQuery(this).attr("value")
            ? (jQuery("body").removeClass("boxed"),
              jQuery("body").addClass("boxed"),
              createCookie("is_boxed", "true", 365))
            : (jQuery("body").removeClass("boxed"),
              createCookie("is_boxed", "", -1),
              jQuery("body").removeClass("transparent"));
    }),
    jQuery("input.separator_switch").bind("click", function () {
        var e = jQuery(this).attr("value");
        "skew" == e
            ? (jQuery("body").removeClass("reversed-skew"),
              jQuery("body").removeClass("double-diagonal"),
              jQuery("body").removeClass("big-triangle"),
              jQuery("body").addClass("skew"),
              createCookie("is_skew", "true", 365))
            : "reversed-skew" == e
            ? (jQuery("body").removeClass("skew"),
              jQuery("body").removeClass("double-diagonal"),
              jQuery("body").removeClass("big-triangle"),
              jQuery("body").addClass("reversed-skew"),
              createCookie("is_reversed_skew", "true", 365))
            : "double-diagonal" == e
            ? (jQuery("body").removeClass("skew"),
              jQuery("body").removeClass("reversed-skew"),
              jQuery("body").removeClass("big-triangle"),
              jQuery("body").addClass("double-diagonal"),
              createCookie("is_double_diagonal", "true", 365))
            : "big-triangle" == e
            ? (jQuery("body").removeClass("skew"),
              jQuery("body").removeClass("reversed-skew"),
              jQuery("body").removeClass("double-diagonal"),
              jQuery("body").addClass("big-triangle"),
              createCookie("is_big_triangle", "true", 365))
            : (jQuery("body").removeClass("skew"),
              jQuery("body").removeClass("reversed-skew"),
              jQuery("body").removeClass("double-diagonal"),
              jQuery("body").removeClass("big-triangle"),
              createCookie("is_normal", "", -1));
    });
