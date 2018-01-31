function validar(){
  var usuario=document.getElementById("usuario").value;
  var contraseña=document.getElementById("contraseña").value;

  if(usuario=="admin" && contraseña=="admin"){
    alert("Bienvenido " +usuario)
     window.location="pprincipal.html"
  }else{
    alert("Usuario o contraseña no valida");
  }
}
