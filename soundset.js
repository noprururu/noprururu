///////////////////////////////////////////////////////////////////////
// サウンド調整用
///////////////////////////////////////////////////////////////////////

//First Volume 調整用 Master Volume, BGM, SFX, VOICE
const lastvol = [0.6, 0.5, 0.5, 0.7];

//BGM
let startbgmvol = [
 0.6,0.45,0.5,0.6,0.6
];
/* BGM Set List
0.sound/universe.mp3
1.sound/1minute.mp3
2.sound/maou_bgm_neorock67.mp3
3.sound/maou_bgm_neorock72.mp3
4.sound/maou_bgm_neorock68.mp3
*/

let bgmf = [];
for (let i = 0; i < startbgmvol.length; i++) {
bgmf[i] = 0;

}

/* Sound Effect Set List
0.smg.mp3
1.granade1.mp3
2.barrier.mp3
3.ak.mp3
4.bazooka1.mp3
5.bazooka2.mp3
6.bom.mp3//mob2用
7.helicopter.mp3
8.coin.mp3
9.crashglass.mp3
10.mobdead.mp3
11.score.mp3
12.onehanabi.mp3
13.beep.mp3//NG
14.click.mp3//OK
15.grenade2.mp3

0~4
5~9
10~14
*/

// SFX音量用
let startsfxvol = [
0.72,0.26,0.9,0.54,0.84,
0.84,1.0,0.7,0.3,0.3,
0.5,0.6,0.8,0.8,0.6,
0.3];

//再生フラグ用 //1なら再生
let soundf = [
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0];





/*
Voice Data Set List

0.ローディング中です。
1.めいめいひまり　ヴァーサス　サキュバス
2.こんにちは。めいめいひまりです。今日はサキュバスを3人倒したいと思います。
3.開始時2このゲームはマウスとQWERボタンを使います。
4.開始時2このゲームはWASDボタンを使います。
5.開始時2このゲームは十字キーを使います。
6.開始時2このゲームはゲームパッドを使います。
7.コインを集めて上から降りてくるドローンショップで装備をアンロックしてください。それではまいりましょう。
8.Qそれーっ
9.Wそりゃー
10.Eえいっ
11.Rおっりゃああああああああああ
12.かちました。　このままつづけてまいりましょう
13.まいりました
14.これでゲームはしゅうりょうです。　おつかれさまでした。
15.つづけてくれてありがとう。
16.サウンドテスト
17.いらっしゃいませ
18.ありがとうございました

0~4
5~9
10~14
15~18

*/

//VOICE
let startvoicevol = [
0.5,0.8,0.7,0.7,0.7,
0.7,0.7,0.7,0.7,0.7,
0.7,0.7,0.7,0.7,0.7,
0.7,0.7,0.6,0.6];


//VOLUME Flag用
let voicef = [];
for(let i = 0; i < startvoicevol.length; i++) {
if ( i < 2 ) voicef[i] = 1;
else voicef[i] = 0;

}


//VOLUME GUI表示用
const volname = ["Master Volume", "BGM", "Sound Effect", "Voice" ];

//メイン画面ミュートフラグ用
let mutef = 0;

//初回オーディオ設定用
let firstaudiof = 0;

//サウンドリセット用 主にコンフィグから戻る用
let soundresetf = 0;

function firstsoundset(){
if ( firstaudiof == 0 && mainroutine == 1 ) {
for (let i = 0; i < startbgmvol.length; i++) {
audios["bgm"+i].volume = startbgmvol[i] * lastvol[0] * lastvol[1];

}

for(let i = 0; i < startsfxvol.length; i++){
audios["sound"+i].volume = startsfxvol[i] * lastvol[0] * lastvol[2];

}

for(let i = 0; i < startvoicevol.length; i++){
audios["voice"+i].volume = startvoicevol[i] * lastvol[0] * lastvol[3];

}

//bgmf[0] = 1;
firstaudiof = 1;

}

}


//サウンリセット用 主にコンフィグ用
function soundreset() {
if ( soundresetf == 1 ) {
if ( mutef == 0 ){
for (let i = 0; i < startbgmvol.length; i++) {
audios["bgm"+i].volume = startbgmvol[i] * lastvol[0] * lastvol[1];

}

for(let i = 0; i < startsfxvol.length; i++){
audios["sound"+i].volume = startsfxvol[i] * lastvol[0] * lastvol[2];

}

for(let i = 0; i < startvoicevol.length; i++){
audios["voice"+i].volume = startvoicevol[i] * lastvol[0] * lastvol[3];

}

audios["bgm" + lastbgm].play();

}

soundrestf = 0;

}

}



