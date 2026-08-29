

///////////////////////////////////////////////////////////////////////
// デバッグ用
///////////////////////////////////////////////////////////////////////
debugf = 1;

///////////////////////////////////////////////////////////////////////
// ローディング用
///////////////////////////////////////////////////////////////////////
// メインルーチン 0.ローディング 1.トップ画面 2.設定 3.Special Thanks 4.play 5.エンディング
let mainroutine = 0;

let mylangn = 0;

let inputConfig = {};
let inputPadConfig = [];

let mouse = { x: 0, y: 0 };

///////////////////////////////////////////////////////////////////////
// inputn 入力種類　0.Mouse&Keyboard 1.↑→↓←&ZXCAS 2.WASD&QECX 3.Game Pad
//                  4.Touch Gesteres 5.Game Pad 6.On Keyboard 7.On Keboard & Mouse
///////////////////////////////////////////////////////////////////////
//インプット入力方法
let inputn = 0;
let inputf = 0; //インプット修正フラグ

let jsonf = 0; //JSON初回セーブフラグ

let waitingKey = null;

let configinputntimer = 240;

// Press Any Keyバグ防止用
function getKeyName(code) {
    return code;
}


// Press Any Key Game Pad用
function getPressedGamepadButton() {
    const gamepads = navigator.getGamepads();

    for (const gp of gamepads) {
        if (!gp) continue;

        // ボタン
        for (let i = 0; i < gp.buttons.length; i++) {
            if (gp.buttons[i].pressed) {
                return "gp_btn_" + i;
            }
        }

        // スティック
        if (gp.axes[0] < -0.5) return "gp_left";
        if (gp.axes[0] >  0.5) return "gp_right";
        if (gp.axes[1] < -0.5) return "gp_up";
        if (gp.axes[1] >  0.5) return "gp_down";
    }

    return null;
}


///////////////////////////////////////////////////////////////////////
// 入力 コンフィグ用
///////////////////////////////////////////////////////////////////////

//マウス移動量計測用
let lastmousex = 0;
let lastmousey = 0;
let mousevxy = 0;

// inputnvolumef = 0;
let inputnvolumef = 0;

// press any key waittimer
let pressanykeywaittimer = 240;

// メイン入力フラグ
let pressKeyf = false;
let pressCancelf = false;

//トップUI連続移動防止用
let waittimer = 60;

//コンフィグ連打防止用
let waittoptimer = 15;

// Config press any key n
let configpressanykeyn = 100;

//PC 識別用 PCなら1
let pcf = 1;

//スマホ識別用 スマホなら1 , tapできるlaptopも1
let spf = 0;

//キーボード接続確認用
let keyboardf = 0;

//マウス接続確認用
let mousef = 0;

//Game Pad Smart Phone用
let vibrationf = 0;

//Game Padフラグ用
let gamepadf = 0;

//Game Pad メーカー確認用 0.xbox 1.ps 2.nin
let gamepadn = 0;
let gamepadnf = 0;

//全画面化用
let fulldisplayf = 0;

//画質設定用
let displayqualityf = 2;

//ロースペックモード用 0.ON, 1.OFF
let lowsupecmodef = 1;

//複数ランゲージを開くためにリソース使うコンフィグフラグ用
let langconfigf = 0;

//トップページキーボード移動入力用
let topinputn = 0;

//コンフィグ行く際のルーチントラブルにならない為用
let lastroutine = 0;

//リザルト用
let resultgold = 0;
let resultmonsters = 0;
let resultdamage = 0;
let resultmobid = 0;


//リザルト用の絵用
let mobresultx = [
    8, 8, 8, 8, 8,
    8, 8, 8, -36, 2,
    0
];
let mobresulty = [
    -28, -28, -28, -32, -28,
    -32, -30, -28, -60, -50,
    0
];

//音量ポーズ再生用
let lastbgm = 0;

////////////////////////////////////////////////////////////
// 言語設定変更用
////////////////////////////////////////////////////////////
const notos = [
"Noto Naskh Arabic", "Noto Sans", "Noto Sans Bengali", "Noto Sans SC", "Noto Sans TC",
"Noto Sans", "Noto Sans", "Noto Sans", "Noto Sans Gujarati", "Noto Sans Devanagari",
"Noto Sans", "Noto Sans", "Noto Sans JP", "Noto Sans Javanese", "Noto Sans Kannada",
"Noto Sans KR", "Noto Sans", "Noto Sans Malayalam", "Noto Sans Devanagari", "Noto Sans Myanmar",
"Noto Sans Oriya", "Noto Naskh Arabic", "Noto Sans", "Noto Sans", "Noto Sans Gurmukhi",
"Noto Sans", "Noto Sans", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai",
"Noto Sans", "Noto Sans", "Noto Nastaliq Urdu", "Noto Sans"];

const langs = [
"ar","az","bn","zh","zh",
"en","fr","de","gu","hi",
"id","it","ja","jv","kn",
"ko","ms","ml","mr","my",
"or","fa","pl","pt","pa",
"ru","es","ta","te","th",
"tr","uk","ur","vi"];

const langsnames = ["Arabic","Azerbaijani","Bengali","Chinese (簡体字)","Chinese (繁体字)",
"English","French","German","Gujarati","Hindi",
"Indonesian","Italian","Japanese","Javanese","Kannada",
"Korean","Malay","Malayalam","Marathi","Myanmar",
"Odia","Persian (Farsi)","Polish","Portuguese","Punjabi",
"Russian","Spanish","Tamil","Telugu","Thai",
"Turkish","Ukrainian","Urdu","Vietnamese"];

