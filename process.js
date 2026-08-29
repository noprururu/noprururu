
/*

入力

↓

キャラの攻撃判定（バレット）

キャラのスキル判定

敵の判定

↓

敵の死亡判定 CD 生成

敵の移動やその他処理

敵の弾からキャラへ攻撃 および判定

キャラとの衝突判定

↓

キャラの死亡判定

↓

描画へ

*/

///////////////////////////////////////////////////////////////////////
// 弾
///////////////////////////////////////////////////////////////////////
const bullets = [];



///////////////////////////////////////////////////////////////////////
// 弾発射
///////////////////////////////////////////////////////////////////////
let shotTimer = 0;



function shoot() {
if (assaultc == 0) assaultf = 0, assaultdamage = aqwerhdamage[aqwerh[0]];
else assaultf = 1, assaultdamage = aqwerhdamage[14 + aqwerh[3]];

bullets.push({
x: player.x + 170,
y: player.y + 20,
speed: 12,
smgc: aqwerh[0] * 2,
smgf: 0,
bulletn: assaultf,
damage:assaultdamage

});

}


///////////////////////////////////////////////////////////////////////
// ダメージ表記用
///////////////////////////////////////////////////////////////////////
const damagepanel = [];
function godamage(){
damagepanel.push({
x: 0,
y: 0,
num:0,
c:0,
f:0
});

}






