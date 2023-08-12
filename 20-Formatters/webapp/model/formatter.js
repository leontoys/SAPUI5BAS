sap.ui.define([

], function() {
    'use strict';
    return {
        statusText : function(eStatus){
            switch (eStatus) {
                case "E":
                    return "Employed";
                case "T":
                    return "Terminated"
                 default:
                    break;
            }
        }
    }
});