const leftrightf = [
1,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0,
0,1,0,0,0,
0,0,0,0,0,
0,0,1,0
];

const mobtalkcontentsnum = [8,6,8,5,5,3,5,4,4,5,3];



///////////////////////////////////////////////////////////////////////
// ステージ用
///////////////////////////////////////////////////////////////////////
let stagenum = 1;
let stagealphaf = 0;
let stagealpha = 1;

let mobcooldown = 1;//最後は0.5とかでいいかも
let mobcooldownc = 0;

///////////////////////////////////////////////////////////////////////
// ライフ　アンド　死亡用
///////////////////////////////////////////////////////////////////////
let playerdeadf = 0;
let playerdeadc = 0;
let playerlife = 3;
let crashheartnum = 0;


///////////////////////////////////////////////////////////////////////
// 背景
///////////////////////////////////////////////////////////////////////
// マップ表示番号
let mapn = 0;
// マップグラフィッククオリティー追加番号
let mapgq = 0;
// マップ内スクロール位置
let mapx = 0;
let mapy = 0;

///////////////////////////////////////////////////////////////////////
// 雲
///////////////////////////////////////////////////////////////////////
// 雲表示番号
let cloudf = 0;
let cloudn = [];
let cloudx = [];
let cloudy = [];

for(let i = 0; i < 2; i++){
cloudn[i] = i * 3;
cloudx[i] = i * 1200;
cloudy[i] = Math.floor( Math.random() * 100 ) + 100;

}




///////////////////////////////////////////////////////////////////////
// スキル使用用
///////////////////////////////////////////////////////////////////////
//スキル使用でキャラクターのアニメーションを切り変える
let weaponn = 0;
const weaponn2 = [0, 0, 0, 6, 18];

let grenadef = 0;
let grenadec = 0;
let grenadex = 0;
let grenadey = 0;
let grenadehanabif = 0;
let grenadehanabix = 0;
let grenadehanabiy = 0;
let grenadehanabic = 0;

let barrierf = 0;
let barrierc = 0;

let assaultc = 0;
//アサルトになったら1
let assaultf = 0;
let assaultdamage = 0;

let bazookaf = 0;
let bazookac = 0;
let bazookax = 0;
let bazookay = 0;
let bazookahanabif = 0;
let bazookahanabix = 0;
let bazookahanabiy = 0;
let bazokahanabic = 0;

///////////////////////////////////////////////////////////////////////
// Smart Phone用
///////////////////////////////////////////////////////////////////////
//Toutch Gestures Ball用
let ballrad = 0;
let ballkyori = 0;
let balltimer = 0;
let balln = 0;

//Toutch Gestures 左下調整用
let tgunderleftx = 20;
let tgunderlefty = 60;
let spkyori = 0;
let spkyori2 = 0;

//Toutch Gestures 右下調整用
let weaponf = [0, 0, 0, 0, 0];
let cdlockf = [0, 0, 0, 0, 0];
let cdmax = [0, 10, 28, 20, 60];
let cds = [0, 0, 0, 0, 0];
let touchgesturesrightx = [1108, 860, 886, 985, 1120];
let touchgesturesrighty = [558, 600, 470, 375, 345];
let touchgesturesrightsize = [100, 48, 48, 48, 48];
let touchgesturesrightcolor = ["#6A4269", "#723B5C", "#875874", "#666666", "#7D7D7D"];
let touchgesturesname = ["Grenade", "Barrier", "AK AR", "Bazooka"];

///////////////////////////////////////////////////////////////////////
// ポーズ用
///////////////////////////////////////////////////////////////////////
let pausef = 0;
let pausekeyf = 0;
let pausetimer = 0;

///////////////////////////////////////////////////////////////////////
// 死亡演出　blue hanabi用
///////////////////////////////////////////////////////////////////////
let bluehanabix = 0;
let bluehanabiy = 0;


///////////////////////////////////////////////////////////////////////
// タイトル透過用
///////////////////////////////////////////////////////////////////////
let minititlealpha = 1;

///////////////////////////////////////////////////////////////////////
// 背景
///////////////////////////////////////////////////////////////////////
let bgX = 0;


///////////////////////////////////////////////////////////////////////
// スキル用 アイテムショップ用
///////////////////////////////////////////////////////////////////////
//武器レベル
let aqwerh = [1, 1, 0, 0, 0, 0];
const aqwerhstar = ["*", "**", "***", "****", "*****"];
const aqwerhshopname1 = ["Damage : ", "Damage : ", "Time : ", "Damage : ", "Damage : ", "Life : "];
const aqwerhshopname2 = ["Range : ", "CD : ", "CD : ", "CD : ", "CD : ", ""];
const aqwerhname = ["Sub Machine Gun", "Grenade", "Barrier", "AK AR", "Bazooka", "Heart"];
const aqwerhdamage = [
    10, 20, 30, 40, 50,
    50, 70, 90, 110, 130,
    2, 2.2, 2.4, 2.6, 2.8,
    50, 70, 90, 110, 130,
    200, 300, 400, 500, 600,
    1, 2, 3, 4, 5];

