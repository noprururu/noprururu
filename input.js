
///////////////////////////////////////////////////////////////////////
// 入力
///////////////////////////////////////////////////////////////////////
let mouseDown = false;


///////////////////////////////////////////////////////////////////////
// ゲームパッド用
///////////////////////////////////////////////////////////////////////
//接続時にゲームパッド番号を記憶する部分 ループ不要
let gamepadIndex = -1;


window.addEventListener("gamepadconnected", e => {
    if(gamepadIndex === -1){
        gamepadIndex = e.gamepad.index;
        console.log("Connected:", e.gamepad.id);

    }

});



function getGamepad() {
    // 1. 自分自身ではなく、ブラウザの機能（navigator.getGamepads）を呼び出す
    const pads = navigator.getGamepads();

    // 2. 現在アクティブな（接続されている）ゲームパッドを特定する
    const activePad = (gamepadIndex >= 0 && pads[gamepadIndex]) ? pads[gamepadIndex] : pads.find(p => p !== null);

    // 3. ゲームパッドが接続されており、まだ名前チェックをしていない場合
    if (activePad && gamepadnf == 0) { // gp ではなく activePad を使用
        const padname = activePad.id.toLowerCase();
        
        if (padname.includes("xbox")) {
            gamepadn = 0;
        }
        else if (padname.includes("dualsense") || padname.includes("wireless controller")) {
            gamepadn = 1;
        }
        else if (padname.includes("nintendo") || padname.includes("switch")) {
            gamepadn = 2;
        }
        else {
            gamepadn = 0;
        }

        gamepadnf = 1;
    }

    // 4. 前回見つけたゲームパッドがあればそれを返す（高速化）
    if (gamepadIndex >= 0 && pads[gamepadIndex]) {
        return pads[gamepadIndex];
    }

    // 5. 新しくゲームパッドを探す
    gamepadIndex = -1;
    for (let i = 0; i < pads.length; i++) {
        if (pads[i]) {
            gamepadIndex = i;
            return pads[i];
        }
    }

    return null;

}



function updateGamePadKeys() {
const gp = getGamepad();
keys["gp_btn_0"] = gp?.buttons?.[inputPadConfig[0]]?.pressed;
keys["gp_btn_1"] = gp?.buttons?.[inputPadConfig[1]]?.pressed;
keys["gp_btn_2"] = gp?.buttons?.[inputPadConfig[2]]?.pressed;
keys["gp_btn_3"] = gp?.buttons?.[inputPadConfig[3]]?.pressed;
keys["gp_btn_4"] = gp?.buttons?.[inputPadConfig[4]]?.pressed;
keys["gp_btn_5"] = gp?.buttons?.[inputPadConfig[5]]?.pressed;
keys["gp_btn_6"] = gp?.buttons?.[inputPadConfig[6]]?.pressed;
keys["gp_btn_7"] = gp?.buttons?.[inputPadConfig[7]]?.pressed;
keys["gp_btn_8"] = gp?.buttons?.[inputPadConfig[8]]?.pressed;
keys["gp_btn_9"] = gp?.buttons?.[inputPadConfig[9]]?.pressed;
keys["gp_btn_10"] = gp?.buttons?.[inputPadConfig[10]]?.pressed;
keys["gp_btn_11"] = gp?.buttons?.[inputPadConfig[11]]?.pressed;

}


///////////////////////////////////////////////////////////////////////
// キーボード用
///////////////////////////////////////////////////////////////////////
let dragUp = false;
let dragRight = false;
let dragDown = false;
let dragLeft = false;
let click = false;
let keys = {};
let inputkeys = {};



///////////////////////////////////////////////////////////////////////
// inputn 入力種類　0.Mouse&Keyboard 1.↑→↓←&ZXCAS 2.WASD&QECX 3.Game Pad
//                  4.Touch Gesteres 5.Game Pad 6.On Keyboard 7.On Keboard & Mouse
///////////////////////////////////////////////////////////////////////
let actionkey = [
0, //left
1, //up
2, //right
3, //down
4, // attack
5, // skill1
6, // skill2
7, // skill3
8, // skill4
9, // config
10,  // mute

];

let inputconfign = [
"up","right","down","left","a",
"q","w","e","r","pause",
"config","mute","vibef"
];


/*
let paddata = {
    up: 12,
    right: 15,
    down: 13,
    left: 14,
    a: 0,
    q: 1,
    w: 3,
    e: 2,
    r: 4,
    pause: 9,
    config: 8,
    mute: 5

}

*/



