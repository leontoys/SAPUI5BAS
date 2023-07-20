sap.ui.define([
"sap/ui/core/mvc/Controller" //load dependencies
], function(oController) {   //that gives us the controller object
    'use strict'; 
    return oController.extend("home.controller.main",{ //now inherit and extend the standard controller object
                              //and return its address to the view

         
         //now we can create functions and then call these functions in the view
        onClick : function(){
            alert("Hello"); //we have to call this function in the view using controller object
        }                  
    });
});