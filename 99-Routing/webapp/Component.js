sap.ui.define([
"sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.Component",{
        //we need to link manifest.json
        metadata:{
            metadata : "json"
        },
        init:function(){
            //this is something we shouldn't forget - iniitalize basecomponent
            UIComponent.prototype.init.apply(this);
            console.log(this.getRouter());
        },
        createContent:function(){
/*             var oAppView = new sap.ui.view("app",{
                viewName : "sap.ui.demo.view.App",
                type : "XML"
            });
            return oAppView; */
        }
    });
});