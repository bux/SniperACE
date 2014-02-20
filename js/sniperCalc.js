function SniperCalcCtrl ($scope) {
    // rangeTable.wind -> moa for wind at 4 m/s
    // make that an external json file
    $scope.weapons = [
        {
            name : "AS50",
            rangeTable : [
                { range : 100, elevation : -12, wind : 0.4 },
                { range : 200, elevation : -8.5, wind : 0.5 },
                { range : 300, elevation : -6.25, wind : 0.8 },
                { range : 400, elevation : -3, wind : 1.2 },
                { range : 500, elevation : 0, wind : 1.5 },
                { range : 600, elevation : 2.75, wind : 2.3 },
                { range : 700, elevation : 6.75, wind : 2.3 },
                { range : 800, elevation : 10.5, wind : 3 },
                { range : 900, elevation : 14.25, wind : 3.6 },
                { range : 1000, elevation : 19, wind : 4.3 },
                { range : 1100, elevation : 24, wind : 5 },
                { range : 1200, elevation : 29.25, wind : 5.7 },
                { range : 1300, elevation : 34.5, wind : 6.4 },
                { range : 1400, elevation : 41.25, wind : 7.4 },
                { range : 1500, elevation : 48, wind : 8.4 },
                { range : 1600, elevation : 55.5, wind : 9.3 },
                { range : 1700, elevation : 63.25, wind : 10.5 },
                { range : 1800, elevation : 72, wind : 11.6 },
                { range : 1900, elevation : 81.5, wind : 13 },
                { range : 2000, elevation : 92, wind : 14.44 }
            ]
        },
        {
            name : "CZ550",
            rangeTable : [
                { range : 100, elevation : -6, wind : 1 },
                { range : 200, elevation : -3, wind : 1.4 },
                { range : 300, elevation : 0, wind : 2.1 },
                { range : 400, elevation : 4, wind : 2.6 },
                { range : 500, elevation : 9, wind : 3.9 },
                { range : 600, elevation : 14, wind : 5.3 },
                { range : 700, elevation : 19, wind : 6.4 },
                { range : 800, elevation : 26, wind : 7.9 },
                { range : 900, elevation : 32, wind : 9.5 },
                { range : 1000, elevation : 41, wind : 11.3 }
            ]
        },
        {
            name : "CZ750",
            rangeTable : [
                { range : 100, elevation : -6, wind : 1 },
                { range : 200, elevation : -3, wind : 1.4 },
                { range : 300, elevation : 0, wind : 2.1 },
                { range : 400, elevation : 4, wind : 2.6 },
                { range : 500, elevation : 9, wind : 3.9 },
                { range : 600, elevation : 14, wind : 5.3 },
                { range : 700, elevation : 19, wind : 6.4 },
                { range : 800, elevation : 26, wind : 7.9 },
                { range : 900, elevation : 32, wind : 9.5 },
                { range : 1000, elevation : 41, wind : 11.3 }
            ]
        },
        {
            name : "DMR",
            rangeTable : [
                { range : 100, elevation : -6, wind : 1 },
                { range : 200, elevation : -3, wind : 1.4 },
                { range : 300, elevation : 0, wind : 2.1 },
                { range : 400, elevation : 4, wind : 2.6 },
                { range : 500, elevation : 9, wind : 3.9 },
                { range : 600, elevation : 14, wind : 5.3 },
                { range : 700, elevation : 19, wind : 6.4 },
                { range : 800, elevation : 26, wind : 7.9 },
                { range : 900, elevation : 32, wind : 9.5 },
                { range : 1000, elevation : 41, wind : 11.3 }
            ]
        },
        {
            name : "KSVK",
            rangeTable : [
                { range : 100, elevation : 0.2, wind : 0.1 },
                { range : 200, elevation : 1.1, wind : 0.2 },
                { range : 300, elevation : 1.8, wind : 0.2 },
                { range : 350, elevation : 2.4, wind : 0.25 },
                { range : 400, elevation : 2.8, wind : 0.3 },
                { range : 450, elevation : 3.3, wind : 0.35 },
                { range : 500, elevation : 3.7, wind : 0.4 },
                { range : 550, elevation : 4.2, wind : 0.55 },
                { range : 600, elevation : 4.8, wind : 0.7 },
                { range : 650, elevation : 5.5, wind : 0.7 },
                { range : 700, elevation : 6, wind : 0.7 },
                { range : 750, elevation : 6.5, wind : 0.85 },
                { range : 800, elevation : 7.1, wind : 1 },
                { range : 850, elevation : 7.8, wind : 1.1 },
                { range : 900, elevation : 8.5, wind : 1.2 },
                { range : 950, elevation : 9.2, wind : 1.35 },
                { range : 1000, elevation : 10.25, wind : 1.5 },
                { range : 1050, elevation : 11, wind : 1.6 },
                { range : 1100, elevation : 11.5, wind : 1.7 },
                { range : 1150, elevation : 12.25, wind : 1.8 },
                { range : 1200, elevation : 13.25, wind : 1.9 },
                { range : 1250, elevation : 14.25, wind : 2.05 },
                { range : 1300, elevation : 15.25, wind : 2.2 },
                { range : 1350, elevation : 16.25, wind : 2.35 },
                { range : 1400, elevation : 17.25, wind : 2.5 },
                { range : 1450, elevation : 18.25, wind : 2.65 },
                { range : 1500, elevation : 19.5, wind : 2.8 },
                { range : 1550, elevation : 20.75, wind : 3 },
                { range : 1600, elevation : 22.25, wind : 3.2 },
                { range : 1650, elevation : 23.5, wind : 3.4 },
                { range : 1700, elevation : 24.75, wind : 3.6 },
                { range : 1750, elevation : 26, wind : 3.8 },
                { range : 1800, elevation : 27.75, wind : 4 },
                { range : 1850, elevation : 29.5, wind : 4.25 },
                { range : 1900, elevation : 31, wind : 4.5 },
                { range : 1950, elevation : 33, wind : 5.05 },
                { range : 2000, elevation : 35, wind : 5.6 }
            ]
        },
        {
            name : "L115A2/A3",
            rangeTable : [
                { range : 100, elevation : -2, wind : 0 },
                { range : 200, elevation : -1.4, wind : 0.1 },
                { range : 300, elevation : -0.8, wind : 0.2 },
                { range : 400, elevation : 0, wind : 0.3 },
                { range : 500, elevation : 0.8, wind : 0.4 },
                { range : 600, elevation : 1.7, wind : 0.5 },
                { range : 700, elevation : 2.6, wind : 0.7 },
                { range : 800, elevation : 3.6, wind : 0.8 },
                { range : 900, elevation : 4.8, wind : 1 },
                { range : 1000, elevation : 6, wind : 1.1 },
                { range : 1100, elevation : 7.3, wind : 1.3 },
                { range : 1200, elevation : 8.7, wind : 1.6 },
                { range : 1300, elevation : 10.3, wind : 1.8 },
                { range : 1400, elevation : 12, wind : 2 },
                { range : 1500, elevation : 13.9, wind : 2.3 }
            ]
        },
        {
            name : "M24",
            rangeTable : [
                { range : 100, elevation : -6, wind : 1 },
                { range : 200, elevation : -3, wind : 1.4 },
                { range : 300, elevation : 0, wind : 2.1 },
                { range : 400, elevation : 4, wind : 2.6 },
                { range : 500, elevation : 9, wind : 3.9 },
                { range : 600, elevation : 14, wind : 5.3 },
                { range : 700, elevation : 19, wind : 6.4 },
                { range : 800, elevation : 26, wind : 7.9 },
                { range : 900, elevation : 32, wind : 9.5 },
                { range : 1000, elevation : 41, wind : 11.3 }
            ]
        },
        {
            name : "M40",
            rangeTable : [
                { range : 100, elevation : -6, wind : 1 },
                { range : 200, elevation : -3, wind : 1.4 },
                { range : 300, elevation : 0, wind : 2.1 },
                { range : 400, elevation : 4, wind : 2.6 },
                { range : 500, elevation : 9, wind : 3.9 },
                { range : 600, elevation : 14, wind : 5.3 },
                { range : 700, elevation : 19, wind : 6.4 },
                { range : 800, elevation : 26, wind : 7.9 },
                { range : 900, elevation : 32, wind : 9.5 },
                { range : 1000, elevation : 41, wind : 11.3 }
            ]
        },
        {
            name : "M107",
            rangeTable : [
                { range : 100, elevation : -12, wind : 0.4 },
                { range : 200, elevation : -8.5, wind : 0.5 },
                { range : 300, elevation : -6.25, wind : 0.8 },
                { range : 400, elevation : -3, wind : 1.2 },
                { range : 500, elevation : 0, wind : 1.5 },
                { range : 600, elevation : 2.75, wind : 2.3 },
                { range : 700, elevation : 6.75, wind : 2.3 },
                { range : 800, elevation : 10.5, wind : 3 },
                { range : 900, elevation : 14.25, wind : 3.6 },
                { range : 1000, elevation : 19, wind : 4.3 },
                { range : 1100, elevation : 24, wind : 5 },
                { range : 1200, elevation : 29.25, wind : 5.7 },
                { range : 1300, elevation : 34.5, wind : 6.4 },
                { range : 1400, elevation : 41.25, wind : 7.4 },
                { range : 1500, elevation : 48, wind : 8.4 },
                { range : 1600, elevation : 55.5, wind : 9.3 },
                { range : 1700, elevation : 63.25, wind : 10.5 },
                { range : 1800, elevation : 72, wind : 11.6 },
                { range : 1900, elevation : 81.5, wind : 13 },
                { range : 2000, elevation : 92, wind : 14.44 }
            ]
        },
        {
            name : "M109",
            rangeTable : [
                { range : 100, elevation : -16, wind : 1 },
                { range : 200, elevation : -12, wind : 1.2 },
                { range : 300, elevation : -8, wind : 1.4 },
                { range : 400, elevation : -4, wind : 1.2 },
                { range : 500, elevation : 0, wind : 1.4 },
                { range : 600, elevation : 5, wind : 2.1 },
                { range : 700, elevation : 11, wind : 2.4 },
                { range : 800, elevation : 18, wind : 3.4 },
                { range : 900, elevation : 26, wind : 3.6 },
                { range : 1000, elevation : 34, wind : 4.4 },
                { range : 1100, elevation : 43, wind : 5.2 },
                { range : 1200, elevation : 54, wind : 6.2 },
                { range : 1300, elevation : 66, wind : 7.4 },
                { range : 1400, elevation : 80, wind : 8.4 },
                { range : 1500, elevation : 97, wind : 9.9 },
                { range : 1600, elevation : 114, wind : 11.5 },
                { range : 1700, elevation : 135, wind : 13.1 },
                { range : 1800, elevation : 159, wind : 15.3 },
                { range : 1900, elevation : 186, wind : 17.6 },
                { range : 2000, elevation : 218, wind : 20.5 }
            ]
        },
        {
            name : "M110",
            rangeTable : [
                { range : 100, elevation : -6, wind : 1 },
                { range : 200, elevation : -3, wind : 1.4 },
                { range : 300, elevation : 0, wind : 2.1 },
                { range : 400, elevation : 4, wind : 2.6 },
                { range : 500, elevation : 9, wind : 3.9 },
                { range : 600, elevation : 14, wind : 5.3 },
                { range : 700, elevation : 19, wind : 6.4 },
                { range : 800, elevation : 26, wind : 7.9 },
                { range : 900, elevation : 32, wind : 9.5 },
                { range : 1000, elevation : 41, wind : 11.3 }
            ]
        },
        {
            name : "SVD",
            rangeTable : [
                { range : 100, elevation : 0.6, wind : 0.3 },
                { range : 200, elevation : 1.4, wind : 0.4 },
                { range : 300, elevation : 2.4, wind : 0.6 },
                { range : 350, elevation : 2.9, wind : 0.75 },
                { range : 400, elevation : 3.3, wind : 0.9 },
                { range : 450, elevation : 3.9, wind : 1.05 },
                { range : 500, elevation : 4.6, wind : 1.2 },
                { range : 550, elevation : 5.4, wind : 1.4 },
                { range : 600, elevation : 6.1, wind : 1.6 },
                { range : 650, elevation : 6.9, wind : 1.85 },
                { range : 700, elevation : 7.7, wind : 2.1 },
                { range : 750, elevation : 8.6, wind : 2.35 },
                { range : 800, elevation : 9.7, wind : 2.6 },
                { range : 850, elevation : 10.9, wind : 2.9 },
                { range : 900, elevation : 12, wind : 3.2 },
                { range : 950, elevation : 13.5, wind : 3.7 },
                { range : 1000, elevation : 14.8, wind : 4.2 }
            ]
        },
        {
            name : "TAC50",
            rangeTable : [
                { range : 100, elevation : -12, wind : 0.4 },
                { range : 200, elevation : -8.5, wind : 0.5 },
                { range : 300, elevation : -6.25, wind : 0.8 },
                { range : 400, elevation : -3, wind : 1.2 },
                { range : 500, elevation : 0, wind : 1.5 },
                { range : 600, elevation : 2.75, wind : 2.3 },
                { range : 700, elevation : 6.75, wind : 2.3 },
                { range : 800, elevation : 10.5, wind : 3 },
                { range : 900, elevation : 14.25, wind : 3.6 },
                { range : 1000, elevation : 19, wind : 4.3 },
                { range : 1100, elevation : 24, wind : 5 },
                { range : 1200, elevation : 29.25, wind : 5.7 },
                { range : 1300, elevation : 34.5, wind : 6.4 },
                { range : 1400, elevation : 41.25, wind : 7.4 },
                { range : 1500, elevation : 48, wind : 8.4 },
                { range : 1600, elevation : 55.5, wind : 9.3 },
                { range : 1700, elevation : 63.25, wind : 10.5 },
                { range : 1800, elevation : 72, wind : 11.6 },
                { range : 1900, elevation : 81.5, wind : 13 },
                { range : 2000, elevation : 92, wind : 14.44 }
            ]
        },
        {
            name : "VSS",
            rangeTable : [
                { range : 100, elevation : 5.1, wind : 0.6 },
                { range : 150, elevation : 8.2, wind : 0.95 },
                { range : 200, elevation : 11.3, wind : 1.3 },
                { range : 250, elevation : 14.1, wind : 1.65 },
                { range : 300, elevation : 17.4, wind : 2 },
                { range : 350, elevation : 20.3, wind : 2.4 },
                { range : 400, elevation : 23, wind : 2.8 }
            ]
        }
    ];

    $scope.activeWeapon = $scope.weapons[0];

    $scope.usingRangefinder = true;
    $scope.usingKestrel = true;

    $scope.range = "";

    $scope.elevShooter = "";
    $scope.elevTarget = "";
    $scope.windStr = "";

    $scope.elevationMoa = 0;
    $scope.windMoa = 0;

    // wind direction
    $scope.easyWindDirs = [
        { text : "&rarr;", dir : 90 },
        { text : "&larr;", dir : 270 }
    ];
    $scope.activeWindDir = $scope.easyWindDirs[0];


    // Functions
    $scope.nextWindDir = function () {
        var currentIndex = $scope.easyWindDirs.indexOf($scope.activeWindDir);
        if (currentIndex === $scope.easyWindDirs.length - 1) {
            $scope.activeWindDir = $scope.easyWindDirs[0];
        } else {
            $scope.activeWindDir = $scope.easyWindDirs[currentIndex + 1];
        }
    };

    $scope.calc = function () {
        var range;

        if ($scope.usingRangefinder === true) {
            range = $scope.range;
        } else {
            // hard to get those values, the shooter did most likely approximated them by looking at his map
            // pythagoras => a² + b² = c²

            var a = $scope.range;
            var b = Math.max($scope.elevShooter, $scope.elevTarget) - Math.min($scope.elevShooter, $scope.elevTarget);

            range = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        }

        // because we need to calculate the mean value
        var bestRangeTableMatch;
        var nextRangeTableMatch;

        // if the range is 100 or below, just use the first entry
        if (range <= 100) {
            bestRangeTableMatch = $scope.activeWeapon.rangeTable[0];
            nextRangeTableMatch = $scope.activeWeapon.rangeTable[0];
        } else {

            for (var i = 0; i < $scope.activeWeapon.rangeTable.length; i++) {

                var currentRangeTableValue = $scope.activeWeapon.rangeTable[i];

                // if the range has the same value as the current range table value use that entry
                if (range === currentRangeTableValue.range) {

                    bestRangeTableMatch = currentRangeTableValue;
                    nextRangeTableMatch = currentRangeTableValue;
                    break;

                } else if (range - currentRangeTableValue.range > 0 && range - currentRangeTableValue.range < 100) {

                    bestRangeTableMatch = currentRangeTableValue; // get the next entry in the range table array
                    // if there's no next entry in the array the range is too far
                    if (i < $scope.activeWeapon.rangeTable.length - 1) {
                        nextRangeTableMatch = $scope.activeWeapon.rangeTable[i + 1];
                    }
                    break;

                }

            }
        }

        if (!!bestRangeTableMatch && !!nextRangeTableMatch) {
            console.log(bestRangeTableMatch);
            console.log(nextRangeTableMatch);
            console.log(range);

            var deltaElevation = nextRangeTableMatch.elevation - bestRangeTableMatch.elevation;
            var deltaRangeInPercent = (range - bestRangeTableMatch.range) / 100;
            var elevationMoa = bestRangeTableMatch.elevation + (deltaElevation * deltaRangeInPercent);

            $scope.elevationMoa = elevationMoa;


            var deltaWind = nextRangeTableMatch.wind - bestRangeTableMatch.wind;
            var windFor4ms = bestRangeTableMatch.wind + (deltaWind * deltaRangeInPercent);

            var finalWindMoa = windFor4ms / 4 * $scope.windStr;

            // so take windDir into account
            if ($scope.activeWindDir.text === $scope.easyWindDirs[0].text) {
                finalWindMoa = finalWindMoa * (-1);
            }

            $scope.windMoa = finalWindMoa;

            //console.log("elevationMoa: " + elevationMoa);
            //console.log("finalWindMoa: " + finalWindMoa);

            $('#myModal').modal();

        } else {
            // TODO: Make this pretty
            var lastEntry = $scope.activeWeapon.rangeTable[$scope.activeWeapon.rangeTable.length - 1];
            alert("Out of range.\nRange shouldn't be bigger than: " + lastEntry.range);
        }

    };

}
