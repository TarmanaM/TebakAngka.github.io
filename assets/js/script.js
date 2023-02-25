const listhistory = document.getElementById("listhistory");
let playgame = document.getElementById("playgame");
let box = document.getElementById("box");
let tryagain1 = document.getElementById("tryagain1");
let tryagain2 = document.getElementById("tryagain2");
let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let level3 = document.getElementById("level3");
let game = document.getElementById("game");
let playing = document.getElementById("playing");
let reset = document.getElementById("reset");
let win = document.getElementById("win");
let lose = document.getElementById("lose");
let check = document.getElementById("check");
let historyfrm = document.getElementById("historyfrm");
var level = 0, max=0,score=10,scoretmp = 0;
var Hscore = 0;
var arrayinput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var index = 0;
let same = true;
let condition = true;
var the_number = 0;

function print(tag, variabel) {
    document.getElementById(tag).innerHTML = variabel;
}
playgame.addEventListener("click", function() {
    box.classList.add("fade");
    setTimeout(function() {
        box.style.display = "none";
        box.classList.remove("fade");
    }, 500);
    setTimeout(function() {
        levelgame.style.display = "block";
    }, 500);
});

level1.addEventListener("click", function() {
    level = 1; max = 20;
    the_number = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    historyfrm.style.display = "block";
    levelgame.classList.add("fade");
    setTimeout(function() {
        levelgame.style.display = "none";
        levelgame.classList.remove("fade");
    }, 500);
    setTimeout(function() {
        game.style.display = "block";
        playing.style.display = "block";
    }, 500);
});
level2.addEventListener("click", function() {
    level = 2; max = 100;
    the_number = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    historyfrm.style.display = "block";
    levelgame.classList.add("fade");
    setTimeout(function() {
        levelgame.style.display = "none";
        levelgame.classList.remove("fade");
    }, 500);
    setTimeout(function() {
        game.style.display = "block";
        playing.style.display = "block";
    }, 500);
});
level3.addEventListener("click", function() {
    level = 3; max = 100;
    the_number = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    historyfrm.style.display = "none";
    levelgame.classList.add("fade");
    setTimeout(function() {
        levelgame.style.display = "none";
        levelgame.classList.remove("fade");
    }, 500);
    setTimeout(function() {
        game.style.display = "block";
        playing.style.display = "block";
    }, 500);
});

reset.addEventListener('click', function() {
    location.reload()
})

check.addEventListener("click", function() {
    let inputnumber = document.getElementById("inputnumber").value;
    if (inputnumber > 0 && inputnumber < max + 1) {
        if (inputnumber == the_number) {
            playing.classList.add("fade");
            setTimeout(function() {
                playing.style.display = "none";
                playing.classList.remove("fade");
            }, 500);
            setTimeout(function() {
                win.style.display = "block";
            }, 500);
            if (scoretmp <= score) {
                Hscore = score;
                scoretmp = score;
            } else {}
            print("answere1", inputnumber);
            print("scorevalue1", score);
            print("Hscorevalue1", Hscore);
        } else {
            for (var i = 0; i <= arrayinput.length; i++) {
                if (inputnumber == arrayinput[i] && level != 3) {
                    print("statusinput", "Kamu Sudah Memasukan Angka itu :(");
                    condition = false;
                    same = false;
                }
            }
            if (same == true) {
                score = score - 1;
                print("scorevalue", score); //pengurangan skor sebesar 1
                arrayinput[index + 1] = inputnumber;
                index++;
            }
            same = true;
            if (inputnumber < the_number && condition != false) {
                print("statusinput", "Upss Tebakanmu terlalu rendah");
                condition = true;
            } else if (inputnumber > the_number && condition != false) {
                print("statusinput", "Wah Ketinggian bro ");
                condition = true;
            };
            condition = true;
            if (score < 1) {
                playing.classList.add("fade");
                setTimeout(function() {
                    playing.style.display = "none";
                    playing.classList.remove("fade");
                }, 500);
                setTimeout(function() {
                    lose.style.display = "block";
                }, 500);
                print("answere", the_number);
            }
        }
        listhistory.innerHTML += "[" + inputnumber + "] ";
    } else if (inputnumber != "") {
        print("statusinput", "Angkanya berkisar dari 1 sampai " + max);
    } else {
        print("statusinput", "Kamu Belum Memasukan Nomor Tebakannmu :(");
    }
});
tryagain2.addEventListener('click', function() {
    //mengembalikan form game
    lose.classList.add("fade");
    setTimeout(function() {
        lose.style.display = "none";
        lose.classList.remove("fade");
    }, 500);
    setTimeout(function() {
        playing.style.display = "block";
    }, 500);
    score = 10;index = 0;arrayinput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    print("scorevalue", score);
    print("Hscorevalue", Hscore);
    the_number = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    print("listhistory", " ");
    print("inputnumber", none);
});
tryagain1.addEventListener('click', function() {
    win.classList.add("fade");
    setTimeout(function() {
        win.style.display = "none";
        win.classList.remove("fade");
    }, 500);
    setTimeout(function() {
        playing.style.display = "block";
    }, 500);
    score = 10;index = 0;arrayinput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    print("scorevalue", score);
    print("Hscorevalue", Hscore);
    the_number = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    print("listhistory", " ");
    print("inputnumber", none);
});

var quickontop = 2000;
var distancetop = 300;
eval (function(p,a,c,k,e,d){
    e=function(c){
        return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};
        if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};
        while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f 7=["\\h\\a\\g\\h\\F","\\C\\h\\w\\c\\a\\a\\l\\c\\v","\\e\\c\\h\\K\\p\\9\\d\\b\\m\\a\\9\\p\\9\\d\\b","\\G\\c\\e\\q","\\J\\e\\e\\m\\I\\9\\d\\b\\H\\g\\C\\b\\9\\d\\9\\w","\\g\\u\\d\\g\\9\\a\\l\\c\\l\\c\\v","\\u\\9\\b\\m\\a\\9\\p\\9\\d\\b\\M\\q\\U\\e"];8[7[6]](7[5])[7[4]](7[0],j x(){f i=8[7[2]][7[1]]||8[7[3]][7[1]];o(k<=0){s};f r=0-i;f t=r/k*X;L(j(){8[7[3]][7[1]]=8[7[2]][7[1]]=i+t;o(i==0){s};x(8[7[3]],0,k)},P)},Q);B.Y(\'O\',j(){o(B.N>=n||8.R.z>=n||8.W.z>=n){8.y(\'A\').E.D=\'V\'}T{8.y(\'A\').E.D=\'S\'}});',61,61,'|||||||_0x3e17|document|x65|x6C|x74|x6F|x6E|x64|var|x69|x63|_0x2ceax2|function|quickontop|x54|x45|distancetop|if|x6D|x79|_0x2ceax3|return|_0x2ceax4|x67|x70|x72|ignielScroll|getElementById|scrollTop|ignielToTop|window|x73|display|style|x6B|x62|x4C|x76|x61|x75|setTimeout|x42|pageYOffset|scroll|10|false|documentElement|none|else|x49|block|body|50|addEventListener'.split('|'),0,{}));

