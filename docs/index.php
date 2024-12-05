<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="id-ID">

<head>
  <title>Pedoman.w3</title>
  <?php include "include/script-top.php"; ?>
  <meta name="description" content="Pedoman World Wide Web Gratis">
  <meta name="keywords" content="HTML, Tag HTML, Atribut HTML, CSS, JavaScript">
  <?php include "include/meta.php"; ?>
  <?php include "include/link.php"; ?>
  <script title="JS Bagian Atas Beranda" type="text/javascript">
    var homepagecardObject = {
      "Inputlist": [{
          "JudulKartu": "HTML",
          "TeksKartu": "Hypertext Markup Language",
          "NilaiHref": "/html/index.html"
        },
        {
          "JudulKartu": "CSS",
          "TeksKartu": "Cascading Style Sheets",
          "NilaiHref": "/css/index.html"
        },
        {
          "JudulKartu": "JS",
          "TeksKartu": "JavaScript",
          "NilaiHref": "js/index.js"
        }
      ]
    }
  </script>
  <style title="Stylesheet Homepage" type="text/css">
    @media (min-width: 576px) and (max-width: 767px) {
      .homepage-content {
        width: 75%;
      }

      .bg-img-web-development {
        width: 300px;
      }
    }

    @media (min-width: 768px) and (max-width: 991px) {
      .homepage-content {
        width: 50%;
      }

      .bg-img-web-development {
        width: 320px;
      }
    }

    @media (min-width: 992px) {
      .homepage-content {
        width: 353px;
      }

      .bg-img-web-development {
        width: 380px;
      }
    }
  </style>
</head>

<body class="homepage">
  <?php include "include/header.php"; ?>
  <main class="opacity-0 transition-opacity transition-duration-03 transition-delay-01">
    <div class="container-fluid container-lg py-3 px-md-4">
      <h1 class="pt-1 pb-3 mt-1 mb-4 display-5 text-center">Referensi Web Development</h1>
      <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div class="homepage-content text-center" id="homepageCardGroup">
          <div class="card mb-3" w3-repeat="Inputlist">
            <div class="row g-0">
              <div class="col-sm-4 svg-card-container"></div>
              <div class="col-sm-8">
                <div class="card-body">
                  <h2 class="card-title h5">{{JudulKartu}}</h2>
                  <p class="card-text">{{TeksKartu}}</p>
                  <a class="card-link btn btn-primary" href="{{NilaiHref}}" hreflang="id" type="text/html">Mulai</a>
                </div>
              </div>
            </div>
          </div>
          <div title="Daftar SVG Card">
            <svg class="card-img-top" id="fahtml5" width="80" height="80" fill="#FF8833" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
            </svg>
            <svg class="card-img-top" id="facss" width="80" height="80" fill="#4997D0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M376.3 32L0 32 0 408.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21l304.6 0c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7l0-304.6c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21zM332.4 431.4c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L351.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L250.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4.1 27.4-12.3 35.7s-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5l0-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9l0 6-33.1 0 0-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4l0 65.5c0 13.7 4.8 20.6 14.4 20.8c4.5 0 7.9-1.6 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6l0-4.9 33.1 0 0 5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z" />
            </svg>
            <svg class="card-img-top" id="fajs" width="80" height="80" fill="#FBE870" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
            </svg>
          </div>
        </div>
        <div class="ms-lg-5 mb-lg-5">
          <img class="bg-img-web-development" width="280px" src="/img/bgimg-body.webp" alt="Background Web Development">
        </div>
      </div>
    </div>
  </main>
  <?php include "include/footer.php"; ?>
  <?php include "include/overlay.php"; ?>
  <?php include "include/script-bottom.php"; ?>
  <script title="JS Bagian Bawah Beranda" type="text/javascript">
    w3.displayObject("homepageCardGroup", homepagecardObject);

    function responsiveHomepageCard() {
      if (window.matchMedia("(min-width: 992px)").matches) {
        w3.removeClass("main > div:nth-of-type(1)", "px-md-4");
      } else {
        w3.addClass("main > div:nth-of-type(1)", "px-md-4");
      }
    }
    const svgCardContainer = document.getElementsByClassName("svg-card-container"),
      fahtml5 = document.getElementById("fahtml5"),
      facss = document.getElementById("facss"),
      fajs = document.getElementById("fajs");
    svgCardContainer[0].insertAdjacentElement("afterbegin", fahtml5);
    svgCardContainer[1].insertAdjacentElement("afterbegin", facss);
    svgCardContainer[2].insertAdjacentElement("afterbegin", fajs);
  </script>
</body>

</html>