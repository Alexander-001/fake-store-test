import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button } from "native-base";
import React from "react";
import { Modal, Text, View } from "react-native";
import { styles } from "./styles";

interface WarningModalI {
  showModal: boolean;
  messageModal: string;
  okButton?: boolean;
  openCloseModal: () => void;
  onClickOkButton?: () => void;
}

const WarningModal: React.FC<WarningModalI> = ({
  showModal,
  messageModal,
  okButton,
  openCloseModal,
  onClickOkButton,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={openCloseModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button style={styles.btnClose} onTouchStart={openCloseModal}>
              <Text style={{ fontSize: 25 }}>X</Text>
            </Button>
            <View style={styles.contentInfo}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size={50}
                style={styles.iconExclamation}
              />
              <Text style={styles.modalText}>{messageModal}</Text>
              <Button onTouchEnd={openCloseModal} style={styles.button}>
                <Text style={styles.textButton}>Cerrar</Text>
              </Button>
              {okButton && (
                <Button onTouchEnd={onClickOkButton} style={styles.okButton}>
                  <Text style={styles.textButton}>Aceptar</Text>
                </Button>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WarningModal;
