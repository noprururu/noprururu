

function draw(){

if (displayqualityf > 0 ) {
// マップ表示番号
mapn = Math.floor(c*1 / 702 ) % 10;
// マップ内スクロール位置
mapx = Math.floor(c*1 % 702);
mapy = 0;

for(let i = 0; i < 3; i++){
// マップ描画
ctx.drawImage(images["bg" + ( ( ( mapn + i ) % 10 ) + mapgq ) ], -mapx + 702 * i, mapy );

}

}

if (displayqualityf == 2 && pausef == 0 ) {
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



const gp = getGamepad();
if (gp?.buttons?.[0]?.pressed){
if ( gamepadf == 0 ) vibrationf = 0;
inputn = 3;
gamepadf = 1;
pressKeyf = true;


} 



///////////////////////////////////////////////////////////////
// 背景縦線ライン
///////////////////////////////////////////////////////////////
if (displayqualityf == 0 && pausef == 0) {
ctx.strokeStyle = "#050505";
ctx.lineWidth = 2;

for(let x = bgX; x < canvas.width; x += 50){
ctx.beginPath();
ctx.moveTo(x,0);
ctx.lineTo(x,canvas.height);
ctx.stroke();

}

}

//背景
//ctx.drawImage(images.bgeff,0,0 );





///////////////////////////////////////////////////////////////
// 死亡0リスタート 死亡演出
///////////////////////////////////////////////////////////////
if ( playerdeadf == 1 && playerdeadc < 0.5 ){
ctx.fillStyle = "#000000";
ctx.globalAlpha = 0.3 + ( playerdeadc * 0.2 );
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.globalAlpha = 1;

}

else if (playerdeadf == 1 && playerdeadc >= 0.5 && playerdeadc <= 1 ) {
ctx.globalAlpha = 0.5;
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 640 - 1280 * ( playerdeadc - 0.5 ), 720 );
ctx.fillRect(690 + 1280 * (playerdeadc - 0.5), 0, 1280, 720 );
ctx.drawImage(images["restart0"], 640 - ( playerdeadc - 0.5 ) * 1280 , 0 );
ctx.drawImage(images["restart1"], 640 + ( playerdeadc - 0.5 ) * 1280 , 0 );

ctx.globalAlpha = 1;

ctx.drawImage(images["bluehanabi" + Math.floor( ( playerdeadc - 0.5 ) * 27.8 ) ] , bluehanabix, bluehanabiy);

}

///////////////////////////////////////////////////////////////
// Gui 描画
///////////////////////////////////////////////////////////////
if ( playerlife > 0 ){
//Icon 再生ボタン
if ( pausef == 0 ) ctx.drawImage(images.iconplay,500,10 );
else ctx.drawImage(images.iconpause,500,10 );

//Icon ボリュームON
if ( mutef == 0 ) ctx.drawImage(images.iconvolon,600,10 );
else ctx.drawImage(images.iconvoloff,600,10 );

//Icon 設定
ctx.drawImage(images.iconsetting,700,10 );

//GUI ハート描画
for(let i = 0; i < 5; i++){
if ( playerlife >= i + 1 ) {
//Icon ピンク描画
ctx.drawImage(images.iconlife1, 20 + i * 80 , 20 );

}

else if ( i < 3 ) {
//Icon ハート黒描画
ctx.drawImage(images.iconlife0, 20 + i * 80 , 20 );

}

if ( playerdeadf == 1 && crashheartnum < 15 ) {
//Icon ハート壊れるアニメーションを再生する
ctx.drawImage(images["crashheart" + Math.floor(crashheartnum) ], -76 + playerlife * 80 , -20 );

}

}// i5

}// playerlife > 0


// SmartPhone スマホ
if ( inputn == 4 && itemshopf !== 2 ){
//175 545が中心で175くらいの座標をとる
//75 440に画像を置く
    ctx.drawImage(images["touch0"], 0 + tgunderleftx, 370 - tgunderlefty);

spdfunc();

}


///////////////////////////////////////////////////////////////
// QWER 描画
///////////////////////////////////////////////////////////////
if ( inputn !== 4 ){
ctx.lineWidth = 4;
//リセット用
ctx.lineCap = "butt";
ctx.lineJoin = "butt";
ctx.miterLimit = 0;

for(let i = 0; i < 4; i++){
//QWERLock 塗り
if ( qwerf[i] == 0 ) {
ctx.globalAlpha = 0.6;
ctx.fillStyle = "#020202";
ctx.fillRect(canvas.width / 2 - 224 + 120 * i , canvas.height - 112 , 96 , 96 );
ctx.globalAlpha = 1;

}

//QWER使用可能 塗り
else if ( qwerf[i] == 1 ) {
ctx.fillStyle = "#6E3B5E";
ctx.fillRect(canvas.width / 2 - 224 + 120 * i , canvas.height - 112 , 96 , 96 );

}

//QWERクールダウン 塗り
else if ( qwerf[i] == 2 ) {
ctx.fillStyle = "#120E13";
ctx.fillRect(canvas.width / 2 - 224 + 120 * i , canvas.height - 112 , 96 , 96 );

//クールダウン1/8 塗り
ctx.lineWidth = 2;
for(let j = 0; j < 8; j++){
if ( qwer8[i] > j ) {
ctx.beginPath();
ctx.moveTo( canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 48 );
ctx.lineTo( canvas.width / 2 - 224 + 120 * i + 48 + qwer8xy[j*2+0] , canvas.height - 112 + 48 + qwer8xy[j*2+1] );
ctx.lineTo( canvas.width / 2 - 224 + 120 * i + 48 + qwer8xy[j*2+2] , canvas.height - 112 + 48 + qwer8xy[j*2+3] );
ctx.closePath();
ctx.fillStyle = "#1F171F";
ctx.fill();
ctx.strokeStyle = "#1F171F";
ctx.stroke();

}

//クールダウン詳細塗り
if ( qwer8[i] == j ) {
ctx.beginPath();
ctx.moveTo( canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 48 );
ctx.lineTo( canvas.width / 2 - 224 + 120 * i + 48 + qwer8xy[j*2+0] , canvas.height - 112 + 48 + qwer8xy[j*2+1] );
ctx.lineTo( 
canvas.width / 2 - 224 + 120 * i + 48 + qwer8xy[j*2+0] + qwer8vxy[j*2+0] * qwer128[i] ,
canvas.height - 112 + 48 + qwer8xy[j*2+1] + qwer8vxy[j*2+1] * qwer128[i] );
ctx.closePath();
ctx.fillStyle = "#1F171F";
ctx.fill();

}

}// j

}// qwerf[i] == 2


ctx.textAlign = "center";
ctx.textBaseline = "top";

//QWER フォント入れ
if ( qwerf[i] == 1 ) {
ctx.fillStyle = "#000000";
ctx.font = "bold 26px sans-serif";
ctx.fillText(aqwerhstar[aqwerh[i+1]-1], canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 6 );
ctx.font = "bold 38px sans-serif";
if (inputn !== 3 && inputn !== 5) ctx.fillText(qwername3[i], canvas.width / 2 - 224 + 120 * i + 48, canvas.height - 112 + 26);
else if (inputn == 3 || inputn == 5) {
// XBox, else
if ( gamepadn == 0 ) ctx.fillText(xboxname[inputPadConfig[5 + i]], canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 26 );
// PlayStation
if ( gamepadn == 1 ) ctx.fillText(psname[inputPadConfig[5 + i]], canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 26 );
// Switch
if ( gamepadn == 2 ) ctx.fillText(ninname[inputPadConfig[5 + i]], canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 26 );

}

ctx.font = "bold 16px sans-serif";
ctx.fillText(qwername2[i], canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 72 );

}

//スキル使用中
else if ( qwerf[i] == 2 ) { 
ctx.fillStyle = "#F1DBF6";
ctx.font = "bold 26px sans-serif";
ctx.fillText(aqwerhstar[aqwerh[i+1]-1], canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 6 );
ctx.font = "bold 38px sans-serif";
ctx.fillText(qwercdraw[i], canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 26 );
ctx.font = "bold 16px sans-serif";
ctx.fillText(qwername2[i], canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 72 );

}

// Lock
else{
ctx.font = "bold 16px sans-serif";
ctx.fillStyle = "#F1DBF6";
ctx.fillText("Lock", canvas.width / 2 - 224 + 120 * i + 48 , canvas.height - 112 + 72 );

}


//輪郭
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 10;
ctx.lineWidth = 4;
ctx.strokeStyle = "#120E13";
ctx.beginPath();
ctx.moveTo( canvas.width / 2 - 224 + 120 * i , canvas.height - 112 );
ctx.lineTo( canvas.width / 2 - 224 + 120 * i + 96 , canvas.height - 112 );
ctx.lineTo( canvas.width / 2 - 224 + 120 * i + 96 , canvas.height - 112 + 96 );
ctx.lineTo( canvas.width / 2 - 224 + 120 * i , canvas.height - 112 + 96 );
ctx.closePath();
ctx.stroke();

}

}

///////////////////////////////////////////////////////////////
// 弾
///////////////////////////////////////////////////////////////
//ctx.strokeStyle = "#FAFAFA";
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 4;
ctx.globalAlpha = 1;
ctx.shadowColor = "#FF00FF";
//ctx.shadowColor = "#FFC0CB";
//ctx.shadowColor = "#FFFF00";
ctx.shadowBlur = 20;
if ( itemshopf !== 2 ){
for(let i = 0; i < bullets.length; i++){
const b = bullets[i];
    if (assaultc > 0 && b.bulletn == 1) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(b.x + 13, b.y - 6);
        ctx.lineTo(b.x + 1, b.y + 4);
        ctx.lineTo(b.x - 23, b.y + 4);
        ctx.lineTo(b.x - 23, b.y - 16);
        ctx.lineTo(b.x + 1, b.y - 16);
        ctx.closePath();
        ctx.strokeStyle = "#6E3B5E";
        ctx.stroke();

    }

    else {
        ctx.fillStyle = "#FFFFFF";
        //ctx.fillStyle = "#EDEFF2";
        ctx.fillRect(b.x - 2, b.y - 3, -37, 3 );

    }

}

}

