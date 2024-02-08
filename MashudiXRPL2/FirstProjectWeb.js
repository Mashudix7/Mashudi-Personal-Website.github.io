const nama = "Mashudi";
let usia = 30;

function ulang() {
  if (usia == 30) {
    console.log("Anda Dewasa");
  } else if (usia > 10 && usia < 18) {
    console.log("Anda Remaja");
  } else if (usia < 10) {
    console.log("Anda Bayi");
  }
}

console.log(nama);
console.log(usia);
ulang();
