sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oControler) {
    'use strict';

    return oControler.extend("home.controller.main",{

        onClick:function(){
            var oView = this.getView();
            var oInput = oView.byId("inputName");
            alert(oInput.getValue());
        }

    });
    
});