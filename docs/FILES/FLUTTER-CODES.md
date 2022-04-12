# Flutter Code Snippets

## Modo oscuro

**Si deseamos comprobar si el usuario tiene en el dispositivo el modo oscuro activado**

```dart
import 'dart:ui';

import 'package:flutter/scheduler.dart';

// Purpose is to detect dark mode as since the settings of
// whether isDark or not is rebuilt via change notifier at
// root of widget tree we can do some fancy fixing of the
// crap mess of widgets not yet colorscheme converted.
Brightness brightness = SchedulerBinding.instance!.window.platformBrightness;
bool isDarkMode = brightness == Brightness.dark;
```

## Forzar el color del AppBar

**Si deseamos cambiar el color del AppBar (además en Android, el SafeArea), podemos utilizar el siguiente código**

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import 'package:themes/main.dart';
import 'package:utils/main.dart';
import 'package:widgets/main.dart';

class Example extends StatelessWidget {
  const Example({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _isDarkMode = Provider.of<AppStateNotifier>(context).isDarkMode;
    final _myApp = Provider.of<ThemeNotifier>(context, listen: false).myApp;
    final _myTheme = AppTheme(_myApp);

    return Scaffold(
        appBar:...,
        drawer: ...,
        bottomNavigationBar: ...,
        body: AnnotatedRegion<SystemUiOverlayStyle>(
            value: _isDarkMode
                ? SystemUiOverlayStyle.dark.copyWith(
                    statusBarColor: _myTheme.colors.primaryDark,
                  )
                : SystemUiOverlayStyle.light.copyWith(
                    statusBarColor: _myTheme.colors.primaryDark,
                  ),
            child: SafeArea(
              child: HomeScreen(),
            ),
      ),
    )
  }
}
```

## GestureDetector

**Implementación del GestureDetector en toda la aplicación**

```dart
return Consumer<AppStateNotifier>(builder: (context, appState, child) {
  return GestureDetector(
    onTap: () {
      FocusScopeNode currentFocus = FocusScope.of(context);
      if (!currentFocus.hasPrimaryFocus) {
        print(!currentFocus.hasPrimaryFocus);
        currentFocus.unfocus();
        FocusScope.of(context).requestFocus(FocusNode());
      }
    },
    child: MaterialApp(
      title: APP_NAME,
      theme: myTheme.lightTheme,
      darkTheme: myTheme.darkTheme,
      themeMode: appState.isDarkMode ? ThemeMode.dark : ThemeMode.light,
      onGenerateRoute: routes,
      localizationsDelegates: context.localizationDelegates,
      supportedLocales: context.supportedLocales,
      locale: context.locale,
    ),
  );
});
```

## Iniciar Provider en el initState del componente

**Implementación para iniciar el provider dentro del initState**

_`You need to use the context to call Provider.of() so you can add addPostFrameCallback() which is called after the first build, there you can use the context`_

```dart
@override
void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
      auth = Provider.of<Auth>(context, listen: false);
    });
}
```

## Información sobre el dispositivo

**Si deseamos obtener información sobre el dispositivo (ejemplo para Android)**

```dart
import 'package:device_info_plus/device_info_plus.dart';

DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;

print('androidId -> ' + androidInfo.androidId);
print('board -> ' + androidInfo.board);
print('bootloader -> ' + androidInfo.bootloader);
print('brand -> ' + androidInfo.brand);
print('device -> ' + androidInfo.device);
print('display -> ' + androidInfo.display);
print('fingerprint -> ' + androidInfo.fingerprint);
print('hardware -> ' + androidInfo.hardware);
print('host -> ' + androidInfo.host);
print('id -> ' + androidInfo.id);
print('isPhysicalDevice -> ' + androidInfo.isPhysicalDevice.toString());
print('manufacturer -> ' + androidInfo.manufacturer);
print('model -> ' + androidInfo.model);
print('product -> ' + androidInfo.product);
print('tags -> ' + androidInfo.tags);
print('type -> ' + androidInfo.type);
print('version.baseOS -> ' + androidInfo.version.baseOS);
print('version.codename -> ' + androidInfo.version.codename);
print('version.incremental -> ' + androidInfo.version.incremental);
print('version.previewSdkInt -> ' + androidInfo.version.previewSdkInt.toString());
print('version.release -> ' + androidInfo.version.release);
print('version.sdkInt -> ' + androidInfo.version.sdkInt.toString());
print('version.securityPatch -> ' + androidInfo.version.securityPatch);
```

<details>
  <summary>Mostrar</summary>

```log
I/flutter ( 4692): androidId -> bdb02440dd219ed8
I/flutter ( 4692): board -> goldfish_x86_64
I/flutter ( 4692): bootloader -> unknown
I/flutter ( 4692): brand -> Android
I/flutter ( 4692): device -> generic_x86_64
I/flutter ( 4692): display -> sdk_phone_x86_64-userdebug 10 QPP6.190730.005.B1 5775370 test-keys
I/flutter ( 4692): fingerprint -> Android/sdk_phone_x86_64/generic_x86_64:10/QPP6.190730.005.B1/5775370:userdebug/test-keys
I/flutter ( 4692): hardware -> ranchu
I/flutter ( 4692): host -> abfarm830
I/flutter ( 4692): id -> QPP6.190730.005.B1
I/flutter ( 4692): isPhysicalDevice -> false
I/flutter ( 4692): manufacturer -> unknown
I/flutter ( 4692): model -> Android SDK built for x86_64
I/flutter ( 4692): product -> sdk_phone_x86_64
I/flutter ( 4692): tags -> test-keys
I/flutter ( 4692): type -> userdebug
I/flutter ( 4692): version.baseOS ->
I/flutter ( 4692): version.codename -> REL
I/flutter ( 4692): version.incremental -> 5775370
I/flutter ( 4692): version.previewSdkInt -> 0
I/flutter ( 4692): version.release -> 10
I/flutter ( 4692): version.sdkInt -> 29
```

</details>

## FutureBuilder

**Codigo de ejemplo de como utilizar FutureBuilder**

```dart
Future _getPuntosAcceso() async {
  return _comunidades[_indexComunidad].puntosAcceso;
}

