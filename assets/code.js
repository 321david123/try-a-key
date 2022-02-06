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
// function funcion(){
//     const key = document.getElementById("key").value;
//     if (key === "qwertymn"){
//         document.getElementById("p").className += "true";
//         document.getElementById("p").innerText = ("Bien!");
//         window.location.href = "https://github.com/321david123";
//     } else {
//         document.getElementById("p").innerText = ("Esa llave no existe!");
//     }
// };
function funcion(){
    const key = document.getElementById("key").value;
    switch (key) {
        case 'qwertymn':
            document.getElementById("p").className += "true";
            document.getElementById("p").innerText = ("Bien!");
            window.location.href = "https://github.com/321david123";
        break;
        default:
            document.getElementById("p").innerText = ("Esa llave no existe!");
    }
};