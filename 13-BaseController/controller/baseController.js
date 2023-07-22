sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oController) {
    'use strict';
    return oController.extend("home.controller.baseController",{
        oView,
        onInit:function(){
            this.oView = this.getView();
            this.sName = "admin";
        }
    });
});