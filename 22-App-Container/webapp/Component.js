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
        creaeContent:function(){
            //poin to App view container
            var oView = new sap.ui.view({
                viewName : "sap.ui.demo.view.App",
                type : "XML"
            });
            return oView;
        },
        onBeforeRendering:function(){

        },
        onAfterRendering:function(){

        }
    });

});