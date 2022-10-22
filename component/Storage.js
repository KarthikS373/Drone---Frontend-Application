// Reference link -> https://docs.expo.dev/versions/latest/sdk/filesystem/#storage-access-framework--android-only-
import { View, Text,Button } from "react-native";
import React, { useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";

const Storage = ({navigation}) => {
  const [diskAnalysis, setDiskAnalysis] = useState(null);

  useEffect(() => {
    FileSystem.getFreeDiskStorageAsync()
      .then((freeDiskStorage) => {
        setDiskAnalysis(`${(freeDiskStorage / (1024 * 1024 * 1000)).toPrecision(4)} GB left`);
      })
      .catch((err) => {
        setDiskAnalysis(null);
      });
  }, []);

  return (
    <View>
      <Text style={{ textAlign: "center" }}>Storage</Text>
      <Text style={{ textAlign: "center" }}>
        {diskAnalysis ? diskAnalysis : "Permission not granted"}
      </Text>
      <Button
        title="Proximity"
        onPress={() => navigation.navigate('Proximity')}
      />
    </View>
  );
};

export default Storage;