const aqwerhcdnum = [
    1, 2, "MAX", "MAX", "MAX",
    10, 9.5, 9.0, 8.5, 8.0,
    28, 26, 24, 22, 20,
    20, 19, 17, 16, 15,
    60, 55, 50, 45, 40,
    0, 0, 0, 0, 0];

let aqwerhhmoneynum = 0;

const aqwerhmoney1 = [
    0, "Buy ￠ : 50", "Buy ＄ : 1.0", "Buy ＄ : 2.0", "Buy ＄ : 4.0",
    "Buy ￠ : 30", "￠ : 80", "Buy ＄ : 1.30", "Buy ＄ : 1.8", "Buy ＄ : 2.3",
    "Buy ＄ : 1.0", "Buy ＄ : 2.0", "Buy ＄ : 3.0", "Buy ＄ : 4.0", "Buy ＄ : 5.0",
    "Buy ＄ : 1.5", "Buy ＄ : 2.5", "Buy ＄ : 3.5", "Buy ＄ : 4.5", "Buy ＄ : 5.5",
    "Buy ＄ : 2.0", "Buy ＄ : 3.0", "Buy ＄ : 4.0", "Buy ＄ : 5.0", "Buy ＄ : 6.0",
    "Buy ￠ : 50", "Buy ＄ : 1.5", "Buy ＄ : 4.5", "Buy ＄ : 9.0", "Buy ＄ : 18.0"];

const aqwerhmoney2 = [
    0, 50, 100, 200, 400,
    30, 80, 130, 180, 230,
    100, 200, 300, 400, 500,
    150, 250, 350, 450, 550,
    200, 300, 400, 500, 600,
    50, 150, 450, 900, 1800];

let itemshoprad = 0;
let itemshopx = 240;
let itemshopy = -192;
let itemshopy2 = -192;
let itemshopf = 0;
let itemshopc = 0;
//死んだ時にアイテムショップの最初が早めになる
let itemshopdeadc = 0;

///////////////////////////////////////////////////////////////////////
// QWER 入力CD用
///////////////////////////////////////////////////////////////////////
//QWER入力CD用
let qwerinput = [0, 0, 0, 0];
let qwerf = [1, 0, 0, 0]; //0.Lock 1.Wait to Use 2.CD
let qwerc = [0, 0, 0, 0];
let qwer8 = [0, 0, 0, 0];
let qwer128 = [0, 0, 0, 0];
let qwer8xy = [0, -48, 48, -48, 48, 0, 48, 48,
    0, 48, -48, 48, -48, 0, -48, -48, 0, -48];
let qwer8vxy = [48, 0, 0, 48, 0, 48, -48, 0, -48, 0, 0, -48, 0, -48, 48, 0, 48, 0];
let qwercd = [10, 28, 20, 60];
let qwername1 = ["Q", "W", "E", "R"];
let qwername2 = ["Grenade", "Barrier", "AK AR", "Bazooka"];
let qwerstarname = ["*", "*", "*", "*"];
let qwercdraw = [0, 0, 0, 0];

//Draw 下部ネーム変更用
let qwername3 = [];
//初回読込用　ネームフラグ
let firstqwername3f = 0;

///////////////////////////////////////////////////////////////////////
// プレイヤー
///////////////////////////////////////////////////////////////////////
const player = {
    hp: 10000,
    x: 200,
    y: 360,
    speed: 5

};


///////////////////////////////////////////////////////////////
// コイン生成処理
///////////////////////////////////////////////////////////////
//デバッグ用 money 初期値0
//66.20ハートなしで総額お買い物
let money = 0;
let moneyh = 0;

const coin = [];
let coinvol = 0;
let coinend = 0;
let coinoldend = 0;
let coinstart = 0;

for(let i = coinstart; i < coinend; i++){
coin[i] = {};
coin[i].x = 400;
coin[i].y = 400;
coin[i].vx = 5;
coin[i].vy = 0;
coin[i].speed = 5;
coin[i].num = 0;	//20セントか10セントか1セントか アニメーション用
coin[i].cent = 0;    //20セントか10セントか1セントか
coin[i].f = 1;	//入手されたか
coin[i].r = 180;	//散る方向
coin[i].c = 0;


}

////////////////////////////////////////////////////////////
// ちょうちょ自動コイン集め用
////////////////////////////////////////////////////////////
//プレレンダリング1
let chouchor = 0;
let chouchox = -80;
let chouchoy = -80;
let chouchoc = 0;
let chouchof = 0;
let chouchoimgn = 0;

