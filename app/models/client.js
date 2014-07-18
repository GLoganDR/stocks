'use strict';

var Portfolio = require('./portfolio');
//var Stock = require('./stock');//

function Client(name, cash){
  this.name = name;
  this.cash = parseFloat(cash);
  this.portfolio = new Portfolio(name + '\'s portfolio');
}












// Private helper methods //

// function findStock(stocks, symbol){
//  for(var i = 0; i < stocks.length; i++){
//    if(stocks[i].symbol === symbol.toUpperCase()){
//  return i;
//    }
//  }

//  return -1;
//}

module.exports = Client;
