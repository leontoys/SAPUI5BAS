sap.ui.define([
"sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.Component",{
        metadata:{},
        init:function(){
            UIComponent.prototype.init.apply(this);
        },
        createContent:function(){
            var oView = new sap.ui.view({
                viewName : "sap.ui.demo.view.App",
                type : "XML"
            });
            return oView
        }
    });
});