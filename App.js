import Gryoscope from './component/Gyroscope'
import Accelerometer from './component/Accelerometer'
import Camera from './component/Camera'
import Network from './component/Network'

export default function App() {
  return (
    <>
      <Gryoscope/>
      <Accelerometer/>
      <Network/>
      <Camera/>
    </>
  );
}
