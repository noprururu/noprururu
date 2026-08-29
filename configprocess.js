//キー、ゲームパッド、入力表示用
const configinputxy = [];//x1,x2,y1,y2

// Full Screen On
configinputxy[0] = 55;
configinputxy[1] = 148;
configinputxy[2] = 215;
configinputxy[3] = 183;

// Full Screen Off
configinputxy[4] = 215;
configinputxy[5] = 148;
configinputxy[6] = 365;
configinputxy[7] = 183;

// Display Quality Low
configinputxy[8] = 55;
configinputxy[9] = 215;
configinputxy[10] = 160;
configinputxy[11] = 250;

// Display Quality Middle
configinputxy[12] = 160;
configinputxy[13] = 215;
configinputxy[14] = 270;
configinputxy[15] = 250;

// Display Quality High
configinputxy[16] = 270;
configinputxy[17] = 215;
configinputxy[18] = 365;
configinputxy[19] = 250;

// Low Spec Mode On
configinputxy[20] = 55;
configinputxy[21] = 275;
configinputxy[22] = 215;
configinputxy[23] = 310;

// Low Spec Mode Off
configinputxy[24] = 215;
configinputxy[25] = 275;
configinputxy[26] = 365;
configinputxy[27] = 310;

// Language
configinputxy[28] = 95;
configinputxy[29] = 410;
configinputxy[30] = 309;
configinputxy[31] = 444;

// Back
configinputxy[32] = 40;
configinputxy[33] = 590;
configinputxy[34] = 340;
configinputxy[35] = 686;

// Master Volume
configinputxy[36] = 580;
configinputxy[37] = 135;
configinputxy[38] = 795;
configinputxy[39] = 165;

// BGM
configinputxy[40] = 580;
configinputxy[41] = 185;
configinputxy[42] = 795;
configinputxy[43] = 215;

// Sound Effect
configinputxy[44] = 580;
configinputxy[45] = 235;
configinputxy[46] = 795;
configinputxy[47] = 265;

// Voice
configinputxy[48] = 580;
configinputxy[49] = 285;
configinputxy[50] = 795;
configinputxy[51] = 315;

// Mouse & QWER
configinputxy[52] = 420;
configinputxy[53] = 445;
configinputxy[54] = 640;
configinputxy[55] = 505;

// ↑→↓←&ZXCAS
configinputxy[56] = 640;
configinputxy[57] = 445;
configinputxy[58] = 860;
configinputxy[59] = 505;

// WASD & QECX
configinputxy[60] = 420;
configinputxy[61] = 505;
configinputxy[62] = 640;
configinputxy[63] = 560;

// Game Pad
configinputxy[64] = 640;
configinputxy[65] = 505;
configinputxy[66] = 860;
configinputxy[67] = 560;

// Touch Gestures
configinputxy[68] = 420;
configinputxy[69] = 610;
configinputxy[70] = 640;
configinputxy[71] = 650;

// Game Pad
configinputxy[72] = 640;
configinputxy[73] = 610;
configinputxy[74] = 860;
configinputxy[75] = 650;

// On Keyboard
configinputxy[76] = 420;
configinputxy[77] = 650;
configinputxy[78] = 640;
configinputxy[79] = 690;

// Mouse & Keyboard
configinputxy[80] = 640;
configinputxy[81] = 650;
configinputxy[82] = 860;
configinputxy[83] = 690;

for (let i = 0; i < 13; i++) {
    configinputxy[i * 4 + 84] = 870;
    configinputxy[i * 4 + 85] = 124 + i * 32;
    configinputxy[i * 4 + 86] = 1260;
    configinputxy[i * 4 + 87] = 124 + i * 32 + 28;

}

// Reset Game
configinputxy[136] = 940;
configinputxy[137] = 590;
configinputxy[138] = 1240;
configinputxy[139] = 686;

const configinputlangxy = [];

for (let i = 0; i < 35; i++) {
    configinputlangxy[i * 4 + 0] = 309 + (i % 5) * 180;
    configinputlangxy[i * 4 + 1] = 308 + Math.floor(i / 5) * 34;
    configinputlangxy[i * 4 + 2] = 309 + (i % 5) * 180 + 180;
    configinputlangxy[i * 4 + 3] = 308 + Math.floor(i / 5) * 34 + 34;

}

configinputlangxy[140] = 540;
configinputlangxy[141] = 570;
configinputlangxy[142] = 740;
configinputlangxy[143] = 610;

/*デバッグ用に残す
ctx.globalAlpha = 0.5;
for(let i = 0; i < 36; i++){
ctx.beginPath();
ctx.moveTo( configinputlangxy[i*4+0] , configinputlangxy[i*4+1] );
ctx.lineTo( configinputlangxy[i*4+2] , configinputlangxy[i*4+1] );
ctx.lineTo( configinputlangxy[i*4+2] , configinputlangxy[i*4+3] );
ctx.lineTo( configinputlangxy[i*4+0] , configinputlangxy[i*4+3] );
ctx.closePath();
ctx.fillStyle = "#6E3B5E";
ctx.fill();
ctx.strokeStyle = "#D4AF37";
ctx.stroke();

}
*/

//0.Graphics 1.Full Screen 2.*Pleaseuse 3.Volume 4.PC 5.Customize 左から書く
//6.Graphics 1.Full Screen 2.*Pleaseuse 3.Volume 4.PC 5.Customize 右から書く

//タイトルの座標位置用
const leftrightcfx = [
    50, 70, 415, 440, 844,
    380, 360, 848, 840, 1230
];

//キー、ゲームパッド、十字現在位置用
let boardcf = 0;
//キー、ゲームパッド、十字現在位置言語用
let boardlangs = 0;

//キー、ゲームパッド、十字移動入力用
const boardconfig = [];
//↑→↓←の順に書く0~
boardconfig[0] = 8;
boardconfig[1] = 1;
boardconfig[2] = 2;
boardconfig[3] = 21;

boardconfig[4] = 8;
boardconfig[5] = 9;
boardconfig[6] = 4;
boardconfig[7] = 0;

boardconfig[8] = 0;
boardconfig[9] = 3;
boardconfig[10] = 5;
boardconfig[11] = 24;

boardconfig[12] = 0;
boardconfig[13] = 4;
boardconfig[14] = 6;
boardconfig[15] = 2;

boardconfig[16] = 1;
boardconfig[17] = 11;
boardconfig[18] = 6;
boardconfig[19] = 3;

boardconfig[20] = 2;
boardconfig[21] = 6;
boardconfig[22] = 7;
boardconfig[23] = 30;

boardconfig[24] = 4;
boardconfig[25] = 12;
boardconfig[26] = 7;
boardconfig[27] = 5;

boardconfig[28] = 6;
boardconfig[29] = 13;
boardconfig[30] = 8;
boardconfig[31] = 30;
//↑→↓←の順に書く8
boardconfig[32] = 7;
boardconfig[33] = 17;
boardconfig[34] = 0;
boardconfig[35] = 34;

