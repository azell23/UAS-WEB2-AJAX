$(document).ready(function () {
  $.ajax({
    url: "../backend/list_data.php",
    type: "GET",
    cache: "false",
    success: function (resp) {
      let data = JSON.parse(resp);
      let result = "";
      for (i = 0; i < data.length; i++) {
        result +=
          "<tr>" +
          "<td>" +
          data[i].nomor_surat +
          "</td>" +
          "<td>" +
          data[i].tanggal +
          "</td>" +
          "<td>" +
          data[i].judul +
          "</td>" +
          '<td> <a  class="btn btn-primary text-decoration-none" id ="update" fid = "' +
          data[i].id +
          '">Update</a> <a class="btn btn-danger text-decoration-none" id ="delete" fid = "' +
          data[i].id  +
          '">Delete</a> </td > ' +
          "</tr>";
      }
      $('#isi').html(result);
    },
    error : function(res){
      console.log(res);
    }
  });
});

const btnTambah = document.getElementById("tambah");
btnTambah.onclick = function () {
  window.location.href = "add.html";
};

$(document).on('click', '#update', function () {
  window.location.href = "update.html?id=" + $(this).attr("fid");
});

$(document).on('click', '#delete', function () {
  let obj = new Object();
  obj.id = $(this).attr("fid");
  let json = JSON.stringify(obj);
  $.post(
    "../backend/hapus_data.php",
    json,
    function (resp) {
      let response = JSON.parse(resp)
      if (response.status == "success") {
        window.location.href = "index.html"
      } else {
        console.log("hapus data gagal")
      }
  });
});




