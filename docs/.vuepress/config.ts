import { defineUserConfig, defaultTheme, viteBundler } from "vuepress";

import { copyCodePlugin } from "vuepress-plugin-copy-code2";

let links: any = [
  "ADB",
  "BOOKMARKS-DEV",
  "DESKTOP-FILES",
  "DOCKER",
  "DOCKER-COMPOSE",
  "FLUTTER",
  "FLUTTER-CODES",
  "FLUTTER-LINKS",
  "FLUTTER-PACKAGES",
  "FSTAB",
  "GIT",
  "GITHUB-EMOJIS",
  "GPG-SSH",
  "GRUB",
  "LEGO",
  "LINUX",
  "MACOS",
  "OH-MY-ZSH",
  "OTHERS",
  "PI",
  "PSVITA",
  "RN",
  "RN-LINKS",
  "RN-PACKAGES",
  "RTL8812AU",
  "RTL8812BU",
  "VSCODE",
  "WINDOWS",
];

export default defineUserConfig({
  //bundler
  bundler: viteBundler({}),

  // locales
  locales: {
    "/": {
      description: "Documentación de todas mis notas para futuras consultas",
      lang: "es-ES",
      title: "Notas",
    },
    // "/en/": {
    //   description: "Documentation of all my notes for future reference",
    //   lang: "en-US",
    //   title: "Notes",
    // },
  },

  // theme and its config
  theme: defaultTheme({
    editLink: false,

    // locales
    locales: {
      "/": {
        selectLanguageName: "Español",
        selectLanguageText: "Idiomas",
        sidebar: {
          "/FILES/": [{ text: "Notas", children: links }],
        },
      },
      // "/en/": {
      //   selectLanguageName: "English",
      //   sidebar: {
      //     "/en/FILES/": [{ text: "Notes", children: links }],
      //   },
      // },
    },

    //logo
    logo: "https://vuejs.org/images/logo.png",

    //repo
    // repo: "jaidis/notas",
  }),
  plugins: [
    copyCodePlugin({
      locales: {
        "/": {
          copy: "Copiado correctamente 🎉",
          hint: "Copiar código",
        },
      },
    }),
  ],
});
