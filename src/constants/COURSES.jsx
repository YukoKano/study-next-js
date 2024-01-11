export const COURSES = [
  {
    label: "前菜",
    course: "appetizer",
    items: [
      {
        name: "サーモンのカルパッチョ",
        value: "salmonCarappcio",
      },
      {
        name: "きのこのマスタードマリネ",
        value: "mustardMarinatedMushrooms",
      },
      {
        name: "チーズとアボカドのピンチョス",
        value: "cheeseAndAvocadoPinchos",
      },
    ],
  },
  {
    label: "スープ",
    course: "soup",
    items: [
      {
        name: "コーンスープ",
        value: "cornSoup",
      },
      {
        name: "新玉ねぎのポタージュスープ",
        value: "freshOnionPotageSoup",
      },
      {
        name: "じゃがいもの冷製スープ",
        value: "coldPotatoSoup",
      },
    ],
  },
  {
    label: "肉料理",
    course: "meatDish",
    items: [
      {
        name: "ヒレステーキ",
        value: "filletSteak",
      },
      {
        name: "チキンソテーのチーズクリームソース",
        value: "chickenSauteWithCheeseCreamSauce",
      },
      {
        name: "骨付きポークチョップステーキ",
        value: "boneInPorkChopSteak",
      },
    ],
  },
  {
    label: "デザート",
    course: "dessert",
    items: [
      {
        name: "クレームブリュレ",
        value: "cremeBrulee",
      },
      {
        name: "オレンジシャーベット",
        value: "orangeSherbet",
      },
      {
        name: "フォンダン・オ・ショコラ",
        value: "fondantAuChocolat",
      },
    ],
  },
];

export const COURSE_NAMES = COURSES.map((val) => val.course);
