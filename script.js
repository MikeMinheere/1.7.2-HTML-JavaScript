var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code
btn.innerHTML = 'turn light on';
function changeBackground(color) {
    document.body.style.background = color;
 }
window.addEventListener("load",function() { changeBackground('black') });

A = 1
var str = "the light is on";
btn.onclick = (A = 2,"load",function() { changeBackground('yellow') });
if (A == 2){
     console.log(str)
}

// schijf hier tussen je code