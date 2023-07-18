sap.ui.jsview("home.view.main", {  // 
   
    getControllerName: function() {
       //return "home.controller.main";     // 
    },
 
    createContent: function() {

       var oButton = new sap.m.Button("buttonClick",{
                                        text:"Hello JS View",
                                        press : function(){
                                            alert("Hello");
                                        }
                                    });

       return oButton;
    }
 
 });