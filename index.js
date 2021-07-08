import { NativeModules } from 'react-native';

export const requestOverlayPermission = () => {
  return NativeModules.CanDrawOverlays.requestOverlayPermission();
}

export const isOverlayPermissionGranted = () => {
  return NativeModules.CanDrawOverlays.isOverlayPermissionGranted();
}
