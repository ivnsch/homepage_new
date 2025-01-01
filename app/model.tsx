const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const load_projects = (): ProjectType[] => {
  return [
    {
      id: "25",
      title: "Peer finder",
      descr:
        'This was an idea I had with using UWB (ultra wideband technology - allows to locate devices in proximity with high accuracy) in combination with public key cryptography, to have users exchange keys first (e.g. via chat) and later be able to locate each other, identifying via the keys. Can be used e.g. for delivery services, "blind" meetings, etc. It had also a fallback for bluetooth, for longer distances or otherwise UWB being unavailable. I also added a sound radar prototype - another idea, for the use case of disabled people finding a caregiver, indicating direction as well as proximity. Developed from scratch a functional iOS app. Designed a fairly robust event and error handling architecture for bluetooth. Tested mostly indoors, while it seemed to work, it quite likely needed more work for realistic scenarios',
    },
    {
      id: "25",
      title: "This homepage",
      descr: "Next js etc",
    },
    {
      id: "24",
      title: "Density clouds simulation",
      descr: "TODO copy from readme",
    },
    {
      id: "23",
      title: "Hydrogen atom",
      descr:
        "A visualization of the hydrogen atom orbitals, using slices rendered in a computer shader.",
    },
    {
      id: "24",
      title: "Rust android ios example app",
      descr: lorem,
    },
    {
      id: "22",
      title: "Algorand SDK",
      descr:
        "Was the main contributor for about a year. Ported all the features from the main (Go) SDK to Rust, making them idiomatic.",
    },
    {
      id: "21",
      title: "Capi",
      descr: `Led and developed all the code for a startup to decentralize company shares. 
        The idea was to simplify as much as possible the process of raising funds via company shares, as well as of trading them, via blockchain technology.
        Received a grant from the Algorand foundation.
        A fully functional app was developed and released, but it had to be put down due to an unwelcoming regulatory environment for small startups (e.g. 7-figure lawyer fees "to set things up")"
        `,
    },
    {
      id: "21",
      title: "Swaplink",
      descr:
        "Developed an app to do peer to peer atomic swaps (basically, safe trades: I give you x and you give me y) on a blockchain.",
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
        "Developed open source iOS and Android apps for Covid contact tracing (custom, Apple/Google contact tracing frameworks were not existent yet). Implemented cryptographic protocol and participated in development of bluetooth libraries. Extracted the shared part of the apps into a Rust library. Optimized workflows for team not familiar with Rust. Directed extremely diverse team, including professional developers, scientists, students and diverse enthusiasts.",
    },
    {
      id: "18",
      title: "Volvo cars",
      descr:
        "Developed an Android app from scratch until 1.0 release. Partly directed team. Kotlin, RxJava, small team, code reviews via Bitbucket, continuous integration.  Developed an Android app from scratch until 1.0 release. Partly directed team. Kotlin, RxJava, small team, code reviews via Bitbucket, continuous integration.",
    },
    {
      id: "17",
      title: "Babbel",
      descr:
        "Implemented new authentication and in-app-purchases flows for the iOS app. Large team, code reviews via Github, continuous integration, etc.",
    },
    {
      id: "16",
      title: "Wohin-mit",
      descr:
        "Developed a mini search engine to figure out how to dispose properly of waste items or donate/sell. React, Javascript, Spring, Kotlin, Postgres. It got some attention from local politicians :D https://twitter.com/GYGeorg/status/1158323606201520129",
    },
    {
      id: "15",
      title: "Whisper",
      descr:
        "Consulting and prototyping of mobile apps for a hearing aid (bluetooth). Compared technologies to decide what to use (React Native, Flutter, native, etc.), designed and developed bluetooth framework and foundation for Android app. Delivered a fully functional prototype.",
    },
    {
      id: "14",
      title: "WWF",
      descr:
        "Developed features for a GIS (geographic information system) app used to conduct surveys in forests. QT framework, AppStudio for ArgGIS. Developed features for a GIS (geographic information system) app used to conduct surveys in forests. QT framework, AppStudio for ArgGIS ",
    },
    {
      id: "13",
      title: "Otto",
      descr:
        "Developed features for Android apps primarily in a common core used by 7 or so client companies. Mid size team, code reviews on Github, architecture intensive to design optimal interfaces / modularity between core and companies. Mostly remote, occasional traveling to Hamburg for some meetings.",
    },
    {
      id: "12",
      title: "Groma",
      descr:
        'Learning project for iOS development turned into "for-profit". It was a grocery list app with many additional features, like budget and inventory management. I wrote from scratch a real time synchronization backend (Scala / Slick / Play framework) to share lists, and offline-first functionality (to use the app without internet and sync when connected).',
    },
    {
      id: "11",
      title: "Cashquizz",
      descr:
        "Feature development for a quiz / game iOS app. RxSwift, very custom UIs, rest apis, git.",
    },
    {
      id: "10",
      title: "7Mind",
      descr:
        "Developed a meditation Android app from scratch to release (or near, don't remember), and participated in development of existing iOS app. Small team, code reviews, rest apis, audio, file management / caching, very custom UIs / animations, reactive frameworks.",
    },
    {
      id: "9",
      title: "Optris",
      descr:
        "Development and design of MVP to configure temperature sensors over USB and display temperatures in real time on charts. From scratch, Didn't have previous experience with USB programming, sensors or general environment, delivered well working MVP. Android, Java, USB, sensors, data visualization, MPAndroidChart, SciChart, Cradle, Fastlane, Google Play alpha/beta distribution.",
    },
    {
      id: "8",
      title: "Grafiti LLC",
      descr:
        "iOS app development and customizations of an open source charts library which I created. iOS, Swift, Git, JIRA, CocoaPods, Fastlane, CircleCI, HockeyApp, Crashlytics, Testflight",
    },
    {
      id: "7",
      title: "Snow measurement app",
      descr:
        "Development of a data visualization app for snow depth / temperature measurements and necessary customizations of the used open source charts library, which I created.",
    },
    {
      id: "6",
      title: "Quandoo",
      descr:
        "iOS app development for booking / rating of restaurants. Rest apis, git, etc.",
    },
    {
      id: "5",
      title: "EGym",
      descr:
        "Development of a fitness app for iPhone and iPad. Rest api, git, etc.",
    },
    {
      id: "4",
      title: "Rocket Internet",
      descr:
        "Development of diverse commerce Android apps. Rest apis, caching and sync for offline usage, performance optimization to make things load fast. Push notifications, Git, Jira, etc. Directed an international team (mostly Europe / Asia), code reviews.",
    },
    {
      id: "3",
      title: "Cuponation",
      descr:
        "Development of Android app. maps-intensive, came up with / developed some custom gestures, Rest api, Internationalization, custom UI elements / animations. Participated in product, design and market research a little.",
    },
    {
      id: "2",
      title: "Dropgifts",
      descr:
        "Development of an Android app about sending gifts to friends via Facebook api. Did everything. Rest apis, very custom UIs, git, push notifications, localization. Parts of this app can be still seen e.g. here https://springwise.com/site-lets-facebook-friends-send-gift-cards/",
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
