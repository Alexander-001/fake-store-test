import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View } from "react-native";
import { useCloseSession } from "./hooks/useCloseSession";
import { styles } from "./styles";

const CloseSessionButton = (navigation: {
  navigate: (path: string) => void;
}) => {
  const { onClickCloseSession } = useCloseSession(navigation);
  return (
    <View style={styles.contentButton} onTouchStart={onClickCloseSession}>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </View>
  );
};

export default CloseSessionButton;