function soundset(){

//Sound SMG AK
if ( mouseDown && mutef == 0 && soundf[0] == 1 && mainroutine == 4 ) {
// 再生中でない時だけ play SMG
if (mainroutine !== 2 && assaultc == 0 ) {
audios.sound0.volume = startsfxvol[0] * lastvol[0] * lastvol[2];
audios.sound0.play();
audios.sound0.loop = true;
audios.sound3.volume = 0;

}

// 再生中でない時だけ play AK
else if (mainroutine !== 2 && assaultc > 0) {
audios.sound3.volume = startsfxvol[3] * lastvol[0] * lastvol[2];
audios.sound3.play();
audios.sound3.loop = true;
audios.sound0.volume = 0;

}

}

//Sound SMG AK Cancel
else if ( mouseDown == false && soundf[0] == 0 ){
audios.sound0.pause();
audios.sound0.volume = 0;
audios.sound0.currentTime = 0;
audios.sound3.pause();
audios.sound3.volume = 0;
audios.sound3.currentTime = 0;

}
//Sound VOICE ローディング中です
if ( mouseDown && mainroutine == 0 && voicef[0] == 1 && mutef == 0 ) {
audios.voice0.volume = startvoicevol[0] * lastvol[0] * lastvol[3];
audios.sound0.currentTime = 0;
audios.voice0.play();
voicef[0] = 0;

}

// ローディング中を止めるコード
if ( mainroutine == 1 ) audios.voice0.pause() , audios.voice0.volume = 0;

//Sound VOICE Title
if ( mainroutine == 1 && voicef[1] == 1 && mutef == 0 ) {
audios.voice1.volume = startvoicevol[1] * lastvol[0] * lastvol[3];
audios.voice1.play();
voicef[1] = 2;

audios.voice1.onended = () => {
bgmf[0] = 1;

}

}

//Sound BGM
if ( voicef[1] !== 1 && pausef == 0 && mutef == 0 && bgmf[0] == 1 ) {
audios.bgm0.volume = startbgmvol[0] * lastvol[0] * lastvol[1];
// 再生中でない時だけ play
//if (audios.bgm0.paused ) {
audios.bgm0.play();
audios.bgm0.loop = true;

//}
bgmf[0] = 2;

}


//1minute.mp3
else if ( bgmf[1] == 1 ) {
audios.bgm0.currentTime = 0;
audios.bgm0.pause();
audios.bgm1.currentTime = 0;
audios.bgm1.play();
bgmf[1] = 2;

}

//2.maou_bgm_neorock67.mp3
else if ( bgmf[2] == 1 ) {
audios.bgm0.currentTime = 0;
audios.bgm0.pause();
audios.bgm2.currentTime = 0;
audios.bgm2.play();
audios.bgm2.loop = true;
bgmf[2] = 2;

}

//3.maou_bgm_neorock72.mp3
else if ( bgmf[3] == 1 ) {
audios.bgm0.currentTime = 0;
audios.bgm0.pause();
audios.bgm3.currentTime = 0;
audios.bgm3.play();
audios.bgm3.loop = true;
bgmf[3] = 2;

}

//4.maou_bgm_neorock68.mp3
else if ( bgmf[4] == 1 ) {
audios.bgm0.currentTime = 0;
audios.bgm0.pause();
audios.bgm4.currentTime = 0;
audios.bgm4.play();
audios.bgm4.loop = true;
bgmf[4] = 2;

}

// Crash glass
if ( soundf[9] == 1 ) {
audios.sound9.currentTime = 0;
audios.sound9.play();
soundf[9] = 2;

}

if ( soundf[9] == 2 && mutef == 0 ){
audios.sound9.onended = () => {
audios.voice13.play();
soundf[9] = 0;

}

}

// Result Sound
if ( soundf[11] == 1 ) {
audios.sound11.currentTime = 0;
audios.sound11.play();
soundf[11] = 2;

}

// One hanabi Sound
else if ( soundf[12] == 1 ) {
audios.sound12.currentTime = 0;
audios.sound12.play();
soundf[12] = 2;

}

// NG Sound
else if ( soundf[13] == 1 ) {
audios.sound13.currentTime = 0;
audios.sound13.play();
soundf[13] = 2;

}

// OK Sound
else if ( soundf[14] == 1 ) {
audios.sound14.currentTime = 0;
audios.sound14.play();
soundf[14] = 2;

}

// Tudukete
else if ( voicef[15] == 1 ) {
audios.voice15.currentTime = 0;
audios.voice15.play();
voicef[15] = 2;

}

/*
// Irasshaimase
else if ( voicef[17] == 1 ) {
audios.voice17.currentTime = 0;
audios.voice17.play();
voicef[17] = 2;

}
*/



}













