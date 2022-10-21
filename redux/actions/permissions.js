import { CAMERA } from "../constants";

export const camera_granted = (res) => {
  return {
    type: CAMERA,
    payload: {
      grant: res,
    },
  };
};
