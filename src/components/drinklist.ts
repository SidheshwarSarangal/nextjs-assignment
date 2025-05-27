export interface DrinkItem {
  image: string;
  heading: string;
  veg: boolean;
  price: number;
  text: string;
}

export const drinks: DrinkItem[] = [
  {
    image: "/coca-cola-the-coca-cola-company-bottle-drink.jpg",
    heading: "Coca Cola",
    veg: true,
    price: 60,
    text: "A classic carbonated soft drink with a bold, refreshing cola flavor. Perfectly chilled to quench your thirst. You will get 1L."
  },
  {
    image: "/fizz.jpg",
    heading: "Appy",
    price: 60,
    veg: true,
    text: "A sparkling apple juice beverage with a crisp and fruity taste, loved for its tangy-sweet punch. You will get 1L."
  },
  {
    image: "/sprite-iphone-12-pro-max.jpg",
    heading: "Sprite",
    price: 60,
    veg: true,
    text: "A lemon-lime soda that delivers a clean, crisp taste with no caffeine—cool and invigorating. You will get 1L."
  },
  {
    image: "/fanta11.jpg",
    heading: "Fanta",
    price: 60,
    veg: true,
    text: "Bursting with orange flavor, this fizzy drink is a favorite for those who love fruity, tangy refreshments. You will get 1L."
  },
  {
    image: "/mazaa11.jpg",
    heading: "Maaza",
    price: 55,
    veg: true,
    text: "A rich and pulpy mango drink offering a delightful tropical experience in every sip. You will get 1L."
  },
  {
    image: "/7uppppp.jpeg",
    heading: "7 Up",
    price: 60,
    veg: true,
    text: "A caffeine-free lemon-lime soda with a light, crisp taste—perfect for a cool, fizzy refreshment. You will get 1L."
  },
];
