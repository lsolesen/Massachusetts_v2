massachusetts.newsletterpopup = massachusetts.newsletterpopup || function () {

    function init() {

        newsletterPopup();
        signupSubmit();
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

    function signupSubmit(){
        $('#newsletterpopup-submit').submit(function() {
            var action = $(this).attr('action');
            loading();
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    email: $('#newsletterpopup-email').val()
                },
                success: function(data){
                    formResult(data);
                    //$('#mailchimp-signup').hide();
                    console.log("Succes: ", data);
                    //you should first check if ga is set
                    if (typeof ga !== 'undefined') {
                        ga('send', 'event', 'NewsletterSignup', 'A new signup via websitepopup');
                     }
                    //check if _gaq is set too
                    if (typeof _gaq !== 'undefined') {
                        _gaq.push(['_trackEvent', 'NewsletterSignup', 'A new signup via websitepopup']);
                    }
                },
                error: function(data) {
                    formResult(data);
                    console.log("Error: ", data);
                }
            });
        return false;
        });
    }

    function newsletterPopup(){

        var numberOfDeactivates = 0;

        if (getNewsletterCookie('massachusettsNewsletterPopup') >= minimumViews){
            $('#newsletterpopup-reactivate').animate({bottom: "0px"},200);
        } else {
            $('#newsletterpopup').delay(popupDelay).animate({bottom: "0px"},1000);
        }

        $('#newsletterpopup-deactivate').click(function(){
            $('#newsletterpopup').animate({bottom: "-600px"},500,function(){
                $('#newsletterpopup-reactivate').animate({bottom: "0px"},200);
            });
            numberOfDeactivates = parseInt(getNewsletterCookie('massachusettsNewsletterPopup'));
            numberOfDeactivates++;
            setNewsletterCookie('massachusettsNewsletterPopup', numberOfDeactivates);
        });

        $('#newsletterpopup-reactivate').click(function(){
            $(this).animate({bottom: "-60px"},200,function(){
                $('#newsletterpopup').animate({bottom: "0px"},500);
            });
        });

    };

    return {
        init:init
    };

}();