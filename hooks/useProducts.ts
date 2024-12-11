import { useContext, useEffect, useState } from "react";
import { Product } from "../interfaces/product.interface";
import { getProductsService } from "../services/getProducts.service";
import AppContext from "../utils/AppContext";
import { StateAppContext } from "../utils/AppContext/useInitialStateAppContext";

export const useProducts = (navigation: {
  navigate: (path: string) => void;
}) => {
  const { token, auth }: StateAppContext = useContext<any>(AppContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([]);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [categories, setCategories] = useState<{ category: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<{
    category: string;
  }>({ category: "Todas" });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setShowLoader(true);
    const { data } = await getProductsService();
    if (data.messageError !== "" && data.error) {
      setShowModal(true);
      setMessageModal(data.messageError);
      setShowLoader(false);
      return;
    }
    if (data.products.length > 0) {
      const uniqueCategories = new Set<string>();
      data.products.forEach((product) => {
        uniqueCategories.add(product.category);
      });
      const arrayCategories = Array.from(uniqueCategories).map((category) => ({
        category,
      }));
      setCategories(arrayCategories);
      setProducts(data.products);
      setFilteredProducts(data.products);
    } else {
      setShowModal(true);
      setMessageModal("No existen productos disponibles.");
      setProducts([]);
      setFilteredProducts([]);
    }
    setShowLoader(false);
  };

  const onClickDeleteToken = () => {
    auth("");
  };

  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  const onClickCategory = (category: { category: string }) => {
    setSelectedCategory(category);
    if (category.category === "Todas") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (el) => el.category === category.category
      );
      setFilteredProducts(filtered);
    }
  };

  const isActiveAllTab = selectedCategory.category === "Todas";

  return {
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
    onClickDeleteToken,
    openCloseModal,
    onClickCategory,
  };
};
