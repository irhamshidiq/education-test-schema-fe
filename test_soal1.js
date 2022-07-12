/**
    1. Kami mempunyai data array dengan data : 

    var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
    var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
    var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

    - buatlah sebuah program untuk menampilkan banyak angka yang keluar
    output yang di inginkan : total data paling banyak keluar adalah #angka dengan jumlah #10

    - contoh:
        var data = [2, 2, 2, 2, 4, 2, 1]
        output : total data paling banyak keluar adalah 2 dengan jumlah 5
*/

var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

var data = [...data1, ...data2, ...data3];

function angkaTerbanyak(arr) {
	let item;
	let jmlItem = 0;
	let n = 0;

	for (let i = 0; i <= arr.length; i++) {
		for (let j = i; j <= arr.length; j++) {
			arr[j] == arr[i] ? n++ : "";

			if (jmlItem < n) {
				jmlItem = n;
				item = arr[i];
			}
		}

		n = 0;
	}

	return console.log(`total data paling banyak keluar adalah ${item} dengan jumlah ${jmlItem}`);
}

angkaTerbanyak(data);