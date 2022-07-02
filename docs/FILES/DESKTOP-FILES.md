# Desktop files (linux)

### Android Studio

**Archivo de configuración para que aparecezca en el submenú de programación/desarrollo**

Ruta del archivo

```bash
sudo xed /usr/share/applications/android-studio.desktop
```

<details>
  <summary>Mostrar</summary>

```bash
[Desktop Entry]
Version=1.0
Type=Application
Name=Android Studio
Icon=/opt/AndroidStudio/bin/studio.png
Exec="/opt/AndroidStudio/bin/studio.sh" %f
Categories=Development;IDE;
Terminal=false
StartupWMClass=jetbrains-android-studio
```

</details>

### Deemix

**Archivo de configuración para que aparecezca en el submenú de "Sonido y video".**

Ruta del archivo

```bash
sudo xed /usr/share/applications/deemix-gui.desktop
```

<details>
  <summary>Mostrar</summary>

```bash
[Desktop Entry]
Name=deemix-gui
Exec=/opt/deemix-gui/deemix-gui %U
Terminal=false
Type=Application
Icon=deemix-gui
StartupWMClass=deemix-gui
Categories=AudioVideo;Audio;Player;
MimeType=application/x-flac;audio/flac;audio/x-flac;audio/mp3;
Keywords=Player;Audio;Server;Broadcast;
```

</details>

### Google Chrome

**Archivo de configuración para evitar escribir en la cache del pc.**

Ruta del archivo

```bash
sudo xed /usr/share/applications/google-chrome.desktop
```

<details>
  <summary>Mostrar</summary>

```bash
[Desktop Entry]
Version=1.0
Name=Google Chrome
# Only KDE 4 seems to use GenericName, so we reuse the KDE strings.
# From Ubuntu's language-pack-kde-XX-base packages, version 9.04-20090413.
GenericName=Web Browser
GenericName[en_GB]=Web Browser
GenericName[es]=Navegador web
# Gnome and KDE 3 uses Comment.
Comment[en_GB]=Access the Internet
Comment[es]=Accede a Internet.
Exec=/usr/bin/google-chrome-stable %U --disk-cache-dir=/dev/null
StartupNotify=true
Terminal=false
Icon=google-chrome
Type=Application
Categories=Network;WebBrowser;
MimeType=application/pdf;application/rdf+xml;application/rss+xml;application/xhtml+xml;application/xhtml_xml;application/xml;image/gif;image/jpeg;image/png;image/webp;text/html;text/xml;x-scheme-handler/ftp;x-scheme-handler/http;x-scheme-handler/https;
Actions=new-window;new-private-window;

[Desktop Action new-window]
Name=New Window
Name[en_GB]=New Window
Name[es]=Nueva ventana
Exec=/usr/bin/google-chrome-stable  %U --disk-cache-dir=/dev/null

[Desktop Action new-private-window]
Name=New Incognito Window
Name[en_GB]=New Incognito window
Name[es]=Nueva ventana de incógnito
Exec=/usr/bin/google-chrome-stable --incognito --disk-cache-dir=/dev/null
```

</details>

### Postman

**Archivo de configuración para que aparecezca en el submenú de programación/desarrollo**

Ruta del archivo

```bash
sudo xed /usr/share/applications/postman.desktop
```

<details>
  <summary>Mostrar</summary>

```bash
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Comment=Postman
Exec=/opt/Postman/Postman
Icon=/opt/Postman/app/resources/app/assets/icon.png
Categories=Development
Type=Application
Terminal=false
Name[es_ES]=Postman
```

</details>

### React Native Debugger

**Archivo de configuración para que aparecezca en el submenú de programación/desarrollo**

Ruta del archivo

```bash
sudo xed /usr/share/applications/react-native-debugger.desktop
```

<details>
  <summary>Mostrar</summary>

```bash
[Desktop Entry]
Version=1.0
Type=Application
Name=React Native Debugger
Icon=/opt/rndebugger/logo.png
Exec="/opt/rndebugger/react-native-debugger" %f
Categories=Development;IDE;
Terminal=false
```

</details>

### Typora

**Archivo de configuración para que aparecezca en el menú**

Ruta del archivo

```bash
sudo xed /usr/share/applications/typora.desktop
```

<details>
  <summary>Mostrar</summary>

```bash
[Desktop Entry]
Name=Typora Markdown Editor
Name[es]=Typora editor de Markdown
Comment=Edit markdown files
Comment[es]=Editar archivos de mardkdown
Exec=typora %U
Terminal=false
Type=Application
StartupNotify=true
MimeType=text/plain;
Icon=/opt/Typora/resources/assets/installer.ico
Categories=GTK;Utility;TextEditor;
Keywords=text;editor;tabs;highlighting;code;multiple;files;pluggable;notepad;
#X-MATE-DocPath=xed/xed.xml
#Actions=new-window;

#[Desktop Action new-window]
#Name=New Window
#Exec=xed --new-window %U
```

</details>

### VSCode

**Archivo de configuración para que aparecezca en el submenú de programación/desarrollo**

Ruta del archivo

```bash
sudo xed /usr/share/applications/vscode.desktop
```

<details>
  <summary>Mostrar</summary>

```bash
[Desktop Entry]
Version=1.0
Type=Application
Name=VSCode
Icon=/opt/VSCode/resources/app/resources/linux/code.png
Exec="/opt/VSCode/code" %f
Categories=Development;IDE;
Terminal=false
```

</details>

>

**Versión oficial**

<details>
  <summary>Mostrar</summary>

```bash
[Desktop Entry]
Name=Visual Studio Code
Comment=Code Editing. Redefined.
GenericName=Text Editor
Exec=/usr/share/code/code --unity-launch %F
Icon=com.visualstudio.code
Type=Application
StartupNotify=false
StartupWMClass=Code
Categories=TextEditor;Development;IDE;
MimeType=text/plain;inode/directory;application/x-code-workspace;
Actions=new-empty-window;
Keywords=vscode;

[Desktop Action new-empty-window]
Name=New Empty Window
Exec=/usr/share/code/code --new-window %F
Icon=com.visualstudio.code
```

</details>
