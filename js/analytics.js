/* Private GoatCounter stats. Nothing is shown on the public site.
   Dashboard (login only): https://lepecl.goatcounter.com
   Change SITE if you picked a different GoatCounter code. */
(function () {
  var SITE = "lepecl";

  function eventName(a) {
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#") return null;
    var url;
    try { url = new URL(href, location.href); } catch (e) { return null; }
    if (/\.pdf$/i.test(url.pathname)) {
      return "download:" + decodeURIComponent(url.pathname.split("/").pop());
    }
    if (url.protocol === "mailto:") return "click:email";
    if ((url.protocol === "http:" || url.protocol === "https:") && url.origin !== location.origin) {
      return "click:" + url.hostname.replace(/^www\./, "");
    }
    return null;
  }

  document.querySelectorAll("a[href]").forEach(function (a) {
    if (a.hasAttribute("data-goatcounter-click")) return;
    var name = eventName(a);
    if (!name) return;
    a.setAttribute("data-goatcounter-click", name);
    a.setAttribute("data-goatcounter-title", (a.textContent || "").trim().slice(0, 120));
  });

  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    if (btn.hasAttribute("data-goatcounter-click")) return;
    btn.setAttribute("data-goatcounter-click", "copy-citation");
    btn.setAttribute("data-goatcounter-title", "Copy citation");
  });

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + SITE + ".goatcounter.com/count");
  document.head.appendChild(s);
})();
