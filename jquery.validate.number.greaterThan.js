jQuery.validator.addMethod("greaterThan", function(value, element, params) {
	var target = $(params).val();
	if(value === "")
		return true;
	var isValueNumeric = !isNaN(parseFloat(value)) && isFinite(value);
	var isTargetNumeric = !isNaN(parseFloat(target)) && isFinite(target);
	if (isValueNumeric && isTargetNumeric) {
		return Number(value) > Number(target);
	}
	if (!/Invalid|NaN/.test(new Date(value))) {
		return new Date(value) > new Date(target);
	}
	return false;
}, "Must be greater than {0}.");