function chouchofunc(){
//ちょうちょ初期値読込
if ( chouchof == 1 ){
chouchox = -80 + Math.floor( Math.random() * 2 ) * 80;
if ( chouchox > -80 ) chouchoy = -80;
else chouchoy = -80 + Math.floor( Math.random() * 4 ) * 55;
chouchor = 20 + Math.random () * 50;
chouchoimgn = Math.floor( chouchor / 90 ) * 2;
chouchof = 2;
chouchoc = timer;

}

if ( pausef == 0){

//ちょうちょ移動中
if ( chouchof == 2 ){
chouchox += Math.cos( Math.PI / 180 * chouchor ) * 2;
chouchoy += Math.sin( Math.PI / 180 * chouchor ) * 2;

if ( chouchox > 320 ) chouchor = 110 + Math.random() * 140, chouchoimgn = Math.floor( chouchor / 90 ) * 2;
else if ( chouchox < 0) chouchor = 20 + Math.random() * 50, chouchoimgn = Math.floor( chouchor / 90 ) * 2;
else if ( chouchoy < 0 ) chouchor = 20 + Math.random() * 50, chouchoimgn = Math.floor( chouchor / 90 ) * 2;
else if ( chouchoy > 640 ) chouchor = 200 + Math.random() * 160, chouchoimgn = Math.floor( chouchor / 90 ) * 2;

if ( timer - 10 > chouchoc ) chouchof = 3;

//ちょうちょをキャッチしたら
if ( player.x - 100 < chouchox && player.x + 100 > chouchox && player.y - 100 < chouchoy && player.y + 100 > chouchoy ){
chouchof = 4;
chouchoc = timer;
bgmf[1] = 1;
lastbgm = 1;

}

}

//ちょうちょ帰宅
if ( chouchof == 3 ){
chouchor = 180;
chouchox -= 2;
chouchoimgn = Math.floor( chouchor / 90 ) * 2;
//ちょうちょをキャッチしたら
if ( player.x - 100 < chouchox && player.x + 100 > chouchox && player.y - 100 < chouchoy && player.y + 100 > chouchoy ){
chouchof = 4;
chouchoc = timer;
bgmf[1] = 1;
lastbgm = 1;

}

//ちょうちょ帰宅リセット
if ( chouchox < -80 ) chouchof = 0;

}

//コイン集めタイム
if ( chouchof == 4 ){
if ( timer - 29 > chouchoc ) chouchof = 0, bgmf[0] = 1, audios.bgm1.pause(), lastbgm = 0;

}

}// pausef

}// chouchofunc()

////////////////////////////////////////////////////////////
// 吹き出しコメント一行用
////////////////////////////////////////////////////////////

//モブ吹き出しコメント用
let mobtalkmax = [
    8, 6, 8, 5, 5,
    3, 5, 4, 4, 5,
    3
];

//モブ吹き出しコメント用
let mobtalkn = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0
];

for (let i = 1; i < 8; i++) {
    mobtalkn[i] = Math.floor( Math.random() * mobtalkmax[i] );

}





/*
let mobcommentlines = [
    "こんにちは。",
    "一行ずつ表示する",
    "サンプルです。"
];

let mobvisibleLines = 0;
let mobframe = 0;
let mobmaxLength = Math.max(...mobcommentlines.map(mobline => mobline.length));
*/

///////////////////////////////////////////////////////////////
// モンスターメインデータ
///////////////////////////////////////////////////////////////
let mobsmax = 5;

const mobs = [];
for(let i = 0; i < mobsmax; i++){
    mobs.push({
        angle: 0,
        random:0,
        x: 1120 + Math.random() * 50,
        y: -500,
        hp: 20,
        //r: Math.random() * 360,
        r: 180,
        speed: 2,
	    yspeed:2,
        img:0,
        damageTimer: 10,
        langnum: mylangn,
        coinx: 0,
        coiny: 0,
        c: 0,
        mob1bomf: 0,
        mob1bomc: 0,
        mob2c: 0,
        cd: 0,//攻撃CD
        firstcd: 3.1,
        attacktime: 4,
        //type: 0,//攻撃タイプ
        mob6point: 1,
        bossanimec: 0,
        routine: 0,
        mobcommentlines :[
            "こんにちは。",
            "一行ずつ表示する",
            "サンプルです。"
        ],
        mobvisibleLines: 0,
        mobframe: 0,
        mobmaxLength: 0,
        mobcommentlines: [],
        mobtalkn: 0,
        mobtalkc: 0,
        movef: 0 //boss用

    });

}




//モブ画像ナンバー用
let mobimgn = [
0, 12, 24, 36, 48,
60, 72, 84, 96, 118,
140
];

//モブ最大HP用
let mobmaxhp = [
20, 20, 50, 80, 110,
140, 170, 200, 1200, 1500,
2000

];

let bossattacktype = 0;
let boss10attackf = 0;
let bossattacktypen = [2, 2, 3];
let bossidplus = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 1,
    2];

let tama = [];

let angle = -180;

//発射の間隔
let mobscooldown = [
16, 1000, 12, 0.7, 0.7,
0.7, 3, 0.6, 0.6, 0.7,
0.7];

let mobsway = [//発射数
1, 1, 2, 1, 3,
1, 1, 1, 1, 3,//5, 6, 7, 8-0, 8-1,
1, 6, 1, 1, 1//9-0, 9-1, 10-1, 10-2, 10-3
];

//攻撃し続ける時間
let mobattacktime = [
4, 3, 3, 3, 3,
3, 2.5, 4, 4, 4,
2
];

let mobaddcd = [
3, 1, 1, 1, 1,
1, 3, 2, 0, 0.5,
0,
];


let mob6x1 = [];
let mob6y1 = [];
let mob6x2 = [];
let mob6y2 = [];
let mob6x3 = [];
let mob6y3 = [];
let mob6x4 = [];
let mob6y4 = [];

let mob8arcf = 0;

// 最初の敵はしゃべる
let firstmobf = 0;
// 10秒に1回難易度を上げる
let mobroutinef = 0;
let mobrandom = 0;

// モンスターナンバー決め
let mobid = 0;

// 180秒になったらボスが出るフラグ
let bossf = 0;


