/**
 * This Script creates the custom navigation bar and the disclaimer.
 * Adds scrolling functionalities and active links to navbar.
 * Adds drawer and favicon.
 * */
$(document).ready(function () {
  const url_1 = "omeka.unibe.ch/s/oedk";
  const url_2 = "omeka.unibe.ch/s/lpda";
  const url_3 = "https://www.publics-arts.ch/s/oedk";
  const url_4 = "https://www.publics-arts.ch/s/lpda";

  if (
    window.location.href.includes(url_1) ||
    window.location.href.includes(url_3)
  ) {
    //Custom Navbar DE
    createNav(
      '  <div class="wrapHead">' +
        '  <nav id="topNav">' +
        '  	<ul class="nav_list" style="left:0;"><li class="home" style="float:left;margin-top: 0px"><a class="scroll" href="/s/oedk/page/welcome"><img src ="https://www.publics-arts.ch/themes/oedk-lpda-theme/asset/img/oedk_logo.svg" alt="oedk_lpda" style="height: 150px; float:left;"/><h1 id="brand" >Öffentlichkeiten der Kunst</h1></a></li></ul>' +
        '  <ul class="nav_list" style="position: fixed; top: 0; right:0;width: fit-content">' +
        '  	<li id="upload-doc"><a  class="scroll" href="/s/oedk/page/upload-doc">BEITRAG HOCHLADEN</a></li>' +
        '  	<li id="posts"><a  class="scroll" href="/s/oedk/page/posts">BEITRÄGE</a></li>' +
        '       <li id="map"><a class="scroll" href="https://dhbern.github.io/swiss-sculptures/" target="_blank">KARTE</a></li>' +
        '  	<!--li><a class="scroll" href="/s/oedk/page/visualizations">Visualisierungen</a></li>' +
        '  	<li><a class="scroll" href="/s/oedk/page/virtual-exhibition">Virtuelle Austellung</a></li-->' +
        '  	<li id="blog-1"><a  class="scroll" href="/s/oedk/page/blog-1">BLOG</a></li-->' +
        '  	<li id="about"><a  class="scroll" href="/s/oedk/page/about">ÜBER UNS</a></li>' +
        '  	<li><a class="scroll" id="lang" href="https://www.publics-arts.ch/s/lpda/page/welcome">FR</a></li>' +
        "<li>" +
        '<button id="search-oedk" type="button" class="search-toggle" aria-label="Toggle search" ' +
        " onclick=\"location.href='/s/oedk/search-oedk'\"></button></li>" +
        "  </ul>" +
        "  </nav>" +
        "" +
        '  <div id="drawer" style="display: none;">' +
        '  <div class="sidenav" id="sidenav">' +
        '  <ul class="nav_list">' +
        '  	<li><a class="closebtn" href="javascript:void(0)" onclick="closeNav()">&times;</a></li>' +
        '  	<li id="upload-doc"><a class="scroll" href="/s/oedk/page/upload-doc">BEITRAG HOCHLADEN</a></li>' +
        '  	<li id="posts"><a  class="scroll" href="/s/oedk/page/posts">BEITRÄGE</a></li>' +
        '  	<li  id="blog-1"><a class="scroll" href="/s/oedk/page/blog-1">BLOG</a></li-->' +
        '  	<li id="about" ><a  class="scroll" href="/s/oedk/page/about">ÜBER UNS</a></li>' +
        '  	<li><a class="scroll" id="lang" href="https://www.publics-arts.ch/s/lpda/page/welcome">FR</a></li>' +
        "<li>" +
        '<button id="search-oedk" type="button" class="search-toggle" aria-label="Toggle search" style="color: var(--orange)" ' +
        " onclick=\"location.href='/s/oedk/search-oedk'\"></button></li>" +
        "  </ul>" +
        "  </div>" +
        '  <span class="home" id="home_button" style="float:left;"><a class="scroll" href="/s/oedk/page/welcome" style="color:var(--orange);background-color: transparent;font-size:larger;font-weight:bolder;"><img src = "https://www.publics-arts.ch/themes/oedk-lpda-theme/asset/img/oedk_logo.svg" alt="oedk_lpda" style="height: 50px"/></a></span> <span id="drawer_button" onclick="openNav()">☰</span></div>' +
        "  </div>"
    );

    // Custom disclaimer DE
    /*createDisclaimer(
      '<div id="overlay">' +
        '<div id="disclaimer_container">\n' +
        '<div class="headline">Diese Webseite verwendet Cookies und Dienste Dritter. Weitere Informationen erhalten Sie in der <a id="ToS" href="/s/oedk/page/about#tos">Datenschutzerklärung und den Nutzungsbedingungen</a>.</div>' +
        '<div id="accept_buttons"><button class="disclaimer_button" onclick="closeDisclaimer()">Akzeptieren</button></div>\n' +
        "</div></div>"
    );*/
  }
  if (
    window.location.href.includes(url_2) ||
    window.location.href.includes(url_4)
  ) {
    //Custom Navbar FR
    createNav(
      '  <div class="wrapHead">' +
        '  <nav id="topNav">' +
        '  	<ul class="nav_list" style="left:0;"><li class="home" style="float:left;margin-top: 0px"><a class="scroll" href="/s/lpda/page/welcome">' +
        '<img src = "https://www.publics-arts.ch/themes/oedk-lpda-theme/asset/img/oedk_logo.svg" alt="oedk_lpda" style="height: 150px;float:left;"/><h1 id="brand" >Les Publics des Arts</h1></a></li></ul>' +
        '  <ul class="nav_list" style="position: fixed; top: 0; right:0;width: fit-content">' +
        '  	<li id="upload-doc"><a  class="scroll" href="/s/lpda/page/upload-doc">CONTRIBUER</a></li>' +
        '  	<li id="posts"><a  class="scroll" href="/s/lpda/page/posts">TÉMOIGNAGES</a></li>' +
        '       <li id="map"><a class="scroll" href="https://dhbern.github.io/swiss-sculptures/" target="_blank">CARTE</a></li>' +
        '<li id="blog-1"><a  class="scroll" href="/s/oedk/page/blog-1">BLOG</a></li>' +
        '  	<li id="about"><a  class="scroll" href="/s/lpda/page/about">À PROPOS</a></li>' +
        '  	<li><a class="scroll" id="lang" href="https://www.publics-arts.ch/s/oedk/page/welcome">DE</a></li>' +
        "<li>" +
        '<button id="search-lpda" type="button" class="search-toggle" aria-label="Toggle search"' +
        " onclick=\"location.href='/s/lpda/search-lpda'\"></button></li>" +
        "  </ul>" +
        "  </nav>" +
        "" +
        '  <div id="drawer" style="display: none;">' +
        '  <div class="sidenav" id="sidenav">' +
        '  <ul class="nav_list">' +
        '  	<li><a class="closebtn" href="javascript:void(0)" onclick="closeNav()">&times;</a></li>' +
        '  	<li id="upload-doc"><a  class="scroll" href="/s/lpda/page/upload-doc">CONTRIBUER</a></li>' +
        '  	<li d="posts"><a i class="scroll" href="/s/lpda/page/posts">TÉMOIGNAGES</a></li>' +
        '  	<!--li><a class="scroll" href="/s/lpda/page/visualizations">Visualisations</a></li>' +
        '  	<li><a class="scroll" href="/s/lpda/page/virtual-exhibition">Exposition virtuelle</a></li-->' +
        '<li id="blog-1"><a  class="scroll" href="/s/oedk/page/blog-1">BLOG</a></li>' +
        '  	<li id="about"><a  class="scroll" href="/s/lpda/page/about">À PROPOS</a></li>' +
        '  	<li><a class="scroll" id="lang" href="https://www.publics-arts.ch/s/oedk/page/welcome">DE</a></li>' +
        "<li>" +
        '<button id="search-lpda" type="button" class="search-toggle" aria-label="Toggle search" style="color: var(--orange)"' +
        " onclick=\"location.href='/s/lpda/search-lpda'\"></button></li>" +
        "  </ul>" +
        "  </div>" +
        '  <span class="home" id="home_button" style="float:left;"><a class="scroll" href="/s/lpda/page/welcome" style="color:var(--orange);background-color: transparent;font-size:larger;font-weight:bolder;"><img src = "https://www.publics-arts.ch/themes/oedk-lpda-theme/asset/img/oedk_logo.svg" alt="oedk_lpda" style="height: 50px"/></a></span> <span id="drawer_button" onclick="openNav()">☰</span></div>' +
        "  </div>"
    );

    // Custom disclaimer FR
    /*createDisclaimer('<div id="overlay">'+
            '<div id="disclaimer_container">\n' +
            '<div class="headline">Ce site web utilise des cookies et des services de tiers. Pour plus d\'informations, veuillez consulter <a id="ToS" href="/s/lpda/page/about#tos">la déclaration de confidentialité et les conditions d\'utilisation</a>.</div>' +
            '<div id="accept_buttons"><button class="disclaimer_button" onclick="closeDisclaimer()">Accepter</button></div>\n' +
            '</div></div>'

        )*/
  }

  addFavicon();
  addScroll();
  addActiveClass(window.location.href);
  addLangLink(window.location.href);
});

