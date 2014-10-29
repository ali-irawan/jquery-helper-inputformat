jquery-inputformat
==================

jQuery based input formatting

The idea is to create a javascript library for handling number/amount input

Features
--------
* thousandSep - thousand separators, default using , (comma)
* decimalSep - decimal separators, default using . (dot)
* allowDecimals - default **true**
* allowNegative - default **true**
* allowLeadingZero - default **false**
* maxDecimalDigits - default **'unlimited'** or specified the maximum as number, e.g. 2, 3
* numericOnly - if specified as **true**, will set allowDecimals to false, allowNegative to false, thousandSep to empty string

Requirements
------------

* jQuery


Getting Started
---------------

Put in your HTML head
```html
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="src/jquery-inputformat.js"></script>
```
This sample HTML
```html
	<input id="default" type="text" style="width: 500px" placeholder="Default" />	
```
Put some Javascript
```javascript

	<script>
		$(document).ready(function(){
			$('#default').inputNumber();
		});
	</script>

```

[More demo here](http://www.solusiteknologi.co.id/projects/jquery-inputformat)
