window.addEventListener("load", readystateStatus);

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
  let heightHeader = document.getElementsByTagName("header")[0].offsetHeight,
    heightFooter = document.getElementsByTagName("footer")[0].offsetHeight,
    heightCardHomepage = document.getElementById("cardHomepageContent").offsetHeight,
    windowInnerHeight = window.innerHeight;

  let margintopCardHomepage = (windowInnerHeight - (2 * heightHeader) - heightFooter - heightCardHomepage) / 3.2 + "px";

  var declaration = document.styleSheets[1].cssRules[1].cssRules[0].style;
  declaration.setProperty("margin-top", margintopCardHomepage);
}

function readystateStatus() {
  if (document.readyState === "uninitialized") {    
    readystateUninitialized();
  } else if (document.readyState === "loading" || document.readyState === "loaded" || document.readyState === "interactive") {
    readystateLoading();
  } else if (document.readyState === "complete") {
    w3.includeHTML(pedomanw3Callback);
    readystateComplete();
  }
}

function readystateUninitialized() {
  w3.removeClass("#bodyLoad", "visually-hidden");
  w3.removeClass("#textUninitialized", "visually-hidden");
  w3.removeClass("#iconUninitialized", "visually-hidden");
}

function readystateLoading() {
  w3.removeClass("#textLoading", "visually-hidden");
  w3.removeClass("#spinnerLoading", "visually-hidden");
}

function readystateComplete() {
  w3.removeClass("footer", "visually-hidden");
  w3.removeClass("main", "visually-hidden");
  w3.removeClass("header", "visually-hidden");
}