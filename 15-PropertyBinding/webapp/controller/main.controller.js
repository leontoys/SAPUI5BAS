sap.ui.define([
"sap/ui/core/mvc/Controller"
//"home/controller/basecontroller"
], function(oBaseController) {
    'use strict';
    return oBaseController.extend("home.controller.main",{
        onInit:function(){
            //create model
            var oModel = new sap.ui.model.json.JSONModel();
            //set the data
            oModel.setData({
                "empStr" : {
                    "empId" : "100",
                    "empName" : "Alan",
                    "salary" : "1000",
                    "currency" : "AUD"
                }
            });
            //set this model to the core of the app
            sap.ui.getCore().setModel(oModel);
            //propery binding can be done in 4 ways
            //2 XML Syntax
            //1-Direcly bind the value
            //2-Bind via the path
            //2 JS Syntax
            //3-bind value
            this.getView().byId("inputSalary").bindValue("/empStr/salary");
            //4-bind property
            this.getView().byId("inputCurrency").bindProperty("value","/empStr/currency");
        }
    });
});