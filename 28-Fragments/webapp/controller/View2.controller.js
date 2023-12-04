sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/m/MessageToast"
], function(Controller,MessageToast) {
    'use strict';
    return Controller.extend("sap.ui.demo.controller.View2",{
        myField:null,
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
            var oFragment = new sap.ui.xmlfragment("sap.ui.demo.fragments.Popup",this);
            //giving access to resources that View has access to Fragment
            this.getView().addDependent(oFragment);
            oFragment.setTitle("Cities");
            oFragment.bindAggregation("items",{
                path : '/cities',
                template : new sap.m.StandardListItem({
                    title : "{city}",
                    description : "{country}"
                })
            });
            oFragment.open();
            
        },
        onConfirm:function(oEvent){
            //get the selected item
            var oSelectedItem = oEvent.getParameter("selectedItem");
            //this will have the field which was pressed
            this.myField.setValue(oSelectedItem.getTitle());
        }
    });
});