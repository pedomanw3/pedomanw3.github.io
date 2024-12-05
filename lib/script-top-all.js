/* Event load readyState */
window.addEventListener('load', ReadyState);
function ReadyState() {
  if (document.readyState === "loaded" || 
    document.readyState === "interactive" || document.readyState === "complete") {
    w3.addClass("#bodyOverlay", "visually-hidden");
    w3.addClass("#loadingCardBody", "opacity-0");
    w3.removeClass("header", "opacity-0");
    w3.removeClass("main", "opacity-0");
    w3.removeClass("footer", "opacity-0");
  }
}