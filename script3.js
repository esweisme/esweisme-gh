var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         

         document.getElementById("container").innerHTML =xhttp.responseText;

      }
  };
  xhttp.open("GET", "ajax/kategori.php?keyword=" + keyword.value, true);
  xhttp.send();