///////////////////////////////////////////////////////////////////////
// モンスター
///////////////////////////////////////////////////////////////////////
//画像との差分XY調整用
let mobsabunx = [];
let mobsabuny = [];
for(let i = 0; i < 16; i++){
mobsabunx[i] = 200;
mobsabuny[i] = 100;

}


//モンスター台詞上　下用
const mobcommentx1 = [];
const mobcommentx2 = [];
const mobcommenty1 = [];
const mobcommenty2 = [];

//モンスター台詞仮当て用
for(let i = 0; i < 11; i++){
mobcommentx1[i] = 200 - 20;
mobcommenty1[i] = 180;
mobcommentx2[i] = 200 - 20;
mobcommenty2[i] = 220;

}

mobcommentx1[0] = 180;
mobcommenty1[0] = 170;
mobcommentx2[0] = 180;
mobcommenty2[0] = 210;
mobcommentx1[1] = 185;
mobcommenty1[1] = 160;
mobcommentx2[1] = 185;
mobcommenty2[1] = 220;
mobcommentx1[2] = 170;
mobcommenty1[2] = 150;
mobcommentx2[2] = 170;
mobcommenty2[2] = 200;
mobcommentx1[3] = 185;
mobcommenty1[3] = 150;
mobcommentx2[3] = 185;
mobcommenty2[3] = 210;
mobcommentx1[4] = 160;
mobcommenty1[4] = 155;
mobcommentx2[4] = 160;
mobcommenty2[4] = 195;
mobcommentx1[5] = 190;
mobcommenty1[5] = 145;
mobcommentx2[5] = 190;
mobcommenty2[5] = 200;
mobcommentx1[6] = 188;
mobcommenty1[6] = 160;
mobcommentx2[6] = 188;
mobcommenty2[6] = 210;
mobcommentx1[7] = 150;
mobcommenty1[7] = 150;
mobcommentx2[7] = 150;
mobcommenty2[7] = 200;
mobcommentx1[8] = 195;
mobcommenty1[8] = 150;
mobcommentx2[8] = 195;
mobcommenty2[8] = 210;
mobcommentx1[9] = 165;
mobcommenty1[9] = 145;
mobcommentx2[9] = 165;
mobcommenty2[9] = 200;
mobcommentx1[10] = 172;
mobcommenty1[10] = 145;
mobcommentx2[10] = 172;
mobcommenty2[10] = 200;





//口の当たり判定仮当て用
const mobkutix1 = [];
const mobkutiy1 = [];

for(let i = 0; i < 11; i++){
mobkutix1[i] = 190 - 20;
mobkutiy1[i] = 180;

}

//口の当たり判定詳細
mobkutix1[0] = 170;
mobkutiy1[0] = 200;
mobkutix1[1] = 195;
mobkutiy1[1] = 195;
mobkutix1[2] = 170;
mobkutiy1[2] = 192;
mobkutix1[3] = 198;
mobkutiy1[3] = 240;
mobkutix1[4] = 160;
mobkutiy1[4] = 184;
mobkutix1[5] = 187;
mobkutiy1[5] = 192;
mobkutix1[6] = 160;
mobkutiy1[6] = 210;
mobkutix1[7] = 150;
mobkutiy1[7] = 190;
mobkutix1[8] = 118;
mobkutiy1[8] = 146;
mobkutix1[9] = 90;
mobkutiy1[9] = 156;
mobkutix1[10] = 77;
mobkutiy1[10] = 22;
mobkutix1[11] = 204;
mobkutiy1[11] = 210;

//コインドロップ用
const mobcoinx = [];
const mobcoiny = [];
for(let i = 0; i < 11; i++){
mobcoinx[i] = 195;
mobcoiny[i] = 195;

}

mobcoinx[0] = 185;
mobcoiny[0] = 205;
mobcoinx[1] = 195;
mobcoiny[1] = 195;
mobcoinx[2] = 180;
mobcoiny[2] = 195;
mobcoinx[3] = 200;
mobcoiny[3] = 195;
mobcoinx[4] = 180;
mobcoiny[4] = 195;
mobcoinx[5] = 195;
mobcoiny[5] = 195;
mobcoinx[6] = 190;
mobcoiny[6] = 195;
mobcoinx[7] = 185;
mobcoiny[7] = 195;
mobcoinx[8] = 225;
mobcoiny[8] = 215;
mobcoinx[9] = 185;
mobcoiny[9] = 200;
mobcoinx[10] = 190;
mobcoiny[10] = 200;


//当たり判定用
const mobhitx1 = [];
const mobhitx2 = [];
const mobhitx3 = [];
const mobhitx4 = [];
const mobhity1 = [];
const mobhity2 = [];
const mobhity3 = [];
const mobhity4 = [];


//当たり判定仮当て用
for(let i = 0; i < 11; i++){
mobhitx1[i] = 170;
mobhitx2[i] = 190;
mobhitx3[i] = 230;
mobhitx4[i] = 210;

mobhity1[i] = 180;
mobhity2[i] = 180;
mobhity3[i] = 240;
mobhity4[i] = 240;

}

mobhitx1[0] = 170;
mobhitx2[0] = 190;
mobhitx3[0] = 230;
mobhitx4[0] = 210;
mobhity1[0] = 180;
mobhity2[0] = 180;
mobhity3[0] = 240;
mobhity4[0] = 240;

