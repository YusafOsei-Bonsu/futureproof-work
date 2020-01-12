'use strict';
var expect = require('chai').expect;
var file = require('../app/fizzbuzz');
var FizzBuzz = file.FizzBuzz;

describe("Fizzbuzz file", function() {
    // Test case checks if file exists
    it("File exists", function() {
        var fbFile = require('../app/fizzbuzz');
        expect(fbFile).to.not.be.undefined;
    });

    // Test suite looks at normal functionality
    describe("Functionality", function() {

        // Test case checks if "FizzBuzz" will return if a number divisible by 3 and 5 is the input
        it("Fizzbuzz", function() {
            expect(FizzBuzz(30)).to.equal("FizzBuzz");
        });

        // Test case checks if "Fizz" will return if a number divisible by ONLY 3 is the input 
        it("Fizz", function() {
            expect(FizzBuzz(9)).to.equal("Fizz");
        });

        // Test case checks if "Buzz" will return if a number divisible by ONLY 5 is the input 
        it("Buzz", function() {
            expect(FizzBuzz(10)).to.equal("Buzz");
        });
        
        // Test case checks if the input returns if it's not divisible by 3 or 5 (or both)
        it("Non-fizzbuzz", function() {
            var nonFizzBuzzNum = 4;
            expect(FizzBuzz(nonFizzBuzzNum)).to.equal(nonFizzBuzzNum);
        });
    });

    // Test suite focuses on the occurrence of errors
    describe("Error", function() {
        // Test case checks if the input is a number
        it("Not a number", function() {
            expect(FizzBuzz("Hello")).to.equal("Function input is not an integer");
        });

        // Test case checks if a parameter has been set
        it("Undefined", function() {
            expect(FizzBuzz()).to.equal("Nothing has been defined");
        });
    });
});