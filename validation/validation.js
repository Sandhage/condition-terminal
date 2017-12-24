exports.validateRestingHeart = function (input) {
    var result = {
        pass: true,
        error: 'Nothing wrong!'
    };

    if (input.length <= 0) {
        result.pass  = false;
        result.error = 'No answer provided.';
    }

    console.log('input: ' + parseInt(input).toString());
    console.log('type: ' + typeof parseInt(input));
    if (isNaN(input)) {
        console.log("WOMPWOMPWOMP");
        result.pass  = false;
        result.error = 'Answer must be a number.';
    }

    return result;
}

exports.validateCalories = function (input) {
    var result = {
        pass: true,
        error: 'Nothing wrong!'
    };

    if (input.length <= 0) {
        result.pass  = false;
        result.error = 'No answer provided.';
    }

    if (typeof parseInt(input) !== 'number') {
        result.pass  = false;
        result.error = 'Answer must be a number.';
    }

    return result;
}

exports.validateDayDescription = function (input) {
    result = {
        pass: true,
        error: 'Nothing wrong!'
    };

    if (input.length <= 0) {
        result.pass  = false;
        result.error = 'No answer provided.';
    }

    if (input.length > 140) {
        result.pass  = false;
        result.error = 'Answer is longer than 140 characters.';
    }

    if (typeof input !== 'string') {
        result.pass  = false;
        result.error = 'Answer must be a string.';
    }

    return result;
}