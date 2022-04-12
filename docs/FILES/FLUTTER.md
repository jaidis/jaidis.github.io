# Flutter

## Comandos

**Para comprobar que no hay conflictos para ejecutar un proyecto de Flutter**

```bash
flutter doctor
```

**En caso de que sea necesario, se aceptan las licencias del SDK de Android**

```bash
flutter doctor --android-licenses -v
```

**Para desactivar las analíticas de uso de Flutter y que se envíen a Google**

```bash
flutter config --no-analytics
```

**Activar plataformas extras**

```bash
flutter config --enable-windows-desktop
flutter config --enable-windows-uwp-desktop # Beta channel
flutter config --enable-macos-desktop
flutter config --enable-linux-desktop
```

**Desactivar plataformas extras al proyecto**

```bash
flutter config --no-enable-windows-desktop
flutter config --no-enable-windows-uwp-desktop # Beta channel
flutter config --no-enable-macos-desktop
flutter config --no-enable-linux-desktop
```

**Para crear un proyecto de Flutter**

```bash
flutter create my_project
```

**Para añadir plataformas extras al proyecto**

```bash
flutter create --platforms=windows,macos,linux .
```

**Para instalar las dependecias de un proyecto de Flutter**

```bash
flutter pub get
```

**Para limpiar las dependencias, build,... del proyecto e instalar de nuevos los paquetes del proyecto**

```bash
flutter clean && flutter pub get
```

**Para arrancar la App en modo debug**

```bash
flutter run --verbose
flutter run -d android --verbose
flutter run -d ios --verbose
flutter run -d windows --verbose
flutter run -d winuwp --verbose
flutter run -d macos --verbose
flutter run -d linux --verbose
```

**Para generar un paquete para flutter se le pasa el nombre del paquete como parámetro**

```bash
flutter create --template=package my_package
```

**Generar firma para la versión de release**

```bash
keytool -genkey -v -keystore <keystore.jks> -keyalg RSA -keysize 2048 -validity 10000 -alias <alias> -storepass <password>
```

**Listar el contenido del archivo de la firma**

```bash
keytool -list -v -keystore <keystore.jks>
```

**Generar App release de Android, `versión APK`**

```bash
flutter build apk --verbose
```

**Generar App release de Android, `versión AppBundle`**

```bash
flutter build appbundle --verbose
```

**Generar App release**

```bash
flutter build windows --verbose
flutter build macos --verbose
flutter build linux --verbose
```

## Unzip bundle

Cuando generamos un archivo `bundle` podemos extraer de él los Apks necesarios, para ello es necesario [descargar de la web de android la herramienta `bundletool`](https://developer.android.com/studio/command-line/bundletool)

**Con la herramienta descargada le pasamos por parametro el `bundle` y el archivo de salida**

```bash
bundletool build-apks --bundle=/MyApp/my_app.aab --output=/MyApp/my_app.apks
```

**Por último renombramos la extensión del archivo de salida a `zip` y al abrirlo, tendremos el Apk final**

_Nota: con este alias simplificamos el proceso para generar el apk final, pasando solo los parametros del `bundle` y el nombre del archivo de salida_

```bash
alias unzip-bundle='_unzip-bundle() { java -jar ~/.android/bundletool.jar build-apks --bundle="$1" --output="$2".apks --mode=universal; mv "$2".apks "$2".zip; echo "Done"}; _unzip-bundle'

unzip-bundle app-release.aab app.apks
```
