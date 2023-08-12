sap.ui.define([
"sap/ui/demo/controller/baseController",
"sap/ui/demo/model/model",
"../model/formatter"
], function(BaseController,Model,formatter) {
    'use strict';
    return BaseController.extend("sap.ui.demo.controller.main",{
        formatter : formatter,
        onInit:function(){
            var oModel = Model.createJSONModel("model/mockData/employees.json");
            sap.ui.getCore().setModel(oModel);
            var oTable = this.getView().byId("tableEmployees");
            //oTable.bindRows("/empTab");
            oTable.bindAggregation("rows",{path:'/empTab'});
            var oDemo = Model.createJSONModel("model/mockData/demo.json");
            sap.ui.getCore().setModel(oDemo,"demo");
            var oXMLModel = Model.createXMLModel("model/mockData/dummy.xml");
            sap.ui.getCore().setModel(oXMLModel,"xml");
            var i18nModel = Model.createResourceModel("i18n/i18n.properties");
            sap.ui.getCore().setModel(i18nModel,"i18n");
        },
        //on selection of rows
        onSelect:function(oEvent){
            //get the selected row path
            var sPath = oEvent.getParameter("rowContext").getPath();
            //get the form
            var oForm = this.getView().byId("formEmployees");
            //bind the selected path to the form
            oForm.bindElement(sPath);
        },
        //switch control - on change event
        onSwitch:function(){
            //we have set a default model and a demo model onInit
            //get the default model
            var oModel = sap.ui.getCore().getModel();
            var oDemo  = sap.ui.getCore().getModel("demo");
            //set demo model as default
            sap.ui.getCore().setModel(oDemo);
            //set default model to demo
            sap.ui.getCore().setModel(oModel,"demo");
        }
    });
    
});