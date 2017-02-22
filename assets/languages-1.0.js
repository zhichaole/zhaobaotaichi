//things that should go in SETTINGS -> SEO -> Header Code
/*
langs = {    //must be in lowercase
    'index': 'en', 
    'home1': 'zh'
};
menuSelector = '#nav';
*/

function hideMenus() {
    lang = language.toLowerCase();
    console.log('zz LANG get: ' + lang);

    currentLang = null;
    menus = jQuery(menuSelector + ' ul li').each(function(){
        menu = jQuery(this);
        a = menu.children('a');
        console.log('zz menu: ' + a);
		
		var page_url = a.attr('href');
		console.log('zz page_url: ' + page_url);
		
        span = a.children('span');
        if (span.length == 0) text = a.html();
        else text = span.html();

        text = text.toLowerCase().trim();

        console.log('zz text: ' + text);

        if (page_url != null && page_url.charAt(0) == '/') {
            if (page_url.length == 1) {
				currentLang = 'en';
			}
			else if ((page_url.charAt(1) >= 'a' && page_url.charAt(1) <= 'z') ||
				(page_url.charAt(1) >= 'A' && page_url.charAt(1) <= 'Z')) {
				currentLang = 'en';
			} else {
			
				currentLang = 'zh';
			}

            console.log('zz currentLang: ' + currentLang);
            /*if (currentLang == lang) { 
                //if this is the first page of this language, we set the logo to go to this page url
                jQuery('.wsite-logo a').attr('href', a.attr('href'));
            }*/
        }
        show = currentLang == lang;

        console.log('zz show: ' + show);
        if (show) menu.show(); else menu.hide();
        console.log('MENU:' + text + ' - current lang: ' + currentLang + ' - in langs '+ langs[text] + ' - '+ (show ? 'SHOW' : 'HIDE'));
    });
}
