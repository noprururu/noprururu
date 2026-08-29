
//流れ星用
let nagareboshix = [];
let nagareboshiy = [];
let nagareboshivx = [];
let nagareboshivy = [];
let nagareboshitype = [];

//またばき用
let mabatakic = 0;
let mabatakin = 0;
let mabatakilastn = 0;

function drawtop() {
if (mainroutine == 1) {

//音量調整用
if (firstaudiof == 0 )firstsoundset();


// マップ表示番号
mapn = Math.floor(c / 702 ) % 10;
// マップ内スクロール位置
mapx = Math.floor(c % 702);
mapy = 0;

for(let i = 0; i < 3; i++){
try {
// マップ描画
ctx.drawImage(images["bg" + ( ( ( mapn + i ) % 10 ) + mapgq ) ], -mapx + 702 * i, mapy );
} catch(e) {
// エラー時は何もしない
}

}

// フリル
//ctx.drawImage(images["topfrill"], 0,0 );


if (displayqualityf == 2) {
// 雲表示番号
for(let i = 0; i < 2; i++){
cloudx[i] -= 2;
if ( cloudx[i] < -1200 ){
cloudx[i] += 2400;
cloudn[i] = ( cloudn[i] + 1 ) % 6;
cloudy[i] = Math.floor( Math.random() * 100 ) + 100;

}

ctx.drawImage( images["cloud" + cloudn[i]], cloudx[i], cloudy[i]);

}

}

//初回サウンド音量調整用
if ( firstaudiof == 0 ) firstsoundset();

const gp = getGamepad();
if ( loadedAssets >= totalAssets ) {
if ( gp?.buttons?.[0]?.pressed || gp?.buttons?.[12]?.pressed || gp?.buttons?.[13]?.pressed){
if ( spf ) inputn = 5; 
else inputn = 3;
gamepadf = 1;
mouseDown = true;

}

}


// Input入力変更処理
if (inputConfig && Object.keys(inputConfig).length > 0) {
// 設定あり
inputf = 0;

}

else {
// 設定なし(空)
inputf = 1;

}


//デバッグ用に1にしてます
inputf = 1;

// Input入力処理
if ( inputn == 0 && inputf == 1 ) inputf = 0 , inputConfig = updateinputn0();
else if ( inputn == 1 && inputf == 1 ) inputf = 0 , inputConfig = updateinputn1();
else if ( inputn == 2 && inputf == 1 ) inputf = 0 , inputConfig = updateinputn2();
else if ( inputn == 4 && inputf == 1 ) inputf = 0 , inputConfig = updateinputn4();
else if ( inputn == 6 && inputf == 1 ) inputf = 0 , inputConfig = updateinputn6();
else if ( inputn == 7 && inputf == 1 ) inputf = 0 , inputConfig = updateinputn7();
else if ( inputn == 3 && inputf == 1) inputf = 0, inputPadConfig = [12, 15, 13, 14, 0, 1, 3, 2, 4, 9, 8, 5];
else if ( inputn == 5 && inputf == 1 ) inputf = 0 , inputPadConfig = [12, 15, 13, 14, 0, 1, 3, 2, 4, 9, 8, 5];

if (jsonf == 0) {
if (inputn == 3 || inputn == 5) localStorage.setItem("inputPadConfig", JSON.stringify(inputPadConfig));
else localStorage.setItem("inputConfig", JSON.stringify(inputConfig));
jsonf = 1;

}


if (inputn == 3 || inputn == 5) {
//inputPadConfig = [12, 15, 13, 14, 0, 1, 3, 2, 4, 9, 8, 5];
/*
function updateGamePadKeys() {
const gp = getGamepad();
inputkeys.up = gp?.buttons?.[inputPadConfig[0]]?.pressed;
inputkeys.right = gp?.buttons?.[inputPadConfig[1]]?.pressed;
inputkeys.down = gp?.buttons?.[inputPadConfig[2]]?.pressed;
inputkeys.left = gp?.buttons?.[inputPadConfig[3]]?.pressed;
inputkeys.a = gp?.buttons?.[inputPadConfig[4]]?.pressed;
inputkeys.q = gp?.buttons?.[inputPadConfig[5]]?.pressed;
inputkeys.w = gp?.buttons?.[inputPadConfig[6]]?.pressed;
inputkeys.e = gp?.buttons?.[inputPadConfig[7]]?.pressed;
inputkeys.r = gp?.buttons?.[inputPadConfig[8]]?.pressed;
inputkeys.pause = gp?.buttons?.[inputPadConfig[9]]?.pressed;
inputkeys.config = gp?.buttons?.[inputPadConfig[10]]?.pressed;
inputkeys.mute = gp?.buttons?.[inputPadConfig[11]]?.pressed;

}
*/
updateGamePadKeys();

}

if ( firstqwername3f == 0 ){
if (inputn == 0 || inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7 ) {
qwername3[0] = inputConfig.q;
qwername3[1] = inputConfig.w;
qwername3[2] = inputConfig.e;
qwername3[3] = inputConfig.r;
if (qwername3[0].length !== 1) qwername3[0] = qwername3[0].slice(-1);
if (qwername3[1].length !== 1) qwername3[1] = qwername3[1].slice(-1);
if (qwername3[2].length !== 1) qwername3[2] = qwername3[2].slice(-1);
if (qwername3[3].length !== 1) qwername3[3] = qwername3[3].slice(-1);

}

firstqwername3f++;

}

//デバッグ用
//inputn = 0;


if ( waittimer < 1 ) {
if ( inputkeys.down || keys["ArrowDown"] || keys["gp_btn_2"] ) topinputn++ , soundf[14] = 1 , waittimer = 45;
if ( inputkeys.up || keys["ArrowUp"] || keys["gp_btn_0"] ) topinputn-- , soundf[14] = 1 , waittimer = 45;
if ( topinputn < 0 ) topinputn = 2;
topinputn = topinputn % 3;

}

waittimer--;

pressKeyf = false;

if ( timer > 1 && waittimer < 0 ) {
if ( keys["Enter"] || keys["Space"] || keys[inputConfig.q] || keys["gp_btn_4"] ) pressKeyf = true;

}

if ( pressKeyf && topinputn == 0 && waittimer < 0 ){
soundf[14] = 1;
mainroutine = 4;
preeKeyf = false;
mouseDown = false;
pausekeyf = 0;
waittimer = 45;
boardcf = 0;

}

else if ( pressKeyf && topinputn == 1 && waittimer < 0 ){
waittoptimer = 14;
soundf[14] = 1;
waittimer = 45;

}

else if ( waittoptimer < 15 ){
if ( waittoptimer < 1 ) {
waittimer = 45;
boardcf = 0;
preeKeyf = false;
mouseDown = false;
mainroutine = 2;

}

waittoptimer--;

}

else if ( pressKeyf && topinputn == 2 && waittimer < 0 ){
audios.sound0.pause();
audios.sound0.currentTime = 0;
preeKeyf = false;

window.open("https://ateliernop.web.fc2.com/himarimeimeivssuccubus/specialthanks.html", "_blank");

}


//入力 メインルーチン用
else if ( mouseDown && mouse.x > 640 - 200 && mouse.x < 640 + 200 && mouse.y > 230 && mouse.y < 350 ) {
soundf[14] = 1;
mouseDown = false;
pressKeyf = false;
mainroutine = 4;

}

//入力 コンフィグ用
else if ( mouseDown && mouse.x > 640 - 200 && mouse.x < 640 + 200 && mouse.y > 377 && mouse.y < 497 ){
waittoptimer = 14;
soundf[14] = 1;

}

else if ( waittoptimer < 15 ){
if ( waittoptimer < 1 ) {
waittimer = 45;
preeKeyf = false;
mouseDown = false;
mainroutine = 2;

}

waittoptimer--;

}


//スペシャルサンクス
else if ( mouseDown && mainroutine == 1 && mouse.x > 640 - 160 && mouse.x < 640 + 160 && mouse.y > 524 &&  mouse.y < 644 ){
audios.sound0.pause();
audios.sound0.currentTime = 0;
mouseDown = false;
pressKeyf = false;

window.open("https://ateliernop.web.fc2.com/himarimeimeivssuccubus/specialthanks.html", "_blank");

}

mouseDown = false;


minititlealpha =  1 - Math.cos( Math.PI / 180 * c * 1 );
if ( minititlealpha < 0 ) minititlealpha = 0;

//動くタイトル
if ( timer < 1.5 ) {
ctx.globalAlpha = minititlealpha;
ctx.fillStyle = "#EDEFF2";
ctx.textBaseline = "middle";
ctx.textAlign = "center";
ctx.font = "bold 50px " + fontFamily;
ctx.fillText( configtext[mylangn].title1, 640, 85 + ( 1.5 - timer ) * 100 );
ctx.font = "bold 40px " + fontFamily;
ctx.fillText( configtext[mylangn].title2, 640, 160 + ( 1.5 - timer ) * 100 );

}

else {

ctx.globalAlpha = 1;
ctx.fillStyle = "#EDEFF2";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = "bold 50px " + fontFamily;
ctx.fillText( configtext[mylangn].title1, 640, 85 );
ctx.font = "bold 40px " + fontFamily;
ctx.fillText( configtext[mylangn].title2, 640, 160 );

}

ctx.globalAlpha = 1;

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 10;

//ボタン装飾用 元は#B19CD9ちょい青#B19CD9やや青#A29CD9かなり青#9CA6D9
ctx.fillStyle = "#9B84C7";
ctx.fillRect(640 - 200 , 230, 400, 120);
ctx.fillRect(640 - 200 , 230 + 122 + 25, 400, 120);
ctx.fillRect(640 - 200 , 230 + 122 * 2 + 25 * 2, 400, 120);

//ボタン輪郭
ctx.lineWidth = 4;
ctx.strokeStyle = "#EDEFF2";
ctx.strokeRect(canvas.width / 2 - 200 , 230, 400, 120);
ctx.strokeRect(canvas.width / 2 - 200 , 230 + 122 + 25, 400, 120);
ctx.strokeRect(canvas.width / 2 - 200 , 230 + 122 * 2 + 25 * 2, 400, 120);

//お花画像描画
for(let i = 0; i < 6; i++){
ctx.drawImage(
images["innerflower" + ( i % 2 ) ], 640 - 192 + Math.floor( i % 2 ) * 341 , 238 + Math.floor( i / 2 ) * 147 );

}

ctx.fillStyle = "#EDEFF2";
ctx.strokeStyle = "#050505";
ctx.lineWidth = 4;

ctx.textBaseline = "middle";
ctx.textAlign = "center";
ctx.font = "bold 36px " + fontFamily;

// Game Start
ctx.strokeText(configtext[mylangn].gamestart, 640, 294);
ctx.fillText(configtext[mylangn].gamestart, 640, 294);

// Config
ctx.strokeText(configtext[mylangn].config, 640, 440);
ctx.fillText(configtext[mylangn].config, 640, 440);

// Special Thanks
ctx.strokeText(configtext[mylangn].specialthanks, 640, 586);
ctx.fillText(configtext[mylangn].specialthanks, 640, 586);








///////////////////////////////////////////////////////////////////////
// inputn 入力種類　0.Mouse&Keyboard 1.↑→↓←&ZXCAS 2.WASD&QECX 3.Game Pad
//                  4.Touch Gesteres 5.Game Pad 6.On Keyboard 7.On Keboard & Mouse
///////////////////////////////////////////////////////////////////////

for(let i = 0; i < 3; i++){
if ( mouse.x > 439 && mouse.x < 841 && mouse.y > 229 + 147 * i && mouse.y < 351 + 147 * i ){
topinputn = i;

}

}

if ( inputn < 4 || inputn == 6 || inputn == 7 ) {
ctx.globalAlpha = 0.76;
ctx.fillStyle = "#000000";
ctx.fillRect(640 - 200 , 230 + 147 * topinputn, 400, 120);
ctx.lineWidth = 5;
ctx.strokeStyle = "#8A7123";
ctx.strokeRect(640 - 200 , 230 + 147 * topinputn, 400, 120);
ctx.globalAlpha = 1;

}



// 顔
ctx.drawImage(images["kao" + 0], 972,234 );


// 顔まばたき
mabatakic = ( Math.floor( timer * 10 ) / 10 ) % 10;
if ( mabatakic == 4 || mabatakic == 6 ) {
mabatakin = Math.floor( Math.random() * 4 );
if ( mabatakilastn == mabatakin ) mabatakin++;
if ( mabatakin > 3 ) mabatakin = 0;
mabatakilastn = mabatakin;

}

if ( mabatakic > 4 && mabatakic < 4.3 ) ctx.drawImage(images["kao" + 1], 972,234 );
else ctx.drawImage(images["kao" + mabatakin], 972,234 );


/*
//デバッグ
ctx.font = "20px Noto Serif JP"
ctx.fillStyle = "white";
ctx.fillText(lang + " , " + mylangn,20,20);
*/

/*
//デバッグ
ctx.textAlign = "right";
ctx.font = "bold 20px MS UI Gothic";
ctx.fillStyle = "#EDEFF2";
ctx.fillText("c : " + Math.floor(c*10)/10,canvas.width - 40, 620);
ctx.fillText("Timer : " + Math.floor(timer*10)/10,canvas.width - 40, 640);
//デバッグ
ctx.font = "bold 20px MS UI Gothic";
ctx.fillStyle = "#EDEFF2";
ctx.fillText(Math.floor(mouse.x) + " , " + Math.floor(mouse.y),canvas.width - 40, 660);
*/

}// if (mainroutine == 1) {

}// drawtop