/*
const padConfig = {
a: 0,   // Aボタン（Xboxなら0）
b: 1,
x: 2,
y: 3,
l1:4,
r1:5,
l2:6,
r2:7,
back:8,
start:9,
L3:10,
R3:11,
up:12,
down:13,
left:14,
right:15
};
*/



//キーボード入力 input0 Mouse&Keyboard
function updateinputn0() {
return{
up    :"Mousedrag",
right :"Mousedrag",
down  :"Mousedrag",
left  :"Mousedrag",
a     :"click",
q     :"KeyQ",
w     :"KeyW",
e     :"KeyE",
r     :"KeyR",
pause :"Escape",
config:"KeyC",
mute  :"KeyM",
vibef : "0",

};

}

//キーボード入力 input0 name 一応
let input0name = [
"MouseDrag",
"MouseDrag",
"MouseDrag",
"MouseDrag",
"Click",
"Q",
"W",
"E",
"R",
"Esc",
"C",
"M"

];

//キーボード入力 input1 ↑→↓←&ZXCAS
function updateinputn1() {
return{
up    :"ArrowUp",
right :"ArrowRight",
down  :"ArrowDown",
left  :"ArrowLeft",
a     :"KeyZ",
q     :"KeyX",
w     :"KeyC",
e     :"KeyA",
r     :"KeyS",
pause :"Escape",
config:"KeyN",
mute  :"KeyM",
vibef : "0",

};

}

//キーボード入力 input1 name
let input1name = [
"↑",
"→",
"↓",
"←",
"Z",
"X",
"C",
"A",
"S",
"Esc",
"N",
"M"

];


//キーボード入力 input2 WASD & QECX
function updateinputn2() {
return{
up    :"KeyW",
right :"KeyD",
down  :"KeyS",
left  :"KeyA",
a     :"click",
q     :"KeyQ",
w     :"KeyE",
e     :"KeyC",
r     :"KeyX",
pause :"Escape",
config:"KeyC",
mute  :"KeyM",
vibef : "0",

};

}

//キーボード入力 input2 name
let input2name = [
"W",
"D",
"S",
"A",
"click",
"Q",
"E",
"C",
"X",
"Esc",
"C",
"M"

];

//xbox name
const xboxname = [
"A","B","X","Y","LB",
"RB","LT","RT","Back","Start",
"L3","R3","↑","↓","←",
"→"];

//ps name
const psname = [
"×","〇","□","△","L1",
"R1","L2","R2","Select","Start",
"L3","R3","↑","↓","←",
"→"];

//ninname
const ninname = [
"B","A","Y","X","L",
"R","ZL","ZR","-","+",
"L3","R3","↑","↓","←",
"→"];


//xboxゲームパッドの場合
const input3xboxnames = [
xboxname[12],
xboxname[15],
xboxname[13],
xboxname[14],
xboxname[0],
xboxname[1],
xboxname[2],
xboxname[3],
xboxname[5],
xboxname[9],
xboxname[8],
xboxname[4],

];

//psゲームパッドの場合
const input3psnames = [
psname[12],
psname[15],
psname[13],
psname[14],
psname[0],
psname[1],
psname[2],
psname[3],
psname[5],
psname[9],
psname[8],
psname[4],

];

//nintendoゲームパッドの場合
const input3ninnames = [
ninname[12],
ninname[15],
ninname[13],
ninname[14],
ninname[0],
ninname[1],
ninname[2],
ninname[3],
ninname[5],
ninname[9],
ninname[8],
ninname[4],

];


function updateinputn3() {
    return {
    up : 12,
    right : 15,
    down : 13,
    left : 14,
    a : 0,
    q : 1,
    w : 3,
    e : 2,
    r : 4,
    pause : 9,
    config : 8,
    mute : 5,

    };
}



//キーボード入力 input4 Touch Gestures
function updateinputn4() {
return{
up    :"Drag",
right :"Drag",
down  :"Drag",
left  :"Drag",
a     :"Tap",
q     :"Tap",
w     :"Tap",
e     :"Tap",
r     :"Tap",
pause :"Tap",
config:"Tap",
mute  :"Tap",
vibef :"0",

};

}

//キーボード入力 input4 name
let input4name = [
"Drag",
"Drag",
"Drag",
"Drag",
"Tap",
"Tap",
"Tap",
"Tap",
"Tap",
"Tap",
"Tap",
"Tap"

];

