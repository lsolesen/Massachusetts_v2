var massachusetts = massachusetts || {};

// Libs
@import "libs/jquery-1.11.1.min.js";
@import "libs/respond.min.js";
@import "libs/fastclick.js";
@import "libs/owl/owl.carousel.min.js";
@import "libs/_jquery.scrolllock.js";
@import "libs/instafeed.min.js";
@import "libs/layzr.js";
@import "libs/_jquery.autocompleter.shoporama-custom.js";

// Bootstrap
//@import "bootstrap/_affix.js";
//@import "bootstrap/_alert.js";
//@import "bootstrap/_button.js";
//@import "bootstrap/_carousel.js";
//@import "bootstrap/_collapse.js";
//@import "bootstrap/_dropdown.js";
//@import "bootstrap/_modal.js";
//@import "bootstrap/_popover.js";
//@import "bootstrap/_scrollspy.js";
//@import "bootstrap/_tab.js";
@import "bootstrap/_tooltip.js";
//@import "bootstrap/_transition.js";


// Components
@import "components/_massachusetts.general.js";
@import "components/_massachusetts.navigation.js";
@import "components/_massachusetts.instafeed.js";
@import "components/_massachusetts.brandslider.js";
@import "components/_massachusetts.cookiepolicy.js";
@import "components/_massachusetts.checkoutflow.js"
@import "components/_massachusetts.validator.js";
@import "components/_massachusetts.suggestivesearch.js";


// Doc ready
$(function(){

	// Inits
	massachusetts.general.init();
	massachusetts.brandslider.init();
	massachusetts.checkoutflow.init();
	massachusetts.validator.init();
	massachusetts.suggestivesearch.init();
	massachusetts.cookiepolicy.init();


	// To top scroller
	$('#totop').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'fast');
	});

	// Basket tooltip
	if(!('ontouchstart' in window)){
		$('#basket-toggler').tooltip();
	}


	// Basket toggler
	$('#basket-toggler').click(function(){
		if($('body').hasClass('toggled-basket')){
			$('body').removeClass('toggled-basket');
			$.scrollLock(false);
		} else {
			$('body').addClass('toggled-basket');
			$.scrollLock(true);
		}
	});

	// Carousels
	$('#product-page-image').owlCarousel({
		singleItem: true,
		lazyLoad : true
	});

	// Responsive video embeds
	$('iframe[src*="youtube.com"],iframe[src*="vimeo.com"]').each(function() {
        $(this).wrap( "<div class='vidcontainer-embed'></div>" );
    });

    //collapsable
    $('.subnav-expander').click(function(){
        $(this).toggleClass('expanded');
        $(this).parent('li').children('.sitenav-expanded').toggleClass('expanded');
    });


	function updateform() {
		$('#form').submit();
	}

	if($('#remindmeform').length > 0){
		var urlstring = window.location.search.substring(1);
		if(urlstring == "out_of_stock_signup=1"){
			$('#outofstock-signup-msg').append('<div class="alert alert-success" role="alert">Tak! Din e-mail er nu i vores system.</div>');
			$('#outofstock-signup-input').hide();
		}

	}


});

$(window).load(function () {
	massachusetts.navigation.init();
	// Lazy loader
	var layzr = new Layzr();
});

$(window).scroll(function() {

});