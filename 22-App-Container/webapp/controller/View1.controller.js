sap.ui.define([
"sap/ui/demo/controller/BaseController"
], function(BaseController) {
    'use strict';
    return BaseController.extend("sap.ui.demo.controller.View1",{
        //go to next page
        goNext:function(){
            var oAppContainer = this.getView().getParent();
            debugger;
            oAppContainer.to("View2");
        }
    });
});