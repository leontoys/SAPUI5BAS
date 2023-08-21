sap.ui.define([
"sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.Component",{
        metadata:{},
        onInit:function(){
            //initialize base component 
            UIComponent.prototype.init.apply(this);
        },
        createContent:function(){
            //poin to App view container
            var oView = new sap.ui.view({
                viewName : "sap.ui.demo.view.App",
                type : "XML"
            });
            //get App container inside the view
            var oAppContainer = oView.byId("appContainer");
            //create view1
            //only after giving this id - "View1" - it started working
            var oView1 = new sap.ui.view("View1",{
                viewName : "sap.ui.demo.view.View1",
                type : "XML"
            });
            //create view2 - id was required for navigation
            var oView2 = new sap.ui.view("View2",{
                viewName : "sap.ui.demo.view.View2",
                type : "XML"
            });
            //add view to the app container
            //oAppContainer.addPage(oView1);
            oAppContainer.addPage(oView1);
            oAppContainer.addPage(oView2);

            return oView;
        },
        onBeforeRendering:function(){

        },
        onAfterRendering:function(){

        }
    });

});