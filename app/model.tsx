export const load_projects = (): ProjectType[] => {
  return [
    {
      id: "25",
      title: "CSV to cards",
      descr: "A website / app to be able to edit CSVs as cards",
      links: [
        {
          href: "https://csvtocards.xyz/",
          text: "Website",
        },
      ],
      tags: ["React", "Typescript", "Vite"],
      img: "/csvtocards.png",
    },
    // {
    //   id: "24",
    //   title: "Molecule explorer",
    //   descr:
    //     "Minimal molecule explorer, with controls and picking, developed with the Bevy game engine.",
    //   links: [
    //     {
    //       href: "https://github.com/ivnsch/densitysim",
    //       text: "Source",
    //     },
    //     {
    //       href: "https://cool-sunshine-4a2b07.netlify.app/",
    //       text: "Live",
    //     },
    //   ],
    //   tags: ["Rust", "Bevy"],
    //   img: "/mol.png",
    // },
    // {
    //   id: "23",
    //   title: "Hydrogen atom",
    //   descr:
    //     "Visualization of the hydrogen atom orbitals, using slices calculated and rendered by a compute shader. Doesn't work on Firefox!",
    //   links: [
    //     {
    //       href: "https://github.com/ivnsch/h_",
    //       text: "Source",
    //     },
    //     {
    //       href: "https://h-orbitals.netlify.app/",
    //       text: "Live",
    //     },
    //   ],
    //   tags: ["WebGPU", "Typescript"],
    //   img: "/h.png",
    // },
    {
      id: "22",
      title: "Algorand SDK",
      descr:
        "Main contributor for about a year. Ported all the features from the Go SDK to (idiomatic) Rust.",
      links: [
        {
          href: "https://github.com/manuelmauro/algonaut",
          text: "Source",
        },
      ],
      tags: ["Rust", "Blockchain"],
      img: "/algorand.png",
    },
    {
      id: "21",
      title: "Capi",
      descr: `Led a startup and wrote all the code to create and manage decentralized company shares on blockchain. The main logic is in a WASM/Rust application, which links to a pure core, which shares come code with an API and other components. Developed the used SDK too. The next.js/typescript is a thin presentation layer for the WASM module.`,
      links: [
        {
          href: "https://github.com/ivnsch/capi-core",
          text: "Source",
        },
        {
          href: "https://cryptonews.net/news/altcoins/3202117/",
          text: "Grant",
        },
      ],
      tags: ["Rust", "Blockchain", "WASM", "Typescript", "next.js"],
      img: "/placeholder.jpg",
    },
    {
      id: "21",
      title: "Swaplink",
      descr:
        "Developed an app to do peer to peer atomic swaps on a blockchain. Thin React presentation layer with a WASM/Rust logic core, both frontend.",
      links: [
        {
          href: "https://github.com/ivnsch/swaplink",
          text: "Source",
        },
      ],
      tags: ["Rust", "Blockchain", "WASM"],
      img: "/placeholder.jpg",
    },
    {
      id: "20",
      title: "Commerzbank",
      descr:
        "Developed registration flow using personal id with NFC with flows for PUK, Video Ident, etc.",
      links: [
        {
          href: "https://apps.apple.com/de/app/commerzbank-banking/id366609901",
          text: "App",
        },
      ],
      tags: ["iOS", "Swift"],
      img: "/commerzbank.png",
    },
    {
      id: "25",
      title: "Peer finder",
      descr:
        "Apps for peers to find each other when in proximity via UWB/Bluetooth and authentication via public key cryptography. The keys are exchanged in advance. 'Sound radar' for visually impaired." +
        " Core logic in Rust. This app was my idea, design and I developed everything.",
      links: [
        {
          href: "https://github.com/ivnsch/peer_locator_apps",
          text: "Source",
        },
      ],
      tags: ["iOS", "Rust", "Swift"],
      img: "/peerfinder.png",
    },
    {
      id: "19",
      title: "Co-Epi",
      descr:
        "Developed open source iOS and Android apps for Covid contact tracing (custom, Apple/Google contact tracing frameworks were not existent yet). " +
        "Implemented cryptographic protocol and participated in development of bluetooth libraries. Extracted the shared part of the apps into a Rust library. " +
        "Optimized workflows for team not familiar with Rust. Directed extremely diverse team, including professional developers, scientists, students and diverse enthusiasts. A good part of all the activity, team coordination, developer discussion, etc. can be followed on Github.",
      links: [
        {
          href: "https://github.com/Co-Epi/app-backend-rust",
          text: "Source",
        },
      ],
      tags: ["Rust", "iOS", "Android", "Kotlin"],
      img: "/coepi.png",
    },
    {
      id: "18",
      title: "Volvo Cars Protection",
      descr:
        "Developed an Android/Kotlin app from scratch, about car insurances, using the usual 'latest and greatest' frameworks and practices. Partly directed team.",
      links: [
        {
          href: "https://play.google.com/store/apps/details?id=se.volvo.vcc&hl=en&pli=1",
          text: "App",
        },
      ],
      tags: ["Android", "Kotlin"],
      img: "/volvo.png",
    },
    {
      id: "17",
      title: "Babbel",
      descr:
        "Implemented new authentication and in-app-purchases flows for the iOS app.",
      links: [
        {
          href: "https://apps.apple.com/de/app/babbel-sprachen-lernen/id829587759",
          text: "App",
        },
      ],
      tags: ["iOS", "Swift"],
      img: "/placeholder.jpg",
    },
    {
      id: "16",
      title: "Wohin-mit",
      descr:
        "Developed a mini search engine with Kotlin/Spring and React to dispose properly of waste items or donate/sell. A politician tweeted about it!",
      links: [
        {
          href: "https://github.com/ivnsch/waste_server",
          text: "Source",
        },
      ],
      tags: ["React", "Spring", "Kotlin"],
      img: "/placeholder.jpg",
    },
    {
      id: "15",
      title: "Whisper",
      descr:
        "Developed a fully functional prototype of a companion mobile app for a hearing aid (bluetooth). Initial consulting to decide tech stack. Participated in protocol design.",
      links: [],
      tags: ["Android", "Kotlin"],
      img: "/placeholder.jpg",
    },
    {
      id: "14",
      title: "WWF",
      descr:
        "Developed features for a GIS app used to conduct surveys in forests with QT framework, AppStudio for ArgGIS",
      links: [],
      tags: ["QT", "Javascript"],
      img: "/placeholder.jpg",
    },
    {
      id: "13",
      title: "Otto",
      descr:
        "Developed features for Android apps with a common core (via git submodules) used by multiple client companies.",
      links: [],
      tags: ["Android", "Kotlin"],
      img: "/placeholder.jpg",
    },
    {
      id: "12",
      title: "Groma",
      descr:
        "Developed a fairly advanced grocery / budgeting app with real time sync, offline-first and innovative UI interactions. Directed graphic contractor. This was my own startup.",
      links: [
        {
          href: "https://appadvice.com/app/groma/1121689899",
          text: "Overview",
        },
      ],
      tags: ["iOS", "Swift"],
      img: "/placeholder.jpg",
    },
    {
      id: "11",
      title: "Cashquizz",
      descr:
        "Developed feaatures for a quiz / game iOS app, using RxSwift. Heavy on custom UIs.",
      links: [],
      tags: ["iOS", "Swift"],
      img: "/placeholder.jpg",
    },
    {
      id: "10",
      title: "7Mind",
      descr:
        "Developed meditation Android from scratch, and participated in development of iOS app. Reactive frameworks, etc. Cache management for audio files.",
      links: [
        {
          href: "https://play.google.com/store/apps/details?id=de.sevenmind.android&hl=en",
          text: "App",
        },
      ],
      tags: ["iOS", "Swift", "Android", "Kotlin"],
      img: "/placeholder.jpg",
    },
    {
      id: "9",
      title: "Optris",
      descr:
        "Developed an MVP from scratch to configure temperature sensors over USB and display temperatures in real time on charts.",
      links: [
        {
          href: "https://optris.com/software/irmobile-app/",
          text: "Website",
        },
      ],
      tags: ["Android", "Kotlin"],
      img: "/placeholder.jpg",
    },
    {
      id: "8",
      title: "Grafiti LLC",
      descr:
        "iOS app development and customizations of an open source charts library I created.",
      links: [],
      tags: ["iOS", "Swift"],
      img: "/placeholder.jpg",
    },
    {
      id: "7",
      title: "Snow measurement app",
      descr:
        "Development from scratch of a data visualization app for snow depth / temperature measurements and customizations of open source charts library I created.",
      links: [],
      tags: ["iOS", "Swift"],
      img: "/placeholder.jpg",
    },
    {
      id: "10000",
      title: "SwiftCharts",
      descr:
        "Development from scratch of a charts library for iOS. Got over 2000 stars on Github",
      links: [
        {
          href: "https://github.com/ivnsch/SwiftCharts",
          text: "Source",
        },
      ],
      tags: ["iOS", "Swift"],
      img: "/placeholder.jpg",
    },
    {
      id: "6",
      title: "Quandoo",
      descr: "iOS app development for booking / rating of restaurants.",
      links: [
        {
          href: "https://apps.apple.com/us/app/quandoo-restaurant-bookings/id738501773",
          text: "App",
        },
      ],
      tags: ["iOS", "Swift"],
      img: "/placeholder.jpg",
    },
    {
      id: "5",
      title: "EGym",
      descr: "Development of a fitness app for iPhone and iPad.",
      links: [
        {
          href: "https://apps.apple.com/de/app/egym-fitness/id1322364290",
          text: "App",
        },
      ],
      tags: ["iOS", "Swift"],
      img: "/placeholder.jpg",
    },
    {
      id: "4",
      title: "Rocket Internet",
      descr:
        "Development of diverse commerce Android apps with demanding UIs (offline first, performance).",
      links: [],
      tags: ["Android", "Java"],
      img: "/placeholder.jpg",
    },
    {
      id: "3",
      title: "Cuponation",
      descr:
        "Development of Android app. maps-intensive, came up with custom gestures, also did some product management.",
      links: [],
      tags: ["Android", "Java"],
      img: "/placeholder.jpg",
    },
    {
      id: "2",
      title: "Dropgifts",
      descr:
        "Development from scratch of an Android app about sending gifts to friends via Facebook api. Heavy on custom UIs. Was only developer in team, with almost no Android experience, delivered app fully matching iOS model app.",
      links: [],
      tags: ["Android", "Java"],
      img: "/placeholder.jpg",
    },
    {
      id: "1",
      title: "Panfu",
      descr:
        "Worked on an MMORPG for children, first on the game's frontend (Flash) and a implemented a couple months full stack features including the backend (Java) too.",
      links: [],
      tags: ["Flash", "Java", "Spring"],
      img: "/placeholder.jpg",
    },
  ];
};

export type ProjectType = {
  id: string;
  title: string;
  descr: string;
  links: LinkType[];
  tags: string[];
  img: string;
};

export type LinkType = {
  href: string;
  text: string;
};
