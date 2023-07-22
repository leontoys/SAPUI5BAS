sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oControler) {
    'use strict';

    return oControler.extend("home.controller.main",{

        onClick:function(){
            //alert("on click is called");
            var oView = this.getView();
            var oInput = oView.byId("inputName");
            alert(oInput.getValue());
        },

        enableButton:function(){
            //get button object
            var oView = this.getView();
            var oButton = oView.byId("buttonClick");

            //subscribe press event dynamically
            oButton.attachPress(this.onClick);
        }

    });
    
});