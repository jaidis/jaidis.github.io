import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

import { copyCode } from "vuepress-plugin-copy-code2";

let links: any = [
  "ADB",
  "BOOKMARKS-DEV",
  "DESKTOP-FILES",
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
  "LINUX",
  "MACOS",
  "OH-MY-ZSH",
  "OTHERS",
  "PI",
  "RN",
  "RN-LINKS",
  "RN-PACKAGES",
  "VSCODE",
  "RTL8812AU",
  "RTL8812BU",
];

export default defineUserConfig<DefaultThemeOptions>({
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
  theme: "@vuepress/theme-default",
  themeConfig: {
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
    repo: "jaidis/links",
  },
  plugins: [
    copyCode({
      locales: {
        "/": {
          copy: "Copiado correctamente 🎉",
          hint: "Copiar código",
        },
      },
    }),
  ],
});
