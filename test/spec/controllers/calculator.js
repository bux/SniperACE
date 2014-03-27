'use strict';

describe('Controller: CalculatorCtrl', function () {

    // load the controller's module
    beforeEach(module('sniperAceApp'));

    var CalculatorCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        CalculatorCtrl = $controller('CalculatorCtrl', {
            $scope: scope
        });

    }));
    
    
    describe('getRange', function() {
        
        var range = 100,
            elevShooter = 100,
            elevTarget = 25;
        
        it('should just return the range when using a "rangefinder"', function () {
            
            var usingRangefinder = true;
            var testRange = CalculatorCtrl.getRange(usingRangefinder, range, elevShooter, elevTarget);

            expect(testRange).toBe(100);
            
        });
        
        it('should calculate the range when not using a "rangefinder"', function () {
            
            var usingRangefinder = false;
            var testRange = CalculatorCtrl.getRange(usingRangefinder, range, elevShooter, elevTarget);
            // 125² = 100² + 75²
            expect(testRange).toBe(125);
            
        });
        
    });
    
    
    
    describe('getRangeTableMatches', function() {
        
        var range = 255,
            weaponRangeTable = {
                name:'AS50',
                rangeTable:[
                    {range:100,elevation:-12,wind:0.4},
                    {range:200,elevation:-8.5,wind:0.5},
                    {range:300,elevation:-6.25,wind:0.8},
                    {range:400,elevation:-3,wind:1.2},
                    {range:500,elevation:0,wind:1.5}
                ]
            };
        
        it('should find the best matches in the rangeTable', function () {
            
            var rangeTableMatches = CalculatorCtrl.getRangeTableMatches(weaponRangeTable, range);

            expect(rangeTableMatches.bestRangeTableMatch.range).toBe(200);
            expect(rangeTableMatches.nextRangeTableMatch.range).toBe(300);
            
        });
        
    });
    
    
    describe('calculateElevationMoa', function() {
        
        var range = 250,
            bestRangeTableMatch = {range:200,elevation:-8.5,wind:0.5},
            nextRangeTableMatch = {range:300,elevation:-6.25,wind:0.8};
        
        it('should calculate the proper elevation moa settings', function () {
            
            var elevationMoa = CalculatorCtrl.calculateElevationMoa(range, bestRangeTableMatch, nextRangeTableMatch);
            expect(elevationMoa).toBe(-7.375);
            
        });
        
    });
    
    
    describe('calculateWindMoa', function() {
        
        var range = 250,
            bestRangeTableMatch = {range:200,elevation:-8.5,wind:0.5},
            nextRangeTableMatch = {range:300,elevation:-6.25,wind:0.8},
            windStr = 2,
            activeWindDir = {dir: 90};
        
        it('should calculate the proper wind moa settings', function () {
            
            var finalWindMoa = CalculatorCtrl.calculateWindMoa(range, bestRangeTableMatch, nextRangeTableMatch, windStr, activeWindDir);
            expect(finalWindMoa).toBe(-0.325);
            
        });
        
        it('should take the wind direction into account', function () {
            
            activeWindDir = {dir: 270};
            var finalWindMoa = CalculatorCtrl.calculateWindMoa(range, bestRangeTableMatch, nextRangeTableMatch, windStr, activeWindDir);
            expect(finalWindMoa).toBe(0.325);
            
        });
        
    });

});
