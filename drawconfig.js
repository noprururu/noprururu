

/////////////////////////////////////////////////////
// ループ開始 描画専門
/////////////////////////////////////////////////////
function drawconfig() {
    if (mainroutine == 2) {
        // マップ表示番号
        let mapn = Math.floor(c / 702) % 10;
        // マップ内スクロール位置
        let mapx = Math.floor(c % 702);
        let mapy = 0;

        for (let i = 0; i < 3; i++) {
            try {
                // マップ描画
                ctx.drawImage(images["bg" + ( ( ( mapn + i ) % 10 ) + mapgq )], -mapx + 702 * i, mapy);
            } catch (e) {
                // エラー時は何もしない
            }

        }


            // フリル
            //ctx.drawImage(images["topfrill"], 0,0 );

            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.miterLimit = 10;

        /////////////////////////////////////////////////////
        // 全面塗り
        /////////////////////////////////////////////////////
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 1280, 720);
        ctx.globalAlpha = 1;


        /////////////////////////////////////////////////////
        // Graphics 処理描画
        /////////////////////////////////////////////////////
        // Graphics Font
        if (langconfigf == 0 ) {
    
    
            /////////////////////////////////////////////////////
            // 最上部Config表示
            /////////////////////////////////////////////////////
    
    
            ctx.font = "bold 36px sans-serif";
            ctx.fillStyle = "#EDEFF2";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(configtext[mylangn].title, 640, 56);
    
    
            /////////////////////////////////////////////////////
            // Graphics Full Screen Display Quality Low Spec Mode Language表示
            /////////////////////////////////////////////////////
            ctx.fillStyle = "#EDEFF2";
            if (leftrightf[mylangn] == 0) ctx.textAlign = "left";
            else ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            ctx.font = "bold 24px sans-serif";
            // Graphics
            ctx.fillText(configtext[mylangn].graphics, leftrightcfx[0 + 5 * leftrightf[mylangn]], 96);
            ctx.font = "bold 22px sans-serif";
            // Full Screen
            ctx.fillText(configtext[mylangn].fullscreen, leftrightcfx[1 + 5 * leftrightf[mylangn]], 135);
            // Display Quality
            ctx.fillText(configtext[mylangn].displayquality, leftrightcfx[1 + 5 * leftrightf[mylangn]], 199);
            ctx.font = "bold 22px sans-serif";
            ctx.fillText(configtext[mylangn].lowspecmode, leftrightcfx[1 + 5 * leftrightf[mylangn]], 265);
            // Language
            ctx.font = "bold 24px sans-serif";
            ctx.fillText(configtext[mylangn].lang, leftrightcfx[0 + 5 * leftrightf[mylangn]], 386);
            // Volume font
            ctx.fillText(configtext[mylangn].volume, leftrightcfx[2 + 5 * leftrightf[mylangn]], 97);
            // Input font
            ctx.fillText(configtext[mylangn].input, leftrightcfx[2 + 5 * leftrightf[mylangn]], 392);
            // PC font
            ctx.font = "bold 18px sans-serif";
            if (pcf == 1) ctx.fillStyle = "#EDEFF2";
            else ctx.fillStyle = "#404040";
            ctx.fillText(configtext[mylangn].pc, leftrightcfx[3 + 5 * leftrightf[mylangn]], 435);
            if (spf == 1) ctx.fillStyle = "#EDEFF2";
            else ctx.fillStyle = "#404040";
            // Smart Phone or Tablet
            ctx.fillText(configtext[mylangn].smartphoneortablet, leftrightcfx[3 + 5 * leftrightf[mylangn]], 596);
            ctx.font = "bold 24px sans-serif";
            ctx.fillStyle = "#EDEFF2";
            // Customize
            ctx.fillText(configtext[mylangn].customize, leftrightcfx[4 + 5 * leftrightf[mylangn]], 97);
    
    
            ctx.font = "bold 18px sans-serif";
            ctx.textAlign = "center";
    
            if (fulldisplayf == 0) {
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].on, 142, 165);
                ctx.fillStyle = "#EDEFF2";
                ctx.fillText(configtext[mylangn].off, 285, 165);
    
            }
    
            else if (fulldisplayf == 1) {
                ctx.fillStyle = "#EDEFF2";
                ctx.fillText(configtext[mylangn].on, 142, 165);
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].off, 285, 165);
    
            }
    
            if (displayqualityf == 2) {
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].low, 107, 231);
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].middle, 214, 231);
                ctx.fillStyle = "#EDEFF2";
                ctx.fillText(configtext[mylangn].high, 320, 231);
    
            }
    
            else if (displayqualityf == 1) {
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].low, 107, 231);
                ctx.fillStyle = "#EDEFF2";
                ctx.fillText(configtext[mylangn].middle, 214, 231);
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].high, 320, 231);
    
            }
    
            else if (displayqualityf == 0) {
                ctx.fillStyle = "#EDEFF2";
                ctx.fillText(configtext[mylangn].low, 107, 231);
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].middle, 214, 231);
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].high, 320, 231);
    
            }
    
            if (lowsupecmodef == 1) {
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].on, 142, 293);
                ctx.fillStyle = "#EDEFF2";
                ctx.fillText(configtext[mylangn].off, 285, 293);
    
            }
    
            else if (lowsupecmodef == 0) {
                ctx.fillStyle = "#EDEFF2";
                ctx.fillText(configtext[mylangn].on, 142, 293);
                ctx.fillStyle = "#404040";
                ctx.fillText(configtext[mylangn].off, 285, 293);
    
            }
    
            ctx.font = "bold 16px sans-serif";
            ctx.fillText(configtext[mylangn].ifthe1, 216, 322);
            ctx.fillText(configtext[mylangn].ifthe2, 216, 346);
    

    



        /////////////////////////////////////////////////////
        // 言語
        /////////////////////////////////////////////////////
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#EDEFF2";
        ctx.fillStyle = "#404040";
        ctx.beginPath();
        ctx.moveTo(95, 410);
        ctx.lineTo(275, 410);
        ctx.lineTo(275, 444);
        ctx.lineTo(95, 444);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(275, 410);
        ctx.lineTo(309, 410);
        ctx.lineTo(309, 444);
        ctx.lineTo(275, 444);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(285, 420);
        ctx.lineTo(299, 427);
        ctx.lineTo(285, 434);
        ctx.closePath();
        ctx.stroke();


        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 18px sans-serif";
        ctx.fillStyle = "#EDEFF2";
        ctx.fillText(langsnames[mylangn], 185, 427);


    } // langconfigf == 0

    /////////////////////////////////////////////////////
    // 音量設定 Input表示
    /////////////////////////////////////////////////////
    if (langconfigf == 0) {

        for (let i = 0; i < 4; i++) {

            // Volume 塗り
            ctx.lineWidth = 2;
            //ctx.fillStyle = "#4A4652";
            ctx.fillStyle = "#5B496D";
            ctx.fillRect(580, 135 + i * 50, 215, 30);
            ctx.strokeStyle = "#EDEFF2";
            ctx.strokeRect(580, 135 + i * 50, 215, 30);
            ctx.closePath();


            // Volume 中央横線
            ctx.strokeStyle = "#EDEFF2";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(580, 150 + i * 50);
            ctx.lineTo(795, 150 + i * 50);
            ctx.closePath();
            ctx.stroke();

            // Volume Slider
            ctx.strokeStyle = "#EDEFF2";
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.moveTo(580 + 215 * lastvol[i], 138 + i * 50);
            ctx.lineTo(580 + 215 * lastvol[i], 162 + i * 50);
            ctx.closePath();
            ctx.stroke();

            // Volume Font
            ctx.font = "bold 16px sans-serif";
            ctx.fillStyle = "#EDEFF2";
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            if (i == 0) ctx.fillText(configtext[mylangn].mastervolume, 560, 150 + i * 50);
            else if (i == 1) ctx.fillText(configtext[mylangn].bgm, 560, 150 + i * 50);
            else if (i == 2) ctx.fillText(configtext[mylangn].soundeffect, 560, 150 + i * 50);
            else if (i == 3) ctx.fillText(configtext[mylangn].voice, 560, 150 + i * 50);
            ctx.fillText(Math.floor(lastvol[i] * 100), 825, 150 + i * 50);

        }

    }


    // Input 下部表示
    if (langconfigf == 0) {
        ctx.font = "bold 18px sans-serif";
        ctx.textAlign = "center";
        if (pcf == 1) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";

        if (pcf == 1 && inputn == 0) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.fillText(configtext[mylangn].mouseandqwer, 427 + 107, 457);
        ctx.font = "bold 16px sans-serif";
        ctx.fillText(configtext[mylangn].clickanddrag, 427 + 107, 483);

        ctx.font = "bold 18px sans-serif";
        if (pcf == 1 && inputn == 1) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.fillText(configtext[mylangn].uemigi, 427 + 320, 475);

        ctx.font = "bold 18px sans-serif";
        if (pcf == 1 && inputn == 2) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.fillText(configtext[mylangn].wasdandqecx, 427 + 107, 521);
        ctx.font = "bold 16px sans-serif";
        ctx.fillText(configtext[mylangn].click0, 427 + 107, 547);

        ctx.font = "bold 18px sans-serif";
        if (pcf == 1 && inputn == 3) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.fillText(configtext[mylangn].gamepad, 427 + 320, 535);


        //横線
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#404040";
        ctx.beginPath();
        ctx.moveTo(450, 570);
        ctx.lineTo(810, 570);
        ctx.closePath();
        ctx.stroke();


        // Smart Phone
        if (spf == 1) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.textAlign = "center";

        ctx.font = "bold 18px sans-serif";
        if (spf == 1 && inputn == 4 || spf == 1 && pcf == 1 && inputn == 4) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.fillText(configtext[mylangn].touchgestures, 427 + 107, 631);

        ctx.font = "bold 18px sans-serif";
        if (spf == 1 && inputn == 5 || spf == 1 && pcf == 1 && inputn == 5) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.fillText(configtext[mylangn].gamepad, 427 + 320, 631);

        ctx.font = "bold 18px sans-serif";
        if (spf == 1 && inputn == 6 || spf == 1 && pcf == 1 && inputn == 6) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.fillText(configtext[mylangn].onkeyboard, 427 + 107, 671);

        ctx.font = "bold 18px sans-serif";
        if (spf == 1 && inputn == 7 || spf == 1 && pcf == 1 && inputn == 7) ctx.fillStyle = "#EDEFF2";
        else ctx.fillStyle = "#404040";
        ctx.fillText(configtext[mylangn].onmouseandkeyboard, 427 + 320, 671);

    } // langconfigf == 0




    /////////////////////////////////////////////////////
    // Customize 描画
    /////////////////////////////////////////////////////
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 16px sans-serif";
    ctx.lineWidth = 2;
    if (langconfigf == 0) {

        // Customize 塗り
            for (let i = 0; i < 13; i++) {
            ctx.strokeStyle = "#4A4652";
            ctx.fillStyle = "#101010";
            ctx.beginPath();
            ctx.moveTo(870, 124 + i * 32);
            ctx.lineTo(1260, 124 + i * 32);
            ctx.lineTo(1260, 150 + i * 32);
            ctx.lineTo(870, 150 + i * 32);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "#EDEFF2";


            if ( i == 0 ){ ctx.fillText(configtext[mylangn].up , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            
            
            else if ( i == 1 ) {
            ctx.fillText(configtext[mylangn].right , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 2 ) {
            ctx.fillText(configtext[mylangn].down , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 3 ) {
            ctx.fillText(configtext[mylangn].left , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 4 ) {
            ctx.fillText(configtext[mylangn].attackandok , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 5 ) {
            ctx.fillText(configtext[mylangn].skill1andcancel , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 6 ) {
            ctx.fillText(configtext[mylangn].skill2 , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 7 ) {
            ctx.fillText(configtext[mylangn].skill3 , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 8 ) {
            ctx.fillText(configtext[mylangn].skill4 , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 9 ) {
            ctx.fillText(configtext[mylangn].pause , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 10 ) {
            ctx.fillText(configtext[mylangn].config , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 11 ) {
            ctx.fillText(configtext[mylangn].mute , 980, 137 + i * 32);
            if ( i == configpressanykeyn ) ctx.fillText("Press Any Key", 1140 , 137 + i * 32);
            else ctx.fillText(actionkey[i], 1140 , 137 + i * 32);
            
            }
            
            else if ( i == 12 && pcf == 1 && gamepadf == 0 ){
            ctx.fillStyle = "#404040";
            ctx.fillText(configtext[mylangn].vibration , 980, 137 + i * 32);
            ctx.fillText(configtext[mylangn].on, 1100 , 137 + i * 32);
            ctx.fillText(configtext[mylangn].off, 1200 , 137 + i * 32);
            
            }
            
            else if ( i == 12 && pcf == 0 || i == 12 && gamepadf == 1 ){
            ctx.fillStyle = "#EDEFF2";
            ctx.fillText(configtext[mylangn].vibration , 980, 137 + i * 32);
            
            }
            
            if ( i == 12 && pcf == 0 && vibrationf == 1 || i == 12 && gamepadf == 1 && vibrationf == 1 ){
            ctx.fillStyle = "#EDEFF2";
            ctx.fillText(configtext[mylangn].on, 1100 , 137 + i * 32);
            ctx.fillStyle = "#404040";
            ctx.fillText(configtext[mylangn].off, 1200 , 137 + i * 32);
            
            }
            
            if ( i == 12 && pcf == 0 && vibrationf == 0 || i == 12 && gamepadf == 1 && vibrationf == 0 ){
            ctx.fillStyle = "#404040";
            ctx.fillText(configtext[mylangn].on, 1100 , 137 + i * 32);
            ctx.fillStyle = "#EDEFF2";
            ctx.fillText(configtext[mylangn].off, 1200 , 137 + i * 32);
            
            }

        }// for 0~13

        ctx.lineWidth = 4;

        // Backボタン塗り
        ctx.fillStyle = "#5B496D";
        ctx.fillRect(40, canvas.height - 130, 300, 96);

        // Backボタン輪郭
        ctx.strokeStyle = "#EDEFF2";
        ctx.strokeRect(40, canvas.height - 130, 300, 96);
        ctx.beginPath();

        // Backボタンフォント
        ctx.font = "bold 20px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "#050505"; // 文字ふち色
        ctx.lineWidth = 4;         // 文字ふちの太さ
        ctx.fillStyle = "#EDEFF2";

        ctx.strokeText(configtext[mylangn].back, 190, canvas.height - 84);
        ctx.fillText(configtext[mylangn].back, 190, canvas.height - 84);


        // Reset Gameボタン塗り
        ctx.fillStyle = "#5B496D";
        ctx.fillRect(canvas.width - 340, canvas.height - 130, 300, 96);

        // Reset Game輪郭
        ctx.strokeStyle = "#EDEFF2";
        ctx.lineWidth = 4;
        ctx.strokeRect(canvas.width - 340, canvas.height - 130, 300, 96);
        ctx.closePath();
        ctx.beginPath();

        // Reset Gameボタンフォント
        ctx.font = "bold 20px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "#050505"; // 文字ふち色
        ctx.closePath();
        ctx.lineWidth = 4;         // 文字ふちの太さ
        ctx.fillStyle = "#EDEFF2";

        ctx.strokeText(configtext[mylangn].resetgame, canvas.width - 188, canvas.height - 83);
        ctx.fillText(configtext[mylangn].resetgame, canvas.width - 188, canvas.height - 83);


        // キー、ゲームパッド、描画 ラズベリー色 #5B496Dこの暗い紫色もすき
            ctx.lineWidth = 3;
            ctx.globalAlpha = 0.3;
            ctx.beginPath();
            ctx.moveTo(configinputxy[boardcf * 4 + 0], configinputxy[boardcf * 4 + 1]);
            ctx.lineTo(configinputxy[boardcf * 4 + 2], configinputxy[boardcf * 4 + 1]);
            ctx.lineTo(configinputxy[boardcf * 4 + 2], configinputxy[boardcf * 4 + 3]);
            ctx.lineTo(configinputxy[boardcf * 4 + 0], configinputxy[boardcf * 4 + 3]);
            ctx.closePath();
            ctx.fillStyle = "#6E3B5E";
            ctx.fill();
            ctx.strokeStyle = "#8A7123";
            ctx.stroke();
            ctx.globalAlpha = 1;

          } // langconfigf == 0


        if (langconfigf == 1) {
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, 1280, 720);
            ctx.globalAlpha = 1;
            for (let i = 0; i < 35; i++) {
                ctx.lineWidth = 2;
                ctx.fillStyle = "#404040";
                ctx.fillRect(309 + (i % 5) * 180, 308 + Math.floor(i / 5) * 34, 180, 34);
                ctx.strokeStyle = "#EDEFF2";
                ctx.strokeRect(309 + (i % 5) * 180, 308 + Math.floor(i / 5) * 34, 180, 34);
                ctx.closePath();
                ctx.stroke();

                ctx.fillStyle = "#EDEFF2";
                if (i < 34) ctx.fillText(langsnames[i], 399 + (i % 5) * 180, 325 + Math.floor(i / 5) * 34);
                else ctx.fillText("---", 399 + (i % 5) * 180, 325 + Math.floor(i / 5) * 34);

            }//for 0~35

            // Back 複数言語から戻る作成
            ctx.lineWidth = 2;
            ctx.fillStyle = "#404040";
            ctx.fillRect(540, 570, 200, 40);
            ctx.strokeStyle = "#EDEFF2";
            ctx.strokeRect(540, 570, 200, 40);
            ctx.font = "bold 20px sans-serif";
            ctx.textAlign = "center";
            ctx.strokeStyle = "#050505";
            ctx.fillStyle = "#EDEFF2";
            ctx.strokeText(configtext[mylangn].back, 640, 590);
            ctx.fillText(configtext[mylangn].back, 640, 590);

            ctx.font = "bold 18px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

           // キー、ゲームパッド、描画 複数言語用 ラズベリー色
            ctx.lineWidth = 3;
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.moveTo(configinputlangxy[boardlangs * 4 + 0], configinputlangxy[boardlangs * 4 + 1]);
            ctx.lineTo(configinputlangxy[boardlangs * 4 + 2], configinputlangxy[boardlangs * 4 + 1]);
            ctx.lineTo(configinputlangxy[boardlangs * 4 + 2], configinputlangxy[boardlangs * 4 + 3]);
            ctx.lineTo(configinputlangxy[boardlangs * 4 + 0], configinputlangxy[boardlangs * 4 + 3]);
            ctx.closePath();
            ctx.fillStyle = "#6E3B5E";
            ctx.fill();
            ctx.strokeStyle = "#8A7123";
            ctx.stroke();
            ctx.globalAlpha = 1;

            } //langconfigf == 1






    /*
    // 全部ベリー色デバッグ用に残す
    // 入力選択表示塗りつぶし
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.5;
    for(let i = 0; i < 35; i++){
    ctx.beginPath();
    ctx.moveTo( configinputxy[i*4+0] , configinputxy[i*4+1] );
    ctx.lineTo( configinputxy[i*4+2] , configinputxy[i*4+1] );
    ctx.lineTo( configinputxy[i*4+2] , configinputxy[i*4+3] );
    ctx.lineTo( configinputxy[i*4+0] , configinputxy[i*4+3] );
    ctx.closePath();
    ctx.fillStyle = "#6E3B5E";
    ctx.fill();
    ctx.strokeStyle = "#D4AF37";
    ctx.stroke();
    
    }
    ctx.globalAlpha = 1;
    */

    /*
    //デバッグ
    ctx.textAlign = "right";
    ctx.font = "bold 20px MS UI Gothic";
    ctx.fillStyle = "#EDEFF2";
    ctx.fillText(Math.floor(timer*10)/10,canvas.width - 40,640);
    //デバッグ
    ctx.font = "bold 20px MS UI Gothic";
    ctx.fillStyle = "#EDEFF2";
    ctx.fillText(Math.floor(mouse.x) + " , " + Math.floor(mouse.y),canvas.width - 40,660);
    
    */


}//routine2



}//draw