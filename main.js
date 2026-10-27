/* Amit Brounstine — portfolio interactions */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header hairline + shadow once scrolled */
  var head = document.getElementById("site-head");
  function onScroll() {
    if (head) head.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  var toggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll reveals */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Wolt Watch — live embed on demand */
  var launch = document.getElementById("wolt-launch");
  var embed = document.getElementById("wolt-embed");
  if (launch && embed) {
    launch.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.src = "https://wolt-watch.pages.dev/";
      frame.title = "Wolt Watch — live order-status board";
      frame.loading = "lazy";
      frame.setAttribute("referrerpolicy", "no-referrer");
      embed.appendChild(frame);
      embed.hidden = false;
      launch.hidden = true;
      launch.setAttribute("aria-expanded", "true");
    });
  }

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
