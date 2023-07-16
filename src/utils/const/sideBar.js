export const SIDEBAR_MENU = [
  {
    path: "/",
    title: "Anasayfa",
  },
  {
    path: "/kesfet",
    title: "kesfet",
  },
  {
    path: "/makaleler",
    title: "makaleler",
  },
  {
    path: "/soru-cevap",
    title: "soru cevap",
  },
  {
    path: "/ders-istekleri",
    title: "ders istekleri",
    new: true,
  },
];

export const QA_SIDEBAR = [
  {
    path: "/soru-cevap",
    title: "son sorular",
  },
  {
    path: "/cevaplanmamis-sorular",
    title: "cevaplanmamis sorular",
  },
  {
    path: "/cozulmemis-sorular",
    title: "cozulmemis sorular",
  },
  {
    path: "/kategoriler",
    title: "kategoriler",
  },
  {
    path: "/populer-sorular",
    title: "populer sorular",
  },
];

export const PROFILE_SIDEBAR_MENU = [
  {
    path: "/profil",
    title: "profil",
  },
  {
    path: "/profil/takipciler",
    title: "takipciler",
  },
  {
    path: "/profil/takip-edilenler",
    title: "takip edilenler",
  },
  {
    path: "/profil/sorular",
    title: "sorular",
  },
  {
    path: "/profil/cevaplar",
    title: "cevaplar",
  },
  {
    path: "/profil/bildirimler",
    title: "bildirimler",
  },
  {
    path: "/",
    title: "herkese acik profilin",
  },
  {
    onClick: () => console.log("logout buttonuna basildi"),
    sensitive: true,
    title: "cikis",
  },
];
