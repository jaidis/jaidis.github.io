# React Native

## Comandos

Para limpiar un proyecto e instalar de nuevo todos las dependencias

```bash
rm -rf node_modules package-lock.json ios/Podfile.lock ios/Pods/
```

Para mostrar los hashes de las firmas de un proyecto de android (en este caso la KEY de DEBUG)

```bash
keytool -list -v -alias androiddebugkey -keystore android/app/debug.keystore
```

## Herramientas

Si deseamos comprobar el contenido del bundle creado por la aplicación, instalaremos el paquete "react-native-bundle-visualizer"

```bash
npm install --save-dev react-native-bundle-visualizer
```

Y a continuación generamos el myapp.bundle

```bash
./node_modules/.bin/react-native-bundle-visualizer --platform android --dev false --bundle-output ./myapp.bundle --verbose --reset-cache
```

Para visualizar el contenido de bundle, podemos instalar esta herramienta de forma global

```bash
sudo npm install -g source-map-explorer
```

Y a continuación le pasamos como parametro el bundle generado, se genera un archivo HTML con el contenido del bundle

```bash
source-map-explorer myapp.bundle
```