mobhitx1[1] = 175;
mobhitx2[1] = 225;
mobhitx3[1] = 225;
mobhitx4[1] = 175;
mobhity1[1] = 170;
mobhity2[1] = 170;
mobhity3[1] = 220;
mobhity4[1] = 220;

mobhitx1[2] = 160;
mobhitx2[2] = 190;
mobhitx3[2] = 220;
mobhitx4[2] = 190;
mobhity1[2] = 165;
mobhity2[2] = 165;
mobhity3[2] = 235;
mobhity4[2] = 235;

mobhitx1[3] = 170;
mobhitx2[3] = 200;
mobhitx3[3] = 240;
mobhitx4[3] = 210;
mobhity1[3] = 170;
mobhity2[3] = 170;
mobhity3[3] = 230;
mobhity4[3] = 230;

mobhitx1[4] = 160;
mobhitx2[4] = 190;
mobhitx3[4] = 225;
mobhitx4[4] = 195;
mobhity1[4] = 160;
mobhity2[4] = 160;
mobhity3[4] = 220;
mobhity4[4] = 220;

mobhitx1[5] = 170;
mobhitx2[5] = 220;
mobhitx3[5] = 240;
mobhitx4[5] = 190;
mobhity1[5] = 155;
mobhity2[5] = 155;
mobhity3[5] = 245;
mobhity4[5] = 245;


mobhitx1[6] = 155;
mobhitx2[6] = 245;
mobhitx3[6] = 220;
mobhitx4[6] = 175;
mobhity1[6] = 155;
mobhity2[6] = 155;
mobhity3[6] = 240;
mobhity4[6] = 240;

mobhitx1[7] = 150;
mobhitx2[7] = 200;
mobhitx3[7] = 230;
mobhitx4[7] = 200;
mobhity1[7] = 165;
mobhity2[7] = 165;
mobhity3[7] = 240;
mobhity4[7] = 240;

mobhitx1[8] = 180;
mobhitx2[8] = 200;
mobhitx3[8] = 350;
mobhitx4[8] = 330;
mobhity1[8] = 170;
mobhity2[8] = 170;
mobhity3[8] = 310;
mobhity4[8] = 310;

mobhitx1[9] = 145;
mobhitx2[9] = 165;
mobhitx3[9] = 310;
mobhitx4[9] = 290;
mobhity1[9] = 165;
mobhity2[9] = 165;
mobhity3[9] = 285;
mobhity4[9] = 285;

mobhitx1[10] = 150;
mobhitx2[10] = 170;
mobhitx3[10] = 340;
mobhitx4[10] = 320;
mobhity1[10] = 170;
mobhity2[10] = 170;
mobhity3[10] = 270;
mobhity4[10] = 270;





///////////////////////////////////////////////////////////////////////
// mob1の爆発
///////////////////////////////////////////////////////////////////////
let mob1particles = [];
function mob1createExplosion(x,y){
    for(let i = 0;i < 40;i++){
        mob1particles.push({
            x,
            y,
            vx:(Math.random()-0.5)*8,
            vy:(Math.random()-0.5)*8,
            size:Math.random()*4+10,
            brightness:255
        });

    }

}

///////////////////////////////////////////////////////////////////////
// 線と線の当たり判定
///////////////////////////////////////////////////////////////////////
/*
function lineHit(x1, y1, x2, y2, x3, y3, x4, y4) {

    const a =
    ((x4 - x3) * (y1 - y3) -
    (y4 - y3) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) -
    (x4 - x3) * (y2 - y1));

    const b =
    ((x2 - x1) * (y1 - y3) -
    (y2 - y1) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) -
    (x4 - x3) * (y2 - y1));

    return a >= 0 && a <= 1 && b >= 0 && b <= 1;

}
*/
function lineHit(x1, y1, x2, y2, x3, y3, x4, y4) {
    const den = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

    // 平行（またはほぼ平行）の場合
    if (Math.abs(den) < 1e-8) {
        // 両方水平
        if (Math.abs(y2 - y1) < 1e-8 && Math.abs(y4 - y3) < 1e-8) {
            if (Math.abs(y1 - y3) > 1e-8) return false; // yが違う
            // x範囲が重なっているか
            const minA = Math.min(x1, x2), maxA = Math.max(x1, x2);
            const minB = Math.min(x3, x4), maxB = Math.max(x3, x4);
            return maxA >= minB && maxB >= minA;
        }
        // 両方垂直（今回は不要だが一応）
        if (Math.abs(x2 - x1) < 1e-8 && Math.abs(x4 - x3) < 1e-8) {
            if (Math.abs(x1 - x3) > 1e-8) return false;
            const minA = Math.min(y1, y2), maxA = Math.max(y1, y2);
            const minB = Math.min(y3, y4), maxB = Math.max(y3, y4);
            return maxA >= minB && maxB >= minA;
        }
        return false; // その他の平行
    }

    const a = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / den;
    const b = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den;

    return a >= 0 && a <= 1 && b >= 0 && b <= 1;
}

