(function() {
    function h(a) {
        return '[giscus] An error occurred. Error message: "'.concat(a, '".')
    }
    function k(a, f) {
        void 0 === f && (f = !1);
        f = f ? "meta[property='og:".concat(a, "'],") : "";
        return (a = document.querySelector(f + "meta[name='".concat(a, "']"))) ? a.content : ""
    }
    var l = document.currentScript
      , m = (new URL(l.src)).origin
      , b = new URL(location.href)
      , d = b.searchParams.get("giscus") || ""
      , n = localStorage.getItem("giscus-session");
    b.searchParams["delete"]("giscus");
    var e = b.toString();
    if (d)
        localStorage.setItem("giscus-session", JSON.stringify(d)),
        history.replaceState(void 0, document.title, e);
    else if (n)
        try {
            d = JSON.parse(n)
        } catch (a) {
            localStorage.removeItem("giscus-session"),
            console.warn("".concat(h(null === a || void 0 === a ? void 0 : a.message), " Session has been cleared."))
        }
    b = l.dataset;
    var c = {};
    c.origin = e;
    c.session = d;
    c.theme = b.theme;
    c.reactionsEnabled = b.reactionsEnabled || "1";
    c.emitMetadata = b.emitMetadata || "0";
    c.inputPosition = b.inputPosition || "bottom";
    c.repo = b.repo;
    c.repoId = b.repoId;
    c.category = b.category || "";
    c.categoryId = b.categoryId;
    c.strict = b.strict || "0";
    c.description = k("description", !0);
    c.backLink = k("giscus:backlink") || e;
    switch (b.mapping) {
    case "url":
        c.term = e;
        break;
    case "title":
        c.term = document.title;
        break;
    case "og:title":
        c.term = k("title", !0);
        break;
    case "specific":
        c.term = b.term;
        break;
    case "number":
        c.number = b.term;
        break;
    default:
        c.term = 2 > location.pathname.length ? "index" : location.pathname.substring(1).replace(/\.\w+$/, "")
    }
    var p = (d = document.querySelector(".giscus")) && d.id;
    p && (c.origin = "".concat(e, "#").concat(p));
    e = b.lang ? "/".concat(b.lang) : "";
    e = "".concat(m).concat(e, "/widget?").concat(new URLSearchParams(c));
    b = "lazy" === b.loading ? "lazy" : void 0;
    var g = document.createElement("iframe");
    Object.entries({
        "class": "giscus-frame giscus-frame--loading",
        title: "Comments",
        scrolling: "no",
        allow: "clipboard-write",
        src: e,
        loading: b
    }).forEach(function(a) {
        var f = a[0];
        return (a = a[1]) && g.setAttribute(f, a)
    });
    g.addEventListener("load", function() {
        g.classList.remove("giscus-frame--loading")
    });
    b = document.getElementById("giscus-css") || document.createElement("style");
    b.id = "giscus-css";
    b.textContent = "\n  .giscus, .giscus-frame {\n    width: 100%;\n    min-height: 150px;\n  }\n\n  .giscus-frame {\n    border: none;\n    color-scheme: light dark;\n  }\n  .giscus-frame--loading {\n    opacity: 0;\n  }\n";
    document.head.prepend(b);
    if (d) {
        for (; d.firstChild; )
            d.firstChild.remove();
        d.appendChild(g)
    } else
        d = document.createElement("div"),
        d.setAttribute("class", "giscus"),
        d.appendChild(g),
        l.insertAdjacentElement("afterend", d);
    window.addEventListener("message", function(a) {
        a.origin === m && (a = a.data,
        "object" === typeof a && a.giscus && (a.giscus.resizeHeight && (g.style.height = "".concat(a.giscus.resizeHeight, "px")),
        a.giscus.error && (a = a.giscus.error,
        a.includes("Bad credentials") || a.includes("Invalid state value") || a.includes("State has expired") ? null !== localStorage.getItem("giscus-session") ? (localStorage.removeItem("giscus-session"),
        console.warn("".concat(h(a), " Session has been cleared.")),
        delete c.session,
        a = "".concat(m, "/widget?").concat(new URLSearchParams(c)),
        g.src = a) : n || console.error("".concat(h(a), " No session is stored initially. ").concat("Please consider reporting this error at https://github.com/giscus/giscus/issues/new.")) : a.includes("Discussion not found") ? console.warn("[giscus] ".concat(a, ". A new discussion will be created if a comment/reaction is submitted.")) : a.includes("API rate limit exceeded") ? console.warn(h(a)) : console.error("".concat(h(a), " ").concat("Please consider reporting this error at https://github.com/giscus/giscus/issues/new.")))))
    })
}
)();