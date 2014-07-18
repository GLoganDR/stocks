'use strict';


var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');

describe('Portfolio', function (){
  describe ('aggressive', function(){
    it('should create a new portfolio of aggressive tech stocks', function(){
      var tech = new Portfolio('Aggressive Portfolio');

      expect(tech).to.be.instanceof(Portfolio);
      expect(tech.name).to.equal('Aggressive Portfolio');
      expect(tech.stocks).to.have.length(0);
    });
  });
  
});
