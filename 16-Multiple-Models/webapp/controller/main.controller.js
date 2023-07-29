sap.ui.define([
//"home/controller/basecontroller",
"sap/ui/core/mvc/Controller",
"home/model/model"
], function(oController,Model) {
    'use strict';
    return oController.extend("home.controller.main",{
        onInit:function(){
        //Now load the model from model.js file - so comment this
/*             //create model 
        var oModel = new sap.ui.model.json.JSONModel();
        //set Data
        oModel.setData({
            "empStr":{
                "empId" : "100",
                "empName" : "Alan",
                "salary" : 10000,
                "currency" : "AUD",
                "enabled" : false
            }
        }); */
        var oModel = Model.createModel();
        //set model to the core
        sap.ui.getCore().setModel(oModel);
        //Binding-2 xml syntaxes are in XML, now let us look at JS syntaxes
        this.getView().byId("inputSalary").bindValue("/empStr/salary");
        this.getView().byId("inputCurrency").bindProperty("value","/empStr/currency");
        //this.getView().byId("simpleForm").bindProperty("enabled","/empStr/enabled");
        },

        //on button click
        onClick:function(){
            //How to enable and disable based on button click?
            //Method 1
/*             var oEnabled = this.getView().byId("inputEmpId").getEnabled();
            if(oEnabled){
                sap.ui.getCore().getModel().setProperty("/empStr/enabled",false);
            }
            else{
                sap.ui.getCore().getModel().setProperty("/empStr/enabled",true);
            } */
            //Method 2
            var oModel = sap.ui.getCore().getModel();
            var oEnabled = oModel.getProperty("/empStr/enabled");
            if(oEnabled){
                oModel.setProperty("/empStr/enabled",false);
            }
            else{
                oModel.setProperty("/empStr/enabled",true);
            }
        }
    });
});