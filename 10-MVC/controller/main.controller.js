sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oController) {

    return oController.extend("home.controller.main",{

        clickMe:function(){
            alert("Hello says Controller");
        }

    });  
});