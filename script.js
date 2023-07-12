document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting
  ntc_or_ncell = document.getElementById("ntc_or_ncell");

  var phone_number_input = document.getElementById("phone_number").value;
  if (/[9][8|7]{1}[4|5|6]{1}[0-9]{7}/.test(phone_number_input)) {
    ntc_or_ncell.innerHTML = "NTC ho";
  } else if (
    /[9][8][0|1|2]{1}[0-9]{7}|[9][7][0]{1}[0-9]{7}/.test(phone_number_input)
  ) {
    ntc_or_ncell.innerHTML = "NCELL ho";
  }
});
