'use strict';

angular.module('sniperAceApp').controller('CalculatorCtrl', function ($scope, $http, $sce, $modal) {

    var self = this;

    $http.get('data/rangeTables.json')
    .then(function (res) {
        $scope.weapons = res.data;
        $scope.activeWeapon = $scope.weapons[0];
    });

    $scope.usingRangefinder = true;
    $scope.usingKestrel = true;

    $scope.range = null;
    $scope.elevShooter = null;
    $scope.elevTarget = null;
    $scope.windStr = null;

    $scope.elevationMoa = 0;
    $scope.windMoa = 0;

    // wind direction
    this.easyWindDirs = [
        { text: '&rarr;', dir: 90 },
        { text: '&larr;', dir: 270 }
    ];
    this.activeWindDir = this.easyWindDirs[0];
    $scope.activeWindDirText = $sce.trustAsHtml(this.activeWindDir.text);





    /*
    #   "Private" functions
    */

    this.openModal = function () {
        $scope.modalInstance = $modal.open({
            templateUrl: 'views/modal.html',
            scope: $scope
        });
    };

    this.getRange = function (usingRangefinder, range, elevShooter, elevTarget) {

        var theRange;

        if (usingRangefinder === true) {
            theRange = range;
        } else {
            // hard to get those values, the shooter did most likely approximated them by looking at his map
            // pythagoras => a² + b² = c²

            var a = range;
            var b = Math.max(elevShooter, elevTarget) - Math.min(elevShooter, elevTarget);

            theRange = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        }

        return theRange;
    };

    this.getRangeTableMatches = function (activeWeapon, range) {

        // because we need to calculate the mean value
        var bestRangeTableMatch;
        var nextRangeTableMatch;

        // if the range is 100 or below, just use the first entry
        if (range <= 100) {
            bestRangeTableMatch = activeWeapon.rangeTable[0];
            nextRangeTableMatch = activeWeapon.rangeTable[0];
        } else {

            for (var i = 0; i < activeWeapon.rangeTable.length; i++) {

                var currentRangeTableValue = activeWeapon.rangeTable[i];

                // if the range has the same value as the current range table value use that entry
                if (range === currentRangeTableValue.range) {

                    bestRangeTableMatch = currentRangeTableValue;
                    nextRangeTableMatch = currentRangeTableValue;
                    break;

                } else if (range - currentRangeTableValue.range > 0 && range - currentRangeTableValue.range < 100) {

                    bestRangeTableMatch = currentRangeTableValue; // get the next entry in the range table array
                    // if there's no next entry in the array the range is too far
                    if (i < activeWeapon.rangeTable.length - 1) {
                        nextRangeTableMatch = activeWeapon.rangeTable[i + 1];
                    }
                    break;
                }
            }
        }
        return {
            bestRangeTableMatch: bestRangeTableMatch,
            nextRangeTableMatch: nextRangeTableMatch
        };
    };


    this.calculateElevationMoa = function (range, bestRangeTableMatch, nextRangeTableMatch) {

        var deltaElevation = nextRangeTableMatch.elevation - bestRangeTableMatch.elevation;
        var deltaRangeInPercent = (range - bestRangeTableMatch.range) / 100;

        return bestRangeTableMatch.elevation + (deltaElevation * deltaRangeInPercent);
    };


    this.calculateWindMoa = function (range, bestRangeTableMatch, nextRangeTableMatch, windStr, windDir) {

        var deltaWind = nextRangeTableMatch.wind - bestRangeTableMatch.wind;
        var deltaRangeInPercent = (range - bestRangeTableMatch.range) / 100;
        var windFor4ms = bestRangeTableMatch.wind + (deltaWind * deltaRangeInPercent);

        var finalWindMoa = windFor4ms / 4 * windStr;

        // so take windDir into account
        if (windDir.dir === 90) {
            finalWindMoa = finalWindMoa * (-1);
        }

        return finalWindMoa;
    };


    $scope.calculateMoa = function () {
        var range = self.getRange($scope.usingRangefinder, $scope.range, $scope.elevShooter, $scope.elevTarget);

        var rangeTableMatches = self.getRangeTableMatches($scope.activeWeapon, range);

        if (!!rangeTableMatches.bestRangeTableMatch && !!rangeTableMatches.nextRangeTableMatch) {

            $scope.elevationMoa = self.calculateElevationMoa(range, rangeTableMatches.bestRangeTableMatch, rangeTableMatches.nextRangeTableMatch);
            $scope.windMoa = self.calculateWindMoa(range, rangeTableMatches.bestRangeTableMatch, rangeTableMatches.nextRangeTableMatch, $scope.windStr, self.activeWindDir);

            self.openModal();

        } else {
            // TODO: Make this better
            var lastEntry = $scope.activeWeapon.rangeTable[$scope.activeWeapon.rangeTable.length - 1];
            alert('Out of range.\nRange shouldn\'t be bigger than: ' + lastEntry.range);
        }

    };


    $scope.nextWindDir = function () {
        var currentIndex = self.easyWindDirs.indexOf(self.activeWindDir);
        if (currentIndex === self.easyWindDirs.length - 1) {
            self.activeWindDir = self.easyWindDirs[0];
        } else {
            self.activeWindDir = self.easyWindDirs[currentIndex + 1];
        }
        $scope.activeWindDirText = $sce.trustAsHtml(self.activeWindDir.text);
    };


    $scope.cancelModal = function () {
        $scope.modalInstance.dismiss('cancel');
    };


});