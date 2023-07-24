sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ], function(oController) {
        'use strict';
        return oController.extend("sap.ui.demo.controller.main",{
            onInit:function(){
                //console.log(oBaseController);
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                    "empStr" : {
                        "empId" : "100",
                        "empName" : "Alan",
                        "salary" : "1000",
                        "currency" : "AUD"
                    }
                });
                sap.ui.getCore().setModel(oModel);
            }
        });
    });