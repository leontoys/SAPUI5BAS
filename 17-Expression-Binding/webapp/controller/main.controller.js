sap.ui.define([
"sap/ui/demo/controller/basecontroller",
"sap/ui/demo/model/model"
], function(oBaseController,Model) {
    'use strict';
    return oBaseController.extend("sap.ui.demo.controller.main",{
        onInit:function(){
            //create employees model
            var oDemo = Model.createModel("model/mockData/demo.json");
            sap.ui.getCore().setModel(oDemo,"demo");
            var oEmployees = Model.createModel("model/mockData/employees.json");
            sap.ui.getCore().setModel(oEmployees);
        }
    });
});