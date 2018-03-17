import { AgeFinder } from "../src/agefinder";

describe('ageFinder-default', function () {
    it('should test the earth life expectance of the default value', function () {
        var ageFinder = new AgeFinder(365*27);
        expect(ageFinder.lifeExpectancyEarthInDays()).toEqual(18980);
    });
    it('should test the mercury life expectancy of the default value', function() {
        var ageFinder = new AgeFinder(365*27);
        expect(ageFinder.lifeExpectancyMercuryInDays()).toEqual(4555.2);
    });
    it('should test the venus life expectancy of the default value', function() {
        var ageFinder = new AgeFinder(365*27);
        expect(ageFinder.lifeExpectancyVenusInDays()).toEqual(11767.6);
    });
    it('should test the mercury life expectancy of the default value', function() {
        var ageFinder = new AgeFinder(365*27);
        expect(ageFinder.lifeExpectancyMarsInDays()).toEqual(35682.4);
    });
    it('should test the jupiter life expectancy of the default value', function() {
        var ageFinder = new AgeFinder(365*27);
        expect(ageFinder.lifeExpectancyJupiterInDays()).toEqual(225102.8);
    });
});
describe('ageFinder-custom', function() {
    it('should test the earth life expectance of the custom value', function () {
        var ageFinder = new AgeFinder(365*27, 50*365);
        expect(ageFinder.lifeExpectancyEarthInDays()).toEqual(8395);
    });
    it('should test the mercury life expectancy of the custom value', function() {
        var ageFinder = new AgeFinder(365*27, 50*365);
        expect(ageFinder.lifeExpectancyMercuryInDays()).toEqual(2014.8);
    });
    it('should test the venus life expectancy of the custom value', function() {
        var ageFinder = new AgeFinder(365*27, 50*365);
        expect(ageFinder.lifeExpectancyVenusInDays()).toEqual(5204.9);
    });
    it('should test the mercury life expectancy of the custom value', function() {
        var ageFinder = new AgeFinder(365*27, 50*365);
        expect(ageFinder.lifeExpectancyMarsInDays()).toEqual(15782.599999999999);
    });
    it('should test the jupiter life expectancy of the custom value', function() {
        var ageFinder = new AgeFinder(365*27, 50*365);
        expect(ageFinder.lifeExpectancyJupiterInDays()).toEqual(99564.7);
    });
});