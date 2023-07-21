function decimalToBinary(num) {
  // Write your code here
	let arr = [];

	while(num > 1){
	    arr.push(num%2)
	
	    num = Math.floor(num/2)
	}
	if(num === 1){
	    arr.push(num)
	}
	arr.sort((a, b) => b-a)

	let ans;
	for (let i = 0; i < arr.length; i++) {
		ans = ans*10 + arr[i];
	}
	return ans;
}

window.decimalToBinary = decimalToBinary;