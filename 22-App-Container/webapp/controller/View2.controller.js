sap.ui.define([
"sap/ui/demo/controller/BaseController"
], function(BaseController) {
    'use strict';
    return BaseController.extend("sap.ui.demo.controller.View2",{
         //go to next page
         goBack:function(){
            var oAppContainer = this.getView().getParent();
            debugger;
            oAppContainer.to("View1");
        },
        //hook methods
        onBeforeRendering:function(){
            debugger;
            //this.getView().byId("buttonHook").setVisible(false);
            var oView = this.getView();
        },
        onAfterRendering:function(){
            debugger;
            $("#View2--buttonHook").hide(function(){$(this).fadeIn(5000)});
        }       
    });
});