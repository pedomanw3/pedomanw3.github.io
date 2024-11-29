w3.includeHTML(pedomanw3Callback);

function pedomanw3Callback() {
  /* Topnav Object */
  w3.getHttpObject("/lib/displayObject/object-topnav.js", functionObjectTopnav);
  function functionObjectTopnav(topnav) {
    w3.displayObject("listTopnav", topnav);
  }
  /* Homepage Content Object */
  w3.getHttpObject("/lib/displayObject/object-content-homepage.js", functionObjectContentHomepage);
  function functionObjectContentHomepage(contentHomepage) {
    w3.displayObject("cardHomepageContent", contentHomepage);
  }

  /* Homepage Content Callback */
  let heightCardHomepage = document.getElementById("cardHomepageContent").offsetHeight,
    windowInnerHeight = window.innerHeight;

  let marginCardHomepage = (windowInnerHeight - heightCardHomepage) / 4 + "px";

  w3.addStyle("main", "padding-top", marginCardHomepage);
}