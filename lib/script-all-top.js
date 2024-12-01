window.onload = function(){readystateStatus();};

/* readyState code block */
function readystateStatus() {
  if (document.readyState === "uninitialized") {
    w3.includeHTML(pedomanw3Callback);
    hideContentLoading();
    showContentUninitialized();
  } else if (document.readyState === "loading") {
    w3.includeHTML(pedomanw3Callback);
    hideContentUninitialized();
    showContentLoading();
    setInterval(function () { location.reload(); }, 3000);
  } else if (document.readyState === "loaded") {
    w3.includeHTML(pedomanw3Callback);
  } else if (document.readyState === "interactive") {
    w3.includeHTML(pedomanw3Callback);
  } else if (document.readyState === "complete") {
    w3.includeHTML(pedomanw3Callback);
    hideContentLoading();
    hideBodyOverlay();
    showSemantic();
  }
}
function hideBodyOverlay() {
  w3.addClass("#bodyOverlay", "visually-hidden");
}
function showBodyOverlay() {
  w3.removeClass("#bodyOverlay", "visually-hidden");
}
function hideContentUninitialized() {
  w3.addClass("#textUninitialized", "visually-hidden");
  w3.addClass("#iconUninitialized", "visually-hidden");
}
function showContentUninitialized() {
  w3.removeClass("#textUninitialized", "visually-hidden");
  w3.removeClass("#iconUninitialized", "visually-hidden");
}
function hideContentLoading() {
  w3.addClass("#textLoading", "visually-hidden");
  w3.addClass("#spinnerLoading", "visually-hidden");
}
function showContentLoading() {
  w3.removeClass("#textLoading", "visually-hidden");
  w3.removeClass("#spinnerLoading", "visually-hidden");
}
function hideSemantic() {
  w3.addClass("header", "opacity-0");
  w3.addClass("main", "opacity-0");
  w3.addClass("footer", "opacity-0");
}
function showSemantic() {
  w3.removeClass("header", "opacity-0");
  w3.removeClass("main", "opacity-0");
  w3.removeClass("footer", "opacity-0");
}