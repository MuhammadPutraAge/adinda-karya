const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  BLOG: "/blog",
  ABOUT: "/about",
  FAQ: "/faq",
  CART: "/cart",
  PRODUCT_DETAIL: (slug: string) => `/shop/${slug}`,
};

export default ROUTES;