/**
 * Converts a string of HTML representing any number of sibling elements into a DOM element.
 * @param {String} html - The string of HTML to convert.
 * @return {Element} - The resulting DOM element.
 */
function htmlToElements(html) {
  let template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}
/**
 * This function creates a new navigation bar element using the given HTML content.
 * Appends new header to content element of document.
 *
 * @param {string} html - The HTML content to use for creating the new navbar.
 */
function createNav(html) {
  header_rows = htmlToElements(html);
  content = document.getElementById("content");
  let header_new = document.createElement("header");
  header_new.classList.add("ök_header");
  header_new.appendChild(header_rows[1]);
  content.appendChild(header_new);
}

/**
 * Adds scrolling functionalites to nav bar.
 * Fixes drawer for item and media pages and mobile devices.
 */
function addScroll() {
  let header = document.getElementsByClassName("ök_header").item(0);
  header.setAttribute("style", "display: block;");

  let headerEl = $(".ök_header"),
    headerWrapEl = $(".wrapHead"),
    navEl = $("#topNav"),
    linkScroll = $(".scroll"),
    drawer = $("#drawer");

  // Add drawer navigation for "item" and "media" pages and for mobile devices
  if (
    (window.location.href.includes("item") ||
      window.location.href.includes("media") ||
      $(window).width() < 1400) &&
    !window.location.href.includes("item-set")
  ) {
    displayDrawer(headerEl, headerWrapEl, navEl, drawer);
  } else {
    // Add scroling functionalities
    let docEl = $(document);
    docEl.on("scroll", function () {
      if (docEl.scrollTop() > 50) {
        displayDrawer(headerEl, headerWrapEl, navEl, drawer);
      } else {
        headerEl.removeClass("fixed-to-top");
        headerWrapEl.removeClass("fixed-to-top");
        navEl.removeClass("fixed-to-top");
        navEl.attr("style", "display: block");
        drawer.attr("style", "display: none");
      }
    });
  }
}

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

