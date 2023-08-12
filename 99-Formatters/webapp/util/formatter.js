sap.ui.define([
    "sap/ui/core/format/NumberFormat"    
], function(NumberFormat) {
    'use strict';
    return {
        changeToUpperCase : function(input){
            return input.toUpperCase();
        },
        formatCurrency:function(amount,currency){
            var oCurreny = NumberFormat.getCurrencyInstance();
            return oCurreny.format(amount,currency);
        }
    }
});