///////////////////////////////////////////////////////////////
// Process (処理)
///////////////////////////////////////////////////////////////
function process(delta){

const gp = getGamepad();

///////////////////////////////////////////////////////////////
// 入力処理用
///////////////////////////////////////////////////////////////
if ( inputn !== 3 && inputn !== 5 ) updateInputKeys();
//updateInputKeys();

if (inputn == 3 || inputn == 5) {
//inputPadConfig = [12, 15, 13, 14, 0, 1, 3, 2, 4, 9, 8, 5];
updateGamePadKeys();

}

///////////////////////////////////////////////////////////////
// ポーズｆ
///////////////////////////////////////////////////////////////
if ( pausef == 0 && playerdeadf == 0 ) {

//デバッグ用 ここ
//inputn = 4;

///////////////////////////////////////////////////////////////
// キーボード移動
///////////////////////////////////////////////////////////////
//移動用, 連射用
if ( inputn == 0 || inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7 ) {
if(keys[inputConfig.up]) targetY -= player.speed * 1.2;
if(keys[inputConfig.down]) targetY += player.speed * 1.2;
if(keys[inputConfig.left]) targetX -= player.speed * 1.2;
if(keys[inputConfig.right]) targetX += player.speed * 1.2;

}// inputn == 0 || inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7

if ( inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7 ) {
if(keys[inputConfig.a]){
soundf[0] = 1;
pressKeyf = true;
mouseDown = true;

}

//連射バグ防止用
if(keys[inputConfig.a] == false ){
soundf[0] = 0;
pressKeyf = false;
mouseDown = false;

}

}// if ( inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7 ) {


else if (inputn == 4 ) spfunc();

else if ( inputn == 3 || inputn == 5 ){
if(keys["gp_btn_0"]) padgetY -= player.speed * 1.2;
if(keys["gp_btn_1"]) padgetX += player.speed * 1.2;
if(keys["gp_btn_2"]) padgetY += player.speed * 1.2;
if(keys["gp_btn_3"]) padgetX -= player.speed * 1.2;

if (padgetX === undefined) {
padgetX = player.x;
padgetY = player.y;

}

}// else if ( inputn == 3 || inputn == 5 ){



///////////////////////////////////////////////////////////////
// キャラなめらか移動
///////////////////////////////////////////////////////////////
if ( inputn == 0 || inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7 ) {
player.x += (targetX - player.x) * 0.12;
player.y += (targetY - player.y) * 0.12;

}

else if (inputn == 3 || inputn == 5) {
player.x += (padgetX - player.x) * 0.12;
player.y += (padgetY - player.y) * 0.12;

}


///////////////////////////////////////////////////////////////
// 画面外制限
///////////////////////////////////////////////////////////////
if(player.x < 0) player.x = 0;
if(player.x > 1030) player.x = 1030;
if(player.y < 0) player.y = 0;
if(player.y > 620) player.y = 620;

}// pausef


///////////////////////////////////////////////////////////////
// QWER入力
///////////////////////////////////////////////////////////////
if (itemshopf !== 2 && pausef == 0 ) {
if ( inputn!== 3 && inputn !== 5 ){
if (keys[inputConfig.q]) qwerinput[0] = 1;
if (keys[inputConfig.w]) qwerinput[1] = 1;
if (keys[inputConfig.e]) qwerinput[2] = 1;
if (keys[inputConfig.r]) qwerinput[3] = 1;

}

if ( inputn == 3 || inputn == 5 ){
if (keys["gp_btn_5"]) qwerinput[0] = 1;
if (keys["gp_btn_6"]) qwerinput[1] = 1;
if (keys["gp_btn_7"]) qwerinput[2] = 1;
if (keys["gp_btn_8"]) qwerinput[3] = 1;

}



///////////////////////////////////////////////////////////////
// QWER処理
///////////////////////////////////////////////////////////////
for(let i = 0; i < 4; i++){
//QWER 使用でCDアップ中
if ( qwerinput[i] == 1 && qwerf[i] == 1 ) {
qwerf[i] = 2;
qwerc[i] = qwercd[i];

if (i == 0) grenadef = 1, audios["sound1"].play();
if (i == 1) barrierf = 1, audios["sound2"].play();
if (i == 2) assaultc = 1;
if (i == 3) bazookaf = 1, audios["sound4"].play();

}

//CD中なら
if ( qwerf[i] == 2 ) {
qwer8[i] = Math.floor( ( qwercd[i] - qwerc[i] ) / qwercd[i] * 8 );
qwer128[i] = ( qwercd[i] - qwerc[i] ) / qwercd[i] * 8 - Math.floor( ( qwercd[i] - qwerc[i] ) / qwercd[i] * 8 );
qwerc[i] -= delta / 60;
qwercdraw[i] = Math.floor( qwerc[i] * 10 ) / 10;
if ( qwercdraw[i] >= 10 ) qwercdraw[i] = Math.floor( qwerc[i] );
else if ( qwercdraw[i] < 10 && qwercdraw[i] % 1 == 0 ) qwercdraw[i] = qwercdraw[i] + ".0";


if ( qwerc[i] <= 0 ) {
qwerc[i] = 0;
qwer8[i] = 0;
qwerf[i] = 1;

}

}

qwerinput[i] = 0;

}// for i




///////////////////////////////////////////////////////////////////////
// スキル入力
///////////////////////////////////////////////////////////////////////
//Q
if (grenadef == 1) {
if (grenadec == 0) {
grenadex = player.x;
grenadey = player.y;

}

grenadec += delta / 60;
if (grenadec > 0.5) {
grenadec = 0;
grenadef = 0;
grenadehanabif = 1;
grenadehanabix = grenadex + grenadec * 800 + 260;
grenadehanabiy = grenadey + Math.sin(Math.PI / 180 * (grenadec * 180 - 135)) * 200 + 140;
audios["sound15"].play();

}

}// grenadef

if (grenadehanabif == 1) {
if (grenadehanabic == 0) {
for (let j = 0; j < mobsmax; j++) {
const m = mobs[j];
const dx = - grenadehanabix + m.x + mobcoinx[m.id] - 480;
const dy = - grenadehanabiy + m.y + mobcoiny[m.id] - 50;
if (m.hp > 0 && dx * dx + dy * dy < 250 * 250) {
m.hp -= aqwerhdamage[4 + aqwerh[1]];
if ( m.hp < 1 ) {
coinvol += m.id * 8 + Math.floor( Math.random () * 3 ) + 1;
if ( m.id > 7 ) coinvol += ( m.id - 7 ) * 40;
coinend += Math.floor( coinvol / 20 ) + Math.floor( coinvol / 10 ) + ( coinvol % 10 );
for(let k = coinoldend; k < coinend; k++){
if(!coin[k]) coin[k] = {};
if ( coinvol > 0 ) {
if ( coinvol > 19 ) coin[k].num = 2 , coin[k].cent = 20 , coinvol -= 20;
else if ( coinvol > 9 ) coin[k].num = 1 , coin[k].cent = 10 , coinvol -= 10;
else if ( coinvol > 0 ) coin[k].num = 0 , coin[k].cent = 1 , coinvol -= 1;
coin[k].x = m.x + mobcoinx[m.id] - 32;
coin[k].y = m.y + mobcoiny[m.id] - 32;
coin[k].vx = 8;
if ( m.y + mobcoiny[m.id] < 360 ) coin[k].vy = - Math.floor( Math.random () * 3 ) - 0.5;
else coin[k].vy = + Math.floor( Math.random () * 3 ) + 0.5;
coin[k].f = 1;
coin[k].c = Math.floor( Math.random() * 40 );

}// coinvol0

}// for k

}// m.id < 1

godamage();
for (let p = damagepanel.length - 1; p >= 0; p--) {
const q = damagepanel[p];
if (q.f == 0) {
q.x = m.x + mobcoinx[m.id] + Math.floor(Math.random() * 50) - 25;
q.y = m.y + mobcoiny[m.id] + Math.floor(Math.random() * 50) - 25;
q.num = aqwerhdamage[4 + aqwerh[1]];
q.f = 1;

}

}// m.hp < 1

}// m.hp > 0 && dx * dx + dy * dy < 250 * 250

}// for j mobs

}// grenadehanabic

grenadehanabic += delta / 60;
if (grenadehanabic > 0.78) {
grenadehanabic = 0;
grenadehanabif = 0;

}

}// grenadehanabif

//W
if (barrierf == 1) {
barrierc += delta / 60;
if (barrierc > aqwerhdamage[aqwerh[2]+9]) barrierc = 0, barrierf = 0;

}


//R
if (bazookaf > 0) {
if ( bazookac == 0 ) bazookax = player.x, bazookay = player.y;
if (bazookac % 30 == 0) bazookaf++;
if (bazookac > 0.3) {
bazookahanabif = 1;
bazookahanabix = player.x + 260 + bazookac * 1400;
bazookahanabiy = player.y + 44;
bazokahanabic = 0;
if (assaultc > 0) weaponn = 6;
else weaponn = 0;
bazookaf = 0;
bazookac = 0;
audios["sound5"].play();

for (let j = 0; j < mobsmax; j++) {
const m = mobs[j];
const dx = - bazookahanabix + m.x + mobcoinx[m.id];
const dy = - bazookahanabiy + m.y + mobcoiny[m.id];
if (m.hp > 0 && dx * dx + dy * dy < 310 * 310) {
m.hp -= aqwerhdamage[19 + aqwerh[4]];
if ( m.hp < 1 ) {
coinvol += m.id * 8 + Math.floor( Math.random () * 3 ) + 1;
if ( m.id > 7 ) coinvol += ( m.id - 7 ) * 40;
coinend += Math.floor( coinvol / 20 ) + Math.floor( coinvol / 10 ) + ( coinvol % 10 );
for(let k = coinoldend; k < coinend; k++){
if(!coin[k]) coin[k] = {};
if ( coinvol > 0 ) {
if ( coinvol > 19 ) coin[k].num = 2 , coin[k].cent = 20 , coinvol -= 20;
else if ( coinvol > 9 ) coin[k].num = 1 , coin[k].cent = 10 , coinvol -= 10;
else if ( coinvol > 0 ) coin[k].num = 0 , coin[k].cent = 1 , coinvol -= 1;
coin[k].x = m.x + mobcoinx[m.id] - 32;
coin[k].y = m.y + mobcoiny[m.id] - 32;
coin[k].vx = 8;
if ( m.y + mobcoiny[m.id] < 360 ) coin[k].vy = - Math.floor( Math.random () * 3 ) - 0.5;
else coin[k].vy = + Math.floor( Math.random () * 3 ) + 0.5;
coin[k].f = 1;
coin[k].c = Math.floor( Math.random() * 40 );

}// coinvol

}// for k

}// m.hp < 1

godamage();
for(let p = damagepanel.length - 1; p >= 0; p--){
const q = damagepanel[p];
if ( q.f == 0 ) {
q.x = m.x + mobcoinx[m.id] + Math.floor( Math.random() * 50 ) - 25;
q.y = m.y + mobcoiny[m.id] + Math.floor( Math.random() * 50 ) - 25;
q.num = aqwerhdamage[19 + aqwerh[4]];
q.f = 1;

}// q.f

}// for p

}// m.hp > 0 && dx * dx + dy * dy < 310 * 310

}//for j mobs

}// bazookac

bazookac += delta / 60;

}// bazookaf

if (bazookahanabif == 1) {
if (bazokahanabic * 12 >= 7) bazokahanabic = 0, bazookahanabif = 0;
else if (bazokahanabic * 12 < 7) {
bazokahanabic += delta / 60;

}// else if (bazokahanabic * 12 < 7) {

}// bazookahanabif

if (assaultc > 0) assaultc += delta / 60;
if (assaultc > 8) weaponn = 0, assaultc = 0, soundf[0] = 1;

} // if (itemshopf !== 2 && pausef == 0 ) {


///////////////////////////////////////////////////////////////////////
// アイテムショップ Item Shop
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// アイテムショップの移動
///////////////////////////////////////////////////////////////////////
if ( pausef == 0 ) {
if ( itemshopf == 0 && itemshopc > 0 && timer < 120) {
if ( Math.floor( ( itemshopdeadc + timer ) % 120 ) == 30 || Math.floor( ( itemshopdeadc + timer ) % 120 ) == 90 ){
//移動フラグ リセット処理
audios.sound7.currentTime = 0;
audios.sound7.play();
itemshopf = 1;
soundf[7] = 1;
itemshopy2 = -192;
boardcf = 0;

}

}

//下降する
else if ( itemshopf == 1 && ( Math.floor(itemshopc) % 30 ) > 1 ) {
if ( itemshoprad < 90 ) {
itemshopy = - 192 + Math.sin( Math.PI / 180 * itemshoprad ) * 272;
itemshoprad += delta / 3;

}

//固定する
else if ( itemshopf == 1 && itemshoprad >= 90 && ( Math.floor(itemshopc) % 30 ) < 15 ){
itemshoprad = 90;
itemshopy = 80;
audios.sound7.pause();
audios.sound7.currentTime = 0;

}

}

if ( itemshopf == 1 && Math.floor(itemshopc) % 30 == 15 ) itemshopf = 3;

//上昇する
if ( ( itemshopf == 3 && Math.floor(itemshopc) % 30 ) >= 15 ) {
itemshopy = itemshopy2 + Math.sin( Math.PI / 180 * itemshoprad ) * 272;
itemshoprad -= delta / 1.5;
audios.sound7.play();

if ( itemshopf == 3 && itemshoprad <= 0 ) soundf[7] = 0 , voicef[17] = 0 , itemshoprad = 0, itemshopc = 0, itemshopf = 0, itemshopy = -192;

}

if ( itemshopf !== 2 ) itemshopc += delta / 60;

///////////////////////////////////////////////////////////////////////
// アイテムショップ 買い物判定
///////////////////////////////////////////////////////////////////////
if ( itemshopf == 1 && player.x > itemshopx - 100 && player.x < itemshopx + 200 && player.y > itemshopy && player.y < itemshopy + 196 ) {
pausef = 1;
itemshopf = 2;
//if ( voicef[17] == 0 ) voicef[17] = 1, audios["voice"+17].volume = startvoicevol[17] * lastvol[0] * lastvol[3], audios.voice17.play();
if ( voicef[17] == 0 ) voicef[17] = 1, audios.voice17.play();
mouseDown = false;

}

}


///////////////////////////////////////////////////////////////////////
// アイテムショップ 入力処理
///////////////////////////////////////////////////////////////////////
if ( pausef == 1 && itemshopf == 2 ) {

//ラズベリー色をのせる
if( waittimer < 0 ){
if( keys[inputConfig.left] || keys["gp_btn_3"] ) boardcf = ( boardcf + 5 ) % 6, waittimer = 45;
if( keys[inputConfig.right] || keys["gp_btn_1"] ) boardcf = ( boardcf + 1 ) % 6, waittimer = 45;
else if (keys[inputConfig.up] || keys[inputConfig.down] || keys["gp_btn_0"] || keys["gp_btn_2"] ) {
if ( boardcf < 7 ) boardcf = 7;
else boardcf = 2;
waittimer = 45;

}

else if (keys["Enter"] || keys["Space"] || keys[inputConfig.a] || keys["gp_btn_4"] ) pressKeyf = true, waittimer = 45;
else if (keys["Escape"] || keys["Backspace"] || keys["Delete"] || keys[inputConfig.q] || keys["gp_btn_5"] ) pressCancelf = true, waittimer = 45;


}



for(let i = 0; i < 6; i++){
if ( mouseDown && aqwerh[i] < 5 && money > aqwerhmoney2[ i * 5 + aqwerh[i] ] && mouse.x > i * 206 + 36 && mouse.x < i * 206 + 172 && mouse.y > 106 && mouse.y < 412  ){
money -= aqwerhmoney2[ i * 5 + aqwerh[i] ]
if ( i < 5 ) {
money -= aqwerhmoney2[ i * 5 + aqwerh[i] ];
aqwerh[i] += 1;
//ロック解除
if ( i > 0 && i < 5 ) {
if (qwerf[i-1] == 0 )qwerf[i-1] = 1;

}

audios.voice18.currentTime = 0;
audios.voice18.play();
mouseDown = false;

}

itemshopy2 = itemshopy - 192;

if ( i == 5 && playerlife < 3 ){
aqwerhhmoneynum++;
playerlife++;
money -= aqwerhmoney2[ i * 5 + aqwerh[i] ];
aqwerh[i] += 1;
audios.voice18.currentTime = 0;
audios.voice18.play();
mouseDown = false;

}

}// if ( mouseDown

//ラズベリー色をのせる
if ( mouse.x > i * 206 + 36 && mouse.x < i * 206 + 172 && mouse.y > 106 && mouse.y < 412 ) boardcf = i;

}// for i

//ラズベリー色をのせる
if ( mouse.x > 80 && mouse.x < 1120 && mouse.y > 439 && mouse.y < 536 ) boardcf = 7;

//バグ防止
if( playerdeadf == 1){
pausef = 0;
itemshopf = 0;
itemshopc = 0;
itemshoprad = 0;
voicef[17] = 0;
pressCancelf = false;
keys[inputConfig.q] = false;
keys["gp_btn_5"] = false;
waittimer = 45;

}

}// if ( pausef == 1 && itemshopf == 2 ) {

///////////////////////////////////////////////////////////////////////
// アイテムショップ Exit 入力処理
///////////////////////////////////////////////////////////////////////
if ( pausef == 1 && itemshopf == 2 && pressCancelf ){
pausef = 0;
itemshopf = 3;
itemshopc = 15;
itemshoprad = 90;
voicef[17] = 0;
pressCancelf = false;
keys[inputConfig.q] = false;
inputkeys.q = false;
itemshopdeadc = 31;

}


if ( mouseDown && pausef == 1 && itemshopf == 2 &&  mouse.x > 80 && mouse.x < 1120 && mouse.y > 439 && mouse.y < 536 ) {
pausef = 0;
itemshopf = 3;
itemshopc = 15;
itemshoprad = 90;
voicef[17] = 0;
itemshopdeadc = 31;

}

///////////////////////////////////////////////////////////////
// 背景スクロール
///////////////////////////////////////////////////////////////
bgX -= 4 * delta;
if(bgX <= -50) bgX = 0;

///////////////////////////////////////////////////////////////
// ちょうちょ処理
///////////////////////////////////////////////////////////////
if ((Math.floor(timer * 10) / 10) % 120 == 45 && chouchof == 0 && timer < 120 ) chouchof = 1;
if ( chouchof > 0 ) chouchofunc();

///////////////////////////////////////////////////////////////
// 弾から敵へ当たり bullets
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// 連射
///////////////////////////////////////////////////////////////
if ( pausef == 0 ) {
shotTimer -= delta;
if( mouseDown && inputn !== 4 || keys["gp_btn_4"] || pressKeyf && inputn == 4 ){
if( shotTimer <= 0){
shoot();
shotTimer = 6;

}

}

///////////////////////////////////////////////////////////////
// 弾移動
///////////////////////////////////////////////////////////////
for(let i = bullets.length - 1; i >= 0; i--){

const b = bullets[i];

if ( b.bulletn == 0 ){
if ( b.smgf == 0 ) b.smgc = timer + aqwerh[0] * 0.5 , b.damage = aqwerh[0] * 10 ,  b.smgf = 1;

if ( timer < b.smgc ) b.x += b.speed * delta;
else {
b.x += Math.cos( Math.PI / 180 * ( timer - b.smgc ) * 10 ) * speed * delta;
b.y += Math.sin( Math.PI / 180 * ( timer - b.smgc ) * 10 ) * speed * delta * 50;

//ダメージの減衰
b.damage = Math.floor( aqwerhdamage[aqwerh[0]] + ( b.smgc - timer ) * aqwerhdamage[aqwerh[0]] );
if ( b.damage < 1 ) b.damage = 1;

}

}// b.bulletn == 0

else if (b.bulletn == 1 ){
b.x += speed * delta * 10;

}

if(b.x > canvas.width + 10 || b.y > canvas.height + 10 ){
bullets.splice(i,1);

}

}// for b

if( playerdeadf == 1){
bullets.length = 0;

}



///////////////////////////////////////////////////////////////
// コイン移動処理
///////////////////////////////////////////////////////////////
for(let i = coinstart; i < coinend; i++){
// ← 必須
if(!coin[i]) continue;
//if(!coin[i]) coin[i] = {};

if ( coin[i].f == 1 && chouchof !== 4 ) {
coin[i].x -= coin[i].vx * delta;
coin[i].y -= coin[i].vy * delta;
coin[i].c++;

}

if ( coin[i].f == 1 && chouchof == 4 ) {
coin[i].x -= ( coin[i].x - player.x ) / 20;
coin[i].y -= ( coin[i].y - player.y - 30 ) / 20;
coin[i].c++;

}



///////////////////////////////////////////////////////////////
// コインの距離が離れたら処理しない 描画しない
///////////////////////////////////////////////////////////////
if ( coin[i].x < -300 || coin[i].y < -500 || coin[i].y > 1200 ) coin[i].f = 0;


///////////////////////////////////////////////////////////////
// コインを入手
///////////////////////////////////////////////////////////////
if(coin[i] && coin[i].f == 1){
if(
coin[i].x > player.x - 100 &&
coin[i].x < player.x + 100 &&
coin[i].y > player.y - 100 &&
coin[i].y < player.y + 100
){

money += coin[i].cent;
resultgold += coin[i].cent;
coin[i].f = 0;
if ( mutef == 0 ){
audios.sound8.currentTime = 0;
audios.sound8.volume = startsfxvol[8] * lastvol[0] * lastvol[2];
audios.sound8.play();

}// mutef

}// coin[i].x >

}// if(coin[i] && coin[i].f == 1){

}// for(let i = coinstart; i < coinend; i++){

///////////////////////////////////////////////////////////////
// コイン移動処理 ここまで
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// レベルデザイン
///////////////////////////////////////////////////////////////

//Timerによって難易度を変える
// sec % 10 == 0
if ( timer > 9 && timer % 10 == 0 ) mobroutinef = 1, mobcooldownc -= mobcooldown;
//5秒に1回敵湧きのCD半分にする　ユーザーをクールダウンするため一旦消してます
// sec % 10 == 5
//else if ( timer > 4 && timer % 10 == 5) mobcooldownc -= mobcooldown / 2;


if ( stagenum == 1 ){
if (timer > 119.9 && bossf == 0 ) mobid = 8, lastbgm = 2, bgmf[2] = 1, audios.bgm0.pause();
else if ( timer < 8 ) mobid = 0;
else if ( timer > 7.9 && timer < 60 ) mobid = Math.floor( Math.random() * 2 );
else if ( timer > 59.9 && timer < 120 ) mobid = Math.floor( Math.random() * 3 );

}

else if ( stagenum == 2 ){
if (timer > 119.9 && bossf == 0 ) mobid = 9, lastbgm = 3, bgmf[3] = 1, audios.bgm0.pause();
else if ( timer < 8 ) mobid = 3;
else if ( timer > 7.9 && timer < 60 ) mobid = Math.floor( Math.random() * 5 );
else if ( timer > 59.9 && timer < 120 ) mobid = Math.floor( Math.random() * 6 );

}

else if ( stagenum == 3 ){
if (timer > 119.9 && bossf == 0 ) mobid = 10, lastbgm = 4, bgmf[4] = 1, audios.bgm0.pause();
else if ( timer < 60 ) mobid = Math.floor( Math.random() * 7 );
else if ( timer > 59.9 && timer < 120 ) mobid = Math.floor( Math.random() * 8 );

}


///////////////////////////////////////////////////////////////
// モンスター弾用と生成
///////////////////////////////////////////////////////////////
/*

モンスター攻撃パターン m.routine				    比率
m.routine0 直進 攻撃しながら slow||fast||stop		4
m.routine1 くねくね上下に動く。level				2
m.routine2 減速してしゃべる							1.5
m.routine3 減速して攻撃								1.5
m.routine4 上下から入る								1 ( 10秒に１ )
													モブ1が上下から来る確率 1 / 3

*/



for(let i = 0; i < mobsmax; i++){
const m = mobs[i];
//ボス討伐処理
if ( m.id > 7 && bossf == 1 && m.hp < 1 ) {
stagenum++;
bossf = 0;
timer = 0;
mobcooldownc = timer + mobcooldown;
stagealphaf = 0;
audios["bgm" + (m.id-6)].pause();
bgmf[0] = 1;

}

if ( bossf < 1 ){
if ( timer > mobcooldownc && m.hp < 1 ) {
m.id = mobid;
m.hp = mobmaxhp[m.id];
m.random = Math.random();
mobrandom = Math.random();
if ( m.id == 3 && m.random > 0.5 )m.routine = 1;
if ( bossf == 0 && m.id > 7 && m.hp > 0 ) m.routine = 2 , bossf = 1;
else if ( mobroutinef == 1 && mobrandom < 0.8 ) m.routine = 4;
else {
if ( mobrandom < 0.4 )m.routine = 0;
else if ( mobrandom >= 0.4 && mobrandom < 0.6 )m.routine = 1;
else if ( mobrandom >= 0.6 && mobrandom < 0.75 || m.id == 1 && m.random > 0.4 ) {
if( m.id !== 1 ) m.routine = 2;
m.mobtalkn = mobtalkn[m.id];
mobtalkn[m.id]++;
if ( mobtalkmax[m.id] - 1 < mobtalkn[m.id] ) mobtalkn[m.id] = 0;

}

else if ( mobrandom >= 0.75 && mobrandom < 0.9 ) m.routine = 3, m.firstcd = 6;
else if ( mobrandom >= 0.9 && mobrandom < 1 ) m.routine = 4;

if ( mobid == 1 ){
if ( m.routine > 0 && m.routine < 4 ) m.routine = 0;

}

}// else mobrandom0~1

// m.routine0 直進 攻撃しながら slow||fast||stop
// m.routine2 減速してしゃべる
// m.routine3 減速して攻撃
if ( m.routine == 0 || m.routine == 2 || m.routine == 3 ){
m.x = 1120 + Math.random() * 50;
m.y = - 100 + Math.random() * 480;

}

// m.routine1 くねくね上下に動く
else if ( m.routine == 1 ){
m.x = 1120 + Math.random() * 50;
m.y = 0 + Math.random() * 380;

}

// m.routine4 上下から入る
else if ( m.routine == 4 ){
m.x = 800 + Math.random() * 100;
m.y = - 150 + Math.floor( Math.random() * 2 ) * 930;

}

m.damageTimer = 10;
if( mobid == 1 ) m.speed = Math.random() * 4 + 6;
else m.speed = 4;
if ( m.routine == 1 ) m.yspeed = 3;
else if ( m.routine == 4 ) m.yspeed = 0;
else m.yspeed = 1;
m.bossanimec = 0;
//m.id = Math.floor( Math.random() * 8 ) + 0;
//m.id = Math.floor( Math.random() * 3 ) + 0;
m.langnum = mylangn;
m.r = Math.random() * 360;
m.mob1bomf = 0;
m.cd = 0.01;
m.attacktime = mobattacktime[m.id];
m.angle = Math.atan2(player.y - m.y - mobkutiy1[m.id] + 50, player.x - m.x + mobkutix1[m.id] - 120);
m.mobtalkc = 0;
m.mobvisibleLines = 0;//リセット用
m.mobcommentlines = [];//リセット用
m.mobframe = 0;//リセット用
m.firstcd = 0.4 + m.random;

mobcooldownc = timer + mobcooldown * 2 / 3;
bossattacktype = 0;

}

}

///////////////////////////////////////////////////////////
// 吹き出しコメントの処理 しゃべる
///////////////////////////////////////////////////////////
if ( m.routine == 2 || m.id == 1 && m.random > 0.4 ){
if ( m.hp > 0 && m.mobtalkc < 4 ){
m.mobcommentlines = mobtalk[[m.langnum]][[m.id]][[m.mobtalkn]];
if (Array.isArray(m.mobcommentlines)) {
    m.mobmaxLength = Math.max(...m.mobcommentlines.map(line => line.length));

}

//m.mobmaxLength = Math.max(...m.mobcommentlines.map(line => line.length));
/*
m.mobmaxLength = Math.max(...m.mobcommentlines.map(function(line){
    return line.length;
}));
*/

if( m.mobframe % 60 == 0 && m.mobvisibleLines < m.mobcommentlines.length) m.mobvisibleLines++;

m.mobframe++;
m.mobtalkc += delta / 60;

}

}

///////////////////////////////////////////////////////////
// キャラの弾から　敵の当たり判定
///////////////////////////////////////////////////////////
const p = [
{x: m.x + mobhitx1[m.id], y: m.y + mobhity1[m.id]},
{x: m.x + mobhitx2[m.id], y: m.y + mobhity2[m.id]},
{x: m.x + mobhitx3[m.id], y: m.y + mobhity3[m.id]},
{x: m.x + mobhitx4[m.id], y: m.y + mobhity4[m.id]}

];

for(let j = bullets.length - 1; j >= 0; j--){
const b = bullets[j];
const x1 = b.x + 10;
const y1 = b.y;
const x2 = b.x - 40;
const y2 = b.y;
let hit = false;

// 辺との交差
for (let k = 0; k < 4; k++) {
  const a = p[k];
  const d = p[(k + 1) % 4];
  if (lineHit(x1, y1, x2, y2, a.x, a.y, d.x, d.y)) {
    hit = true;
    break;
  }
}

// 端点が内部にあるか
if (!hit) {
  if (pointInParallelogram(x1, y1, p) || pointInParallelogram(x2, y2, p)) {
    hit = true;
  }
}


///////////////////////////////////////////////////////////
// ダメージ表記の処理
///////////////////////////////////////////////////////////
if(hit && m.hp > 0){
godamage();
for(let p = damagepanel.length - 1; p >= 0; p--){
const q = damagepanel[p];
if ( q.f == 0 ) {
q.x = m.x + mobcoinx[m.id] + Math.floor( Math.random() * 50 ) - 25;
q.y = m.y + mobcoiny[m.id] + Math.floor( Math.random() * 50 ) - 25;
q.num = b.damage;
q.f = 1;

}

}

resultdamage += b.damage;
m.hp -= b.damage;
m.damageTimer--;

// 弾を消す（貫通防止）
bullets.splice(j,1);



// モブが死んだ
if(m.hp <= 0){
m.c = c;
resultmonsters++;

if ( mutef == 0 ){
audios.sound10.currentTime = 0;
audios.sound10.volume = startsfxvol[10] * lastvol[0] * lastvol[2];
audios.sound10.play();

}

///////////////////////////////////////////////////////////////
// コイン生成処理 コインを落とす
///////////////////////////////////////////////////////////////
//coinvol += Math.floor( Math.random() * 50 ) + 10;
//コインの量
coinvol += m.id * 8 + Math.floor( Math.random () * 3 ) + 1;
if ( m.id > 7 ) coinvol += ( m.id - 7 ) * 40;
coinend += Math.floor( coinvol / 20 ) + Math.floor( coinvol / 10 ) + ( coinvol % 10 );

for(let i = coinoldend; i < coinend; i++){
// ← 生成に必須
if(!coin[i]) coin[i] = {};
//if(!coin[i]) continue;
if ( coinvol > 0 ) {
if ( coinvol > 19 ) coin[i].num = 2 , coin[i].cent = 20 , coinvol -= 20;
else if ( coinvol > 9 ) coin[i].num = 1 , coin[i].cent = 10 , coinvol -= 10;
else if ( coinvol > 0 ) coin[i].num = 0 , coin[i].cent = 1 , coinvol -= 1;
coin[i].x = m.x + mobcoinx[m.id] - 32;
coin[i].y = m.y + mobcoiny[m.id] - 32;
coin[i].vx = 8;
if ( m.y + mobcoiny[m.id] < 360 ) coin[i].vy = - Math.floor( Math.random () * 3 ) - 0.5;
else coin[i].vy = + Math.floor( Math.random () * 3 ) + 0.5;
coin[i].f = 1;
coin[i].c = Math.floor( Math.random() * 40 );

}

}

coinoldend = coinend;

}

}// hp

}// hit

}// fortama


///////////////////////////////////////////////////////////////
// 敵の処理　敵の弾からキャラへの当たり　衝突
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// モンスターの処理
///////////////////////////////////////////////////////////////
//for(let i = mobs.length - 1; i >= 0; i--){

for(let i = 0; i < mobsmax; i++){
const m = mobs[i];

// モブの減速
// m.routine2 減速してしゃべる
// m.routine3 減速して攻撃
if ( m.routine == 2 || m.routine == 3 ){
//減速開始
if ( m.x < 1280 - mobsabunx[m.id] - 200 - m.random * 200 && m.speed > 0.1 ) m.speed *= ( 0.99 - m.random * 2 );
//停止
else if (m.speed < 0.1) m.speed = 0;
//移動処理
m.x -= m.speed * delta;
//再始動
//if ( Math.floor( Math.random() * 100 ) == 0 ) m.speed = 4;

}

// m.routine1 くねくね上下に動く
if ( m.routine == 1 ){
//モンスターの移動処理
m.x -= m.speed * delta;
m.y += Math.sin((c * 1.5 + m.r) * Math.PI / 180) * m.yspeed * delta;

}

// m.routine0 直進 攻撃しながら slow||fast||stop
// m.routine4 上下から入る
if ( m.routine == 0 || m.routine == 4 ){
//モンスターの移動処理
m.x += Math.cos( m.angle ) * m.speed * delta;
m.y += Math.sin( m.angle ) * m.speed * delta;

}

//ボス移動処理フラグ
if ( m.id > 7 && m.speed == 0 && m.routine == 2 ) m.routine = 5, m.movef = 1, m.r = Math.random() * 360;
if ( m.routine == 5 ){
//ボス移動処理
//左にいたら
if ( m.x + mobcoinx[m.id] < 700 + 130 ) m.movef = 1, m.r = Math.random() * 180 - 90;
//右にいたら
else if ( m.x + mobcoinx[m.id] > 1280 - 150 ) m.movef = 1, m.r = Math.random() * 180 + 90;
//上にいたら
else if ( m.id < 10 && m.y + mobcoiny[m.id] < 80 ) m.movef = 1, m.r = Math.random() * 90 + 45;
else if ( m.id == 10 && m.y + mobcoiny[m.id] < 180 ) m.movef = 1, m.r = Math.random() * 90 + 45;
//下にいたら
else if ( m.id < 10 && m.y + mobcoiny[m.id] > 720 - 100 ) m.movef = 1, m.r = Math.random() * 90 + 225;
else if ( m.id == 10 && m.y + mobcoiny[m.id] > 720 - 100 ) m.movef = 1, m.r = Math.random() * 90 + 225;

//ボス移動変更処理
if ( m.movef == 1 ){
m.speed = Math.cos( Math.PI / 180 * m.r ) * 2;
m.yspeed = Math.sin( Math.PI / 180 * m.r ) * 2;
m.movef = 0;

}

if ( m.id == 8 && bossattacktype !== 1 ){
m.x += m.speed;
m.y += m.yspeed;

}

}



// 画面左へ行ったら復活 範囲外
if(m.x < -400 || m.x > 2000 || m.y < - 300 || m.y > 1020){
m.hp = 0;

}

// ダメージ画像タイマー
if ( m.damageTimer == 10 ){
if ( m.id < 8 ) m.img = m.id * 12 + Math.floor( ( c / 10 ) % 6 );
else if ( m.id == 8 || m.id == 9 ){
if ( bossattacktype == 0 ) m.bossanimec = 0 , m.img = 96 + Math.floor((c / 10) % 6) + (m.id - 8) * 22;
else if ( bossattacktype == 1 ) m.img = 102 + Math.floor( ( m.bossanimec / 30 ) % 5) + (m.id - 8) * 22;
m.bossanimec++;

}

else if (m.id == 10) {
if ( boss10attackf == 0 || m.bossanimec == 0 ) m.img = 96 + Math.floor((c / 10) % 6) + (m.id - 8) * 22;
else if ( boss10attackf == 1 || m.bossanimec > 0 ) m.img = 102 + Math.floor((m.bossanimec / 10) % 5) + (m.id - 8) * 22;
m.bossanimec++;
if ( m.bossanimec == 40 ) boss10attackf = 0, m.bossanimec = 0;

}

}

else if(m.damageTimer < 10 && m.damageTimer > 0 ){ 
m.damageTimer -= delta;
if ( m.id < 8 ) m.img = m.id * 12 + Math.floor( ( c / 10 ) % 6 ) + 6;
else m.img = 96 + Math.floor( ( c / 10 ) % 6) + 11 + ( m.id - 8 ) * 22;
		
}

// ダメージ画像を元に戻す
else if(m.damageTimer <= 0){
m.damageTimer = 10;
if ( m.id < 8 ) m.img = m.id * 12 + Math.floor( ( c / 10 ) % 6 );
else m.img = 96 + Math.floor( ( c / 10 ) % 6) + (m.id - 8) * 22;

}



//プレイヤーが逆方向から攻撃されないための処理
if ( m.id == 4 || m.id == 6 ) if ( m.x < player.x + 150 ) m.cd = 10;

///////////////////////////////////////////////////////////////
// モブ攻撃処理
///////////////////////////////////////////////////////////////
if ( m.cd < 0 && m.firstcd < 0 && m.attacktime > 0 && m.id !== 1 && m.hp > 0 && m.x > 0 ) mobshoot();
function mobshoot() {

for(let k = 0; k < mobsway[m.id + bossattacktype + bossidplus[m.id]]; k++){
if ( m.id < 8 ) bossattcktype = 0;
if ( m.id == 0 || m.id == 1 || m.id == 5 || m.id == 7 || m.id == 10 ) angle = Math.atan2(player.y - m.y - mobkutiy1[m.id] + 50, player.x - m.x + mobkutix1[m.id] - 120);
else if (m.id == 2) angle = 1, m.mob2c++;
else if (m.id == 3) angle = Math.PI;
else if (m.id == 4) angle = Math.atan2(player.y - m.y - mobkutiy1[m.id] + 50, player.x - m.x + mobkutix1[m.id] - 120) + Math.PI / 8 * k - Math.PI / 8;
else if (m.id == 6) {
angle = Math.atan2(player.y - m.y - mobkutiy1[m.id] + 50, player.x - m.x + mobkutix1[m.id] - 120);
m.mob6point = (m.mob6point + 1) % 2;

}

else if (m.id == 8 ) angle = Math.atan2(player.y - m.y - mobkutiy1[m.id] + 50, player.x - m.x + mobkutix1[m.id] - 120) + Math.random() * 0.2 - 0.1;
else if (m.id == 9 && bossattacktype == 0 ) angle = Math.atan2(player.y - m.y - mobkutiy1[m.id] + 50, player.x - m.x + mobkutix1[m.id] - 120);
else if (m.id == 9 && bossattacktype == 1 ) angle = Math.atan2(player.y - m.y - mobkutiy1[m.id] + 50, player.x - m.x + mobkutix1[m.id] - 120) + Math.PI / 16 * k - Math.PI / 16 * 3;


let speed = 4;//ここにスピード置かないとxspeed, yspeedは NaN になる


tama.push({
id: m.id,
x: m.x + mobkutix1[m.id],
y: m.y + mobkutiy1[m.id],
r: 0,
speed: 1,
inum: k,
mob2c: m.mob2c,
angle: angle,
xspeed: Math.cos(angle) * speed,
yspeed: Math.sin(angle) * speed,
c: 0,
c2: 0,
damage:1,
attacktype: bossattacktype,
point: m.mob6point,
n: i

});

}// k

m.cd = mobscooldown[m.id];

}// function mobshoot() {

if ( m.firstcd > -1 ) m.firstcd-= delta / 60;

if ( m.attacktime < 0 ) {
if ( m.id > 7 ) {
bossattacktype = Math.floor(Math.random() * bossattacktypen[m.id - 8]);

}

m.attacktime = mobattacktime[m.id];
m.cd = mobaddcd[m.id];

}// m.attacktime < 0 

m.attacktime -= delta / 60;

if ( m.cd > -1 && m.firstcd < 0 ) m.cd -= delta / 60;

///////////////////////////////////////////////////////////////
// Tama 処理
///////////////////////////////////////////////////////////////

for (let j = tama.length - 1; j >= 0; j--) {
if ( tama[j] ){ //error防止 true用
if ( tama[j].id == 0 && tama[j].n == i ) {
tama[j].x += tama[j].xspeed;
tama[j].y += tama[j].yspeed;

///////////////////////////////////////////////////////////
// プレイヤー当たり判定
///////////////////////////////////////////////////////////
const playerPoly = [
{ x: player.x + 50,  y: player.y - 10 },
{ x: player.x + 80,  y: player.y - 10 },
{ x: player.x - 50,  y: player.y + 80 },
{ x: player.x - 80,  y: player.y + 80 }

];

///////////////////////////////////////////////////////////
// モンスター弾判定
///////////////////////////////////////////////////////////
const tamaPoly = [
{ x: tama[j].x, y: tama[j].y },
{ x: tama[j].x + tama[j].xspeed * 21, y: tama[j].y + tama[j].yspeed * 21 - 60 },
{ x: tama[j].x + tama[j].xspeed * 35, y: tama[j].y + tama[j].yspeed * 21 },
{ x: tama[j].x + tama[j].xspeed * 21, y: tama[j].y + tama[j].yspeed * 21 + 60 }

];

///////////////////////////////////////////////////////////
// SAT衝突判定
///////////////////////////////////////////////////////////
if(polygonsCollide(playerPoly, tamaPoly)){
if ( playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;

}


}

else if ( tama[j].id == 2 && tama[j].n == i) {
if( tama[j].mob2c % 2 == 0 ) tama[j].r+= 4;
else tama[j].r-= 4;
if ( tama[i] > 179 ) tama[i] -= 180;
if ( tama[i] < -179 ) tama[i] += 180;
tama[j].x += ( Math.cos( Math.PI / 180 * tama[j].r ) * tama[j].speed - 1 ) * 2;
tama[j].y += Math.sin(Math.PI / 180 * tama[j].r) * tama[j].speed * 1.5 * 4;




const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 20,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;


}

else if ( tama[j].id == 3 && tama[j].n == i) {
tama[j].x += tama[j].xspeed;
tama[j].y += tama[j].yspeed;


const p = [
{ x: player.x + 50,  y: player.y - 10 },
{ x: player.x + 80,  y: player.y - 10 },
{ x: player.x - 50,  y: player.y + 80 },
{ x: player.x - 80,  y: player.y + 80 }

];

const x1 = tama[j].x;
const y1 = tama[j].y;
const x2 = tama[j].x-31;
const y2 = tama[j].y;
let hit = false;

// 辺との交差
for (let k = 0; k < 4; k++) {
  const a = p[k];
  const d = p[(k + 1) % 4];
  if (lineHit(x1, y1, x2, y2, a.x, a.y, d.x, d.y)) {
    hit = true;
    break;

  }

}

// 端点が内部にあるか
if (!hit) {
  if (pointInParallelogram(x1, y1, p) || pointInParallelogram(x2, y2, p)) {
    hit = true;

  }

}

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;

}


else if (tama[j].id == 4 && tama[j].n == i) {
tama[j].x += tama[j].xspeed;
tama[j].y += tama[j].yspeed;


const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 20,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;


}

else if (tama[j].id == 5 && tama[j].n == i) {
tama[j].x += ( tama[j].xspeed + Math.cos(Math.PI / 180 * tama[j].r) * 2 );
tama[j].y += ( tama[j].yspeed + Math.sin(Math.PI / 180 * tama[j].r) * 4 );
tama[j].r-= 4;

const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 60,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;


}


if (tama[j].id == 6 && tama[j].n == i) {
if (tama[j].point == 0 && m.id == tama[j].id && m.hp > 0) {
tama[j].c+= delta / 60;
mob6x1[j] = m.x + mobkutix1[6];
mob6y1[j] = m.y + mobkutiy1[6];
mob6x2[j] = m.x + mobkutix1[6] + tama[j].xspeed * 150 * tama[j].c;
mob6y2[j] = m.y + mobkutiy1[6] + tama[j].yspeed * 150 * tama[j].c;

}

else if (tama[j].point == 1 && m.id == tama[j].id && m.hp > 0) {
tama[j].c+= delta / 60;
mob6x3[j] = m.x + mobkutix1[11];
mob6y3[j] = m.y + mobkutiy1[11];
mob6x4[j] = m.x + mobkutix1[11] + tama[j].xspeed * 150 * tama[j].c;
mob6y4[j] = m.y + mobkutiy1[11] + tama[j].yspeed * 150 * tama[j].c;

}




///////////////////////////////////////////////////////////
// プレイヤー当たり判定
///////////////////////////////////////////////////////////
const playerPoly = [
{ x: player.x + 50,  y: player.y - 10 },
{ x: player.x + 80,  y: player.y - 10 },
{ x: player.x - 50,  y: player.y + 80 },
{ x: player.x - 80,  y: player.y + 80 }

];

if ( tama[j].point == 0 ){
///////////////////////////////////////////////////////////
// モンスター弾判定
///////////////////////////////////////////////////////////
const tamaPoly = [
{ x: mob6x1[j] - 12, y: mob6y1[j] },
{ x: mob6x1[j] + 12, y: mob6y1[j] },
{ x: mob6x2[j] + 12, y: mob6y2[j] },
{ x: mob6x2[j] - 12, y: mob6y2[j] }

];

///////////////////////////////////////////////////////////
// SAT衝突判定
///////////////////////////////////////////////////////////
if(polygonsCollide(playerPoly, tamaPoly)){
if ( playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;

}

}

if ( tama[j].point == 1 ){
///////////////////////////////////////////////////////////
// モンスター弾判定
///////////////////////////////////////////////////////////
const tamaPoly = [
{ x: mob6x3[j] - 12, y: mob6y3[j] },
{ x: mob6x3[j] + 12, y: mob6y3[j] },
{ x: mob6x4[j] + 12, y: mob6y4[j] },
{ x: mob6x4[j] - 12, y: mob6y4[j] }

];

///////////////////////////////////////////////////////////
// SAT衝突判定
///////////////////////////////////////////////////////////
if(polygonsCollide(playerPoly, tamaPoly)){
if ( playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;

}

}





if ( tama[j].c > 2.5 && tama[j].n == i || m.hp < 1 && tama[j].n == i ) tama.splice(j,1);

}

else if (tama[j].id == 7 && tama[j].n == i) {
tama[j].x += tama[j].xspeed;
tama[j].y += tama[j].yspeed;

const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 25,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;


}


//Boss 1
else if (tama[j].id == 8 && tama[j].n == i) {

if (tama[j].attacktype == 0) {
tama[j].x += tama[j].xspeed;
tama[j].y += tama[j].yspeed;



const p = [
{ x: player.x + 50,  y: player.y - 10 },
{ x: player.x + 80,  y: player.y - 10 },
{ x: player.x - 50,  y: player.y + 80 },
{ x: player.x - 80,  y: player.y + 80 }

];

const x1 = tama[j].x;
const y1 = tama[j].y;
const x2 = tama[j].x + Math.cos(tama[j].angle) * 48;
const y2 = tama[j].y + Math.sin(tama[j].angle) * 48;
let hit = false;

// 辺との交差
for (let k = 0; k < 4; k++) {
  const a = p[k];
  const d = p[(k + 1) % 4];
  if (lineHit(x1, y1, x2, y2, a.x, a.y, d.x, d.y)) {
    hit = true;
    break;

  }

}

// 端点が内部にあるか
if (!hit) {
  if (pointInParallelogram(x1, y1, p) || pointInParallelogram(x2, y2, p)) {
    hit = true;

  }

}

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;

}

if (tama[j].attacktype == 1) {
//ビームが発射される
if (150 <= 15 + tama[j].c * 15 && tama[j].c2 <= 0) {
m.attacktime = mobattacktime[8];
m.cd = 10;
tama[j].x = m.x + mobkutix1[8];
tama[j].y = m.y + mobkutiy1[8];
tama[j].c2 += delta / 60;
//for (let k = 0; k < 3; k++){
//tama[j].r = tama[j].angle + k * 0.5 - 0.5;

//}


}

//紫の円が大きくなる
else if (150 > 15 + tama[j].c * 15) {
tama[j].c+= delta / 3;
m.attacktime = mobattacktime[8];
m.cd = 10;

}


if ( tama[j].c2 > 0 ) {
m.cd = 10;
tama[j].c2 += delta * 12;






const p = [
{ x: player.x + 50,  y: player.y - 10 },
{ x: player.x + 80,  y: player.y - 10 },
{ x: player.x - 50,  y: player.y + 80 },
{ x: player.x - 80,  y: player.y + 80 }

];

const x1 = tama[j].x;
const y1 = tama[j].y;
const x2 = tama[j].x + Math.cos(tama[j].angle) * ( tama[j].c2 * 2 + 150 );
const y2 = tama[j].y + Math.sin(tama[j].angle) * ( tama[j].c2 + 150 );
let hit = false;

// 辺との交差
for (let k = 0; k < 4; k++) {
  const a = p[k];
  const d = p[(k + 1) % 4];
  if (lineHit(x1, y1, x2, y2, a.x, a.y, d.x, d.y)) {
    hit = true;
    break;

  }

}

// 端点が内部にあるか
if (!hit) {
  if (pointInParallelogram(x1, y1, p) || pointInParallelogram(x2, y2, p)) {
    hit = true;

  }

}

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;



if (tama[j].c2 > 900) {
bossattacktype = 0;
m.cd = 1;
m.attacktime = mobattacktime[8];
tama.splice(j,1);

}//tama[j].c2


}//tama[j].inum == j

}//tama[j].attacktype

}//tama[j].id == 8

else if (tama[j].id == 9 && tama[j].n == i) {
if (tama[j].attacktype == 0) {
tama[j].x += tama[j].xspeed + Math.cos(Math.PI / 180 * tama[j].r) * 2;
tama[j].y += tama[j].yspeed + Math.sin(Math.PI / 180 * tama[j].r) * 5;
tama[j].r -= 4;

const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 50,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;


}

if (tama[j].attacktype == 1) {
tama[j].x += tama[j].xspeed * 2;
tama[j].y += tama[j].yspeed * 2;
m.cd = 10;

const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 35,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;

//弾 範囲外
if ( tama[j].x < -300 || tama[j].x > 1580 || tama[j].y < -400 || tama[j].y > 1120 ){
bossattacktype = 0;
m.cd = 0;
m.attacktime = mobattacktime[9];

}

}


}


//Boss3
else if (tama[j].id == 10 && tama[j].n == i) {
if (tama[j].attacktype == 0) {
if (m.cd > 0.4) m.cd = 0.4;
tama[j].x += tama[j].xspeed * 2;
tama[j].y += tama[j].yspeed * 2;
tama[j].r += 0.05;


const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 45,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;


}

if (tama[j].attacktype == 1) {
tama[j].x += tama[j].xspeed + Math.cos(Math.PI / 180 * tama[j].r) * 2;
tama[j].y += tama[j].yspeed + Math.sin(Math.PI / 180 * tama[j].r) * 5;
tama[j].r -= 4;


const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 60,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;


}


if (tama[j].attacktype == 2) {
tama[j].x += tama[j].xspeed * 3;
tama[j].y += tama[j].yspeed * 3;
bossattacktype = Math.floor(Math.random() * 2);
boss10attackf = 1;


const hit = circleVsParallelogram(
tama[j].x, tama[j].y, 150,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//当たり判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;


}

}

//弾を消す 範囲外
if ( tama[j] ){
if ( tama[j].x < -300 || tama[j].x > 1580 || tama[j].y < -400 || tama[j].y > 1120 ) tama.splice(j,1);

}

} //tama[j] true

} //for tama[j]


///////////////////////////////////////////////////////////
// MOB1の点滅表示　爆発判定
///////////////////////////////////////////////////////////
if ( m.hp > 0 && m.id == 1 ) {
let dx = player.x - 120 - m.x;
let dy = player.y - 50 - m.y;
//一応残すのはあり
let kyori = Math.sqrt(dx * dx + dy * dy);
if ( kyori < 400 ) {
if ( m.mob1bomf == 0 ) m.mob1bomf = 1, m.mob1bomc = Math.random() * 2 + 1.0;

}

//爆発までカウントダウン
if ( m.mob1bomf == 1 && m.mob1bomc > 0 ) m.mob1bomc-= delta / 60;

//爆発エフェクト中
if ( m.mob1bomf > 1 ) m.mob1bomc+= delta / 60, m.mob1bomf = Math.floor( m.mob1bomc * 40 ) + 2;

//爆発判定
if ( kyori < 240 || m.mob1bomc < 0 ){
if ( m.mob1bomf == 1 ) m.mob1bomc = 0 , m.mob1bomf = 2;

}

//爆発後1
if ( m.mob1bomf >= 6 ) {
m.bom1bomc = 0;
m.mob1bomf = 0;
m.hp = 0;
audios.sound6.currentTime = 0;
audios.sound6.play();

}


// 画像
if( m.mob1bomf == 1 && Math.floor( c / 5 ) % 2 == 1 ){
m.img = m.id * 12 + 6;

}

if ( m.mob1bomf == 1 && m.mob1bomc < 0 || dx * dx + dy * dy < 230 * 230 ){
mob1createExplosion(m.x + mobcoinx[m.id], m.y + mobcoiny[m.id]);

const hit = circleVsParallelogram(
m.x + mobcoinx[m.id], m.y + mobcoiny[m.id], 280,   // 円

player.x + 50, player.y - 10,   // 平行四辺形開始点
30,0, // 横ベクトル
-130,90 // 縦ベクトル

);

//衝突判定
if ( hit && playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;

}// dxdy

}// m.hp > 0 && m.id == 1

if ( m.hp > 0 ){

///////////////////////////////////////////////////////////
// プレイヤー当たり判定
///////////////////////////////////////////////////////////
const playerPoly = [
{ x: player.x + 50,  y: player.y - 10 },
{ x: player.x + 80,  y: player.y - 10 },
{ x: player.x - 50,  y: player.y + 80 },
{ x: player.x - 80,  y: player.y + 80 }

];

///////////////////////////////////////////////////////////
// モンスター当たり判定
///////////////////////////////////////////////////////////
const mobPoly = [
{ x: m.x + mobhitx1[m.id], y: m.y + mobhity1[m.id] },
{ x: m.x + mobhitx2[m.id], y: m.y + mobhity2[m.id] },
{ x: m.x + mobhitx3[m.id], y: m.y + mobhity3[m.id] },
{ x: m.x + mobhitx4[m.id], y: m.y + mobhity4[m.id] }

];

///////////////////////////////////////////////////////////
// SAT衝突判定
///////////////////////////////////////////////////////////
if(polygonsCollide(playerPoly, mobPoly)){
if ( playerdeadf == 0 && barrierf == 0 ) playerdeadf = 1, resultmobid = m.id;

}

}// m.hp>0

}// for m



///////////////////////////////////////////////////////////
// ダメージ表記の処理
///////////////////////////////////////////////////////////
for(let p = damagepanel.length - 1; p >= 0; p--){
const q = damagepanel[p];
//const q = damagepanel[p];
q.c++;
if ( q.c > 100 ) damagepanel.splice(p,1);

}




///////////////////////////////////////////////////////////////
// プレイヤーの死亡処理
///////////////////////////////////////////////////////////////
if ( playerdeadf == 1 ) {
if ( playerdeadc == 0 ){
for(let i = 0; i < mobsmax; i++){
const m = mobs[i];
if ( m.id > 7 ) m.hp = 0, m.x = -300, stagenum--;
else if ( m.id !== 1 ) m.hp = 0, m.x = -300;
else if ( m.id == 1 ) m.mob1bomf = 1, m.mob1bomc = -1, m.hp = 0, m.x = -300;

}// for i

pressKeyf = false;
mouseDown = false;
waittimer = 45;
pausekeyf = 0;
assaultc = 0;
audios.bgm2.pause();
audios.bgm3.pause();
audios.bgm4.pause();
bgmf[0] = 1;
chouchof = 0;
itemshopdeadc = Math.floor( ( itemshopdeadc + timer ) % 30 );
itemshopy = -192;
itemshopf = 0;
itemshopc = 0;
itemshoprad = 0;
tama = [];
bluehanabix = player.x - 270;
bluehanabiy = player.y - 270;

if (vibrationf == 1) {
if (window.WebHaptics) haptics.trigger("medium");// iPhone Safari
else if (navigator.vibrate) navigator.vibrate(40);// Android
else gamepadVibration(0.5, 40);// PC

}

}// playerdeadc

playerdeadc+= delta / 60;
player.y += Math.sin( Math.PI / 180 * ( playerdeadc + 55 ) ) * 120;
if ( playerdeadc > 0 ){
if ( crashheartnum == 0 ) {
soundf[12] = 1;
//audios.voice13.currentTime = 0;
//audios.voice13.volume = startvoicevol[13] * lastvol[0] * lastvol[3];
//audios.sound9.currentTime = 0;
//audios.sound9.volume = startsfxvol[9] * lastvol[0] * lastvol[2];
//soundf[9] = 0;
crashheartnum += delta / 5;
playerlife--;

if (playerlife < 1) soundf[11] = 1;

//CD Reset
for (let i = 0; i < 4; i++) {
if (qwerf[i] > 0) qwerf[i] = 1;
qwerc[i] = 0;
qwer8[i] = 0;

}

}// crashheartnum == 0

//audios.sound9.play()
if ( crashheartnum > 0 && crashheartnum < 15 ) {
if ( soundf[9] == 0 && mutef == 0 ) soundf[9] = 1;

}

crashheartnum += delta / 5;

if ( crashheartnum > 15 ) {
//ハート1個減らして再開
if (playerlife > 0) {
playerdeadf = 0;
playerdeadc = 0;
stagealphaf = 0;
crashheartnum = 0;
timer = 0;
mobcooldownc = 0;
player.x = 200;
player.y = 320;

}

}// crashheart

//リザルト画面移行 result
if(playerlife < 1) {
player.y = 3000;

if(mouse.x > 849 && mouse.x < 1011 && mouse.y > 449 && mouse.y < 511 ) boardcf = 0;
else if (mouse.x > 649 && mouse.x < 811 && mouse.y > 449 && mouse.y < 511 ) boardcf = 1;

if( waittimer < 0 ){
if( keys[inputConfig.left] || keys[inputConfig.right] || keys["gp_btn_1"] || keys["gp_btn_3"] ) boardcf = ( boardcf + 1 ) % 2, waittimer = 45;

}

if( waittimer < 0 ){
if(mouseDown || pressKeyf || keys["gp_btn_4"] ) {
// Go Top
if(mouse.x > 649 && mouse.x < 811 && mouse.y > 449 && mouse.y < 511 || boardcf == 1 ) {
player.x = 200;
player.y = 320;
playerdeadf = 0;
playerdeadc = 0;
playerlife = 3;
stagealphaf = 0;
crashheartnum = 0;
aqwerh = [1, 1, 0, 0, 0, 0];
qwerf = [1, 0, 0, 0];
qwerc = [0, 0, 0, 0];
timer = 0;
mobcooldownc = 0;
coinoldend = 0;
coinstart = 0;
coinend = 0;
pressKeyf = false;
mouseDown = false;
mainroutine = 1;
audios.bgm0.pause();
audios.bgm0.currentTime = 0;
audios.voice1.currentTime = 0;
voicef[1] = 1;
money = 0;
stagenum = 1;
itemshopdeadc = 0;
waittimer = 45;

}

// Retry
else if (mouse.x > 849 && mouse.x < 1011 && mouse.y > 449 && mouse.y < 511 || boardcf == 0) {
player.x = 200;
player.y = 320;
playerdeadf = 0;
playerdeadc = 0;
playerlife = 3;
stagealphaf = 0;
crashheartnum = 0;
aqwerh = [1, 1, 0, 0, 0, 0];
qwerf = [1, 0, 0, 0];
qwerc = [0, 0, 0, 0];
timer = 0;
mobcooldownc = 0;
coinoldend = 0;
coinstart = 0;
coinend = 0;
bgmf[0] = 1;
voicef[15] = 1;
money = 0;
stagenum = 1;
itemshopdeadc = 0;
waittimer = 45;

}// Retry

}// if (mouseDown || pressKeyf ) {

}// waittimer < 0

}// if (playerlife < 1) {

}// for m

audios.sound7.pause();
mobcooldownc = timer + mobcooldown;

}// if ( playerdeadc > 0 ){

}// playerdeadf







///////////////////////////////////////////////////////////////
// ステージナンバー表示用
///////////////////////////////////////////////////////////////
if ( stagealphaf == 0 ){
stagealpha -= delta / 60 / 2;

if ( stagealpha < 0 ) stagealphaf = 1 , stagealpha = 1;

}

///////////////////////////////////////////////////////////////
// ポーズ処理(pause on)
///////////////////////////////////////////////////////////////
if ( pausef == 0 && pausekeyf == 1 && mouse.x > 499 && mouse.x < 581 && mouse.y > 9 && mouse.y < 81 && waittimer < 0 && playerdeadf == 0 || pausef == 0 && keys[inputConfig.pause] && waittimer < 0 && playerdeadf == 0 || pausef == 0 && keys["gp_btn_9"] && waittimer < 0 && playerdeadf == 0  ) {

audios["bgm"+lastbgm].pause();

for (let i = 0; i < startbgmvol.length; i++) {
audios["bgm"+i].volume = 0;

}

for(let i = 0; i < startsfxvol.length; i++){
audios["sound"+i].volume = 0;

}

for(let i = 0; i < startvoicevol.length; i++){
audios["voice"+i].volume = 0;

}

waittimer = 45;
pausef = 1;
pausekeyf = 0;
pausetimer = timer;

}

///////////////////////////////////////////////////////////////
// ミュート処理(mute on)
///////////////////////////////////////////////////////////////
if ( mutef == 0 && pausekeyf == 1 && mouse.x > 599 && mouse.x < 681 && mouse.y > 9 && mouse.y < 81 && playerdeadf == 0 || mutef == 0 && keys[inputConfig.mute] && waittimer < 0 && playerdeadf == 0 || mutef == 0 && keys["gp_btn_11"] && waittimer < 0 && playerdeadf == 0  ) {

audios["bgm"+lastbgm].pause();
//bgmf[0] = 0;
for (let i = 0; i < startbgmvol.length; i++) {
audios["bgm"+i].volume = 0;

}

for(let i = 0; i < startsfxvol.length; i++){
audios["sound"+i].volume = 0;

}

for(let i = 0; i < startvoicevol.length; i++){
audios["voice"+i].volume = 0;

}

waittimer = 45;
mutef = 1;
pausekeyf = 0;

}

///////////////////////////////////////////////////////////////
// ミュート解除処理(mute off)
///////////////////////////////////////////////////////////////
else if (mutef == 1 && pausekeyf == 1 && mouse.x > 599 && mouse.x < 681 && mouse.y > 9 && mouse.y < 81 && playerdeadf == 0 || mutef == 1 && keys[inputConfig.mute] && waittimer < 0 && playerdeadf == 0 || mutef == 1 && keys["gp_btn_11"] && waittimer < 0 && playerdeadf == 0 ) {

for (let i = 0; i < startbgmvol.length; i++) {
audios["bgm"+i].volume = startbgmvol[i] * lastvol[0] * lastvol[1];

}

audios["bgm"+lastbgm].play();

for(let i = 0; i < startsfxvol.length; i++){
audios["sound"+i].volume = startsfxvol[i] * lastvol[0] * lastvol[2];

}

for(let i = 0; i < startvoicevol.length; i++){
audios["voice"+i].volume = startvoicevol[i] * lastvol[0] * lastvol[3];

}

waittimer = 45;
mutef = 0;
pausekeyf = 0;

}

///////////////////////////////////////////////////////////////
// Drawからコンフィグへ(config)
///////////////////////////////////////////////////////////////
if ( pausef == 0 && pausekeyf == 1 && mouse.x > 699 && mouse.x < 781 && mouse.y > 9 && mouse.y < 81 && playerdeadf == 0 || pausef == 0 && keys[inputConfig.config] && waittimer < 0 && playerdeadf == 0 || pausef == 0 && keys["gp_btn_10"] && waittimer < 0 && playerdeadf == 0 ) {

audios["bgm"+lastbgm].pause();
audios.bgm0.play();

for(let i = 0; i < startsfxvol.length; i++){
audios["sound"+i].volume = 0;

}

for(let i = 0; i < startvoicevol.length; i++){
audios["voice"+i].volume = 0;

}

waittimer = 15;
pausef = 1;
pausekeyf = 0;
mainroutine = 2;
mouseDown = false;

}


///////////////////////////////////////////////////////////////
// ポーズ解除処理(pause off)
///////////////////////////////////////////////////////////////
if ( pausef == 1 && playerdeadf == 0 && waittimer < 0 ){
//if (keys["Enter"] || keys["Space"] || inputkeys.a) pressKeyf = true;
if (keys["Escape"] || keys["Backspace"] || keys["Delete"] || keys[inputConfig.q] || keys[inputConfig.pause] || keys["gp_btn_5"] ) pressCancelf = true;

if (pausef == 1 && pausekeyf == 1 && mouse.x > 499 && mouse.x < 581 && mouse.y > 9 && mouse.y < 81 || pausef == 1 && pressCancelf || pausef == 1 && keys["gp_btn_9"] ) {
if ( mutef == 0 ) {
for (let i = 0; i < startbgmvol.length; i++) {
audios["bgm"+i].volume = startbgmvol[i] * lastvol[0] * lastvol[1];

}

audios["bgm"+lastbgm].play();

for(let i = 0; i < startsfxvol.length; i++){
audios["sound"+i].volume = startsfxvol[i] * lastvol[0] * lastvol[2];

}

for(let i = 0; i < startvoicevol.length; i++){
audios["voice"+i].volume = startvoicevol[i] * lastvol[0] * lastvol[3];

}

}

pressCancelf = false;
keys = {};
pausef = 0;
pausekeyf = 0;
waittimer = 45;

}// if (pausef == 1 && pausekeyf == 1 && mouse.x > 499 && mouse.x < 581 && mouse.y > 9 && mouse.y < 81 || pausef == 1 && pressCancelf || pausef == 1 && keys["gp_btn_9"] ) {

timer = pausetimer;

}// if ( pausef == 1 && playerdeadf == 0 && waittimer < 0 ){

///////////////////////////////////////////////////////////////
// moneyhの計算用
///////////////////////////////////////////////////////////////
if( money < 100 ) moneyh = "￠: " + money;
if( money > 99 ) moneyh = "＄: " + Math.floor(money / 100) + "." + (money % 100);



///////////////////////////////////////////////////////////////
// デバッグ用
///////////////////////////////////////////////////////////////
if ( debugf == 1 ){
if (keys["Digit1"] || keys["Numpad1"]) timer+= 1, keys["Digit1"] == false, keys["Numpad1"] == false;
if (keys["Digit2"] || keys["Numpad2"]) money+= 1000, keys["Digit2"] == false, keys["Numpad2"] == false;
if (keys["Digit3"] || keys["Numpad3"]) playerlife = 3, keys["Digit3"] == false, keys["Numpad3"] == false;
if (keys["Digit4"] || keys["Numpad4"]) {
if (waittimer < 0 && stagenum < 3 ) stagenum++;
keys["Digit4"] == false, keys["Numpad4"] == false;
waittimer = 45;

}

}

if (keys["Digit5"] || keys["Numpad5"]) {
if (waittimer < 0 ) debugf = ( debugf + 1 ) % 2;
keys["Digit5"] == false, keys["Numpad5"] == false;
waittimer = 45;

}

//pausekeyf = 0;//これつけるとコンフィグが開かない
waittimer--;

}//process
