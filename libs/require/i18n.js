/*
RequireJS i18n 1.0.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
Available via the MIT or new BSD license.
see: http://github.com/jrburke/requirejs for details
*/
(function () {
    function n(a, b, k, d, c, g) { b[a] && (k.push(a), (b[a] === !0 || b[a] === 1) && d.push(c + a + "/" + g)) } function o(a, b, k, d, c) { b = d + b + "/" + c; require._fileExists(a.toUrl(b)) && k.push(b) } var q = /(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/, r = {}; define({ version: "1.0.0", load: function (a, b, k, d) {
        var d = d || {}, c = q.exec(a), g = c[1], l = c[4], i = c[5], m = l.split("-"), e = [], p = {}, h, j, f = ""; c[5] ? (g = c[1], a = g + i) : (i = c[4], l = d.locale || (d.locale = typeof navigator === "undefined" ? "root" : (navigator.language || navigator.userLanguage || "root").toLowerCase()),
m = l.split("-")); if (d.isBuild) { e.push(a); o(b, "root", e, g, i); for (h = 0; j = m[h]; h++) f += (f ? "-" : "") + j, o(b, f, e, g, i); b(e, function () { k() }) } else b([a], function (a) { var c = []; n("root", a, c, e, g, i); for (h = 0; j = m[h]; h++) f += (f ? "-" : "") + j, n(f, a, c, e, g, i); b(e, function () { var d, e; for (d = c.length - 1; d > -1 && (j = c[d]); d--) { e = a[j]; if (e === !0 || e === 1) e = b(g + j + "/" + i); var h = p, f = void 0; for (f in e) !(f in r) && !(f in h) && (h[f] = e[f]) } k(p) }) })
    } 
    })
})();