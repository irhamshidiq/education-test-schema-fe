/**
	3. buatlah program looping untuk menampilkan output di bawah 

	output 1:  

    *
    **
    ***
    ****
    *****
    ******

    output 2: 

            *
           **
          ***
         ****
        *****
       ******
*/

let output1 = "";
let output2 = "";

for (let i = 1; i <= 6; i++) {
	console.log(output1 = "*".repeat(i));
}

for (let i = 1; i <= 6; i++) {
	for(let j = 1; j <= 6 - i; j++) {
		output2 += " ";
	}
	for (let h = 1; h <= i; h++) {
		output2 += "*";
	}

	output2 += "\n";
}

console.log(output2);