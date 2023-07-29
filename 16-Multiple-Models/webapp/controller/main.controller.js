sap.ui.define([
//"home/controller/basecontroller",
"sap/ui/core/mvc/Controller"
], function(oController) {
    'use strict';
    return oController.extend("home.controller.main",{
        onInit:function(){
            //create model 
        var oModel = new sap.ui.model.json.JSONModel();
        //set Data
        oModel.setData({
            "empStr":{
                "empId" : "100",
                "empName" : "Alan",
                "salary" : 10000,
                "currency" : "AUD"
            }
        });
        //set model to the core
        sap.ui.getCore().setModel(oModel);
        //Binding-2 xml syntaxes are in XML, now let us look at JS syntaxes
        this.getView().byId("inputSalary").bindValue("/empStr/salary");
        this.getView().byId("inputCurrency").bindProperty("value","/empStr/currency");
        }
    });
});