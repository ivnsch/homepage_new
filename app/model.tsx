export const load_projects = (): ProjectType[] => {
  return [
    {
      id: "25",
      title: "Peer finder",
      descr:
        "UWB/Bluetooth + cryptographic peer finder for Apple devices, did everything.",
    },
    {
      id: "24",
      title: "Density clouds simulation",
      descr: "GPU accelerated simulation of density clouds",
    },
    {
      id: "23",
      title: "Hydrogen atom",
      descr:
        "Visualization of the hydrogen atom orbitals, using slices rendered in a computer shader.",
    },
    {
      id: "22",
      title: "Algorand SDK",
      descr:
        "Main contributor for about a year. Ported all the features from the Go SDK to (idiomatic) Rust.",
    },
    {
      id: "21",
      title: "Capi",
      descr: `Led a startup and wrote all the code to create and manage decentralized company shares on blockchain`,
    },
    {
      id: "21",
      title: "Swaplink",
      descr:
        "Developed an app to do peer to peer atomic swaps on a blockchain.",
    },
    {
      id: "20",
      title: "Commerzbank",
      descr: "Developed registration flow using personal id with NFC.",
    },
    {
      id: "19",
      title: "Co-Epi",
      descr:
        "Developed iOS and Android apps for Covid bluetooth contact tracing. Implemented cryptographic protocol. Extracted shared core of apps to a Rust library.",
    },
    {
      id: "18",
      title: "Volvo cars",
      descr:
        "Developed an Android/Kotlin app from scratch using the usual 'latest and greatest' frameworks and practices. Partly directed team.",
    },
    {
      id: "17",
      title: "Babbel",
      descr:
        "Implemented new authentication and in-app-purchases flows for the iOS app.",
    },
    {
      id: "16",
      title: "Wohin-mit",
      descr:
        "Developed a mini search engine with Kotlin/Spring and React to dispose properly of waste items or donate/sell.",
    },
    {
      id: "15",
      title: "Whisper",
      descr:
        "Developed fully functional prototype of a companion mobile app for a hearing aid (bluetooth). Initial consulting to decide tech stack.",
    },
    {
      id: "14",
      title: "WWF",
      descr:
        "Developed features for a GIS app used to conduct surveys in forests with QT framework, AppStudio for ArgGIS",
    },
    {
      id: "13",
      title: "Otto",
      descr:
        "Developed features for Android apps with a common core used by multiple client companies.",
    },
    {
      id: "12",
      title: "Groma",
      descr:
        "Developed a fairly advanced grocery app with real time sync, offline-first and innovative UX. Directed graphic contractor.",
    },
    {
      id: "11",
      title: "Cashquizz",
      descr: "Developed feaatures for a quiz / game iOS app, using RxSwift.",
    },
    {
      id: "10",
      title: "7Mind",
      descr:
        "Developed meditation Android from scratch, and iOS apps. Android app from scratch to release. Reactive frameworks, etc.",
    },
    {
      id: "9",
      title: "Optris",
      descr:
        "Developed an MVP from scratch to configure temperature sensors over USB and display temperatures in real time on charts.",
    },
    {
      id: "8",
      title: "Grafiti LLC",
      descr:
        "iOS app development and customizations of an open source charts library I created.",
    },
    {
      id: "7",
      title: "Snow measurement app",
      descr:
        "Development from scratch of a data visualization app for snow depth / temperature measurements and customizations of open source charts library I created.",
    },
    {
      id: "6",
      title: "Quandoo",
      descr: "iOS app development for booking / rating of restaurants.",
    },
    {
      id: "5",
      title: "EGym",
      descr: "Development of a fitness app for iPhone and iPad.",
    },
    {
      id: "4",
      title: "Rocket Internet",
      descr:
        "Development of diverse commerce Android apps with demanding UIs (offline first, performance).",
    },
    {
      id: "3",
      title: "Cuponation",
      descr:
        "Development of Android app. maps-intensive, came up with custom gestures, also did some product management.",
    },
    {
      id: "2",
      title: "Dropgifts",
      descr:
        "Development from scratch of an Android app about sending gifts to friends via Facebook api.",
    },
    {
      id: "1",
      title: "Panfu",
      descr:
        "Worked on an MMORPG for children, first on the game's frontend (Flash) and a implemented a couple months full stack features including the backend (Java) too.",
    },
  ];
};

export type ProjectType = {
  id: string;
  title: string;
  descr: string;
};
