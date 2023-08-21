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

    });
});