/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');
var Stock = require('../../app/models/stock');

describe('Portfolio', function (){
  describe('constructor', function(){
    it('should create a new portfolio of aggressive tech stocks', function(){
      var tech = new Portfolio('Aggressive Portfolio');

      expect(tech).to.be.instanceof(Portfolio);
      expect(tech.name).to.equal('Aggressive Portfolio');
      expect(tech.stocks).to.have.length(0);
    });
  });
  describe('#add', function(){
    it('should add to the array of stocks to portfolio and add to existing stocks', function(){
      var tech = new Portfolio('Aggressive Portfolio');
      var aapl = new Stock('AAPL', 50);
      var amzn = new Stock('AMZN', 30);
      var aapl2 = new Stock('AAPL', 25);
      tech.add(aapl);
      tech.add(amzn);
      tech.add(aapl2);

      expect(tech.stocks).to.have.length(2);
      expect(tech.stocks[0]).to.be.instanceof(Stock);
      expect(tech.stocks[0].count).to.equal(75);
      expect(tech.stocks[1].count).to.equal(30);
    });
  });
});
