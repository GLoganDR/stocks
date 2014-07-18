/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');
var Stock = require('../../app/models/stock');

describe('Portfolio', function (){
  describe('constructor', function(){
    it('should create a new portfolio of tech stocks', function(){
      var tech = new Portfolio('Tech Portfolio');

      expect(tech).to.be.instanceof(Portfolio);
      expect(tech.name).to.equal('Tech Portfolio');
      expect(tech.stocks).to.have.length(0);
    });
  });
  describe('#add', function(){
    it('should add to the array of stocks to portfolio and add to existing stocks', function(){
      var tech = new Portfolio('Tech Portfolio');
      tech.add('AaPL', 50);
      tech.add('AmZN', 30);
      tech.add('AApL', 25);

      expect(tech.stocks).to.have.length(2);
      expect(tech.stocks[0]).to.be.instanceof(Stock);
      expect(tech.stocks[0].count).to.equal(75);
      expect(tech.stocks[1].count).to.equal(30);
    });
  });
  describe('#delete', function(){
    it('should delete stocks from the portfolio', function(){
      var tech = new Portfolio('Tech Portfolio');
      tech.add('aapl', 50);
      tech.add('msft', 35);

      tech.del('aapl', 10);
      tech.del('msft', 40);
      tech.del('aapl', 20);

      expect(tech.stocks).to.have.length(1);
      expect(tech.stocks[0].count).to.equal(20);
     
    });
  });
});
