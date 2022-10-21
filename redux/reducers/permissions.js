import {
  ACCELEROMETER,
  CAMERA,
  GYROSCOPE,
  NETWORK,
  STORAGE,
} from "../constants";

const initialState = {
  camera: false,
  storage: false,
  accelerometer: false,
  gyroscope: false,
  network: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CAMERA:
      return {
        ...state,
        camera: action.payload.grant,
      };
    case STORAGE:
      return {
        ...state,
        storage: action.payload.grant,
      };
    case ACCELEROMETER:
      return {
        ...state,
        accelerometer: action.payload.grant,
      };
    case GYROSCOPE:
      return {
        ...state,
        gyroscope: action.payload.grant,
      };
    case NETWORK:
      return {
        ...state,
        network: action.payload.grant,
      };
    default:
      return state;
  }
};
