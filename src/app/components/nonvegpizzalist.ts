export interface PizzaItem {
    image: string;
    heading: string;
    veg: boolean;
    price: number;
    text: string;
  }
  
  export const nonVegPizzas: PizzaItem[] = [
    {
      image: "/product-jpeg.jpg",
      heading: "Chicken Tikka",
      veg: false,
      price: 300,
      text: "Tender chicken tikka chunks cooked in a spicy sauce on a cheesy base.",
    },
    {
      image: "/PepperBarbecueChicken.jpg",
      heading: "Peri Peri",
      veg: false,
      price: 320,
      text: "Classic pepperoni slices on a tomato and cheese base for meat lovers.",
    },
    {
      image: "/BBQ.jpg",
      heading: "BBQ Chicken",
      veg: false,
      price: 310,
      text: "Grilled chicken in smoky BBQ sauce with onions and peppers.",
    },
    {
      image: "/Chicdominator_B_260216.jpg",
      heading: "Meat Feast",
      veg: false,
      price: 350,
      text: "Loaded with pepperoni, chicken, and spicy sausages for the ultimate feast.",
    },
    {
      image: "/GG06243.jpg",
      heading: "Spicy Chicken",
      veg: false,
      price: 300,
      text: "Spicy marinated chicken pieces with red chili flakes and cheese.",
    },
    {
      image: "/GG06245.jpg",
      heading: "Chicken Tandoori",
      veg: false,
      price: 315,
      text: "Succulent BBQ chicken topped with fresh veggies and cheese.",
    }
  ];
  