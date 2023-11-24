
window.onload = function() {
    let body = document.querySelector('body');
    body.innerHTML += `<div class="header">
    <h1>Магічна куля</h1>
    <input type="text">
    
    </div>
    <div class="container">
        <img src="ball.png" alt="Магічна Куля">
        <span class="text text-ch"></span>
    </div>`
    
    body.addEventListener('keypress', script);
}
function script(event) {
    let input = document.querySelector('input')
    if  (event.key === 'Enter') {
        let arr = ['Так', 'Ні'];
        let textCH = document.querySelector('.text-ch');
        
        let yN = document.querySelector('.text');
        let variant = Math.round(Math.random())
        yN.innerHTML = arr[variant];
        yN.classList.toggle('text-ch')
        if (variant === 1) {
            yN.style.color = 'red';            
            
        } else {
            yN.style.color = 'green';

        }
    }
}