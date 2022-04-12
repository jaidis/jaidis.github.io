# ADB

## Comandos

**Muestra los dispositivos conectados**

```bash
adb devices -l
```

**Instala la aplicación en un dispositivo mediante su id**

```bash
adb -s a3b09a6e install MyApp.apk
```

**Instala el APK en un dispositivo conectado por usb**

```bash
adb -d install MyApp.apk
```

**Fuerza la instalación si ya existia un APK anterior**

```bash
adb install -r MyApp.apk
```

**Permite instalar una versión anterior del APK**

```bash
adb install -d MyApp.apk
```

**Instala el APK en la memoria interna**

```bash
adb install -f MyApp.apk
```

**Instala el APK en la memoria compartida/externa (sdcard)**

```bash
adb install -s MyApp.apk
```