//キーボード入力 Game pad
function updateinputn5() {
    return {
        up: 12,
        right: 15,
        down: 13,
        left: 14,
        a: 0,
        q: 1,
        w: 3,
        e: 2,
        r: 4,
        pause: 9,
        config: 8,
        mute: 5,

    };

}


//キーボード入力 input6 On Keyboard
function updateinputn6() {
return{
up    :"KeyW",
right :"KeyD",
down  :"KeyS",
left  :"KeyA",
a     :"Enter",
q     :"KeyQ",
w     :"KeyW",
e     :"KeyE",
r     :"KeyR",
pause :"Escape",
config:"KeyC",
mute  :"KeyM",
vibef : "0",

};

}

//キーボード入力 input6 name
let input6name = [
"W",
"D",
"S",
"A",
"Enter",
"Q",
"W",
"E",
"R",
"Esc",
"C",
"M"

];

//キーボード入力 input7 On Mouse & Keyboard
function updateinputn7() {
return{
up    :"Mousedrag",
right :"Mousedrag",
down  :"Mousedrag",
left  :"Mousedrag",
a     :"click",
q     :"KeyQ",
w     :"KeyW",
e     :"KeyE",
r     :"KeyR",
pause :"Escape",
config:"KeyC",
mute  :"KeyM",
vibef : "0",

};

}

//キーボード入力 input7 name
let input7name = [
"MouseDrag",
"MouseDrag",
"MouseDrag",
"MouseDrag",
"click",
"Q",
"W",
"E",
"R",
"Esc",
"C",
"M"

];

/*予備用　消す可能性も考慮
if ( inputn == 0 ) {
let input0name = [
configtext[mylangn].mousedrag,
configtext[mylangn].mousedrag,
configtext[mylangn].mousedrag,
configtext[mylangn].mousedrag,
configtext[mylangn].click1,
configtext[mylangn].q,
configtext[mylangn].w,
configtext[mylangn].e,
configtext[mylangn].r,
configtext[mylangn].space,
configtext[mylangn].c,
configtext[mylangn].m

];

}

//inputn0 初期設定の場合
for(i = 0; i < 12; i++) {
actionkey[i] = input0namename[i];

}

}

*/



//キーボード入力 inputn Now
function updateInputKeys() {
    inputkeys.up     = dragUp;
    inputkeys.right  = dragRight;
    inputkeys.down   = dragDown;
    inputkeys.left   = dragLeft;
    inputkeys.a      = click;
    inputkeys.q      = keys["KeyQ"];
    inputkeys.w      = keys["KeyW"];
    inputkeys.e      = keys["KeyE"];
    inputkeys.r      = keys["KeyR"];
    inputkeys.pause  = keys["Escape"];
    inputkeys.config = keys["KeyC"];
    inputkeys.mute   = keys["KeyM"];

}



canvas.addEventListener("pointerdown", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) * canvas.width / rect.width;
    mouse.y = (e.clientY - rect.top) * canvas.height / rect.height;
    soundf[0] = 1;
    pausekeyf = 0;
    keyboardf = true;
    mouseDown = true;
    //keys["click"] = true;//これをつけると、コンフィグからトップが連打される。

});

canvas.addEventListener("pointerup", () => {
    mouseDown = false;
    pressKeyf = false;
    pausekeyf = 1;
    soundf[0] = 0;
    //keys["click"] = false;

});

///////////////////////////////////////////////////////////////////////
// キャラなめらか移動
///////////////////////////////////////////////////////////////////////
let targetX = player.x;
let targetY = player.y;
let padgetX = player.x;
let padgetY = player.y;

canvas.addEventListener("pointermove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) * canvas.width / rect.width;
    mouse.y = (e.clientY - rect.top) * canvas.height / rect.height;
    if ( inputn == 0 ){
    targetX = (e.clientX - rect.left) * (canvas.width / rect.width) - 10;
    targetY = (e.clientY - rect.top) * (canvas.height / rect.height) - 40;

    }

    pausekeyf = 0;

});

canvas.addEventListener("pointercancel", () => {
mouseDown = false;
pressKeyf = false;
//keys = {};

});

window.addEventListener("keydown", e => {
keys[e.code] = true;

});

window.addEventListener("keyup", e => {
keys[e.code] = false;
keyboardf = 1;
pressKeyf = false;
//mouseDown = false;

});

canvas.addEventListener("mousemove", e => {
mousef = 1;

});













