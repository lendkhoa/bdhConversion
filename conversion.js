
window.onload = function() {
	document.getElementById("convert").addEventListener("click", function() {
		execute();
	});
}

function execute() {
	var l = parseInt(document.getElementById("leftField").value);
	var r = parseInt(document.getElementById("rightField").value);
		
	if (l==2 && r==1) {
		var binary = getLValue();
		updateRValue(binToDec(binary));
		
	} else if (l==2 && r== 3) {
		var binary = getLValue();
		updateRValue(binToHex(binary));
				
	} else if (l==1 && r == 2) {
		var decimal = getLValue();
		updateRValue(decToBin(decimal));
		
	} else if (l==1 && r == 3) {
		var decimal = getLValue();
		updateRValue(decToHex(decimal));
		
	} else if (l==3 && r == 1) {
		var hexadecimal = getLValue();
		updateRValue(hexToDec(hexadecimal));
	
	} else if (l==3 && r == 2) {
		var hexadecimal = getLValue();
		updateRValue(hexToBin(hexadecimal));
	} else {
		detectError();	
	}
}

function getLValue() {
	return document.getElementById("leftValue").value;
}

function updateRValue(updatedVal) {
	document.getElementById("rightValue").value = updatedVal;
}

function detectError() {
	$('#errorMsg').show();
	$('#errorMsg').fadeTo(2000, 500).slideUp(500, function(){
		$('#errorMsg').slideUp(500);
	});
}

function binToDec(inputString) {
	return toDecimal(inputString, 2);
}

function hexToDec(inputString) {
	return toDecimal(inputString, 16);
}

function decToBin (decimal) {
	return (decimal >>> 0).toString(2);
}

function decToHex (decimal) {
	return (decimal >>> 0).toString(16);
}

function binToHex (binary) {
	dec = binToDec(binary);
	return decToHex(dec);		
}

function hexToBin (hexadecimal) {
	dec = hexToDec(hexadecimal);
	return decToBin(dec);
}

/** 
 * convert every base to base 10 
 * Reference source: https://stackoverflow.com/questions/37109968/how-to-convert-binary-fraction-to-decimal/37110181
 */
function toDecimal (string, base) {
	string = string.toString().trim().split(".");
	base = +base || 2;
	return (parseInt(string[0].replace("-", ""), base) + (string[1] || "").split("").reduceRight((sum, bit) => (sum + parseInt(bit, base)) / base, 0)) * (+(string[0][0] !== "-") || -1);
}
