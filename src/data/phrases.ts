import type { JapanesePhrase } from './types'

export const phrases: JapanesePhrase[] = [
  // 基本禮貌
  { id: 'p1', category: '基本禮貌', zh: '你好', ja: 'こんにちは', romaji: 'kon-ni-chi-wa', phonetic: '空你七哇', situation: '打招呼' },
  { id: 'p2', category: '基本禮貌', zh: '謝謝', ja: 'ありがとうございます', romaji: 'a-ri-ga-to-go-za-i-ma-su', phonetic: '阿里嘎多勾咋一媽斯', situation: '表達感謝時' },
  { id: 'p3', category: '基本禮貌', zh: '不好意思', ja: 'すみません', romaji: 'su-mi-ma-sen', phonetic: '思咪媽誰', situation: '呼叫服務員或道歉' },
  { id: 'p4', category: '基本禮貌', zh: '對不起', ja: 'ごめんなさい', romaji: 'go-men-na-sai', phonetic: '勾咩那賽', situation: '正式道歉時' },
  { id: 'p5', category: '基本禮貌', zh: '再見', ja: 'さようなら', romaji: 'sa-yo-na-ra', phonetic: '撒優那拉', situation: '道別時' },

  // 餐廳實用句
  { id: 'p6', category: '餐廳實用句', zh: '有兒童餐嗎？', ja: 'お子様メニューはありますか？', romaji: 'o-ko-sa-ma me-nyu wa a-ri-ma-su-ka', phonetic: '', situation: '進入餐廳或點餐時詢問' },
  { id: 'p7', category: '餐廳實用句', zh: '有兒童椅嗎？', ja: '子供用の椅子はありますか？', romaji: 'ko-do-mo-yo no i-su wa a-ri-ma-su-ka', phonetic: '', situation: '入座前詢問' },
  { id: 'p8', category: '餐廳實用句', zh: '這個多少錢？', ja: 'これはいくらですか？', romaji: 'ko-re wa i-ku-ra de-su-ka', phonetic: '', situation: '菜單無標價或購物時詢問' },
  { id: 'p9', category: '餐廳實用句', zh: '可以刷卡嗎？', ja: 'カードは使えますか？', romaji: 'ka-do wa tsu-ka-e-ma-su-ka', phonetic: '', situation: '結帳前確認付款方式' },
  { id: 'p10', category: '餐廳實用句', zh: '謝謝款待', ja: 'ごちそうさまでした', romaji: 'go-chi-so-sa-ma-de-shi-ta', phonetic: '', situation: '用餐完畢離開餐廳時' },

  // 購物實用句
  { id: 'p11', category: '購物實用句', zh: '可以免稅嗎？', ja: '免税できますか？', romaji: 'men-zei de-ki-ma-su-ka', phonetic: '', situation: '結帳前出示護照詢問' },
  { id: 'p12', category: '購物實用句', zh: '有更便宜的嗎？', ja: 'もっと安いのはありますか？', romaji: 'mo-tto ya-su-i no wa a-ri-ma-su-ka', phonetic: '', situation: '想要找其他價位商品時' },
  { id: 'p13', category: '購物實用句', zh: '請給我袋子', ja: '袋をください', romaji: 'fu-ku-ro wo ku-da-sai', phonetic: '', situation: '需要購物袋時' },

  // 加油站實用句
  { id: 'p14', category: '加油站實用句', zh: '加滿，普通汽油', ja: 'レギュラー、満タンでお願いします', romaji: 're-gyu-ra, man-tan de o-ne-ga-i-shi-ma-su', phonetic: '', situation: '在人工加油站加油時' },
  { id: 'p15', category: '加油站實用句', zh: '自助加油', ja: 'セルフ', romaji: 'se-ru-fu', phonetic: '', situation: '確認加油站類型或尋找加油機' },

  // 緊急狀況
  { id: 'p16', category: '緊急狀況', zh: '請幫忙', ja: '助けてください', romaji: 'ta-su-ke-te ku-da-sai', phonetic: '', situation: '遇到危險或需要協助時' },
  { id: 'p17', category: '緊急狀況', zh: '請叫救護車', ja: '救急車を呼んでください', romaji: 'kyu-kyu-sha wo yon-de ku-da-sai', phonetic: '', situation: '有人受傷或急病時' },
  { id: 'p18', category: '緊急狀況', zh: '請叫警察', ja: '警察を呼んでください', romaji: 'kei-sa-tsu wo yon-de ku-da-sai', phonetic: '', situation: '發生事故或遇到危險時' },
  { id: 'p19', category: '緊急狀況', zh: '廁所在哪裡？', ja: 'トイレはどこですか？', romaji: 'to-i-re wa do-ko de-su-ka', phonetic: '', situation: '需要找廁所時' },
  { id: 'p20', category: '緊急狀況', zh: '有哺乳室嗎？', ja: '授乳室はありますか？', romaji: 'ju-nyu-shi-tsu wa a-ri-ma-su-ka', phonetic: '', situation: '需要哺乳或換尿布時' }
]
