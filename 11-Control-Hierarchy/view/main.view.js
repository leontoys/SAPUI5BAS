sap.ui.jsview("home.view.main",{
    //this returns the controls to the views
    createContent : function(oController){ //after we link the controller - this has the controller object
        var oButton = new sap.m.Button("buttonClickMe",{
            text : "Click Me",
            press : oController.onClick //we have to just give the name
        });
        return oButton;
    },
    //now we need the link to the controller
    getControllerName : function(){
        return "home.controller.main";
    }
});