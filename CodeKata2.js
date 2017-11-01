var nums = [1, 5, 10, 50, 100, 500, 1000];
var roms = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

function numToRom(){
	var number = Number(document.getElementById('num').value);
	if (number > 3999 || number < 1){
		alert("Number cannot be represented correctly in Roman Numerals");
	} else {
		var romStr =  "";
		for (i = nums.length - 1; i >= 0; i--){
			var div = Math.floor(number / nums[i]);
			switch (div) {
				case 4: 
					if (romStr.slice(-1) == roms[i+1]) {
						romStr = romStr.substring(0, romStr.length - 1) + roms[i] + roms[i+2];
					} else {
						romStr += roms[i] + roms[i+1];
					}
					break;
				case 0: break;
				default: romStr += sameNum(div, i);
			}
			number = number - nums[i] * div;
		}
		document.getElementById('rom').value = romStr;
	}
}

function sameNum(div, index){
	var same = '';
	for (j = 0; j<div; j++){
		same += roms[index];
	}
	return same
}

function romToNum(){
	var roman = document.getElementById('rom').value;
	var number = 0;
	for (i = 0; i < roman.length; i++){
		var startIndex = roms.indexOf(roman[i]), 
			nextIndex = roms.indexOf(roman[i+1]);
		if (nextIndex > startIndex + 2) {
			alert('Invalid Roman Numeral');
			number = 'NaN'
			break;
		} else if ( nextIndex > startIndex){
			number += nums[nextIndex] - nums[startIndex];
			i++;
		} else if (nextIndex == startIndex) {
			if(roms.indexOf(roman[i+2]) == startIndex){
				if(roms.indexOf(roman[i+3] == startIndex)){
					alert('Invalid Roman Numeral');
					number = 'NaN'
					break;
				} else {
					number += nums[startIndex] * 3;
					i += 2;
				}
			} else {
				number += nums[startIndex] * 2;
				i++;
			}
		} else {
			number += nums[startIndex];
		}
	}
	document.getElementById('num').value = number;
}
