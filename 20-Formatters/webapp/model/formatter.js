sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    'use strict';
    return {
                //formatter
                changeNameToUpperCase:function(input){
                    if(input){
                        console.log('formatter');
                        return input.toUpperCase();
                    }
                },
        statusText : function(eStatus){
            switch (eStatus) {
                case "E":
                    return "Employed";
                case "T":
                    return "Terminated"
                 default:
                    break;
            }
        },
        statusColor : function(eStatus){
            switch (eStatus) {
                case "E":
                    return sap.ui.core.ValueState.Success;
                case "T":
                    return sap.ui.core.ValueState.Error;
                 default:
                    break;
            }
        },       
        formatCurrency:function(salary,currency){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(salary,currency);
        }
    }
});