boardconfig[36] = 20;
boardconfig[37] = 21;
boardconfig[38] = 10;
boardconfig[39] = 1;

boardconfig[40] = 9;
boardconfig[41] = 23;
boardconfig[42] = 11;
boardconfig[43] = 4;

boardconfig[44] = 10;
boardconfig[45] = 25;
boardconfig[46] = 12;
boardconfig[47] = 4;

boardconfig[48] = 11;
boardconfig[49] = 26;
boardconfig[50] = 14;
boardconfig[51] = 6;

boardconfig[52] = 12;
boardconfig[53] = 14;
boardconfig[54] = 15;
boardconfig[55] = 7;

boardconfig[56] = 12;
boardconfig[57] = 31;
boardconfig[58] = 16;
boardconfig[59] = 13;

boardconfig[60] = 13;
boardconfig[61] = 16;
boardconfig[62] = 17;
boardconfig[63] = 7;
//↑→↓←の順に書く16
boardconfig[64] = 14;
boardconfig[65] = 33;
boardconfig[66] = 18;
boardconfig[67] = 15;

boardconfig[68] = 15;
boardconfig[69] = 18;
boardconfig[70] = 19;
boardconfig[71] = 8;

boardconfig[72] = 16;
boardconfig[73] = 34;
boardconfig[74] = 20;
boardconfig[75] = 17;

boardconfig[76] = 17;
boardconfig[77] = 20;
boardconfig[78] = 9;
boardconfig[79] = 8;

boardconfig[80] = 18;
boardconfig[81] = 34;
boardconfig[82] = 9;
boardconfig[83] = 19;

boardconfig[84] = 34;
boardconfig[85] = 0;
boardconfig[86] = 22;
boardconfig[87] = 9;

boardconfig[88] = 21;
boardconfig[89] = 2;
boardconfig[90] = 23;
boardconfig[91] = 9;

boardconfig[92] = 22;
boardconfig[93] = 2;
boardconfig[94] = 24;
boardconfig[95] = 10;
//↑→↓←の順に書く24
boardconfig[96] = 23;
boardconfig[97] = 2;
boardconfig[98] = 25;
boardconfig[99] = 11;

boardconfig[100] = 24;
boardconfig[101] = 2;
boardconfig[102] = 26;
boardconfig[103] = 11;

boardconfig[104] = 25;
boardconfig[105] = 5;
boardconfig[106] = 27;
boardconfig[107] = 12;

boardconfig[108] = 26;
boardconfig[109] = 5;
boardconfig[110] = 28;
boardconfig[111] = 12;

boardconfig[112] = 27;
boardconfig[113] = 7;
boardconfig[114] = 29;
boardconfig[115] = 12;

boardconfig[116] = 28;
boardconfig[117] = 7;
boardconfig[118] = 30;
boardconfig[119] = 14;

boardconfig[120] = 29;
boardconfig[121] = 7;
boardconfig[122] = 31;
boardconfig[123] = 14;

boardconfig[124] = 30;
boardconfig[125] = 7;
boardconfig[126] = 32;
boardconfig[127] = 14;
//↑→↓←の順に書く32
boardconfig[128] = 31;
boardconfig[129] = 8;
boardconfig[130] = 33;
boardconfig[131] = 14;

boardconfig[132] = 32;
boardconfig[133] = 8;
boardconfig[134] = 34;
boardconfig[135] = 16;

boardconfig[136] = 33;
boardconfig[137] = 8;
boardconfig[138] = 21;
boardconfig[139] = 18;





