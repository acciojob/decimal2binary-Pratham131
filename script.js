function decimalToBinary(num) {
  // Write your code here

	if (num === 0) return '0';

  let binary = '';
  // while (decimal > 0) {
  //   const remainder = decimal % 2;
  //   binary = remainder + binary; // Store the remainder in reverse order
  //   decimal = Math.floor(decimal / 2);
  // }

  // return binary;
	// let arr = [];

	while(num > 0){
	    let remainder = (num%2)
		binary = remainder + binary
	    num = Math.floor(num/2)
	}
	// arr.sort((a, b) => b-a)
	// if(num === 1){
	//     arr.unshift(num)
	// }
	

	// let ans = arr[0];
	// for (let i = 1; i < arr.length; i++) {
	// 	ans = ans*10 + arr[i];
	// }
	return binary.toString();
}

window.decimalToBinary = decimalToBinary;