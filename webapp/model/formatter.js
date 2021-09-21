sap.ui.define([
	] , function () {
		"use strict";

		return {
			
			width1 : function(w1){
				
				return parseFloat(w1).toFixed(6);
			},
			
			discprice : function(dp1) {
			
			if(dp1 >=100 && dp1 <= 500)	{
				return dp1 - 50;
			}
			if(dp1 > 500 && dp1 <=1000){
				return dp1 - 100;
			}
			if(dp1 > 1000 ){
				return dp1 - 300;
			}
			else { 
				return dp1;
			}
			},

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			}

		};

	}
);