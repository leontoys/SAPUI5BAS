sap.ui.define([
"sap/ui/demo/controller/baseController",
"sap/ui/demo/model/model",
"sap/ui/demo/util/formatter"
], function(oBaseController,Model,Formatter) {
    'use strict';
    return oBaseController.extend("sap.ui.demo.controller.main",{
        //global variables
        formatter : Formatter,
        onInit:function(){
            var oModel = Model.createModel("model/mockData/employees.json");
            sap.ui.getCore().setModel(oModel);
            var oDemo = Model.createModel("model/mockData/demo.json");
            sap.ui.getCore().setModel(oDemo,"demo");
            var oXMLModel = Model.createXMLModel("model/mockData/dummy.xml");
            sap.ui.getCore().setModel(oXMLModel,"xml");
            var oTable = this.getView().byId("tableEmployees");
            oTable.bindRows("/empTab");
            //oTable.bindAggregation("rows",{path:'/empTab'});
            var i18nModel = Model.createResourceModel("i18n/i18n.properties");
            sap.ui.getCore().setModel(i18nModel,"i18n");

/*             //alert("main controller loaded");
            //create json model object
            var oModel = new sap.ui.model.json.JSONModel();
            //load data
            oModel.loadData("model/mockData/employees.json");
            //set the model to the core
            sap.ui.getCore().setModel(oModel);
            //secondary model ie, demo model
            var oDemo = new sap.ui.model.json.JSONModel();
            oDemo.loadData("model/mockData/demo.json");
            sap.ui.getCore().setModel(oDemo,"demo"); */
        },
        //on selection of table row
        onSelect:function(oEvent){
            var sPath = oEvent.getParameter("rowContext").getPath();
            console.log(sPath);
            //get the form
            var oSimpleForm = this.getView().byId("simpleFormEmployee");
            oSimpleForm.bindElement(sPath);
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
        },
        changeToUpperCase :function(input){
            if(input){
            return input.toUpperCase();
            }
        }
    });
});