///////////////////////////////////////////////////////////////
// pointInParallelogram関数の定義
///////////////////////////////////////////////////////////////
/*
// 点 (px, py) が平行四辺形 p[0..3] の内部にあるか
function pointInParallelogram(px, py, p) {
  // p[0], p[1], p[2], p[3] が順番に並んでいる前提
  const v0 = {x: p[1].x - p[0].x, y: p[1].y - p[0].y};
  const v1 = {x: p[3].x - p[0].x, y: p[3].y - p[0].y};
  const v  = {x: px - p[0].x, y: py - p[0].y};

  const det = v0.x * v1.y - v0.y * v1.x;
  if (Math.abs(det) < 1e-8) return false; // 退化

  const a = (v.x * v1.y - v.y * v1.x) / det;
  const b = (v0.x * v.y - v0.y * v.x) / det;

  return a >= 0 && a <= 1 && b >= 0 && b <= 1;
}
*/

function pointInParallelogram(px, py, p) {
  // p[0],p[1],p[2],p[3] が順番に並んでいる前提
  const ax = p[1].x - p[0].x, ay = p[1].y - p[0].y;
  const bx = p[3].x - p[0].x, by = p[3].y - p[0].y;
  const cx = px - p[0].x, cy = py - p[0].y;

  const den = ax * by - ay * bx;
  if (Math.abs(den) < 1e-8) return false;

  const u = (cx * by - cy * bx) / den;
  const v = (ax * cy - ay * cx) / den;

  return u >= 0 && u <= 1 && v >= 0 && v <= 1;
}


///////////////////////////////////////////////////////////////
// circleVsParallelogram関数の定義
///////////////////////////////////////////////////////////////
function circleVsParallelogram(cx, cy, r, px, py, vx, vy, wx, wy) {
    const relX = cx - px;
    const relY = cy - py;
    const det = vx * wy - vy * wx;
    if (Math.abs(det) < 0.0001) return false;

    const u = (relX * wy - relY * wx) / det;
    const v = (vx * relY - vy * relX) / det;

    const closestU = Math.max(0, Math.min(1, u));
    const closestV = Math.max(0, Math.min(1, v));

    const closestX = px + closestU * vx + closestV * wx;
    const closestY = py + closestU * vy + closestV * wy;

    const distX = cx - closestX;
    const distY = cy - closestY;
    
    return (distX * distX + distY * distY) <= r * r;
}




///////////////////////////////////////////////////////////////////////
// 平行四辺形当たり判定（SAT）
///////////////////////////////////////////////////////////////////////
function projectPolygon(axis, points){

    let min = axis.x * points[0].x + axis.y * points[0].y;
    let max = min;

    for(let i = 1; i < points.length; i++){

        const p = axis.x * points[i].x + axis.y * points[i].y;

        if(p < min) min = p;
        if(p > max) max = p;
    }

    return { min, max };
}

function normalize(v){

    const len = Math.hypot(v.x, v.y);

    return {
        x: v.x / len,
        y: v.y / len
    };
}

function polygonsCollide(polyA, polyB){

    const polygons = [polyA, polyB];

    for(let p = 0; p < polygons.length; p++){

        const polygon = polygons[p];

        for(let i = 0; i < polygon.length; i++){

            const next = (i + 1) % polygon.length;

            const edge = {
                x: polygon[next].x - polygon[i].x,
                y: polygon[next].y - polygon[i].y
            };

            const axis = normalize({
                x: -edge.y,
                y: edge.x
            });

            const projA = projectPolygon(axis, polyA);
            const projB = projectPolygon(axis, polyB);

            if(projA.max < projB.min || projB.max < projA.min){
                return false;
            }
        }
    }

    return true;
}
///////////////////////////////////////////////////////////////////////
//SATここまで
///////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////
// SmartPhone スマホ入力処理用
///////////////////////////////////////////////////////////////
function spfunc() {
if ( inputn == 4 ){
///////////////////////////////////////////////////////////////////////
// Touch Gestures 左下用
///////////////////////////////////////////////////////////////////////
const dx = mouse.x - 175 - tgunderleftx;
const dy = mouse.y - 545 + tgunderlefty;
spkyori = Math.sqrt(dx * dx + dy * dy);
if ( spkyori > 175 && spkyori < 200) spkyori = 175;
if ( balltimer > 0 && spkyori > 175) spkyori = 175;
if ( spkyori > 30 && spkyori < 175) balltimer = 30;
ballrad = Math.atan2(mouse.y - 545 + tgunderlefty, mouse.x - 175 - tgunderleftx ) * 180 / Math.PI;//y,xなのをきをつけて//y,xなのをきをつけて
if (ballrad < 45) ballrad += 360;
balln = Math.floor(c / 16) % 4;
if (balltimer > 0) {
player.x += Math.cos(Math.PI / 180 * ballrad) * 4;
player.y += Math.sin(Math.PI / 180 * ballrad) * 4;

}



///////////////////////////////////////////////////////////////////////
// Touch Gestures 入力用
///////////////////////////////////////////////////////////////////////
for (let i = 0; i < 5; i++) {
const dx = touchgesturesrightx[i] - mouse.x;
const dy = touchgesturesrighty[i] - mouse.y;
spkyori2 = Math.sqrt(dx * dx + dy * dy);
if (spkyori2 < touchgesturesrightsize[i] ) {
if ( i == 0 ) pressKeyf = true;
else qwerinput[i-1] = 1;

}

else if (i == 0 && spkyori2 > touchgesturesrightsize[i]) pressKeyf = false;


}

balltimer--;

}

};


