sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oControl) {
    'use strict';
    return oControl.extend("sap.ui.demo.controller.baseController",{
        onInit:function(){
            //this is not called - I don't know why
            //console.log("base controller loaded");
        }
    });
});