FutureBuilder(
  future: _getPuntosAcceso(),
  builder: (context, snapshot) {
    List<PuntosAcceso> _x = snapshot.data;
    return ListView.builder(
      physics: ScrollPhysics(),
      shrinkWrap: true,
      itemCount: _x.length,
      itemBuilder: (context, index) {
        return SlidableHome(
          icon: _tipoPuntoAcceso(_x[index].tipo),
          mac: _mac,
          puntoAcceso: _x[index],
          showPaddingTop: true,
        );
      },
    );
  },
)
```

## ListTile (leading whitout padding and centered)

```dart
ListTile(
  tileColor: Colors.white,
  title: Text('Title text'),
  subtitle: Text('Subtitle text'),
  minLeadingWidth: 0,
  leading: Container(
    height: double.infinity,
    child: Icon(Icons.ac_unit_outlined),
  ),
)
```

## IconButton (eliminar padding)

```dart
IconButton(
  onTap: () {},
  child: Icon(...),
  padding: EdgeInsets.zero,
  constraints: BoxConstraints(),
)
```

### Alternatives

```dart
GestureDetector(
  child: Icon(Icons.volume_up),
  onTap: () {},
)
```

## Colocar un elemento fijo en la parte inferior de la pantalla

```dart
@override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(),
      ),
      bottomNavigationBar: YourButtonWidget(),
    );
  }
```

### Alternatives

```dart
@override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(),
      ),
      floatingActionButton: YourButtonWidget(),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }
```

## Flutter Slidable

**Codigo para migrar de versión (0.6 a 1.0) del widget flutter_slidable**

<details>
  <summary>Mostrar</summary>

There are a lot of breaking changes between the version 0.6.0 and the 1.0.0.
This document aims to identify them and to help you to migrate your code.

## Actions

In the 0.6, you can use an `IconSlideAction` to show an action with an icon and a label. In the 1.0, this widget is now called
`SlideAction`:

### 0.6

```dart
IconSlideAction(
  caption: 'Archive',
  color: Colors.blue,
  icon: Icons.archive,
  onTap: () {},
);
```

### 1.0

```dart
SlidableAction(
  label: 'Archive',
  backgroundColor: Colors.blue,
  icon: Icons.archive,
  onPressed: (context) {},
);
```

## Action Pane

In the 0.6, the primary and secondary action panes share the same properties, they use the same kind of animation and have the same extent ratio. While this is simple to set up, it does not answer to all kind of usages.
The 1.0 aims to fix that by decoupling the action pane from each other.

### 0.6

In the 0.6 you would write something like this:

```dart
Slidable(
  actionPane: SlidableDrawerActionPane(),
  actionExtentRatio: 0.25,
  child: const MyWidget(),
  actions: <Widget>[
    IconSlideAction(
      caption: 'Archive',
      color: Colors.blue,
      icon: Icons.archive,
      onTap: () {},
    ),
  ],
  secondaryActions: <Widget>[
    IconSlideAction(
      caption: 'Delete',
      color: Colors.red,
      icon: Icons.delete,
      onTap: () {},
    ),
  ],
);
```

### 1.0

The same widget would be write like that with the 1.0 version:

```dart
Slidable(
  startActionPane: ActionPane(
    motion: const DrawerMotion(),
    extentRatio: 0.25,
    children: [
      SlidableAction(
        label: 'Archive',
        backgroundColor: Colors.blue,
        icon: Icons.archive,
        onPressed: (context) {},
      ),
    ],
  ),
  endActionPane: ActionPane(
    motion: const DrawerMotion(),
    extentRatio: 0.25,
    children: [
      SlidableAction(
        label: 'Delete',
        backgroundColor: Colors.red,
        icon: Icons.delete,
        onPressed: (context) {},
      ),
    ],
  ),
  child: const MyWidget(),
);
```

## Motions

In the 0.6, the type of the action pane defined the animation behavior. In the 1.0, this behavior is controlled by a motion.
This is the lookup table:

|      **ActionPane**      |  **Motion**   |
| :----------------------: | :-----------: |
| SlidableBehindActionPane | BehindMotion  |
| SlidableScrollActionPane | ScrollMotion  |
| SlidableDrawerActionPane | DrawerMotion  |
| SlidableStrechActionPane | StretchMotion |

## Dismissible

In the 0.6, the dismissal member of the `Slidable` widget handled the way the `Slidable` could be dismissed. Now, in the 1.0, you will have to set a `DismissiblePane` to the `dismissible` member to have the same behavior.

### 0.6

```dart
Slidable(
  key: ValueKey(0), // A key is necessary.
  dismissal: SlidableDismissal(
    child: SlidableDrawerDismissal(),
    onDismissed: (actionType) {
      // Remove this Slidable from the widget tree.
    },
  ),
);
```

### 1.0

```dart
Slidable(
  key: ValueKey(0), // A key is necessary.
  startActionPane: ActionPane(
    dismissible: DismissiblePane(
      onDismissed: () {
        // Remove this Slidable from the widget tree.
      },
    ),
  ),
);
```

</details>
