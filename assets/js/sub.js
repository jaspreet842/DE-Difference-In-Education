// Add some space at the top to accomodate fixed menu
accountForFixedMenu(0.5);
// Enable smooth scroll when navigating to various sections
sectionSmoothScroll();
// Change nav from transparent to white on scroll
navDynamicStyles(100);
// Add fade effect on page scroll to feature image and highlight main text
fadeFeatureImgOnScroll(250, 0.4);
// Soft transition effect to all portfolio thumbs
jQuery('.project-thumb').addClass("soft-transition");

// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
/*-- Parallax Effect --*/
// Target the background element to which effect will be applied
var jumbotron = document.querySelector('.jumbotron');
var container = jumbotron.children[0];
var parallaxBg = container.children[0];

function parallax(){
 var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
  parallaxBg.style.top = scrolltop * 0.2 + 'px'; // move parallaxBg at 20% of scroll rate
}
 
// Attach the effect to the window scroll
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallax); // call parallax() on next available screen paint
}, false) 

/** -----------------------------------------------------------------
* Function Definitions
-------------------------------------------------------------------*/
// Add an event listener to any element
/*
 * When calling this function, make sure to enclose the element and listner
 * tags in quotes - i.e. addListener(myElement, "onload", doThisFunction) 
 */
function addListener(elementTag, listener, func) {

  var element = document.querySelectorAll(elementTag);

  for (i = 0; i < element.length; i++) {
    element[i].addEventListener(listener, func, false);
  }
}

function accountForFixedMenu(factor) { // factor from 0 - 1 (% to offset)
  var jumbotron = document.querySelector(".jumbotron");
  var navbar = document.querySelector(".navbar");

  // Add navbar height + percentage of jumbotron' bottom padding
  var targetTopPadding = Number(navbar.offsetHeight) +
    Number($(jumbotron).css("padding-bottom").replace("px", "") * factor);

  // Set top padding of jumbotron
  jumbotron.style.paddingTop = targetTopPadding + "px";
}

function navDynamicStyles(buffer) {
  $(window).scroll(function(i) {
    var scrollDistance = $(window).scrollTop(); // How far window id from top
    // Reference the navbar elements
    var navbar = jQuery('.navbar');
    var brandImage = jQuery('.navbar-brand > img');
    var siteTitle = jQuery('.navbar-brand p');
    var navLinks = jQuery('.navbar-default .navbar-nav>li>a');
    var navDropMenu = jQuery('.navbar-default .navbar-collapse, .navbar-default .navbar-form');

    /* -----------------------------
    --	 Scrolled Nav Settings		--
    ------------------------------*/
    // If the window is scrolled beyond the buffer
    if (scrollDistance > buffer) {
      navbar.css({
        backgroundColor: "#fff",
        background: "linear-gradient(#fff, #f8f8f8)",
        background: "-webkit-linear-gradient(#fff, #f8f8f8)",
        background: "-o-linear-gradient(#fff, #f8f8f8)",
        background: "-moz-linear-gradient(#fff, #f8f8f8)"
      });

      brandImage.css({
        background: "none",
        boxShadow: "none"
      });

      siteTitle.css({
        color: "#777"
      });

      siteTitle.hover(
        function() {
          jQuery(this).css("color", "#aaa");
        },
        function() {
          jQuery(this).css("color", "#777");
        });

      navLinks.css({
        color: "#777"
      });

      navLinks.hover(
        function() {
          jQuery(this).css("color", "#aaa");
        },
        function() {
          jQuery(this).css("color", "#777");
        });

      navDropMenu.css({
        borderColor: "#e7e7e7"
      });

    } // END if
    /* -----------------------------
    --	Transparent Nav Settings  --
    ------------------------------*/
    // If the window is scrolled to the top of the page
    else if (scrollDistance < buffer) {
      navbar.css({
        background: "none"
      });

      brandImage.css({
        backgroundColor: "#ccc",
        boxShadow: "0 0 3px #ccc"
      });

      siteTitle.css({
        color: "#ccc"
      });

      siteTitle.hover(
        function() {
          jQuery(this).css("color", "#eee");
        },
        function() {
          jQuery(this).css("color", "#ccc");
        });

      navLinks.css({
        color: "#ccc"
      });

      navLinks.hover(
        function() {
          jQuery(this).css("color", "#eee");
        },
        function() {
          jQuery(this).css("color", "#ccc");
        });

      navDropMenu.css({
        borderColor: "#444"
      });

    } // END else if
  });
}

function fadeFeatureImgOnScroll(scrollDistance, parallaxFactor) {
  $(window).scroll(function(i) {
    // Scroll distance from window top
    var scrollVar = $(window).scrollTop();
    // The featured image
    var profileImage = $('.jumbotron .container').children('.profile-img');
    // The heading Text
    var headText = $('.jumbotron .container h1');
    var subHeadText = $('.jumbotron .container h4');

    profileImage.css({
      'top': parallaxFactor * scrollVar,
      'opacity': (scrollDistance - scrollVar) / 100
    });

    // Add soft transition to head text
    headText.addClass('soft-transition');

    // If the window is scrolled beyond the scrollDistance
    // and featured image is invisible
    if (scrollVar > scrollDistance) {
      // Add a text hightlight to the head text
      headText.css({
        textShadow: "0 0 20px #ccc"
      });
      subHeadText.css({
        textShadow: "0 0 20px #ccc"
      });
    } else {
      // Otherwise, remove the effect
      headText.css({
        textShadow: "none"
      });
      subHeadText.css({
        textShadow: "none"
      });
    }
  });
}

function sectionSmoothScroll() {
  jQuery(".navbar a").click(function() {

    var screenWidth = $(window).width();

    // If mobile menu is visible
    if (screenWidth < 768) {
      // Toggle drop down menu
      $('.btn-navbar').click(); //bootstrap 2.x
      $('.navbar-toggle').click() //bootstrap 3.x
    }

    // Store the link's href attribute
    var href = jQuery(this).attr("href");

    // Store the added padding to account for fixed nav
    var jumbotron = document.querySelector(".jumbotron");
    var extraPadding = Number($(jumbotron).css("padding-bottom").replace("px", ""));

    //console.log(extraPadding);

    // Animate the window to the top of the referenced element minus extra padding
    $('html, body').animate({
      scrollTop: (jQuery(href).offset().top) - extraPadding
    }, 500);
    return false;
  });
}

function loadModal(title, thumb, body, launchLink) {
  // Reference modal elements
	var modalTitle = document.querySelector(".modal-title");
	var modalThumb = document.querySelector(".modal-thumb img");
	var modalBody = document.querySelector(".modal-body");
	var modalFooterLink = document.querySelector(".modal-footer a");

  // Dynamically fill content of modal with function call
  modalTitle.innerHTML = title;
  modalThumb.src = "img/portfolio-screen-shots/" + thumb;
  modalBody.innerHTML = body;
  modalFooterLink.setAttribute("href", launchLink);
}
