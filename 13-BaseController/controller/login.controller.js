sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(oController) {
    'use strict';
    return oController.extend("home.controller.login",{
        oView,
        onInit:function(){
            this.oView = this.getView();
        },
        onLogin : function(){
            var sUserName = this.oView.byId("inputUserName").getValue();
            var sPassword = this.oView.byId("inputPassword").getValue();
            if(sUserName=="admin"&&sPassword=="admin"){
                document.write("Success");
            }
            else{
                alert("Incorrect Credetials");
            }
        }  
    });
});