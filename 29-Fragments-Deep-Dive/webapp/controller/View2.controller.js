sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/m/MessageToast",
"sap/ui/model/Filter",
"sap/ui/model/FilterOperator"
], function(Controller,MessageToast,Filter,FilterOperator) {
    'use strict';
    return Controller.extend("sap.ui.demo.controller.View2",{
        myField:null,
        oPopupCities:null,
        oPopupSuppliers:null,
        onInit:function(){
            this.oRouter = this.getOwnerComponent().getRouter();
            //Route Pattern Matched handler - why pass this?
            this.oRouter.attachRoutePatternMatched(this.showDetails,this);
        },
        onBack:function(){
            console.log(this.oRouter);
            this.oRouter.navTo("home");
        },
        showDetails:function(oEvent){
            //get the fruit index 
            console.log( oEvent.getParameter("arguments") );
            var index = oEvent.getParameter("arguments").fruitId;
            var sPath = "/fruits/"+index;
            //bind this address to the view
            this.getView().bindElement(sPath);
        },
        //F4 help
        onRequest:function(oEvent){
            //get the control clicked
            this.myField = oEvent.getSource();
            //create Fragment
            //this is from SDK - walk through
			/*this.pDialog ??= this.loadFragment({
				name: "sap.ui.demo.fragments.Popup"
			});
			this.pDialog.then((oDialog) => oDialog.open());*/
            //the below code is from tutorial
            //Create Popup object only if it is not created
            if(!this.oPopupCities){
            this.oPopupCities = new sap.ui.xmlfragment("citiesPopup","sap.ui.demo.fragments.Popup",this);
            //giving access to resources that View has access to Fragment
            this.getView().addDependent(this.oPopupCities);
            this.oPopupCities.setTitle("Cities");
            this.oPopupCities.bindAggregation("items",{
                path : '/cities',
                template : new sap.m.StandardListItem({
                    title : "{city}",
                    description : "{country}"
                })
            });
        }       
            this.oPopupCities.open();
            
        },
        //after selecting
        onConfirm:function(oEvent){
            //console.log(oEvent.getSource().getId());
            if(oEvent.getSource().getId() == "suppliersPopup--idSelect"){
                //user can select multiple items, get all of them
                var aItems = oEvent.getParameter("selectedItems");
                var aFilter = [];
                //for each object we will create a filter object
                for (let index = 0; index < aItems.length; index++) {
                    const element = aItems[index];
                    aFilter.push(new Filter("City",FilterOperator.EQ,element.getIntro()));
                }
                // create a main filter
                var oFilter = new Filter({
                    filters : aFilter,
                    and : false
                });
                //apply the filter
                this.getView().byId("idSuppliers").getBinding("items").filter(oFilter);
            }
            else{
            //get the selected item
            var oSelectedItem = oEvent.getParameter("selectedItem");
            //this will have the field which was pressed
            this.myField.setValue(oSelectedItem.getTitle());
            }
        },
        //on filtering
        onFilter:function(oEvent){
            if(!this.oPopupSuppliers){
                //give id to pop up
                this.oPopupSuppliers = new sap.ui.xmlfragment("suppliersPopup","sap.ui.demo.fragments.Popup",this);
                //giving access to resources that View has access to Fragment
                this.getView().addDependent(this.oPopupSuppliers);
                //To read the title from i18n
                var oResourceModel = this.getOwnerComponent().getModel("i18n");
                var sTitle = oResourceModel.getResourceBundle().getText("XTIT_SUPPLIERS");
                this.oPopupSuppliers.setTitle(sTitle);
                this.oPopupSuppliers.setMultiSelect(true);
                this.oPopupSuppliers.bindAggregation("items",{
                    path : '/suppliers',
                    template : new sap.m.ObjectListItem({
                        title : "{CompanyName}",
                        intro: "{City}"
                    })
                });
            }       
                this.oPopupSuppliers.open();
        }
    });
});