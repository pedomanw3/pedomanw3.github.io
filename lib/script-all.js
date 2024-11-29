window.addEventListener("load", readystateStatus);

function readystateStatus() {
  if (document.readyState === "uninitialized") {
    readystateUninitialized();
  } else if (document.readyState === "loading" || document.readyState === "loaded" || document.readyState === "interactive") {
    readystateLoading();
  } else if (document.readyState === "complete") {
    w3.includeHTML(pedomanw3Callback);
    if(document.getElementsByTagName("body")[0].classList.contains("homepage")) {
      homepageContent();
    }
    readystateComplete();
  }
}

/* w3 Callback */
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
}

function readystateUninitialized() {
  w3.removeClass("#bodyLoad", "visually-hidden");
  w3.removeClass("#textUninitialized", "visually-hidden");
  w3.removeClass("#iconUninitialized", "visually-hidden");
  location.reload();
}

function readystateLoading() {
  w3.removeClass("#textLoading", "visually-hidden");
  w3.removeClass("#spinnerLoading", "visually-hidden");
  location.reload();
}

function readystateComplete() {
  w3.removeClass("header", "visually-hidden");
  w3.removeClass("main", "visually-hidden");
  w3.removeClass("footer", "visually-hidden");
}