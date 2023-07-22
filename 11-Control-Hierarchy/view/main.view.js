sap.ui.jsview("home.view.main",{
    //this returns the controls to the views
    createContent : function(oController){ //after we link the controller - this has the controller object
        var oButton = new sap.m.Button("buttonClick",{
            text : "Click Me"
            //press : oController.onClick //we have to just give the name
        });
        //step2 - now create an input field
        var oInput = new sap.m.Input("inputName",{
            description : "Enter some text here and click the button",
            //submit : oController.onClick
            submit : [oController.enableButton,oController]
        });
        //return oButton;
        return [oInput,oButton];
    },
    //now we need the link to the controller
    getControllerName : function(){
        return "home.controller.main";
    }
});