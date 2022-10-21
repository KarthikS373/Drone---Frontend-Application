import { PermissionsAndroid } from "react-native";
import { camera_granted } from "../redux/actions/permissions";

export const promptCameraPermission = () =>
    new Promise(async (resolve, reject) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        resolve("Granted");
      } else {
        reject("Rejected");
      }
    } catch (err) {
      reject(err);
    }
  });
