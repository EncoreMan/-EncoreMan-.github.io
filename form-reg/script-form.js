let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let stcap = 0;
let cap = "";

function gencap()
{
    stcap = 0;
    cap = "";
    for (i = 0; i < 5; i++)
    {
        cap += list[(Math.floor(Math.random() * 26))];
    }
    document.getElementById('CaptPic').innerHTML = cap;
    document.getElementById('stcap').innerHTML = "Введите капчу";
    document.getElementById('stcap').style.color = "white";
}

gencap();
let submit = document.getElementById("form");
submit.addEventListener("submit", function(e){
    e.preventDefault();
    let caphcha = document.getElementById("textcap");
    if (caphcha.value == cap){
        alert("Вы зашли");
    }
    else {
        alert("Неправильная капча");
    }
    
})
