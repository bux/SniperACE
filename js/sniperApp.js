var app = angular.module('sniperApp', []);

app.directive('integer', function(){
    return {
        require: 'ngModel',
        link: function(scope, ele, attr, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                return parseInt(viewValue, 10);
            });
        }
    };
});

app.directive('float', function(){
    return {
        require: 'ngModel',
        link: function(scope, ele, attr, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                return parseFloat(viewValue);
            });
        }
    };
});
