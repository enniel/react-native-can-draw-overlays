declare module 'react-native-can-draw-overlays' {
  export function isOverlayPermissionGranted(): Promise<boolean>;

  export function requestOverlayPermission(): Promise<boolean>;
}
