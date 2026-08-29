let mobtalk = []; // 国,mobid,talknum


for(let i = 0; i < 34; i++){
    mobtalk[i] = [];

    for(let j = 0; j < 11; j++){
        mobtalk[i][j] = [];

        for(let k = 0; k < 8; k++){
            mobtalk[i][j][k] = 0;
        }
    }
}


/*
// 国=12, mobid=0 のセリフ
mobtalk[12] = [];
mobtalk[12][0] = [];
*/



//右から書く

//0. موسباتو (Mosubatto)
mobtalk[0][0][0]=["مرحبًا. أنا موسباتو",
"تشرفت بمقابلتك"];
mobtalk[0][0][1]=["ممرحبًا. كيف حالك؟",
"أنا بخير!"];
mobtalk[0][0][2]=["أنا الوحش الذي يظهر في البرنامج التعليمي"];
mobtalk[0][0][3]=["هذا الرشاش الصغير ضعيف لدرجة تثير الضحك",
"أليس كذلك؟"];
mobtalk[0][0][4]=["هل تريد أن نصبح أصدقاء؟",
"أولاً، لا تطلق النار من ذلك السلاح"];
mobtalk[0][0][5]=["هل تناولت طعامك جيداً؟",
"لا تلعب الألعاب طوال الوقت، عليك أن تأكل"];
mobtalk[0][0][6]=["هل أنت بخير؟ يبدو أن لديك الطاقة الكافية للعب",
"هذا جيد"];
mobtalk[0][0][7]=["هل تستمتع بوقتك؟ يجب أن نستمتع بكل شيء"];
//1. باروبواي (Parupuai)
mobtalk[0][1][0]=["لقد جئت! هيا بنا!"];
mobtalk[0][1][1]=["أهلاً بك!"];
mobtalk[0][1][2]=["مفاجأة!",
"استيقظ، استيقظ! إنه الصباح!"];
mobtalk[0][1][3]=["هل تريد التحدث معي عن الحب؟"];
mobtalk[0][1][4]=["أنا باروبواي!"];
mobtalk[0][1][5]=["أنا بولب آي!"];
//2. روبيدفي (Rubidevi)
mobtalk[0][2][0] = ["وجه غير مألوف"];
mobtalk[0][2][1] = ["أنت. من أين أتيت؟"];
mobtalk[0][2][2] = ["يا لها من فتاة لطيفة"];
mobtalk[0][2][3] = ["لأنها لعبة، فلنقاتل بكل قوتنا"];
mobtalk[0][2][4] = ["أزياء لا نراها في هذه المدينة"];
mobtalk[0][2][5] = ["أعجبتني. إنها أنيقة جدًا"];
mobtalk[0][2][6] = ["تعتقد أنني شيطانة، أليس كذلك؟",
"أنا شيطانة"];
mobtalk[0][2][7] = ["اسمي روبيدفي",
"تشرفت بمقابلتك"];
//3. كيلر نيدل (Kirānīdu~ru)
mobtalk[0][3][0] = ["بون بون بون"];
mobtalk[0][3][1] = ["لا فائدة من التحدث مع البشر"];
mobtalk[0][3][2] = ["احذر من أن تلسعك إبرة النحلة"];
mobtalk[0][3][3] = ["لأنني أمتلك سمًا!"];
mobtalk[0][3][4] = ["اسمي كيرانييدل",
"كما يوحي اسمي، كير (قاتل) ونييدل (إبرة)"];
//4. بريزهاك (Purizuhāku)
mobtalk[0][4][0] = ["هل ظننت أن الطيور لا تتكلم؟"];
mobtalk[0][4][1] = ["أنا إنسان يتظاهر بأنه طائر"];
mobtalk[0][4][2] = ["ألا تظن أن الطيور جميلة؟"];
mobtalk[0][4][3] = ["البشر ينجذبون",
"إلى الأشياء الجميلة"];
mobtalk[0][4][4] = ["لحم الدجاج لذيذ، أليس كذلك؟",
"الطيور تأكل لحم الدجاج"];
//5. بونريس (Bōnreisu)
mobtalk[0][5][0] = ["ستصبح أنت أيضًا مثلي يومًا ما"];
mobtalk[0][5][1] = ["كن سعيدًا أثناء حياتك. هل أنت سعيد؟"];
mobtalk[0][5][2] = ["هناك الكثير مما يمكن فعله أثناء الحياة. لنحيا دون ندم"];
//6. سكاي آيز (Sukaiaizu)
mobtalk[0][6][0] = ["بيبي بيبي بيبي"];
mobtalk[0][6][1] = ["شخص مشبوه، تم الكشف عن حالة غير طبيعية،",
"بيبي بيبي بيبي"];
mobtalk[0][6][2] = ["قيد الحراسة"];
mobtalk[0][6][3] = ["قيد الدورية"];
mobtalk[0][6][4] = ["لا تضعني في نفس فئة الروبوتات الخردة"];
//7. باندوريك (Bānudoreiku)
mobtalk[0][7][0] = ["غياوووووووووووووووو"];
mobtalk[0][7][1] = ["لست في مزاج للتحدث معك الآن"];
mobtalk[0][7][2] = ["اسمي باندوريك، اسم رائع أليس كذلك؟"];
mobtalk[0][7][3] = ["لا أحب التحدث",
"ألا أبدو ضعيفًا عندما أتحدث؟"];
//8. أنا ميستيلا.
mobtalk[0][8][0] = ["هل لديك شيء تريده من الساكيباس؟",
"أنت لا تحتاج",
"إلى ساكوباس"];
mobtalk[0][8][1] = ["ماذا؟ هل أنت ساكوباس أيضًا؟",
"لا أعتقد ذلك أبدًا"];
mobtalk[0][8][2] = ["ليس عليك",
"التحدث مع ساكوباس"];
mobtalk[0][8][3] = ["هل تريد أن تصبح ساكوباس؟",
"لا أريدك أن تهتم بالأمر"];
//9. لومييرا
mobtalk[0][9][0] = ["مرحبًا. أنا لومييرا",
"هل تلعب؟",
"أنا من يلعب"];
mobtalk[0][9][1] = ["لقد وجدت",
"شريكًا مناسبًا",
"للعب"];
mobtalk[0][9][2] = ["هل تسخر مني؟",
"أنت مرحب بك دائمًا"];
mobtalk[0][9][3] = ["هل جئت لتخسر؟",
"أنت مرحب بك في أي وقت"];
mobtalk[0][9][4] = ["ليس لدي وقت للعب معك",
"أنت تعرف ذلك، أليس كذلك؟"];
//10. فالميريا
mobtalk[0][10][0] = ["اسمي فالميريا",
"أكثر امرأة سحرية بين الساكوباس",
"لقد وجدت خصمًا لأقاتله!"];
mobtalk[0][10][1] = ["كيف وصلت إلى هنا؟",
"أخيرًا حان دوري!",
"هيا، هاجمني في أي وقت!"];
mobtalk[0][10][2] = ["يمكنك أن تأتي مرارًا وتكرارًا",
"أنت مرحب بك في أي وقت",
"حسنًا، لنقاتل!"];
//0. Mosubatto
mobtalk[1][0][0]=["Səni tanımaq xoşdur.",
"Mən Mosubattoyam.",
"Səni tanımaqdan məmnunam."];
mobtalk[1][0][1]=["Salam. Necəsən?",
"Mən əlayam!"];
mobtalk[1][0][2]=["Mən dərslikdəki canavaram."];
mobtalk[1][0][3]=["O tapança gülməli dərəcədə zəifdir,",
"elə deyilmi?"];
mobtalk[1][0][4]=["Dost olaq?",
"Əvvəlcə, zəhmət olmasa,",
"o silahı atəşə tutma."];
mobtalk[1][0][5]=["Yaxşı-yaxşı yemisən?",
"Həmişə oyun oynamayın yeməlisən,",
"bilirsən."];
mobtalk[1][0][6]=["Yaxşısan? Görünür,",
"oyun oynamağa enerjinin var.",
"Yaxşıdır."];
mobtalk[1][0][7]=["Zövq alırsan?",
"Həyatda hər şeydən zövq almalısan."];
//1. Parupuai
mobtalk[1][1][0]=["Mən buradayam! Gəlin gedək!"];
mobtalk[1][1][1]=["Buyur!"];
mobtalk[1][1][2]=["Sürpriz!"];
mobtalk[1][1][3]=["Oyan, oyan! Səhərdir!"];
mobtalk[1][1][4]=["Mənimlə … danışmaq istəyirsən.  ",
"məhəbbətdən."];
mobtalk[1][1][5]=["Mən Parupuai-yəm!"];
//2. Rubidevi
mobtalk[1][2][0]=["Yad adam kimi görünürsən."];
mobtalk[1][2][1]=["Sən ora. Haradan gəlmisən?"];
mobtalk[1][2][2]=["Çox gözəl qızsan, elə deyilmi?"];
mobtalk[1][2][3]=["Bu bir oyundur,",
"ona görə də əlimizdən gələni edək."];
mobtalk[1][2][4]=["Bu şəhərdə görmədiyim bir üslubdur."];
mobtalk[1][2][5]=["Mənə xoş gəlir. Sən çox zövqlüsan."];
mobtalk[1][2][6]=["Məni şeytan hesab edirsən, elə deyilmi?",
"Mən şeytanın özüyəm."];
mobtalk[1][2][7]=["Mənim adım Rubidevi.",
"Tanıdığım üçün şadam."];
//3. Killer Needle
mobtalk[1][3][0]=["Züm züm zümzz"];
mobtalk[1][3][1]=["İnsanlarla danışmağın.",
"heç bir mənası yoxdur."];
mobtalk[1][3][2]=["Yalnız arının sancısından qorun."];
mobtalk[1][3][3]=["Mənim zəhərim var, görürsən!"];
mobtalk[1][3][4]=["Mənim adım Killer Needle-dir.",
"Adımdan da aydındır: Killer və Needle."];
//4. Prizuhaku
mobtalk[1][4][0]=["Quşların danışa bilməyəcəyini düşünürdün?"];
mobtalk[1][4][1]=["Mən quş kimi davranan bir insanam."];
mobtalk[1][4][2]=["Quşların gözəl olduğunu düşünmürsən?"];
mobtalk[1][4][3]=["İnsanlar sadəcə gözəl şeylərə",
"cəlb olunmaqdan özlərini saxlaya bilmirlər."];
mobtalk[1][4][4]=["Tavuk dadlıdır, elə deyilmi?",
"Quşlar tavuk yeyirlər."];
//5. Sümük Biçən (Bōnreisu)
mobtalk[1][5][0]=["Bir gün sən də mənim kimi olacaqsan."];
mobtalk[1][5][1]=["Yaşayarkən xoşbəxt olmağından əmin ol.",
"Sən xoşbəxtsən?"];
mobtalk[1][5][2]=["Yaşayarkən çox şey edə bilərsən.",
"Gəlin peşmansız yaşayaq."];
//6. Göy Gözlər (Sukaiaizu)
mobtalk[1][6][0]=["Bip bip bip bip"];
mobtalk[1][6][1]=["Maraqlı şəxs. Anomaliya aşkarlanıb.",
"Bip bip bip bip"];
mobtalk[1][6][2]=["Patrulda"];
mobtalk[1][6][3]=["Patrulda"];
mobtalk[1][6][4]=["Məni o köhnəlmiş robotlarla",
"eyni kəmərdə sayma"];
//7. Burn Drake
mobtalk[1][7][0]=["Gyaaaaaaaaaaaaaaaaaaa"];
mobtalk[1][7][1]=["İndi səninlə danışmaq əhvalım deyil"];
mobtalk[1][7][2]=["Mənim adım Burn Drake-dir.",
"Yaxşı ad deyilmi?"];
mobtalk[1][7][3]=["Danışmaq xoşuma gəlmir",
"Danışanda zəif görünürəm, elə deyilmi?"];
//8. Bu Mysteira-dır.
mobtalk[1][8][0]=["Sukkubdan nə istəyirsən?",
"Sənə",
"sukkubusa ehtiyacın yoxdur"];
mobtalk[1][8][1]=["Nə? Sən də sukubus san?",
"Məncə elə deyil"];
mobtalk[1][8][2]=["Sənə",
"sukkubusla danışmağa ehtiyacın yoxdur"];
mobtalk[1][8][3]=["Sən sukubus olmaq istəyirsən?",
"Mənimlə maraqlanmanı istəmirəm"];
//9. Lumiera
mobtalk[1][9][0]=["U-hu. Mən Lumiera-yam",
"Oynayırsan?",
"Mən oyun oynayıram"];
mobtalk[1][9][1]=["Mən indi tapmışam",
"ideal oyun yoldaşını"];
mobtalk[1][9][2]=["Məni alay edirsən?",
"Hər zaman xoş gəlmisən"];
mobtalk[1][9][3]=["Uduzmağa gəlmisən?",
"Həmişə xoş gəlmisən."];
mobtalk[1][9][4]=["Səninlə oynamağa vaxtım yoxdur.",
"Bunu bilirsən, elə deyilmi?"];
//10.Valmeria
mobtalk[1][10][0]=["Mənim adım Valmeria.",
"Sukkublar arasında ən cazibədar qadın.",
"Döyüşəcəyim birini tapmışam!"];
mobtalk[1][10][1]=["Maraqlıdır, bura necə gəlib çatmısan?",
"Nəhayət, növbəm gəlib çatıb!",
"İstədiyin vaxt üzərimə gəl!"];
mobtalk[1][10][2]=["İstədiyin qədər gələ bilərsən.",
"Həmişə xoş gəlmisən.",
"Bəs, gəlin döyüşək!"];
//০. মোসুবাট্টো
mobtalk[2][0][0]=["আপনাকে দেখে",
"ভালো লাগলো",
"আমি মোসুবাট্টো।"];
mobtalk[2][0][1]=["হ্যালো। কেমন আছেন?",
"আমি দারুণ আছি!"];
mobtalk[2][0][2]=["আমি টিউটোরিয়ালের",
"সেই দানব"];
mobtalk[2][0][3]=["ওই সাবমেশিন গানটা",
"হাস্যকরভাবে দুর্বল, তাই না?"];
mobtalk[2][0][4]=["বন্ধু হতে চান?",
"প্রথমে, দয়া করে",
"ওই বন্দুকটি চালাবেন না"];
mobtalk[2][0][5]=["ভাল করে খেয়েছ?",
"সারাক্ষণ শুধু গেম খেলো না",
"তোমাকে খেতে হবে, বুঝলে?"];
mobtalk[2][0][6]=["তুমি ঠিক আছ? ভাল কথা।",
"তোমাকে দেখে মনে হচ্ছে",
"গেম খেলার মতো",
"অনেক এনার্জি আছে"];
mobtalk[2][0][7]=["তুমি কি মজা পাচ্ছ?",
"জীবনের সবকিছুই",
"উপভোগ করতে হবে"];
//১. পারুপুআই(1)
mobtalk[2][1][0]=["আমি এখানে! চল যাই!"];
mobtalk[2][1][1]=["স্বাগতম!"];
mobtalk[2][1][2]=["সারপ্রাইজ!"];
mobtalk[2][1][3]=["জাগো, জাগো! সকাল হয়ে গেছে!"];
mobtalk[2][1][4] = ["ভালবাসা নিয়ে কথা বলবে?"];
mobtalk[2][1][5] = ["আমি পাল্প আই!"];
//২. রুবিদেবী(2)
mobtalk[2][2][0]=["তুমি অচেনা লাগছো।"];
mobtalk[2][2][1]=["এই যে। তুমি কোথা থেকে এসেছ?"];
mobtalk[2][2][2]=["তুমি তো সুন্দর মেয়ে, তাই না?"];
mobtalk[2][2][3]=["এটা একটা খেলা",
"তাই পুরোটা দিয়ে খেলি"];
mobtalk[2][2][4]=["এই স্টাইল আমি",
"এই শহরে দেখি না।"];
mobtalk[2][2][5]=["আমার পছন্দ হয়েছে।",
"এটা খুব স্টাইলিশ।"];
mobtalk[2][2][6]=["তুমি ভাবছো আমিএকটা দৈত্য,",
"তাই না?",
"আমি একজন শয়তান।"];
mobtalk[2][2][7]=["আমার নাম রুবিদেবী।",
"তোমাকে দেখে ভালো লাগলো।"];
//৩. কিলার নিডল(3)
mobtalk[2][3][0]=["ভন ভন ভন ভন"];
mobtalk[2][3][1]=["মানুষের সাথে কথা বলার",
"কোনো মানে নেই"];
mobtalk[2][3][2]=["শুধু খেয়াল রাখিস",
"মৌমাছির হুল ফোটায় না"];
mobtalk[2][3][3]=["আমার কাছে বিষ আছে, বুঝলি!"];
mobtalk[2][3][4]=["আমার নাম কিলার নিডল।",
"নামটাই যেমন: কিলার আর নিডল।"];
//৪. প্রিজহার্ক (পুরিজাহাকু)(4)
mobtalk[2][4][0]=["তুমি কি ভেবেছিলে",
"পাখিরা কথা বলতে পারে না?"];
mobtalk[2][4][1]=["আমি একজন মানুষ,",
"পাখি সেজে আছি।"];
mobtalk[2][4][2]=["তুমি কি মনে করো না",
"পাখিরা সুন্দর?"];
mobtalk[2][4][3]=["মানুষ সুন্দর জিনিসের",
"প্রতি আকৃষ্ট হতে বাধ্য।"];
mobtalk[2][4][4]=["মুরগি তো সুস্বাদু, তাই না?",
"পাখিরা মুরগি খায়।"];
//৫. বোন রিপার (বোনরেইসু)(5)
mobtalk[2][5][0]=["একদিন, তোমারও আমার",
"মতোই অবস্থা হবে।"];
mobtalk[2][5][1]=["বেঁচে থাকতে যত খুশি",
"থাকতে চেষ্টা করো।",
"তুমি কি খুশি?"];
mobtalk[2][5][2]=["বেঁচে থাকতে অনেক কিছু",
"করা যায়।চল, কোনো",
"অনুশোচনা ছাড়াই বাঁচি।"];
//৬. স্কাই আইজ (সুকাআইজু)(6)
mobtalk[2][6][0]=["বীপ-বীপ-বীপ-বীপ"];
mobtalk[2][6][1]=["আগ্রহের ব্যক্তি। অস্বাভাবিকতা",
"সনাক্ত।",
"বীপ-বীপ-বীপ-বীপ"];
mobtalk[2][6][2]=["গোয়েন্দা তৎপরতায়"];
mobtalk[2][6][3]=["গোয়েন্দা অভিযানে"];
mobtalk[2][6][4]=["আমাকে ওই বোকা রোবটগুলোর সাথে",
"একত্রে ফেলো না"];
//৭. বার্ন ড্রেক(7)
mobtalk[2][7][0]=["গাওয়াওওওওওওওওওওওওও"];
mobtalk[2][7][1]=["এখন আমার তোমার সাথে",
"কথা বলার মেজাজ নেই"];
mobtalk[2][7][2]=["আমার নাম বার্ন ড্রেক।",
"দারুণ নাম, তাই না?"];
mobtalk[2][7][3]=["আমি কথা বলতে",
"পছন্দ করি না",
"কথা বললে আমি দুর্বল দেখাই,",
"তাই না?"];
//৮. আমি মাইস্টেইরা।(8)
mobtalk[2][8][0]=["তুমি একটা সাকুবাসের কী করবে?",
"তোমার সাকুবাসের",
"দরকার নেই।"];
mobtalk[2][8][1]=["কি? তুমিও একটা সাকুবাস?",
"আমি মনে করি না।"];
mobtalk[2][8][2]=["তোমার একটা সাকুবাসের",
"সাথে কথা বলার",
"দরকার নেই।"];
mobtalk[2][8][3]=["তুমি কি একটা সাকুবাস হতে চাও?",
"আমি চাই না তুমি আগ্রহী হও।"];
//৯. লুমিয়েরা(9)
mobtalk[2][9][0]=["ইউ-হু। আমি লুমিয়েরা।",
"তুমি কি খেলছ?",
"আমি খেলি।"];
mobtalk[2][9][1]=["আমি এখনই পেয়েছি",
"একজন নিখুঁত খেলার সঙ্গী।"];
mobtalk[2][9][2]=["তুমি কি আমাকে ঠাট্টা করছ?",
"তুমি যে কোনো সময় স্বাগত।"];
mobtalk[2][9][3]=["তুমি কি হারাতে এসেছ?",
"তুমি সবসময় স্বাগত।"];
mobtalk[2][9][4]=["তোমার সাথে খেলতে",
"আমার সময় নেই।",
"তুমি তো সেটা জানো, তাই না?"];
//১০. ভালমেরিয়া(10)
mobtalk[2][10][0]=["আমার নাম ভালমেরিয়া।",
"সুসকুবীদের মধ্যে সবচেয়ে",
"আকর্ষণীয় নারী।",
"আমি লড়াই করার জন্য কাউকে",
"পেয়েছি!"];
mobtalk[2][10][1]=["তুমি শেষ পর্যন্ত",
"এখানে কীভাবে এলে?",
"আমার পা অবশেষে এসেছে!",
"যখন খুশি",
"আমার সাথে লড়াই করো!"];
mobtalk[2][10][2]=["তুমি যতবার খুশি আসতে পারো।",
"তুমি সবসময় স্বাগত।",
"তাহলে, চল লড়াই করি!"];
//0. 蝙蝠怪 (Mosubatto)
mobtalk[3][0][0]=["初次见面。我是蝙蝠怪",
"请多关照"];
mobtalk[3][0][1]=["你好。你好吗？",
"我很好哦！"];
mobtalk[3][0][2]=["我是教程里的怪物"];
mobtalk[3][0][3]=["那把冲锋枪弱得让人发笑呢"];
mobtalk[3][0][4]=["要不要做朋友？",
"首先别开那把枪"];
mobtalk[3][0][5]=["你吃饭了吗？",
"别光顾着玩游戏，快去吃饭吧"];
mobtalk[3][0][6]=["你还好吗？看起来有精力玩游戏呢",
"太好了"];
mobtalk[3][0][7]=["玩得开心吗？无论做什么都要乐在其中"];
//1.帕尔普艾 (Parupuai)
mobtalk[3][1][0]=["我来了！走起！"];
mobtalk[3][1][1]=["不客气！"];
mobtalk[3][1][2]=["惊喜！"];
mobtalk[3][1][3]=["快醒醒！早上啦！"];
mobtalk[3][1][4]=["要不要跟我聊聊恋爱？"];
mobtalk[3][1][5]=["我是帕尔普艾！"];
//2. 鲁比德维 (Rubidevi)
mobtalk[3][2][0]=["这张脸我没见过呢"];
mobtalk[3][2][1]=["你。是从哪里来的？"];
mobtalk[3][2][2]=["不是个可爱的女孩吗"];
mobtalk[3][2][3]=["既然是游戏，就全力以赴战斗吧"];
mobtalk[3][2][4]=["这身打扮在这座城市里可没见过"];
mobtalk[3][2][5]=["我很喜欢。非常时髦"];
mobtalk[3][2][6]=["你觉得我像恶魔吧？",
"我是恶魔"];
mobtalk[3][2][7]=["名字叫鲁比德维",
"请多关照"];
//3. 杀手针 (Kirānīdu~ru)
mobtalk[3][3][0]=["嗡嗡嗡——"];
mobtalk[3][3][1]=["跟人类说话也没意义"];
mobtalk[3][3][2]=["小心别被蜂针蛰到哦"];
mobtalk[3][3][3]=["因为我身上有毒！"];
mobtalk[3][3][4]=["我叫杀手针",
"正如其名所示 “和” 改为 “与”"];
//4.普利兹哈克 (Purizuhāku)
mobtalk[3][4][0]=["以为鸟儿不会说话吗？"];
mobtalk[3][4][1]=["我可是伪装成鸟的人类"];
mobtalk[3][4][2]=["你不觉得鸟儿很美吗？"];
mobtalk[3][4][3]=["人类总是会",
"被美丽的事物吸引"];
mobtalk[3][4][4]=["鸡肉很好吃吧",
"鸟儿可是会吃鸡肉的"];
//5. 骨骸 (Bōnreisu)
mobtalk[3][5][0]=["你总有一天也会变成我这样的"];
mobtalk[3][5][1]=["趁着活着的时候要幸福啊",
"你幸福吗？"];
mobtalk[3][5][2]=["活着的时候能做的事真的很多",
"要无悔地活着啊"];
//6. 天空之眼 (Sukaiaizu)
mobtalk[3][6][0]=["哔哔哔哔哔哔"];
mobtalk[3][6][1]=["可疑人物　检测到异常",
"哔哔哔哔哔哔"];
mobtalk[3][6][2]=["巡逻中"];
mobtalk[3][6][3]=["正在巡逻"];
mobtalk[3][6][4]=["别把我跟那个破机器人混为一谈"];
//7. 伯恩德雷克 (Bānudoreiku)
mobtalk[3][7][0]=["嘎呜呜呜呜呜呜呜呜呜"];
mobtalk[3][7][1]=["现在没心情跟你说话"];
mobtalk[3][7][2]=["我叫伯恩德雷克　很帅的名字吧？"];
mobtalk[3][7][3]=["我不喜欢说话",
"我说话的时候看起来很弱吧？"];
//8. 我是米斯特拉。
mobtalk[3][8][0]=["找魅魔有什么事吗？",
"你不需要",
"魅魔"];
mobtalk[3][8][1]=["什么？你也是魅魔吗？",
"我可不这么认为"];
mobtalk[3][8][2]=["你没必要",
"跟魅魔说话"];
mobtalk[3][8][3]=["想成为魅魔吗？",
"我可不想让你对我感兴趣"];
//9.露米埃拉
mobtalk[3][9][0]=["哟。我是露米埃拉",
"在玩耍吗？",
"玩耍的是我"];
mobtalk[3][9][1]=["正好找到",
"一个合适的玩伴"];
mobtalk[3][9][2]=["是在戏弄我吗？",
"随时欢迎哦"];
mobtalk[3][9][3]=["是来认输的吗？",
"随时欢迎哦"];
mobtalk[3][9][4]=["我可没空跟你玩",
"你也明白吧？"];
//10.瓦尔梅利亚
mobtalk[3][10][0]=["吾名瓦尔梅利亚",
"魅魔中最迷人的女子",
"找到对手了！"];
mobtalk[3][10][1]=["你是怎么来到这里的？",
"终于轮到我登场了呢！",
"随时来挑战吧！"];
mobtalk[3][10][2]=["来多少次都行哦",
"随时欢迎",
"那么，开战吧！"];
//0.莫斯巴特 (Mosubatto)
mobtalk[4][0][0]=["初次見面。我是莫斯巴特",
"請多關照"];
mobtalk[4][0][1]=["你好。你還好嗎？",
"我很好喔！"];
mobtalk[4][0][2]=["我是教學關卡裡的怪物"];
mobtalk[4][0][3]=["那把衝鋒槍弱到讓人發笑呢"];
mobtalk[4][0][4]=["要不要當朋友？",
"首先，別開那把槍"];
mobtalk[4][0][5]=["你有好好吃飯嗎？",
"別光顧著玩遊戲，快去吃飯吧"];
mobtalk[4][0][6]=["還好嗎？看起來你還有精力玩遊戲呢",
"太好了"];
mobtalk[4][0][7]=["玩得開心嗎？",
"無論做什麼都要樂在其中才行"];
//1.帕魯普艾 (Parupuai)
mobtalk[4][1][0]=["我來了！走吧！"];
mobtalk[4][1][1]=["歡迎光臨！"];
mobtalk[4][1][2]=["驚喜！"];
mobtalk[4][1][3]=["快醒醒！早上啦！"];
mobtalk[4][1][4]=["要跟我聊聊戀愛嗎？"];
mobtalk[4][1][5]=["我是帕魯普艾！"];
//2.露比德維 (Rubidevi)
mobtalk[4][2][0]=["這張臉好陌生啊"];
mobtalk[4][2][1]=["你。是從哪裡來的？"];
mobtalk[4][2][2]=["這不是個可愛的女孩嗎"];
mobtalk[4][2][3]=["既然是遊戲，就全力以赴吧"];
mobtalk[4][2][4]=["這身打扮在這座城市裡可沒見過"];
mobtalk[4][2][5]=["我很喜歡。非常時髦"];
mobtalk[4][2][6]=["你覺得我像惡魔吧？",
"我是惡魔"];
mobtalk[4][2][7]=["名字叫魯比德維",
"請多關照"];
//3. 殺手針 (Kirānīdu~ru)
mobtalk[4][3][0]=["嗡嗡嗡——"];
mobtalk[4][3][1]=["跟人類說話沒意義"];
mobtalk[4][3][2]=["小心別被蜜蜂螫到喔"];
mobtalk[4][3][3]=["因為我有毒啊！"];
mobtalk[4][3][4]=["我的名字是殺手針",
"正如名字所示　是「殺手」和「針」"];
//4. 普利茲哈克 (Purizuhāku)
mobtalk[4][4][0]=["你以為鳥不會說話嗎？"];
mobtalk[4][4][1]=["我是假裝成鳥的人類"];
mobtalk[4][4][2]=["你不覺得鳥很美嗎？"];
mobtalk[4][4][3]=["人類總是會",
"被美麗的事物吸引"];
mobtalk[4][4][4]=["雞肉很好吃對吧",
"鳥會吃雞肉的"];
//5. 骨骸 (Bōnreisu)
mobtalk[4][5][0]=["你總有一天也會變成像我這樣"];
mobtalk[4][5][1]=["趁著活著的時候要幸福啊。你幸福嗎？"];
mobtalk[4][5][2]=["活著的時候能做的事真的很多",
"要無悔地活著啊"];
//6. 天空之眼 (Sukaiaizu)
mobtalk[4][6][0]=["嗶嗶嗶嗶嗶嗶"];
mobtalk[4][6][1]=["注意人物　偵測到異常　嗶嗶嗶嗶嗶嗶"];
mobtalk[4][6][2]=["正在警戒中"];
mobtalk[4][6][3]=["正在巡邏"];
mobtalk[4][6][4]=["別把我跟那台廢鐵機器人混為一談"];
//7. 伯恩德雷克 (Bānudoreiku)
mobtalk[4][7][0]=["嘎嗚嗚嗚嗚嗚嗚嗚嗚嗚"];
mobtalk[4][7][1]=["現在沒心情跟你說話"];
mobtalk[4][7][2]=["我叫巴恩德雷克　很帥氣的名字吧？"];
mobtalk[4][7][3]=["我不喜歡說話",
"我一開口就會顯得很弱吧？"];
//8.我是米斯特拉。
mobtalk[4][8][0]=["找魅魔有什麼事？",
"你不需要",
"魅魔"];
mobtalk[4][8][1]=["什麼？你也是魅魔嗎？",
"我可不這麼認為"];
mobtalk[4][8][2]=["你沒必要",
"跟魅魔說話"];
mobtalk[4][8][3]=["你想當魅魔嗎？",
"我可不想讓你對我有興趣"];
//9.露米埃拉
mobtalk[4][9][0]=["嗨～我是露米埃拉",
"你在玩耍嗎？",
"玩耍的人是我"];
mobtalk[4][9][1]=["剛好找到",
"一個絕佳的玩伴"];
mobtalk[4][9][2]=["你在捉弄我嗎？",
"隨時歡迎"];
mobtalk[4][9][3]=["你是來輸的嗎？",
"隨時歡迎"];
mobtalk[4][9][4]=["我沒空跟你玩",
"你應該也明白吧？"];
//10.瓦爾梅莉亞
mobtalk[4][10][0]=["吾名瓦爾梅莉亞",
"魅魔中最迷人的女子",
"找到對手了！"];
mobtalk[4][10][1]=["你是怎麼來到這裡的呢？",
"終於輪到我登場了呢！",
"隨時來挑戰吧！"];
mobtalk[4][10][2]=["來多少次都沒關係",
"隨時歡迎",
"那麼，來戰吧！"];
//0. Mosubatto
mobtalk[5][0][0]=["Nice to meet you. I'm Mosubatto.",
"Nice to meet you too."];
mobtalk[5][0][1]=["Hello. How are you?",
"I'm doing great!"];
mobtalk[5][0][2]=["I'm the monster in the tutorial."];
mobtalk[5][0][3]=["That submachine gun is laughably weak,",
"isn't it?"];
mobtalk[5][0][4]=["Want to be friends?",
"First off, please don’t shoot that gun."];
mobtalk[5][0][5]=["Did you eat properly?",
"Don’t just play games all the time",
"you gotta eat, you know?"];
mobtalk[5][0][6]=["Are you doing okay? You sure look like",
"you have the energy to play games.",
"That’s good."];
mobtalk[5][0][7]=["Are you having fun?",
"You’ve gotta enjoy everything in life."];
//1. Parupuai
mobtalk[5][1][0]=["I’m here! Let’s go!"];
mobtalk[5][1][1]=["You’re welcome!"];
mobtalk[5][1][2]=["Surprise!"];
mobtalk[5][1][3]=["Wake up, wake up! It’s morning!"];
mobtalk[5][1][4]=["Want to talk about love with me?"];
mobtalk[5][1][5]=["I’m Parupuai!"];
//2. Rubidevi
mobtalk[5][2][0]=["I haven’t seen your face around here before."];
mobtalk[5][2][1]=["You. Where’d you come from?"];
mobtalk[5][2][2]=["You’re a cute girl, aren’t you?"];
mobtalk[5][2][3]=["Since it’s a game,",
"let’s fight with everything we’ve got."];
mobtalk[5][2][4]=["That’s a style I don’t see around this city."];
mobtalk[5][2][5]=["I like it. You’re very stylish."];
mobtalk[5][2][6]=["You think I’m a demon, don’t you?",
"I’m a devil."];
mobtalk[5][2][7]=["My name is Rubidevi.",
"Nice to meet you."];
//3. Killer Needle
mobtalk[5][3][0]=["Buzz buzz buzzzz"];
mobtalk[5][3][1]=["There’s no point talking to humans."];
mobtalk[5][3][2]=["Just make sure",
"you don’t get stung by a bee’s stinger."];
mobtalk[5][3][3]=["Because I’ve got poison!"];
mobtalk[5][3][4]=["My name is Killer Needle.",
"Just like the name say",
"Killer and Needle."];
//4. Prizuhaku
mobtalk[5][4][0]=["Did you think birds couldn’t talk?"];
mobtalk[5][4][1]=["I’m a human pretending to be a bird."];
mobtalk[5][4][2]=["Don’t you think birds are beautiful?"];
mobtalk[5][4][3]=["Humans just can’t help but",
"get drawn to beautiful things."];
mobtalk[5][4][4]=["Chicken is delicious, isn’t it?",
"Birds eat chicken."];
//5. Bone Reaper (Bōnreisu)
mobtalk[5][5][0]=["Someday, you’ll end up just like me."];
mobtalk[5][5][1]=["Be happy while you’re alive.",
"Are you happy?"];
mobtalk[5][5][2]=["There’s so much you can",
"do while you’re alive.",
"Let’s live without regrets."];
//6. Sky Eyes (Sukaiaizu)
mobtalk[5][6][0]=["Beep beep beep beep"];
mobtalk[5][6][1]=["Person of interest. Abnormality detected.",
"Beep beep beep beep"];
mobtalk[5][6][2]=["On patrol"];
mobtalk[5][6][3]=["On patrol"];
mobtalk[5][6][4]=["Don’t lump me in with those clunky robots"];
//7. Burn Drake
mobtalk[5][7][0]=["Gyaaaaaaaaaaaaaaaaaaa"];
mobtalk[5][7][1]=["I’m not in the mood to talk to you right now"];
mobtalk[5][7][2]=["My name is Burn Drake. Cool name, right?"];
mobtalk[5][7][3]=["I don’t like talking",
"It makes me look weak when I talk,",
"doesn’t it?"];
//8. This is Mystea.
mobtalk[5][8][0]=["Do you want something from a succubus?",
"You don’t",
"need a succubus."];
mobtalk[5][8][1]=["What? Are you a succubus too?",
"I don’t think so."];
mobtalk[5][8][2]=["You don’t",
"need to talk to a succubus."];
mobtalk[5][8][3]=["Do you want to become a succubus?",
"I don’t want you to be interested in me."];
//9. Lumiera
mobtalk[5][9][0]=["Hey there. I’m Lumiera.",
"Are you playing around?",
"I’m the one who plays."];
mobtalk[5][9][1]=["I’ve just found",
"the perfect playmate."];
mobtalk[5][9][2]=["Are you teasing me?",
"You’re always welcome."];
mobtalk[5][9][3]=["Did you come here to lose?",
"You’re always welcome."];
mobtalk[5][9][4]=["I don’t have time to play with you.",
"You know that, right?"];
//10.Valmeria
mobtalk[5][10][0]=["My name is Valmeria.",
"I am the most seductive woman",
"among the succubi.",
"I’ve found someone to fight!"];
mobtalk[5][10][1]=["I wonder how you got this far?",
"My time has finally come!",
"Come at me anytime!"];
mobtalk[5][10][2]=["You can come as many times as you like.",
"You’re always welcome.",
"Now then, let’s fight!"];
//0. Mosbat (Mosubatto)
mobtalk[6][0][0]=["Enchanté. Je m'appelle Mosbat.",
"Enchanté de te rencontrer."];
mobtalk[6][0][1]=["Bonjour. Comment ça va ?",
"Moi, je vais bien !"];
mobtalk[6][0][2]=["Je suis le monstre du didacticiel."];
mobtalk[6][0][3]=["Ta mitraillette est ridiculement faible, non ?"];
mobtalk[6][0][4]=["Tu veux qu'on soit amis ?",
"Pour commencer,",
"ne tire pas avec ce flingue."];
mobtalk[6][0][5]=["Tu as bien mangé ? Tu ne devrais",
"pas passer ton temps à jouer,",
"va plutôt manger."];
mobtalk[6][0][6]=["Tu vas bien ? On dirait que tu as l'énergie",
"pour jouer. Tant mieux."];
mobtalk[6][0][7]=["Tu t'amuses bien ?",
"Il faut profiter de tout dans la vie."];
//1. Parupuai
mobtalk[6][1][0]=["Je suis là ! C'est parti !"];
mobtalk[6][1][1]=["De rien !"];
mobtalk[6][1][2]=["Surprise !"];
mobtalk[6][1][3]=["Réveille-toi, réveille-toi ! C'est le matin !"];
mobtalk[6][1][4]=["Tu veux parler d'amour avec moi ?"];
mobtalk[6][1][5]=["Je suis Parupuai !"];
//2. Rubidevi
mobtalk[6][2][0]=["Je ne te connais pas."];
mobtalk[6][2][1]=["D'où viens tu ?"];
mobtalk[6][2][2]=["Tu es une jolie fille, n'est ce pas ?"];
mobtalk[6][2][3]=["C'est un jeu, alors battons-nous à fond."];
mobtalk[6][2][4]=["Je n'ai jamais vu ce style vestimentaire",
"dans cette ville."];
mobtalk[6][2][5]=["J'aime bien. C'est très chic."];
mobtalk[6][2][6]=["Tu me prends pour un démon,",
"n'est ce pas ?",
"Je suis un diable."];
mobtalk[6][2][7]=["Je m'appelle Rubidevi.",
"Enchantée."];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[6][3][0]=["Bzzzzzzzzzz"];
mobtalk[6][3][1]=["Ça ne sert à rien de parler aux humains."];
mobtalk[6][3][2]=["Fais attention à ne pas te faire piquer",
"par mon dard."];
mobtalk[6][3][3]=["Car j'ai du venin !"];
mobtalk[6][3][4]=["Je m’appelle Killer Needle.",
"Comme mon nom l’indique,",
"killer et needle."];
//4. Purizuhāku
mobtalk[6][4][0]=["Tu pensais que les oiseaux",
"ne savaient pas parler ?"];
mobtalk[6][4][1]=["Je suis un humain qui",
"fait semblant d’être un oiseau."];
mobtalk[6][4][2]=["Tu ne trouves pas que",
"les oiseaux sont beaux ?"];
mobtalk[6][4][3]=["Les humains sont attirés",
"par ce qui est beau."];
mobtalk[6][4][4]=["Le poulet, c’est bon, hein ?",
"Les oiseaux mangent du poulet."];
//5. Bōnreisu
mobtalk[6][5][0]=["Un jour, tu deviendras comme moi."];
mobtalk[6][5][1]=["Sois heureux tant que tu es en vie.",
"Es tu heureux ?"];
mobtalk[6][5][2]=["Il y a vraiment beaucoup de choses",
"à faire tant qu’on est en vie.",
"Vivons sans regrets."];
//6. Sky Eyes (Sukaiaizu)
mobtalk[6][6][0]=["Pip pip pip pip"];
mobtalk[6][6][1]=["Personne suspecte.",
"Anomalie détectée. Pip pip pip pip"];
mobtalk[6][6][2]=["En service de sécurité."];
mobtalk[6][6][3]=["En patrouille."];
mobtalk[6][6][4]=["Ne me compare pas",
"à un robot de pacotille."];
//7. Burn Drake (Bānudoreiku)
mobtalk[6][7][0]=["Gyaaaaaaaaaaaaaaaaaaa"];
mobtalk[6][7][1]=["Je ne suis pas d'humeur",
"à te parler pour l'instant."];
mobtalk[6][7][2]=["Je m'appelle Burn Drake.",
"C'est un nom cool, non ?"];
mobtalk[6][7][3]=["Je n'aime pas parler.",
"Ça me fait paraître faible quand  je,",
"parle, non ?"];
//8. C'est Mystera.
mobtalk[6][8][0]=["Tu veux quelque chose à une succube ?",
"Tu n'as pas besoin",
"d'une succube."];
mobtalk[6][8][1]=["Quoi ? Tu es une succube toi aussi ?",
"Je ne pense pas, non."];
mobtalk[6][8][2]=["Tu n'as pas besoin",
"de parler à une succube."];
mobtalk[6][8][3]=["Tu veux devenir une succube ?",
"Je ne veux pas que tu t'y intéresses."];
//9. Lumiera
mobtalk[6][9][0]=["Salut ! Je m'appelle Lumiera.",
"Tu joues ?",
"C'est moi qui joue."];
mobtalk[6][9][1]=["Je viens de trouver",
"un partenaire de jeu idéal."];
mobtalk[6][9][2]=["Tu te moques de moi ?",
"Tu es la bienvenue quand tu veux."];
mobtalk[6][9][3]=["Tu es venue pour perdre ?",
"Tu es la bienvenue quand tu veux."];
mobtalk[6][9][4]=["Je n'ai pas le temps de jouer avec toi.",
"Tu le comprends, n'est-ce pas ?"];
//10. Valmeria
mobtalk[6][10][0]=["Je m'appelle Valmeria.",
"Je suis la femme la plusenvoûtante",
"parmi les succubes.",
"J'ai trouvé un adversaire !"];
mobtalk[6][10][1]=["Comment as-tu fait pour arriver jusqu'ici ?",
"Mon heure est enfin venue !",
"Viens m'attaquer quand tu veux !"];
mobtalk[6][10][2]=["Tu peux venir autant de fois que tu veux.",
"Tu es toujours le bienvenu.",
"Bon, c'est parti pour le combat !"];
//0. Mosubatto
mobtalk[7][0][0]=["Schön, dich kennenzulernen.",
"Ich bin Mosubatto. Freut mich."];
mobtalk[7][0][1]=["Hallo. Wie geht’s dir?",
"Mir geht’s gut!"];
mobtalk[7][0][2]=["Ich bin das Monster aus dem Tutorial."];
mobtalk[7][0][3]=["Die Maschinenpistole ist ja",
"lächerlich schwach, oder?"];
mobtalk[7][0][4]=["Willst du nicht mein Freund werden?",
"Als Erstes Bitte schieß nicht mit der Waffe."];
mobtalk[7][0][5]=["Hast du ordentlich gegessen?",
"Du solltest nicht nur zocken,",
"sondern auch was essen."];
mobtalk[7][0][6]=["Geht’s dir gut? Du scheinst jedenfalls",
"genug Energie zum Spielen zu haben.",
"Das freut mich."];
mobtalk[7][0][7]=["Hast du Spaß? Man muss alles genießen."];
//1. Parupuai
mobtalk[7][1][0]=["Ich bin da! Los geht’s!"];
mobtalk[7][1][1]=["Herzlich willkommen!"];
mobtalk[7][1][2]=["Überraschung!"];
mobtalk[7][1][3]=["Aufwachen, aufwachen! Es ist Morgen!"];
mobtalk[7][1][4]=["Willst du mit mir über die Liebe reden?"];
mobtalk[7][1][5]=["Ich bin Parupuai!"];
//2. Rubidevi
mobtalk[7][2][0]=["Ein unbekanntes Gesicht."];
mobtalk[7][2][1]=["Du da. Woher kommst du?"];
mobtalk[7][2][2]=["Du bist ja ein süßes Mädchen."];
mobtalk[7][2][3]=["Da es ein Spiel ist,",
"lass uns mit voller Kraft kämpfen."];
mobtalk[7][2][4]=["So eine Mode sieht man in dieser",
"Stadt nicht."];
mobtalk[7][2][5]=["Das gefällt mir. Sehr stilvoll."];
mobtalk[7][2][6]=["Du denkst wohl, ich sei ein Dämon, oder?",
"Ich bin ein Teufel."];
mobtalk[7][2][7]=["Mein Name ist Rubidevi.",
"Freut mich, dich kennenzulernen."];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[7][3][0]=["Sum, sum, summm..."];
mobtalk[7][3][1]=["Es hat keinen Sinn, mit Menschen zu reden."];
mobtalk[7][3][2]=["Pass auf, dass du nicht von einem",
"Bienenstich getroffen wirst."];
mobtalk[7][3][3]=["Denn ich habe Gift!"];
mobtalk[7][3][4]=["Mein Name ist Killer Needle.",
"Wie der Name schon sagt",
"Killer und Needle."];
//4. Purizuhāku
mobtalk[7][4][0]=["Hast du gedacht,",
"Vögel könnten nicht sprechen?"];
mobtalk[7][4][1]=["Ich bin ein Mensch, der sich als Vogel ausgibt."];
mobtalk[7][4][2]=["Findest du Vögel nicht wunderschön?"];
mobtalk[7][4][3]=["Menschen fühlen sich",
"von schönen Dingen angezogen."];
mobtalk[7][4][4]=["Hühnchen schmeckt doch lecker, oder?",
"Vögel essen Hühnchen."];
//5. Bōnreisu
mobtalk[7][5][0]=["Eines Tages wirst du so werden wie ich."];
mobtalk[7][5][1]=["Sei glücklich, solange du lebst.",
"Bist du glücklich?"];
mobtalk[7][5][2]=["Es gibt wirklich viel, was man tun kann,",
"solange man lebt. Lass uns ohne Reue leben."];
//6. Sky Eyes (Sukaiaizu)
mobtalk[7][6][0]=["Piep piep piep"];
mobtalk[7][6][1]=["Person von Interesse. Anomalie erkannt.",
"Piep piep piep"];
mobtalk[7][6][2]=["Im Wachdienst"];
mobtalk[7][6][3]=["Auf Streife"];
mobtalk[7][6][4]=["Vergleich mich nicht mit einem Schrottroboter"];
//7. Burn Drake (Bānudoreiku)
mobtalk[7][7][0]=["Gyaaaaaaaaaaaaaaaaaaa"];
mobtalk[7][7][1]=["Ich bin gerade nicht in der Stimmung,",
"mit dir zu reden."];
mobtalk[7][7][2]=["Mein Name ist Burn Drake.",
"Ein cooler Name, oder?"];
mobtalk[7][7][3]=["Ich rede nicht gern.",
"Wenn ich rede, wirke ich schwach, oder?"];
//8. Hier ist Mysteira.
mobtalk[7][8][0]=["Hast du etwas von einer",
"Sukkubus zu verlangen?",
"Du brauchst keine Sukkubus"];
mobtalk[7][8][1]=["Was? Bist du etwa auch eine Sukkubus?",
"Das glaube ich doch nicht"];
mobtalk[7][8][2]=["Du musst",
"nicht mit einer Sukkubus sprechen"];
mobtalk[7][8][3]=["Willst du eine Sukkubus werden?",
"Ich will nicht, dass du Interesse daran hast"];
//9. Lumiera
mobtalk[7][9][0]=["Hallo. Ich bin Lumiera.",
"Spielst du gerade?",
"Ich bin diejenige, die spielt."];
mobtalk[7][9][1]=["Ich habe gerade",
"die perfekte Spielpartnerin gefunden."];
mobtalk[7][9][2]=["Willst du mich aufziehen?",
"Du bist jederzeit willkommen."];
mobtalk[7][9][3]=["Bist du gekommen, um zu verlieren?",
"Du bist jederzeit willkommen."];
mobtalk[7][9][4]=["Ich habe keine Zeit, mit dir zu spielen.",
"Das verstehst du doch, oder?"];
//10. Valmeria
mobtalk[7][10][0]=["Mein Name ist Valmeria.",
"Die verführerischste",
"Frau unter den Succubi.",
"Ich habe eine Gegnerin gefunden!"];
mobtalk[7][10][1]=["Wie bist du denn hierhergekommen?",
"Endlich bin ich an der Reihe!",
"Komm jederzeit auf mich zu!"];
mobtalk[7][10][2]=["Du kannst so oft kommen, wie du willst.",
"Du bist jederzeit willkommen.",
"Also dann, lass uns kämpfen!"];
//૦. મોસ્બેટ
mobtalk[8][0][0]=["હું મોસ્બેટ છું.",
"તમને મળીને આનંદ થયો."];
mobtalk[8][0][1]=["હેલો. કેમ છો?",
"હું એકદમ સરસ છું!"];
mobtalk[8][0][2]=["હું ટ્યુટોરિયલમાં એ",
"દાનવ છું."];
mobtalk[8][0][3]=["એ સબમશીન ગન તો",
"હસવા જેટલી નબળી છે, ને?"];
mobtalk[8][0][4]=["મિત્ર બનશું? સૌપ્રથમ,",
"કૃપા કરીને એ ગન નહીં ચલાવશો."];
mobtalk[8][0][5]=["શું તમે ઠીકથી ખાધું છે?",
"સતત ગેમ્સ નહીં રમશો",
"તમારે ખાવું પણ જોઈએ,",
"ખબર છે ને?"];
mobtalk[8][0][6]=["તમે ઠીક છો? તમે તો ગેમ્સ",
"રમવા માટે પૂરતી ઊર્જા ધરાવો",
"છો એવું લાગે છે. એ સારું છે."];
mobtalk[8][0][7]=["શું તને મજા આવી રહી છે?",
"જીવનમાં દરેક વસ્તુનો",
"આનંદ લેવો જોઈએ."];
//1. પરૂપુઆઈ
mobtalk[8][1][0]=["હું આવી ગયો! ચાલો!"];
mobtalk[8][1][1]=["તમારું સ્વાગત છે!"];
mobtalk[8][1][2]=["આશ્ચર્ય!"];
mobtalk[8][1][3]=["જાગો, જાગો! સવાર થઈ ગઈ છે!"];
mobtalk[8][1][4]=["પ્રેમ વિશે વાત કરીએ?"];
mobtalk[8][1][5]=["હું પરૂપુઆઈ છું!"];
//2. રુબિદેવી
mobtalk[8][2][0]=["તમે અજાણ્યા લાગો છો."];
mobtalk[8][2][1]=["એ હે. તમે ક્યાંથી આવ્યા છો?"];
mobtalk[8][2][2]=["તુ એક પ્યારી છોકરી છે, છે ને?"];
mobtalk[8][2][3]=["આ એક રમત છે, તો ચાલો",
"પૂરી તાકાત લગાવીએ."];
mobtalk[8][2][4]=["આ એક એવો",
"સ્ટાઇલ છે જે હું અહીં",
"આસપાસ નથી જોતો."];
mobtalk[8][2][5]=["મને ગમે છે. તું ખૂબ સ્ટાઇલિશ છે."];
mobtalk[8][2][6]=["તું મને રાક્ષસ સમજે છે, છે ને?",
"હું એક શૈતાન છું."];
mobtalk[8][2][7]=["મારું નામ રૂબીદેવી છે.",
"તમારો પરિચય થઇને આનંદ થયો."];
//3. કિલર નીડલ (કિરનીદુરુ)
mobtalk[8][3][0]=["ભુંભુંભુંભું"];
mobtalk[8][3][1]=["માનવ સાથે બોલવાનું",
"કોઈ ફાયદો નથી."];
mobtalk[8][3][2]=["ફક્ત એટલું ધ્યાન રાખજે કે",
"તને માખીનો ડંશ ન લાગે."];
mobtalk[8][3][3]=["મારી પાસે ઝેર છે, સમજ્યા!"];
mobtalk[8][3][4]=["મારું નામ કિલર નીડલ છે.",
"જેમ કે નામ સૂચવે છે",
"કિલર અને નીડલ."];
//૪. પ્રિસ-હોક (પુરિઝુહાકુ)(4)
mobtalk[8][4][0]=["શું તમને લાગે છે કે",
"પક્ષીઓ બોલી શકતા નથી?"];
mobtalk[8][4][1]=["હું એક માણસ છું,",
"જે પક્ષી બનવાનો ઢોંગ કરે છે."];
mobtalk[8][4][2]=["શું તમને લાગે છે",
"કેપક્ષીઓ સુંદર નથી?"];
mobtalk[8][4][3]=["માણસો સુંદર વસ્તુઓ",
"તરફ ખેંચાય જ છે."];
mobtalk[8][4][4]=["કુક્કુડી સ્વાદિષ્ટ હોય છે, ને?",
"પક્ષીઓ કુક્કુડી ખાય છે."];
//૫. બોન રીસ (બોનરેઇસુ)(5)
mobtalk[8][5][0]=["એક દિવસ,",
"તમે પણ મારા જેવા બની જશો."];
mobtalk[8][5][1]=["જીવતા હોવાનું જ્યારે,",
"ત્યારે ખુશ રહેજો.",
"શું તમે ખુશ છો?"];
mobtalk[8][5][2]=["જીવતા હોવાનું જ્યારે, ત્યારે",
"ઘણું બધું કરી શકાય છે.",
"ચાલો, કોઈપણ અફસોસ વિના જીવીએ."];
//૬. સ્કાય આઈઝ (સુકાઈઝુ)(6)
mobtalk[8][6][0]=["બીપ બીપ બીપ બીપ"];
mobtalk[8][6][1]=["રસ ધરાવનાર વ્યક્તિ.",
"અસામાન્યતા શોધાઈ.",
"બીપ બીપ બીપ બીપ"];
mobtalk[8][6][2]=["પહેરા પર"];
mobtalk[8][6][3]=["પેટ્રોલ પર"];
mobtalk[8][6][4]=["મને એ ભારે-ભરખમ રોબોટ્સ સાથે",
"સરખાવશો નહીં"];
//૭. બર્ન ડ્રેક (બાનુડોરેઇકુ)(7)
mobtalk[8][7][0]=["હું દાદા બનવા જઈ રહ્યો છું"];
mobtalk[8][7][1]=["હાલમાં મને તારી સાથે",
"વાત કરવાનું મન નથી."];
mobtalk[8][7][2]=["મારું નામ બર્ન ડ્રેક છે.",
"સરસ નામ છે, ને?"];
mobtalk[8][7][3]=["મને વાત કરવી ગમતી નથી.",
"જ્યારે હું વાત કરું છું ત્યારે હું",
"નબળો લાગું છું ને?"];
//૮. આ મિસ્ટેરા છે.(8)
mobtalk[8][8][0]=["શું તારે સક્કૂબસ પાસેથી",
"કંઈ જોઈએ છે?",
"તને સક્કૂબસની જરૂર નથી."];
mobtalk[8][8][1]=["શું? તું પણ સક્કૂબસ છે?",
"મને તો એવું નથી લાગે."];
mobtalk[8][8][2]=["શું? તું પણ એક સક્કૂબસ છે?",
"હું તો એવું વિચાર્યું પણ નથી."];
mobtalk[8][8][3]=["તારે સક્કૂબસ સાથે",
"વાત કરવાની જરૂર નથી."];
mobtalk[8][8][4]=["શું તું સક્કૂબસ બનવા",
"માંગે છે?",
"હું નથી ઈચ્છતો કે તને રસ પડે."];
//9. લુમિયેરા
mobtalk[8][9][0]=["યુ-હૂ. હું લુમિયેરા છું.",
"શું તું રમવા માંગે છે?",
"હું જ રમવા વાળી છું."];
mobtalk[8][9][1]=["મને હમણાં જ મળી છે",
"એક પરફેક્ટ રમવાનો સાથી."];
mobtalk[8][9][2]=["શું તું મને ચીડવે છે?",
"તને કોઈ પણ સમયે આવકાર છે."];
mobtalk[8][9][3]=["શું તું",
"હારવા માટે આવ્યો છે?",
"તને કોઈ પણ સમયે આવકાર છે."];
mobtalk[8][9][4]=["મારે તારી સાથે રમવાનો સમય નથી.",
"તને એ ખબર છે, છે ને?"];
//10. વાલ્મેરિયા
mobtalk[8][10][0]=["મારું નામ વાલ્મેરિયા છે.",
"હું સુક્કુબીઓમાં સૌથી આકર્ષક",
"સ્ત્રી છું",
"મને લડવા માટે કોઈ મળી ગયો છે!"];
mobtalk[8][10][1]=["તમે",
"આટલે સુધી કેવી રીતે પહોંચ્યા?",
"મારો વારો આખરે",
"આવી ગયો છે!",
"ક્યારેય પણ મારું સામનો કરવા આવો!"];
mobtalk[8][10][2]=["તમે જ્યારે ઇચ્છો ત્યારે",
"આવી શકો છો.",
"તમારું હંમેશા સ્વાગત છે.",
"તો ચાલો, લડીએ!"];
//0. मोसबैट
mobtalk[9][0][0]=["आपसे मिलकर अच्छा लगा।",
"मैं मोसबैट हूँ।",
"आपसे मिलकर खुशी हुई।"];
mobtalk[9][0][1]=["नमस्ते। आप कैसे हैं?",
"मैं बिल्कुल ठीक हूँ!"];
mobtalk[9][0][2]=["मैं ट्यूटोरियल में वह",
"मॉन्स्टर हूँ।"];
mobtalk[9][0][3]=["वह सबमशीन गन",
"हँसने लायक कमजोर है, है ना?"];
mobtalk[9][0][4]=["दोस्त बनते हो? सबसे पहले,",
"कृपया वह बंदूक मत चलाओ।"];
mobtalk[9][0][5]=["क्या तुमने ठीक से खाया है?",
"हर समय सिर्फ गेम मत खेलो",
"तुम्हें खाना भी है, पता है।"];
mobtalk[9][0][6]=["क्या तुम ठीक हो?",
"तुम तो ऐसे लग रहे हो",
"जैसे गेम खेलने की पूरी ऊर्जा",
"तुम्हारे पास है। यह अच्छी बात है।"];
mobtalk[9][0][7]=["क्या तुम मज़े कर रहे हो?",
"तुम्हें ज़िंदगी में",
"हर चीज़ का आनंद लेना चाहिए।"];
//1. पारुपुआई
mobtalk[9][1][0]=["मैं आ गई हूँ! चलो!"];
mobtalk[9][1][1]=["तुम स्वागत हो!"];
mobtalk[9][1][2]=["सरप्राइज़!"];
mobtalk[9][1][3]=["जागो, जागो! सुबह हो गई है!"];
mobtalk[9][1][4]=["प्यार के बारे में बात करें?"];
mobtalk[9][1][5]=["मैं पारुपुआई हूँ!"];
//2. रुबिदेवी
mobtalk[9][2][0]=["तुम अजनबी लग रहे हो।"];
mobtalk[9][2][1]=["ओह, वहाँ। तुम कहाँ से आए हो?"];
mobtalk[9][2][2]=["तुम एक प्यारी लड़की हो, है ना?"];
mobtalk[9][2][3]=["यह एक खेल है, तो चलो",
"इसे पूरी ताकत से खेलते हैं।"];
mobtalk[9][2][4]=["यह एक ऐसा अंदाज़ है",
"जो मुझे यहाँ देखने को नहीं मिलता।"];
mobtalk[9][2][5]=["मुझे यह पसंद है। तुम बहुत स्टाइलिश हो।"];
mobtalk[9][2][6]=["तुम सोचती हो कि",
"मैं एक राक्षसी हूँ, है ना?",
"मैं एक शैतान हूँ।"];
mobtalk[9][2][7]=["मेरा नाम रुबिदेवी है।",
"तुमसे मिलकर अच्छा लगा।"];
//3. किलर नीडल (किराणीदु~रु)
mobtalk[9][3][0]=["भनभनाहट भनभनाहट भनभनाहट"];
mobtalk[9][3][1]=["इंसानों से बात करने का",
"कोई फायदा नहीं है।"];
mobtalk[9][3][2]=["बस इतना ध्यान रखना कि",
"तुम्हें मधुमक्खी का डंक न लगे।"];
mobtalk[9][3][3]=["देखो, मेरे पास ज़हर है!"];
mobtalk[9][3][4]=["मेरा नाम किलर नीडल है।",
"जैसा कि नाम से ही पता चलता है",
"किलर और नीडल।"];
//4. प्रिस-हॉक (पुरिज़ुहाकु)
mobtalk[9][4][0]=["क्या तुम्हें लगा कि",
"पक्षी बात नहीं कर सकते?"];
mobtalk[9][4][1]=["मैं एक इंसान हूँ जो",
"पक्षी होने का नाटक कर रहा है।"];
mobtalk[9][4][2]=["क्या तुम्हें नहीं लगता कि",
"पक्षी सुंदर होते हैं?"];
mobtalk[9][4][3]=["इंसान बस सुंदर चीज़ों की",
"ओर खिंचे चले जाते हैं।"];
mobtalk[9][4][4]=["मुर्गी स्वादिष्ट होती है, है ना?",
"पक्षी मुर्गी खाते हैं।"];
//5. बोन रीस (बोनरेइसु)
mobtalk[9][5][0]=["एक दिन, तुम भी मेरे जैसे बन जाओगे।"];
mobtalk[9][5][1]=["ज़िंदा रहते हुए",
"खुश रहना सुनिश्चित करो।",
"क्या तुम खुश हो?"];
mobtalk[9][5][2]=["ज़िंदा रहते हुए तुम बहुत",
"कुछ कर सकते हो। चलो",
"बिना पछतावे के जीते हैं।"];
//6. स्काई आइज़ (सुकाइआइज़ु)
mobtalk[9][6][0]=["बीप बीप बीप बीप"];
mobtalk[9][6][1]=["रुचि का व्यक्ति।",
"असामान्यता का पता चला।",
"बीप बीप बीप बीप"];
mobtalk[9][6][2]=["गार्ड ड्यूटी पर"];
mobtalk[9][6][3]=["गश्त पर"];
mobtalk[9][6][4]=["मुझे उन भारी भरकम",
"रोबोटों के साथ एक मत समझना"];
//7. बर्न ड्रेक (बानुदोरेकु)
mobtalk[9][7][0]=["गाओआओआओआओआओआओ"];
mobtalk[9][7][1]=["मेरा अभी तुमसे",
"बात करने का मन नहीं है।"];
mobtalk[9][7][2]=["मेरा नाम बर्न ड्रेक है",
"कूल नाम है, है ना"];
mobtalk[9][7][3]=["मुझे बात करना पसंद नहीं है।",
"जब मैं बात करता हूँ",
"तो मैं कमज़ोर लगता हूँ है ना?"];
//8. यह माइस्टेरा है।
mobtalk[9][8][0]=["क्या तुम एक स्यूकोबस से कुछ चाहते हो?",
"तुम्हें एक स्यूकोबस की",
"ज़रूरत नहीं है।"];
mobtalk[9][8][1]=["क्या? क्या तुम भी एक स्यूकोबस हो?",
"मुझे ऐसा बिल्कुल नहीं लगता।"];
mobtalk[9][8][2]=["तुम्हें एक स्यूकबस से बात करने की",
"कोई ज़रूरत नहीं है।"];
mobtalk[9][8][3]=["क्या तुम एक स्यूकबस बनना चाहते हो?",
"मैं नहीं चाहती कि",
"तुम मुझमें दिलचस्पी लो।"];
//9. लुमिएरा
mobtalk[9][9][0]=["अरे वहाँ। मैं लुमिएरा हूँ।",
"क्या तुम मज़ाक कर रहे हो?",
"खेल तो मैं खेलती हूँ।"];
mobtalk[9][9][1]=["मुझे अभी अभी",
"एक परफ़ेक्ट खेलने का साथी मिल गया है।"];
mobtalk[9][9][2]=["क्या तुम मुझे चिढ़ा रहे हो?",
"तुम कभी भी आ सकते हो।"];
mobtalk[9][9][3]=["क्या तुम हारने आए हो?",
"तुम कभी भी आ सकते हो।"];
mobtalk[9][9][4]=["मेरे पास तुमसे खेलने का समय नहीं है।",
"तुम यह जानते हो, है ना?"];
//10. वालमेरिया
mobtalk[9][10][0]=["मेरा नाम वालमेरिया है।",
"मैं स्यूकोबी में सबसे आकर्षक",
"महिला हूँ।",
"मुझे लड़ने के लिए कोई मिल गया है!"];
mobtalk[9][10][1]=["मुझे आश्चर्य है कि",
"तुम यहाँ तक कैसे पहुँचे?",
"आखिरकार मेरा नंबर आ ही गया!",
"जब चाहो मुझसे भिड़ जाओ!"];
mobtalk[9][10][2]=["तुम जब चाहो आ सकते हो।",
"तुम्हारा हमेशा स्वागत है।",
"तो फिर, चलो लड़ते हैं!"];
//0. Mosubatto
mobtalk[10][0][0]=["Senang bertemu denganmu.",
"Aku Mosubatto. Senang berkenalan."];
mobtalk[10][0][1]=["Halo. Apa kabar?",
"Aku baik baik saja!"];
mobtalk[10][0][2]=["Aku adalah monster di tutorial ini."];
mobtalk[10][0][3]=["Submachine gun mu itu lemah banget,",
"sampai sampai bikin ketawa."];
mobtalk[10][0][4]=["Mau jadi temanku? Pertama tama,",
"tolong jangan tembakkan senjata itu."];
mobtalk[10][0][5]=["Sudah makan belum? Jangan cuma",
"main game terus, makan dulu dong."];
mobtalk[10][0][6]=["Kamu baik baik saja? Sepertinya kamu",
"masih punya tenaga buat main game.",
"Bagus"];
mobtalk[10][0][7]=["Kamu menikmati ini?",
"Segala sesuatu harus dinikmati"];
//1. Parupuai
mobtalk[10][1][0]=["Aku datang! Ayo pergi!"];
mobtalk[10][1][1]=["Selamat datang!"];
mobtalk[10][1][2]=["Kejutan!"];
mobtalk[10][1][3]=["Bangun, bangun! Sudah pagi!"];
mobtalk[10][1][4]=["Mau ngobrol soal cinta denganku?"];
mobtalk[10][1][5]=["Aku Parupuai!"];
//2. Rubidevi
mobtalk[10][2][0]=["Wajah yang belum pernah kulihat"];
mobtalk[10][2][1]=["Kamu. Dari mana kamu datang?"];
mobtalk[10][2][2]=["Kamu gadis yang imut, ya"];
mobtalk[10][2][3]=["Ini game,",
"jadi ayo bertarung sekuat tenaga"];
mobtalk[10][2][4]=["Gaya busana yang jarang",
"kulihat di kota ini"];
mobtalk[10][2][5]=["Aku suka. Sangat modis"];
mobtalk[10][2][6]=["Kamu pikir aku seperti iblis, kan?",
"Aku memang iblis"];
mobtalk[10][2][7]=["Namaku Rubidevi",
"Senang bertemu denganmu"];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[10][3][0]=["Bung bung bung bung"];
mobtalk[10][3][1]=["Tidak ada gunanya bicara dengan manusia"];
mobtalk[10][3][2]=["Hati hati jangan",
"sampai disengat jarum lebah"];
mobtalk[10][3][3]=["Karena aku punya racun, lho!"];
mobtalk[10][3][4]=["Namaku Killer Needle",
"Sesuai namanya, Killer dan Needle"];
//4. Prizuhaku (Purizuhāku)
mobtalk[10][4][0]=["Kamu pikir burung tidak bisa bicara?"];
mobtalk[10][4][1]=["Aku manusia yang berpura",
"pura jadi burung"];
mobtalk[10][4][2]=["Kamu tidak berpikir burung itu indah?"];
mobtalk[10][4][3]=["Manusia selalu",
"terpikat pada hal hal yang indah"];
mobtalk[10][4][4]=["Daging ayam enak, kan?",
"Burung memakan daging ayam"];
//5. Bone Reisu (Bōnreisu)
mobtalk[10][5][0]=["Suatu hari nanti kamu juga",
"akan jadi seperti aku"];
mobtalk[10][5][1]=["Jadilah bahagia selagi masih hidup.",
"Apakah kamu bahagia?"];
mobtalk[10][5][2]=["Ada banyak hal yang",
"bisa dilakukan selagi masih hidup.",
"Mari hidup tanpa penyesalan"];
//6. Sky Eyes (Sukaiaizu)
mobtalk[10][6][0]=["Pipipi pipipi pipipi"];
mobtalk[10][6][1]=["Orang yang perlu diwaspadai.",
"Mendeteksi keanehan.",
"Pipipi pipipi pipipi"];
mobtalk[10][6][2]=["Sedang berjaga"];
mobtalk[10][6][3]=["Sedang patroli"];
mobtalk[10][6][4]=["Jangan samakan",
"aku dengan robot rongsokan"];
//7. Burn Drake (Bānudoreiku)
mobtalk[10][7][0]=["Gyaaaaaaaaaaaaaaaaaaa"];
mobtalk[10][7][1]=["Sekarang aku nggak mood",
"ngobrol sama kamu"];
mobtalk[10][7][2]=["Namaku Bānudoreiku.",
"Nama yang keren, kan?"];
mobtalk[10][7][3]=["Aku nggak suka ngobrol",
"Kalau aku ngomong,",
"aku kelihatan lemah, kan?"];
//8. Ini Mistera.
mobtalk[10][8][0]=["Ada urusan apa sama Succubus?",
"Kamu nggak butuh",
"Succubus"];
mobtalk[10][8][1]=["Apa? Kamu juga Succubus?",
"Aku nggak bakal mikir gitu"];
mobtalk[10][8][2]=["Kau tidak perlu",
"berbicara dengan Succubus"];
mobtalk[10][8][3]=["Ingin jadi Succubus?",
"Aku tidak mau kau tertarik padaku"];
//9. Lumiera
mobtalk[10][9][0]=["Hai. Namaku Lumiera",
"Lagi main main?",
"Yang main main itu aku"];
mobtalk[10][9][1]=["Tepat sekali, aku",
"telah menemukan teman main"];
mobtalk[10][9][2]=["Lagi menggoda aku?",
"Selalu selamat datang"];
mobtalk[10][9][3]=["Datang untuk kalah?",
"Selalu selamat datang"];
mobtalk[10][9][4]=["Aku tidak punya waktu untuk",
"bermain denganmu Kau juga tahu kan?"];
//10. Valmeria
mobtalk[10][10][0]=["Namaku Valmeria Wanita paling",
"memikat di antara para succubus",
"Aku menemukan lawan untuk bertarung!"];
mobtalk[10][10][1]=["Bagaimana kamu bisa sampai di sini?",
"Akhirnya giliranku tiba!",
"Serang aku kapan saja!"];
mobtalk[10][10][2]=["Kamu boleh datang berkali kali",
"Kamu selalu diterima",
"Baiklah, mari bertarung!"];
//0. Mosubatto
mobtalk[11][0][0]=["Piacere. Sono Mosubatto.",
"Piacere di conoscerti."];
mobtalk[11][0][1]=["Ciao. Come stai?",
"Io sto benissimo!"];
mobtalk[11][0][2]=["Sono il mostro del tutorial."];
mobtalk[11][0][3]=["Quel fucile mitragliatore",
"è ridicolmente debole, vero"];
mobtalk[11][0][4]=["Ti va di diventare amici?",
"Per prima cosa,",
"non sparare con quella pistola."];
mobtalk[11][0][5]=["Hai mangiato bene?",
"Non giocare sempre, mangia qualcosa."];
mobtalk[11][0][6]=["Stai bene? Sembri avere abbastanza",
"energia per giocare. Meno male"];
mobtalk[11][0][7]=["Ti stai divertendo?",
"Bisogna godersi ogni cosa."];
//1. Parupuai
mobtalk[11][1][0]=["Sono arrivata! Andiamo!"];
mobtalk[11][1][1]=["Prego!"];
mobtalk[11][1][2]=["Sorpresa!"];
mobtalk[11][1][3]=["Svegliati, svegliati! È mattina!"];
mobtalk[11][1][4]=["Ti va di parlare d'amore con me?"];
mobtalk[11][1][5]=["Sono Parupuai!"];
//2. Rubidevi
mobtalk[11][2][0]=["Non ti ho mai visto prima."];
mobtalk[11][2][1]=["Da dove vieni?"];
mobtalk[11][2][2]=["Che ragazza carina!"];
mobtalk[11][2][3]=["Dato che è un gioco,",
"combattiamo con tutte le nostre forze."];
mobtalk[11][2][4]=["È uno stile",
"che non si vede in questa città."];
mobtalk[11][2][5]=["Mi piace. Sei molto alla moda."];
mobtalk[11][2][6]=["Pensi che sia un demone, vero?",
"Sono un diavolo."];
mobtalk[11][2][7]=["Mi chiamo Rubidevi.",
"Piacere."];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[11][3][0]=["Brum brum brum..."];
mobtalk[11][3][1]=["Non ha senso parlare con gli umani."];
mobtalk[11][3][2]=["Fai attenzione",
"a non farti pungere dal mio aculo."];
mobtalk[11][3][3]=["Perché ho del veleno!"];
mobtalk[11][3][4]=["Il mio nome è Killer Needle",
"Proprio come dice il nome, killer e ago"];
//4. Prizhaku (Purizuhāku)
mobtalk[11][4][0]=["Pensavi che",
"gli uccelli non potessero parlare?"];
mobtalk[11][4][1]=["Sono un essere umano",
"che finge di essere un uccello"];
mobtalk[11][4][2]=["Non trovi che gli uccelli siano belli?"];
mobtalk[11][4][3]=["Gli esseri umani",
"non possono fare a meno",
"di avvicinarsi alle cose belle"];
mobtalk[11][4][4]=["Il pollo è buonissimo, vero?",
"Gli uccelli mangiano il pollo"];
//5. Bone Reiss (Bōnreisu)
mobtalk[11][5][0]=["Anche tu un giorno diventerai come me"];
mobtalk[11][5][1]=["Cerca di essere felice finché sei in vita.",
"Tu sei felice?"];
mobtalk[11][5][2]=["Ci sono davvero tante cose",
"che si possono fare mentre si è in vita.",
"Viviamo senza rimpianti."];
//6. Sky Eyes (Sukaiaizu)
mobtalk[11][6][0]=["Pip pip pip pip"];
mobtalk[11][6][1]=["Persona sospetta. Anomalia rilevata.",
"Pip pip pip pip"];
mobtalk[11][6][2]=["In servizio di sicurezza"];
mobtalk[11][6][3]=["In pattuglia"];
mobtalk[11][6][4]=["Non paragonarmi a un robot scassato"];
//7. Burn Drake (Bānudoreiku)
mobtalk[11][7][0]=["Gyaoooooooooooooo"];
mobtalk[11][7][1]=["Non sono dell'umore giusto",
"per parlare con te adesso"];
mobtalk[11][7][2]=["Mi chiamo Burn Drake, bel nome, vero?"];
mobtalk[11][7][3]=["Non mi piace parlare",
"Se parlo, sembro debole, no?"];
//8. Sono Mistra.
mobtalk[11][8][0]=["Hai bisogno di qualcosa dalla succube?",
"Non hai bisogno",
"di una succube"];
mobtalk[11][8][1]=["Cosa? Anche tu sei una succube?",
"Non ci credo proprio"];
mobtalk[11][8][2]=["Non hai bisogno",
"di parlare con una succube"];
mobtalk[11][8][3]=["Vuoi diventare una succube?",
"Non voglio che ti interessi"];
//9. Lumiera
mobtalk[11][9][0]=["Ehi! Sono Lumiera",
"Stai giocando?",
"Sono io che gioco"];
mobtalk[11][9][1]=["Ho appena trovato",
"un compagno di giochi perfetto"];
mobtalk[11][9][2]=["Mi stai prendendo in giro?",
"Sei sempre il benvenuto"];
mobtalk[11][9][3]=["Sei venuto per perdere?",
"Sei sempre il benvenuto"];
mobtalk[11][9][4]=["Non ho tempo per giocare con te",
"Lo capisci anche tu, vero?"];
//10. Valmeria
mobtalk[11][10][0]=["Il mio nome è Valmeria",
"Sono la donna più affascinante",
"tra le succubi Ho trovato",
"un avversario con cui combattere  "];
mobtalk[11][10][1]=["Come hai fatto ad arrivare fin qui?",
"Finalmente è arrivato il mio momento!",
"Attaccami quando vuoi!"];
mobtalk[11][10][2]=["Puoi venire tutte le volte che vuoi.",
"Sei sempre il benvenuto.",
"Bene, combattiamo!"];
//0.モスバット (Mosubatto)
mobtalk[12][0][0]=["はじめまして。モスバットです",
"よろしくね"];
mobtalk[12][0][1]=["こんにちは。元気ですか？",
"私は元気だよー！"];
mobtalk[12][0][2]=["私がチュートリアルのモンスターだ"];
mobtalk[12][0][3]=["そのサブマシンガン笑えるほど弱いよな"];
mobtalk[12][0][4]=["友達にならないか？",
"まずはその銃を撃たないでくれ"];
mobtalk[12][0][5]=["ご飯はちゃんと食べたか？",
"ゲームばかりじゃなくて、飯食えよな"];
mobtalk[12][0][6]=["元気か？ゲームする元気はありそうだ",
"よかった"];
mobtalk[12][0][7]=["楽しんでるかい？何事も楽しまないとな"];
//1.パルプアイ (Parupuai)
mobtalk[12][1][0]=["私が来たよ！レッツゴー！"];
mobtalk[12][1][1]=["ユアウェルカム！"];
mobtalk[12][1][2]=["サプライズ！"];
mobtalk[12][1][3]=["起きて起きて！朝だよ！"];
mobtalk[12][1][4]=["私と恋話しない？"];
mobtalk[12][1][5]=["私はパルプアイ！"];
//2.ルビデビ (Rubidevi)
mobtalk[12][2][0]=["見慣れない顔だな"];
mobtalk[12][2][1]=["あんた。どこから来たんだい？"];
mobtalk[12][2][2]=["かわいい女の子じゃないか"];
mobtalk[12][2][3]=["ゲームだから全力で戦おうな"];
mobtalk[12][2][4]=["この都市では見ないファッションだ"];
mobtalk[12][2][5]=["気に入ったよ。とてもお洒落だ"];
mobtalk[12][2][6]=["デーモンみたいに思うだろ？",
"デビルなんだ"];
mobtalk[12][2][7]=["ルビデビって名前だ",
"よろしくな"];
//3.キラーニードル (Kirānīdu~ru)
mobtalk[12][3][0]=["ブンブンブーーーン"];
mobtalk[12][3][1]=["人間と話しても意味ない"];
mobtalk[12][3][2]=["蜂の針に刺されないことだよ"];
mobtalk[12][3][3]=["私には毒があるからね！"];
mobtalk[12][3][4]=["私の名はキラーニードル",
"名前の通り、キラーとニードル"];
//4.プリズハーク (Purizuhāku)
mobtalk[12][4][0]=["鳥が話せないと思った？"];
mobtalk[12][4][1]=["私は鳥のフリした人間なんだ"];
mobtalk[12][4][2]=["鳥って美しいと思わない？"];
mobtalk[12][4][3]=["美しいものに人間は",
"近づいてしまうのさ"];
mobtalk[12][4][4]=["鶏肉美味しいよな",
"鳥は鶏肉を食べるんだ"];
//5.ボーンレイス (Bōnreisu)
mobtalk[12][5][0]=["きみもいつか僕みたいになるんだ"];
mobtalk[12][5][1]=["生きてる間に幸せになれよ。おまえは幸せか？"];
mobtalk[12][5][2]=["生きてる間にやれることは本当に多い。悔いなく生きような"];
//6.スカイアイズ (Sukaiaizu)
mobtalk[12][6][0]=["ピッピーピッピーピッピー"];
mobtalk[12][6][1]=["要注意人物　異常を検知　ピッピーピッピーピッピー"];
mobtalk[12][6][2]=["警備中"];
mobtalk[12][6][3]=["巡回パトロール中"];
mobtalk[12][6][4]=["ポンコツロボと一緒にしないでくれ"];
//7.バーンドレイク (Bānudoreiku)
mobtalk[12][7][0]=["ギャオオオオオオオオオオオオオ"];
mobtalk[12][7][1]=["今はおまえと話す気分じゃないな"];
mobtalk[12][7][2]=["俺の名はバーンドレイク　かっこいい名前だろ？"];
mobtalk[12][7][3]=["話すのは好きじゃないんだ",
"俺が話してると弱く見えるだろ？"];
//8.ミステラです。
mobtalk[12][8][0]=["サキュバスに何か用か？",
"あなたにサキュバスは",
"必要ない"];
mobtalk[12][8][1]=["何？あなたもサキュバスなの？",
"まさかそうは思わないよ"];
mobtalk[12][8][2]=["あなたはサキュバスと話す",
"必要はない"];
mobtalk[12][8][3]=["サキュバスになりたいの？",
"興味持って欲しくないわ"];
//9.ルミエラ
mobtalk[12][9][0]=["やっほー。私はルミエラ",
"遊んでるの？",
"遊ぶのは私"];
mobtalk[12][9][1]=["ちょうどいい遊び相手",
"見つけちゃった"];
mobtalk[12][9][2]=["からかってるの？",
"いつでも歓迎よ"];
mobtalk[12][9][3]=["負けにきたのかしら？",
"いつでも歓迎よ"];
mobtalk[12][9][4]=["あなたと遊んでる暇はないの",
"あなたもわかるでしょ？"];
//10.ヴァルメリア
mobtalk[12][10][0]=["我が名はヴァルメリア",
"サキュバスでいちばん魅惑的な女",
"戦う相手見つけた！"];
mobtalk[12][10][1]=["ここまでどうやって来たのかしら？",
"とうとう私の出番が来たわね！",
"いつでもかかってきなさい！"];
mobtalk[12][10][2]=["何度来てもいいのよ",
"いつでも歓迎だわ",
"さてと、戦いましょう！"];
//0. Mosbat
mobtalk[13][0][0]=["Seneng kenal karo kowe. Aku Mosbat.",
"Seneng kenal uga."];
mobtalk[13][0][1]=["Halo. Kowe piye?",
"Apik apik wae!"];
mobtalk[13][0][2]=["Aku monster ing tutorial."];
mobtalk[13][0][3]=["Pistol mesinmu kuwi ringkih tenan nganti",
"gawe ngguyu, ya?"];
mobtalk[13][0][4]=["Piye nek dadi kanca? Sing sepisanan,",
"tulung aja nembak nganggo pistol kuwi."];
mobtalk[13][0][5]=["Apa kowe wis mangan sing cukup?",
"Aja mung dolanan terus",
"kowe kudu mangan, ngerti ora"];
mobtalk[13][0][6]=["Kowe apik apik wae Kowe katon kaya",
"duwe energi kanggo dolanan",
"Apik tenan"];
mobtalk[13][0][7]=["Kowe seneng seneng ta?",
"Kowe kudu nikmati kabeh bab ing urip."];
//1. Parupuai
mobtalk[13][1][0]=["Aku ana ing kene! Ayo mangkat!"];
mobtalk[13][1][1]=["Sami sami!"];
mobtalk[13][1][2]=["Kejutan!"];
mobtalk[13][1][3]=["Bangun, bangun! Esuk iki!"];
mobtalk[13][1][4]=["Péngin ngobrol babagan tresna?"];
mobtalk[13][1][5]=["Aku Parupuai!"];
//2. Rubidevi
mobtalk[13][2][0]=["Kowe katon kaya wong anyar."];
mobtalk[13][2][1]=["Hei kowe. Saka ngendi kowe teka?"];
mobtalk[13][2][2]=["Kowe bocah wadon sing imut, ya?"];
mobtalk[13][2][3]=["Iki dolanan,",
"ayo padha usaha sing paling apik."];
mobtalk[13][2][4]=["Iku gaya sing ora asring",
"tak deleng ing kene"];
mobtalk[13][2][5]=["Aku seneng. Kowe modis tenan."];
mobtalk[13][2][6]=["Kowe mikir aku iki setan, ya?",
"Aku iki iblis."];
mobtalk[13][2][7]=["Jenengku Rubidevi.",
"Seneng kenal karo kowe."];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[13][3][0]=["Dengung, dengung, dengung..."];
mobtalk[13][3][1]=["Ora ana gunane",
"ngomong karo manungsa"];
mobtalk[13][3][2]=["Ati ati aja nganti",
"kesengat sengat tawon"];
mobtalk[13][3][3]=["Aku duwe bisa, ngerti ora!"];
mobtalk[13][3][4]=["Jenengku Jarum Pembunuh.",
"Kaya jenenge: Pembunuh lan Jarum."];
//4. Pris Hawk (Purizuhāku)
mobtalk[13][4][0]=["Kowe kira manuk ora bisa ngomong?"];
mobtalk[13][4][1]=["Aku iki manungsa",
"sing nyamar dadi manuk."];
mobtalk[13][4][2]=["Kowe ora mikir manuk iku ayu?"];
mobtalk[13][4][3]=["Manungsa pancen ora bisa nolak",
"terpikat marang barang sing ayu."];
mobtalk[13][4][4]=["Ayam enak, ya?",
"Manuk mangan ayam."];
//5. Bone Reiss (Bōnreisu)
mobtalk[13][5][0]=["Siji dina, kowe bakal dadi kaya aku."];
mobtalk[13][5][1]=["Pasthekake kowe seneng sakdurunge mati.",
"Apa kowe seneng?"];
mobtalk[13][5][2]=["Ana akèh sing isa kowe lakoni",
"sakdurunge mati. Ayo urip tanpa nyesel."];
//6. Sky Eyes (Sukaiaizu)
mobtalk[13][6][0]=["Beep beep beep beep"];
mobtalk[13][6][1]=["Wong sing dadi perhatian.",
"Ana kelainan sing kadeteksi.",
"Beep beep beep beep"];
mobtalk[13][6][2]=["Jaga tugas"];
mobtalk[13][6][3]=["Patrol"];
mobtalk[13][6][4]=["Aja nyamain aku",
"karo robot robot kaku kuwi"];
//7. Burn Drake (Bānudoreiku)
mobtalk[13][7][0]=["Gyaaaaaaaaaaaaaaaaaaaah"];
mobtalk[13][7][1]=["Aku ora kepengin",
"ngomong karo kowe saiki."];
mobtalk[13][7][2]=["Jenengku Burn Drake.",
"Jeneng sing keren, ya?"];
mobtalk[13][7][3]=["Aku ora seneng ngomong.",
"Yen aku ngomong, aku katon ringkih, ya?"];
//8. Iki Mysteira.
mobtalk[13][8][0]=["Kowe kepengin apa saka succubus?",
"Kowe ora perlu",
"succubus."];
mobtalk[13][8][1]=["Apa? Kowe uga succubus?",
"Aku mesthi ora mikir ngono."];
mobtalk[13][8][2]=["Kowe ora perlu",
"ngomong karo succubus."];
mobtalk[13][8][3]=["Apa kowe pengin dadi succubus?",
"Aku ora pengin",
"kowe kasengsem marang aku."];
//9. Lumiera
mobtalk[13][9][0]=["Halo. Aku Lumiera.",
"Kowe dolanan?",
"Aku sing dolanan."];
mobtalk[13][9][1]=["Aku nembe nemu",
"kanca dolanan sing pas tenan."];
mobtalk[13][9][2]=["Kowe nggodha aku?",
"Kowe tansah dipersilakake."];
mobtalk[13][9][3]=["Kowe teka kanggo kalah?",
"Kowe tansah dipersilakake."];
mobtalk[13][9][4]=["Aku ora duwe wektu",
"kanggo dolanan karo kowe.",
"Kowe ngerti kuwi, ta?"];
//10. Valmeria
mobtalk[13][10][0]=["Jenengku Valmeria.",
"Aku iki wanita sing paling nggodha",
"ing antarané para succubi.",
"Aku wis ketemu lawan!"];
mobtalk[13][10][1]=["Aku penasaran piye kowe isa tekan kéné?",
"Giliranku wis teka!",
"Serang aku kapan waé!"];
mobtalk[13][10][2]=["Kowe isa bali kapan waé.",
"Kowe tansah ditampa.",
"Yen mangkono, ayo padha perang!"];
//0. ಮೊಸುಬಟ್ಟೊ
mobtalk[14][0][0]=["ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ",
"ಸಂತೋಷವಾಯಿತು.",
"ನಾನು ಮೊಸುಬಟ್ಟೊ.",
"ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ",
"ಸಂತೋಷವಾಯಿತು."];
mobtalk[14][0][1]=["ನಮಸ್ಕಾರ. ನೀವು ಹೇಗಿದ್ದೀರಿ?",
"ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ!"];
mobtalk[14][0][2]=["ನಾನು ಟ್ಯುಟೋರಿಯಲ್ ದೈತ್ಯ."];
mobtalk[14][0][3]=["ಆ ಸಬ್ ಮಷಿನ್ ಗನ್ ಹಾಸ್ಯಾಸ್ಪದವಾಗಿ",
"ದುರ್ಬಲವಾಗಿದೆ, ಅಲ್ಲವೇ?"];
mobtalk[14][0][4]=["ಸ್ನೇಹಿತರಾಗಲು ಬಯಸುವಿರಾ?",
"ಮೊದಲನೆಯದಾಗಿ,",
"ದಯವಿಟ್ಟು ಆ ಬಂದೂಕಿನಿಂದ",
"ಗುಂಡು ಹಾರಿಸಬೇಡಿ."];
mobtalk[14][0][5]=["ನೀವು ಸರಿಯಾಗಿ ಊಟ ಮಾಡಿದ್ದೀರಾ?",
"ಯಾವಾಗಲೂ ಆಟವಾಡಬೇಡಿ,",
"ಏನಾದರೂ ತಿನ್ನಿರಿ!"];
mobtalk[14][0][6]=["ನೀವು ಹೇಗಿದ್ದೀರಿ?",
"ಆಟವಾಡಲು ನಿಮಗೆ",
"ಸಾಕಷ್ಟು ಶಕ್ತಿ ಇದೆ ಎಂದು",
"ತೋರುತ್ತದೆ.",
"ಅದು ಒಳ್ಳೆಯದು."];
mobtalk[14][0][7]=["ನೀವು ಆನಂದಿಸುತ್ತಿದ್ದೀರಾ?",
"ನೀವು ಎಲ್ಲವನ್ನೂ ಆನಂದಿಸಬೇಕು!"];
//1. ಪರುಪುವೈ
mobtalk[14][1][0]=["ನಾನು ಇಲ್ಲಿದ್ದೇನೆ! ಹೋಗೋಣ!"];
mobtalk[14][1][1]=["ಸ್ವಾಗತ!"];
mobtalk[14][1][2]=["ಆಶ್ಚರ್ಯ!"];
mobtalk[14][1][3]=["ಎದ್ದೇಳು, ಎದ್ದೇಳು! ಬೆಳಿಗ್ಗೆ!"];
mobtalk[14][1][4]=["ನನ್ನೊಂದಿಗೆ ಪ್ರೀತಿಯ ಬಗ್ಗೆ",
"ಮಾತನಾಡಲು ಬಯಸುವಿರಾ?"];
mobtalk[14][1][5]=["ನಾನು ಪರುಪುವೈ!"];
//2. ರುಬಿದೇವಿ
mobtalk[14][2][0]=["ಅದು ಪರಿಚಯವಿಲ್ಲದ ಮುಖ."];
mobtalk[14][2][1]=["ನೀವು ಎಲ್ಲಿಂದ ಬಂದವರು?"];
mobtalk[14][2][2]=["ನೀವು ಮುದ್ದಾದ ಹುಡುಗಿ."];
mobtalk[14][2][3]=["ಇದು ಆಟ,",
"ಆದ್ದರಿಂದ ನಮ್ಮೆಲ್ಲ ಶಕ್ತಿಯಿಂದ",
"ಹೋರಾಡೋಣ!"];
mobtalk[14][2][4]=["ಅದು ಈ ನಗರದಲ್ಲಿ ನನಗೆ ಕಾಣದ ಫ್ಯಾಷನ್."];
mobtalk[14][2][5]=["ನನಗೆ ಅದು ಇಷ್ಟ.",
"ಇದು ತುಂಬಾ ಸ್ಟೈಲಿಶ್ ಆಗಿದೆ."];
mobtalk[14][2][6]=["ನೀವು ಇದನ್ನು",
"ರಾಕ್ಷಸನಂತೆ ಭಾವಿಸಬಹುದು,",
"ಸರಿಯೇ?"];
mobtalk[14][2][7]=["ಇದರ ಹೆಸರು ರುಬಿದೇವಿ.",
"ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಲು",
"ಸಂತೋಷವಾಯಿತು."];
//3. ಕೊಲೆಗಾರ ಸೂಜಿ
mobtalk[14][3][0]=["ಬಜ್ ಬಜ್ ಬಜ್"];
mobtalk[14][3][1]=["ಮನುಷ್ಯರೊಂದಿಗೆ",
"ಮಾತನಾಡುವುದರಲ್ಲಿ",
"ಅರ್ಥವಿಲ್ಲ"];
mobtalk[14][3][2]=["ಜೇನುನೊಣದ ಕುಟುಕಿನಿಂದ",
"ಕಚ್ಚಬೇಡಿ"];
mobtalk[14][3][3]=["ಏಕೆಂದರೆ ನಾನು ವಿಷಕಾರಿ!"];
mobtalk[14][3][4]=["ನನ್ನ ಹೆಸರು ಕೊಲೆಗಾರ ಸೂಜಿ",
"ಹೆಸರೇ ಸೂಚಿಸುವಂತೆ,",
"ಕೊಲೆಗಾರ ಮತ್ತು ಸೂಜಿ"];
//4. ಪ್ರಿಝಾರ್ಕ್
mobtalk[14][4][0]=["ಪಕ್ಷಿಗಳು",
"ಮಾತನಾಡಲು",
"ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು",
"ನೀವು ಭಾವಿಸಿದ್ದೀರಾ?"];
mobtalk[14][4][1]=["ನಾನು ಹಕ್ಕಿಯ ವೇಷ ಧರಿಸಿದ ಮನುಷ್ಯ"];
mobtalk[14][4][2]=["ಪಕ್ಷಿಗಳು",
"ಸುಂದರವಾಗಿವೆ ಎಂದು",
"ನೀವು ಭಾವಿಸುವುದಿಲ್ಲವೇ?"];
mobtalk[14][4][3]=["ಮನುಷ್ಯರು",
"ಸುಂದರವಾದ ವಸ್ತುಗಳಿಗೆ",
"ಆಕರ್ಷಿತರಾಗುತ್ತಾರೆ"];
mobtalk[14][4][4]=["ಕೋಳಿ ರುಚಿಕರವಾಗಿರುತ್ತದೆ,",
"ಅಲ್ಲವೇ?",
"ಪಕ್ಷಿಗಳು ಕೋಳಿ ತಿನ್ನುತ್ತವೆ"];
//5. ಬೋನ್ ವ್ರೈತ್
mobtalk[14][5][0]=["ನೀವು ಒಂದು ದಿನ",
"ನನ್ನಂತೆಯೇ ಇರುತ್ತೀರಿ"];
mobtalk[14][5][1]=["ನೀವು ಜೀವಂತವಾಗಿರುವಾಗ",
"ಸಂತೋಷವಾಗಿರಿ.",
"ನೀವು ಸಂತೋಷವಾಗಿದ್ದೀರಾ?"];
mobtalk[14][5][2]=["ನೀವು ಜೀವಂತವಾಗಿರುವಾಗ",
"ನೀವು ಮಾಡಬಹುದಾದ",
"ಹಲವು ಕೆಲಸಗಳಿವೆ.",
"ವಿಷಾದವಿಲ್ಲದೆ ಬದುಕಿ"];
//6. ಆಕಾಶ ಕಣ್ಣುಗಳು
mobtalk[14][6][0]=["ಬೀಪ್ ಬೀಪ್ ಬೀಪ್ ಬೀಪ್ ಬೀಪ್"];
mobtalk[14][6][1]=["ಆಸಕ್ತಿದಾಯಕ ವ್ಯಕ್ತಿ.",
"ಅಸಂಗತತೆ ಪತ್ತೆಯಾಗಿದೆ.",
"ಬೀಪ್ ಬೀಪ್ ಬೀಪ್ ಬೀಪ್"];
mobtalk[14][6][2]=["ಭದ್ರತಾ ಕಾರ್ಯದಲ್ಲಿ"];
mobtalk[14][6][3]=["ಗಸ್ತು ತಿರುಗುವಿಕೆ"];
mobtalk[14][6][4]=["ಆ ಬೃಹದಾಕಾರದ ರೋಬೋಟ್  ನೊಂದಿಗೆ",
"ನನ್ನನ್ನು",
"ಸಿಲುಕಿಸಬೇಡಿ"];
//7. ಬರ್ಂಡ್ರೈಕು
mobtalk[14][7][0]=["ಗಾಊಊಊಊ"];
mobtalk[14][7][1]=["ನನಗೆ ಈಗ",
"ನಿನ್ನ ಜೊತೆ ಮಾತನಾಡುವ",
"ಮನಸ್ಥಿತಿ ಇಲ್ಲ."];
mobtalk[14][7][2]=["ನನ್ನ ಹೆಸರು ಬರ್ನ್    ಡ್ರೇಕ್.",
"ಹೆಸರು",
"ಚೆನ್ನಾಗಿದೆ ಅಲ್ವಾ?"];
mobtalk[14][7][3]=["ನನಗೆ ಮಾತನಾಡಲು ಇಷ್ಟವಿಲ್ಲ.",
"ನಾನು ಮಾತನಾಡುವಾಗ",
"ದುರ್ಬಲನಾಗಿ ಕಾಣುತ್ತೇನೆ",
"ಅಲ್ವಾ?"];
//8. ನಾನು ಮಿಸ್ಟೆರಾ.
mobtalk[14][8][0]=["ನಿಮಗೆ ಸಕ್ಯೂಬಸ್",
"ನಿಂದ ಏನಾದರೂ ಬೇಕೇ?",
"ನಿಮಗೆ ಸಕ್ಯೂಬಸ್ ಅಗತ್ಯವಿಲ್ಲ."];
mobtalk[14][8][1]=["ನಿಮಗೆ ಸಕ್ಯೂಬಸ್ ಅಗತ್ಯವಿಲ್ಲ.",
"ಏನು?",
"ನೀವು ಕೂಡ ಸಕ್ಯೂಬಸ್ ಆಗಿದ್ದೀರಾ?"];
mobtalk[14][8][2]=["ನಾನು ಹಾಗೆ ಯೋಚಿಸುವುದಿಲ್ಲ.",
"ನೀವು",
"ಸಕ್ಯೂಬಸ್ ಜೊತೆ",
"ಮಾತನಾಡುವ ಅಗತ್ಯವಿಲ್ಲ."];
mobtalk[14][8][3]=["ನೀವು",
"ಸಕ್ಯೂಬಸ್ ಆಗಲು ಬಯಸುತ್ತೀರಾ?",
"ನೀವು ಆಸಕ್ತಿ ಹೊಂದಿರಬಾರದು",
"ಎಂದು",
"ನಾನು ಬಯಸುತ್ತೇನೆ"];
//9. ಲುಮಿಯೇರಾ
mobtalk[14][9][0]=["ಹೇ. ನಾನು ಲುಮಿಯೆರಾ.",
"ನೀವು ಆಡುತ್ತಿದ್ದೀರಾ?",
"ನಾನು ಆಡುತ್ತಿರುವುದು."];
mobtalk[14][9][1]=["ನನಗೆ ಪರಿಪೂರ್ಣ ಆಟದ",
"ಸಂಗಾತಿ ಸಿಕ್ಕಿದ್ದಾನೆ"];
mobtalk[14][9][2]=["ನೀನು ನನ್ನನ್ನು ತಮಾಷೆ ಮಾಡುತ್ತಿದ್ದೀಯಾ?",
"ನಿಮಗೆ ಯಾವಾಗಲೂ ಸ್ವಾಗತ"];
mobtalk[14][9][3]=["ನೀನು ಇಲ್ಲಿಗೆ ಸೋಲಲು ಬಂದಿದ್ದೀಯಾ?",
"ನಿಮಗೆ ಯಾವಾಗಲೂ ಸ್ವಾಗತ"];
mobtalk[14][9][4]=["ನಿಮ್ಮೊಂದಿಗೆ",
"ಆಟವಾಡಲು ನನಗೆ",
"ಸಮಯವಿಲ್ಲ.",
"ಅದು ನಿಮಗೆ ತಿಳಿದಿದೆಯೇ?"];
//10. ವಾಲ್ಮೆರೇಯಾ
mobtalk[14][10][0]=["ನನ್ನ ಹೆಸರು ವಾಲ್ಮೆರೇಯಾ.",
"ಅತ್ಯಂತ ಆಕರ್ಷಕ ಸಕ್ಯೂಬಸ್.",
"ನಾನು",
"ಹೋರಾಡಲು ಎದುರಾಳಿಯನ್ನು",
"ಕಂಡುಕೊಂಡಿದ್ದೇನೆ!"];
mobtalk[14][10][1]=["ನೀವು ಇಲ್ಲಿಗೆ ಹೇಗೆ ಬಂದಿದ್ದೀರಿ?",
"ಕೊನೆಗೂ ನನ್ನ ಸರದಿ!",
"ಯಾವಾಗ ಬೇಕಾದರೂ",
"ನನ್ನ ಬಳಿಗೆ ಬನ್ನಿ!"];
mobtalk[14][10][2]=["ನೀವು ಎಷ್ಟು ಬಾರಿ ಬೇಕಾದರೂ",
"ಬರಬಹುದು.",
"ನೀವು ಯಾವಾಗಲೂ",
"ಸ್ವಾಗತಿಸುತ್ತೀರಿ.",
"ಹಾಗಾದರೆ, ಹೋರಾಡೋಣ!"];
//0. 모스바트 (Mosubatto)
mobtalk[15][0][0]=["처음 뵙겠습니다. 모스바트예요.",
"잘 부탁해요."];
mobtalk[15][0][1]=["안녕하세요. 잘 지내시나요?",
"저는 잘 지내고 있어요!"];
mobtalk[15][0][2]=["제가 튜토리얼 몬스터예요."];
mobtalk[15][0][3]=["그 기관단총, 웃길 정도로 약하네요."];
mobtalk[15][0][4]=["친구 될래요?",
"우선 그 총은 쏘지 말아 주세요."];
mobtalk[15][0][5]=["밥은 제대로 먹었나요?",
"게임만 하지 말고 밥이나 먹어야지."];
mobtalk[15][0][6]=["잘 지내요? 게임할 기력은 있는 것 같네요.",
"다행이네요."];
mobtalk[15][0][7]=["즐기고 있니? 뭐든지 즐기면서 해야지"];
//1. 파루파이 (Parupuai)
mobtalk[15][1][0]=["나 왔어! 레츠 고!"];
mobtalk[15][1][1]=["웰컴!"];
mobtalk[15][1][2]=["서프라이즈!"];
mobtalk[15][1][3]=["일어나, 일어나! 아침이야!"];
mobtalk[15][1][4]=["나랑 연애 이야기나 할래?"];
mobtalk[15][1][5]=["나는 파루파이!"];
//2. 루비데비 (Rubidevi)
mobtalk[15][2][0]=["낯선 얼굴이네"];
mobtalk[15][2][1]=["너. 어디서 왔어?"];
mobtalk[15][2][2]=["귀여운 여자아이네"];
mobtalk[15][2][3]=["게임이니까 전력으로 싸우자"];
mobtalk[15][2][4]=["이 도시에서는 보기 드문 패션이네"];
mobtalk[15][2][5]=["마음에 들어. 정말 세련됐어"];
mobtalk[15][2][6]=["데몬 같다고 생각하겠지?",
"데빌이야"];
mobtalk[15][2][7]=["루비데비라는 이름이야",
"잘 부탁해"];
//3. 킬러 니들 (Kirānīdu~ru)
mobtalk[15][3][0]=["윙윙윙~"];
mobtalk[15][3][1]=["인간이랑 말해도 소용없어"];
mobtalk[15][3][2]=["벌침에 쏘이지 않는 게 중요해"];
mobtalk[15][3][3]=["나한테는 독이 있으니까!"];
mobtalk[15][3][4]=["내 이름은 킬러 니들",
"이름 그대로, 킬러와 니들"];
//4. 프리즈 하크 (Purizuhāku)
mobtalk[15][4][0]=["새가 말을 못 한다고 생각했어?"];
mobtalk[15][4][1]=["난 새인 척하는 인간이야"];
mobtalk[15][4][2]=["새는 아름답다고 생각하지 않아?"];
mobtalk[15][4][3]=["아름다운 것에 인간은",
"다가가게 마련이지"];
mobtalk[15][4][4]=["닭고기는 맛있지",
"새는 닭고기를 먹어"];
//5. 본 레이스 (Bōnreisu)
mobtalk[15][5][0]=["너도 언젠가 나처럼 될 거야"];
mobtalk[15][5][1]=["살아있는 동안 행복해져라. 너는 행복해?"];
mobtalk[15][5][2]=["살아있는 동안 할 수 있는 일은 정말 많아. 후회 없이 살자"];
//6. 스카이 아이즈 (Sukaiaizu)
mobtalk[15][6][0]=["삐삐삐삐"];
mobtalk[15][6][1]=["주의 인물　이상 감지　삐삐삐삐"];
mobtalk[15][6][2]=["경비 중"];
mobtalk[15][6][3]=["순찰 중"];
mobtalk[15][6][4]=["고물 로봇이랑 묶지 마"];
//7. 번드레이크 (Bānudoreiku)
mobtalk[15][7][0]=["갸오오오오오오오오오오오오"];
mobtalk[15][7][1]=["지금은 너랑 이야기할 기분이 아니야"];
mobtalk[15][7][2]=["내 이름은 번드레이크. 멋진 이름이지?"];
mobtalk[15][7][3]=["말하는 건 별로 안 좋아해",
"내가 말을 하면 약해 보이잖아?"];
//8. 미스테라입니다.
mobtalk[15][8][0]=["서큐버스에게 무슨 볼일이 있나?",
"당신에게 서큐버스는",
"필요 없어"];
mobtalk[15][8][1]=["뭐? 당신도 서큐버스야?",
"설마 그렇게 생각하진 않아"];
mobtalk[15][8][2]=["당신은 서큐버스와 이야기할",
"필요가 없어"];
mobtalk[15][8][3]=["서큐버스가 되고 싶은 거야?",
"관심 갖지 말아 줘"];
//9. 루미에라
mobtalk[15][9][0]=["야호. 난 루미에라",
"놀고 있는 거야?",
"노는 건 나"];
mobtalk[15][9][1]=["딱 좋은 놀이 상대",
"찾아버렸네"];
mobtalk[15][9][2]=["놀리는 거야?",
"언제든 환영이야"];
mobtalk[15][9][3]=["지러 온 건가?",
"언제든 환영이야"];
mobtalk[15][9][4]=["너랑 놀 시간은 없어",
"너도 알잖아?"];
//10. 발메리아
mobtalk[15][10][0]=["내 이름은 발메리아",
"서큐버스 중 가장 매혹적인 여자",
"싸울 상대를 찾았어!"];
mobtalk[15][10][1]=["여기까지 어떻게 온 거지?",
"드디어 내 차례가 왔구나!",
"언제든 달려들어 봐!"];
mobtalk[15][10][2]=["몇 번이고 와도 괜찮아",
"언제든 환영이야",
"자, 그럼 싸워보자!"];
//0. Mosbat
mobtalk[16][0][0]=["Seronok berjumpa dengan awak.",
"Saya Mosbat.",
"Seronok berjumpa dengan awak juga."];
mobtalk[16][0][1]=["Hai. Apa khabar?",
"Saya sihat!"];
mobtalk[16][0][2]=["Saya raksasa dalam tutorial."];
mobtalk[16][0][3]=["Pistol mesin ringan itu lemah",
"sampai boleh ketawa, kan?"];
mobtalk[16][0][4]=["Nak jadi kawan?",
"Pertama sekali,",
"tolong jangan tembak pistol itu."];
mobtalk[16][0][5]=["Awak dah makan belum?",
"Jangan asyik main game je",
"awak kena makan juga, tau."];
mobtalk[16][0][6]=["Awak ok? Awak nampak",
"macam ada tenaga nak main game.",
"Baguslah."];
mobtalk[16][0][7]=["Seronok ke? Kau kena nikmati",
"segala galanya dalam hidup."];
//1. Parupuai
mobtalk[16][1][0]=["Saya ada di sini! Jom!"];
mobtalk[16][1][1]=["Sama sama!"];
mobtalk[16][1][2]=["Kejutan!"];
mobtalk[16][1][3]=["Bangun, bangun! Sudah pagi!"];
mobtalk[16][1][4]=["Mau borak pasal cinta?"];
mobtalk[16][1][5]=["Saya Parupuai!"];
//2. Rubidevi
mobtalk[16][2][0]=["Kau nampak macam orang asing."];
mobtalk[16][2][1]=["Hei, kau. Dari mana kau datang?"];
mobtalk[16][2][2]=["Kau gadis comel, kan?"];
mobtalk[16][2][3]=["Ini cuma permainan,",
"jadi ayuh kita beri yang terbaik."];
mobtalk[16][2][4]=["Itu gaya yang jarang saya lihat di sini."];
mobtalk[16][2][5]=["Saya suka. Kau sangat bergaya."];
mobtalk[16][2][6]=["Kau fikir saya ini iblis, kan?",
"Saya syaitan."];
mobtalk[16][2][7]=["Nama saya Rubidevi.",
"Seronok berkenalan",
"dengan kau."];
//3. Jarum Pembunuh (Kirānīdu~ru)
mobtalk[16][3][0]=["Bzz bzz bzzzzz"];
mobtalk[16][3][1]=["Tak ada gunanya",
"bercakap dengan manusia."];
mobtalk[16][3][2]=["Pastikan kau tak kena",
"sengat oleh sengat lebah."];
mobtalk[16][3][3]=["Saya ada racun, kau tahu!"];
mobtalk[16][3][4]=["Nama saya Jarum Pembunuh.",
"Seperti namanya",
"Pembunuh dan Jarum."];
//4. Pris Hawk (Purizuhāku)
mobtalk[16][4][0]=["Adakah kamu fikir",
"burung tidak boleh bercakap?"];
mobtalk[16][4][1]=["Saya manusia yang",
"berpura pura menjadi burung."];
mobtalk[16][4][2]=["Kamu tidak fikir burung itu cantik?"];
mobtalk[16][4][3]=["Manusia memang tidak dapat tidak",
"tertarik kepada",
"benda benda yang cantik."];
mobtalk[16][4][4]=["Ayam sedap, kan?",
"Burung makan ayam."];
//5. Bone Reiss (Bōnreisu)
mobtalk[16][5][0]=["Suatu hari nanti,",
"kamu akan menjadi seperti saya."];
mobtalk[16][5][1]=["Pastikan kau gembira selagi kau hidup.",
"Kau gembira?"];
mobtalk[16][5][2]=["Banyak sangat yang boleh",
"kau lakukan selagi kau hidup.",
"Mari hidup tanpa penyesalan."];
//6. Sky Eyes (Sukaiaizu)
mobtalk[16][6][0]=["Beep beep beep beep"];
mobtalk[16][6][1]=["Orang yang menjadi perhatian.",
"Keabnormalan dikesan.",
"Beep beep beep beep"];
mobtalk[16][6][2]=["Tugas pengawal"];
mobtalk[16][6][3]=["Patroli"];
mobtalk[16][6][4]=["Jangan samakan aku",
"dengan robot robot kekok itu"];
//7. Burn Drake (Bānudoreiku)
mobtalk[16][7][0]=["Gyaaaaaaaaaaaaaaaaaaaah"];
mobtalk[16][7][1]=["Aku tak ada mood",
"nak bercakap dengan kau sekarang."];
mobtalk[16][7][2]=["Nama aku Burn Drake.",
"Nama hebat, kan?"];
mobtalk[16][7][3]=["Aku tak suka bercakap.",
"Bila aku bercakap,",
"nampak aku lemah, kan?"];
//8. Ini Mysteira.
mobtalk[16][8][0]=["Kau nak apa apa",
"daripada seorang succubus?",
"Kau tak perlukan seorang succubus."];
mobtalk[16][8][1]=["Apa? Kau pun succubus juga?",
"Aku rasa taklah."];
mobtalk[16][8][2]=["Anda tidak perlu",
"berbicara dengan seorang succubus."];
mobtalk[16][8][3]=["Adakah anda mahu",
"menjadi seorang succubus?",
"Saya tidak mahu anda",
"berminat pada saya."];
//9. Lumiera
mobtalk[16][9][0]=["Yoo hoo. Saya Lumiera.",
"Adakah anda sedang berseronok?",
"Saya yang bermain."];
mobtalk[16][9][1]=["Saya baru sahaja menemui",
"rakan main yang sempurna."];
mobtalk[16][9][2]=["Adakah anda menggoda saya?",
"Sila datang bila bila masa."];
mobtalk[16][9][3]=["Adakah anda datang untuk kalah?",
"Sila datang bila bila masa."];
mobtalk[16][9][4]=["Saya tiada masa",
"untuk bermain dengan anda.",
"Anda tahu itu, bukan?"];
//10. Valmeria
mobtalk[16][10][0]=["Nama saya Valmeria.",
"Saya adalah wanita paling memikat",
"di antara para succubi.",
"Saya telah menemui",
"seseorang untuk bertarung!"];
mobtalk[16][10][1]=["Saya tertanya tanya bagaimana",
"kamu berjaya sampai sejauh ini?",
"Giliran saya akhirnya tiba!",
"Serang saya bila bila masa!"];
mobtalk[16][10][2]=["Kamu boleh datang",
"sesering yang kamu suka.",
"Kamu sentiasa dialu alukan.",
"Baiklah, jom bertarung!"];
//0. മോസ്ബാറ്റ്
mobtalk[17][0][0]=["കണ്ടുമുട്ടിയതിൽ സന്തോഷം. ഞാൻ മോസ്ബാ",
"റ്റ്.നിങ്ങളെ കണ്ടുമുട്ടിയതിൽ സന്തോഷം."];
mobtalk[17][0][1]=["ഹലോ. സുഖമാണോ?",
"ഞാൻ സുഖമായിരിക്കുന്നു!"];
mobtalk[17][0][2]=["ഞാനാണ് ട്യൂട്ടോറിയലിലെ മോൺസ്റ്റർ."];
mobtalk[17][0][3]=["നിങ്ങളുടെ ആ സബ്മെഷീൻ ഗൺ",
"ചിരിച്ചുതോൽക്കാവുന്നത്ര ദുർബലമല്ലേ?"];
mobtalk[17][0][4]=["സുഹൃത്തുക്കളാകണോ?",
"ആദ്യം, ദയവായി ആ തോക്ക് ഉപയോഗിച്ച്",
"വെടിവെക്കരുത്."];
mobtalk[17][0][5]=["ശരിയായി ഭക്ഷണം കഴിച്ചോ?",
"എപ്പോഴും ഗെയിം കളിച്ചിരിക്കരുത് നിങ്ങൾ",
"കഴിക്കണം, അറിയാമല്ലോ."];
mobtalk[17][0][6]=["നിങ്ങൾക്ക് കുഴപ്പമൊന്നുമില്ലേ? ഗെയിം",
"കളിക്കാൻ ആവശ്യത്തിന് ഊർജ്ജം നിങ്ങൾക്കു",
"ണ്ടെന്ന് തോന്നുന്നു. അത് നല്ലത്."];
mobtalk[17][0][7]=["നിങ്ങൾക്ക് ഇത് ആസ്വദിക്കാൻ കഴിയുന്നുണ്ടോ?",
"നിങ്ങൾ എല്ലാം",
"ആസ്വദിക്കണം."];
//1. പരുപുയി
mobtalk[17][1][0]=["ഞാൻ വന്നുകഴിഞ്ഞു! പോകാം!"];
mobtalk[17][1][1]=["ക്ഷണിക്കപ്പെട്ടു!"];
mobtalk[17][1][2]=["അപ്രതീക്ഷിതം!"];
mobtalk[17][1][3]=["ഉണർന്നെഴുന്നേൽക്ക്, ഉണർന്നെഴുന്നേൽക്ക്!",
"രാവിലെയായി!"];
mobtalk[17][1][4]=["പ്രണയത്തെക്കുറിച്ച് സംസാരിക്കണോ?"];
mobtalk[17][1][5]=["ഞാൻ പരുപുയി!"];
//2. റുബിദേവി
mobtalk[17][2][0]=["നിങ്ങളെ അപരിചിതനായി തോന്നുന്നു."];
mobtalk[17][2][1]=["അവിടെ നിൽക്കൂ. എവിടെ നിന്നാണ് വന്നത്?"];
mobtalk[17][2][2]=["നീ ഒരു ഭംഗിയുള്ള പെൺകുട്ടിയാണല്ലോ?"];
mobtalk[17][2][3]=["ഇതൊരു കളിയാണ്, അതുകൊണ്ട് നമുക്ക്",
"നമ്മുടെ",
"കഴിവിൻ്റെ പരമാവധി ചെയ്യാം."];
mobtalk[17][2][4]=["അതൊരു സ്റ്റൈലാണ്, ഞാനിവിടെയിങ്ങനെ",
"കണ്ടിട്ടില്ലാത്ത ഒന്ന്."];
mobtalk[17][2][5]=["എനിക്കിത് ഇഷ്ടപ്പെട്ടു. നീ വളരെ",
"സ്റ്റൈലിഷാണ്."];
mobtalk[17][2][6]=["ഞാനൊരു രാക്ഷസിയാണെന്നാണോ നീ കരുതുന്നത്?",
"ഞാനൊരു ചെകുത്താനാണ്."];
mobtalk[17][2][7]=["എൻ്റെ പേര് റുബിദേവി എന്നാണ്.",
"കണ്ടുമുട്ടിയതിൽ സന്തോഷം."];
//3. കില്ലർ നീഡിൽ (കിരാനീദു~രു)
mobtalk[17][3][0]=["ബസ്സ് ബസ്സ് ബസ്സ്സ്സ്സ്"];
mobtalk[17][3][1]=["മനുഷ്യരുമായി സംസാരിച്ചിട്ട് ഒരു",
"കാര്യവുമില്ല."];
mobtalk[17][3][2]=["ഒരു തേനീച്ചയുടെ കുത്തേൽക്കാതെ",
"സൂക്ഷിക്കുക."];
mobtalk[17][3][3]=["എൻ്റെ കയ്യിൽ വിഷമുണ്ട്, കണ്ടോ!"];
mobtalk[17][3][4]=["എൻ്റെ പേര് കില്ലർ നീഡിൽ എന്നാണ്.",
"പേര് സൂചിപ്പിക്കുന്നത് പോലെ തന്നെ",
"കില്ലറും നീഡിലും."];
//4. പ്രിസ് ഹോക്ക് (പുരിസുഹാക്കു)
mobtalk[17][4][0]=["പക്ഷികൾക്ക് സംസാരിക്കാൻ കഴിയില്ലെന്നാണോ",
"നിങ്ങൾ കരുതിയത്?"];
mobtalk[17][4][1]=["ഞാനൊരു മനുഷ്യനാണ്, പക്ഷിയായി",
"അഭിനയിക്കുകയാണ്. "];
mobtalk[17][4][2]=["പക്ഷികൾ സുന്ദരമല്ലേ?"];
mobtalk[17][4][3]=["മനുഷ്യർക്ക് സുന്ദരമായ കാര്യങ്ങളിലേക്ക്",
"ആകർഷിക്കപ്പെടാതിരിക്കാൻ കഴിയില്ല."];
mobtalk[17][4][4]=["ചിക്കൻ രുചികരമാണ്, അല്ലേ?",
"പക്ഷികൾ ചിക്കൻ കഴിക്കും."];
//5. ബോൺ റെയ്സ് (ബോൺറെയിസു)
mobtalk[17][5][0]=["ഒരു ദിവസം, നിങ്ങളും എന്നെപ്പോലെയാകും."];
mobtalk[17][5][1]=["ജീവിച്ചിരിക്കുമ്പോൾ സന്തോഷമായിരിക്കണം.",
"നീ സന്തോഷവാനാണോ?"];
mobtalk[17][5][2]=["ജീവിച്ചിരിക്കുമ്പോൾ ഒരുപാട് കാര്യങ്ങൾ ചെയ്യാനുണ്ട്.",
"ഖേദങ്ങളില്ലാതെ ജീവിക്കാം."];
//6. സ്കൈ ഐസ് (സുകൈയാഇസു)
mobtalk[17][6][0]=["ബീപ് ബീപ് ബീപ് ബീപ്"];
mobtalk[17][6][1]=["താൽപ്പര്യമുള്ള വ്യക്തി. അസാധാരണത്വം",
"കണ്ടെത്തി. ബീപ് ബീപ് ബീപ് ബീപ്"];
mobtalk[17][6][2]=["കാവൽ ഡ്യൂട്ടിയിൽ"];
mobtalk[17][6][3]=["പട്രോളിംഗിൽ"];
mobtalk[17][6][4]=["ആ പഴഞ്ചൻ റോബോട്ടുകളുടെ കൂടെ",
"എന്നെ കൂട്ടരുത്  "];
//7. ബേൺ ഡ്രേക്ക് (ബാനുഡോറെകു)
mobtalk[17][7][0]=["ഗൂഊഊഊഊഊഊ"];
mobtalk[17][7][1]=["എനിക്കിപ്പോൾ നിന്നോട്",
"സംസാരിക്കാൻ തോന്നുന്നില്ല."];
mobtalk[17][7][2]=["എൻ്റെ പേര് ബേൺ ഡ്രേക്ക് എന്നാണ്.",
"കേൾക്കാൻ കൊള്ളാമല്ലോ, അല്ലേ?"];
mobtalk[17][7][3]=["എനിക്ക് സംസാരിക്കാൻ ഇഷ്ടമല്ല.",
"ഞാൻ സംസാരിക്കുമ്പോൾ എനിക്ക്",
"ദുർബലനായി തോന്നുന്നു, അല്ലേ?"];
//8. ഇത് മിസ്റ്റീറയാണ്.
mobtalk[17][8][0]=["ഒരു സക്കുബസിൽ നിന്ന്",
"എന്തെങ്കിലും വേണോ?",
"നിങ്ങൾക്ക് ഒരു സക്കുബസ്",
"ആവശ്യമില്ല."];
mobtalk[17][8][1]=["എന്ത്? നിങ്ങളും ഒരു സക്കുബസാണോ?",
"ഞാനങ്ങനെ കരുതുന്നില്ല."];
mobtalk[17][8][2]=["ഒരു സക്ക്യൂബസുമായി സംസാരിക്കാൻ",
"നിങ്ങൾക്ക് ആവശ്യമില്ല."];
mobtalk[17][8][3]=["ഒരു സക്ക്യൂബസ് ആകാൻ നിങ്ങൾ",
"ആഗ്രഹിക്കുന്നുണ്ടോ?",
"നിങ്ങൾ എനിക്ക് താൽപ്പര്യം കാണിക്കരുത്."];
//9. ലുമിയേര
mobtalk[17][9][0]=["ഹേയ്. ഞാൻ ലുമിയേരയാണ്.",
"നിങ്ങൾ കളിക്കുകയാണോ?",
"കളിക്കുന്നത് ഞാനാണ്."];
mobtalk[17][9][1]=["എനിക്കൊരു",
"മികച്ച കളിത്തോഴിയെ കിട്ടിയിരിക്കുന്നു."];
mobtalk[17][9][2]=["നിങ്ങൾ എന്നെ കളിയാക്കുകയാണോ?",
"നിങ്ങൾക്ക് എപ്പോഴും സ്വാഗതം."];
mobtalk[17][9][3]=["തോൽക്കാൻ വേണ്ടിയാണോ വന്നത്?",
"നിങ്ങൾക്ക് എപ്പോഴും സ്വാഗതം."];
mobtalk[17][9][4]=["നിങ്ങളുമായി കളിക്കാൻ എനിക്ക് സമയമില്ല.",
"അത് നിങ്ങൾക്കറിയില്ലേ?"];
//10. വാൽമെരിയ
mobtalk[17][10][0]=["എൻ്റെ പേര് വാൽമെരിയ എന്നാണ്.",
"സുക്കൂബികളിൽ ഏറ്റവും ആകർഷകയായ",
"സ്ത്രീ ഞാനാണ്. യുദ്ധം ചെയ്യാൻ ഒരാളെ",
"കിട്ടിയിരിക്കുന്നു!"];
mobtalk[17][10][1]=["നീ എങ്ങനെ ഇത്രയും ദൂരം എത്തി?",
"എൻ്റെ ഊഴം ഒടുവിൽ വന്നിരിക്കുന്നു!",
"എപ്പോൾ വേണമെങ്കിലും എൻ്റെ നേരെ വരൂ!"];
mobtalk[17][10][2]=["നിങ്ങൾക്ക് ഇഷ്ടമുള്ളപ്പോഴെല്ലാം വരാം.",
"നിങ്ങൾക്ക് എപ്പോഴും സ്വാഗതം.",
"അപ്പോൾ, നമുക്ക് യുദ്ധം ചെയ്യാം!"];
//0. मॉसबॅट
mobtalk[18][0][0]=["तुला भेटून आनंद झाला. मी मॉसबॅट.",
"तुला भेटून आनंद झाला."];
mobtalk[18][0][1]=["हॅलो. कसा आहेस?",
"मी एकदम मस्त आहे!"];
mobtalk[18][0][2]=["मी ट्यूटोरियलमधला मॉन्स्टर आहे."];
mobtalk[18][0][3]=["ती सबमशीन गन खूपच कमकुवत आहे, नाही का?"];
mobtalk[18][0][4]=["मित्र होऊ?",
"सगळ्यात पहिले, कृपया ती बंदूक चालवू नकोस."];
mobtalk[18][0][5]=["तू नीट जेवलंस का?",
"संपूर्ण वेळ फक्त गेम्स खेळू नकोस",
"तुला जेवायला हवं, माहितीये ना."];
mobtalk[18][0][6]=["तू ठीक आहेस? तुला नक्कीच गेम्स",
"खेळण्याइतकी ऊर्जा आहे असं दिसतंय.",
"छान."];
mobtalk[18][0][7]=["मजा येत आहे का? आयुष्यात प्रत्येक",
"गोष्टीचा आनंद घ्यायला हवा."];
//१. पारुपुआई(1)
mobtalk[18][1][0]=["मी आलोय! चला!"];
mobtalk[18][1][1]=["तुम्ही येऊ शकता!"];
mobtalk[18][1][2]=["सरप्राइज!"];
mobtalk[18][1][3]=["जाग व्हा, जाग व्हा! सकाळ झालीय!"];
mobtalk[18][1][4]=["प्रेमाबद्दल गप्पा मारायला आवडेल का?"];
mobtalk[18][1][5]=["मी पल्प आय आहे!"];
//२. रुबिदेवी(2)
mobtalk[18][2][0]=["तू नवीन चेहरा दिसतोस."];
mobtalk[18][2][1]=["अरे, तिथं. तू कुठून आलास?"];
mobtalk[18][2][2]=["तू छान मुलगी आहेस, नाही का?"];
mobtalk[18][2][3]=["हा एक खेळ आहे, तर मग आपण",
"पूर्ण प्रयत्न करूया."];
mobtalk[18][2][4]=["अशी स्टाईल इथे सहसा दिसत नाही."];
mobtalk[18][2][5]=["मला आवडली. तू खूप स्टायलिश आहेस."];
mobtalk[18][2][6]=["तू मला राक्षस समजतोस, नाही का?",
"मी प्रत्यक्षात एक सैतान आहे."];
mobtalk[18][2][7]=["माझं नाव रुबिदेवी.",
"तुला भेटून आनंद झाला."];
//3. किलर नीडल (किराणीदु~रु)(3)
mobtalk[18][3][0]=["झंझंझंझंझं"];
mobtalk[18][3][1]=["माणसांशी बोलण्याचा काहीच फायदा नाही."];
mobtalk[18][3][2]=["फक्त एवढं पाहशील की तुला",
"मधमाशीच्या काट्याने टोचलं जाऊ नये.  "];
mobtalk[18][3][3]=["माझ्याकडे विष आहे, बघ!"];
mobtalk[18][3][4]=["माझं नाव किलर नीडल.",
"नावाप्रमाणेच: किलर आणि नीडल."];
//४. प्रिस-हॉक (प्युरिझुहaku)(4)
mobtalk[18][4][0]=["तुला वाटलं पक्षी बोलू शकत नाहीत?"];
mobtalk[18][4][1]=["मी एक माणूस आहे जो",
"पक्ष्याचं रूप धारण करतो."];
mobtalk[18][4][2]=["तुला पक्षी सुंदर वाटत नाहीत का?"];
mobtalk[18][4][3]=["माणूस सुंदर गोष्टींकडे",
"आकर्षित होतोच."];
mobtalk[18][4][4]=["कोंबडी स्वादिष्ट असते, नाही का?",
"पक्षी कोंबडी खातात."];
//५. बोन राइस (Bōnreisu)(5)
mobtalk[18][5][0]=["एक दिवस, तू माझ्यासारखाच होशील."];
mobtalk[18][5][1]=["जिवंत असताना आनंदी राहण्याची खात्री करा.",
"तू आनंदी आहेस का?"];
mobtalk[18][5][2]=["जिवंत असताना तू खूप काही करू शकतोस. चला.",
"कोणताही पश्चात्ताप न करता जगूया."];
//६. स्काय आयज (सुकाईझू)(6)
mobtalk[18][6][0]=["बीप बीप बीप बीप"];
mobtalk[18][6][1]=["रुचीचा व्यक्ती.",
"असामान्यता आढळली. बीप बीप बीप बीप"];
mobtalk[18][6][2]=["गस्तगारीवर"];
mobtalk[18][6][3]=["गस्तगारीवर"];
mobtalk[18][6][4]=["मला त्या जडसर रोबोट्ससोबत एकत्र करू नकोस"];
//७. बर्न ड्रेक (बानुदोरेकु)(7)
mobtalk[18][7][0]=["गाओओओओओओओओओओओओओ"];
mobtalk[18][7][1]=["आत्ता मला तुझ्याशी बोलायची इच्छा नाही."];
mobtalk[18][7][2]=["माझं नाव बर्न ड्रेक आहे. छान नाव आहे ना?"];
mobtalk[18][7][3]=["मला बोलायला आवडत नाही.",
"जेव्हा मी बोलतो तेव्हा मी कमकुवत दिसतो,",
"नाही का?"];
//८. ही मायस्टेरा आहे.(8)
mobtalk[18][8][0]=["सुकुबाकडून तुला काही हवंय का?",
"तुला सुकुबाची",
"गरज नाही."];
mobtalk[18][8][1]=["काय? तू पण सुकुबा आहेस का?",
"मला तर तसं वाटत नाही."];
mobtalk[18][8][2]=["तुला",
"सुक्युबसशी बोलण्याची गरज नाही."];
mobtalk[18][8][3]=["तुला सुक्युबस व्हायचंय का?",
"मला तुझी आवड निर्माण व्हावी असं",
"मला नाही वाटतं."];
//९. लुमिएरा(9)
mobtalk[18][9][0]=["यू-हू. मी लुमिएरा आहे.",
"तू खेळत आहेस का?",
"खेळणारी मी आहे."];
mobtalk[18][9][1]=["मला नुकतीच सापडली आहे",
"एक परिपूर्ण खेळसोबतची साथीदार."];
mobtalk[18][9][2]=["तू मला चिडवत आहेस का?",
"तुला कधीही येण्याचं स्वागत आहे."];
mobtalk[18][9][3]=["तू हरण्यासाठी आला आहेस का?",
"तुला कधीही येण्याचं स्वागत आहे."];
mobtalk[18][9][4]=["माझ्याकडे तुझ्यासोबत खेळायला वेळ नाही.",
"तुला ते माहीत आहे ना?"];
//१०. वॅलमेरिया(10)
mobtalk[18][10][0]=["माझं नाव वॅलमेरिया आहे.",
"मी सॅक्युबी मधील सर्वात मोहक",
"स्त्री आहे. मला लढायला कोणी सापडलंय!"];
mobtalk[18][10][1]=["अरे देवा, तू इथपर्यंत कसा पोचलास?",
"माझी पाळी अखेर आलीच!",
"केव्हाही माझ्यावर हल्ला कर!"];
mobtalk[18][10][2]=["तू जेव्हाही येऊ शकतोस.",
"तुझा नेहमीच येथे स्वागत आहे.",
"तर मग, चला लढूया!"];
//0. မော့စ်ဘတ်
mobtalk[19][0][0]=["တွေ့ရတာ ဝမ်းသာပါတယ်။",
"ကျွန်တော် မော့စ်ဘတ်ပါ။",
"တွေ့ရတာ ဝမ်းသာပါတယ်။"];
mobtalk[19][0][1]=["မင်္ဂလာပါ။ ဘယ်လိုနေလဲ။",
"ကောင်းပါတယ်။"];
mobtalk[19][0][2]=["ကျွန်တော်က သင်ခန်းစာထဲက မုဆိုးပါ။"];
mobtalk[19][0][3]=["ဒီ စပ်မက်စိုင်ခဲ သေနတ်က",
"ရယ်စရာလောက်အောင် အားနည်းတယ် မဟုတ်လား။"];
mobtalk[19][0][4]=["မိတ်ဆွေဖြစ်ကြမလား။",
"အရင်ဆုံးတော့ အဲဒီသေနတ်ကို မပစ်ပါနဲ့။"];
mobtalk[19][0][5]=["အစာအပြည့်စားပြီးပြီလား။",
"ဂိမ်းပဲ မကစားပါနဲ့",
"စားဖို့လိုတယ်ဆိုတာ မှတ်ထားပါ။"];
mobtalk[19][0][6]=["အဆင်ပြေပါသလား။ ဂိမ်းကစားဖို့",
"စွမ်းအင်လုံလောက်နေတယ်လို့ မြင်ရတယ်။",
"ကောင်းတာပဲ။"];
mobtalk[19][0][7]=["ပျော်ရွှင်နေလား?",
"ဘဝမှာ အရာအားလုံးကို",
"ပျော်ရွှင်ခံစားသင့်တယ်။"];
//၁။ Parupuai
mobtalk[19][1][0]=["ငါဒီမှာပါပြီ! သွားကြရအောင်!"];
mobtalk[19][1][1]=["ကြိုဆိုပါတယ်!"];
mobtalk[19][1][2]=["အံ့ဩစရာ!"];
mobtalk[19][1][3]=["နိုးပါဦး၊ နိုးပါဦး! မနက်ပြီ!"];
mobtalk[19][1][4]=["ချစ်ခြင်းအကြောင်း စကားပြောမလား?"];
mobtalk[19][1][5]=["ငါက Parupuai ပါ!"];
//၂။ Rubidevi
mobtalk[19][2][0]=["မင်းကို မမြင်ဖူးသူတစ်ယောက်လိုပဲ။"];
mobtalk[19][2][1]=["ဟေ့ မင်း။ ဘယ်ကလာတာလဲ?"];
mobtalk[19][2][2]=["မင်းက ချစ်စရာကောင်းတဲ့",
"မိန်းကလေးတစ်ယောက်ပဲနော်။"];
mobtalk[19][2][3]=["ဒီကစားတာပဲဆိုတော့ အားလုံးထုတ်ပြီ",
"ကစားကြရအောင်။"];
mobtalk[19][2][4]=["ဒီစတိုင်က ဒီမှာ မမြင်ဖူးဘူး။"];
mobtalk[19][2][5]=["ကြိုက်တယ်။ မင်းက စတိုင်ကျတယ်။"];
mobtalk[19][2][6]=["ငါ့ကို မကောင်းဆိုးဝါးတစ်ယောက်",
"ထင်နေတာလား။ ငါက မကောင်းဆိုးဝါးပဲ။"];
mobtalk[19][2][7]=["ငါ့နာမည်က Rubidevi လို့ခေါ်တယ်။",
"တွေ့ရတာ ဝမ်းသာပါတယ်။"];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[19][3][0]=["ဘွပ် ဘွပ် ဘွပ်"];
mobtalk[19][3][1]=["လူတွေကို စကားပြောတာ အကျိုးမရှိဘူး။"];
mobtalk[19][3][2]=["ပျားရဲ့ အဆိပ်တံနဲ့ မထိအောင် သေချာထားပါ။"];
mobtalk[19][3][3]=["ငါ့မှာ အဆိပ်ရှိတယ်နော်!"];
mobtalk[19][3][4]=["ကျွန်မနာမည်က ကီးလာ နီးဒယ်ပါ။",
"နာမည်အတိုင်းပါပဲ။ ကီးလာနဲ့ နီးဒယ်။"];
//၄။ ပရီစ်-ဟော့ခ် (ပူရီဇုဟာကု)(4)
mobtalk[19][4][0]=["ငှက်တွေ စကားမပြောနိုင်ဘူးထင်လား။"];
mobtalk[19][4][1]=["ငါက ငှက်တစ်ကောင်လို သရုပ်ဆောင်ထားတဲ့",
"လူတစ်ယောက်ပါ။"];
mobtalk[19][4][2]=["ငှက်တွေ လှတယ် မထင်ဘူးလား။"];
mobtalk[19][4][3]=["လူတွေက လှပတဲ့အရာတွေကို",
"ဆွဲဆောင်ခံရတာ မရှောင်လွှဲနိုင်ကြဘူး။"];
mobtalk[19][4][4]=["ကြက်သားက ချိုမြိန်တယ် မဟုတ်လား။",
"ငှက်တွေက ကြက်သားစားကြတယ်။"];
//၅။ ဘွန်းရေးစ် (ဘွန်းရေးစု)(5)
mobtalk[19][5][0]=["တစ်နေ့မှာ မင်းက ငါလို ဖြစ်လာမှာပါ။"];
mobtalk[19][5][1]=["အသက်ရှင်နေစဉ်မှာ ပျော်ရွှင်ထားပါ။",
"မင်းပျော်ရွှင်နေလား။"];
mobtalk[19][5][2]=["အသက်ရှင်နေစဉ်မှာ လုပ်လို့ရတာတွေ များပြားတယ်။",
"စိတ်မကျန်အောင် နေကြရအောင်။"];
//၆။ ကောင်းကင်မျက်လုံး (စူကာအိဇု)(6)
mobtalk[19][6][0]=["ဘီးပ် ဘီးပ် ဘီးပ် ဘီးပ်"];
mobtalk[19][6][1]=["စိတ်ဝင်စားစရာ ပုဂ္ဂိုလ်။ မမှန်ကန်မှု",
"တွေ့ရှိသည်။ ဘီးပ် ဘီးပ် ဘီးပ် ဘီးပ်"];
mobtalk[19][6][2]=["စောင့်ကြပ်ရေး တာဝန်ထမ်းဆောင်နေသည်။"];
mobtalk[19][6][3]=["လှည့်ကင်း ထမ်းဆောင်နေသည်။"];
mobtalk[19][6][4]=["ဒီ အလေးကြီးတဲ့ ရိုဘော့တွေလို",
"ငါ့ကို မထည့်တွက်နဲ့။"];
//၇။ ဘာန် ဒရိတ် (ဘာနုဒိုရိကု)(7)
mobtalk[19][7][0]=["ဂျာာာာာာာာာာာာာာာာာာာာာာာ"];
mobtalk[19][7][1]=["သင်မှာ"];
mobtalk[19][7][2]=["ဆက်ကဘတ်နဲ့ စကားပြောဖို့ မလိုပါဘူး။"];
mobtalk[19][7][3]=["ဆက်ကဘတ်တစ်ယောက် ဖြစ်ချင်ပါသလား?",
"ငါ့ကို စိတ်ဝင်စားတာ မလိုချင်ဘူး။"];
//၉။ လူမီရာ(8)
mobtalk[19][8][0]=["သင် succubus ထံမှတစ်ခုခုလိုအပ်ပါသလား။",
"သင် succubus မလိုအပ်ပါ။"];
mobtalk[19][8][1]=["ဘာလဲ? မင်းကရော succubus လား?",
"ငါထင်မှာမဟုတ်ဘူး။"];
mobtalk[19][8][2]=["သင် succubus နှ",
"င့်စကားပြောရန်မလိုအပ်ပါ။"];
mobtalk[19][8][3]=["သင် succubus ဖြစ်ချင်ပါသလား။",
"မင်းကို စိတ်မဝင်စားစေချင်ဘူး။"];
//9. Lumiera
mobtalk[19][9][0]=["ဟိုမှာ။ ငါ Lumiera ပါ။",
"ဂိမ်းဆော့နေတာလား။",
"ကျွန်တော်က ဂိမ်းဆော့တဲ့သူပါ။"];
mobtalk[19][9][1]=["းပြည့်စုံတဲ့ ကစားဖော်ကို",
"ငါတွေ့ပြီ"];
mobtalk[19][9][2]=["မင်းငါ့ကို လှောင်ပြောင်နေတာလား။",
"အမြဲကြိုဆိုပါတယ်။"];
mobtalk[19][9][3]=["ရှုံးဖို့ ဒီကိုလာခဲ့တာလား။",
"အမြဲကြိုဆိုပါတယ်။"];
mobtalk[19][9][4]=["ငါ မင်းနဲ့ ကစားဖို့ အချိန်မရှိဘူး။",
"မင်းသိတယ်မဟုတ်လား"];
//10. Valmeria
mobtalk[19][10][0]=["ကျွန်တော့်နာမည် Valmeria ပါ။",
"စွဲဆောင်မှုအရှိဆုံး succubus။",
"ရန်​သူ​တွေ့ပြီ"];
mobtalk[19][10][1]=["မင်းဒီကိုဘယ်လိုရောက်လာတာလဲ။",
"နောက်ဆုံးတော့ ငါ့အလှည့်ပဲ။",
"ငါ့ဆီ အချိန်မရွေး လာပါ။"];
mobtalk[19][10][2]=["ကြိုက်သလောက် အကြိမ်ပေါင်းများစွာ",
"လာနိုင်ပါတယ်။ အမြဲကြိုဆိုပါတယ်။",
"ကဲ ဒါဆို တိုက်ကြရအောင်။"];
//୦. ମୋସୁବାଟୋ
mobtalk[20][0][0]=["ତୁମକୁ ଭେଟି ଖୁସି ଲାଗିଲା। ମୁଁ ମୋସୁବାଟୋ।",
"ତୁମକୁ ଭେଟି ଖୁସି ଲାଗିଲା।"];
mobtalk[20][0][1]=["ନମସ୍କାର। କେମିତି ଅଛ?",
"ମୁଁ ଭଲ ଅଛି!"];
mobtalk[20][0][2]=["ମୁଁ ଟ୍ୟୁଟୋରିଆଲ୍ ରାକ୍ଷସ।"];
mobtalk[20][0][3]=["ସେହି ସବମସିନ୍ ଗନ୍ ହାସ୍ୟକର ଭାବରେ",
"ଦୁର୍ବଳ, ନୁହେଁ କି?"];
mobtalk[20][0][4]=["ବନ୍ଧୁ ହେବାକୁ ଚାହୁଁଛ?",
"ପ୍ରଥମେ, ଦୟାକରି ସେହି ବନ୍ଧୁକରୁ",
"ଗୁଳି ଚାଳନା କରନାହିଁ।  "];
mobtalk[20][0][5]=["ତୁମେ ଠିକ୍ ଭାବରେ ଖାଇଛ କି?",
"କେବଳ ଖେଳ ଖେଳ ନାହିଁ, କିଛି ଖାଅ!"];
mobtalk[20][0][6]=["ତୁମେ କିପରି ଅଛ? ଖେଳ ଖେଳିବା ପାଇଁ",
"ତୁମର ଯଥେଷ୍ଟ ଶକ୍ତି ଅଛି ବୋଲି ମନେ ହେଉଛି।",
"ଏହା ଭଲ। ତୁମେ ମଜା କରୁଛ କି?",
"ତୁମକୁ ସବୁକିଛି ଉପଭୋଗ କରିବାକୁ ପଡିବ!"];
mobtalk[20][0][7]=["୧. ପାରୁପୁଆଇ",
"ମୁଁ ଏଠାରେ ଅଛି! ଚାଲ ଯିବା!"];
//ସ୍ୱାଗତ!(1)
mobtalk[20][1][0]=["ମୁଁ ଆସିଗଲି! ଚାଲ ଯିବା!"];
mobtalk[20][1][1]=["ସ୍ୱାଗତ!"];
mobtalk[20][1][2]=["ଆଶ୍ଚର୍ଯ୍ୟ!"];
mobtalk[20][1][3]=["ଉଠ, ଉଠ! ସକାଳ ହେଲାଣି!"];
mobtalk[20][1][4]=["ମୋ ସହିତ ପ୍ରେମ ବିଷୟରେ",
"କଥା ହେବାକୁ ଚାହୁଁଛ କି? "];
mobtalk[20][1][5]=["ମୁଁ ପଲ୍ପ ଆଇ!"];
//୨. ରୁବିଦେବୀ(2)
mobtalk[20][2][0]=["ତୁମେ ଏକ ଅପରିଚିତ ଚେହେରା।"];
mobtalk[20][2][1]=["ତୁମେ କେଉଁଠାରୁ ଆସିଛ?"];
mobtalk[20][2][2]=["ତୁମେ ଏକ ସୁନ୍ଦର ଝିଅ।"];
mobtalk[20][2][3]=["ଯେହେତୁ ଏହା ଏକ ଖେଳ, ଆସନ୍ତୁ ଆମେ",
"ଆମର ସମସ୍ତ ଶକ୍ତି ସହିତ ଲଢ଼ିବା।"];
mobtalk[20][2][4]=["ଏହା ଏକ ଫ୍ୟାଶନ୍ ଯାହା ମୁଁ",
"ଏହି ସହରରେ ଦେଖିପାରୁନାହିଁ।"];
mobtalk[20][2][5]=["ମୁଁ ଏହାକୁ ପସନ୍ଦ କରେ।",
"ଏହା ବହୁତ ଷ୍ଟାଇଲିସ୍।"];
mobtalk[20][2][6]=["ତୁମେ ଏହାକୁ ଏକ ରାକ୍ଷସ ପରି",
"ଭାବିପାର, ଠିକ୍ ନା? ଏହା ଏକ ରାକ୍ଷସ।"];
mobtalk[20][2][7]=["ଏହାର ନାମ ରୁବିଦେବୀ।",
"ତୁମକୁ ଭେଟି ଖୁସି ଲାଗିଲା।"];
//3. ହତ୍ୟାକାରୀ ସୂଇ
mobtalk[20][3][0]=["ବଜ୍ ଗୁଞ୍ଜ ଗୁଞ୍ଜ"];
mobtalk[20][3][1]=["ମାନବଙ୍କ ସହ କଥା ହେବାର କୌଣସି ଅର୍ଥ ନାହିଁ"];
mobtalk[20][3][2]=["କେବଳ ମହୁମାଛିର ଦଂଶନରେ ଦଂଶନ ହୁଅ ନାହିଁ"];
mobtalk[20][3][3]=["କାରଣ ମୁଁ ବିଷାକ୍ତ!"];
mobtalk[20][3][4]=["ମୋ ନାମ ହତ୍ୟାକାରୀ ସୂଇ",
"ନାମରୁ ଜଣାପଡ଼ୁଛି, ହତ୍ୟାକାରୀ ଏବଂ ସୂଇ"];
//4. ପ୍ରିଜାର୍କ"];
mobtalk[20][4][0]=["ତୁମେ ଭାବୁଥିଲ କି ପକ୍ଷୀମାନେ",
"କଥା କହିପାରିବେ ନାହିଁ?"];
mobtalk[20][4][1]=["ମୁଁ ଜଣେ ମଣିଷ ଯିଏ ନିଜକୁ",
"ପକ୍ଷୀ ବୋଲି ଅଭିନୟ କରୁଛି।"];
mobtalk[20][4][2]=["ତୁମେ କ’ଣ ଭାବୁନାହଁ ଯେ ପକ୍ଷୀମାନେ ସୁନ୍ଦର?"];
mobtalk[20][4][3]=["ମଣିଷ ସୁନ୍ଦର ଜିନିଷ ପ୍ରତି",
"ଆକର୍ଷିତ ହୁଏ"];
mobtalk[20][4][4]=["କୁକୁଡ଼ା ସ୍ୱାଦିଷ୍ଟ, ନୁହେଁ କି?",
"ପକ୍ଷୀମାନେ କୁକୁଡ଼ା ଖାଆନ୍ତି।"];
//5. ହାଡ଼ କ୍ରାଇଥ୍
mobtalk[20][5][0]=["ତୁମେ କେବେ ମୋ ପରି ହେବ"];
mobtalk[20][5][1]=["ଜୀବିତ ଥିବା ପର୍ଯ୍ୟନ୍ତ ଖୁସି ରୁହ।",
"ତୁମେ ଖୁସି କି? "];
mobtalk[20][5][2]=["ଜୀବିତ ଥିବା ପର୍ଯ୍ୟନ୍ତ ତୁମେ ଅନେକ କିଛି",
"କରିପାରିବ। ଅନୁତାପ ନକରି ବଞ୍ଚ।"];
//6. ଆକାଶ ଆଖି
mobtalk[20][6][0]=["ବିପ୍ ବିପ୍ ବିପ୍ ବିପ୍ ବିପ୍ ବିପ୍"];
mobtalk[20][6][1]=["ଆଗ୍ରହୀ ବ୍ୟକ୍ତି। ଅସଙ୍ଗତି ଚିହ୍ନଟ ହୋଇଛି।",
"ବିପ୍ ବିପ୍ ବିପ୍ ବିପ୍ ବିପ୍"];
mobtalk[20][6][2]=["ପ୍ରହରୀରେ"];
mobtalk[20][6][3]=["ପରାମର୍ଶ"];
mobtalk[20][6][4]=["ମୋତେ ସେହି ଅସାଧାରଣ ରୋବୋଟମାନଙ୍କ",
"ସହିତ ସାମିଲ କର ନାହିଁ"];
//7. ବର୍ଣ୍ଡ୍ରେକୁ
mobtalk[20][7][0]=["ଗାଉଉଉଉଉଉଉଉଉଉଉଉଉଉଉଉ"];
mobtalk[20][7][1]=["ମୁଁ ଏବେ ତୁମ ସହିତ",
"କଥା ହେବାକୁ ମନ ଦେଉନାହିଁ।"];
mobtalk[20][7][2]=["ମୋ ନାମ ବର୍ଣ୍ଡଲେକ୍। ବହୁତ ସୁନ୍ଦର ନାମ, ଠିକ୍ ନା?"];
mobtalk[20][7][3]=["ମୁଁ କଥା ହେବାକୁ ପସନ୍ଦ କରେ ନାହିଁ।",
"ମୁଁ କଥା ହେବା ସମୟରେ ହୁଏତ",
"ର୍ବଳ ଦେଖାଯାଏ, ନୁହେଁ କି?"];
//8. ମୁଁ ମିଷ୍ଟେରା।
mobtalk[20][8][0]=["ମୁଁ ମିଷ୍ଟେରା।",
"ତୁମକୁ କ’ଣ ସୁକୁବସ୍ ଠାରୁ କିଛି ଦରକାର?",
"ତୁମକୁ ସୁକୁବସ୍ ଦରକାର ନାହିଁ।"];
mobtalk[20][8][1]=["ମୁଁ ମିଷ୍ଟେରା।",
"କ’ଣ? ତୁମେ ମଧ୍ୟ ସୁକୁବସ୍?",
"ମୁଁ ଭାବୁନାହିଁ।"];
mobtalk[20][8][2]=["ମୁଁ ମିଷ୍ଟେରା।",
"ତୁମକୁ ସୁକୁବସ୍ ସହିତ",
"କଥା ହେବା ଆବଶ୍ୟକ ନାହିଁ"];
mobtalk[20][8][3]=["ତୁମେ ସୁକୁବସ୍ ହେବାକୁ ଚାହୁଁଛ କି?",
"ମୁଁ ଚାହୁଁନାହିଁ ଯେ ତୁମେ ଆଗ୍ରହୀ ହୁଅ।"];
//9. ଲୁମିଏରା
mobtalk[20][9][0]=["ହେ। ମୁଁ ଲୁମିଏରା।",
"ତୁମେ ଖେଳୁଛ କି?",
"ମୁଁ ହିଁ ଖେଳୁଛ।"];
mobtalk[20][9][1]=["ଏକ ସଂପୂର୍ଣ୍ଣ ଖେଳାଳୀ |",
"ମୁଁ ପାଇଲି"];
mobtalk[20][9][2]=["ତୁମେ କ’ଣ ମୋତେ ମଜା କରୁଛ?",
"ତୁମେ ସର୍ବଦା ସ୍ୱାଗତ।"];
mobtalk[20][9][3]=["ତୁମେ କ’ଣ ଏଠାକୁ ହାରିବାକୁ ଆସିଛ?",
"ତୁମେ ସର୍ବଦା ସ୍ୱାଗତ।"];
mobtalk[20][9][4]=["ତୁମ ସହିତ ଖେଳିବାକୁ ମୋର ସମୟ ନାହିଁ।",
"ତୁମେ ଜାଣିଛ, ଠିକ୍ ନା?"];
//10. ଭାଲମେରିଆ
mobtalk[20][10][0]=["ମୋ ନାମ ଭାଲମେରିଆ।",
"ସର୍ବାଧିକ ଆକର୍ଷଣୀୟ ସୁକୁବସ୍।",
"ମୁଁ ଲଢ଼ିବା ପାଇଁ ଏକ",
"ପ୍ରତିଦ୍ୱନ୍ଦ୍ୱୀ ପାଇଛି!"];
mobtalk[20][10][1]=["ତୁମେ ଏଠାକୁ କିପରି ଆସିଲ?",
"ଶେଷରେ ମୋର ପାଳି!",
"ଯେ କୌଣସି ସମୟରେ ମୋ ପାଖକୁ ଆସ!"];
mobtalk[20][10][2]=["ତୁମେ ଯେତେଥର ଇଚ୍ଛା ଆସିପାରିବ।",
"ତୁମକୁ ସର୍ବଦା ସ୍ୱାଗତ।",
"ଏବେ, ଆସନ୍ତୁ ଯୁଦ୍ଧ କରିବା!"];
//右から書く
//۰. موسبات(0)
mobtalk[21][0][0]=["خوشحالم که باهات آشنا شدم. من موسباتم.",
"خوش کردم که باهات آشنا شدم."];
mobtalk[21][0][1]=["سلام. چطوری؟",
"عالی    ام!"];
mobtalk[21][0][2]=["من هیولای آموزشیه."];
mobtalk[21][0][3]=["این تپانچه خنده    دار ضعیفه، نه؟"];
mobtalk[21][0][4]=["دوست داری رفیق باشیم؟",
"اول از همه، لطفاً",
"با اون اسلحه شلیک نکن."];
mobtalk[21][0][5]=["درست و حسابی غذا خوردی؟",
"همش بازی نکن باید غذا بخوری، می",
"دونی."];
mobtalk[21][0][6]=["حالت خوبه؟ به نظر میاد",
"که کلی انرژی برای بازی کردن داری.",
"خیلی خوبه."];
mobtalk[21][0][7]=["لذت می    بری؟ باید از همه",
"چیز در زندگی لذت برد."];
//۱. پاروپوآی(1)
mobtalk[21][1][0]=["من اینجام! بریم!"];
mobtalk[21][1][1]=["خواهش می    کنم!"];
mobtalk[21][1][2]=["سورپرایز!"];
mobtalk[21][1][3]=["بیدار شو، بیدار شو! صبح شد!"];
mobtalk[21][1][4]=["حوصله داری در مورد عشق صحبت کنیم؟"];
mobtalk[21][1][5]=["من پاروپوآی هستم!"];
//۲. روبیدوی(2)
mobtalk[21][2][0]=["چهره    ات آشنا نیست."];
mobtalk[21][2][1]=["تو اونجا. از کجا اومدی؟"];
mobtalk[21][2][2]=["دختر باحالی هستی، نه؟"];
mobtalk[21][2][3]=["این یه بازیه، پس بیایم",
"حسابی انجامش بدیم."];
mobtalk[21][2][4]=["این استایلی نیست که اینجا ببینم."];
mobtalk[21][2][5]=["دوستش دارم. خیلی با استایل هستی."];
mobtalk[21][2][6]=["فکر می    کنی من یه دیوم، نه؟",
"من یه شیطونم."];
mobtalk[21][2][7]=["اسم من روبیدوییه.",
"خوشحالم که باهات آشنا شدم."];
//۳. سوزن قاتل (کی    رانی    دورو)(3)
mobtalk[21][3][0]=["زر زر زر زررر"];
mobtalk[21][3][1]=["حرف زدن با آدما فایده    ای نداره."];
mobtalk[21][3][2]=["فقط حواست باشه نیش زنبور بهت نخوره."];
mobtalk[21][3][3]=["ببین، من زهر دارم!"];
mobtalk[21][3][4]=["نام من سوزن قاتل است."];
mobtalk[21][3][5]=["همان    طور که از نامم پیداست",
"قاتل و سوزن"];
//۴. پریس-هاک (پوریزوهاکو)(4)
mobtalk[21][4][0]=["فکر می کردی پرنده ها نمی",
"توانند حرف بزنند؟"];
mobtalk[21][4][1]=["من آدمی هستم که وانمود می",
"کنم پرنده هستم."];
mobtalk[21][4][2]=["فکر نمی کنی پرنده ها زیبا هستند؟"];
mobtalk[21][4][3]=["آدم ها نمی توانند جلوی خود را بگیرند",
"و به چیزهای زیبا جذب می شوند."];
mobtalk[21][4][4]=["مرغ خوشمزه است، اینطور نیست؟",
"پرنده    ها مرغ می    خورند."];
//۵. بون ریس (بونریسو)(5)
mobtalk[21][5][0]=["روزی، تو هم درست مثل من خواهی شد."];
mobtalk[21][5][1]=["مطمئن شو که در حین زندگی خوشحال باشی.",
"خوشحالی؟"];
mobtalk[21][5][2]=["کارهای زیادی هست که",
"می توانی در حین زندگی انجام دهی.",
"بیایید بدون پشیمانی زندگی کنیم."];
//۶. چشم    های آسمانی(6)
mobtalk[21][6][0]=["بیپ بیپ بیپ بیپ"];
mobtalk[21][6][1]=["فرد مورد علاقه. ناهنجاری شناسایی شد.",
"بیپ بیپ بیپ بیپ"];
mobtalk[21][6][2]=["در حالت نگهبانی"];
mobtalk[21][6][3]=["در حالت گشت    زنی"];
mobtalk[21][6][4]=["من را با آن ربات های دست",
"وپا چلفتی یکی ندان"];
//برن دریک(7)
mobtalk[21][7][0]=["جیییییییییییییییییییییی"];
mobtalk[21][7][1]=["تو نیازی نداری"];
mobtalk[21][7][2]=["با یک ساکوبوس صحبت کنی."];
mobtalk[21][7][3]=["می    خواهی ساکوبوس شوی؟",
"نمی    خواهم به من علاقه    مند شوی."];
//۹. لومیرآ(8)
mobtalk[21][8][0]=["با یک ساکوبوس چه کار می    خواهی؟",
"تو به یک ساکوبوس",
"نیاز نداری."];
mobtalk[21][8][1]=["چی؟ تو هم ساکوبوس هستی؟",
"فکر نمی    کنم."];
mobtalk[21][8][2]=["لازم نیست با یک",
"ساکوبوس صحبت کنی."];
mobtalk[21][8][3]=["می    خواهی ساکوبوس شوی؟",
"نمی    خواهم علاقه    مند شوی."];
//۱۰. والمریا(9)
mobtalk[21][9][0]=["نام من والمریا است.",
"من جذابb ترین زن در میان سکوب ها هستم.",
"کسی را برای مبارزه پیدا کرده    ام!"];
mobtalk[21][9][1]=["آخر چطور تا اینجا پیش آمدی؟",
"بالاخره نوبت من هم رسید!",
"هر وقت دوست داری بیا رو در رویم!"];
mobtalk[21][9][2]=["هر وقت دوست داشتی می توانی بیایی.",
"همیشه خوش آمدی.",
"خب پس، بیاییم بجنگیم!"];
mobtalk[21][9][3]=["آمده ای ببازی؟",
"همیشه خوش آمدید"];
mobtalk[21][9][4]=["وقت بازی با تو را ندارم",
"این را می دانی، مگر نه؟"];
//۱۰. والمریا
mobtalk[21][10][0]=["نام من والمریا است",
"فریبنده ترین زن در میان ساکوبوها",
"کسی را برای مبارزه پیدا کرده ام!"];
mobtalk[21][10][1]=["آخر چطور تونستی تا اینجا بیای؟",
"بالاخره نوبت من هم رسید!",
"هر وقت بخوای بیا سراغم!"];
mobtalk[21][10][2]=["هر وقت دوست داشتی میتونی برگردی",
"همیشه خوش اومدی",
"خب پس، بیایم بجنگیم!"];
//0. Mosubatto
mobtalk[22][0][0]=["Miło cię poznać. Jestem Mosubatto.",
"Miło cię poznać."];
mobtalk[22][0][1]=["Cześć. Jak się masz?",
"Ja mam się świetnie!"];
mobtalk[22][0][2]=["Jestem potworem z samouczka."];
mobtalk[22][0][3]=["Ten pistolet maszynowy jest",
"śmiesznie słaby, co?"];
mobtalk[22][0][4]=["Może zostaniemy przyjaciółmi?",
"Na początek nie strzelaj z tej broni."];
mobtalk[22][0][5]=["Zjadłeś porządny posiłek?",
"Nie graj tylko w gry, tylko zjedz coś."];
mobtalk[22][0][6]=["Jak się masz? Wyglądasz na",
"gotowego do gry. To dobrze"];
mobtalk[22][0][7]=["Dobrze się bawisz?",
"Trzeba cieszyć się wszystkim."];
//1. Parupuai
mobtalk[22][1][0]=["Już jestem! Zaczynamy!"];
mobtalk[22][1][1]=["Nie ma za co!"];
mobtalk[22][1][2]=["Niespodzianka!"];
mobtalk[22][1][3]=["Wstawaj, wstawaj! Już rano!"];
mobtalk[22][1][4]=["Porozmawiamy o miłości?"];
mobtalk[22][1][5]=["Jestem Parupuai!"];
//2. Rubidevi
mobtalk[22][2][0]=["Nieznana mi twarz."];
mobtalk[22][2][1]=["Skąd się tu wziąłeś?"];
mobtalk[22][2][2]=["Ależ z ciebie śliczna dziewczyna."];
mobtalk[22][2][3]=["To tylko gra, więc walczmy z całych sił."];
mobtalk[22][2][4]=["Nie widziałam takiego stylu",
"w tym mieście."];
mobtalk[22][2][5]=["Podoba mi się. Jesteś bardzo modna."];
mobtalk[22][2][6]=["Myślisz, że jestem demonem, prawda?",
"Jestem diabłem."];
mobtalk[22][2][7]=["Nazywam się Rubidevi.",
"Miło cię poznać."];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[22][3][0]=["Brzęcz, brzęcz, brzęcz..."];
mobtalk[22][3][1]=["Nie ma sensu rozmawiać z ludźmi."];
mobtalk[22][3][2]=["Uważaj, żeby nie użądliło cię pszczoła."];
mobtalk[22][3][3]=["Bo ja mam jad!"];
mobtalk[22][3][4]=["Nazywam się Killer Needle.",
"Jak sama nazwa wskazuje,",
"killer i needle."];
//4. Purizuhāku
mobtalk[22][4][0]=["Myślałeś, że ptaki nie potrafią mówić?"];
mobtalk[22][4][1]=["Jestem człowiekiem udającym ptaka."];
mobtalk[22][4][2]=["Nie uważasz, że ptaki są piękne?"];
mobtalk[22][4][3]=["Ludzie nie mogą się powstrzymać",
"przed zbliżaniem się do tego,",
"co piękne."];
mobtalk[22][4][4]=["Kurczak jest pyszny, prawda?",
"Ptaki jedzą kurczaka."];
//5. Bōnreisu
mobtalk[22][5][0]=["Kiedyś też staniesz się taki jak ja."];
mobtalk[22][5][1]=["Bądź szczęśliwy, póki żyjesz.",
"Czy jesteś szczęśliwy?"];
mobtalk[22][5][2]=["W życiu można zrobić naprawdę wiele.",
"Żyjmy bez żalu."];
//6. Sky Eyes (Sukaiaizu)
mobtalk[22][6][0]=["Pip pip pip pip"];
mobtalk[22][6][1]=["Osoba podejrzana. Wykryto anomalię.",
"Pip pip pip pip"];
mobtalk[22][6][2]=["W trakcie ochrony."];
mobtalk[22][6][3]=["W trakcie patrolu."];
mobtalk[22][6][4]=["Nie porównuj mnie do zepsutego robota."];
//7. Burn Drake (Bānudoreiku)
mobtalk[22][7][0]=["Gyaaaaaaaaaaaaaaaaaaa"];
mobtalk[22][7][1]=["Nie mam teraz ochoty z tobą rozmawiać."];
mobtalk[22][7][2]=["Nazywam się Burn Drake. Fajne imię, co?"];
mobtalk[22][7][3]=["Nie lubię rozmawiać.",
"Kiedy mówię, wydaję się słaby, prawda?"];
//8. Tu Mysteira.
mobtalk[22][8][0]=["Masz coś do sykuby?",
"Nie potrzebujesz",
"sykuby."];
mobtalk[22][8][1]=["Co? Ty też jesteś sykubą?",
"Nie sądzę."];
mobtalk[22][8][2]=["Nie musisz",
"rozmawiać z sybą"];
mobtalk[22][8][3]=["Chcesz zostać sybą?",
"Nie chcę, żebyś się mną interesował"];
//9. Lumiera
mobtalk[22][9][0]=["Cześć. Jestem Lumiera",
"Bawisz się?",
"To ja się bawię"];
mobtalk[22][9][1]=["Znalazłam",
"idealnego partnera do zabawy"];
mobtalk[22][9][2]=["Drażnisz się ze mną?",
"Zawsze mile widziany"];
mobtalk[22][9][3]=["Przyszedłeś przegrać?",
"Zawsze mile widziany"];
mobtalk[22][9][4]=["Nie mam czasu na zabawę z tobą",
"Rozumiesz to, prawda?"];
//10. Valmeria
mobtalk[22][10][0]=["Nazywam się Valmeria.",
"Jestem najbardziej uwodzicielską",
"kobietą wśród sykub.",
"Znalazłam przeciwnika do walki!"];
mobtalk[22][10][1]=["Jak się tu dostałeś?",
"W końcu nadeszła moja kolej!",
"Możesz atakować w każdej chwili!"];
mobtalk[22][10][2]=["Możesz przychodzić tyle razy, ile chcesz.",
"Zawsze jesteś mile widziany.",
"No to walczmy!"];
//0. Mosubatto
mobtalk[23][0][0]=["Prazer em conhecer te.",
"Sou o Mosubatto. É um prazer."];
mobtalk[23][0][1]=["Olá. Como estás?",
"Eu estou ótimo!"];
mobtalk[23][0][2]=["Sou o monstro do tutorial."];
mobtalk[23][0][3]=["Essa submetralhadora é ridicamente",
"fraca, não é?"];
mobtalk[23][0][4]=["Queres ser meu amigo?",
"Para começar, não dispares essa arma."];
mobtalk[23][0][5]=["Já comeste bem?",
"Não te dediques só aos jogos,",
"vai comer alguma coisa."];
mobtalk[23][0][6]=["Estás bem? Pareces ter energia para jogar.",
"Que bom"];
mobtalk[23][0][7]=["Estás a divertir te?",
"É preciso aproveitar tudo na vida."];
//1. Parupuai
mobtalk[23][1][0]=["Cheguei! Vamos lá!"];
mobtalk[23][1][1]=["De nada!"];
mobtalk[23][1][2]=["Surpresa!"];
mobtalk[23][1][3]=["Acorda, acorda! É de manhã!"];
mobtalk[23][1][4]=["Queres conversar sobre amor comigo?"];
mobtalk[23][1][5]=["Sou a Parupuai!"];
//2. Rubidevi
mobtalk[23][2][0]=["Não te conheço."];
mobtalk[23][2][1]=["De onde vieste?"];
mobtalk[23][2][2]=["É uma rapariga gira, não é?"];
mobtalk[23][2][3]=["Como é um jogo,",
"vamos lutar com toda a força."];
mobtalk[23][2][4]=["É um estilo que não se vê nesta cidade."];
mobtalk[23][2][5]=["Gostei. É muito elegante."];
mobtalk[23][2][6]=["Achas que pareço um demónio, não é?",
"Sou um demónio."];
mobtalk[23][2][7]=["O meu nome é Rubidevi.",
"Prazer em conhecer te."];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[23][3][0]=["Zumbido, zumbido, zumbido..."];
mobtalk[23][3][1]=["Não vale a pena falar com humanos."];
mobtalk[23][3][2]=["Cuidado para não seres picado",
"pelo ferrão de uma abelha."];
mobtalk[23][3][3]=["Porque eu tenho veneno!"];
mobtalk[23][3][4]=["O meu nome é Killer Needle.",
"Tal como o nome indica,",
"Killer e Needle."];
//4. Pris Hawk (Purizuhāku)
mobtalk[23][4][0]=["Pensavas que os pássaros não falavam?"];
mobtalk[23][4][1]=["Sou um humano a fingir ser um pássaro."];
mobtalk[23][4][2]=["Não achas que os pássaros são bonitos?"];
mobtalk[23][4][3]=["Os humanos sentem se atraídos",
"pelas coisas bonitas."];
mobtalk[23][4][4]=["A carne de frango é deliciosa, não é?",
"Os pássaros comem carne de frango."];
//5. Bone Reiss (Bōnreisu)
mobtalk[23][5][0]=["Um dia, tu também te tornarás como eu."];
mobtalk[23][5][1]=["Sê feliz enquanto estás vivo. És feliz?"];
mobtalk[23][5][2]=["Há imensas coisas que se podem fazer",
"enquanto se está vivo.",
"Vamos viver sem arrependimentos"];
//6. Sky Eyes (Sukaiaizu)
mobtalk[23][6][0]=["Pí pí  pí pí  pí pí"];
mobtalk[23][6][1]=["Indivíduo suspeito. Detetada anomalia.",
"Pí pí pí pí pí pí"];
mobtalk[23][6][2]=["Em serviço de segurança"];
mobtalk[23][6][3]=["Em patrulha"];
mobtalk[23][6][4]=["Não me compares com um robô velho"];
//7. Burn Drake (Bānudoreiku)
mobtalk[23][7][0]=["Gyaaaaaaaaaaaaaaaaaaa"];
mobtalk[23][7][1]=["Não estou com disposição",
"para falar contigo agora"];
mobtalk[23][7][2]=["O meu nome é Bānudoreiku.",
"É um nome fixe, não é?"];
mobtalk[23][7][3]=["Não gosto de falar",
"Se eu falar, pareço fraco, não é?"];
//8. Sou a Mistrela.
mobtalk[23][8][0]=["Queres alguma coisa com uma súcubo?",
"Tu não precisas",
"de uma súcubo"];
mobtalk[23][8][1]=["O quê? Tu também és uma súcubo?",
"Não acredito nisso"];
mobtalk[23][8][2]=["Não precisas de falar",
"com uma súcubo"];
mobtalk[23][8][3]=["Queres tornar te numa súcubo?",
"Não quero que te interesses por mim"];
//9. Lumiera
mobtalk[23][9][0]=["Olá! Sou a Lumiera.",
"Estás a brincar?",
"Quem brinca sou eu."];
mobtalk[23][9][1]=["Acabei de encontrar",
"a companhia perfeita para brincar."];
mobtalk[23][9][2]=["Estás a gozar comigo?",
"És sempre bem vindo."];
mobtalk[23][9][3]=["Viste te para perder?",
"És sempre bem vindo."];
mobtalk[23][9][4]=["Não tenho tempo para brincar contigo.",
"Tu também sabes disso, não sabes?"];
//10. Valmeria
mobtalk[23][10][0]=["O meu nome é Valmeria.",
"Sou a mulher mais sedutora",
"entre as súcubos.",
"Encontrei alguém com quem lutar!"];
mobtalk[23][10][1]=["Como é que chegaste até aqui?",
"Finalmente chegou a minha vez!",
"Podes atacar quando quiseres!"];
mobtalk[23][10][2]=["Podes vir quantas vezes quiseres.",
"És sempre bem vindo.",
"Bem, vamos lutar!"];
//0. ਮੋਸਬੈਟ
mobtalk[24][0][0]=["ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖੁਸ਼ੀ ਹੋਈ। ਮੈਂ ਮੋਸਬੈਟ ਹਾਂ।",
"ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖੁਸ਼ੀ ਹੋਈ।"];
mobtalk[24][0][1]=["ਹੈਲੋ। ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?",
"ਮੈਂ ਬਹੁਤ ਵਧੀਆ ਹਾਂ!"];
mobtalk[24][0][2]=["ਮੈਂ ਟਿਊਟੋਰਿਅਲ ਵਿੱਚ ਉਹ ਦੈਂਤ ਹਾਂ।"];
mobtalk[24][0][3]=["ਉਹ ਸਬਮਸ਼ੀਨ ਗਨ ਤਾਂ ਹੱਸਣ ਜੋਗੀ",
"ਕਮਜ਼ੋਰ ਹੈ, ਹੈ ਨਾ?"];
mobtalk[24][0][4]=["ਦੋਸਤ ਬਣੀਏ? ਸਭ ਤੋਂ ਪਹਿਲਾਂ,",
"ਕਿਰਪਾ ਕਰਕੇ ਉਹ ਗਨ ਨਾ ਚਲਾਓ।"];
mobtalk[24][0][5]=["ਕੀ ਤੁਸੀਂ ਠੀਕ ਤਰ੍ਹਾਂ ਖਾਣਾ ਖਾਇਆ ਹੈ?",
"ਸਾਰਾ ਸਮਾਂ ਸਿਰਫ਼ ਗੇਮਾਂ ਹੀ ਨਾ ਖੇਡੋ",
"ਤੁਹਾਨੂੰ ਖਾਣਾ ਵੀ ਪੈਂਦਾ ਹੈ, ਪਤਾ ਹੈ।"];
mobtalk[24][0][6]=["ਕੀ ਤੁਸੀਂ ਠੀਕ ਹੋ? ਤੁਹਾਨੂੰ ਦੇਖ ਕੇ ਤਾਂ",
"ਪੂਰਾ ਲੱਗਦਾ ਹੈ ਕਿ ਤੁਹਾਡੇ ਵਿੱਚ ਗੇਮਾਂ",
"ਖੇਡਣ ਦੀ ਊਰਜਾ ਹੈ। ਇਹ ਚੰਗੀ ਗੱਲ ਹੈ।"];
mobtalk[24][0][7]=["ਕੀ ਤੁਸੀਂ ਮਜ਼ਾ ਲੈ ਰਹੇ ਹੋ?",
"ਤੁਹਾਨੂੰ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਹਰ ਚੀਜ਼",
"ਦਾ ਆਨੰਦ ਲੈਣਾ ਚਾਹੀਦਾ ਹੈ।"];
//1. ਪਰੁਪੁਆਈ
mobtalk[24][1][0]=["ਮੈਂ ਆ ਗਈ! ਚਲੋ!"];
mobtalk[24][1][1]=["ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!"];
mobtalk[24][1][2]=["ਸਰਪ੍ਰਾਈਜ਼!"];
mobtalk[24][1][3]=["ਜਾਗ, ਜਾਗ! ਸਵੇਰ ਹੋ ਗਈ ਹੈ!"];
mobtalk[24][1][4]=["ਪਿਆਰ ਬਾਰੇ ਗੱਲ ਕਰੀਏ?"];
mobtalk[24][1][5]=["ਮੈਂ ਪਰੁਪੁਆਈ ਹਾਂ!"];
//2. ਰੁਬੀਦੇਵੀ
mobtalk[24][2][0]=["ਤੂੰ ਅਜਨਬੀ ਲੱਗ ਰਿਹਾ ਹੈਂ।"];
mobtalk[24][2][1]=["ਹੇ ਉੱਥੇ। ਤੂੰ ਕਿੱਥੋਂ ਆਇਆ ਹੈਂ?"];
mobtalk[24][2][2]=["ਤੂੰ ਇੱਕ ਪਿਆਰੀ ਕੁੜੀ ਹੈਂ, ਹੈ ਨਾ?"];
mobtalk[24][2][3]=["ਇਹ ਇੱਕ ਖੇਡ ਹੈ,",
"ਤਾਂ ਆਓ ਇਸ ਵਿੱਚ ਆਪਣਾ ਸਭ ਕੁਝ ਦੇਈਏ।"];
mobtalk[24][2][4]=["ਇਹ ਇੱਕ ਅਜਿਹਾ ਸਟਾਈਲ ਹੈ ਜੋ ਮੈਂ",
"ਇੱਥੇ ਆਮ ਤੌਰ 'ਤੇ ਨਹੀਂ ਦੇਖਦੀ।"];
mobtalk[24][2][5]=["ਮੈਨੂੰ ਇਹ ਪਸੰਦ ਹੈ।",
"ਤੂੰ ਬਹੁਤ ਸਟਾਈਲਿਸ਼ ਹੈਂ।"];
mobtalk[24][2][6]=["ਤੈਨੂੰ ਲੱਗਦਾ ਹੋਵੇਗਾ ਕਿ ਮੈਂ",
"ਡੇਮਨ ਵਰਗਾ ਹਾਂ।",
"ਮੈਂ ਤਾਂ ਅਸਲ ਵਿੱਚ ਡੈਵਲ ਹਾਂ।"];
mobtalk[24][2][7]=["ਮੇਰਾ ਨਾਮ ਰੁਬੀਦੇਵੀ ਹੈ।",
"ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖੁਸ਼ੀ ਹੋਈ।"];
//3. ਕਿਲਰ ਨੀਡਲ (ਕਿਰਾਨੀਦੂ~ਰੂ)
mobtalk[24][3][0]=["ਭੂੰ ਭੂੰ ਭੂੰ"];
mobtalk[24][3][1]=["ਇਨਸਾਨਾਂ ਨਾਲ ਗੱਲ ਕਰਨ ਦਾ ਕੋਈ ਫਾਇਦਾ ਨਹੀਂ।"];
mobtalk[24][3][2]=["ਬੱਸ ਇਹ ਯਕੀਨੀ ਬਣਾ ਕਿ ਤੈਨੂੰ ਮੱਖੀ ਦੇ",
"ਡੰਕ ਨਾਲ ਡੱਸ ਨਾ ਲੱਗੇ।"];
mobtalk[24][3][3]=["ਮੇਰੇ ਕੋਲ ਜ਼ਹਿਰ ਹੈ, ਸਮਝੀ!"];
mobtalk[24][3][4]=["ਮੇਰਾ ਨਾਮ ਕਿਲਰ ਨੀਡਲ ਹੈ।",
"ਜਿਵੇਂ ਕਿ ਨਾਮ ਤੋਂ ਹੀ ਪਤਾ ਲੱਗਦਾ ਹੈ",
"ਕਿਲਰ ਅਤੇ ਨੀਡਲ।"];
//4. ਪ੍ਰਿਸ ਹਾਕ (ਪੁਰੀਜ਼ੁਹਾਕੁ)
mobtalk[24][4][0]=["ਕੀ ਤੁਸੀਂ ਸੋਚਿਆ ਸੀ ਕਿ ਪੰਛੀ",
"ਗੱਲ ਨਹੀਂ ਕਰ ਸਕਦੇ?"];
mobtalk[24][4][1]=["ਕੀ ਤੁਹਾਨੂੰ ਨਹੀਂ ਲੱਗਦਾ ਕਿ ਪੰਛੀ",
"ਇਨਸਾਨ ਸੁੰਦਰ ਚੀਜ਼ਾਂ ਵੱਲ ਖਿੱਚੇ",
"ਬਿਨਾਂ ਨਹੀਂ ਰਹਿ ਸਕਦੇ।"];
mobtalk[24][4][2]=["ਕੀ ਤੁਹਾਨੂੰ ਨਹੀਂ ਲੱਗਦਾ ਕਿ ਪੰਛੀ",
"ਸੁੰਦਰ ਹੁੰਦੇ ਹਨ?"];
mobtalk[24][4][3]=["ਮਨੁੱਖ ਸੁੰਦਰ ਚੀਜ਼ਾਂ ਵੱਲ ਖਿੱਚੇ ਬਿਨਾਂ ਨਹੀਂ ਰਹਿ ਸਕਦੇ"];
mobtalk[24][4][4]=["ਮਨੁੱਖ ਸੁੰਦਰ ਚੀਜ਼ਾਂ ਵੱਲ ਖਿੱਚੇ",
"ਬਿਨਾਂ ਨਹੀਂ ਰਹਿ ਸਕਦੇ"];
//5. ਬੋਨ ਰੀਸ (ਬੋਨਰੇਸੁ)
mobtalk[24][5][0]=["ਇੱਕ ਦਿਨ, ਤੁਸੀਂ ਮੇਰੇ ਵਰਗਾ ਹੀ ਬਣ ਜਾਵੋਗੇ।"];
mobtalk[24][5][1]=["ਜੀਊਂਦੇ ਹੋਏ ਖੁਸ਼ ਰਹੋ। ਕੀ ਤੁਸੀਂ ਖੁਸ਼ ਹੋ?"];
mobtalk[24][5][2]=["ਜੀਊਂਦੇ ਹੋਏ ਤੁਸੀਂ ਬਹੁਤ ਕੁਝ ਕਰ ਸਕਦੇ ਹੋ।",
"ਆਓ ਬਿਨਾਂ ਕਿਸੇ ਪਛਤਾਵੇ ਦੇ ਜੀਈਏ।"];
//6. ਸਕਾਈ ਆਈਜ਼
mobtalk[24][6][0]=["ਬੀਪ ਬੀਪ ਬੀਪ ਬੀਪ"];
mobtalk[24][6][1]=["ਦਿਲਚਸਪੀ ਵਾਲਾ ਵਿਅਕਤੀ। ਅਸਧਾਰਨਤਾ",
"ਦਾ ਪਤਾ ਲੱਗਾ। ਬੀਪ ਬੀਪ ਬੀਪ ਬੀਪ"];
mobtalk[24][6][2]=["ਗਾਰਡ ਡਿਊਟੀ 'ਤੇ"];
mobtalk[24][6][3]=["ਪੈਟਰੋਲ 'ਤੇ"];
mobtalk[24][6][4]=["ਮੈਨੂੰ ਉਹਨਾਂ ਭਾਰੀ ਭਰਕਮ ਰੋਬੋਟਾਂ ਨਾਲ",
"ਇੱਕੋ ਜਿਹਾ ਨਾ ਸਮਝੋ"];
//7. ਬਰਨ ਡਰੇਕ
mobtalk[24][7][0]=["ਗਿਆਆਆਆਆਆਆਆਆਆਆਆਆਆ"];
mobtalk[24][7][1]=["ਮੈਂ ਇਸ ਵੇਲੇ ਤੇਰੇ ਨਾਲ ਗੱਲ ਕਰਨ ਦੇ",
"ਮੂਡ ਵਿੱਚ ਨਹੀਂ ਹਾਂ।"];
mobtalk[24][7][2]=["ਮੇਰਾ ਨਾਂ ਬਾਰਨ ਡਰੇਕ ਹੈ।",
"ਵਧੀਆ ਨਾਂ ਹੈ, ਹੈ ਨਾ?"];
mobtalk[24][7][3]=["ਮੈਨੂੰ ਅਸਲ ਵਿੱਚ ਗੱਲ ਕਰਨਾ ਪਸੰਦ ਨਹੀਂ ਹੈ।",
"ਜਦੋਂ ਮੈਂ ਗੱਲ ਕਰਦਾ ਹਾਂ ਤਾਂ ਮੈਂ",
"ਕਮਜ਼ੋਰ ਲੱਗਦਾ ਹਾਂ, ਹੈ ਨਾ?"];
//8. ਇਹ ਮਿਸਟਰਾ ਹੈ।
mobtalk[24][8][0]=[" ਕੀ ਤੁਸੀਂ ਇੱਕ ਸੱਕਿਊਬਸ ਤੋਂ",
"ਕੁਝ ਚਾਹੁੰਦੇ ਹੋ?",
"ਤੁਹਾਨੂੰ ਇੱਕ ਸੱਕਿਊਬਸ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ",
"ਬਿਲਕੁਲ ਨਹੀਂ"];
mobtalk[24][8][1]=["ਕੀ? ਕੀ ਤੁਸੀਂ ਵੀ ਇੱਕ ਸੱਕਿਊਬਸ ਹੋ?",
"ਮੈਨੂੰ ਯਕੀਨ ਨਹੀਂ ਹੋ ਰਿਹਾ"];
mobtalk[24][8][2]=["ਤੈਨੂੰ",
"ਇੱਕ ਸੱਕਿਊਬਸ ਨਾਲ ਗੱਲ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ"];
mobtalk[24][8][3]=["ਕੀ ਤੂੰ ਇੱਕ ਸੱਕਿਊਬਸ ਬਣਨਾ ਚਾਹੁੰਦਾ ਹੈਂ?",
"ਮੈਂ ਨਹੀਂ ਚਾਹੁੰਦਾ ਕਿ ਤੈਨੂੰ ਦਿਲਚਸਪੀ ਹੋਵੇ"];
//9. ਲੂਮੀਏਰਾ
mobtalk[24][9][0]=["ਹੈਲੋ। ਮੈਂ ਲੂਮੀਏਰਾ ਹਾਂ।",
"ਕੀ ਤੂੰ ਮਜ਼ਾਕ ਕਰ ਰਿਹਾ ਹੈਂ?",
"ਮੈਂ ਹੀ ਖੇਡਦੀ ਹਾਂ।"];
mobtalk[24][9][1]=["ਮੈਨੂੰ ਹੁਣੇ ਹੀ",
"ਇੱਕ ਬਿਲਕੁਲ ਸਹੀ ਖੇਡ ਸਾਥੀ ਮਿਲਿਆ ਹੈ।"];
mobtalk[24][9][2]=["ਕੀ ਤੂੰ ਮੈਨੂੰ ਚਿੜਾ ਰਿਹਾ ਹੈਂ?",
"ਤੂੰ ਕਿਸੇ ਵੀ ਸਮੇਂ ਸਵਾਗਤ ਹੈਂ।"];
mobtalk[24][9][3]=["ਕੀ ਤੂੰ ਹਾਰਨ ਲਈ ਆਇਆ ਹੈਂ?",
"ਤੂੰ ਕਿਸੇ ਵੀ ਸਮੇਂ ਸਵਾਗਤ ਹੈਂ।"];
mobtalk[24][9][4]=["ਮੇਰੇ ਕੋਲ ਤੇਰੇ ਨਾਲ ਖੇਡਣ ਦਾ ਸਮਾਂ ਨਹੀਂ ਹੈ।",
"ਤੂੰ ਇਹ ਜਾਣਦਾ ਹੈਂ, ਹੈ ਨਾ?"];
//10. ਵੈਲਮੇਰੀਆ
mobtalk[24][10][0]=["ਮੇਰਾ ਨਾਮ ਵੈਲਮੇਰੀਆ ਹੈ।",
"ਮੈਂ ਸੱਕੂਬੀ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ",
"ਆਕਰਸ਼ਕ ਔਰਤ ਹਾਂ।",
"ਮੈਨੂੰ ਲੜਨ ਲਈ ਕੋਈ ਮਿਲ ਗਿਆ ਹੈ!"];
mobtalk[24][10][1]=["ਮੈਂ ਹੈਰਾਨ ਹਾਂ ਕਿ ਤੂੰ ਇੱਥੇ ਤੱਕ  ",
"ਕਿਵੇਂ ਪਹੁੰਚ ਗਿਆ?",
"ਆਖਰਕਾਰ ਮੇਰੀ ਵਾਰੀ ਆ ਗਈ!",
"ਕਦੇ ਵੀ ਮੇਰੇ 'ਤੇ ਹਮਲਾ ਕਰ!"];
mobtalk[24][10][2]=["ਤੂੰ ਜਿੰਨੀ ਵਾਰ ਚਾਹੇ ਆ ਸਕਦਾ ਹੈਂ।",
"ਤੈਨੂੰ ਹਮੇਸ਼ਾ ਸਵਾਗਤ ਹੈ।",
"ਚਲ, ਹੁਣ ਲੜਦੇ ਹਾਂ!"];
//0. Мосбат (Mosubatto)
mobtalk[25][0][0]=["Привет. Я Мосбат.",
"Приятно познакомиться."];
mobtalk[25][0][1]=["Здравствуй. Как дела?",
"У меня всё отлично!"];
mobtalk[25][0][2]=["Я монстр из учебного руководства."];
mobtalk[25][0][3]=["Твой пистолет пулемёт смешно слабый,",
"правда?"];
mobtalk[25][0][4]=["Не хочешь подружиться?",
"Для начала,",
"не стреляй из этого пистолета."];
mobtalk[25][0][5]=["Ты нормально поел?",
"Не только играй в игры, а покушай ка."];
mobtalk[25][0][6]=["Как дела? Похоже,",
"у тебя хватает сил на игры. Здорово"];
mobtalk[25][0][7]=["Тебе нравится?",
"Всё нужно принимать с удовольствием."];
//1. Палпуай (Parupuai)
mobtalk[25][1][0]=["Я пришла! Поехали!"];
mobtalk[25][1][1]=["Добро пожаловать!"];
mobtalk[25][1][2]=["Сюрприз!"];
mobtalk[25][1][3]=["Проснись, проснись! Уже утро!"];
mobtalk[25][1][4]=["Не хочешь поговорить со мной о любви?"];
mobtalk[25][1][5]=["Я  Палпуай!"];
//2. Рубидеви (Rubidevi)
mobtalk[25][2][0]=["Незнакомое лицо."];
mobtalk[25][2][1]=["Ты. Откуда ты?"];
mobtalk[25][2][2]=["Какая милая девочка."];
mobtalk[25][2][3]=["Это же игра,",
"так что давай сражаться изо всех сил."];
mobtalk[25][2][4]=["Такой моды в этом городе не встретишь."];
mobtalk[25][2][5]=["Мне понравилось. Очень стильно."];
mobtalk[25][2][6]=["Думаешь, я похожа на демона?",
"Я дьявол."];
mobtalk[25][2][7]=["Меня зовут Рубидеви.",
"Приятно познакомиться."];
//3. Киллер Нидл (Kirānīdu~ru)
mobtalk[25][3][0]=["Бум бум бууум."];
mobtalk[25][3][1]=["Бессмысленно разговаривать с людьми."];
mobtalk[25][3][2]=["Старайся не попасть под укус пчелы."];
mobtalk[25][3][3]=["У меня есть яд!"];
mobtalk[25][3][4]=["Меня зовут Киллер Нидл.",
"Как и говорит мое имя",
"киллер и нидл."];
//4. Приз Харк (Purizuhāku)
mobtalk[25][4][0]=["Ты думал, что птицы не умеют говорить?"];
mobtalk[25][4][1]=["Я человек, притворяющийся птицей."];
mobtalk[25][4][2]=["Разве птицы не прекрасны?"];
mobtalk[25][4][3]=["Люди не могут удержаться от того,",
"чтобы приблизиться к прекрасному."];
mobtalk[25][4][4]=["Курица вкусная, правда?",
"Птицы едят курицу."];
//5. Бон Рейс (Bōnreisu)
mobtalk[25][5][0]=["Когда нибудь ты станешь таким же",
"как я."];
mobtalk[25][5][1]=["Стань счастливым, пока жив.",
"А ты счастлив?"];
mobtalk[25][5][2]=["Пока жив, можно сделать очень многое.",
"Давай жить без сожалений"];
//6. Скай Айз (Sukaiaizu)
mobtalk[25][6][0]=["Пи пи пи пи"];
mobtalk[25][6][1]=["Лицо, требующее внимания.",
"Обнаружена аномалия. Пи пи пи пи"];
mobtalk[25][6][2]=["Охраняю территорию"];
mobtalk[25][6][3]=["На патрулировании"];
mobtalk[25][6][4]=["Не сравнивай меня с этим ржавым роботом"];
//7. Бэндрейк (Bānudoreiku)
mobtalk[25][7][0]=["Гяаааааааааааааа"];
mobtalk[25][7][1]=["Сейчас я не в настроении",
"с тобой разговаривать."];
mobtalk[25][7][2]=["Меня зовут Бандорейк. Крутое имя, да?"];
mobtalk[25][7][3]=["Я не люблю разговаривать.",
"Когда я говорю, я выгляжу слабым, да?"];
//8. Это Мистера.
mobtalk[25][8][0]=["Тебе что то нужно от сакюбаса?",
"Тебе сакюбас",
"не нужен."];
mobtalk[25][8][1]=["Что? Ты тоже сакюбас?",
"Не думаю, что это так."];
mobtalk[25][8][2]=["Тебе не нужно",
"разговаривать с сакубасами"];
mobtalk[25][8][3]=["Хочешь стать сакубасом?",
"Не хочу, чтобы ты мной интересовался"];
//9. Лумиера
mobtalk[25][9][0]=["Привет. Я Лумиера",
"Играешь?",
"Играю я"];
mobtalk[25][9][1]=["Нашла",
"идеального партнера для игры"];
mobtalk[25][9][2]=["Ты дразнишься?",
"Всегда рада"];
mobtalk[25][9][3]=["Ты пришла, чтобы проиграть?",
"Всегда рада"];
mobtalk[25][9][4]=["У меня нет времени играть с тобой",
"Ты же понимаешь?"];
//10. Валмерия
mobtalk[25][10][0]=["Меня зовут Валмерия.",
"Я самая очаровательная из всех сакюбас.",
"Нашла соперника!"];
mobtalk[25][10][1]=["Как ты сюда добрался?",
"Наконец то настала моя очередь!",
"Нападай, когда захочешь!"];
mobtalk[25][10][2]=["Приходи сколько угодно раз.",
"Ты всегда желанный гость.",
"Ну что ж, давай сразимся!"];
//0. Mosbat (Mosubatto)
mobtalk[26][0][0]=["Encantado. Soy Mosbat.",
"Un placer."];
mobtalk[26][0][1]=["Hola. ¿Cómo estás?",
"¡Yo estoy genial!"];
mobtalk[26][0][2]=["Soy el monstruo del tutorial."];
mobtalk[26][0][3]=["Esa metralleta es ridículamente débil,",
"¿verdad?"];
mobtalk[26][0][4]=["¿Quieres que seamos amigos?",
"Para empezar, no dispares con esa arma."];
mobtalk[26][0][5]=["¿Has comido bien?",
"No te pases el día jugando, come algo."];
mobtalk[26][0][6]=["¿Estás bien? Parece que tienes energía",
"para jugar. Me alegro."];
mobtalk[26][0][7]=["¿Te lo estás pasando bien?",
"Hay que disfrutar de todo."];
//1. Parupuai
mobtalk[26][1][0]=["¡Ya estoy aquí! ¡Vamos allá!"];
mobtalk[26][1][1]=["¡De nada!"];
mobtalk[26][1][2]=["¡Sorpresa!"];
mobtalk[26][1][3]=["¡Despierta, despierta! ¡Es de mañana!"];
mobtalk[26][1][4]=["¿Quieres hablar de amor conmigo?"];
mobtalk[26][1][5]=["¡Soy Parupuai!"];
//2. Rubidevi
mobtalk[26][2][0]=["No te reconozco."];
mobtalk[26][2][1]=["¿De dónde vienes?"];
mobtalk[26][2][2]=["Vaya, qué chica más mona."];
mobtalk[26][2][3]=["Como es un juego,",
"vamos a luchar con todas nuestras fuerzas."];
mobtalk[26][2][4]=["Es un estilo que no se ve por esta ciudad."];
mobtalk[26][2][5]=["Me gusta. Es muy elegante."];
mobtalk[26][2][6]=["¿Te parezco un demonio, verdad?",
"Soy un diablo."];
mobtalk[26][2][7]=["Me llamo Rubidevi.",
"Encantada de conocerte."];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[26][3][0]=["Zumb, zumb, zumb..."];
mobtalk[26][3][1]=["No tiene sentido hablar con los humanos."];
mobtalk[26][3][2]=["¡Cuidado con que no te pique",
"el aguijón de una abeja!"];
mobtalk[26][3][3]=["¡Porque tengo veneno!"];
mobtalk[26][3][4]=["Me llamo Killer Needle.",
"Como su nombre indica, killer y needle."];
//4. Purizuhāku
mobtalk[26][4][0]=["¿Pensabas que los pájaros no podían hablar?"];
mobtalk[26][4][1]=["Soy un humano que se hace pasar por pájaro."];
mobtalk[26][4][2]=["¿No te parecen hermosos los pájaros?"];
mobtalk[26][4][3]=["Los humanos no pueden evitar",
"acercarse a lo bello."];
mobtalk[26][4][4]=["La carne de pollo está rica, ¿verdad?",
"Los pájaros comen carne de pollo."];
//5. Bōnreisu
mobtalk[26][5][0]=["Algún día tú también te convertirás",
"en alguien como yo."];
mobtalk[26][5][1]=["Sé feliz mientras vivas. ¿Eres feliz?"];
mobtalk[26][5][2]=["Hay muchas cosas que se pueden hacer",
"mientras se está vivo.",
"Vivamos sin remordimientos."];
//6. Sky Eyes (Sukaiaizu)
mobtalk[26][6][0]=["Pip pip pip pip"];
mobtalk[26][6][1]=["Persona sospechosa. Se detecta anomalía.",
"Pip pip pip pip"];
mobtalk[26][6][2]=["En servicio de seguridad."];
mobtalk[26][6][3]=["En patrulla de ronda."];
mobtalk[26][6][4]=["No me compares con un robot chatarra."];
//7. Burn Drake (Bānudoreiku)
mobtalk[26][7][0]=["¡Gyaaaaaaaaaaaaaaaaaaa!"];
mobtalk[26][7][1]=["Ahora no estoy de humor",
"para hablar contigo."];
mobtalk[26][7][2]=["Me llamo Bānudoreiku.",
"Es un nombre molón, ¿verdad?"];
mobtalk[26][7][3]=["No me gusta hablar.",
"Si hablo, parezco débil, ¿no?"];
//8. Soy Mistera.
mobtalk[26][8][0]=["¿Qué quieres de una súcubo?",
"No necesitas",
"a una súcubo."];
mobtalk[26][8][1]=["¿Qué? ¿Tú también eres una súcubo?",
"No me lo creo."];
mobtalk[26][8][2]=["No tienes",
"por qué hablar con una súcubo."];
mobtalk[26][8][3]=["¿Quieres convertirte en súcubo?",
"No quiero que te intereses por mí."];
//9. Lumiera
mobtalk[26][9][0]=["¡Hola! Soy Lumiera.",
"¿Estás jugando?",
"La que juega soy yo."];
mobtalk[26][9][1]=["He encontrado",
"a la compañera de juegos perfecta."];
mobtalk[26][9][2]=["¿Te estás burlando de mí?",
"Siempre serás bienvenida."];
mobtalk[26][9][3]=["¿Has venido a perder?",
"Siempre serás bienvenida."];
mobtalk[26][9][4]=["No tengo tiempo para jugar contigo.",
"Ya lo sabes, ¿no?"];
//10. Valmeria
mobtalk[26][10][0]=["Mi nombre es Valmeria. Soy la mujer",
"más seductora de las súcubos.",
"¡He encontrado a quien enfrentarme!"];
mobtalk[26][10][1]=["¿Cómo has llegado hasta aquí?",
"¡Por fin ha llegado mi turno!",
"¡Ven a por mí cuando quieras!"];
mobtalk[26][10][2]=["Puedes venir tantas veces como quieras.",
"Siempre serás bienvenida.",
"¡Bueno, vamos a luchar!"];
//0. மோஸ்பாட்
mobtalk[27][0][0]=["உங்களை சந்தித்ததில் மகிழ்ச்சி,",
"நான் மோஸ்பாட்.",
"உங்களை மீண்டும் சந்தித்ததில் மகிழ்ச்சி."];
mobtalk[27][0][1]=["வணக்கம். எப்படி இருக்கிறீர்கள்?",
"நான் நலமாக இருக்கிறேன்!"];
mobtalk[27][0][2]=["நான் தான் அந்த பயிற்சிப் பகுதியில்",
"உள்ள அசுரன்."];
mobtalk[27][0][3]=["அந்த சப்மேஷின் துப்பாக்கி",
"சிரிப்பதற்குரிய அளவுக்கு",
"பலவீனமாக இருக்கிறது, இல்லையா?"];
mobtalk[27][0][4]=["நண்பர்களாக இருக்கலாமா?",
"முதலில், தயவுசெய்து அந்த துப்பாக்கியால்",
"சுடாதீர்கள்."];
mobtalk[27][0][5]=["சரியாகச் சாப்பிட்டீர்களா?",
"எல்லா நேரமும் விளையாடிக் கொண்டிருக்காதீர்கள்",
"நீங்கள் சாப்பிட வேண்டும்,",
"தெரியுமா."];
mobtalk[27][0][6]=["நீங்கள் நலமாக இருக்கிறீர்களா?",
"நீங்கள் விளையாடுவதற்குத் தேவையான",
"ஆற்றல் உங்களிடம் இருப்பதாகத்",
"தெரிகிறது. அது நல்லது."];
mobtalk[27][0][7]=["நீ மகிழ்ச்சியாக இருக்கிறாயா?",
"வாழ்க்கையில் எல்லாவற்றையும் நீ",
"அனுபவிக்க வேண்டும்."];
//1. பரூபூஐ
mobtalk[27][1][0]=["நான் வந்துவிட்டேன்! போகலாம்!"];
mobtalk[27][1][1]=["உனக்கு வரவேற்பு!"];
mobtalk[27][1][2]=["ஆச்சரியம்!"];
mobtalk[27][1][3]=["விழி, விழி! விடியற்காலை ஆகிவிட்டது!"];
mobtalk[27][1][4]=["காதலைப் பற்றிப் பேசலாமா?"];
mobtalk[27][1][5]=["நான் பரூபூஐ!"];
//2. ரூபிதேவி
mobtalk[27][2][0]=["நீ ஒரு அந்நியனைப் போல இருக்கிறாய்."];
mobtalk[27][2][1]=["அங்கே நிற்கிறாயே.",
"எங்கிருந்து வருகிறாய்?"];
mobtalk[27][2][2]=["நீ ஒரு அழகான பெண், இல்லையா?"];
mobtalk[27][2][3]=["இது ஒரு விளையாட்டு,",
"அதனால் நாம் முழுமூச்சுடன் செய்வோம்."];
mobtalk[27][2][4]=["இது நான் இங்கே பார்க்காத ஒரு ஸ்டைல்."];
mobtalk[27][2][5]=["எனக்கு இது பிடித்திருக்கிறது.",
"நீ மிகவும் ஸ்டைலாக இருக்கிறாய்."];
mobtalk[27][2][6]=["நான் ஒரு அசுரன் என்று நினைக்கிறாயா?",
"நான் ஒரு பிசாசு."];
mobtalk[27][2][7]=["என் பெயர் ரூபிதேவி.",
"உங்களை சந்தித்ததில் மகிழ்ச்சி."];
//3. கில்லர் நீடில் (கிரானீது~ரு)
mobtalk[27][3][0]=["முணுமுணுமுணு"];
mobtalk[27][3][1]=["மனிதர்களிடம் பேசுவதில்",
"எந்த அர்த்தமும் இல்லை."];
mobtalk[27][3][2]=["ஒரு தேனீயின் கொடுக்கு உன்னைக்",
"குத்தாமல் பார்த்துக்கொள்."];
mobtalk[27][3][3]=["பாருங்கள், என்னிடம் விஷம் இருக்கிறது!"];
mobtalk[27][3][4]=["என் பெயர் கில்லர் நீடில்.",
"பெயரைப் போலவே: கில்லர் மற்றும் நீடில்."];
//4. பிரிஸ் ஹாக் (புரிஸுஹாகு)
mobtalk[27][4][0]=["பறவைகளால் பேச முடியாது என்று",
"நினைத்தாயா?"];
mobtalk[27][4][1]=["நான் ஒரு பறவையாக நடிக்கும் மனிதன்."];
mobtalk[27][4][2]=["பறவைகள் அழகாக இல்லை என்று நினைக்கிறாயா?"];
mobtalk[27][4][3]=["மனிதர்களால் அழகான விஷயங்களைக் கண்டு",
"ஈர்க்கப்படாமல் இருக்க முடியாது."];
mobtalk[27][4][4]=["கோழி சுவையாக இருக்கும், இல்லையா?",
"பறவைகள் கோழியைச் சாப்பிடுகின்றன."];
//5. போன் ரெய்ஸ் (போன்ரெய்ஸு)
mobtalk[27][5][0]=["ஒரு நாள், நீ என் போலவே ஆகிவிடுவாய்."];
mobtalk[27][5][1]=["வாழும்போது மகிழ்ச்சியாக இருப்பதை",
"உறுதி செய். நீ மகிழ்ச்சியாக",
"இருக்கிறாயா?"];
mobtalk[27][5][2]=["வாழும்போது நீ செய்யக்கூடியவை",
"நிறைய உள்ளன. வருத்தமின்றி",
"வாழ்வோம்."];
//6. ஸ்கை ஐஸ்
mobtalk[27][6][0]=["பீப் பீப் பீப் பீப்"];
mobtalk[27][6][1]=["சந்தேக நபர். அசாதாரண நிகழ்வு",
"கண்டறியப்பட்டது. பீப் பீப் பீப் பீப்"];
mobtalk[27][6][2]=["காவலில்"];
mobtalk[27][6][3]=["கண்காணிப்பில்"];
mobtalk[27][6][4]=["அந்தப் பழமையான ரோபோக்களுடன்",
"என்னை ஒப்பிடாதே"];
//7. பர்ன் டிரேக்
mobtalk[27][7][0]=["காகாகாகாகாகா"];
mobtalk[27][7][1]=["இப்போ உன்கிட்ட பேச எனக்கு",
"மனநிலை இல்லை."];
mobtalk[27][7][2]=["என் பெயர் பர்ன் டிரேக்.",
"அருமையான பெயர், இல்லையா?"];
mobtalk[27][7][3]=["எனக்கு பேசப் பிடிக்காது.",
"நான் பேசும்போது நான் பலவீனமாகத்",
"தெரிகிறேன், இல்லையா?"];
//8. இவள் மிஸ்டீரா."];
mobtalk[27][8][0]=["ஒரு சக்குபஸிடம் இருந்து உனக்கு",
"ஏதாவது வேண்டுமா? உனக்கு ஒரு",
"சக்குபஸ் தேவை இல்லை."];
mobtalk[27][8][1]=["என்ன? நீயுமா ஒரு சக்குபஸ்?",
"நான் அப்படி நிச்சயமாக நினைக்கவில்லை."];
mobtalk[27][8][2]=["ஒரு சக்யூபஸிடம் பேச",
"உனக்குத் தேவையில்லை."];
mobtalk[27][8][3]=["நீ ஒரு சக்யூபஸாக மாற விரும்புகிறாயா?",
"நீ என் மீது ஆர்வம் காட்ட வேண்டாம்."];
//9. லூமியரா
mobtalk[27][9][0]=["வணக்கம். நான் லூமியரா.",
"நீ விளையாடிக்கொண்டிருக்கிறாயா?",
"நான் தான் விளையாடுபவள்."];
mobtalk[27][9][1]=["நான் இப்போதுதான்",
"ஒரு சரியான விளையாட்டுத்",
"துணையைக் கண்டுபிடித்தேன்."];
mobtalk[27][9][2]=["நீ என்னைக் கேலி செய்கிறாயா?",
"எப்போது வேண்டுமானாலும் வா."];
mobtalk[27][9][3]=["நீ தோற்க வரவில்லையா?",
"எப்போது வேண்டுமானாலும் வா."];
mobtalk[27][9][4]=["உன்னுடன் விளையாட எனக்கு நேரமில்லை.",
"உனக்கு அது தெரியும், இல்லையா?"];
//10. வால்மரியா
mobtalk[27][10][0]=["என் பெயர் வால்மரியா.",
"சுகுபுகளில் நானே மிகவும்",
"கவர்ச்சியான பெண்.",
"சண்டையிட ஒருவரைக்",
"கண்டுபிடித்துவிட்டேன்!"];
mobtalk[27][10][1]=["எப்படி இந்த அளவிற்கு வந்துவிட்டாய்?",
"என் முறை இறுதியாக வந்துவிட்டது!",
"எப்போது வேண்டுமானாலும் என்னை",
"எதிர்கொள்ள வா!"];
mobtalk[27][10][2]=["நீ விரும்பும் போதெல்லாம் வரலாம்.",
"உனக்கு எப்போதும் வரவேற்பு உண்டு.",
"சரி, சண்டையிடுவோம்!"];
//0. మోస్బాట్
mobtalk[28][0][0]=["మీరు కలిసినందుకు సంతోషంగా ఉంది.",
"నేను మోస్బాట్.",
"మీరు కలిసినందుకు నాకు కూడా సంతోషం."];
mobtalk[28][0][1]=["హలో. ఎలా ఉన్నారు?",
"నేను చాలా బాగున్నాను!"];
mobtalk[28][0][2]=["నేను ట్యుటోరియల్",
"లోని మాన్   స్టర్."];
mobtalk[28][0][3]=["మీ ఆ సబ్ మెషిన్ గన్ నవ్వొచ్చేంత",
"బలహీనంగా ఉంది, కదూ?"];
mobtalk[28][0][4]=["స్నేహితులుగా ఉందాం?",
"అన్నిటికంటే ముందు,",
"దయచేసి ఆ తుపాకీని పేల్చవద్దు."];
mobtalk[28][0][5]=["సరిగ్గా తిన్నారా?",
"ఎప్పుడూ గేమ్స్ ఆడకు నువ్వు",
"తినాలి, తెలుసా."];
mobtalk[28][0][6]=["మీకు బాగానే ఉన్నారా? మీరు గేమ్స్  ",
"ఆడేంత శక్తితో ఉన్నట్టు కనిపిస్తున్నారు.",
"అది మంచిది."];
mobtalk[28][0][7]=["నువ్వు ఆనందిస్తున్నావా?",
"జీవితంలో ప్రతిదాన్ని ఆస్వాదించాలి."];
//1. పరుపుపై
mobtalk[28][1][0]=["నేను వచ్చాను! పద!"];
mobtalk[28][1][1]=["స్వాగతం!"];
mobtalk[28][1][2]=["సర్   ప్రైజ్!"];
mobtalk[28][1][3]=["లేవండి, లేవండి! ఉదయం అయింది!"];
mobtalk[28][1][4]=["ప్రేమ గురించి మాట్లాడుకుందామా?"];
mobtalk[28][1][5]=["నేను పరుపుపై!"];
//2. రుబిదేవి
mobtalk[28][2][0]=["నువ్వు అపరిచితుడిలా కనిపిస్తున్నావు."];
mobtalk[28][2][1]=["అక్కడ ఉన్నావా. ఎక్కడి నుండి వచ్చావు?"];
mobtalk[28][2][2]=["నువ్వు చాలా ముద్దుగా ఉన్నావు, కదూ?"];
mobtalk[28][2][3]=["ఇది ఒక ఆట, కాబట్టి మనం",
"మన శాయశక్తులా",
"ప్రయత్నిద్దాం."];
mobtalk[28][2][4]=["ఆ స్టైల్ ఇక్కడ నేను చూడనిది."];
mobtalk[28][2][5]=["నాకు నచ్చింది. నువ్వు చాలా స్టైలిష్."];
mobtalk[28][2][6]=["నేను రాక్షసిని అనుకుంటున్నావు, కదూ?",
"నేను ఒక దెయ్యం."];
mobtalk[28][2][7]=["నా పేరు రుబిదేవి.",
"మీతో పరిచయం అయినందుకు సంతోషం."];
//3. కిల్లర్ నీడిల్ (కిరానీదు~రు)
mobtalk[28][3][0]=["భుంభుంభుంభుం"];
mobtalk[28][3][1]=["మానవులతో మాట్లాడటంలో అర్థం లేదు."];
mobtalk[28][3][2]=["ఒక తేనెటీగ చుక్కతో",
"కుట్టబడకుండా జాగ్రత్త!"];
mobtalk[28][3][3]=["నా దగ్గర విషం ఉంది, చూశావుగా!"];
mobtalk[28][3][4]=["నా పేరు కిల్లర్ నీడిల్.",
"పేరుకు తగ్గట్టుగానే",
"కిల్లర్ మరియు నీడిల్."];
//4. ప్రిస్ హాక్ (పురిజుహాకు)
mobtalk[28][4][0]=["పక్షులు మాట్లాడలేవని అనుకున్నావా?"];
mobtalk[28][4][1]=["నేను పక్షిలా నటిస్తున్న మనిషిని."];
mobtalk[28][4][2]=["పక్షులు అందంగా లేవని నీకు",
"అనిపించడం లేదా?"];
mobtalk[28][4][3]=["మనిషి అందమైన వాటికి",
"ఆకర్షితుడవకుండా ఉండలేడు."];
mobtalk[28][4][4]=["చికెన్ రుచిగా ఉంటుంది, కదా?",
"పక్షులు చికెన్ తింటాయి."];
//5. బోన్ రీస్ (బోన్ రీసు)
mobtalk[28][5][0]=["ఒక రోజు, నువ్వు నా లాగే అవుతావు."];
mobtalk[28][5][1]=["బ్రతికి ఉన్నంత కాలం సంతోషంగా ఉండేలా",
"చూసుకో. నువ్వు సంతోషంగా ఉన్నావా?"];
mobtalk[28][5][2]=["బ్రతికి ఉన్నంత కాలం నువ్వు",
"చేయగలిగింది చాలా ఉంది.",
"పశ్చాత్తాపం లేకుండా బ్రతకుదాం."];
//6. స్కై ఐస్ (సుకైఐజు)
mobtalk[28][6][0]=["బీప్ బీప్ బీప్ బీప్"];
mobtalk[28][6][1]=["ఆసక్తికరమైన వ్యక్తి. అసాధారణత",
"గుర్తించబడింది. బీప్ బీప్ బీప్ బీప్"];
mobtalk[28][6][2]=["పహారాలో ఉన్నాను"];
mobtalk[28][6][3]=["గస్తీలో ఉన్నాను"];
mobtalk[28][6][4]=["నన్ను ఆ బరువైన రోబోట్   లతో కలిపేయకు"];
//7. బర్న్ డ్రేక్ (బనుడోరేకు)
mobtalk[28][7][0]=["గర్జన"];
mobtalk[28][7][1]=["నాకు ఇప్పుడు నీతో మాట్లాడాలని లేదు."];
mobtalk[28][7][2]=["నా పేరు బర్న్ డ్రేక్. పేరు బాగుంది కదూ?"];
mobtalk[28][7][3]=["నాకు మాట్లాడటం ఇష్టం లేదు.",
"నేను మాట్లాడితే బలహీనంగా",
"కనిపిస్తాను, కదూ?"];
//8. ఇది మిస్టెయిరా.
mobtalk[28][8][0]=["హే అక్కడ. నేను లూమియెరా.",
"నువ్వు ఆడుకుంటావా?",
"ఆడేది నేనే."];
mobtalk[28][8][1]=["నాకు సరిగ్గా సరిపోయే",
"ఆట సహచరుడు దొరికాడు."];
mobtalk[28][8][2]=["నన్ను ఏడిపిస్తున్నావా?",
"ఎప్పుడైనా స్వాగతం."];
mobtalk[28][8][3]=["ఓడిపోవడానికి వచ్చావా?",
"ఎప్పుడైనా స్వాగతం."];
mobtalk[28][8][4]=["నీతో ఆడుకోవడానికి నాకు సమయం లేదు.",
"అది నీకు తెలుసు కదా?"];
//9. లూమియెరా
mobtalk[28][9][0]=["హే అక్కడ. నేను లూమియెరా.",
"నువ్వు ఆడుకుంటావా?",
"ఆడేది నేనే."];
mobtalk[28][9][1]=["నాకు సరిగ్గా సరిపోయే",
"ఆట సహచరుడు దొరికాడు."];
mobtalk[28][9][2]=["నన్ను ఏడిపిస్తున్నావా?",
"ఎప్పుడైనా స్వాగతం."];
mobtalk[28][9][3]=["ఓడిపోవడానికి వచ్చావా?",
"ఎప్పుడైనా స్వాగతం."];
mobtalk[28][9][4]=["నీతో ఆడుకోవడానికి నాకు సమయం లేదు.",
"అది నీకు తెలుసు కదా?"];
//10. వల్మెరియా
mobtalk[28][10][0]=["నా పేరు వల్మెరియా.",
"సుక్కూబిలలో నేనే అత్యంత",
"ఆకర్షణీయమైన స్త్రీని.",
"పోరాడటానికి ఒకరిని కనుగొన్నాను!"];
mobtalk[28][10][1]=["అసలు నువ్వు ఇంత దూరం ఎలా వచ్చావు?",
"చివరికి నా వంతు వచ్చింది!",
"ఎప్పుడైనా నాపైకి రా!"];
mobtalk[28][10][2]=["నీకు నచ్చినన్ని సార్లు రావచ్చు.",
"నీకు ఎప్పుడూ స్వాగతం.",
"సరే అయితే, పోరాడదాం!"];
//0. โมซูบัตโต
mobtalk[29][0][0]=["ยินดีที่ได้รู้จัก ผมชื่อโมซูบัตโต",
"ยินดีที่ได้รู้จัก"];
mobtalk[29][0][1]=["สวัสดีครับ สบายดีไหมครับ",
"ผมสบายดีครับ!"];
mobtalk[29][0][2]=["ผมคือมอนสเตอร์ฝึกสอนครับ"];
mobtalk[29][0][3]=["ปืนกลมือกระบอกนั้นอ่อนแอเหลือเกิน",
"ใช่ไหมครับ"];
mobtalk[29][0][4]=["อยากเป็นเพื่อนกันไหมครับ"];
mobtalk[29][0][5]=["ก่อนอื่นเลย กรุณาอย่าใช้ปืนนั้น",
"ยิงนะครับ",
"กินข้าวเรียบร้อยแล้วหรือยังครับ"];
mobtalk[29][0][6]=["อย่าเอาแต่เล่นเกม กินอะไรสักหน่อยเถอะครับ!",
"สบายดีไหมครับ ดูเหมือนคุณจะมีพลัง",
"เหลือเฟือที่จะเล่นเกมนะครับ"];
mobtalk[29][0][7]=["ดีจังเลยครับ สนุกไหมครับ",
"ต้องสนุกกับทุกอย่างนะครับ!"];
//1. ปารูปูไอ
mobtalk[29][1][0]=["ผมมาแล้ว! ไปกันเถอะ!"];
mobtalk[29][1][1]=["ยินดีต้อนรับครับ!"];
mobtalk[29][1][2]=["เซอร์ไพรส์!"];
mobtalk[29][1][3]=["ตื่นๆ! เช้าแล้ว!"];
mobtalk[29][1][4]=["อยากคุยเรื่องความรักกับผมไหมครับ"];
mobtalk[29][1][5]=["ผมชื่อปารูปูไอครับ!"];
//2. รูบิเดวี
mobtalk[29][2][0]=["คุณเป็นหน้าใหม่ที่ไม่คุ้นตา"];
mobtalk[29][2][1]=["คุณมาจากไหนครับ"];
mobtalk[29][2][2]=["คุณเป็นสาวน่ารักครับ"];
mobtalk[29][2][3]=["ในเมื่อมันเป็นเกม",
"งั้นเรามาสู้กันให้สุดกำลังเลย"];
mobtalk[29][2][4]=["นี่เป็นสไตล์ที่ฉันไม่เห็นในเมืองนี้เลย"];
mobtalk[29][2][5]=["ฉันชอบนะ มันดูมีสไตล์มาก"];
mobtalk[29][2][6]=["คุณอาจจะคิดว่ามันเหมือนปีศาจใช่ไหม?",
"มันคือปีศาจ"];
mobtalk[29][2][7]=["ชื่อของมันคือ รูบิเดวี",
"ยินดีที่ได้รู้จัก"];
//3. เข็มพิษ
mobtalk[29][3][0]=["บzzz บzzz บzzz"];
mobtalk[29][3][1]=["คุยกับมนุษย์ไม่มีประโยชน์หรอก"];
mobtalk[29][3][2]=["แค่ระวังอย่าโดนเหล็กในผึ้งต่อยก็พอ"];
mobtalk[29][3][3]=["เพราะฉันมีพิษ!"];
mobtalk[29][3][4]=["ชื่อของฉันคือ เข็มพิษ",
"อย่างที่ชื่อบอก เข็มพิษและนักฆ่า"];
//4. ปริซฮาร์ค"];
mobtalk[29][4][0]=["คุณคิดว่านกพูดไม่ได้เหรอ?"];
mobtalk[29][4][1]=["ฉันเป็นมนุษย์ที่ปลอมตัวเป็นนก"];
mobtalk[29][4][2]=["คุณไม่คิดว่านกสวยเหรอ?"];
mobtalk[29][4][3]=["มนุษย์มักถูกดึงดูด",
"ด้วยสิ่งสวยงาม"];
mobtalk[29][4][4]=["ไก่รสชาติอร่อยใช่ไหม?",
"นกกินไก่"];
//5. วิญญาณกระดูก
mobtalk[29][5][0]=["สักวันคุณจะเป็นเหมือนฉัน"];
mobtalk[29][5][1]=["จงมีความสุขในขณะที่คุณยังมีชีวิตอยู่",
"คุณมีความสุขไหม?"];
mobtalk[29][5][2]=["มีหลายสิ่งที่คุณสามารถทำได้",
"ในขณะที่คุณยังมีชีวิตอยู่",
"จงใช้ชีวิตโดยไม่เสียใจ"];
//6. ดวงตาแห่งท้องฟ้า (ซูไคไอซึ)
mobtalk[29][6][0]=["บี๊บ บี๊บ บี๊บ บี๊บ"];
mobtalk[29][6][1]=["บุคคลต้องสงสัย ตรวจพบความผิดปกติ",
"บี๊บ บี๊บ บี๊บ บี๊บ"];
mobtalk[29][6][2]=["กำลังลาดตระเวน"];
mobtalk[29][6][3]=["ลาดตระเวนอยู่"];
mobtalk[29][6][4]=["อย่าเหมารวมฉันกับหุ่นยนต์เทอะทะนั่น"];
//7. เบิร์นเดรคุ (บานูโดเรคุ)
mobtalk[29][7][0]=["เกียววววววววววววววว"];
mobtalk[29][7][1]=["ตอนนี้ฉันไม่มีอารมณ์จะคุยกับคุณ"];
mobtalk[29][7][2]=["ฉันชื่อเบิร์นเดรคุ ชื่อเท่ใช่ไหม?"];
mobtalk[29][7][3]=["ฉันไม่ชอบพูด",
"ฉันดูอ่อนแอเวลาพูดใช่ไหม?"];
//8. ฉันชื่อมิสเทร่า
mobtalk[29][8][0]=["คุณต้องการอะไรจากซัคคิวบัสหรือเปล่า?",
"คุณไม่จำเป็นต้องมี",
"ซัคคิวบัสหรอก"];
mobtalk[29][8][1]=["อะไรนะ? คุณก็เป็นซัคคิวบัสด้วยเหรอ?",
"ฉันว่าไม่นะ"];
mobtalk[29][8][2]=["คุณไม่จำเป็นต้องคุยกับ",
"ซัคคิวบัสหรอก"];
mobtalk[29][8][3]=["คุณอยากเป็นซัคคิวบัสเหรอ?",
"ฉันไม่อยากให้คุณสนใจหรอก"];
//9. ลูมิเอร่า
mobtalk[29][9][0]=["สวัสดี ฉันชื่อลูมิเอร่า",
"คุณกำลังเล่นอยู่หรือเปล่า?",
"ฉันเป็นคนที่กำลังเล่นอยู่"];
mobtalk[29][9][1]=["ฉันเจอเพื่อนเล่นท",
"ี่สมบูรณ์แบบแล้ว"];
mobtalk[29][9][2]=["คุณกำลังล้อฉันอยู่เหรอ",
"ยินดีต้อนรับเสมอ"];
mobtalk[29][9][3]=["คุณมาที่นี่เพื่อแพ้ใช่ไหม",
"ยินดีต้อนรับเสมอ"];
mobtalk[29][9][4]=["ฉันไม่มีเวลาเล่นกับคุณหรอก",
"คุณรู้ใช่ไหม"];
//10. วาลเมเรีย
mobtalk[29][10][0]=["ฉันชื่อวาลเมเรีย",
"ซัคคิวบัสที่เย้ายวนที่สุด",
"ฉันเจอคู่ต่อสู้แล้ว!"];
mobtalk[29][10][1]=["คุณมาที่นี่ได้ยังไง?",
"ในที่สุดก็ถึงตาฉันแล้ว!",
"มาสู้กับฉันได้ทุกเมื่อ!"];
mobtalk[29][10][2]=["มาได้กี่ครั้งก็ได้ตามใจคุณ",
"ยินดีต้อนรับเสมอ",
"เอาล่ะ มาสู้กันเลย!"];
//0. Mosubatto
mobtalk[30][0][0]=["Merhaba. Ben Mosubatto.",
"Tanıştığımıza memnun oldum."];
mobtalk[30][0][1]=["Merhaba. Nasılsın?",
"Ben iyiyim!"];
mobtalk[30][0][2]=["Ben öğretici bölümdeki canavarım."];
mobtalk[30][0][3]=["O makineli tüfeğin komik derecede",
"zayıf, değil mi?"];
mobtalk[30][0][4]=["Arkadaş olalım mı?",
"Öncelikle o silahı ateşleme lütfen."];
mobtalk[30][0][5]=["Yemeğini iyi yedin mi?",
"Sadece oyun oynamakla kalma,",
"yemek de ye."];
mobtalk[30][0][6]=["İyi misin? Oyun oynayacak kadar",
"enerjik görünüyorsun. İyi olmuş."];
mobtalk[30][0][7]=["Eğleniyor musun?",
"Hayatta her şeyden zevk almalısın."];
//1. Parupuai
mobtalk[30][1][0]=["Geldim! Hadi gidelim!"];
mobtalk[30][1][1]=["Hoş geldin!"];
mobtalk[30][1][2]=["Sürpriz!"];
mobtalk[30][1][3]=["Uyan, uyan! Sabah oldu!"];
mobtalk[30][1][4]=["Benimle aşk hikayesi",
"konuşmak ister misin?"];
mobtalk[30][1][5]=["Ben Parupuai!"];
//2. Rubidevi
mobtalk[30][2][0]=["Tanıdık gelmeyen bir yüz."];
mobtalk[30][2][1]=["Sen. Nereden geldin?"];
mobtalk[30][2][2]=["Ne sevimli bir kızsın."];
mobtalk[30][2][3]=["Bu bir oyun,",
"o yüzden tüm gücünle savaşalım."];
mobtalk[30][2][4]=["Bu şehirde pek görülmeyen bir moda."];
mobtalk[30][2][5]=["Beğendim. Çok şık."];
mobtalk[30][2][6]=["Beni iblis gibi mi görüyorsun?",
"Ben bir şeytanım."];
mobtalk[30][2][7]=["Adım Rubidevi.",
"Memnun oldum."];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[30][3][0]=["Vız vız vızzzz"];
mobtalk[30][3][1]=["İnsanlarla konuşmanın bir anlamı yok."];
mobtalk[30][3][2]=["Arı iğnesine batmamaya dikkat et."];
mobtalk[30][3][3]=["Çünkü bende zehir var!"];
mobtalk[30][3][4]=["Adım Killer Needle.",
"Adımdan da anlaşılacağı gibi,",
"Killer ve Needle."];
//4. Purizuhāku
mobtalk[30][4][0]=["Kuşların konuşamadığını mı sandın?"];
mobtalk[30][4][1]=["Ben kuş kılığına girmiş bir insanım."];
mobtalk[30][4][2]=["Kuşlar güzel değil mi sence?"];
mobtalk[30][4][3]=["İnsanlar güzel şeylere",
"yakınlaşmaya çalışır."];
mobtalk[30][4][4]=["Tavuk eti lezzetlidir, değil mi?",
"Kuşlar tavuk eti yer."];
//5. Bōnreisu
mobtalk[30][5][0]=["Sen de bir gün benim gibi olacaksın."];
mobtalk[30][5][1]=["Hayattayken mutlu ol. Sen mutlu musun?"];
mobtalk[30][5][2]=["Hayattayken yapabileceğin çok şey var.",
"Pişmanlık duymadan yaşayalım"];
//6. Sky Eyes (Sukaiaizu)
mobtalk[30][6][0]=["Pip pip pip pip"];
mobtalk[30][6][1]=["Dikkat edilmesi gereken kişi.",
"Anormal durum tespit edildi.",
"Pip pip pip pip"];
mobtalk[30][6][2]=["Güvenlik görevindeyim"];
mobtalk[30][6][3]=["Devriye turundayım"];
mobtalk[30][6][4]=["Beni hurda robotlarla bir tutma"];
//7. Burn Drake (Bānudoreiku)
mobtalk[30][7][0]=["Gyaaaaaaaaaaaaaaa"];
mobtalk[30][7][1]=["Şu anda seninle",
"konuşacak havamda değilim."];
mobtalk[30][7][2]=["Adım Bānudoreiku.",
"Havalı bir isim, değil mi?"];
mobtalk[30][7][3]=["Konuşmayı sevmem.",
"Konuşursam zayıf görünürüm, değil mi?"];
//8. Ben Mistera.
mobtalk[30][8][0]=["Succubus'tan bir şey mi istiyorsun?",
"Senin bir Succubus'a",
"ihtiyacın yok."];
mobtalk[30][8][1]=["Ne? Sen de mi Succubus'sun?",
"Hayır, öyle olduğunu sanmıyorum."];
mobtalk[30][8][2]=["Senin bir Succubus'la",
"konuşmana gerek yok"];
mobtalk[30][8][3]=["Succubus mu olmak istiyorsun?",
"Bana ilgi göstermeni istemiyorum"];
//9. Lumiera
mobtalk[30][9][0]=["Selam. Ben Lumiera.",
"Oynuyor musun?",
"Oynayan benim."];
mobtalk[30][9][1]=["Tam da aradığım",
"oyun arkadaşını",
"buldum."];
mobtalk[30][9][2]=["Dalga mı geçiyorsun?",
"Her zaman beklerim."];
mobtalk[30][9][3]=["Yenilmeye mi geldin acaba?",
"Her zaman beklerim."];
mobtalk[30][9][4]=["Seninle oynayacak vaktim yok.",
"Sen de anlıyorsun, değil mi?"];
//10. Valmeria
mobtalk[30][10][0]=["Adım Valmeria. Succubuslar arasında",
"en baştan çıkarıcı kadınım.",
"Savaşacak bir rakip buldum!"];
mobtalk[30][10][1]=["Buraya nasıl geldin acaba?",
"Sonunda sıra bana geldi!",
"Ne zaman istersen gel!"];
mobtalk[30][10][2]=["Kaç kez gelirsen gel,",
"her zaman hoş geldin.",
"Hadi, savaşalım!"];
//0. Мосубат (Mosubatto)
mobtalk[31][0][0]=["Привіт. Я — Мосубат.",
"Приємно познайомитися."];
mobtalk[31][0][1]=["Привіт. Як справи?",
"У мене все гаразд!"];
mobtalk[31][0][2]=["Я монстр з навчального рівня."];
mobtalk[31][0][3]=["Твій пістолет кулемет смішно слабкий,",
"правда?"];
mobtalk[31][0][4]=["Не хочеш подружитися?",
"Для початку не стріляй з того пістолета."];
mobtalk[31][0][5]=["Ти нормально поїв?",
"Не грай тільки в ігри, а й поїж."];
mobtalk[31][0][6]=["Як справи? Схоже,",
"у тебе вистачає сил на гру. Це добре"];
mobtalk[31][0][7]=["Тобі подобається?",
"Усе треба сприймати з гумором"];
//1. Палпуай (Parupuai)
mobtalk[31][1][0]=["Я прийшла! Поїхали!"];
mobtalk[31][1][1]=["Ласкаво просимо!"];
mobtalk[31][1][2]=["Сюрприз!"];
mobtalk[31][1][3]=["Прокидайся, прокидайся! Вже ранок!"];
mobtalk[31][1][4]=["Не хочеш поговорити про кохання?"];
mobtalk[31][1][5]=["Я Палпуай!"];
//2. Рубідеві (Rubidevi)
mobtalk[31][2][0]=["Незнайоме обличчя"];
mobtalk[31][2][1]=["Ти. Звідки ти?"];
mobtalk[31][2][2]=["Ти ж мила дівчинка."];
mobtalk[31][2][3]=["Це ж гра,",
"тож давай битимемося щосили."];
mobtalk[31][2][4]=["Такого стилю в цьому місті не бачила."];
mobtalk[31][2][5]=["Мені сподобалося. Дуже стильно."];
mobtalk[31][2][6]=["Думаєш, я схожа на демона?",
"Я  диявол."];
mobtalk[31][2][7]=["Мене звати Рубідеві.",
"Приємно познайомитися."];
//3. Кіла Нідл (Kirānīdu~ru)
mobtalk[31][3][0]=["Бум бум бууум."];
mobtalk[31][3][1]=["Немає сенсу розмовляти з людьми."];
mobtalk[31][3][2]=["Тільки не дайся",
"вжалити бджолиним жалом."];
mobtalk[31][3][3]=["Адже в мене є отрута!"];
mobtalk[31][3][4]=["Мене звати Кілер Нідл.",
"Як і говорить ім'я, кілер і нідл."];
//4. Пріз Харк (Purizuhāku)
mobtalk[31][4][0]=["Ти думав, що птахи не вміють говорити?"];
mobtalk[31][4][1]=["Я людина, яка прикидається птахом."];
mobtalk[31][4][2]=["Хіба птахи не прекрасні?"];
mobtalk[31][4][3]=["Люди не можуть втриматися,",
"щоб не наблизитися до прекрасного."];
mobtalk[31][4][4]=["Куряче м'ясо смачне, правда?",
"Птахи їдять куряче м'ясо."];
//5. Бон Рейс (Bōnreisu)
mobtalk[31][5][0]=["Ти теж колись станеш таким, як я."];
mobtalk[31][5][1]=["Будь щасливим, поки живеш.Ти щасливий?"];
mobtalk[31][5][2]=["Поки живеш, можна зробити дуже багато.",
"Живи без жалю"];
//6. Скай Айз (Sukaiaizu)
mobtalk[31][6][0]=["Піп піп піп піп"];
mobtalk[31][6][1]=["Особа, що викликає підозру.",
"Виявлено аномалію. Піп піп піп піп"];
mobtalk[31][6][2]=["На варті"];
mobtalk[31][6][3]=["На патрулюванні"];
mobtalk[31][6][4]=["Не порівнюй мене з цим старим роботом"];
//7. Берн Дрейк (Bānudoreiku)
mobtalk[31][7][0]=["ГАОООООООООО"];
mobtalk[31][7][1]=["Зараз я не в настрої з тобою розмовляти"];
mobtalk[31][7][2]=["Мене звати Бандрейк.",
"Класне ім'я, правда?"];
mobtalk[31][7][3]=["Я не люблю розмовляти",
"Коли я розмовляю,",
"я виглядаю слабким, так?"];
//8. Це Містера.
mobtalk[31][8][0]=["Тобі щось потрібно від сакубас?",
"Тобі сакубас",
"не потрібна"];
mobtalk[31][8][1]=["Що? Ти теж сакубас?",
"Ні, я так не думаю"];
mobtalk[31][8][2]=["Тобі не потрібно",
"розмовляти з сакубасом"];
mobtalk[31][8][3]=["Хочеш стати сакубасом?",
"Не хочу, щоб ти цим цікавився"];
//9. Лумієра
mobtalk[31][9][0]=["Привіт. Я Лумієра",
"Ти граєшся?",
"Це я граюся"];
mobtalk[31][9][1]=["Я знайшла",
"ідеального партнера для гри"];
mobtalk[31][9][2]=["Ти дражнишся?",
"Завжди ласкаво просимо"];
mobtalk[31][9][3]=["Ти прийшов, щоб програти?",
"Завжди ласкаво просимо"];
mobtalk[31][9][4]=["У мене немає часу гратися з тобою",
"Ти ж це розумієш?"];
//10. Вальмерія
mobtalk[31][10][0]=["Мене звати Вальмерія.",
"Я найчарівніша жінка серед сакубасів.",
"Знайшла суперника для бою!"];
mobtalk[31][10][1]=["Як ти сюди дістався?",
"Нарешті настала моя черга!",
"Нападай коли завгодно!"];
mobtalk[31][10][2]=["Приходь скільки завгодно разів.",
"Я завжди рада.",
"Ну що ж, давай битимемося!"];
//右から書く
//0. موسبات
mobtalk[32][0][0]=["آپ سے مل کر خوشی ہوئی۔ میں موسبات ہوں۔",
"آپ سے مل کر خوشی ہوئی۔"];
mobtalk[32][0][1]=["ہیلو۔ کیسے ہیں آپ؟",
"میں بالکل ٹھیک ہوں!"];
mobtalk[32][0][2]=["میں ٹیوٹوریل والا مونسٹر ہوں۔"];
mobtalk[32][0][3]=["آپ کی یہ سب مشین گن تو مذاق کی حد تک",
"کمزور ہے، ہے نا؟"];
mobtalk[32][0][4]=["دوست بنو؟ سب سے پہلے، براہِ کرم",
"یہ بندوق مت چلائیں۔"];
mobtalk[32][0][5]=["کیا آپ نے ٹھیک سے کھانا کھایا ہے؟",
"میشہ گیمز ہی مت کھیلتے رہیں—آپ کو",
"کھانا بھی کھانا چاہیے، آپ جانتے ہیں۔"];
mobtalk[32][0][6]=["آپ ٹھیک ہیں؟ آپ کو دیکھ کر تو لگتا ہے",
"کہ آپ میں گیمز کھیلنے کی پوری طاقت ہے۔",
"یہ اچھا ہے۔"];
mobtalk[32][0][7]=["کیا تم لطف اندوز ہو رہے ہو؟",
"تمہیں زندگی میں ہر چیز سے",
"لطف اندوز ہونا چاہیے۔"];
//1. پاروپوائی
mobtalk[32][1][0]=["میں یہاں ہوں! چلو!"];
mobtalk[32][1][1]=["تمہیں خوش آمدید!"];
mobtalk[32][1][2]=["سرپرائز!"];
mobtalk[32][1][3]=["جاگو، جاگو! صبح ہو گئی ہے!"];
mobtalk[32][1][4]=["محبت کے بارے میں بات کریں؟"];
mobtalk[32][1][5]=["میں پاروپوائی ہوں!"];
//2. روبی دیوی
mobtalk[32][2][0]=["تم اجنبی لگ رہے ہو۔"];
mobtalk[32][2][1]=["اے وہاں۔ تم کہاں سے آئے ہو؟"];
mobtalk[32][2][2]=["تم ایک پیاری لڑکی ہو، ہے نا؟"];
mobtalk[32][2][3]=["یہ ایک کھیل ہے، تو آئیے اسے",
"پوری طرح سے کھیلیں۔"];
mobtalk[32][2][4]=["یہ ایک ایسا انداز ہے",
"جو میں نے یہاں نہیں دیکھا۔"];
mobtalk[32][2][5]=["مجھے یہ پسند ہے۔ تم بہت اسٹائلش ہو۔"];
mobtalk[32][2][6]=["تم سوچتی ہو کہ میں ایک بھوت ہوں، ہے نا؟",
"میں ایک شیطان ہوں۔"];
mobtalk[32][2][7]=["میرا نام روبی دیوی ہے۔",
"آپ سے مل کر خوشی ہوئی۔"];
//3. کلر نیڈل (کیرا نیڈورو)
mobtalk[32][3][0]=["بز، بز، بز..."];
mobtalk[32][3][1]=["انسانوں سے بات کرنے کا کوئی فائدہ نہیں۔"];
mobtalk[32][3][2]=["بس اس بات کا خیال رکھنا کہ تمہیں",
"شہد کی مکھی کا ڈنک نہ لگے۔"];
mobtalk[32][3][3]=["میرے پاس زہر ہے، سمجھے!"];
mobtalk[32][3][4]=["میرا نام کلر نیڈل ہے۔",
"جیسا کہ نام سے ظاہر ہے: کلر اور نیڈل۔"];
//۴. پرِز ہاک (پوریزوہاکو)(4)
mobtalk[32][4][0]=["کیا تم نے سوچا تھا کہ",
"پرندے بات نہیں کر سکتے؟"];
mobtalk[32][4][1]=["میں ایک انسان ہوں جو",
"پرندے کا بہروپ دھارے ہوئے ہے۔"];
mobtalk[32][4][2]=["کیا تم نہیں سوچتے کہ",
"پرندے خوبصورت ہوتے ہیں؟"];
mobtalk[32][4][3]=["انسان خوبصورت چیزوں کی طرف کھنچے",
"چلے جانے سے خود کو نہیں روک سکتے۔"];
mobtalk[32][4][4]=["مرغی مزیدار ہوتی ہے، ہے نا؟",
"پرندے مرغی کھاتے ہیں۔"];
//۵. بون ریس (بونریسو)(5)
mobtalk[32][5][0]=["ایک دن، تم بھی میرے جیسے ہو جاؤ گے۔"];
mobtalk[32][5][1]=["یقینی بناؤ کہ تم زندہ رہتے ہوئے خوش ہو۔",
"کیا تم خوش ہو؟"];
mobtalk[32][5][2]=["زندہ رہتے ہوئے تم بہت کچھ کر سکتے ہو۔",
"آئیے بغیر کسی پچھتاوے کے جیتے ہیں۔"];
//۶. اسکائی آئیز(6)
mobtalk[32][6][0]=["بیپ بیپ بیپ"];
mobtalk[32][6][1]=["دِلچسپی کا حامل شخص۔ غیر معمولی صورتحال",
"کا پتہ چلا۔ بیپ بیپ بیپ"];
mobtalk[32][6][2]=["گشت پر"];
mobtalk[32][6][3]=["پاسبان کے فرائض پر"];
mobtalk[32][6][4]=["مجھے ان بھاری بھرکم روبوٹس کے ساتھ",
"ایک نہ سمجھو"];
//برن ڈریک(7)
mobtalk[32][7][0]=["گاوگاوگاوگاوگاوگاوگاوگاوگاوگاوگاو"];
mobtalk[32][7][1]=["میرا ابھی تم سے بات کرنے کا",
"موڈ نہیں ہے۔"];
mobtalk[32][7][2]=["میرا نام برن ڈریک ہے۔",
"زبردست نام ہے، ہے نا؟"];
mobtalk[32][7][3]=["مجھے بات کرنا پسند نہیں ہے۔",
"جب میں بات کرتا ہوں تو کمزور لگتا ہوں،",
"ہے نا؟"];
//8. یہ مِسٹیرا ہے۔
mobtalk[32][8][0]=["کیا تم ایک سکیوبس سے کچھ چاہتے ہو؟",
"تمہیں ایک سکیوبس کی",
"ضرورت نہیں ہے۔"];
mobtalk[32][8][1]=["کیا؟ کیا تم بھی ایک سکیوبس ہو؟",
"مجھے بالکل نہیں لگتا۔"];
mobtalk[32][8][2]=["تمہیں کسی سکیوبس سے بات کرنے کی",
"ضرورت نہیں ہے۔"];
mobtalk[32][8][3]=["کیا تم سکیوبس بننا چاہتے ہو؟ میں نہیں",
"چاہتی کہ تمہیں مجھ میں دلچسپی ہو۔"];
//9. لومیرا
mobtalk[32][9][0]=["ارے! میں لومیرا ہوں۔",
"کیا تم کھیلو گے؟",
"کھیلنے والا تو میں ہوں۔"];
mobtalk[32][9][1]=["مجھے ابھی ابھی",
"کھیلنے کا ایک بہترین ساتھی ملا ہے۔۔"];
mobtalk[32][9][2]=["کیا تم مجھے چڑا رہے ہو؟",
"تمہیں ہمیشہ خوش آمدید ہے۔"];
mobtalk[32][9][3]=["کیا تم ہارنے آئے ہو؟",
"تمہیں ہمیشہ خوش آمدید ہے۔"];
mobtalk[32][9][4]=["مجھے تمہارے ساتھ کھیلنے کا وقت نہیں ہے۔",
"یہ تم جانتے ہو، ہے نا؟"];
//10. والمیریا
mobtalk[32][10][0]=["میرا نام والمیریا ہے۔",
"میں سکیوبی میں سب سے زیادہ",
"دلکش عورت ہوں۔",
"مجھے لڑنے کے لیے کوئی مل گیا ہے!"];
mobtalk[32][10][1]=["مجھے حیرت ہے کہ",
"تم یہاں تک کیسے پہنچے؟",
"آخر کار میری باری آ ہی گئی!",
"جب چاہو میرا سامنا کرو!"];
mobtalk[32][10][2]=["تم جب چاہو واپس آ سکتے ہو۔",
"تمہارا ہمیشہ خیر مقدم ہے۔",
"تو پھر، چلو لڑتے ہیں!"];
//0. Mosubatto
mobtalk[33][0][0]=["Rất vui được gặp bạn. Tôi là Mosubatto.",
"Rất vui được làm quen."];
mobtalk[33][0][1]=["Xin chào. Bạn khỏe không?",
"Tôi khỏe lắm!"];
mobtalk[33][0][2]=["Tôi là quái vật",
"trong phần hướng dẫn đấy."];
mobtalk[33][0][3]=["Cái súng máy đó yếu đến mức",
"đáng cười nhỉ."];
mobtalk[33][0][4]=["Chúng ta làm bạn nhé?",
"Trước tiên, đừng bắn cái súng đó đi."];
mobtalk[33][0][5]=["Bạn đã ăn cơm chưa?",
"Đừng chỉ chơi game suốt,",
"nhớ ăn cơm nhé."];
mobtalk[33][0][6]=["Bạn khỏe không? Trông bạn có vẻ còn đủ",
"sức để chơi game đấy. Tốt quá."];
mobtalk[33][0][7]=["Bạn có đang vui không?",
"Mọi chuyện đều phải tận hưởng mới được"];
//1. Parupuai
mobtalk[33][1][0]=["Tớ đến rồi! Let's go!"];
mobtalk[33][1][1]=["You're welcome!"];
mobtalk[33][1][2]=["Bất ngờ chưa!"];
mobtalk[33][1][3]=["Dậy đi, dậy đi! Sáng rồi!"];
mobtalk[33][1][4]=["Muốn nói chuyện tình cảm với tớ không?"];
mobtalk[33][1][5]=["Tớ là Parupuai!"];
//2. Rubidevi
mobtalk[33][2][0]=["Trông mặt cậu lạ quá nhỉ"];
mobtalk[33][2][1]=["Cậu đến từ đâu vậy?"];
mobtalk[33][2][2]=["Cô gái dễ thương nhỉ"];
mobtalk[33][2][3]=["Đây là trò chơi nên hãy",
"chiến đấu hết mình nhé"];
mobtalk[33][2][4]=["Đây là phong cách thời trang",
"không thấy ở thành phố này"];
mobtalk[33][2][5]=["Tớ thích lắm. Rất sành điệu"];
mobtalk[33][2][6]=["Cậu nghĩ tớ giống quỷ phải không?",
"Tớ là quỷ đấy"];
mobtalk[33][2][7]=["Tên tớ là Rubidevi",
"Rất vui được gặp cậu"];
//3. Killer Needle (Kirānīdu~ru)
mobtalk[33][3][0]=["Vù vù vù"];
mobtalk[33][3][1]=["Nói chuyện với con người",
"cũng vô nghĩa thôi"];
mobtalk[33][3][2]=["Đừng để bị nọc ong chích nhé"];
mobtalk[33][3][3]=["Vì tớ có nọc độc mà!"];
mobtalk[33][3][4]=["Tên tôi là Killer Needle",
"Đúng như tên gọi, Killer và Needle"];
//4. Purizuhāku
mobtalk[33][4][0]=["Cậu nghĩ chim không biết nói à?"];
mobtalk[33][4][1]=["Tôi là con người giả làm chim đấy"];
mobtalk[33][4][2]=["Cậu không thấy chim đẹp sao?"];
mobtalk[33][4][3]=["Con người luôn bị thu hút",
"bởi những thứ đẹp đẽ"];
mobtalk[33][4][4]=["Thịt gà ngon lắm nhỉ",
"Chim ăn thịt gà đấy"];
//5. Bōnreisu
mobtalk[33][5][0]=["Cậu cũng sẽ trở thành như tớ",
"một ngày nào đó"];
mobtalk[33][5][1]=["Hãy tìm kiếm hạnh phúc khi còn sống.",
"Cậu có hạnh phúc không?"];
mobtalk[33][5][2]=["Có rất nhiều điều có thể làm",
"khi còn sống. Hãy sống sao cho",
"không hối tiếc"];
//6. Sky Eyes (Sukaiaizu)
mobtalk[33][6][0]=["Pip pip pip"];
mobtalk[33][6][1]=["Đối tượng cần chú ý.",
"Phát hiện bất thường. Pip pip pip"];
mobtalk[33][6][2]=["Đang bảo vệ"];
mobtalk[33][6][3]=["Đang tuần tra"];
mobtalk[33][6][4]=["Đừng so sánh tôi với",
"những con robot lỗi thời"];
//7. Burn Drake (Bānudoreiku)
mobtalk[33][7][0]=["GAOOOOOOOOOOOO"];
mobtalk[33][7][1]=["Bây giờ tớ không có tâm trạng",
"nói chuyện với cậu đâu"];
mobtalk[33][7][2]=["Tên tớ là Bānudoreiku,",
"tên hay phải không?"];
mobtalk[33][7][3]=["Tớ không thích nói chuyện",
"Nếu tớ nói chuyện thì trông tớ sẽ",
"yếu đuối phải không?"];
//8. Tôi là Mistera.
mobtalk[33][8][0]=["Có chuyện gì với Succubus à?",
"Cậu",
"không cần Succubus đâu"];
mobtalk[33][8][1]=["Gì cơ? Cậu cũng là Succubus à?",
"Tớ không nghĩ là vậy đâu"];
mobtalk[33][8][2]=["Cậu không cần phải nói chuyện với",
"Succubus đâu"];
mobtalk[33][8][3]=["Cậu muốn trở thành Succubus à?",
"Tớ không muốn cậu quan tâm",
"đến chuyện đó đâu"];
//9. Lumiera
mobtalk[33][9][0]=["Xin chào. Tớ là Lumiera.",
"Cậu đang chơi à?",
"Người chơi ở đây là tớ."];
mobtalk[33][9][1]=["Tớ vừa tìm được",
"một đối thủ chơi cùng",
"rất hợp ý."];
mobtalk[33][9][2]=["Cậu đang trêu chọc tớ à?",
"Bất cứ lúc nào cũng được chào đón."];
mobtalk[33][9][3]=["Cậu đến đây để thua à?",
"Bất cứ lúc nào cũng được chào đón."];
mobtalk[33][9][4]=["Tớ không có thời gian để",
"chơi với cậu đâu.",
"Cậu cũng hiểu mà, phải không?"];
//10. Valmeria
mobtalk[33][10][0]=["Tên tôi là Valmeria",
"Người phụ nữ quyến rũ nhất trong",
"số các succubus Tôi đã tìm thấy",
"đối thủ để chiến đấu rồi!"];
mobtalk[33][10][1]=["Làm sao cậu đến được đây nhỉ?",
"Cuối cùng thì đến lượt tôi rồi!",
"Cứ tấn công đi bất cứ lúc nào!"];
mobtalk[33][10][2]=["Cậu có thể đến bao nhiêu lần cũng được",
"Tôi luôn chào đón cậu",
"Nào, hãy chiến đấu thôi!"];