///////////////////////////////////////////////////////////////////////
// Touch Gestures 描画用
///////////////////////////////////////////////////////////////////////
function spdfunc() {
if ( inputn == 4 ){
if (balltimer > 0) {
ctx.drawImage( images["ball" + balln], 175 + tgunderleftx + Math.cos(Math.PI / 180 * ballrad) * spkyori - 100,
545 - tgunderlefty + Math.sin(Math.PI / 180 * ballrad) * spkyori - 100);

}

if (balltimer < 1) {
balln = 0;
ctx.drawImage( images["ball" + balln], 75 + tgunderleftx, 440 - tgunderlefty);

}


///////////////////////////////////////////////////////////////////////
// Touch Gestures 右下用
///////////////////////////////////////////////////////////////////////
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.lineWidth = 4;
for (let i = 0; i < 5; i++) {
 //A Q W E R
ctx.beginPath();
ctx.arc(touchgesturesrightx[i], touchgesturesrighty[i], touchgesturesrightsize[i], 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();

// A暗い紫
if ( i == 0 && pressKeyf == false ) {
ctx.globalAlpha = 0.5;
ctx.fillStyle = touchgesturesrightcolor[0];
ctx.fill();
ctx.globalAlpha = 1;

ctx.font = "bold 26px Noto Sans JP";
ctx.fillStyle = "#EDEFF2";
if ( assaultc > 0 ) {
ctx.fillText("Assault", touchgesturesrightx[i], touchgesturesrighty[i] - 15);
ctx.fillText("Rifle", touchgesturesrightx[i], touchgesturesrighty[i] + 15);
if (bazookaf > 2 ) weaponn = 6;

}

else {
ctx.fillText("Sub", touchgesturesrightx[i], touchgesturesrighty[i] - 15);
ctx.fillText("Machine Gun", touchgesturesrightx[i], touchgesturesrighty[i] + 15);
}

}

// A灰色
else if (i == 0 && pressKeyf == true ) {
ctx.globalAlpha = 0.1;
ctx.strokeStyle = touchgesturesrightcolor[3];
ctx.stroke();
ctx.globalAlpha = 1;
ctx.font = "bold 26px Noto Sans JP";
ctx.fillStyle = "#EDEFF2";
if ( assaultc > 0) {
ctx.fillText("Assault", touchgesturesrightx[i], touchgesturesrighty[i] - 15);
ctx.fillText("Rifle", touchgesturesrightx[i], touchgesturesrighty[i] + 15);

}

else {
ctx.fillText("Sub", touchgesturesrightx[i], touchgesturesrighty[i] - 15);
ctx.fillText("Machine Gun", touchgesturesrightx[i], touchgesturesrighty[i] + 15);

}

}

else if ( i > 0 ) {

//qwerf 0.Lock 1.Wait to Use 2.CD
// SmartPhone 右下の内側
 //A Q W E R
ctx.beginPath();
ctx.arc(touchgesturesrightx[i], touchgesturesrighty[i], touchgesturesrightsize[i], 0, Math.PI * 2, false);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
if (qwerc[i-1] > 0 || qwerf[i-1] == 2 || qwerf[i-1] == 0 ) ctx.globalAlpha = 0.05, ctx.fillStyle = touchgesturesrightcolor[3];
else if( qwerc[i-1] == 0 ) ctx.globalAlpha = 0.5, ctx.fillStyle = touchgesturesrightcolor[1];
ctx.fill();

// SmartPhone 右下の外側
ctx.beginPath();
ctx.arc(touchgesturesrightx[i], touchgesturesrighty[i], 48, -Math.PI * 0.5, -Math.PI * 0.5 + Math.PI * 2 * (qwercd[i-1] - qwerc[i-1]) / qwercd[i-1], false);//X,Y,半径,度から,度まで,右左回り
ctx.arc(touchgesturesrightx[i], touchgesturesrighty[i], 60, -Math.PI * 0.5 + Math.PI * 2 * (qwercd[i-1] - qwerc[i-1]) / qwercd[i-1], -Math.PI * 0.5, true);//X,Y,半径,度から,度まで,右左回り
ctx.closePath();
if (qwerc[i-1] == 0 && qwerf[i-1] == 1 ) ctx.globalAlpha = 0.5, ctx.fillStyle = touchgesturesrightcolor[2];
else if (qwerc[i-1] > 0 || qwerf[i-1] == 2 || qwerf[i-1] == 0 ) ctx.globalAlpha = 0.2 , ctx.fillStyle = touchgesturesrightcolor[4];
ctx.fill();

// SmartPhone 右下の内側フォント入れ
ctx.globalAlpha = 1;
ctx.font = "bold 20px Noto Sans JP";
ctx.fillStyle = "#EDEFF2";
if (qwerf[i-1] == 0 ) ctx.fillText("Lock", touchgesturesrightx[i], touchgesturesrighty[i]);
else if (qwerc[i-1] > 0) ctx.fillText(qwerc[i-1].toFixed(1) + " s", touchgesturesrightx[i], touchgesturesrighty[i]);
else if (qwerc[i-1] == 0) {
ctx.fillText("*", touchgesturesrightx[i], touchgesturesrighty[i] - 12);
ctx.fillText(touchgesturesname[i - 1], touchgesturesrightx[i], touchgesturesrighty[i] + 4);

}

}// i > 0

}// i

ctx.globalAlpha = 1;

}// inputn4

};