ctx.shadowBlur = 0;


///////////////////////////////////////////////////////////////
// モンスター描画
///////////////////////////////////////////////////////////////
for(let i = 0; i < mobsmax; i++){

const m = mobs[i];

/*
//モンスター１の爆風範囲デバッグ用

if ( m.id == 1 ) {
ctx.beginPath();
ctx.arc(
m.x + mobcoinx[m.id],
m.y + mobcoiny[m.id],
280,
0,
Math.PI * 2
);
ctx.strokeStyle = "yellow";
ctx.stroke();
}
*/


if ( m.hp > 0 && itemshopf !== 2 && playerdeadf == 0 ){
// 画像
ctx.drawImage( images["mob" + m.img ], m.x, m.y );

}

/*
//当たり判定用
ctx.globalAlpha = 1;
ctx.strokeStyle = "#ffff00";
ctx.fillStyle = "#ffff00";

ctx.beginPath();
ctx.moveTo(m.x + mobhitx1[m.id], m.y + mobhity1[m.id]);
ctx.lineTo(m.x + mobhitx2[m.id], m.y + mobhity2[m.id]);
ctx.lineTo(m.x + mobhitx3[m.id], m.y + mobhity3[m.id]);
ctx.lineTo(m.x + mobhitx4[m.id], m.y + mobhity4[m.id]);
ctx.closePath();
ctx.stroke();
ctx.fill();
*/


///////////////////////////////////////////////////////////////
// Tama 描画
///////////////////////////////////////////////////////////////

for (let j = tama.length - 1; j >= 0; j--) {
if ( tama[j] && pausef == 0 ){ //error防止 true用
if (tama[j].id == 0 && tama[j].n == i ) {
ctx.lineWidth = 2;
ctx.strokeStyle = "#520C4A";
ctx.beginPath();
ctx.arc( tama[j].x, tama[j].y, 30, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.stroke();
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc( tama[j].x + tama[j].xspeed * 7, tama[j].y +  tama[j].yspeed * 7, 40, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.stroke();
ctx.lineWidth = 4;
ctx.beginPath();
ctx.arc( tama[j].x + tama[j].xspeed * 14, tama[j].y + tama[j].yspeed * 14, 50, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc( tama[j].x + tama[j].xspeed * 21, tama[j].y + tama[j].yspeed * 21, 60, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.stroke();

/*
ctx.fillStyle = "#ffff00";
ctx.beginPath();
ctx.moveTo(tama[j].x, tama[j].y);
ctx.lineTo(tama[j].x + tama[j].xspeed * 21, tama[j].y + tama[j].yspeed * 21 - 60);
ctx.lineTo(tama[j].x + tama[j].xspeed * 35, tama[j].y + tama[j].yspeed * 21);
ctx.lineTo(tama[j].x + tama[j].xspeed * 21, tama[j].y + tama[j].yspeed * 21 + 60);
ctx.closePath();
ctx.fill();
*/


}

else if (tama[j].id == 2 && tama[j].n == i ) {
ctx.lineWidth = 4;
ctx.strokeStyle = "#661A1B";
//ctx.fillStyle = "#591618";
//ctx.fillStyle = "#7b2131";
ctx.beginPath();
ctx.arc(tama[j].x, tama[j].y, 20, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.stroke();

}

else if (tama[j].id == 3 && tama[j].n == i ) {
ctx.lineWidth = 4;
ctx.strokeStyle = "#EDEFF2";
ctx.fillStyle = "#FEE134";
ctx.beginPath();
ctx.moveTo(tama[j].x, tama[j].y - 4);
ctx.lineTo(tama[j].x - 15, tama[j].y - 4);
ctx.lineTo(tama[j].x - 31, tama[j].y);
ctx.lineTo(tama[j].x - 15, tama[j].y + 4);
ctx.lineTo(tama[j].x, tama[j].y + 4);
ctx.closePath();
ctx.fill();
ctx.stroke();

}

else if (tama[j].id == 4 && tama[j].n == i) {
ctx.lineWidth = 4;
ctx.strokeStyle = "#0160ff";
ctx.fillStyle = "#EDEFF2";
ctx.beginPath();
ctx.arc(tama[j].x, tama[j].y, 20, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.fill();
ctx.stroke();

}

else if (tama[j].id == 5 && tama[j].n == i) {
ctx.lineWidth = 14;
ctx.strokeStyle = "#DEFBF7";
ctx.fillStyle = "#EDEFF2";
ctx.beginPath();
ctx.arc(tama[j].x, tama[j].y, 60, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.fill();
ctx.stroke();

}


else if (tama[j].id == 6 && tama[j].n == i) {
ctx.globalAlpha = 0.8;
if (tama[j].point == 0 && m.id == tama[j].id && m.hp > 0) {
ctx.lineWidth = 5;
ctx.strokeStyle = "#8F2891";
ctx.fillStyle = "#EDEFF2";
ctx.beginPath();
ctx.arc(mob6x1[j], mob6y1[j], 25, tama[j].angle + Math.PI / 2, tama[j].angle - Math.PI / 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.arc(mob6x2[j], mob6y2[j], 25, tama[j].angle - Math.PI / 2, tama[j].angle + Math.PI / 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.fill();
ctx.stroke();

}

else if (tama[j].point == 1 && m.id == tama[j].id && m.hp > 0) {
ctx.lineWidth = 5;
ctx.strokeStyle = "#8F2891";
ctx.fillStyle = "#EDEFF2";
ctx.beginPath();
ctx.arc(mob6x3[j], mob6y3[j], 25, tama[j].angle + Math.PI / 2, tama[j].angle - Math.PI / 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.arc(mob6x4[j], mob6y4[j], 25, tama[j].angle - Math.PI / 2, tama[j].angle + Math.PI / 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.fill();
ctx.stroke();

}

ctx.globalAlpha = 1;

}

else if (tama[j].id == 7 && tama[j].n == i) {
ctx.lineWidth = 4;
ctx.strokeStyle = "#FF0044";
ctx.fillStyle = "#EDEFF2";
ctx.beginPath();
ctx.moveTo(tama[j].x, tama[j].y);
ctx.lineTo(tama[j].x + Math.cos(tama[j].angle - Math.PI / 8) * 70, tama[j].y + Math.sin(tama[j].angle - Math.PI / 8) * 70);
ctx.arc( tama[j].x + Math.cos(tama[j].angle) * 70, tama[j].y + Math.sin(tama[j].angle) * 70, 25, tama[j].angle - Math.PI / 2, tama[j].angle + Math.PI / 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.lineTo(tama[j].x + Math.cos(tama[j].angle + Math.PI / 8) * 70, tama[j].y + Math.sin(tama[j].angle + Math.PI / 8) * 70); 
ctx.closePath();
ctx.fill();
ctx.stroke();

}

//Boss 1
else if (tama[j].id == 8 && tama[j].n == i) {
if (tama[j].attacktype == 0) {
ctx.lineWidth = 4;
ctx.strokeStyle = "#FF00F9";
ctx.fillStyle = "#EDEFF2";
ctx.beginPath();
ctx.moveTo(tama[j].x, tama[j].y);
ctx.lineTo(tama[j].x + Math.cos(tama[j].angle - Math.PI / 4) * 5.657, tama[j].y + Math.sin(tama[j].angle - Math.PI / 4) * 5.657);
ctx.lineTo(tama[j].x + Math.cos(tama[j].angle - 0.09066) * 44, tama[j].y + Math.sin(tama[j].angle - 0.09066) * 44);
ctx.lineTo(tama[j].x + Math.cos(tama[j].angle) * 48, tama[j].y + Math.sin(tama[j].angle) * 48);
ctx.lineTo(tama[j].x + Math.cos(tama[j].angle + 0.09066) * 44, tama[j].y + Math.sin(tama[j].angle + 0.09066) * 44);
ctx.lineTo(tama[j].x + Math.cos(tama[j].angle + Math.PI / 4) * 5.657, tama[j].y + Math.sin(tama[j].angle + Math.PI / 4) * 5.657);
ctx.closePath();
ctx.fill();
ctx.stroke();

}

if (tama[j].attacktype == 1) {
if (150 <= 15 + tama[j].c * 15 && tama[j].c2 <= 0 && mob8arcf == 0) {
mob8arcf = 1;
ctx.globalAlpha = 0.5;
ctx.lineWidth = 4;
ctx.fillStyle = "#350234";
ctx.beginPath();
ctx.arc(m.x + mobkutix1[8], m.y + mobkutiy1[8], 150, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.fill();
ctx.globalAlpha = 1;

}

else if (150 > 15 + tama[j].c * 15 && mob8arcf == 0) {
mob8arcf = 1;
ctx.globalAlpha = 0.5;
ctx.lineWidth = 4;
ctx.fillStyle = "#350234";
ctx.beginPath();
ctx.arc(m.x + mobkutix1[8], m.y + mobkutiy1[8], 15 + tama[j].c * 15, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.fill();
ctx.globalAlpha = 1;

}

if ( tama[j].c2 > 0 ) {
if ( mob8arcf == 0 ){
mob8arcf = 1;
ctx.globalAlpha = 0.5;
ctx.lineWidth = 4;
ctx.fillStyle = "#350234";
ctx.beginPath();
ctx.arc(m.x + mobkutix1[8], m.y + mobkutiy1[8], 150, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.fill();
ctx.globalAlpha = 1;

}


ctx.lineWidth = 4;
ctx.strokeStyle = "#FF00F9";
ctx.fillStyle = "#EDEFF2";
ctx.beginPath();
ctx.moveTo(m.x + mobkutix1[8] + Math.cos(tama[j].angle) * 150, m.y + mobkutiy1[8] + Math.sin(tama[j].angle) * 150 - 4);
ctx.lineTo(m.x + mobkutix1[8] + Math.cos(tama[j].angle) * 150 + Math.cos(tama[j].angle) * tama[j].c2 * 2, m.y + mobkutiy1[8] + Math.sin(tama[j].angle) * 150 + Math.sin(tama[j].angle) * tama[j].c2 - 4);
ctx.lineTo(m.x + mobkutix1[8] + Math.cos(tama[j].angle) * 150 + Math.cos(tama[j].angle) * tama[j].c2 * 2, m.y + mobkutiy1[8] + Math.sin(tama[j].angle) * 150 + Math.sin(tama[j].angle) * tama[j].c2 + 4);
ctx.lineTo(m.x + mobkutix1[8] + Math.cos(tama[j].angle) * 150, m.y + mobkutiy1[8] + Math.sin(tama[j].angle) * 150 + 4);
ctx.closePath();
ctx.fill();
ctx.stroke();



}// tama[j].c2

}// tama[j].attacktype

mob8arcf = 0;

}// tama[j].id == 8


else if (tama[j].id == 9 && tama[j].n == i) {
if (tama[j].attacktype == 0) {
ctx.fillStyle = "#F5C3EC";
ctx.beginPath();
ctx.arc(tama[j].x - 25, tama[j].y - 15, 25, Math.PI / 16 * 12, -Math.PI / 16 * 2, false);
ctx.arc(tama[j].x + 25, tama[j].y - 15, 25, Math.PI / 16 * 12, Math.PI / 16 * 4, false);
ctx.arc(tama[j].x - 25, tama[j].y - 15, 75, 0, Math.PI / 16 * 6, false);
ctx.arc(tama[j].x + 25, tama[j].y - 15, 75, Math.PI / 16 * 10, Math.PI / 16 * 16, false);
ctx.closePath();
ctx.fill();

/*
//当たり
ctx.fillStyle = "#ffff00";
ctx.beginPath();
ctx.arc(tama[j].x - 0, tama[j].y - 0, 50, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fill();
*/

}

if (tama[j].attacktype == 1) {
ctx.lineWidth = 9;
ctx.strokeStyle = "#FFC0C6";
ctx.fillStyle = "#EDEFF2";
ctx.beginPath();
ctx.arc(tama[j].x, tama[j].y, 35, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.fill();
ctx.stroke();

}

}


//Boss3
else if (tama[j].id == 10 && tama[j].n == i) {
if (tama[j].attacktype == 0) {
ctx.lineWidth = 5;
ctx.fillStyle = "#FFE6B4";
ctx.strokeStyle = "#DC253B";
ctx.beginPath();
ctx.arc(tama[j].x, tama[j].y, 35, tama[j].angle + tama[j].r - Math.PI / 4, tama[j].angle + tama[j].r + Math.PI / 4, false);
ctx.arc(tama[j].x, tama[j].y, 45, tama[j].angle + tama[j].r + Math.PI / 4, tama[j].angle + tama[j].r - Math.PI / 4, true);
ctx.closePath();
ctx.fill();
ctx.stroke();

/*
//当たり
ctx.fillStyle = "#ffff00";
ctx.beginPath();
ctx.arc(tama[j].x - 0, tama[j].y - 0, 45, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fill();
*/

}

if (tama[j].attacktype == 1) {
ctx.fillStyle = "#DE253C";
ctx.beginPath();
ctx.arc(tama[j].x - 30, tama[j].y - 20, 30, Math.PI / 16 * 12, -Math.PI / 16 * 2, false);
ctx.arc(tama[j].x + 30, tama[j].y - 20, 30, Math.PI / 16 * 12, Math.PI / 16 * 4, false);
ctx.arc(tama[j].x - 30, tama[j].y - 20, 90, 0, Math.PI / 16 * 6, false);
ctx.arc(tama[j].x + 30, tama[j].y - 20, 90, Math.PI / 16 * 10, Math.PI / 16 * 16, false);
ctx.closePath();
ctx.fill();

/*
//当たり
ctx.fillStyle = "#ffff00";
ctx.beginPath();
ctx.arc(tama[j].x - 0, tama[j].y - 0, 60, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fill();
*/

}

if (tama[j].attacktype == 2) {
ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#DE253C";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(tama[j].x, tama[j].y, 137.5, tama[j].angle - Math.PI / 2, tama[j].angle + Math.PI / 2, false);
ctx.arc(tama[j].x + Math.cos(tama[j].angle) * 15, tama[j].y + Math.sin(tama[j].angle) * 15, 70, tama[j].angle + Math.PI / 2, tama[j].angle - Math.PI / 2, true);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "#2B040E";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.lineTo(tama[j].x - Math.cos(tama[j].angle) * 30, tama[j].y - Math.sin(tama[j].angle) * 30);
ctx.lineTo(tama[j].x - Math.cos(tama[j].angle) * 150, tama[j].y - Math.sin(tama[j].angle) * 150);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.lineTo(tama[j].x - Math.cos(tama[j].angle) * 30 + Math.cos(tama[j].angle + Math.PI / 2) * 45, tama[j].y - Math.sin(tama[j].angle) * 30 + Math.sin(tama[j].angle + Math.PI / 2) * 45);
ctx.lineTo(tama[j].x - Math.cos(tama[j].angle) * 150 + Math.cos(tama[j].angle + Math.PI / 2) * 45, tama[j].y - Math.sin(tama[j].angle) * 150 + Math.sin(tama[j].angle + Math.PI / 2) * 45);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.lineTo(tama[j].x - Math.cos(tama[j].angle) * 30 + Math.cos(tama[j].angle + Math.PI / 2) * - 45, tama[j].y - Math.sin(tama[j].angle) * 30 + Math.sin(tama[j].angle + Math.PI / 2) * - 45);
ctx.lineTo(tama[j].x - Math.cos(tama[j].angle) * 150 + Math.cos(tama[j].angle + Math.PI / 2) * - 45, tama[j].y - Math.sin(tama[j].angle) * 150 + Math.sin(tama[j].angle + Math.PI / 2) * - 45);
ctx.closePath();
ctx.stroke();

/*
//当たり
ctx.fillStyle = "#ffff00";
ctx.beginPath();
ctx.arc(tama[j].x - 0, tama[j].y - 0, 150, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fill();
*/

}// attacktype

}// id 10

} //tama[j] true

} //for tama[j]

// mob1
if ( m.hp > 0 && m.id == 1 ){
//爆発エフェクト中
if ( m.mob1bomf > 1 && m.mob1bomf < 7 ) ctx.drawImage( images["bomimg" + [m.mob1bomf - 2]], m.x - 280 + mobkutix1[m.id], m.y - 280 + mobkutiy1[m.id]);

//点滅用
//if ( m.mob1timer > 0 && Math.floor( m.mob1timer * 8 ) % 2 == 1 ) ctx.drawImage( images["mob" + ( m.img + 6 ) ], m.x, m.y);

}

}// i


//////////////////////////////////////////////////
// 吹き出しコメント描画 しゃべる
//////////////////////////////////////////////////
for(let i = 0; i < mobsmax; i++){
const m = mobs[i];
if ( m.routine == 2 || m.id == 1 && m.random > 0.4 ){
if ( m.mobtalkc < 4 && m.hp > 0 ){
if (Array.isArray(m.mobcommentlines)) {
ctx.fillStyle = "#B19CD9";
ctx.font = "20px " + fontFamily;
ctx.textAlign = "center";
ctx.textBaseline = "middle";
//コメント一行分け表示フラグ
if ( m.y <= 0 ) {
ctx.drawImage( images["hukidasi" + 1 ], m.x + mobcommentx2[m.id] - 178, m.y + mobcommenty2[m.id] + 0 );
    for (let j = 0; j < m.mobvisibleLines; j++){
        if (m.mobvisibleLines > 1) {
            ctx.fillText(
            m.mobcommentlines[j],
            m.x + mobcommentx2[m.id] - m.mobmaxLength * 0 - 7,
            m.y + mobcommenty2[m.id] + 48 + j * 25);

        }

        if (m.mobvisibleLines == 1) {
            ctx.fillText(
                m.mobcommentlines[j],
                m.x + mobcommentx2[m.id] - m.mobmaxLength * 0 - 7,
                m.y + mobcommenty2[m.id] + 60 + j * 25);

        }

    }

}



else {
ctx.drawImage( images["hukidasi" + 0 ], m.x + mobcommentx1[m.id] - 178, m.y + mobcommenty1[m.id] - 122 );
    for (let j = 0; j < m.mobvisibleLines; j++){
        if (m.mobvisibleLines > 1) {
            ctx.fillText(
            m.mobcommentlines[j],
            m.x + mobcommentx1[m.id] - m.mobmaxLength * 0,
            m.y + mobcommenty1[m.id] - 28 + j * 25 - m.mobcommentlines.length * 24 );

        }

        if (m.mobvisibleLines == 1) {
            ctx.fillText(
            m.mobcommentlines[j],
            m.x + mobcommentx1[m.id] - m.mobmaxLength * 0,
            m.y + mobcommenty1[m.id] - 40 + j * 25 - m.mobcommentlines.length * 24);

        }

    }// j

}// else

}// Array.isArray(m.mobcommentlines)) {

}// m.mobtalkc

}// m.routine == 2

}// i


/*
// モンスターの当たり判定表示
if ( m.hp > 0 ){
ctx.globalAlpha = 0.5;
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.moveTo(m.x + mobhitx1[m.id], m.y + mobhity1[m.id]);
ctx.lineTo(m.x + mobhitx2[m.id], m.y + mobhity2[m.id]);
ctx.lineTo(m.x + mobhitx3[m.id], m.y + mobhity3[m.id]);
ctx.lineTo(m.x + mobhitx4[m.id], m.y + mobhity4[m.id]);
ctx.closePath();
ctx.fill();
ctx.globalAlpha = 1;

}

*/

//////////////////////////////////////////////////
// スキル描画
//////////////////////////////////////////////////
    if (grenadef == 1) {
        ctx.drawImage(images["grenade" + [Math.floor(grenadec * 10) % 3]],
            grenadex + grenadec * 800 + 260,
            grenadey + Math.sin(Math.PI / 180 * (grenadec * 180 - 135)) * 200 + 140);

    }

    if (grenadehanabif == 1) {
        ctx.drawImage(images["grenadehanabi" + [Math.floor(grenadehanabic * 10) % 8]],
            grenadehanabix + 210 + 70,
            grenadehanabiy - 210 + 25);

    }

    if (bazookaf > 0) {
        ctx.drawImage(images["bazooka" + [Math.floor(bazookac * 12)]], bazookax + 120, bazookay + 24);
        ctx.shadowColor = "#FF00FF";
        ctx.shadowBlur = 20;
        ctx.drawImage(images["bazooka" + [4]], bazookax + 250 + bazookac * 1600, bazookay + 44);
        ctx.shadowBlur = 0;

    }

    if (bazookahanabif == 1) {
            ctx.drawImage(images["bazookahanabi" + [Math.floor(bazokahanabic * 12) % 7]], bazookahanabix - 180, bazookahanabiy - 270);

    }




//////////////////////////////////////////////////
// ダメージ表記
//////////////////////////////////////////////////
ctx.font = "bold 20px Helvetica";
for(let i = damagepanel.length - 1; i >= 0; i--){
const q = damagepanel[i];
//ctx.fillStyle = "#9B84C7";
ctx.fillStyle = "#D4FF39";
ctx.fillText(q.num,q.x,q.y);

}







///////////////////////////////////////////////////////////////
// ステージの描画
///////////////////////////////////////////////////////////////
if ( stagealphaf == 0 && playerdeadf == 0 && stagenum < 4) {
//ステージナンバーを表示する
ctx.globalAlpha = stagealpha;
ctx.drawImage( images["stagechoucho"], 0, 0 );
ctx.font = "bold 46px sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = 'white';
ctx.fillText("Stage : " + stagenum, canvas.width/2 , canvas.height/2);
ctx.globalAlpha = 1;

}



///////////////////////////////////////////////////////////////////////
// アイテムショップ 0 描画
///////////////////////////////////////////////////////////////////////
if ( playerlife !== 0 ) {
ctx.drawImage(images["itemshop0"], itemshopx, itemshopy);
if ( pausef == 1 && itemshopf == 2 ) {
ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgba(0, 0, 0, 1)";
ctx.drawImage(images["itemshop1"], 0, 0 );



///////////////////////////////////////////////////////////////////////
// アイテムショップ 買い物描画
///////////////////////////////////////////////////////////////////////
// Item Shop Font
ctx.font = "bold 42px Noto Serif JP";
ctx.fillStyle = "#EDEFF2";
ctx.textAlign = "center";
ctx.textBaseline = "top";
ctx.fillText("Item Shop", 640 , 30 );
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 10;
for(let i = 0; i < 6; i++){
//塗り
ctx.fillStyle = "#404040";
ctx.fillRect(36 + i * 206, 106, 172 , 302 );
ctx.lineWidth = 4;
ctx.strokeStyle = "#202020";
ctx.strokeRect(36 + i * 206, 106, 172 , 302 );

}

///////////////////////////////////////////////////////////////////////
// アイテムショップ 1 買い物描画
///////////////////////////////////////////////////////////////////////
ctx.drawImage(images["itemshop1"], 0, 0);

for(let i = 0; i < 6; i++){
ctx.textAlign = "center";
ctx.textBaseline = "top";
ctx.font = "bold 16px Noto Sans";
ctx.fillStyle = "#8A7123";//星の数か、Unlockを表示
if ( aqwerh[i] == 0 && i < 5 ) ctx.fillText("Unlock",122 + i * 206 , 256 );
else if ( aqwerh[i] > 0 && i < 5 ) ctx.fillText(aqwerhstar[aqwerh[i]-1],122 + i * 206 , 256 );
else if ( i == 5 ) ctx.fillText(aqwerhstar[playerlife-1], 122 + i * 206 , 256 );
// 売り物の名前
ctx.font = "bold 16px Noto Sans";
ctx.fillStyle = "#EDEFF2";
ctx.fillText(aqwerhname[i],122 + i * 206 , 278 );
ctx.font = "bold 16px Noto Sans";
//ダメージ数値 バリア時間 ライフ数表示
// 0,1,2,3,4の場合
if ( aqwerh[i] == 0 && i !== 5 ) ctx.fillText(aqwerhshopname1[i] + aqwerhdamage[i*5], 122 + i * 206 , 300 );
else if ( aqwerh[i] < 5 && i !== 5 ) ctx.fillText(aqwerhshopname1[i] + aqwerhdamage[i*5 + aqwerh[i]-1] + " → " + aqwerhdamage[i*5 + aqwerh[i]],122 + i * 206 , 300 );
else if ( aqwerh[i] == 5 && i !== 5 ) ctx.fillText(aqwerhshopname1[i] + aqwerhdamage[i*5 + aqwerh[i]-1], 122 + i * 206 , 300 );
// 5の場合
if ( aqwerh[i] < 5 && i == 5 && playerlife < 3 ) ctx.fillText( aqwerhshopname1[i] + playerlife + " → " + (playerlife + 1),122 + i * 206 , 300 );
else if ( aqwerh[i] == 5 && i == 5 && playerlife < 3 ) ctx.fillText( aqwerhshopname1[i] + playerlife ,122 + i * 206 , 300 );

//レンジ && クールダウン表示 0~4を表示
if ( aqwerh[i] == 0 && i !== 5 ) ctx.fillText(aqwerhshopname2[i] + aqwerhcdnum[i*5], 122 + i * 206 , 322 );
else if ( aqwerh[i] < 5 && i !== 5 ) ctx.fillText(aqwerhshopname2[i] + aqwerhcdnum[i*5 + aqwerh[i]-1] + " → " + aqwerhcdnum[i*5 + aqwerh[i]],122 + i * 206 , 322 );
else if ( aqwerh[i] == 5 && i !== 5 ) ctx.fillText(aqwerhshopname2[i] + aqwerhcdnum[i*5 + aqwerh[i]-1], 122 + i * 206 , 322 );

//購入位置 塗り
ctx.fillStyle = "#050505";
ctx.fillRect(36 + i * 206 + 20, 352, 132 , 42 );

//購入位置 描画
ctx.fillStyle = "#D4AF37";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

//会計処理 描画0~4
if ( aqwerh[i] < 5 && i !== 5 ){
ctx.fillStyle = "#D4AF37";
ctx.fillText(aqwerhmoney1[ i * 5 + aqwerh[i] ], 36 + i * 206 + 86 , 374 );

}

//会計処理 描画0~4 SOLD OUT
else if ( aqwerh[i] == 5 && i !== 5 ){
ctx.fillStyle = "#D4AF37";
ctx.fillText("SOLD OUT", 36 + i * 206 + 86 , 374 );

}

//会計処理 描画ハート
else if (playerlife < 3 && aqwerhhmoneynum < 5 && i == 5 ){
ctx.fillStyle = "#D4AF37";
ctx.fillText(aqwerhmoney1[ i * 5 + aqwerhhmoneynum ], 36 + i * 206 + 86 , 374 );

}

//SOLD OUT ハート
else if ( i == 5 && playerlife == 3 || i == 5 && aqwerhhmoneynum == 5 ){
ctx.fillStyle = "#D4AF37";
ctx.fillText("SOLD OUT", 36 + i * 206 + 86 , 374 );

}

if( boardcf < 7 && boardcf == i ){
ctx.lineWidth = 3;
ctx.globalAlpha = 0.3;
ctx.fillStyle = "#6E3B5E";
ctx.fillRect(36 + i * 206, 106, 172, 302);
ctx.lineWidth = 4;
ctx.strokeStyle = "#8A7123";
ctx.strokeRect(36 + i * 206, 106, 172, 302);
ctx.globalAlpha = 1;

}

}// i

//Exit 塗り
ctx.lineWidth = 5;
ctx.fillStyle = "#404040";
ctx.fillRect( 80, 444, 1120, 92 );
ctx.strokeStyle = "#202020";
ctx.strokeRect( 80, 444, 1120, 92 );
ctx.stroke();

ctx.fillStyle = "#EDEFF2";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = "bold 36px Noto Sans JP";
ctx.fillText("Exit", 640 , 490 );

if( boardcf == 7 ){
ctx.lineWidth = 3;
ctx.globalAlpha = 0.3;
ctx.fillStyle = "#6E3B5E";
ctx.fillRect( 80, 444, 1120, 92 );
ctx.lineWidth = 4;
ctx.strokeStyle = "#8A7123";
ctx.strokeRect( 80, 444, 1120, 92 );
ctx.globalAlpha = 1;

}


}// pausef == 1 && itemshopf == 2

}// playerdeadf


///////////////////////////////////////////////////////////////
// コインの描画
///////////////////////////////////////////////////////////////
if ( itemshopf !== 2 ){
for(let i = coinstart; i < coinend; i++){
// ← なるべく必須
//if(!coin[i]) continue;
if ( coin[i].f == 1 ) {
ctx.drawImage( images["coinimg" + ( coin[i].num * 4 + ( Math.floor( ( coin[i].c + c ) / 50 ) ) % 4 ) ], coin[i].x, coin[i].y );

}

}

} //if ( itemshopf !== 2 ){


///////////////////////////////////////////////////////////////
// プレイヤー
///////////////////////////////////////////////////////////////
if ( itemshopf !== 2 ){

/*
//パッドゲット動かないのでテスト用。いつでも消してください
if ( inputn == 3 || inputn == 5 ){
updateGamePadKeys();
if(keys["gp_btn_0"]) padgetY -= player.speed * 1.2;
if(keys["gp_btn_1"]) padgetX += player.speed * 1.2;
if(keys["gp_btn_2"]) padgetY += player.speed * 1.2;
if(keys["gp_btn_3"]) padgetX -= player.speed * 1.2;

if (padgetX === undefined) {
padgetX = player.x;
padgetY = player.y;

}

player.x += (padgetX - player.x) * 0.12;
player.y += (padgetY - player.y) * 0.12;

}
*/

if ( playerdeadf == 0 ) ctx.drawImage( images["chara" + ( Math.floor( c / 20) % 6 ) ], player.x - 150, player.y - 30);
else ctx.drawImage( images["chara18"], player.x - 150, player.y - 30);

// Barrier バリアー
if (barrierf == 1) ctx.drawImage(images["barrier"], player.x - 194, player.y - 140);

}


/*
//プレイヤーの当たり判定
ctx.globalAlpha = 0.5;
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.moveTo(player.x + 50, player.y - 10);
ctx.lineTo(player.x + 80, player.y - 10);
ctx.lineTo(player.x -50, player.y + 80);
ctx.lineTo(player.x -80, player.y + 80);
ctx.closePath();
ctx.fill();
ctx.globalAlpha = 1;
*/

///////////////////////////////////////////////////////////////
// ちょうちょ描画
///////////////////////////////////////////////////////////////
if ( chouchof > 1 && chouchof < 4 && playerdeadf == 0 ) ctx.drawImage(images["choucho" + ( chouchoimgn + Math.floor(timer * 4) % 2 )], chouchox, chouchoy);

//////////////////////////////////////////////////
// 金色グラデーション Money
//////////////////////////////////////////////////
if ( playerlife > 0 ){
ctx.font = "bold 52px sans-serif";
ctx.textBaseline = "top";
ctx.textAlign = "right";
const gold = ctx.createLinearGradient(canvas.width - 220 , 24, canvas.width - 80, 76);//ctx.fillStyleでReset
gold.addColorStop(0.0, "#fff6b0");
gold.addColorStop(0.1, "#ffe45c");
gold.addColorStop(0.2, "#ffbf00");
gold.addColorStop(0.5, "#b8860b");
gold.addColorStop(1.0, "#fff2a8");

ctx.textAlign = "right";
ctx.textBaseline = "top";

// Money 外枠
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeText(moneyh, canvas.width - 80, 24);

// Money 本体
ctx.fillStyle = gold;
ctx.fillText(moneyh, canvas.width - 80, 24);

}

///////////////////////////////////////////////////////////////
// 死亡1リスタート リザルト画面 Result
///////////////////////////////////////////////////////////////
if (playerdeadf == 1 && playerlife < 1 ){
ctx.drawImage(images["resultbg"], 0, 0 );
ctx.fillStyle = "#EDEFF2";
ctx.font = "30px 'Noto Sans JP'";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("Result", 640, 70);
ctx.textBaseline = "top";
ctx.textAlign = "left";
ctx.font = "26px 'Noto Sans JP'";
ctx.fillStyle = "#D4AF37";
//右から書く場合は990がいいんじゃないかな
if ( resultgold < 100 ) ctx.fillText( "￠: " + resultgold, 660, 122);
else ctx.fillText("＄: " + resultgold / 100, 660, 122);
ctx.fillText(resultmonsters + " Kills", 670, 222);
ctx.fillText(resultdamage + " Damage", 670, 322);
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = "#EDEFF2";
ctx.font = "20px 'Noto Sans JP'";
ctx.fillText("敵に倒された", 435, 440);
ctx.lineWidth = 4;
//先をとがらせるのを止める用
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 10;
ctx.beginPath();
ctx.moveTo(650, 450);
ctx.lineTo(810, 450);
ctx.lineTo(810, 510);
ctx.lineTo(650, 510);
ctx.closePath();
ctx.fillStyle = "#5B496D";
ctx.fill();
ctx.strokeStyle = "#EDEFF2";
ctx.stroke();
ctx.fillStyle = "#EDEFF2";
ctx.fillText("Go Top", 730, 480);
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(850, 450);
ctx.lineTo(1010, 450);
ctx.lineTo(1010, 510);
ctx.lineTo(850, 510);
ctx.closePath();
ctx.fillStyle = "#5B496D";
ctx.fill();
ctx.strokeStyle = "#EDEFF2";
ctx.stroke();
ctx.fillStyle = "#EDEFF2";
ctx.fillText("Retry", 930, 480);
ctx.drawImage( images["mob" + ( mobimgn[resultmobid] + Math.floor( c / 10 % 6 ) ) ], 230 + mobresultx[resultmobid], 98 + mobresulty[resultmobid]);
ctx.lineWidth = 3;
ctx.fillStyle = "#6E3B5E";
ctx.strokeStyle = "#8A7123";
if ( boardcf == 0 ){
ctx.globalAlpha = 0.3;
ctx.beginPath();
ctx.moveTo(850, 450);
ctx.lineTo(1010, 450);
ctx.lineTo(1010, 510);
ctx.lineTo(850, 510);
ctx.closePath();
ctx.fill();
ctx.stroke();

}

else if ( boardcf == 1 ){
ctx.globalAlpha = 0.3;
ctx.beginPath();
ctx.moveTo(650, 450);
ctx.lineTo(810, 450);
ctx.lineTo(810, 510);
ctx.lineTo(650, 510);
ctx.closePath();
ctx.fill();
ctx.stroke();

}

ctx.globalAlpha = 1;


}


//////////////////////////////////////////////////
// ポーズ時に暗くする
//////////////////////////////////////////////////
if ( pausef == 1 && itemshopf !== 2 ) {
ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgba(0, 0, 0, 1)";

//ポーズフォントを表示する
ctx.font = "bold 48px sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = "white";
ctx.fillText("Pause",canvas.width/2,canvas.height/2);

}


/*
//デバッグ
ctx.textAlign = "center";
ctx.font = "bold 20px MS UI Gothic";
ctx.fillStyle = '#EDEFF2';
for(let i = 0; i < mobsmax; i++){
const m = mobs[i];
if ( mobs[i].hp > 0 ) ctx.fillText(karimobroutine[i],m.x + mobsabunx[0],m.y + mobsabuny[0]);

}

*/

/*
ctx.lineWidth = 2;
//Q判定テスト
    ctx.globalAlpha = 0.6;
    for (let j = 0; j < 16; j++) {
        const m = mobs[j];
        const dx = - grenadehanabix + m.x + mobcoinx[m.id];
        const dy = - grenadehanabiy + m.y + mobcoiny[m.id];
        ctx.beginPath();
        ctx.strokeStyle = "yellow";
        ctx.arc(dx, dy, 10, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
        ctx.closePath();
        ctx.stroke();

    }
    ctx.globalAlpha = 1;

ctx.strokeStyle = "yellow";
ctx.beginPath();
ctx.arc(grenadehanabix + 480, grenadehanabiy, 250, 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
ctx.stroke();
*/


//デバッグ
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.font = "bold 20px MS UI Gothic";
ctx.fillStyle = "#EDEFF2";

//ctx.fillText( itemshopdeadc, 40, 40);

//ctx.fillText(itemshopf, 1240, 600);

/*
for(let i = 0; i < mobsmax; i++){
const m = mobs[i];
ctx.fillText(m.routine, 100, 40 + i * 20);
ctx.fillText(Math.floor( m.angle * 10 ) / 10, 200, 40 + i * 20);
ctx.fillText(Math.floor( m.x ), 340, 40 + i * 20);
ctx.fillText(Math.floor( m.y ), 500, 40 + i * 20);

}

*/

//ctx.fillText(tama.length, 340, 60);

//デバッグ
//ctx.textAlign = "right";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.font = "bold 20px MS UI Gothic";
//ctx.fillStyle = "#EDEFF2";
ctx.fillStyle = "#404040";
if ( debugf == 1 ){
// Timer
ctx.fillText("Stage: " + stagenum + ",  Time: " + Math.floor(timer * 10 ) / 10 + " sec", 960, 520);

//ctx.fillStyle = "#6E3B5E";

// Debug Mode
ctx.fillText("Debug Mode", 960, 550);

//ctx.fillStyle = "#ffff00";

// Press 1 Time += 10
ctx.fillText("Press 1: Time 1 sec+", 960, 580);

// Press 2 Money += 10＄
ctx.fillText("Press 2: Money 10 ＄+", 960, 600);

// Press 3 Life Max
ctx.fillText("Press 3: Max Life", 960, 620);

// Press 4 Next Stage
ctx.fillText("Press 4: Next Stage", 960, 640);

}

if ( debugf == 1 ){
// Press 5 Don't use debug mode
ctx.fillText("Press 5: Don't use debug mode", 960, 660);

}

if ( debugf == 0 ){
// Press 5 Use debug mode
ctx.fillText("Press 5: Using Debug", 960, 660);

}


// Debug

//ctx.fillText(qwername3[0], 40, 540);

ctx.fillText("inputn: " + inputn, 40, 620);

// Mouse XY
ctx.fillText(Math.floor(mouse.x) + " , " + Math.floor(mouse.y), 40, 660);


}





