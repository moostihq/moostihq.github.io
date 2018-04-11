/*
 * Smart Demo Switcher v2.0
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
    	cookies: {
    		active: true,
			  name: "mswitcher"
		  },
        display: {
        	formNotice: false,
		      style: "light",
		      location: "right",
			    initOpen: false,
          buttonContent: '<i class="fa-tint"></i>',
          buttonContentClose: '<i class="fa-tint"></i>',
		      formHeaderContent: '<h5>colors</h5>'
   		},
   		stylesheets: {
     		main: {
       			columns: 2,
			      boxShape: "circle",
            selector: "#main-style",
            default: 'assets/stylesheet/main_blue.css',
		       list: [
		         {file: 'assets/stylesheet/main_blue.css', name: 'Blue', colors: ['#1e5799']},
		         {file: 'assets/stylesheet/main_green.css', name: 'Green', colors: ['#79BD9A']},
		         {file: 'assets/stylesheet/main_purple.css', name: 'Purple', colors: ['#712a64']},
		         {file: 'assets/stylesheet/main_pink.css', name: 'Pink', colors: ['#ed4e6e']},
             {file: 'assets/stylesheet/main_old.css', name: 'Original', colors: ['#000000']},
		       ]
     		}
   		},
    });

    $(document).ready(function() {
        smartDemoSwitcherObj = new smartDemoSwitcher.Core();
    });
})(jQuery, window, document);
