sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    return Controller.extend("home.basecontroller",{
        onInit:function(){
            alert("Hello from Base Controller");
        }
    });
});