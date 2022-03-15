window.onload = function() {
    var footer = document.createElement('footer');
    document.body.appendChild(footer);


    var element = document.createElement('a');
    element.href = '../../index.html';
    element.style.position = 'absolute';
    element.innerHTML= 'Continuar';
    element.style.color = 'red';
    
    element.style.bottom = '1%';
    element.onclick = showAlert;
    footer.appendChild(element);

}

function showAlert(){
    alert('Felicidades! Terminaste el juego!');
}
