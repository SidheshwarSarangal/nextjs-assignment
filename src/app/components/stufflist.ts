export interface StuffItem {
    image: string;
    heading: string;
    text: string;
    price: number;
    veg: boolean;
  }
  
  export const stuff: StuffItem[] = [
    {
      image: "/Cafe-style-cold-coffee-with-icecream.jpg",
      heading: "Cold Coffee",
      text: "Chilled coffee blended with milk and ice.",
      price: 90,
      veg: true,
    },
    {
      image: "/icetea.jpg",
      heading: "Ice Tea",
      text: "Refreshing lemon iced tea served cold.",
      price: 85,
      veg: true,
    },
    {
      image: "/chocomilk.webp",
      heading: "Chocolate Milk Shake",
      text: "Thick chocolate shake made with creamy milk.",
      price: 100,
      veg: true,
    },
    
    {
      image: "/pastry.jpeg",
      heading: "Truffle Pastry",
      text: "Delicious and fluffy pastry filled with cream or chocolate.",
      price: 75,
      veg: true,
    },
  ];
  