sap.ui.define([
"sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
//this is a function, so it needs to return what it should return?
//the model
//and then load this file in the controller
 return{
    //here create a function that creates model
    createModel:function(path){
        var oModel = new JSONModel();
        //load data from path
        oModel.loadData(path);
        return oModel;
    }
 }

    
});