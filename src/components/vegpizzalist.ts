export interface PizzaItem {
    image: string;
    heading: string;
    veg: boolean;
    price: number;
    text: string;
  }
  
  export const vegPizzas: PizzaItem[] = [
    {
      image: "/Farmhouse.jpg",
      heading: "Veg Farmhouse",
      veg: true,
      price: 220,
      text: "A delicious mix of capsicum, onion, tomato, and mushrooms on a cheesy base.",
    },
    {
      image: "/Paneer_Makhni.jpg",
      heading: "Paneer Makhani",
      veg: true,
      price: 250,
      text: "Creamy makhani sauce topped with spicy paneer chunks and onions.",
    },
    {
      image: "/Margherit.jpg",
      heading: "Classic Margherita",
      veg: true,
      price: 180,
      text: "Simple yet iconic — mozzarella cheese with basil and tomato sauce.",
    },
    {
      image: "/Veg_Extravaganz.jpg",
      heading: "Veggie Delight",
      veg: true,
      price: 230,
      text: "A garden-fresh combination of corn, olives, onions, and bell peppers.",
    },
    {
      image: "/Double_Cheese_Margherita.jpg",
      heading: "Double Cheese",
      veg: true,
      price: 260,
      text: "Oozing with molten cheese, this one’s for true cheese lovers.",
    },
    {
      image: "/Mexican_Green_Wave.jpg",
      heading: "Mexican Green Wave",
      veg: true,
      price: 240,
      text: "Mexican herbs, crunchy veggies, and jalapeños for that spicy kick.",
    },
    {
      image: "/Peppy_Paneer.jpg",
      heading: "Peppy Paneer",
      veg: true,
      price: 245,
      text: "Soft paneer cubes with capsicum and red paprika on a spicy base.",
    },
    {
      image: "/IndianTandooriPaneer.jpg",
      heading: "Tandoori Veggie",
      veg: true,
      price: 255,
      text: "A desi twist with tandoori sauce and grilled veggies.",
    },
  ];
  