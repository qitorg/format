/**
 * format() requires two parameters as strings.
 * pattern conforms to a certain criteria with 9, A, and *.
 * value must have length or the result is an empty string.
 * result will be a new string.
 *
 * ```js
 * format('**** **** **** ****', '4111111111111111') === '4111 1111 1111 1111'
 * ```
 *
 * @param {String} pattern
 * @param {String} value
 * @returns {String}
 */
function format(pattern, value) {
  if (typeof value !== 'string' || typeof pattern !== 'string') {
    throw new Error(format.errorMessage);
  }
  if (typeof value === 'string' && !value.length) {
    return '';
  }
  if (typeof pattern === 'string' && !pattern.length) {
    return value;
  }

  var patternParts = pattern.split('');
  var valueParts = value.split('');
  var valuePartsLength = valueParts.length;

  // count the times we looped valueParts
  var count = 0;

  return patternParts.reduce(function(result, key) {
    if (!(key in format.keys)) {
      return result + key;
    }

    if (count < valuePartsLength) {
      var vPart = '';
      while (count < valuePartsLength && vPart.length === 0) {
        if (format.keys[key].test(valueParts[count])) {
          vPart = valueParts[count];
        }
        count++;
      }
      return result + vPart;
    }

    return result;
  }, '').trim() + (count < valuePartsLength ? value.slice(count) : '');
};
format.errorMessage = 'parameters must be string';
format.keys = {
  '9': /\d/,
  'A': /[a-zA-Z]/,
  '*': /[a-zA-Z0-9*]/
};

module.exports = format;