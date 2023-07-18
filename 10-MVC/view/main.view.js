sap.ui.jsview("home.view.main", {  // 
   
    getControllerName: function() {
       return "home.controller.main";     
    },
 
    createContent: function(oController) {

       var oButton = new sap.m.Button("buttonClick",{
                                        text:"Hello JS View",
                                        press : oController.clickMe
                                    });

       return oButton;
    }
 
 });