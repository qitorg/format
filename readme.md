# @qit/format

format based on certain keys: `A`, `9`, and `*`

```js
var format = require('@qit/format');

format('**** **** **** ****', '4111111111111111') === '4111 1111 1111 1111'
format('**** **** **** ****', '************1111') === '**** **** **** 1111'
format('**** **** **** ****', '************1111') === '**** **** **** 1111'

// handles incomplete values
format('9999 9999 9999 9999', '************1111') === '1111'
format('**** **** **** ****', '41111111') === '4111 1111'
format('**** **** **** ****', '411111111') === '4111 1111 1'

// ignore other characters
format('(999) 999-9999', '12345 67789') === '(123) 456-7789'
format('(999) 999-9999', '12A345 677B89') === '(123) 456-7789'

// appends leftover text
format('A AAAA AAA', 'ILOVEFOOD!') === 'I LOVE FOOD!'
```