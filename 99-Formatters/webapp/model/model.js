sap.ui.define([
"sap/ui/model/json/JSONModel",
"sap/ui/model/xml/XMLModel",
"sap/ui/model/resource/ResourceModel"
], function(JSONModel,XMLModel,ResourceModel) {
    'use strict';
    //this is model.js file - what should it return?
    return {
        //create function to create models
        createModel:function(path){
            var oModel = new JSONModel();
            oModel.loadData(path);
            return oModel;
        },
        createXMLModel:function(path){
            var oModel = new XMLModel();
            oModel.loadData(path);
            return oModel;
        },
        createResourceModel:function(path){
            var oModel = new ResourceModel({
                bundleUrl: path
            });
            return oModel;
        }
    }
});