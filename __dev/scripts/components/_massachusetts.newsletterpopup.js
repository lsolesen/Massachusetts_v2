massachusetts.newsletterpopup = massachusetts.newsletterpopup || function () {

    function init() {

        newsletterPopup();

    }

    // Cookie funtion
    function setNewsletterCookie(key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (CookieLifeTime*24*60*60*1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }

    function getNewsletterCookie(key) {
      var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
      return keyValue ? keyValue[2] : null;
    }

    function newsletterPopup(){

        if (!getNewsletterCookie('massachusettsNewsletterPopup')){
            $('#newsletterpopup').delay(popupDelay).animate({bottom: "0px"},1000);
        } else {
            $('#newsletterpopup-reactivate').animate({bottom: "0px"},200);
        }

        $('#newsletterpopup-deactivate').click(function(){
            $('#newsletterpopup').animate({bottom: "-600px"},500,function(){
                $('#newsletterpopup-reactivate').animate({bottom: "0px"},200);
            });
            setNewsletterCookie('massachusettsNewsletterPopup','Yes');
            //console.log('cookie sat til ' + CookieLifeTime + ' dage')
        });

        $('#newsletterpopup-reactivate').click(function(){
            $(this).animate({bottom: "-60px"},200,function(){
                $('#newsletterpopup').animate({bottom: "0px"},500);
            });
        });

    };

    function signupClick(){
        //you should first check if ga is set
        if (typeof ga !== 'undefined') {
            ga('send', 'event', 'NewsletterSignup', 'A new signup via websitepopup');
         }
        //check if _gaq is set too
        if (typeof _gaq !== 'undefined') {
            _gaq.push(['_trackEvent', 'NewsletterSignup', 'A new signup via websitepopup']);
        }
    }

    return {
        init:init
    };

}();





