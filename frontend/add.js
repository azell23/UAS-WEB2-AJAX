// const btnAdd = document.getElementById("add");
// btnAdd.onclick = function (evt) {
//   const data = {
//     nomor: document.getElementById("nomor").value,
//     tanggal: document.getElementById("tanggal").value,
//     judul: document.getElementById("judul").value,
//   };

//   const xhttp = new XMLHttpRequest();
//   xhttp.open(
//     "POST",
//     "http://localhost/ajax/backend/tambah_proses.php",
//     true
//   );
//   xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   xhttp.send(JSON.stringify(data));
//   xhttp.onreadystatechange = function () {
//      var result = JSON.parse(this.responseText);
//      if (result.status == "success") {
//        window.location.href = "index.html";
//      } else {
//        alert("Eror");
//      }
//    };
//    xhttp.onerror = function () {
//      alert("Terjadi kesahalan");
//    };
// }

$(document).on("click", "#add", function () {
  var lptp = new Object();
  lptp.nomor = $("#nomor").val();
  lptp.tanggal = $("#tanggal").val();
  lptp.judul = $("#judul").val();
  $.post("../backend/tambah_proses.php", JSON.stringify(lptp), function (resp,status) {
    let result = resp;
    if (result.status == "success") {
      window.location.href = "index.html";
    } else {
      alert("Terjadi kesalahan");
    }
  });
});