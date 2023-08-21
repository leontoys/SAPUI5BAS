sap.ui.define([
"sap/ui/demo/controller/BaseController"
], function(BaseController) {
    'use strict';
    return BaseController.extend("sap.ui.demo.controller.View1",{
        //go to next page
        onLogin:function(){
            debugger;
            var sUserId = this.getView().byId("inputUserId").getValue();
            var sPassword = this.getView().byId("inputPassword").getValue();
            if( sUserId == sPassword ){
                var oAppContainer = this.getView().getParent();
                oAppContainer.to("View2");              
            }

        }
    });
});