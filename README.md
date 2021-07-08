# Ask for draw over other apps permission


## Installation:
Run `npm i react-native-can-draw-overlays`


### Android

#### React Native 0.60+
`auto links the module`
#### React Native <= 0.59
##### Auto
`react-native link react-native-can-draw-overlays`

#### Manual

* Edit your `android/settings.gradle` to look like this (exclude +)

```diff
+ include ':react-native-can-draw-overlays'
+ project(':react-native-can-draw-overlays').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-can-draw-overlays/android')
```

* Edit your `android/app/build.gradle` (note: **app** folder) to look like this (exclude +)

 ```diff
dependencies {
 + implementation project(':react-native-can-draw-overlays')
 }
 ```

* Edit your `MainApplication.java` from ( `android/app/src/main/java/...`) to look like this (exclude +)
```diff
+ import ru.enniel.candrawoverlays.CanDrawOverlaysPackage;

@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
+         new CanDrawOverlaysPackage()
      );
    }
```

## Usage

```typescript
import { isOverlayPermissionGranted, requestOverlayPermission } from 'react-native-can-draw-overlays';

...
let granted = await isOverlayPermissionGranted();
if (!granted) {
  granted = await requestOverlayPermission()
}
...
```
