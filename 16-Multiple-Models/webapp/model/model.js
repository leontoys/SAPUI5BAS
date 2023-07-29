sap.ui.define([
"sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
    //this is a model.js file
    return {
        //create functions to create models
        createModel : function(){
            var oModel = new JSONModel();
            //set data
            oModel.setData({
                "empStr":{
                    "empId" : "100",
                    "empName" : "Alan",
                    "salary" : 10000,
                    "currency" : "AUD",
                    "enabled" : false
                }
            });
            //add a return
            return oModel; // and that makes it work !
        }
    }
});