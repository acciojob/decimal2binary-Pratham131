function decimalToBinary(num) {
  // Write your code here
	let arr = [];

	while(num > 1){
	    arr.push(num%2)
	    num = Math.floor(num/2)
	}
	arr.sort((a, b) => b-a)
	if(num === 1){
	    arr.unshift(num)
	}
	

	let ans = arr[0];
	for (let i = 1; i < arr.length; i++) {
		ans = ans*10 + arr[i];
	}
	return ans.toString();
}

window.decimalToBinary = decimalToBinary;