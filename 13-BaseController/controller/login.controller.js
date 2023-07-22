sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "home/controller/baseController"
], function(oController,oBaseController) {
    'use strict';
    return oBaseController.extend("home.controller.login",{
        //oView,
        onInit:function(){
            //this.oView.byId("inputUserName").setValue(this.sName);
        },
        onLogin : function(){
            console.log(oController);
            console.log(oBaseController);
            //alert("hello");
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