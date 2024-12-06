const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  BLOG: "/blog",
  ABOUT: "/about",
  FAQ: "/faq",
  CART: "/cart",
  FURNITURE_DETAIL: (slug: string) => `/furnitures/${slug}`,
};

export default ROUTES;
