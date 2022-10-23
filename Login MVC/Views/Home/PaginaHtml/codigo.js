function Login() {
    var usuario = document.usuario.value;
    var password = document.password.value;
    if (usuario == "admin" && password == "1234") {
      window.location = "index.html";
    }
    if (usuario == "admin2" && password == "pass2") {
      window.location = "index.html";
    }
    else{
    }
  }