/////////////////////////////////////////////////////
// ループ開始
/////////////////////////////////////////////////////
function configprocess() {
    if (mainroutine == 2) {

        //const gp = getGamepad();
        // 過去に保存した設定があればそれを使い、なければ新しく空の箱を作る
        if (inputn == 3 || inputn == 5) {
            inputConfig = JSON.parse(localStorage.getItem("inputPadConfig")) || {
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

        else {
            inputConfig = JSON.parse(localStorage.getItem("inputConfig")) || {
                up: "Mousedrag",
                right: "Mousedrag",
                down: "Mousedrag",
                left: "Mousedrag",
                a: "click",
                q: "KeyQ",
                w: "KeyW",
                e: "KeyE",
                r: "KeyR",
                pause: "Escape",
                config: "KeyC",
                mute: "KeyM",

            };

        }

        const gp = getGamepad();
        if (gp?.buttons?.[0]?.pressed) {
            if (gamepadf == 0) vibrationf = 0;
            if (spf == 1 && configinputntimer == 240) inputn = 5, gamepadf = 1;
            else if (configinputntimer == 240) inputn = 3, gamepadf = 1;

        }


        /////////////////////////////////////////////////////
        // pcf spf 解除 タッチジェスチャーつきノート用
        /////////////////////////////////////////////////////
        if (pcf == 0 && keyboardf == 1 && mousef == 1) pcf = 1;



        //マウスの移動量計測用
        mousevxy = Math.floor(Math.sqrt((mouse.x - lastmousex) * (mouse.x - lastmousex) + (mouse.y - lastmousey) * (mouse.y - lastmousey)));

        // Input入力処理
        if (inputn == 0 && inputf == 1) inputConfig = updateinputn0();
        else if (inputn == 1 && inputf == 1) inputConfig = updateinputn1();
        else if (inputn == 2 && inputf == 1) inputConfig = updateinputn2();
        else if (inputn == 4 && inputf == 1) inputConfig = updateinputn4();
        else if (inputn == 6 && inputf == 1) inputConfig = updateinputn6();
        else if (inputn == 7 && inputf == 1) inputConfig = updateinputn7();
        else if (inputn == 3 && inputf == 1 || inputn == 5 && inputf == 1 ) {
            //inputPadConfig = updateinputn3();
            localStorage.setItem("inputPadConfig", JSON.stringify(inputPadConfig));
            inputf = 0;

        }

        if (inputf == 1) inputf = 0, localStorage.setItem("inputConfig", JSON.stringify(inputConfig));

        if (inputn == 3 || inputn == 5) {
            function updateInputKeys() {
                //inputPadConfig = [12, 15, 13, 14, 0, 1, 3, 2, 4, 9, 8, 5];
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

            updateInputKeys();

        }



        if (inputn !== 3 && inputn !== 5) {
            function updateInputKeys() {
                inputkeys.up = keys[inputConfig.up];
                inputkeys.right = keys[inputConfig.right];
                inputkeys.down = keys[inputConfig.down];
                inputkeys.left = keys[inputConfig.left];
                inputkeys.a = keys[inputConfig.a];
                inputkeys.q = keys[inputConfig.q];
                inputkeys.w = keys[inputConfig.w];
                inputkeys.e = keys[inputConfig.e];
                inputkeys.r = keys[inputConfig.r];
                inputkeys.pause = keys[inputConfig.pause];
                inputkeys.config = keys[inputConfig.config];
                inputkeys.mute = keys[inputConfig.mute];

            }

            updateInputKeys();

        }

        if (waittimer < 1) {
        if (keys["Enter"] || keys["Space"] || inputkeys.a) pressKeyf = true;
        else if (keys["Escape"] || keys["Backspace"] || keys["Delete"] || inputkeys.q) pressCancelf = true;

        }


        if (langconfigf == 0) {
            //キー、ゲームパッド、入力処理用
            if (waittimer < 1) {
                if (inputkeys.up || keys["ArrowUp"]) boardcf = boardconfig[boardcf * 4 + 0], soundf[14] = 1, waittimer = 45, inputnvolumef = 0;
                else if (inputkeys.down || keys["ArrowDown"]) boardcf = boardconfig[boardcf * 4 + 2], soundf[14] = 1, waittimer = 45, inputnvolumef = 0;


                //音量をパッド等で入力用
                if (inputn == 1 && pressKeyf || inputn == 3 && pressKeyf || inputn == 5 && pressKeyf) {
                    if (inputnvolumef == 0 && boardcf > 8 && boardcf < 13) inputnvolumef = 1, pressKeyf = false;

                }

                if (pressCancelf && inputnvolumef == 1) inputnvolumef = 0, pressCancelf = false, soundf[14] = 1;

                //音量調整INPUTNがOFFの時
                if (inputnvolumef == 0) {
                    if (inputkeys.right || keys["ArrowRight"]) boardcf = boardconfig[boardcf * 4 + 1], soundf[14] = 1, waittimer = 45;
                    if (inputkeys.left || keys["ArrowLeft"]) boardcf = boardconfig[boardcf * 4 + 3], soundf[14] = 1, waittimer = 45;

                }

                //音量調整INPUTNがONの時
                else if (inputnvolumef == 1) {
                    if (inputkeys.right || keys["ArrowRight"] ) lastvol[boardcf - 9]+=0.01, soundf[14] = 1, waittimer = 12;
                    else if (inputkeys.left || keys["ArrowLeft"]) lastvol[boardcf - 9]-=0.01, soundf[14] = 1, waittimer = 12;

                    if (lastvol[boardcf - 9] < 0) lastvol[boardcf - 9] = 0;
                    else if (lastvol[boardcf - 9] > 1) lastvol[boardcf - 9] = 1;

                    for (let j = 0; j < 4; j++) {

                            // BGM 処理
                        if (j == [boardcf - 9]) {
                                audios.bgm0.volume = startbgmvol[0] * lastvol[0] * lastvol[1];

                            } //j == 1

                            // SFXの処理
                        else if (j == [boardcf - 9]) {
                                for (let k = 0; k < 15; k++) {
                                    audios["sound" + k].volume = startsfxvol[k] * lastvol[0] * lastvol[2];

                                }

                            } // j == 2

                        else if (j == [boardcf - 9]) {
                                for (let k = 0; k < 19; k++) {
                                    audios["voice" + k].volume = startvoicevol[k] * lastvol[0] * lastvol[3];

                                }

                        }// j == 3

                    }

                }

            }

            waittimer--;

        }



        ////////////////////////////////////////////////////////////
        // Full Screen Display Quality 画面左部処理
        ////////////////////////////////////////////////////////////
        //キー、ゲームパッド、マウスと同期 入力用
        if (langconfigf == 0) {
            //boardcf 0~8 mouse.x < 427
            if (boardcf < 9 || mouse.x < 427) {
                for (let i = 0; i < 9; i++) {
                    if (mousevxy !== 0 && mouse.x > configinputxy[i * 4 + 0] && mouse.x < configinputxy[i * 4 + 2] &&
                        mouse.y > configinputxy[i * 4 + 1] && mouse.y < configinputxy[i * 4 + 3]) {
                        boardcf = i;

                    }

                }//for(let i = 0; i < 9; i++){

                if (mousevxy == 0 && boardcf == 0 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[0 * 4 + 0] && mouse.x < configinputxy[0 * 4 + 2] &&
                    mouse.y > configinputxy[0 * 4 + 1] && mouse.y < configinputxy[0 * 4 + 3]) {
                    fulldisplayf = 1;
                    soundf[14] = 1;
                    pressKeyf = false;
                    mouseDown = false;
                    resize();
                    window.addEventListener("resize", resize);

                }

                else if (mousevxy == 0 && boardcf == 1 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[1 * 4 + 0] && mouse.x < configinputxy[1 * 4 + 2] &&
                    mouse.y > configinputxy[1 * 4 + 1] && mouse.y < configinputxy[1 * 4 + 3]) {
                    fulldisplayf = 0;
                    soundf[14] = 1;
                    pressKeyf = false;
                    mouseDown = false;
                    resize();
                    window.addEventListener("resize", resize);

                }

                else if (mousevxy == 0 && boardcf == 2 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[2 * 4 + 0] && mouse.x < configinputxy[2 * 4 + 2] &&
                    mouse.y > configinputxy[2 * 4 + 1] && mouse.y < configinputxy[2 * 4 + 3]) {
                    displayqualityf = 0;
                    soundf[14] = 1;
                    pressKeyf = false;
                    mouseDown = false;

                }

                else if (mousevxy == 0 && boardcf == 3 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[3 * 4 + 0] && mouse.x < configinputxy[3 * 4 + 2] &&
                    mouse.y > configinputxy[3 * 4 + 1] && mouse.y < configinputxy[3 * 4 + 3]) {
                    displayqualityf = 1;
                    mapgq = 10;
                    soundf[14] = 1;
                    pressKeyf = false;
                    mouseDown = false;

                }

                else if (mousevxy == 0 && boardcf == 4 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[4 * 4 + 0] && mouse.x < configinputxy[4 * 4 + 2] &&
                    mouse.y > configinputxy[4 * 4 + 1] && mouse.y < configinputxy[4 * 4 + 3]) {
                    displayqualityf = 2;
                    mapgq = 0;
                    soundf[14] = 1;
                    pressKeyf = false;
                    mouseDown = false;

                }

                else if (mousevxy == 0 && boardcf == 5 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[5 * 4 + 0] && mouse.x < configinputxy[5 * 4 + 2] &&
                    mouse.y > configinputxy[5 * 4 + 1] && mouse.y < configinputxy[5 * 4 + 3]) {
                    lowsupecmodef = 0;
                    soundf[14] = 1;
                    pressKeyf = false;
                    mouseDown = false;

                }

                else if (mousevxy == 0 && boardcf == 6 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[6 * 4 + 0] && mouse.x < configinputxy[6 * 4 + 2] &&
                    mouse.y > configinputxy[6 * 4 + 1] && mouse.y < configinputxy[6 * 4 + 3]) {
                    lowsupecmodef = 1;
                    soundf[14] = 1;
                    pressKeyf = false;
                    mouseDown = false;

                }

                //Backボタン入力処理
                if (mousevxy == 0 && boardcf == 8 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[8 * 4 + 0] && mouse.x < configinputxy[8 * 4 + 2] &&
                    mouse.y > configinputxy[8 * 4 + 1] && mouse.x < configinputxy[8 * 4 + 3]) {
                    pausef = 0;
                    if (lastroutine == 4) {
                    for(let i = 0; i < 5; i++){
                    if ( i !== lastbgm )audios["bgm"+i].pause();

                    }


                    }

                    soundf[14] = 1;
                    waittimer = 45;
                    waittoptimer = 15;
                    if (lastroutine == 1) {
                        c = 0;
                        timer = 0;
                        audios.bgm0.currentTime = 0;
                        audios.voice1.currentTime = 0;
                        audios.bgm0.pause();
                        voicef[1] = 1;

                    }

                    boardcf = 0;
                    pressKeyf = false;
                    mouseDown = false;
                    pressCancelf = false;
                    mainroutine = lastroutine;
                    soundresetf = 1;
                    soundreset();

                    if (inputn == 0 || inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7) {
                        qwername3[0] = inputConfig.q;
                        qwername3[1] = inputConfig.w;
                        qwername3[2] = inputConfig.e;
                        qwername3[3] = inputConfig.r;
                        if (qwername3[0].length !== 1) qwername3[0] = qwername3[0].replace("Key", "");
                        if (qwername3[1].length !== 1) qwername3[1] = qwername3[1].replace("Key", "");
                        if (qwername3[2].length !== 1) qwername3[2] = qwername3[2].replace("Key", "");
                        if (qwername3[3].length !== 1) qwername3[3] = qwername3[3].replace("Key", "");
                        
                    }

                }

            } // boardcf < 9 || mouse.x < 427

        }//langconfigf == 0


            //複数言語フラグ入力処理
            if (langconfigf == 0 && waittimer < 1) {
            if (mousevxy == 0 && boardcf == 7 && pressKeyf ||
                mouseDown && mouse.x > configinputxy[7 * 4 + 0] && mouse.x < configinputxy[7 * 4 + 2] &&
                mouse.y > configinputxy[7 * 4 + 1] && mouse.y < configinputxy[7 * 4 + 3]) {
                langconfigf = 1;
                waittimer = 45;
                pressKeyf = false;
                mouseDown = false;

            }

            }




        ////////////////////////////////////////////////////////////
        // 音量 入力タイプ設定 画面中央処理
        ////////////////////////////////////////////////////////////
        //boardcf 9~20 mouse.x < 854
        if (langconfigf == 0) {
            if (boardcf > 8 && boardcf < 21 || mouse.x > 426 && mouse.x < 854) {
                for (let i = 9; i < 21; i++) {
                    if (mousevxy !== 0 && mouse.x > configinputxy[i * 4 + 0] && mouse.x < configinputxy[i * 4 + 2] &&
                        mouse.y > configinputxy[i * 4 + 1] && mouse.y < configinputxy[i * 4 + 3]) {
                        boardcf = i;

                    }

                }//for9~21

                for (let j = 0; j < 4; j++) {
                    //音量入力処理
                    if (mouseDown && mouse.x > 580 && mouse.x < 795 && mouse.y > 135 + j * 50 && mouse.y < 135 + j * 50 + 30) {
                        // Volumeバー操作用
                        lastvol[j] = Math.round((mouse.x - 580) / 215 * 100) / 100;

                        // Master Volume
                        if (j == 0) {
                            audios.bgm0.volume = startbgmvol[0] * lastvol[0] * lastvol[1];
                            for (let k = 0; k < 15; k++) {
                            audios["sound" + k].volume = startsfxvol[k] * lastvol[0] * lastvol[2];

                            }

                            for (let k = 0; k < 19; k++) {
                            audios["voice" + k].volume = startvoicevol[k] * lastvol[0] * lastvol[3];

                            }

                        }


                        // BGM 処理
                        if (j == 1) {
                            if (mutef == 1) mutef = 0;
                            audios.bgm0.volume = startbgmvol[0] * lastvol[0] * lastvol[1];

                        } //j == 1

                        // SFXの処理
                        else if (j == 2) {
                            if (mutef == 1) mutef = 0;

                            for (let k = 0; k < 15; k++) {
                                audios["sound" + k].volume = startsfxvol[k] * lastvol[0] * lastvol[2];

                            }

                            audios.sound0.play();

                        } // j == 2

                        else if (j == 3) {
                            if (mutef == 1) mutef = 0;
                            for (let k = 0; k < 19; k++) {
                                audios["voice" + k].volume = startvoicevol[k] * lastvol[0] * lastvol[3];

                            }

                            audios.voice16.currentTime = 0;
                            audios.voice16.play();

                        }// j == 3

                    }//mouseDown

                }//for j0~4

                ////////////////////////////////////////////////////////////
                // 入力 inputConfig処理
                ////////////////////////////////////////////////////////////
                //inputn0 Mouse & QWER
                if (mousevxy == 0 && boardcf == 13 && pressKeyf && configinputntimer == 240 ||
                    mouseDown && mouse.x > configinputxy[13 * 4 + 0] && mouse.x < configinputxy[13 * 4 + 2] &&
                mouse.y > configinputxy[13 * 4 + 1] && mouse.y < configinputxy[13 * 4 + 3] && configinputntimer == 240) {
                    if (pcf == 1) {
                        let inputConfig = updateinputn0();
                        function updateInputKeys() {
                            inputkeys.up = keys[inputConfig.up];
                            inputkeys.right = keys[inputConfig.right];
                            inputkeys.down = keys[inputConfig.down];
                            inputkeys.left = keys[inputConfig.left];
                            inputkeys.a = keys[inputConfig.click];
                            inputkeys.q = keys[inputConfig.q];
                            inputkeys.w = keys[inputConfig.w];
                            inputkeys.e = keys[inputConfig.e];
                            inputkeys.r = keys[inputConfig.r];
                            inputkeys.pause = keys[inputConfig.escape];
                            inputkeys.config = keys[inputConfig.c];
                            inputkeys.mute = keys[inputConfig.m];

                        }

                        soundf[14] = 1;
                        inputn = 0;
                        inputf = 1;
                        pressKeyf = false;
                        mouseDown = false;
                        configinputntimer = 239;

                    }

                    else if (pcf == 0) {
                        soundf[13] = 1;
                        pressKeyf = false;
                        mouseDown = false;

                    }

                }


                // inputn1 ↑→↓←&ZXCAS
                else if (mousevxy == 0 && boardcf == 14 && pressKeyf && configinputntimer == 240 ||
                    mouseDown && mouse.x > configinputxy[14 * 4 + 0] && mouse.x < configinputxy[14 * 4 + 2] &&
                mouse.y > configinputxy[14 * 4 + 1] && mouse.y < configinputxy[14 * 4 + 3] && configinputntimer == 240) {
                    if (pcf == 1) {
                        let inputConfig = updateinputn1();
                        function updateInputKeys() {
                            inputkeys.up = keys[inputConfig.up];
                            inputkeys.right = keys[inputConfig.right];
                            inputkeys.down = keys[inputConfig.down];
                            inputkeys.left = keys[inputConfig.left];
                            inputkeys.a = keys[inputConfig.a];
                            inputkeys.q = keys[inputConfig.q];
                            inputkeys.w = keys[inputConfig.w];
                            inputkeys.e = keys[inputConfig.e];
                            inputkeys.r = keys[inputConfig.r];
                            inputkeys.pause = keys[inputConfig.pause];
                            inputkeys.config = keys[inputConfig.config];
                            inputkeys.mute = keys[inputConfig.mute];

                        }

                        soundf[14] = 1;
                        inputn = 1;
                        inputf = 1;
                        pressKeyf = false;
                        mouseDown = false;
                        configinputntimer = 239;

                    }

                    else if (pcf == 0) {
                        soundf[13] = 1;
                        pressKeyf = false;
                        mouseDown = false;

                    }

                }

                //inputn2 WASD & QECX
                else if (mousevxy == 0 && boardcf == 15 && pressKeyf && configinputntimer == 240 ||
                    mouseDown && mouse.x > configinputxy[15 * 4 + 0] && mouse.x < configinputxy[15 * 4 + 2] &&
                mouse.y > configinputxy[15 * 4 + 1] && mouse.y < configinputxy[15 * 4 + 3] && configinputntimer == 240) {
                    if (pcf == 1) {
                        let inputConfig = updateinputn2();
                        function updateInputKeys() {
                            inputkeys.up = keys[inputConfig.up];
                            inputkeys.right = keys[inputConfig.right];
                            inputkeys.down = keys[inputConfig.down];
                            inputkeys.left = keys[inputConfig.left];
                            inputkeys.a = keys[inputConfig.a];
                            inputkeys.q = keys[inputConfig.q];
                            inputkeys.w = keys[inputConfig.w];
                            inputkeys.e = keys[inputConfig.e];
                            inputkeys.r = keys[inputConfig.r];
                            inputkeys.pause = keys[inputConfig.pause];
                            inputkeys.config = keys[inputConfig.config];
                            inputkeys.mute = keys[inputConfig.mute];

                        }

                        soundf[14] = 1;
                        inputn = 2;
                        inputf = 1;
                        pressKeyf = false;
                        mouseDown = false;
                        configinputntimer = 239;

                    }

                    else if ( pcf == 0) {
                        soundf[13] = 1;
                        pressKeyf = false;
                        mouseDown = false;

                    }

                }


            //ゲームパッド接続用PC
            else if (gamepadf == 1 && pcf == 1 && boardcf == 16) {
                    if (mousevxy == 0 && boardcf == 16 && pressKeyf && configinputntimer == 240 ||
                    mouseDown && mouse.x > configinputxy[16 * 4 + 0] && mouse.x < configinputxy[16 * 4 + 2] &&
                    mouse.y > configinputxy[16 * 4 + 1] && mouse.y < configinputxy[16 * 4 + 3] && configinputntimer == 240) {
                    //updateinputn3();
                    inputn = 3;
                    inputf = 1;
                    pressKeyf = false;
                    mouseDown = false;
                    configinputntimer = 239;

                    inputPadConfig = [12, 15, 13, 14, 0, 1, 3, 2, 4, 9, 8, 5];
                    function updateInputKeys() {
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

                }

            }

            else if (pcf == 0 && boardcf == 16 || gamepadf == 0 && boardcf == 16) {
                if (mousevxy == 0 && boardcf == 16 && pressKeyf ||
                    mouseDown && mouse.x > configinputxy[16 * 4 + 0] && mouse.x < configinputxy[16 * 4 + 2] &&
                    mouse.y > configinputxy[16 * 4 + 1] && mouse.y < configinputxy[16 * 4 + 3]) {
                    soundf[13] = 1;
                    pressKeyf = false;
                    mouseDown = false;

                }

            }

            //17~20 Smart Phone 処理を描く

            //inputn4 Touch Gestures
                if (mousevxy == 0 && boardcf == 17 && pressKeyf && configinputntimer == 240 ||
                mouseDown && mouse.x > configinputxy[17 * 4 + 0] && mouse.x < configinputxy[17 * 4 + 2] &&
                mouse.y > configinputxy[17 * 4 + 1] && mouse.y < configinputxy[17 * 4 + 3] && configinputntimer == 240) {
                if (spf == 1) {
                    let inputConfig = updateinputn4();
                    function updateInputKeys() {
                        inputkeys.up = keys[inputConfig.up];
                        inputkeys.right = keys[inputConfig.right];
                        inputkeys.down = keys[inputConfig.down];
                        inputkeys.left = keys[inputConfig.left];
                        inputkeys.a = keys[inputConfig.a];
                        inputkeys.q = keys[inputConfig.q];
                        inputkeys.w = keys[inputConfig.w];
                        inputkeys.e = keys[inputConfig.e];
                        inputkeys.r = keys[inputConfig.r];
                        inputkeys.pause = keys[inputConfig.pause];
                        inputkeys.config = keys[inputConfig.config];
                        inputkeys.mute = keys[inputConfig.mute];

                    }

                    soundf[14] = 1;
                    inputn = 4;
                    inputf = 1;
                    pressKeyf = false;
                    mouseDown = false;
                    configinputntimer = 239;

                }

                else if (spf == 0) {
                    soundf[13] = 1;
                    pressKeyf = false;
                    mouseDown = false;

                }

            }


                //ゲームパッド接続用SmartPhone
                else if (gamepadf == 1 && spf == 1 && boardcf == 18 && configinputntimer == 240) {
                    if (mousevxy == 0 && boardcf == 18 && pressKeyf ||
                        mouseDown && mouse.x > configinputxy[18 * 4 + 0] && mouse.x < configinputxy[18 * 4 + 2] &&
                    mouse.y > configinputxy[18 * 4 + 1] && mouse.y < configinputxy[18 * 4 + 3] && configinputntimer == 240) {
                        inputPadConfig = [12, 15, 13, 14, 0, 1, 3, 2, 4, 9, 8, 5];
                        function updateInputKeys() {
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

                        //updateinputn5();
                        inputn = 5;
                        inputf = 1;
                        pressKeyf = false;
                        mouseDown = false;
                        configinputntimer = 239;

                    }

                }

                else if (gamepadf == 0 && boardcf == 18 || spf == 0 && boardcf == 18) {
                    if (mousevxy == 0 && boardcf == 18 && pressKeyf ||
                        mouseDown && mouse.x > configinputxy[18 * 4 + 0] && mouse.x < configinputxy[18 * 4 + 2] &&
                        mouse.y > configinputxy[18 * 4 + 1] && mouse.y < configinputxy[18 * 4 + 3]) {
                        soundf[13] = 1;
                        pressKeyf = false;
                        mouseDown = false;
                        configinputntimer = 239;

                    }

                }


                //inputn6 On Keyboard
                else if (mousevxy == 0 && boardcf == 19 && pressKeyf && configinputntimer == 240 ||
                    mouseDown && mouse.x > configinputxy[19 * 4 + 0] && mouse.x < configinputxy[19 * 4 + 2] &&
                mouse.y > configinputxy[19 * 4 + 1] && mouse.y < configinputxy[19 * 4 + 3] && configinputntimer == 240) {
                    if (spf == 1) {
                        let inputConfig = updateinputn6();
                        function updateInputKeys() {
                            inputkeys.up = keys[inputConfig.up];
                            inputkeys.right = keys[inputConfig.right];
                            inputkeys.down = keys[inputConfig.down];
                            inputkeys.left = keys[inputConfig.left];
                            inputkeys.a = keys[inputConfig.a];
                            inputkeys.q = keys[inputConfig.q];
                            inputkeys.w = keys[inputConfig.w];
                            inputkeys.e = keys[inputConfig.e];
                            inputkeys.r = keys[inputConfig.r];
                            inputkeys.pause = keys[inputConfig.pause];
                            inputkeys.config = keys[inputConfig.config];
                            inputkeys.mute = keys[inputConfig.mute];

                        }

                        soundf[14] = 1;
                        inputn = 6;
                        inputf = 1;
                        pressKeyf = false;
                        mouseDown = false;
                        configinputntimer = 239;

                    }

                    else if (spf == 0) {
                        soundf[13] = 1;
                        pressKeyf = false;
                        mouseDown = false;

                    }

                }

                //inputn7 On Keyboard & Mouse
                else if (mousevxy == 0 && boardcf == 20 && pressKeyf && configinputntimer == 240 ||
                    mouseDown && mouse.x > configinputxy[20 * 4 + 0] && mouse.x < configinputxy[20 * 4 + 2] &&
                mouse.y > configinputxy[20 * 4 + 1] && mouse.y < configinputxy[20 * 4 + 3] && configinputntimer == 240) {
                    if (spf == 1) {
                        let inputConfig = updateinputn7();
                        function updateInputKeys() {
                            inputkeys.up = keys[inputConfig.up];
                            inputkeys.right = keys[inputConfig.right];
                            inputkeys.down = keys[inputConfig.down];
                            inputkeys.left = keys[inputConfig.left];
                            inputkeys.a = keys[inputConfig.a];
                            inputkeys.q = keys[inputConfig.q];
                            inputkeys.w = keys[inputConfig.w];
                            inputkeys.e = keys[inputConfig.e];
                            inputkeys.r = keys[inputConfig.r];
                            inputkeys.pause = keys[inputConfig.pause];
                            inputkeys.config = keys[inputConfig.config];
                            inputkeys.mute = keys[inputConfig.mute];

                        }

                        soundf[14] = 1;
                        inputn = 7;
                        inputf = 1;
                        pressKeyf = false;
                        mouseDown = false;
                        configinputntimer = 239;

                    }

                    else if (spf == 0) {
                        soundf[13] = 1;
                        pressKeyf = false;

                    }

                }


            }//boardcf 9~20 mouse.x < 854

            if ( configinputntimer < 1 ) configinputntimer = 240;
            if ( configinputntimer < 240 ) configinputntimer-= 4;


    }//if ( langconfigf == 0 ) {


        ////////////////////////////////////////////////////////////
        // Customize 処理
        ////////////////////////////////////////////////////////////
        if (langconfigf == 0) {

                /*
                //試しにinputnを表示してみる
                if ( inputn == 0 ) {
                const input0name = [
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
                */

                /*
                //customize 名前設定の変更
                //inputn0 初期設定の場合 Press Any Key0
                for(let i = 0; i < 12; i++) {
                if ( inputn == 0 ) actionkey[i] = input0name[i];
                else if ( inputn == 1 ) actionkey[i] = input1name[i];
                else if ( inputn == 2 ) actionkey[i] = input2name[i];
                else if ( inputn == 4 ) actionkey[i] = input4name[i];
                else if ( inputn == 6 ) actionkey[i] = input6name[i];
                else if ( inputn == 7 ) actionkey[i] = input7name[i];
                
                }
                
                */


            const gp = getGamepad();
            if ( gp?.buttons?.[0]?.pressed) {
                const padname = gp.id.toLowerCase();
                if (padname.includes("xbox")) {
                    //console.log("Xbox");
                    gamepadn = 0;

                }

                else if (padname.includes("dualsense") || padname.includes("wireless controller")) {
                    //console.log("PlayStation");
                    gamepadn = 1;

                }

                else if (padname.includes("nintendo") || padname.includes("switch")) {
                    //console.log("Switch");
                    gamepadn = 2;

                }

                else {
                    //console.log("Else Game Pad");
                    gamepadn = 0;

                }

                if (configinputntimer == 240) {
                if (spf == 1) inputn = 5;
                else inputn = 3;
                    configinputntimer = 239;
                }


            }



                //xbox ps ninの場合
            if (inputn == 3 || inputn == 5) {
                if (gamepadn == 0) {
                    actionkey[0] = xboxname[inputPadConfig[0]];
                    actionkey[1] = xboxname[inputPadConfig[1]];
                    actionkey[2] = xboxname[inputPadConfig[2]];
                    actionkey[3] = xboxname[inputPadConfig[3]];
                    actionkey[4] = xboxname[inputPadConfig[4]];
                    actionkey[5] = xboxname[inputPadConfig[5]];
                    actionkey[6] = xboxname[inputPadConfig[6]];
                    actionkey[7] = xboxname[inputPadConfig[7]];
                    actionkey[8] = xboxname[inputPadConfig[8]];
                    actionkey[9] = xboxname[inputPadConfig[9]];
                    actionkey[10] = xboxname[inputPadConfig[10]];
                    actionkey[11] = xboxname[inputPadConfig[11]];

                }

                else if (gamepadn == 1) {
                    actionkey[0] = psname[inputPadConfig[0]];
                    actionkey[1] = psname[inputPadConfig[1]];
                    actionkey[2] = psname[inputPadConfig[2]];
                    actionkey[3] = psname[inputPadConfig[3]];
                    actionkey[4] = psname[inputPadConfig[4]];
                    actionkey[5] = psname[inputPadConfig[5]];
                    actionkey[6] = psname[inputPadConfig[6]];
                    actionkey[7] = psname[inputPadConfig[7]];
                    actionkey[8] = psname[inputPadConfig[8]];
                    actionkey[9] = psname[inputPadConfig[9]];
                    actionkey[10] = psname[inputPadConfig[10]];
                    actionkey[11] = psname[inputPadConfig[11]];

                }

                else if (gamepadn == 2) {
                    actionkey[0] = ninname[inputPadConfig[0]];
                    actionkey[1] = ninname[inputPadConfig[1]];
                    actionkey[2] = ninname[inputPadConfig[2]];
                    actionkey[3] = ninname[inputPadConfig[3]];
                    actionkey[4] = ninname[inputPadConfig[4]];
                    actionkey[5] = ninname[inputPadConfig[5]];
                    actionkey[6] = ninname[inputPadConfig[6]];
                    actionkey[7] = ninname[inputPadConfig[7]];
                    actionkey[8] = ninname[inputPadConfig[8]];
                    actionkey[9] = ninname[inputPadConfig[9]];
                    actionkey[10] = ninname[inputPadConfig[10]];
                    actionkey[11] = ninname[inputPadConfig[11]];

                }

            }

            else {
                actionkey[0] = getKeyName(inputConfig.up);
                actionkey[1] = getKeyName(inputConfig.right);
                actionkey[2] = getKeyName(inputConfig.down);
                actionkey[3] = getKeyName(inputConfig.left);
                actionkey[4] = getKeyName(inputConfig.a);
                actionkey[5] = getKeyName(inputConfig.q);
                actionkey[6] = getKeyName(inputConfig.w);
                actionkey[7] = getKeyName(inputConfig.e);
                actionkey[8] = getKeyName(inputConfig.r);
                actionkey[9] = getKeyName(inputConfig.pause);
                actionkey[10] = getKeyName(inputConfig.config);
                actionkey[11] = getKeyName(inputConfig.mute);


                for (let i = 0; i < 12; i++) {
                    if (actionkey[i] === "Mousedrag") actionkey[i] = "Drag";
                    else if (actionkey[i] === "click") actionkey[i] = "Click";
                    else if (actionkey[i] === "Escape") actionkey[i] = configtext[mylangn].escape;

                }

            }


    if (boardcf > 20 && boardcf < 36 || mouse.x > 854) {
        for (let i = 21; i < 36; i++) {
            if (mousevxy !== 0 && mouse.x > configinputxy[i * 4 + 0] && mouse.x < configinputxy[i * 4 + 2] &&
                mouse.y > configinputxy[i * 4 + 1] && mouse.y < configinputxy[i * 4 + 3]) {
                boardcf = i;

            }

        }//for21~36

        for (let i = 21; i < 33; i++) {
            if (mousevxy == 0 && boardcf == i && pressKeyf && configpressanykeyn == 100 ||
                mouseDown && mouse.x > configinputxy[i * 4 + 0] && mouse.x < configinputxy[i * 4 + 2] &&
                mouse.y > configinputxy[i * 4 + 1] && mouse.y < configinputxy[i * 4 + 3] && configpressanykeyn == 100) {

                //Press Any Key1
                if ( configpressanykeyn == 100 ) configpressanykeyn = i - 21;
                if ( pressanykeywaittimer == 240) pressanykeywaittimer = 239;

            }

        }//for21~33

        if (configpressanykeyn !== 100 && pressanykeywaittimer < 236) {
            waitingKey = inputconfign[configpressanykeyn];



            //キーボード入力番号確認用
            if (waitingKey == inputconfign[configpressanykeyn]) {
                for (const key in keys) {
                    if (keys[key]) {
                        inputConfig[waitingKey] = key;
                        localStorage.setItem("inputConfig", JSON.stringify(inputConfig));
                        pressanykeywaittimer = 240;
                        waitingKey = null;
                        mouseDown = false;
                        pressKeyf = false;
                        pressCancelf = false;
                        configpressanykeyn = 100;
                        break;


                    }

                }

            }


            if (waitingKey == inputconfign[configpressanykeyn] && pressanykeywaittimer < 200) {
                const gp = getGamepad();
                //未接続エラー防止用
                if (gp) {
                    for (let i = 0; i < gp.buttons.length; i++) {
                        if (gp.buttons[i].pressed) {
                            inputPadConfig[configpressanykeyn] = i;
                            localStorage.setItem("inputPadConfig", JSON.stringify(inputPadConfig));
                            pressanykeywaittimer = 240;
                            waitingKey = null;
                            mouseDown = false;
                            pressKeyf = false;
                            configpressanykeyn = 100;
                            break;

                        }

                    }

                }

            }








        /* このコードと下のコードの両立がうまくいかない
        //Press Any Key2
        if ( configpressanykeyn !== 100 && pressanykeywaittimer < 238 ) {
        let waitingKey = inputconfign[configpressanykeyn];
        
        window.addEventListener("keydown", e => {
        if (waitingKey == inputconfign[configpressanykeyn] ) {
        inputConfig[waitingKey] = e.code; // 例: "Enter", "Space", "KeyZ"
        localStorage.setItem("inputConfig", JSON.stringify(inputConfig));
        pressanykeywaittimer = 240;
        waitingKey = null;
        configpressanykeyn = 100;
        mouseDown = false;
        pressKeyf = false;
        
        }
        
        });
        



                    if (waitingKey == inputconfign[configpressanykeyn] && pressanykeywaittimer < 200) {

                if (gp.buttons[Math.floor(pressanykeywaittimer / 10) % 16].pressed) {
                    // 新しいボタンインデックスを割り当て
                    inputConfig[waitingKey] = Math.floor(pressanykeywaittimer / 10) % 16;
                    localStorage.setItem("inputPadConfig", JSON.stringify(inputPadConfig));
                    // 待機状態を解除
                    waitingKey = null;
                    pressanykeywaittimer = 240;
                    configpressanykeyn = 100;
                    mouseDown = false;
                    pressKeyf = false;
                    //break;

                }

            }
        
        */


            if ( mousevxy > 19) {
            inputConfig[waitingKey] = "MouseDrag";
            localStorage.setItem("inputConfig", JSON.stringify(inputConfig));
            pressanykeywaittimer = 240;
            waitingKey = null;
            configpressanykeyn = 100;
            mouseDown = false;
            pressKeyf = false;

        }

            else if ( mouseDown && pressanykeywaittimer < 160) {
            inputConfig[waitingKey] = "click";
            localStorage.setItem("inputConfig", JSON.stringify(inputConfig));
            pressanykeywaittimer = 240;
            waitingKey = null;
            configpressanykeyn = 100;
            mouseDown = false;
            pressKeyf = false;


        }

        } // configpressanykeyn !== 100


        //Viberation
        if (mousevxy == 0 && boardcf == 33 && pressKeyf ||
            mouseDown && mouse.x > configinputxy[33 * 4 + 0] && mouse.x < configinputxy[33 * 4 + 2] &&
            mouse.y > configinputxy[33 * 4 + 1] && mouse.y < configinputxy[33 * 4 + 3]) {
            if ( waittimer < 1) {
            if (spf == 1 || inputn == 3 || inputn == 5) {
            if ( vibrationf == 0 ) soundf[14] = 1, vibrationf = 1, inputConfig[inputconfign[12]] = "1";
            else if (vibrationf == 1) soundf[14] = 1, vibrationf = 0, inputConfig[inputconfign[12]] = "0";
            localStorage.setItem("inputConfig", JSON.stringify(inputConfig));

            }

            else soundf[13] = 1;
            pressKeyf = false;
            mouseDown = false;
            waittimer = 90;

            }

        }

        //Retry Reset ( Go Top )ボタン入力処理
        if (mousevxy == 0 && boardcf == 34 && pressKeyf ||
            mouseDown && mouse.x > configinputxy[34 * 4 + 0] && mouse.x < configinputxy[34 * 4 + 2] &&
            mouse.y > configinputxy[34 * 4 + 1] && mouse.y < configinputxy[34 * 4 + 3]) {
            if (pressanykeywaittimer == 240) {
            pausef = 0;
            audios.voice1.currentTime = 0;
            voicef[1] = 1;
            soundf[14] = 1;
            c = 0;
            waittimer = 45;
            waittoptimer = 15;
            timer = 0;
            boardcf = 0;
            pressKeyf = false;
            mouseDown = false;
            mainroutine = 1;
            inputnvolumef = 0;
            soundresetf = 1;
            soundreset();

                if (inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7) {
                    qwername3[0] = inputConfig.q;
                    qwername3[1] = inputConfig.w;
                    qwername3[2] = inputConfig.e;
                    qwername3[3] = inputConfig.r;
                    if (qwername3[0].length !== 1) qwername3[0] = qwername3[0].replace("Key", "");
                    if (qwername3[1].length !== 1) qwername3[1] = qwername3[1].replace("Key", "");
                    if (qwername3[2].length !== 1) qwername3[2] = qwername3[2].replace("Key", "");
                    if (qwername3[3].length !== 1) qwername3[3] = qwername3[3].replace("Key", "");

                }

            }


        }


        } //boardcf > 20 && boardcf < 36 || mouse.x > 854)

        // Press Any Key timer 0になった時
            if ( pressanykeywaittimer < 1 || boardcf < 21 || boardcf > 33) {
                pressanykeywaittimer = 240;
                waitingKey = null;
                configpressanykeyn = 100;
                mouseDown = false;
                pressKeyf = false;

            }

            if (pressanykeywaittimer < 240) pressanykeywaittimer--;



        }//langconfigf == 0




        //複数言語処理
        if (langconfigf == 1) {
            for (let i = 0; i < 35; i++) {
                if (mousevxy == 0 && boardlangs == i && pressKeyf || mouseDown && mouse.x > 309 + (i % 5) * 180 && mouse.x < 489 + (i % 5) * 180 && mouse.y > 308 + Math.floor(i / 5) * 34 && mouse.y < 346 + Math.floor(i / 5) * 34 && i !== 34) {
                    if (waittimer < 1) {
                    mylangn = i;
                    langs[i];
                    lang = langs[i];
                    fontFamily = notos[i];

                    // 最後にCSSを適用する処理（これがないと画面のフォントが変わりません）
                    async function loadFont(fontFamily) {
                        const link = document.createElement("link");
                        link.rel = "stylesheet";
                        link.href =
                            `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}&display=swap`;
                        document.head.appendChild(link);
                        try {
                            await document.fonts.load(`16px "${fontFamily}"`);

                        }
                        catch (e) {
                            console.log("font load error");

                        }
                        ctx.font = `24px "${fontFamily}"`;
                        drawConfig();

                    }
                    waittimer = 45;
                    pressKeyf = false;
                    mouseDown = false;
                    langconfigf = 0;

                    }//waittimer

                }//if ( mousevxy == 0

            }//for(let i = 0; i < 35; i++){






            //複数言語ベリー色をつける
            for (let i = 0; i < 36; i++) {
                if (mousevxy !== 0 && mouse.x > configinputlangxy[i * 4 + 0] && mouse.x < configinputlangxy[i * 4 + 2] &&
                    mouse.y > configinputlangxy[i * 4 + 1] && mouse.y < configinputlangxy[i * 4 + 3]) {
                    boardlangs = i;

                }
            }



            // キャンセルの処理
            if (mousevxy == 0 && waittimer < 1 && boardlangs == 35 && pressKeyf || mouseDown &&
                mouse.x > configinputlangxy[boardlangs * 4 + 0] && mouse.x < configinputlangxy[boardlangs * 4 + 2] &&
                mouse.y > configinputlangxy[boardlangs * 4 + 1] && mouse.y < configinputlangxy[boardlangs * 4 + 3]) {
                soundf[14] = 1;
                pressKeyf = false;
                mouseDown = false;
                waittimer = 45;
                langconfigf = 0;

            }

            //複数言語を選択中に範囲外をクリックしたら、解除する
            if (mouseDown && waittimer < 0) {
                if (mouse.x < 309 || mouse.x > 1159 || mouse.y < 308 || mouse.y > 546) langconfigf = 0, mouseDown = false, soundf[14] = 1;

            }



            if (mousevxy == 0 && waittimer < 1) {
                if (inputkeys.up || keys["ArrowUp"]) {
                    if (boardlangs == 35) boardlangs = 31;
                    else if (boardlangs < 0) boardlangs = 35;
                    else boardlangs -= 5;

                    soundf[14] = 1;
                    waittimer = 45;

                }

                if (inputkeys.right || keys["ArrowRight"]) {
                    if (boardlangs == 35) boardlangs = 0;
                    else boardlangs++;
                    soundf[14] = 1;
                    waittimer = 45;

                }

                if (inputkeys.down || keys["ArrowDown"]) {
                    if (boardlangs == 35) boardlangs = 1;
                    else if (boardlangs > 29) boardlangs = 35;
                    else boardlangs += 5;
                    soundf[14] = 1;
                    waittimer = 45;

                }

                if (inputkeys.left || keys["ArrowLeft"]) {
                    boardlangs--;
                    if (boardlangs < 0) boardlangs == 35;
                    soundf[14] = 1;
                    waittimer = 45;

                }

            }

            

            if (pressCancelf && langconfigf == 1) langconfigf = 0, pressCancelf = false, soundf[14] = 1, waittimer = 45;
    }//langconfigf == 1

        lastmousex = mouse.x;
        lastmousey = mouse.y;


        //Backボタン入力処理
        if (pressCancelf && boardcf !== 26 ) {
            pausef = 0;
            if ( lastroutine == 4 ) audios.bgm0.play();
            soundf[14] = 1;
            waittimer = 45;
            waittoptimer = 15;
            if (lastroutine == 1) {
            c = 0;
            timer = 0;
            audios.bgm0.currentTime = 0;
            audios.voice1.currentTime = 0;
            audios.bgm0.pause();
            voicef[1] = 1;

            }

            boardcf = 0;
            pressKeyf = false;
            mouseDown = false;
            pressCancelf = false;
            keys = {};
            mainroutine = lastroutine;
            inputnvolumef = 0;
            soundresetf = 1;
            soundreset();
            if (inputn == 1 || inputn == 2 || inputn == 6 || inputn == 7) {
                qwername3[0] = inputConfig.q;
                qwername3[1] = inputConfig.w;
                qwername3[2] = inputConfig.e;
                qwername3[3] = inputConfig.r;
                if ( qwername3[0].length !== 1 ) qwername3[0] = qwername3[0].replace("Key", "");
                if ( qwername3[1].length !== 1 ) qwername3[1] = qwername3[1].replace("Key", "");
                if ( qwername3[2].length !== 1 ) qwername3[2] = qwername3[2].replace("Key", "");
                if ( qwername3[3].length !== 1 ) qwername3[3] = qwername3[3].replace("Key", "");

            }

        }

        pressCancelf = false;

        waittimer--;

}//routine2

}//configprocess