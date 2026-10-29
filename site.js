// Lays out the career trace: each span is positioned on a time axis
// from its data-start / data-end months. "now" resolves to the current month.
(function () {
  var list = document.querySelector(".spans");
  if (!list) return;
  document.documentElement.classList.add("js");

  function toMonths(v) {
    if (v === "now") {
      var d = new Date();
      return d.getFullYear() * 12 + d.getMonth() + 1;
    }
    var p = v.split("-");
    return parseInt(p[0], 10) * 12 + parseInt(p[1], 10) - 1;
  }

  var from = toMonths(list.dataset.from);
  var to = Math.max(toMonths(list.dataset.to), toMonths("now") + 3);
  var total = to - from;

  list.querySelectorAll(".span").forEach(function (el, i) {
    var s = toMonths(el.dataset.start);
    var e = toMonths(el.dataset.end);
    var left = ((s - from) / total) * 100;
    var width = Math.max(((e - s) / total) * 100, 1.2);
    el.style.setProperty("--left", left.toFixed(2) + "%");
    el.style.setProperty("--width", width.toFixed(2) + "%");
    el.style.setProperty("--i", i);
    if (left + width > 80) el.querySelector(".dur").classList.add("inside");
  });

  var axis = document.querySelector(".axis");
  if (axis) {
    var y0 = Math.floor(from / 12), y1 = Math.floor(to / 12);
    for (var y = y0; y <= y1; y += 2) {
      var t = document.createElement("span");
      t.textContent = y;
      t.style.left = (((y * 12 - from) / total) * 100).toFixed(2) + "%";
      axis.appendChild(t);
    }
  }
})();

// Copy-email button: only shown when the Clipboard API is available.
(function () {
  var btn = document.querySelector(".copy");
  if (!btn || !navigator.clipboard) return;
  var status = document.querySelector(".copied");
  btn.hidden = false;
  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(btn.dataset.copy).then(function () {
      btn.textContent = "Copied";
      status.textContent = "Email address copied to clipboard";
      setTimeout(function () { btn.textContent = "Copy email"; status.textContent = ""; }, 2000);
    }, function () {
      status.textContent = "Couldn't copy. Select the address and copy it manually.";
    });
  });
})();
