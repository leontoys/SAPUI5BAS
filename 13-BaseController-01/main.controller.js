sap.ui.define([
"sap/ui/core/mvc/Controller",
"home/basecontroller"
], function(Controller,BaseController) {
    'use strict';
    return BaseController.extend("home.main",{
        onInit:function(){
            //alert("hello from Main controller");
        }
    });
});