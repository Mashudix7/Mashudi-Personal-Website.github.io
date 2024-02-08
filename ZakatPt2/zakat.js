document.addEventListener("input", function (event) {
  if (
    event.target.tagName.toLowerCase() === "input" &&
    event.target.type === "text"
  ) {
    updateInputValue(event.target.id);
  }
});

function updateInputValue(id) {
  var inputElement = document.getElementById(id);
  var inputValue = formatNumberInput(inputElement.value);
  var numericValue = inputValue.replace(/[^\d]/g, "");
  var formattedValue =
    "Rp. " + new Intl.NumberFormat("id-ID").format(numericValue);

  if (inputValue === "Rp. ") {
    formattedValue = inputValue;
  }

  inputElement.value = formattedValue;

  if (id === "mal") {
    hitungZakatMal();
  } else if (id === "perdagangan") {
    hitungZakatPerdagangan();
  } else if (id === "emas") {
    hitungZakatEmas();
  } else if (id === "tabungan") {
    hitungZakatTabungan();
  }
}

function formatNumberInput(input) {
  return input.replace(/[^\d.,]/g, "");
}

function formatNumberDisplay(number) {
  return "Rp. " + new Intl.NumberFormat("id-ID").format(number);
}

function kalkulatorZakatMal(hartaMal) {
  return hartaMal * 0.025;
}

function hitungZakatMal() {
  var hartaMal = parseFloat(
    document.getElementById("mal").value.replace(/[^\d]/g, "")
  );
  var result = document.getElementById("result");
  result.innerHTML =
    "Zakat Mal: " + formatNumberDisplay(kalkulatorZakatMal(hartaMal));
}

function kalkulatorZakatPerdagangan(nilaiPerdagangan) {
  return nilaiPerdagangan * 0.025;
}

function hitungZakatPerdagangan() {
  var nilaiPerdagangan = parseFloat(
    document.getElementById("perdagangan").value.replace(/[^\d]/g, "")
  );
  var result = document.getElementById("result");
  result.innerHTML =
    "Zakat Perdagangan: " +
    formatNumberDisplay(kalkulatorZakatPerdagangan(nilaiPerdagangan));
}

function kalkulatorZakatEmas(beratEmas) {
  return (beratEmas * 2.5) / 100;
}

function hitungZakatEmas() {
  var beratEmas = parseFloat(
    document.getElementById("emas").value.replace(/[^\d]/g, "")
  );
  var result = document.getElementById("result");
  result.innerHTML =
    "Zakat Emas: " + formatNumberDisplay(kalkulatorZakatEmas(beratEmas));
}

function kalkulatorZakatTabungan(tabungan) {
  return tabungan * 0.025;
}

function hitungZakatTabungan() {
  var tabungan = parseFloat(
    document.getElementById("tabungan").value.replace(/[^\d]/g, "")
  );
  var result = document.getElementById("result");
  result.innerHTML =
    "Zakat Tabungan: " + formatNumberDisplay(kalkulatorZakatTabungan(tabungan));
}

function kalkulatorZakatLainnya(nilaiLainnya) {
  return nilaiLainnya * 0.025;
}

function hitungZakatLainnya() {
  var nilaiLainnya = parseFloat(
    document.getElementById("lainnya").value.replace(/[^\d]/g, "")
  );
  displayMessage(
    "Zakat Lainnya: " +
      formatNumberDisplay(kalkulatorZakatLainnya(nilaiLainnya))
  );
}

function kalkulatorZakat() {
  var totalZakat =
    kalkulatorZakatMal() +
    kalkulatorZakatPerdagangan() +
    kalkulatorZakatEmas() +
    kalkulatorZakatTabungan() +
    kalkulatorZakatLainnya();
  return totalZakat;
}

function hitungZakat() {
  displayMessage("Total Zakat: " + formatNumberDisplay(kalkulatorZakat()));
}

function clearValues() {
  var inputs = document.querySelectorAll('input[type="text"]');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  var result = document.getElementById("result");
  result.innerHTML = "";
}

function displayMessage(message) {
  var result = document.getElementById("result");
  result.innerHTML = message;
}

function toggleElementVisibility(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
