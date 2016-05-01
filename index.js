"use strict";

module.exports = function(number, options) {
    var result;

    if (options.wide)
        result = (number / 16) * 9;
    else
        result = (number / 4) * 3;

    if (!isNaN(result)) {
        if (options.wide)
            return "16:9 -> " + result;
        else
            return "4:3 -> " + result;
    } else {
        return "Error! '" + number + "' is not a number.";
    }

}
