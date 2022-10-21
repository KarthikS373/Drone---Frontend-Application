// Reference link -> https://www.npmjs.com/package/react-native-proximity
// Thoughs -> The above lib is read only git repo for a long time and i am not sure if we should use it or not
import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const ProximitySensor = () => {
  const [proximity, setProximity] = useState(0);

  useEffect(() => {}, []);

  return (
    <View>
      <Text>Proximity : {proximity}</Text>
    </View>
  );
};

export default ProximitySensor;
