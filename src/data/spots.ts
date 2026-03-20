import type { DayMeta, Spot } from './types'

export const dayMetas: DayMeta[] = [
  {
    id: 'day1',
    date: '5/8',
    weekday: '週四',
    title: '抵達 → 取車 → ANA萬座',
    theme: '悠閒適應日（不安排景點，專注適應環境與右駕）',
    totalDriveTime: '70–90 分鐘（那霸→恩納村）'
  },
  {
    id: 'day2',
    date: '5/9',
    weekday: '週五',
    title: '水族館 → 古宇利島',
    theme: '北部精華日（最長車程日）',
    totalDriveTime: '約 120 分鐘（分段）'
  },
  {
    id: 'day3',
    date: '5/10',
    weekday: '週六',
    title: '兒童王國 → 還車 → 那霸',
    theme: '中部體驗 + 物流轉換日',
    totalDriveTime: '約 60 分鐘（分段）'
  },
  {
    id: 'day4',
    date: '5/11',
    weekday: '週日',
    title: '首里城 → 國際通 → 回程',
    theme: '文化巡禮 + 採買 + 回程（無車日）',
    details: '三種路線方案比較：最省力（全計程車，推薦）、最省時（電車+巴士）、最經濟（電車+步行）'
  }
]

export const spots: Spot[] = [
  // ─── Day 1: 5/8 (Thu) ───

  /**
   * 站點 1：OTS 臨空豐崎營業所（取車）
   */
  {
    id: 'day1-spot1',
    dayId: 'day1',
    order: 1,
    time: '抵達後',
    name: 'OTS 臨空豐崎營業所（取車）',
    mapCode: '232 544 452',
    googleMapsUrl: 'https://maps.app.goo.gl/OTS_Tomishiro',
    driving: {
      duration: 10,
      distance: 0,
      note: '接駁巴士在國內線航廈外 → 約 10 分鐘車程到營業所'
    },
    quickTips: [
      '取車當下檢查：車輛外觀拍照存證、油量確認滿格、測試車內設備(導航/冷氣/燈光)',
      '安全座椅：讓小羊實際試坐，確認搖晃<2.5cm、肩帶高度正確',
      '強烈建議租用 ETC 卡，上下高速公路可走專用道免找零錢',
      'OTS 會附贈優惠券本（價值 ¥5,000+），務必隨身攜帶'
    ],
    warnings: [
      '安全座椅：取車時務必確認型號匹配小羊體重/身高',
      '最危險時刻：停車場出場轉入道路（直覺性右轉進入對向車道）',
      '方向燈在右手邊（左手邊是雨刷），初期容易誤觸',
      '右駕適應期：前 30 分鐘最緊張，副駕請於每次轉彎提醒「靠左」'
    ],
    details: '請在停車場內先「試駕 5 分鐘」確認穩定性再上路。確認保險檔案拍照存手機。',
    insiderTips: [
      '取車時可先領取或購買景點優惠門票',
      '利用剛上車的適應期熟悉導航機操作並輸入 Map Code'
    ]
  },

  /**
   * 站點 2：伊芸 SA（服務區）
   */
  {
    id: 'day1-spot2',
    dayId: 'day1',
    order: 2,
    time: '前往飯店途中',
    name: '伊芸 SA（服務區，條件停靠）',
    mapCode: '206 130 182',
    googleMapsUrl: null,
    driving: {
      duration: 40,
      distance: 30, // 概約數字
      note: '路線：OTS營業所 → 國道331號 → 那霸西道路 → 高速（那霸IC→石川IC）'
    },
    parking: {
      name: '伊芸停車場',
      fee: '免費',
      strollerFriendly: true
    },
    facilities: {
      nursingRoom: false,
      diaperChange: true,
      playArea: false
    },
    quickTips: [
      '條件停靠：小羊醒著且躁動 → 停 10 分鐘放風+上廁所',
      '條件停靠：小羊已入睡 → 跳過，直接開到飯店（剩下的車程約 30 分鐘）'
    ],
    warnings: [
      '注意高速公路速限，一般為 80km/h'
    ],
    details: '服務區有換尿布台（男女廁皆有）、自動販賣機、展望台，可作短暫休息。',
    insiderTips: [
      '可以買點在地小零食讓孩子在後座解解饞'
    ]
  },

  /**
   * 站點 3：ANA萬座海濱度假酒店
   */
  {
    id: 'day1-spot3',
    dayId: 'day1',
    order: 3,
    time: '15:00',
    name: 'ANA萬座海濱度假酒店（Check-in）',
    mapCode: '206 312 860',
    googleMapsUrl: 'https://maps.app.goo.gl/ANAManza',
    driving: {
      duration: 30,
      distance: 20, // 概約數字
      note: '從石川IC下交流道 → 國道58號 → 抵達萬座'
    },
    parking: {
      name: '飯店平面停車場',
      fee: '¥1,000/晚（部分房型免費）',
      strollerFriendly: true
    },
    facilities: {
      nursingRoom: true,
      diaperChange: true,
      playArea: true
    },
    quickTips: [
      '下午 15:00 Check-in',
      '飯店有專屬私人海灘與泳池，可讓小羊放電'
    ],
    warnings: [
      '前往飯店的國道58號可能有彎道，注意小羊是否會暈車'
    ],
    details: '如果走國道58號不走高速，時間會多20分鐘但路線較簡單。',
    dining: [
      {
        name: '飯店內餐廳「阿檀」自助餐',
        recommendation: '兒童友善，建議提前預約',
        childFriendly: true
      },
      {
        name: '恩納村「浜屋そば」',
        recommendation: '可開車前往品嘗沖繩麵',
        childFriendly: true
      }
    ],
    insiderTips: [
      '每日 15:00-16:00 海灘生物觀察會（免費，需於 14:30 前至海灘活動中心登記）',
      '泳池畔免費冰棒時間 14:00-15:00（5-9月，每家庭 2 支，先到先得）',
      '兒童遊戲室避開人潮：08:00-09:00 或 13:00-15:00 幾乎包場',
      '家族風呂（私人湯屋）需預約，約 ¥3,000/45min'
    ],
    backupPlan: '若天氣不佳，可使用飯店內的兒童遊戲室或預約家族風呂泡湯'
  },

  // ─── Day 2: 5/9 (Fri) ───

  /**
   * 站點 1：道の駅許田
   */
  {
    id: 'day2-spot1',
    dayId: 'day2',
    order: 1,
    time: '早上出發後',
    name: '道の駅許田（中途休息 + 買門票）',
    mapCode: '206 476 710',
    googleMapsUrl: 'https://maps.app.goo.gl/MichiNoEkiKyoda',
    driving: {
      duration: 30,
      distance: 25,
      note: '高速（石川IC→許田IC）約 30 分鐘 / 國道58號約 50 分鐘'
    },
    parking: {
      name: '休息站免費停車場',
      fee: '免費',
      strollerFriendly: true
    },
    facilities: {
      nursingRoom: false,
      diaperChange: true,
      playArea: false
    },
    quickTips: [
      '水族館門票務必在此購入較便宜（大人 ¥1,880 vs 現場 ¥2,180）',
      '適合讓小羊短暫放風、上廁所與購買零食補給'
    ],
    warnings: [
      '58號國道北部有彎道段，小羊容易暈車。車上務必備妥嘔吐袋與毛巾'
    ],
    details: '塞車替代路線：若石川IC高速車速<40km/h → 下交流道改走58號國道。若需其他選擇，「道の駅かでな」可看飛機起降。',
    insiderTips: [
      '這裡的折扣票券和名產選擇非常多，千萬別錯過購票優惠'
    ]
  },

  /**
   * 站點 2：美麗海水族館
   */
  {
    id: 'day2-spot2',
    dayId: 'day2',
    order: 2,
    time: '上午（08:30-14:00）',
    name: '美麗海水族館',
    mapCode: '553 075 797',
    googleMapsUrl: 'https://maps.app.goo.gl/Churaumi',
    driving: {
      duration: 30,
      distance: 20,
      note: '國道449號＋縣道114號，約 30 分鐘'
    },
    parking: {
      name: 'P7 立體停車場',
      fee: '免費',
      strollerFriendly: true
    },
    facilities: {
      nursingRoom: true, 
      diaperChange: true, 
      playArea: true 
    },
    admission: {
      fee: '大人 ¥2,180 (預售 ¥1,880) / 未滿 6 歲免費',
      advanceTicketAvailable: true
    },
    quickTips: [
      '黑潮之海大水槽位於 B1，絕對必看',
      '海豚表演：11:00 / 13:00 / 15:00（海洋博公園內免費）',
      '黑潮之海餵食秀：09:30 / 15:00',
      '入口處有免費推車可借，但建議自己帶較熟悉'
    ],
    warnings: [
      '不要停 P1（南門遠，要走很長下坡再上坡），改停 P7'
    ],
    leaveBy: {
      time: '14:00',
      reason: '確保古宇利島有足夠的遊玩時間與天黑前抵達飯店'
    },
    details: '園區有室外與室內區域，餵食秀時請提前 15 分鐘到「海洋劇場前排」卡位。',
    dining: [
      {
        name: 'Ocean Blue (館內)',
        recommendation: '可邊看水槽邊吃飯，提供兒童餐',
        childFriendly: true
      },
      {
        name: 'イノー (館內海景餐廳)',
        recommendation: '有兒童餐/兒童椅',
        childFriendly: true
      }
    ],
    insiderTips: [
      '停車場秘密：P7 北口停車場較少人(推車友善)；P9 員工停車場極少人(走8分)；絕對避開 P1 爆滿區',
      '避開一樓正面！欣賞黑潮之海的最佳位置：B1 仰視區（人最少最震撼）或海洋劇場座位區',
      '如果早起，08:30-09:30 人潮極少，是觀賞大水槽的最佳黃金時刻'
    ],
    crowdAvoidance: '08:30-09:30 極少人（最佳！）；10:30-14:00 爆滿（旅行團高峰，避開！）；16:00 後較清幽',
    backupPlan: '水族館多為室內，雨天可照常參觀，可延長停留時間'
  },

  /**
   * 站點 3：古宇利島
   */
  {
    id: 'day2-spot3',
    dayId: 'day2',
    order: 3,
    time: '14:30 - 15:30',
    name: '古宇利島',
    mapCode: '485 662 831',
    googleMapsUrl: 'https://maps.app.goo.gl/KouriIsland',
    driving: {
      duration: 35,
      distance: 25,
      note: '水族館出發約 35 分鐘。回程往萬座需 60-70 分鐘(走高速)。18:00前結束所有駕車'
    },
    parking: {
      name: '橋頭/沙灘旁收費停車',
      fee: '¥300-500',
      strollerFriendly: false 
    },
    facilities: {
      nursingRoom: false,
      diaperChange: false,
      playArea: true 
    },
    quickTips: [
      '開過全長 1,960m 的古宇利大橋本身就是絕佳體驗',
      '橋頭下方的古宇利沙灘可讓小羊踩水玩沙（注意推車無法推上沙灘）',
      '不建議去「心形岩」：需走8分鐘陡坡碎石路，推車無法通行，來回逾30分鐘。視大人體力而定',
      '可以跳過¥800的「古宇利海洋塔」，多花時間體驗免費海灘'
    ],
    warnings: [
      '在海邊注意防曬與補充水分，若無設施需自備遮陽帳篷',
      '海灘推車行動不便，請準備背巾或輪流抱小孩',
      '新手右駕＋天黑＝高風險，務必確保 18:00 前結束所有駕車'
    ],
    leaveBy: {
      time: '15:30',
      reason: '確保天亮前能回到萬座飯店，避免夜間駕駛'
    },
    details: '回程日落時間約 19:05。晚餐可選擇島上的 L LOTA 或是回恩納村就餐。',
    dining: [
      {
        name: 'L LOTA (古宇利島上)',
        recommendation: '景觀優美',
        childFriendly: true
      }
    ],
    insiderTips: [
      '秘密沙灘 — ティーヌ浜（愛心石海灘）：位於島北側，距大橋 5 分鐘車程，免費停車(約20位)，人極少水極淺',
      '若古宇利沙灘人多，可往「右側岩石區」走 5 分鐘，有天然小水池水淺且有遮陽'
    ],
    crowdAvoidance: '轉往秘密沙灘（ティーヌ浜）或古宇利海灘右側岩石區即可避開大部分人潮',
    backupPlan: '若遇雨天，取消古宇利島，改往「名護 AEON 購物中心」血拼'
  },

  // ─── Day 3: 5/10 (Sat) ───

  /**
   * 站點 1：沖繩兒童王國（沖縄こどもの国）
   */
  {
    id: 'day3-spot1',
    dayId: 'day3',
    order: 1,
    time: '上午（90–120 分鐘）',
    name: '沖繩兒童王國（沖縄こどもの国）',
    mapCode: '033 561 844',
    googleMapsUrl: 'https://maps.app.goo.gl/KodomoNoKuni',
    driving: {
      duration: 25,
      distance: 15,
      note: '萬座→兒童王國：國道58號南下→縣道85號，約 25 分鐘'
    },
    parking: {
      name: '園區停車場',
      fee: '免費',
      strollerFriendly: true
    },
    facilities: {
      nursingRoom: true, // 園內服務中心
      diaperChange: true, // 各廁所
      playArea: true
    },
    admission: {
      fee: '大人 ¥500，4歲以上 ¥200，未滿4歲免費'
    },
    quickTips: [
      '建議路線：先逛動物園（較涼爽）→ 再玩遊樂設施 → 最後兒童中心（室內休息）',
      '觸摸區：可以摸天竺鼠、兔子、小雞（小羊最愛）',
      'Wonder Museum 內有室內互動展覽，也適合雨天'
    ],
    warnings: [
      '園區內部分區域有坡道，推車會較為耗體力'
    ],
    leaveBy: {
      time: '12:00',
      reason: '留充裕時間給下個行程 AEON 購物與還車'
    },
    details: '夏季開放戲水池，若有需求可攜帶更換衣物。',
    insiderTips: [
      '動物園內多數設施為戶外，請做好防曬與水分補充'
    ],
    backupPlan: '若遇雨天取消兒童王國，改為「沖繩縣立博物館・美術館」或「永旺全日活動」'
  },

  /**
   * 站點 2：AEON Mall Okinawa Rycom
   */
  {
    id: 'day3-spot2',
    dayId: 'day3',
    order: 2,
    time: '12:00 - 14:30',
    name: 'AEON Mall Okinawa Rycom',
    mapCode: '033 530 406',
    googleMapsUrl: 'https://maps.app.goo.gl/AEONRycom',
    driving: {
      duration: 10,
      distance: 5,
      note: '兒童王國→AEON 約 10 分鐘'
    },
    parking: {
      name: '巨大立體停車場',
      fee: '免費',
      strollerFriendly: true
    },
    facilities: {
      nursingRoom: true, 
      diaperChange: true,
      playArea: true
    },
    quickTips: [
      '滿 ¥5,000 可免稅（結帳時出示護照），藥妝、土產、零食可在此一次買齊',
      '3F 有免費兒童遊戲區（10:00-21:00），家長可輪流購物與休息',
      '購物前務必設定鬧鐘 15:30 提醒準備離開'
    ],
    warnings: [
      '停車場非常大！一定要拍照記住樓層和區域編號，避免找不到車'
    ],
    leaveBy: {
      time: '14:30',
      reason: '預留足夠時間到那霸飯店卸貨及 OTS 準時還車'
    },
    details: '各樓層設有設備極好的「赤ちゃんルーム」（含微波爐、熱水器、洗手台）。',
    dining: [
      {
        name: '3F 美食街',
        recommendation: '兒童餐選擇非常多',
        childFriendly: true
      }
    ],
    insiderTips: [
      '超市半價時段：若晚間來訪(20:30後)，熟食區會貼「半額」貼紙，品質不變'
    ]
  },

  /**
   * 站點 3：那霸國際通飯店（待確認）
   */
  {
    id: 'day3-spot3',
    dayId: 'day3',
    order: 3,
    time: '15:00 - 15:30',
    name: '那霸國際通飯店（待確認）',
    googleMapsUrl: null,
    driving: {
      duration: 40,
      distance: 20,
      note: 'AEON→那霸飯店：高速（北中城IC→那霸IC）。注意：週六下午市區易塞車，應多留 20 分鐘緩衝'
    },
    quickTips: [
      '羊爸把所有行李卸下搬到大廳/房間',
      '確認羊媽和小羊都安頓完畢後，羊爸獨自開車離開前往 OTS 還車'
    ],
    warnings: [
      '羊媽獨自帶兩隻小羊時，務必確認飯店有電梯、行李已全部搬進房間再讓羊爸離開'
    ],
    details: '抵達飯店約 15:00。安頓好大約 15:30，請羊爸不要耽誤，儘速出發還車。'
  },

  /**
   * 站點 4：加油 + OTS 歌町還車
   */
  {
    id: 'day3-spot4',
    dayId: 'day3',
    order: 4,
    time: '16:00 - 17:00',
    name: '加油 + OTS 歌町還車',
    driving: {
      duration: 20,
      distance: 5,
      note: '那霸飯店→OTS 歌町：約 20 分鐘'
    },
    quickTips: [
      '加油日文：「レギュラー、満タンでお願いします」(re-gyu-ra, man-tan de o-ne-ga-i-shi-ma-su)',
      '還車前須加滿油，OTS 附近有 ENEOS 加油站',
      '請在出發前事先確認油箱蓋開關在哪（通常在駕駛座左下方）'
    ],
    warnings: [
      '日本加油站多為自助式（セルフ），記得選「レギュラー」（Regular 紅色）',
      '若可能錯過還車時間，請立即致電 OTS 0120-34-3732（通常晚 30 分鐘內不加收）'
    ],
    leaveBy: {
      time: '17:00',
      reason: 'OTS 營業時間內完成還車（預留 1 小時緩衝）'
    },
    details: '【還車 SOP】\n' +
      '還車前：加滿油、清理車內垃圾、檢查行李/手機/護照有無遺留。\n' +
      '還車流程：交還鑰匙 → 檢查車輛外觀與油表 → 完成。\n\n' +
      '【還車後交通決策樹】\n' +
      '🏆 首選：請 OTS 櫃檯叫計程車（約 ¥1,500-2,000，10-15 分鐘直達）→ 孩子累了/行李多，花 ¥1,000 換全家舒適非常值得\n' +
      '次選：使用 GO App 叫車（有中文介面，信用卡綁定免付現）\n' +
      '備選：單軌電車 歌町站→牧志站（兩人共 ¥540，約 30 分鐘）→ 務必找電梯，搭最後一節車廂\n' +
      '❌ 絕對不推薦步行（傍晚+行李+幼童=災難）'
  },

  // ─── Day 4: 5/11 (Sun) ───

  /**
   * 站點 1：首里城公園
   */
  {
    id: 'day4-spot1',
    dayId: 'day4',
    order: 1,
    time: '09:00 - 12:00',
    name: '首里城公園',
    mapCode: '033 161 526',
    googleMapsUrl: 'https://maps.app.goo.gl/ShuriCastle',
    facilities: {
      nursingRoom: true, 
      diaperChange: true 
    },
    admission: {
      fee: '大人 ¥400，未滿6歲免費'
    },
    quickTips: [
      '【交通決策樹】\n🏆 預算充足 或 飯店代叫 / Go App → 計程車直達守禮門前（¥1,800-2,200，最輕鬆）\n' +
      '省錢方案 → 搭單軌至首里站 → 轉乘免費紅色接駁小巴（每 15-20 分班，首里站 2 號出口）',
      '09:00 前抵達避開人潮（10:00 後旅行團湧入）',
      '回程：可散步步行下坡至首里站，輕鬆且沿途有金城町石疊道'
    ],
    warnings: [
      '去程絕對避免步行上坡（石疊道 + 推車 + 小羊 = 災難）',
      '園區內部分石疊道路段推車會有些顛簸'
    ],
    leaveBy: {
      time: '12:00',
      reason: '視航班調整時間，預留時間前往國際通午餐'
    },
    details: '預計停留 60-90 分鐘。如無法推車，可帶背巾。',
    crowdAvoidance: '09:00 以前到訪避開旅行團。',
    backupPlan: '若天氣不佳，首里城有室內展區，可撐傘參觀外圍'
  },

  /**
   * 站點 2：國際通
   */
  {
    id: 'day4-spot2',
    dayId: 'day4',
    order: 2,
    time: '12:00 - 14:00',
    name: '國際通',
    facilities: {
      nursingRoom: true, // 假設有百貨可哺乳
      diaperChange: true
    },
    quickTips: [
      '購物出示護照單店滿 ¥5,000 可享免稅',
      '活用 OTS 贈送的優惠券本（餐廳/購物皆可打 85-95 折）'
    ],
    warnings: [
      '嬰兒推車在國際通人潮中不太好推（尤其週日部分路段封街時）'
    ],
    details: '伴手禮採買推薦：御菓子御殿（紅芋塔）、塩屋（雪塩）、Don Quijote 國際通店。',
    dining: [
      {
        name: '花笠食堂 / 琉球茶房',
        recommendation: '沖繩家庭料理，兩家皆對兒童友善',
        childFriendly: true
      },
      {
        name: 'Jack\'s Steak House',
        recommendation: '牛排館，提供兒童餐',
        childFriendly: true
      },
      {
        name: '第一牧志公設市場',
        recommendation: '2F 食堂海鮮新鮮',
        childFriendly: true
      }
    ],
    backupPlan: '雨天替代：「牧志公設市場」「RYUBO 百貨」（純室內）'
  },

  /**
   * 站點 3：波上宮 + 波之上海灘（選配）
   */
  {
    id: 'day4-spot3',
    dayId: 'day4',
    order: 3,
    time: '視體力與時間',
    name: '波上宮 + 波之上海灘（選配）',
    quickTips: [
      '選配行程，視體力決定。若孩子前 3 天已經很累，果斷取消！',
      '體力 OK 的話：從國際通搭計程車前往約 ¥1,000（10 分鐘）'
    ],
    warnings: [
      '波之上海灘無救生員，務必看緊孩子，只能玩沙踩水不下水'
    ],
    leaveBy: {
      time: '約 14:30',
      reason: '確保盡快返回飯店休息'
    },
    details: '波上宮是沖繩最古老神社，參拜約 15 分鐘；海灘是那霸市區唯一海灘，可小玩沙。',
    backupPlan: '若體力不足/天氣差 → 跳過，在國際通慢逛或回飯店休息'
  },

  /**
   * 站點 4：機場
   */
  {
    id: 'day4-spot4',
    dayId: 'day4',
    order: 4,
    time: '航班起飛前',
    name: '機場',
    driving: {
      duration: 20,
      distance: 5,
      note: '計程車從國際通到機場約 ¥1,500-2,000，或車程約 15 分鐘的單軌電車 (¥300)'
    },
    facilities: {
      nursingRoom: true, 
      diaperChange: true 
    },
    quickTips: [
      '機場哺乳室位置：國內線 2F / 國際線 3F',
      '請保留足夠體力與時間，慢慢移動到機場'
    ],
    details: '注意：國際線班機請提前 2 小時抵達，國內線提前 1-1.5 小時到達。',
    warnings: [
      '請確認隨身物品、護照皆已帶齊！'
    ]
  }
]
