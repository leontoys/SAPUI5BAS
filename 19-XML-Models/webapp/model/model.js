sap.ui.define([
"sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
    //this is model.js file - what should it return?
    return {
        //create function to create models
        createModel:function(path){
            var oModel = new JSONModel();
            oModel.loadData(path);
            return oModel;
        }
    }
});