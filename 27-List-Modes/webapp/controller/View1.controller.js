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
        },
        onItemPress:function(oEvent){
            debugger;
            //this.getOwnerComponent().getRouter().navTo("next");
            var fruitId = oEvent.getParameter("listItem").getBindingContextPath().split("/")[2];
            this.getOwnerComponent().getRouter().navTo("next",{
                fruitId : fruitId
            })
            //after the page will open with the pattern - /fruit/5 or so
        },
        onDelete:function(oEvent){
            //get list item
            var oItem = oEvent.getParameter("listItem");
            //get path
            var sPath = oItem.getBindingContextPath();
            //get model
            var oModel = this.getOwnerComponent().getModel();
            //get Data
            var aFruits = oModel.getData().fruits;
            //get Index
            var sIndex = sPath.split("/")[2];
            //remove the item from the arry
            aFruits.splice(sIndex,1);
            //delete
            oModel.setData("fruits",aFruits);
            //we can also use 
            //oModel.getProperty("/fruits");
        }
    });
});