/**
 * This function displays the navigation drawer by fixing the header, wrapper and nav elements to the top of the page,
 * hiding the nav element and displaying the drawer element.
 */
function displayDrawer(header, wrapper, nav, drawer) {
  // Add the 'fixed-to-top' class to the header, wrapper and nav elements to fix them to the top of the page.
  header.addClass("fixed-to-top");
  wrapper.addClass("fixed-to-top");
  nav.addClass("fixed-to-top");

  // Hide the nav element and display the drawer element.
  nav.attr("style", "display: none");
  drawer.attr("style", "display: block;");
}

function addActiveClass(url) {
  if (
    !url.includes("item?") &&
    !url.includes("#lg=") &&
    !url.includes("search-oedk?") &&
    !url.includes("search-lpda?") &&
    !url.includes("media") &&
    !url.includes("item-set")
  ) {
    a = $("#" + String(url).split("/").at(-1));
    a.addClass("active");
  }
  if (url.includes("blog")) {
    a = $("#blog-1");
    a.addClass("active");
  }
}

function addLangLink(url) {
  if (
    !url.includes("item") &&
    !url.includes("#lg=") &&
    !url.includes("search") &&
    !url.includes("media") &&
    !url.includes("blog") &&
    !url.includes("publications") &&
    !url.includes("videos")
  ) {
    lang_link = document.getElementById("lang").href;
    document.getElementById("lang").href =
      lang_link.split("/welcome")[0] + "/" + String(url).split("/").at(-1);
  }
}

function createDisclaimer(html) {
  if (!localStorage.alreadyClicked) {
    let disclaimer_rows = htmlToElements(html);
    let disclaimer_div = document.createElement("div");
    disclaimer_div.setAttribute("id", "disclaimer_container");
    content.appendChild(disclaimer_rows[0]);
  }
}

function closeDisclaimer() {
  banner = document.getElementById("disclaimer_container");
  banner.style.display = "none";
  localStorage.alreadyClicked = 1;
}

function addFavicon() {
  let link = document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "icon";
  link.href =
    "https://www.publics-arts.ch/themes/oedk-lpda-theme/asset/img/oedk_favicon.png";
  document.head.appendChild(link);
}
