QUnit.test( "endsWith test", function( assert ) {
	assert.ok( "12345.23".endsWith(".23"), "Passed!" );
	assert.ok( "12345.".endsWith("."), "Passed!" );
});
QUnit.test( "defaultOptions test", function( assert ) {
	assert.ok($.inputformat.defaultOptions!==undefined, "Passed!" );
	assert.ok($.inputformat.defaultOptions.thousandSep==',', "Passed!" );
	assert.ok($.inputformat.defaultOptions.decimalSep=='.', "Passed!" );
	assert.ok($.inputformat.defaultOptions.allowDecimals===true, "Passed!" );
	assert.ok($.inputformat.defaultOptions.allowNegative===true, "Passed!" );
	assert.ok($.inputformat.defaultOptions.allowLeadingZero===false, "Passed!" );
	assert.ok($.inputformat.defaultOptions.maxDecimalDigits==='unlimited', "Passed!" );
});
QUnit.test( "applyOptions test", function( assert ) {
		
	$('#input').inputNumber();

	var json = $.inputformat.getOptions($('#input'));
	
	assert.ok(json.thousandSep == ',', "Passed!" );
	assert.ok(json.decimalSep == '.', "Passed!" );
	assert.ok(json.allowDecimals === true, "Passed!" );
	assert.ok(json.allowNegative === true, "Passed!" );
	assert.ok(json.allowLeadingZero === false, "Passed!" );
	assert.ok(json.maxDecimalDigits == 'unlimited', "Passed!" );

	$('#input').inputNumber({ allowDecimals: false });

	json = $.inputformat.getOptions($('#input'));
	
	assert.ok(json.thousandSep == ',', "Passed!" );
	assert.ok(json.decimalSep == '.', "Passed!" );
	assert.ok(json.allowDecimals === false, "Passed!" );
	assert.ok(json.allowNegative === true, "Passed!" );
	assert.ok(json.allowLeadingZero === false, "Passed!" );
	assert.ok(json.maxDecimalDigits == 'unlimited', "Passed!" );

	$('#input').inputNumber({ allowNegative: false });

	json = $.inputformat.getOptions($('#input'));
	
	assert.ok(json.thousandSep == ',', "Passed!" );
	assert.ok(json.decimalSep == '.', "Passed!" );
	assert.ok(json.allowDecimals === true, "Passed!" );
	assert.ok(json.allowNegative === false, "Passed!" );
	assert.ok(json.allowLeadingZero === false, "Passed!" );
	assert.ok(json.maxDecimalDigits == 'unlimited', "Passed!" );

	$('#input').inputNumber({ thousandSep: '.', decimalSep: ',' });

	json = $.inputformat.getOptions($('#input'));
	
	assert.ok(json.thousandSep == '.', "Passed!" );
	assert.ok(json.decimalSep == ',', "Passed!" );
	assert.ok(json.allowDecimals === true, "Passed!" );
	assert.ok(json.allowNegative === true, "Passed!" );
	assert.ok(json.allowLeadingZero === false, "Passed!" );
	assert.ok(json.maxDecimalDigits == 'unlimited', "Passed!" );

	$('#input').inputNumber({ allowLeadingZero: true, numericOnly: true });

	json = $.inputformat.getOptions($('#input'));
	
	assert.ok(json.thousandSep === '', "Passed!" );
	assert.ok(json.decimalSep == '.', "Passed!" );
	assert.ok(json.allowDecimals === false, "Passed!" );
	assert.ok(json.allowNegative === false, "Passed!" );
	assert.ok(json.allowLeadingZero === true, "Passed!" );
	assert.ok(json.maxDecimalDigits == 'unlimited', "Passed!" );

	$('#input').inputNumber({ allowLeadingZero: true, maxDecimalDigits: 3 });

	json = $.inputformat.getOptions($('#input'));
	
	assert.ok(json.thousandSep == ',', "Passed!" );
	assert.ok(json.decimalSep == '.', "Passed!" );
	assert.ok(json.allowDecimals === true, "Passed!" );
	assert.ok(json.allowNegative === true, "Passed!" );
	assert.ok(json.allowLeadingZero === true, "Passed!" );
	assert.ok(json.maxDecimalDigits == 3, "Passed!" );
});
QUnit.test( "unformat test", function( assert ) {

	$('#input').inputNumber();
	
	$('#input').val("3,500,590.67");

	assert.ok($.inputformat.unformat($('#input'), $('#input').val()) == '3500590.67', "Passed!" );

	$('#input').val("3,500,590.");

	assert.ok($.inputformat.unformat($('#input'), $('#input').val()) == '3500590', "Passed!" );

});
QUnit.test( "format test", function( assert ) {

	$('#input').inputNumber();
	
	$('#input').val("3500590.67");

	assert.ok($.inputformat.format($('#input'), $('#input').val()) == '3,500,590.67', "Passed!" );

	$('#input').val("3500590.");

	assert.ok($.inputformat.format($('#input'), $('#input').val()) == '3,500,590', "Passed!" );
	
});
