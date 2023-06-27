function HabiDsabi() {
    if (document.getElementById('habi').checked == true) {
      document.getElementById('envia').disabled = ""
    }
    if (document.getElementById('habi').checked == false) {
      document.getElementById('envia').disabled = "disabled"
    }
  }
  
  function assinar(){
    window.location.href = "minhaNovaPagina.html"
  }