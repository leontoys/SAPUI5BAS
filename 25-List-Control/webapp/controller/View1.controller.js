sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("sap.ui.demo.controller.View1",{
        onInit:function(){
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        onNext:function(){
            debugger;
            console.log("onNext");
            console.log(this.oRouter);
            this.oRouter.navTo("next");
        },
        onSearch:function(oEvent){
            //get the search input
            var sQuery = oEvent.getParameter("query");
            //get the items binding of the List
            var items = this.getView().byId("idList").getBinding("items");
            //create a filter object
            var oFilter = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,sQuery);
            //filter the items binding
            items.filter(oFilter);
        }
    });
});