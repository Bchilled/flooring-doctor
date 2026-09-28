(function () {
  "use strict";

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Quote form → mailto
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector("#name") || {}).value || "";
      var phone = (form.querySelector("#phone") || {}).value || "";
      var email = (form.querySelector("#email") || {}).value || "";
      var city = (form.querySelector("#city") || {}).value || "";
      var service = (form.querySelector("#service") || {}).value || "";
      var message = (form.querySelector("#message") || {}).value || "";
      var timeline = (form.querySelector("#timeline") || {}).value || "";

      if (!name.trim() || !phone.trim()) {
        alert("Please include your name and phone number so we can reach you.");
        return;
      }

      var subject = "Quote request — Flooring Doctor — " + name.trim();
      var body = [
        "Hello Josh,",
        "",
        "I'd like a site visit / quote for flooring work.",
        "",
        "Name: " + name.trim(),
        "Phone: " + phone.trim(),
        "Email: " + (email.trim() || "(not provided)"),
        "City / area: " + (city.trim() || "(not provided)"),
        "Service interest: " + (service || "(not specified)"),
        "Preferred timing: " + (timeline || "(flexible)"),
        "",
        "Project details:",
        message.trim() || "(none provided)",
        "",
        "— Sent from the Flooring Doctor website quote form"
      ].join("\r\n");

      var mailto =
        "mailto:Yourflooringdoctor@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      var success = document.getElementById("form-success");
      if (success) success.classList.add("show");

      window.location.href = mailto;
    });
  }

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
