sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("sap.ui.demo.controller.View2",{
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
        }
    });
});