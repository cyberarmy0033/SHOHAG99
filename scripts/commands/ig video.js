/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢••🌼 𝐚𝐛𝐨𝐮𝐭 𝐭𝐡𝐢𝐬 𝐥𝐢𝐧𝐞,🙂🌿\n\n__🖤🦋দিন শেষে সূর্যটাও বুঝিয়ে দেয় সময় শেষ হলে স্থাঁন পরিবর্তন হয়..!!🥰💫🌼🦋\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n\n✢━━━━━━━━━━━━━━━✢༉༎🧸🍒𝗬𝗼𝘂 𝗺𝘂𝘀𝘁 𝗯𝗲 𝗹𝗶𝗸𝗲 𝘁𝗵𝗲 90𝘀 𝗶𝗻 𝘁𝗵𝗲 𝗰𝗿𝗼𝘄𝗱 𝗼𝗳 𝘁𝗵𝗶𝘂𝘀𝗮𝗻𝗱𝘀 𝗼𝗳 𝗽𝗲𝗼𝗽𝗹𝗲 𝘄𝗵𝗼 𝘄𝗶𝗹𝗹 𝗸𝗲𝗲𝗽 𝗮𝗻 𝗲𝘆𝗲 𝗼𝗻 𝗺𝗲-)🩷🍒🐼✨🌈-!!\n\n_>!!..🖤🔐😽'তুমি'টা হতে হবে নব্বই দশকের মতো হাজার মানুষের ভিড়ে যার নজর থাকবে আমার দিকে>-/🙃🦋\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n\n✢━━━━━━━━━━━━━━━✢🪄!< 𝘿𝙤𝙣'𝙩 💝𝘽𝙚𝙇𝙡𝙚𝙫𝙀🌈🌠𝙞𝙉 𝙏𝙚𝙈𝙥𝙤𝙧𝘼𝙧𝙔 𝙏𝙝𝙄𝙣𝙂𝙨<\n\n_সম্পর্কটা কিছুদিনের হলেও🐰🍒\n\n_তাকে ছাড়া প্রতিটা মুহূর্ত খুব শূন্য লাগে! >)🌧️🖤-••🦋🌼\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n\n✢━━━━━━━━━━━━━━━✢🦋🤍 𝐀𝐠𝐞 𝐰𝐢𝐥𝐥 𝐢𝐧𝐜𝐫𝐞𝐚𝐬𝐞, 𝐭𝐡𝐞 𝐥𝐢𝐬𝐭 𝐨𝐟 𝐥𝐨𝐬𝐢𝐧𝐠 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐥𝐨𝐧𝐠, 𝐭𝐡𝐨𝐬𝐞 𝐰𝐢𝐭𝐡 𝐰𝐡𝐨𝐦 𝐭𝐡𝐞𝐲 𝐰𝐞𝐫𝐞 𝐬𝐮𝐩𝐩𝐨𝐬𝐞𝐝 𝐭𝐨 𝐛𝐞 𝐰𝐢𝐥𝐥 𝐚𝐥𝐬𝐨 𝐛𝐞 𝐥𝐨𝐬𝐭.....🖤🌸✨\n\n🌊💚☔বয়স বাড়বে, হারানোর তালিকা দীর্ঘ হবে, যাদের সাথে থাকার কথা ছিলো তারাও হারিয়ে যাবে,\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n✢━━━━━━━━━━━━━━━✢𝗧𝗵𝗲 𝗴𝗲𝗻𝘁𝗹𝗲 𝘀𝗰𝗲𝗻𝘁 𝗼𝗳 𝗺𝗼𝘁𝗵𝗲𝗿𝘀 𝗳𝗿𝗶𝗻𝗴𝗲 𝗕𝗲𝗮𝘁𝘀 𝘁𝗵𝗼𝘂𝘀𝗮𝗻𝗱𝘀 𝗼𝗳 𝗽𝗲𝗿𝗳𝘂𝗺𝗲𝘀-!!🙂💖🍒\n\n༎彡🔐✨🍓মায়ের আচঁলের স্নিগ্ধ ঘ্রান\n\n হাজারো পারফিউমকেও হার মানায়-!!😻💘\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢🐰💚𝗜𝗻 𝘁𝗵𝗶𝘀 𝗖𝗶𝘁𝘆 𝗣𝗲𝗼𝗽𝗹𝗲 𝗗𝗼𝗻𝘁💜🍬 \n___🖇️𝗨𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱 𝗘𝗺𝗼𝘁𝗶𝗼𝗻𝘀🐲𝗧𝗵𝗲𝘆 𝗢𝗡𝗹𝘆 𝗹𝗼𝗼𝗸 𝗳𝗼𝗿 𝗕𝗲𝗮𝘂𝘁𝘆:-)🌼🍒✨\n\n🐹-!<—এই শহরে মানুষ গুলো আবেগ বুঝেনা খোঁজে শুধু সৌন্দর্য.!:>3💜🐰🥺\n\n\n༊_۵༎-𝐂-𝐄-𝐎 🩷⃝✨ [𝐒𝐄𝐘𝐀𝐌]🌼\n\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝..🤍🌸\n– 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥…🥺 .💥🐰🙂\n\n—সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎ —থাক না কিছুটা ব্যক্তিগত-:)🦋🥺\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n✢━━━━━━━━━━━━━━━✢-𝙒𝙞𝙨𝙝𝙚𝙨 𝙩𝙝𝙖𝙩 𝙘𝙖𝙣 𝙣𝙚𝙫𝙚𝙧 𝙗𝙚 𝙛𝙪𝙡𝙛𝙞𝙡𝙡𝙚𝙙 𝙏𝙝𝙚 𝙢𝙞𝙣𝙙 𝙞𝙨 𝙖𝙡𝙬𝙖𝙮𝙨 𝙤𝙣 𝙩𝙝𝙖𝙩.🙂🧡✨\n\n🐰!<— ❝“যে ইচ্ছেগুলো কখনোই পূরন হবার নামনটা সবসময় সেটা নিয়েই পড়ে থাকে” ❞ -!!-) 🙃🥀🌻\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n\n✢━━━━━━━━━━━━━━━✢🌼💛- 𝙏𝙝𝙚 𝙢𝙤𝙧𝙚 𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡 𝙩𝙝𝙚 𝙩𝙝𝙤𝙪𝙜𝙝𝙩𝙨. 𝙏𝙝𝙚 𝙢𝙤𝙧𝙚 𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡 𝙩𝙝𝙚 𝙥𝙚𝙤𝙥𝙡𝙚----💟💙\n\n- 🦋“যার ভাবনা যত সুন্দর; সে মানুষ হিসেবে তত বেশী  সুন্দর”😻🌼💚\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n✢━━━━━━━━━━━━━━━✢😽🐰🌼-𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞..!-🌸🖇️🍒\n\n♥︎╣[-🙂-]╠♥︎🌦️🐰🍭🍒𝙞 𝙬𝙖𝙣𝙩 𝙮𝙤𝙪 𝙛𝙤𝙧 𝙖 𝙬𝙝𝙞𝙡𝙚 𝙉𝙤𝙩 𝙛𝙤𝙧 𝙡𝙞𝙛𝙚—🐰✨-!<🌸🍓🌈🖇️-\n\n__ আমি তোমাকে চাই ক্ষনিকের জন্য নয় সারা জীবনের জন্য.🙂🌺🌼🌺__🐰✨\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢__𝐎𝐧𝐞 𝐬𝐢𝐝𝐞𝐝 𝐥𝐨𝐯𝐞 𝐢𝐬 𝐭𝐡𝐞 𝐦𝐨𝐬𝐭 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐰𝐨𝐫𝐥𝐝!’🖇️🔐💜-!!<“)333\n\n🦋😊🥀:!”একতরফা ভালোবাসা পৃথিবীর সবচেয়ে সুন্দর অনুভূতি,!”)💔🦋🖇️🌈🍒-!!’~``\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢🦋🍒 𝑻𝒉𝒊𝒔 𝑨𝒃𝒐𝒖𝒕 𝑳𝒊𝒏𝒆 ~••🌋\n\n\n__۵ღ❥ ︵💚\n✨🤍🍒আবেগ শূন্য নগরীতে নিঃশ্বাস ফেলতে এসো না.!🖤🦋\n✨💙🍒দীর্ঘশ্বাস তোমায় ঘিরে ফেলবে.!🙂💚\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢🦋🍒 𝑻𝒉𝒊𝒔 𝑨𝒃𝒐𝒖𝒕 𝑳𝒊𝒏𝒆 ~••🌋\n\n__۵ღ❥ ︵💚\n✨🤍মরার ঘুমের জন্য .!🤨🦋\n\n✨💙🍒রাত জেগে প্রেম করতে পারছি না.! 🍒🤧🩷\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢😌-“🐰♡︎𝗕𝗲✨🍥𝗠𝗶𝗻𝗲-!<😻🍭\n-!🧚‍♀️𝗜🐼-𝗪𝗶𝗹𝗹✨🍒𝗸𝗲𝗲𝗽😽𝘆𝗼𝘂-🧸💜-𝗙𝗼𝗿𝗲𝘃𝗲𝗿:)🌈\n\n🍒তুমি আমার সাধ্যের বাহিরে চাওয়া এক সুন্দর মানুষ..!>33🦋🌼🥺\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢_𝗧𝗿𝘂𝘀𝘁 M𝗲 🦋🌼- 𝗜 𝗮𝗹𝘄𝗮𝘆𝘀 𝗯𝗲𝗹𝗶𝗲𝘃𝗲 𝘁𝗵𝗮𝘁)🦋👀\n\n__!!>☁️✨🌻--ভালোবাসি বলেই কি পেতে হবে,,!!🥀\n\n--থাকুক না কিছু ভালোবাসা অপূর্ণ..!!🖤💜🙂\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝[𝐒𝐄𝐘𝐀𝐌]🌼\n\n✢━━━━━━━━━━━━━━━✢","「  === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===❕✨💫\n\n\n--❖🅂🄴🅈🄰🄼-🄱🄾🅃(✷‿✷)\n\n--❖--🤍👀(✷‿✷) 😽🌈🫧\n\n✢━━━━━━━━━━━━━━━✢💫 ✨— 🐼🍒🧸𝗸𝗮𝗯𝗵𝗶 𝘀𝘂𝗻 𝘁𝗼𝗵 𝘇𝗮𝗿𝗮,𝗷𝗼 𝗺𝗮𝗶𝗻 𝗸𝗵𝗲𝗻𝗮 𝘀𝗮𝗸𝗮,🤵 _•🐹🍓💭\n\n—! 𝗺𝗲𝗿𝗶 𝗱𝘂𝗻𝗶𝘆𝗮 𝘁𝘂𝗺𝗵𝗶 𝗵𝗼,, 𝘁𝘂𝗺𝗵𝗶 𝗮𝘀𝗿𝗮𝗮..😌💖\n𝙞 𝙬𝙖𝙣𝙩 𝙮𝙤𝙪 𝙞𝙣 𝙩𝙝𝙚 𝙚𝙣𝙙✨🍒🌈-!!\n\n\n༊_۵༎-𝐂-𝐄-𝐎🩷⃝✨[𝐒𝐄𝐘𝐀𝐌]🌼\n\n✢━━━━━━━━━━━━━━━✢"];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/HicZwwA.mp4",
"https://i.imgur.com/xFrXAvd.mp4",
"https://i.imgur.com/2gsrdtE.mp4",
"https://i.imgur.com/bBE4sie.mp4",
"https://i.imgur.com/q3rs9Kt.mp4",
"https://i.imgur.com/aTgKzEy.mp4",
"https://i.imgur.com/8azruKH.mp4",
"https://i.imgur.com/S5UOlqE.mp4",
"https://i.imgur.com/upza1DI.mp4",
"https://i.imgur.com/HicZwwA.mp4",
"https://i.imgur.com/xFrXAvd.mp4",
"https://i.imgur.com/2gsrdtE.mp4",
"https://i.imgur.com/2gsrdtE.mp4",
"https://i.imgur.com/2gsrdtE.mp4",
"https://i.imgur.com/2gsrdtE.mp4",
  ];
    
  
  var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };
