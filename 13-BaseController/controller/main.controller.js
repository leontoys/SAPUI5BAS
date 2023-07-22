sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oController) {
    'use strict';
    return oController.extend("home.controller.main",{
        onClick : function(){
            var oInput = this.getView().byId("inputName");
            var sInput = oInput.getValue();
            alert(sInput);
        }
    });
    
});