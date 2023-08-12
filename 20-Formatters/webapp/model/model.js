sap.ui.define([
"sap/ui/model/json/JSONModel",
"sap/ui/model/xml/XMLModel",
"sap/ui/model/resource/ResourceModel"
], function(JSONModel,XMLModel,ResourceModel) {
    'use strict';
    return {
        //create JSONModel
        createJSONModel:function(path){
            var oModel = new JSONModel();
            oModel.loadData(path);
            return oModel;
        },
        //create XMLModel
        createXMLModel:function(path){
            var oModel = new XMLModel();
            oModel.loadData(path);
            return oModel;
        },
        //create ResourceModel
        createResourceModel:function(path){
            var oModel = new ResourceModel({
                bundleUrl : path
            });
            return oModel;
        }
    }
});