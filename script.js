var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'zet licht aan';
document.body.appendChild(btn);

// schijf hier tussen je code
function changeBackground(color) {
    document.body.style.background = color;
 }
 window.addEventListener("load",function() { changeBackground('black') });
 btn.onclick = ("load",function() { changeBackground('yellow') });
 var str = "het licht is aan";
 console.log(str);
// schijf hier tussen je code