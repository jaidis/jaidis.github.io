# MACOS

Instrucciones para configurar MacOS

### Configuración global

Desactivar seguridad para poder instalar Apps de terceros

```bash
sudo spctl --master-disable
```

Desactivar hibernación y borrar carpetas asociadas a ello

```bash
sudo pmset hibernatemode 0
sudo rm /var/vm/sleepimage && sudo mkdir /var/vm/sleepimag
```

Cambiar el nombre del dispositivo

```bash
sudo scutil --set HostName mini
sudo scutil --set ComputerName mini
sudo scutil --set LocalHostName mini
```

### Herramientas Desarrollo

Instalar el paquete mínimo necesario xcode-select

```bash
xcode-select --install
```

Instalar Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

<details>
  <summary>Homebrew Cheat Sheet</summary>

>

_Desactivar las analiticas_

```bash
brew analytics off
```

_Actualiza el repositorio de brew_

```bash
brew update
```

_Muestra los paquetes obsoletos_

```bash
brew outdated
```

_Actualiza los paquetes instalados_

```bash
brew upgrade
```

</details>

>

Instalar Java 8 (en este caso, openjdk 8)

```bash
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

Instalar programas usados con frecuencia

```bash
brew install bat bpytop htop scrcpy
```

Instalar cocoapods

```bash
sudo gem install cocoapods
```

### Configuración de BASH o ZSH

Exportar los SDK de Android y Flutter para que sean accesibles desde el terminal

```bash
# ANDROID PATH
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
# FLUTTER PATH
export FLUTTER_HOME=$HOME/Library/FlutterSDK
export PATH=$PATH:$FLUTTER_HOME/bin
```

### React Native & Flutter

Instalar watchman (react native)

```bash
brew install watchman
```

Comprobar los SDK instalados por la versión actual de Xcode, forzar a utilizar dicha versión de Xcode para xcode-select

```bash
xcrun -k --sdk iphoneos --show-sdk-path
sudo xcode-select --switch /Applications/Xcode.app
```

Aceptar todas las licencias de los SDK de Android Studio

```bash
yes | sdkmanager --licenses
```

Aceptar todas las licencias de Xcode

```bash
sudo xcodebuild -license accept
```

### Node & Npm

Si utilizamos una versión superior a la v7 de Npm, nos saltará un aviso de dependecias incompletas al instalar los paquetes, para evitar el error, se utiliza el modificador --legacy-peer-deps

```bash
npm install --legacy-peer-deps
```

### Pods

Los cocoapods nos permite instalar paquetes para los proyectos de Xcode

Si se desea iniciar un archivo pod

```bash
pod init
```

Para instalar los pods dentro de un proyecto

```bash
pod install
```

Para comprobar los pods desactualizados

```bash
pod outdated
```

Para forzar que se recargue la base de datos con los información de los pods

```bash
pod repo update
```

### Scrcpy

Con esta herramienta, nos permite mostrar la pantalla de un dispositivo físico de Android. La configuración recomendada para que se muestre de forma "normal" es la siguiente

```bash
scrcpy -b5M -m1024 -w -S -t --disable-screensaver
scrcpy -b10M -m1024 -w -S -t --disable-screensaver
```

Con ello indicamos, que el bitrate no supere los 5M, una resolución de 1024, mantenemos el dispositivo funcionando, apagamos la pantalla del dispositivo, mostramos los toques físicos (puntero) y por último desactivamos el salvapantallas
