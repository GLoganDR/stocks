'use strict';

//var request = require('request');

function Portfolio(name){
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.add = function(stock){
  var add = true;
  for(var i = 0; i < this.stocks.length; i++){
    if(stock.symbol === this.stocks[i].symbol){
      this.stocks[i].count += stock.count;
      add = false;
    }
  }

  if(add === true){
    this.stocks.push(stock);
  }
};

module.exports = Portfolio;
