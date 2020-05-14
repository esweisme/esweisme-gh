var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         

         document.getElementById("container").innerHTML =xhttp.responseText;

      }
  };
  xhttp.open("GET", "https://sigitwahyudi.web.id/ajax/kategori.php", true);
  xhttp.send();
