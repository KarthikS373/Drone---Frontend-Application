import { PermissionsAndroid, Platform } from "react-native";

export default checkPermission = (ID) =>
  new Promise(async (resolve, reject) => {
    if (Platform.OS == "android") {
      const permissionAndroid = await PermissionsAndroid.check(
        `android.permission.${ID}`
      );
      if (permissionAndroid != PermissionsAndroid.RESULTS.granted) {
        reject("reject");
      } else {
        resolve("accept");
      }
    }
  });

export const askPermissions = async (ID) => {
  if (Platform.OS == "android") {
    const permissionAndroid = await PermissionsAndroid.check(
      `android.permission.${ID}`
    );
    if (permissionAndroid != PermissionsAndroid.RESULTS.granted) {
      return false;
    } else {
      return true;
    }
  }
};
