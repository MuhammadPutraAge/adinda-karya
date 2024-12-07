const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  BLOG: "/blog",
  ABOUT: "/about",
  FAQ: "/faq",
  CART: "/cart",
  PRODUCT_DETAIL: (slug: string) => `/shop/${slug}`,
  TRANSACTIONS: "/transactions",
  FAVORITES: "/favorites",
};

export default ROUTES;
