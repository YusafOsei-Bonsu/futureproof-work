'use strict';
var expect = require('chai').expect;
var adder = require('./app/add');

// Test suite 1
describe("Add", function() {
    // Test case to see if the file exists
    it('should exist', function() {
        var Add = require('./app/add');
        expect(Add).to.not.be.undefined;
    });

    // Test suite 2
    describe('Addition', function(){
        // Test case sees if two numbers (in array) equals 3 when added together
        it('Takes two numbers in an array', function() {
            var arr = adder.addTogether([1,2]);
            expect(arr).to.equal(3);
        });

        // Test case
        it('enforces array type', function() {
            var arr = adder.addTogether(1,2);
            expect(arr).to.equal("Numbers must be an array");
        });

        // Test case 
        it("Gives a pleasent error msg for args that aren'/t numbers", function() {
            var arr = adder.addTogether([1, "2"]);
            expect(arr).to.equal("Numbers must be an array of numbers");
        });
    });
});