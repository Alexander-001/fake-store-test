import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Loader from "../../components/Loader";
import WarningModal from "../../components/Modal/WarningModal";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { NavigationI } from "../../interfaces/login.interface";
import { isLoggedIn } from "../../utils";
import { styles } from "./styles";

const Products: React.FC<NavigationI> = ({ navigation }) => {
  const {
    //* Variables
    token,
    showLoader,
    showModal,
    messageModal,
    categories,
    filteredProducts,
    selectedCategory,
    isActiveAllTab,

    //* Functions
    openCloseModal,
    onClickCategory,
  } = useProducts(navigation);

  isLoggedIn(token, navigation);
  return (
    <TouchableWithoutFeedback>
      {showLoader ? (
        <Loader />
      ) : (
        <ScrollView style={styles.list}>
          <Text style={styles.title}>Productos disponibles</Text>
          <View style={styles.main}>
            {showModal && (
              <WarningModal
                showModal={showModal}
                openCloseModal={openCloseModal}
                messageModal={messageModal}
              />
            )}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
            >
              <TouchableOpacity
                style={[styles.tab, isActiveAllTab && styles.activeTab]}
                onPress={() => onClickCategory({ category: "Todas" })}
              >
                <Text
                  style={[
                    styles.tabText,
                    isActiveAllTab && styles.activeTabText,
                  ]}
                >
                  All
                </Text>
              </TouchableOpacity>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => onClickCategory(category)}
                  style={[
                    styles.tab,
                    selectedCategory === category && styles.activeTab,
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      selectedCategory === category && styles.activeTabText,
                    ]}
                  >
                    {category.category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.contentProducts}>
              {filteredProducts.map((element, key) => (
                <ProductCard product={element} key={key} />
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </TouchableWithoutFeedback>
  );
};

export default Products;
