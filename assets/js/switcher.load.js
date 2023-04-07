/*
 * Smart Demo Switcher v1.5
 * http://www.smartplugins.info/plugin/javascript/smart-demo-switcher//
 * 
 * Copyright 2008 - 2014 Milan Petrovic (email: milan@gdragon.info)
 *
 * http://www.dev4press.com
 * http://www.millan.rs
 *
 */

var smartDemoSwitcherObj;

;(function ($, window, document, undefined) {
    smartDemoSwitcher.Loader = smartDemoSwitcher.Load.extend({
		
		
		 display: {
     style: "light",
     location: "right",
	 initOpen: false,
     buttonContent: '<i class="fa fa-tint"></i>',
     formHeaderContent: '<h4>ORB</h4>'
   },
   
   
     stylesheets: {
     main: {
       columns: 2,
	   
       title: true,
	   boxShape: "circle",
       titleContent: "<h5>Styles</h5>",
       selector: "#demo-styles",
       default: 'assets/stylesheet/main.css',
       list: [
         {file: 'assets/stylesheet/main_blue.css', name: 'Blue', colors: ['#b66d4a']},
         {file: 'assets/stylesheet/main_green.css', name: 'Green', colors: ['#3c9474']}
       ]
     }
   },
   
   
        
    });

    $(document).ready(function() {
        smartDemoSwitcherObj = new smartDemoSwitcher.Core();
    });
})(jQuery, window, document);

