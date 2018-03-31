
'use strict';

((function () {

    var rotationPeriod;
    var WHOLE_CYCLE = 27.321661;
    var ONE_TWELVES = 1 / 12;
    var currentDateTime = new Date("2018-03-31T12:00:00Z");;
    var birthDateWithTime = new Date("2015-03-25T12:00:00Z");

    var PERIODS = ['+', '+', '-', '+', '0', '+', '0', '-', '+', '+', '-', '0'];
    var dateDifference = daysBetween(currentDateTime, birthDateWithTime);
    console.log('date difference: ' + dateDifference);
    var periodsOfMoonCount = (dateDifference / WHOLE_CYCLE).toString();
    console.log('count of moon cycles: ' + periodsOfMoonCount)
    var fractionPart = periodsOfMoonCount.substring(periodsOfMoonCount.indexOf('.') + 1, periodsOfMoonCount.length);
    console.log('fraction part: ' + fractionPart);
    var fractionPartInPercents = "0." + fractionPart;
    var numberOfRow = new Number(fractionPartInPercents) * 12;
    var numberOfRowString = numberOfRow.toString().substring(0, numberOfRow.toString().indexOf('.'));
    console.log('period number: ' + numberOfRowString);
    console.log('period accordance: '+PERIODS[parseInt(numberOfRowString, 10)]);

    function daysBetween(date1, date2) {
        var ONE_DAY = 1000 * 60 * 60 * 24;

        var date1MS = date1.getTime();
        var date2MS = date2.getTime()

        var differenceMS = Math.abs(date1MS - date2MS);

        return Math.round(differenceMS / ONE_DAY);
    }
}))();