sap.ui.define([
"sap/ui/demo/controller/basecontroller"
], function(BaseController) {
    'use strict';
    return BaseController.extend("sap.ui.demo.controller.main",{
        onInit:function(){
            var oDemo = new sap.ui.model.json.JSONModel();
            oDemo.loadData("model/mockData/demo.json");
            //sap.ui.getCore().setModel(oDemo,"demo");
            var oEmployees = new sap.ui.model.json.JSONModel();
            oEmployees.loadData("model/mockData/employees.json");
            sap.ui.getCore().setModel(oEmployees);
        },
        //on selection of any row in table
        onSelect:function(oEvent){
            //get the row selected - address
            var sPath = oEvent.getParameter("rowContext").getPath();
            //get the simple form
            var oSimpleForm = this.getView().byId("simpleFormEmployees");
            //bind the path to the element
            oSimpleForm.bindElement(sPath);
        }
    });
});