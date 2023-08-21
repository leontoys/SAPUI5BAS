sap.ui.define([
 "sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.Component",{
     metadata:{},
     onInit:function(){
        //initialise base component
        UIComponent.prototype.init.apply(this);
     },
     createContent:function(){
        //create app view
        var oAppView = new sap.ui.view("AppView",{
            viewName : "sap.ui.demo.view.App",
            type : "XML"
        });
        //from app view get app container
        var oAppContainer = oAppView.byId("appContainer");
        //create view1
        var oView1 = new sap.ui.view("View1",{
            viewName : "sap.ui.demo.view.View1",
            type : "XML"
        });
        //create view2
        var oView2 = new sap.ui.view("View2",{
            viewName : "sap.ui.demo.view.View2",
            type : "XML"
        });
        //add view1 and view2 app container pages
        oAppContainer.addPage(oView1);
        oAppContainer.addPage(oView2);
        //return app view
        return oAppView;
     }
    });
});