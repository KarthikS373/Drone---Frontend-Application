import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Check from "../component/Check";
import { Checks } from "../utils/constants";
import { promptCameraPermission } from "../utils/askPermissions";
import { camera_granted } from "../redux/actions/permissions";

export default (props) => {
  const dispatch = useDispatch();
  const camera = useSelector((store) => store.permissions.camera);
  console.log(camera);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Check
          onClick={
            camera
              ? () => alert("Working")
              : () => {
                  console.log(camera);
                  promptCameraPermission().then((res) => {
                    console.log(res);
                    dispatch(camera_granted(res));
                  });
                }
          }
          result={camera}
          title={Checks[0].name}
          desc={Checks[0].desc}
          key={Checks[0].id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
