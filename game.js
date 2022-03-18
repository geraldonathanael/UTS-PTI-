
let charcode = localStorage.getItem("charcode");
let playerName = localStorage.getItem("nama");
var activity = 0;
document.getElementById("player").innerHTML=playerName;
var semester = 1;
const speed = 1800;
let clockDiv = document.querySelector("#clock");
let semDiv = document.querySelector("#sem");
let messageDiv = document.querySelector("#message");
let gameStartTime = 0;
let realStartTime = Date.now(); 
var day = 1;
var alertmakan = 0;
var alertmain = 0;
var alerttidur = 0;
var console = document.getElementById("alertmakan");
var console2 = document.getElementById("alertmain");
var console3 = document.getElementById("alerttidur");
var kelipatan = 0;
var quiz = 0;
var dropout = 0;
$( document ).ready(function() {
    document.getElementById("myNav").style.width = "100%";
    if(charcode=="M"){
        $("#avatar-container").css("background-image", "url(assets/M/idle.png)");
    }
    if(charcode=="F"){
        $("#avatar-container").css("background-image", "url(assets/F/idle.png)");
    }
    if(charcode=="R"){
        $("#avatar-container").css("background-image", "url(assets/R/idle.png)");
    }
});

    let warningmakan = setInterval(function(){
        if(makan.value <= 15){
            alertmakan += 1;
            if( alertmakan == 1){
                $('<p id=warningmakan>Butuh makanan</p>').appendTo('#alertmakan');
            }
        }
        else if(makan.value > 15){
            alertmakan = 0;
            if(console.hasChildNodes()){
                if(alertmakan == 0){
                    const listmakan = document.getElementById("warningmakan");
                    listmakan.remove();   
                }
            }
        }
    },1000);

    let warningmain = setInterval(function(){
        if(main.value <= 15){
            alertmain += 1;
            if( alertmain == 1){
                $('<p id=warningmain>Butuh Hiburan</p>').appendTo('#alertmain');
            }
        }
        else if(main.value > 15){
            alertmain = 0;
            if(console2.hasChildNodes()) {
                if(alertmain == 0){
                    const listmain = document.getElementById("warningmain");
                    listmain.remove();              
                }
            }
        } 
    },1000);
    let warningtidur = setInterval(function(){
        if(tidur.value <= 15){
            alerttidur += 1;
            if( alerttidur == 1){
                $('<p id=warningtidur>Butuh tidur</p>').appendTo('#alerttidur');
            }
        }
        else if(tidur.value > 15){
            alerttidur = 0;
            if(console3.hasChildNodes()){
                if(alerttidur == 0){
                    const listtidur = document.getElementById("warningtidur");
                    listtidur.remove();  
                }
            }
        } 
        
    },1000);

    let decay = setInterval(function(){
        makan.value -= 1;
        main.value -= 1;
        tidur.value -= 1;
        if(makan.value <= 15 ){
            belajar.value -= 1;    
        }
        if(main.value <= 15 ){
            belajar.value -= 1;    
        }
        if(tidur.value <= 15 ){
            belajar.value -= 1;    
        }
        

    }, 2000);
    let timerId = setInterval(function() {
        let gameTime = gameStartTime + (Date.now() - realStartTime) * speed;
        let min = Math.floor(gameTime / 60000) % 60;
        let hour = Math.floor(5 + gameTime / 3600000) % 24;
        if(hour == 0 && min == 0) { 
        day += 1;
        }
        if(hour >= 6 && hour < 11){
            messageDiv.textContent = "Selamat Pagi " + playerName + "!";
            $('#screen').css('background-image',"url(assets/timebg/day.gif)"); 
        }   
        else if(hour >= 12 && hour < 17){
            messageDiv.textContent = "Selamat Siang " + playerName + "!";
            $('#screen').css('background-image',"url(assets/timebg/afternoon.gif)"); 
        }
        else if(hour >= 17 && hour < 19){
            messageDiv.textContent = "Selamat Sore " + playerName + "!";
            $('#screen').css('background-image',"url(assets/timebg/evening.gif)"); 
        }
        else if(hour >= 19 && hour < 24 || hour >= 0 && hour < 6){
            messageDiv.textContent = "Selamat Malam " + playerName + "!";
            $('#screen').css('background-image',"url(assets/timebg/night.gif)"); 
        }

        if(day % 2 == 0 && day != 0 && hour == 0 && min == 0 && day % 3 != 0 ){ 
            kelipatan += 1;
            var a = Math.floor((Math.random() * 100) + 1);
            var b = Math.floor((Math.random() * 100) + 1);
            var c = a + b;
            var d = prompt(a + ' + ' + b + "= ?","Type Your Answer Here");
            if(d == c){
                alert("Jawaban Benar");
                main.value += 10;
                belajar.value += 10;
                makan.value += 0;
                day = kelipatan * 2;
                hour = 0;
                min = 0;
            }
            else{
                alert("Jawaban Salah");
                main.value -= 10;
                belajar.value -= 10;
                makan.value += 0;
                day = kelipatan * 2;
                hour = 0;
                min = 0;
            }
        }
        if(day % 6 == 0 && day != 0 && hour == 0 && min == 0 && day <= 30){ 
            kelipatan += 1;
            quiz += 1;
            if(quiz == 1){
                var jawaban = prompt("Gurita memiliki sebanyak ... jantung","Type Your Answer Here")
                if(jawaban == "3"){
                    alert("Jawaban Benar");
                    main.value += 10;
                    belajar.value += 10;
                    makan.value += 0;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
                else{
                    alert("Jawaban Salah");
                    main.value -= 10;
                    belajar.value -= 10;
                    day = kelipatan * 2;
                    makan.value += 0;
                    hour = 0;
                    min = 0;
                }
            }
            else if(quiz == 2){
                jawaban = prompt("Ibukota Negara Singapura ...","Type Your Answer Here")
                if(jawaban == "Singapura" || "singapura"){
                    alert("Jawaban Benar");
                    main.value += 10;
                    belajar.value += 10;
                    makan.value += 0;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
                else{
                    alert("Jawaban Salah");
                    main.value -= 10;
                    belajar.value -= 10;
                    makan.value += 0;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
            }
            else if(quiz == 3){
                jawaban = prompt("Hari Raya Natal dirayakan pada bulan ...","Type Your Answer Here")
                if(jawaban == "Desember" || "desember"){
                    alert("Jawaban Benar");
                    main.value += 10;
                    belajar.value += 10;
                    makan.value += 0;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
                else{
                    alert("Jawaban Salah");
                    main.value -= 10;
                    belajar.value -= 10;
                    makan.value += 0;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
            }
            else if(quiz == 4){
                jawaban = prompt("Singkatan dari HyperText Markup Language adalah ...","Type Your Answer Here")
                if(jawaban == "HTML" || "html"){
                    alert("Jawaban Benar");
                    main.value += 10;
                    belajar.value += 10;
                    makan.value += 0;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
                else{
                    alert("Jawaban Salah");
                    main.value -= 10;
                    belajar.value -= 10;
                    makan.value += 0;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
            }
            else if(quiz == 5){
                jawaban = prompt("Jumlah kaki seekor ular adalah ...","Type Your Answer Here")
                if(jawaban == "0"){
                    alert("Jawaban Benar");
                    main.value += 10;
                    makan.value += 0;
                    belajar.value += 10;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
                else{
                    alert("Jawaban Salah");
                    main.value -= 10;
                    makan.value += 0;
                    belajar.value -= 10;
                    day = kelipatan * 2;
                    hour = 0;
                    min = 0;
                }
            }
        }
        if(day % 5 == 0 && day != 0 && !semesterincrease && hour == 0 && min == 0){
            if(belajar.value >= 80){
                alert( playerName + " lulus Semester " + semester );  
                makan.value += 0;
                tidur.value += 0;
                main.value += 0;
                semester += 1;
                semesterincrease = true;

                belajar.value = 0;         
            }
            else{
                alert(playerName + " tidak lulus Semester " + semester);
                makan.value += 0;
                tidur.value += 0;
                main.value += 0;
                dropout += 1;
            }
        }
        else{
            semesterincrease = false;
        }
        
        semDiv.textContent = "Semester " + semester;
        clockDiv.textContent = `Day `+ day + ` - ${hour}:${min}`.replace(/\b\d\b/g, "0$&");

        if(makan.value == 0 || main.value == 0 || tidur.value == 0){
            clearInterval(timerId);
            clearInterval(decay);
            alert("Game Over");
            if(confirm("Do you want to play again ?")){
                location.reload();
            }
            else{
                window.location.assign("start.html");
            }
        }
        if(semester == 8){
            alert("Selamat " + playerName + " sudah lulus");
            if(confirm("Do you want to play again ?")){
                location.reload();
            }
            else{
                window.location.assign("start.html");
            }
        }
        if(dropout == 3){
            clearInterval(timerId);
            clearInterval(decay);
            alert(playerName + " sudah di dropout dari UMN")
            alert("Game Over");
            if(confirm("Do you want to play again ?")){
                location.reload();
            }
            else{
                window.location.assign("start.html");
            }
        }
    }, 1000);




var makan = document.getElementById("stat-food")
var main = document.getElementById("stat-mood")
var tidur = document.getElementById("stat-sleep")
var belajar = document.getElementById("stat-study")
function optEat(){
    makan.value += 25;  
    main.value += 5;
    tidur.value -= 5;
    if(charcode=="M"){
        $("#avatar-container").css("background-image", "url(assets/M/makan.png)");
    }
    else if(charcode=="F"){
        $("#avatar-container").css("background-image", "url(assets/F/makan.png)");
    }
    else if(charcode=="R"){
        $("#avatar-container").css("background-image", "url(assets/R/makan.png)");
    }
}
function optPlay(){
    makan.value -= 5;
    main.value += 25;
    tidur.value -= 5;
    if(charcode=="M"){
        $("#avatar-container").css("background-image", "url(assets/M/main.png)");
    }
    else if(charcode=="F"){
        $("#avatar-container").css("background-image", "url(assets/F/main.png)");
    }
    else if(charcode=="R"){
        $("#avatar-container").css("background-image", "url(assets/R/main.png)");
    }
}
function optSleep(){
    makan.value -= 5;
    main.value -= 10;
    tidur.value += 80;
    if(charcode=="M"){
        $("#avatar-container").css("background-image", "url(assets/M/tidur.png)");
    }
    if(charcode=="F"){
        $("#avatar-container").css("background-image", "url(assets/F/tidur.png)");
    }
    if(charcode=="R"){
        $("#avatar-container").css("background-image", "url(assets/R/tidur.png)");
    }
}
function optStudy(){    
    makan.value -= 5;
    main.value -= 5;
    tidur.value -= 5;
    belajar.value += 5;
    if(charcode=="M"){
        $("#avatar-container").css("background-image", "url(assets/M/belajar.png)");
    }
    if(charcode=="F"){
        $("#avatar-container").css("background-image", "url(assets/F/belajar.png)");
    }
    if(charcode=="R"){
        $("#avatar-container").css("background-image", "url(assets/R/belajar.png)");
    }
}
let changeSprite = setInterval(function(){
    function enable(){
        if(charcode=="M"){
            $("#avatar-container").css("background-image", "url(assets/M/idle.png)");
        }
        else if(charcode=="F"){
            $("#avatar-container").css("background-image", "url(assets/F/idle.png)");
        }
        else if(charcode=="R"){
            $("#avatar-container").css("background-image", "url(assets/R/idle.png)");
        }
        $(".option").attr("disabled",false);
    }
    $("#eat").mouseup(function(){
        $(".option").attr("disabled",true);
        setTimeout(enable, 3000);
    });
    $("#play").mouseup(function(){

        $(".option").attr("disabled",true);
        setTimeout(enable, 3000);
    });
    $("#sleep").mouseup(function(){

        $(".option").attr("disabled",true);
        setTimeout(enable, 18000);
    });
    $("#study").mouseup(function(){

        $(".option").attr("disabled",true);
        setTimeout(enable, 3000);
    });
}, 10);

document.getElementById("stat-a").onmouseenter = function() {mouseEnterA()};
document.getElementById("stat-a").onmouseleave = function() {mouseLeaveA()};
document.getElementById("stat-b").onmouseenter = function() {mouseEnterB()};
document.getElementById("stat-b").onmouseleave = function() {mouseLeaveB()};
document.getElementById("stat-c").onmouseenter = function() {mouseEnterC()};
document.getElementById("stat-c").onmouseleave = function() {mouseLeaveC()};
document.getElementById("stat-d").onmouseenter = function() {mouseEnterD()};
document.getElementById("stat-d").onmouseleave = function() {mouseLeaveD()};
var l;
  
function mouseEnterA(){
    $('<div id="status"class="bar"></div>').appendTo('#stats-a');
    l = setInterval(function(){
        var hover = document.getElementById("stat-food").value ;
        document.getElementById("status").innerHTML = hover + " / 100";
    },1);
}
function mouseLeaveA(){
    var listremove = document.getElementById("stats-a");
    listremove.removeChild(listremove.lastChild);
    clearInterval(l)
}

function mouseEnterB(){
    $('<div id="status"class="bar"></div>').appendTo('#stats-b');
    l = setInterval(function(){
        var hover = document.getElementById("stat-mood").value ;
        document.getElementById("status").innerHTML = hover + " / 100";
    },1);
}

function mouseLeaveB(){
    var listremove = document.getElementById("stats-b");
    listremove.removeChild(listremove.lastChild);
    clearInterval(l)
}

function mouseEnterC(){
    $('<div id="status"class="bar"></div>').appendTo('#stats-c');
    l = setInterval(function(){
        var hover = document.getElementById("stat-sleep").value ;
        document.getElementById("status").innerHTML = hover + " / 100";
    },1);
}

function mouseLeaveC(){
    var listremove = document.getElementById("stats-c");
    listremove.removeChild(listremove.lastChild);
    clearInterval(l)
}

function mouseEnterD(){
    $('<div id="status" class="bar"></div>').appendTo('#stats-d');
    l = setInterval(function(){
        var hover = document.getElementById("stat-study").value ;
        document.getElementById("status").innerHTML = hover + " / 100";
    },1);
}

function mouseLeaveD(){
    var listremove = document.getElementById("stats-d");
    listremove.removeChild(listremove.lastChild);
    clearInterval(l)
}
function tutor(){
    document.getElementById("myNav").style.width = "0%";
}
