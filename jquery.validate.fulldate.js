jQuery.validator.addMethod("dateMMYYYY", function(value, element) {
	return this.optional(element) || /^(0[1-9]|1[012])[\.\/-](19|20)\d\d$/.test(value);
}, "Please enter the date in MM/YYYY format.");
