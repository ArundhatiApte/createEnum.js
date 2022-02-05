"use strict";

const expect = require("assert"),
      Tester = require("tester"),
      createEnum = require("./createEnum");
      
const tester = new Tester("test creating enumeration");
const componentsOfColors = createEnum("RED", "GREEN", "BLUE");

tester.addTest(function testGeneratingIds() {
  console.log("componentsOfColors: ", componentsOfColors);
  expect.deepEqual(componentsOfColors, {
    RED: 1,
    GREEN: 2,
    BLUE: 3
  });
});

tester.addTest(function testConstant() {
  return expect.throws(function() {
    componentsOfColors["ALPHA"] = 4;
  });
});

tester.run();
 
