var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         var data=JSON.parse(xhttp.responseText);
         data.forEach(function(element) {
      document.getElementById("tempat").innerHTML +="nama :" + element.nama + "<br>Alamat :" + element.alamat + "<br><hr>";
    });
      }
  };
  xhttp.open("GET", "https://sigitwahyudi.web.id/ajax/php.php", true);
  xhttp.send();
