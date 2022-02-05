// este codigo no es mio.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        e.preventDefault();
      }
    }))
  });
// este codigo no es mio. Lo que hace es no dejar dar 
// enter cuando usas una computadora. Ya que quiebra mi codigo.



//este codigo si es 100% mio
function funcion(){
    const key = document.getElementById("key").value;
    console.log(key);
    if (key === "qwertymn"){
        console.log("correct sintaxis");
        window.location.href = "https://github.com/321david123";
    } else {
        console.log("incorrect sintaxis");
    }
};
