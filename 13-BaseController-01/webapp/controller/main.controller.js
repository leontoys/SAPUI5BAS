sap.ui.define([
"sap/ui/core/mvc/Controller",
"home/controller/basecontroller"
], function(Controller,BaseController) {
    return BaseController.extend("home.main",{
        onInit:function(){
            //alert("hello from Main controller");
        }
    });
});