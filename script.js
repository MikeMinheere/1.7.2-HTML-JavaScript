var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'turn light on';
document.body.appendChild(btn);

// schijf hier tussen je code
var ison = true

function changeBackground(color) {
    document.body.style.background = color;
}
changeBackground('black')
function changeLight(){
     if (ison == false){
          changeBackground('black')
          ison = true
          btn.innerHTML = 'turn light on'
          console.log('the light is off')
     }
     else{
          changeBackground('yellow')
          ison = false
          btn.innerHTML = 'turn light off'
          console.log('the light is on')
     }
}
btn.onclick = changeLight
// schijf hier tussen je code