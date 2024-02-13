import {
  faBreadSlice,
  faFish,
  faJar,
  faJarWheat,
  faKitchenSet,
  faBottleDroplet,
  faPepperHot,
  faBacon,
  faBurger,
  faMortarPestle,
  faEgg,
  faCheese,
  faLeaf,
  faBowlFood,
  faPizzaSlice,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

export const toast = [
  {
    name: "Smoked Salmon Avocado Toast",
    image:
      "https://d3lbhvavid9616.cloudfront.net/assets/products/58118/1631037298859.jpg",
    ingredientList: [
      {
        icon: faBreadSlice,
        ingredient: "Sourdough (cafe)",
        conversion: 0.083,
        detail:
          "1 unit of Sourdough (cafe) can make 8 toasts in ATX, then 12 in all other regions",
      },
      {
        icon: faFish,
        ingredient: "Smoke Salmon (cafe)",
        conversion: 0.25,
        detail:
          "1 unit of Smoke Salmon (cafe) can make 4 Smoked Salmon Avocado Toasts",
      },
      {
        icon: faJar,
        ingredient: "Pickle Onion (cafe)",
        conversion: 0.083,
        detail:
          "1 unit of Pickle Onion (cafe) can make 12 Smoked Salmon Avocado Toasts",
      },
      {
        icon: faJarWheat,
        ingredient: "Everything Spice (cafe)",
        conversion: 0.043,
        detail:
          "1 unit of Everything Spice (cafe) can make 23 Smoked Salmon Avocado Toasts",
      },
      {
        icon: faKitchenSet,
        ingredient: "Avocado Mash Kit (cafe)",
        conversion: 0.167,
        detail:
          "1 unit of Avocado Mash Kit (cafe) can make 6 Smoked Salmon Avocado Toasts",
      },
    ],
  },
  {
    name: "Original Avocado Toast",
    image:
      "https://d3lbhvavid9616.cloudfront.net/assets/products/58115/1631036609307.jpg",
    ingredientList: [
      {
        icon: faBreadSlice,
        ingredient: "Sourdough (cafe)",
        conversion: 0.083,
        detail:
          "1 unit of Sourdough (cafe) can make 8 toasts in ATX, then 12 in all other regions",
      },
      {
        icon: faKitchenSet,
        ingredient: "Avocado Mash Kit (cafe)",
        conversion: 0.167,
        detail:
          "1 unit of Avocado Mash Kit (cafe) can make 6 Original Avocado Toasts",
      },
      {
        icon: faBottleDroplet,
        ingredient: "Olive Oil (cafe)",
        conversion: 0.007,
        detail:
          "1 unit of Olive Oil (cafe) can make 135 Original Avocado Toasts",
      },
    ],
  },
  {
    name: "Bacon Tomato Avocado Toast",
    image:
      "https://d3lbhvavid9616.cloudfront.net/assets/products/58116/1631037083763.jpg",
    ingredientList: [
      {
        icon: faBreadSlice,
        ingredient: "Sourdough (cafe)",
        conversion: 0.083,
        detail:
          "1 unit of Sourdough (cafe) can make 8 toasts in ATX, then 12 in all other regions",
      },
      {
        icon: faJar,
        ingredient: "Herby Mayo (cafe)",
        conversion: 0.167,
        detail:
          "1 unit of Herby Mayo (cafe) can make 6 Bacon Tomato Avocado Toasts",
      },
      {
        icon: faPepperHot,
        ingredient: "Banana Pepper Relish (cafe)",
        conversion: 0.167,
        detail:
          "1 unit of Banana Pepper Relish (cafe) can make 6 Bacon Tomato Avocado Toasts",
      },
      {
        icon: faBacon,
        ingredient: "Bacon (cafe)",
        conversion: 0.25,
        detail: "1 unit of Bacon (cafe) can make 4 Bacon Tomato Avocado Toasts",
      },
      {
        icon: faKitchenSet,
        ingredient: "Avocado Mash Kit (cafe)",
        conversion: 0.167,
        detail:
          "1 unit of Avocado Mash Kit (cafe) can make 6 Bacon Tomato Avocado Toasts",
      },
    ],
  },
];

export const cafeSandwiches = [
  {
    name: "Veggie Brekkie",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1675095050/web/items/hg1qgy4lckozgy6evhnq.jpg",
    ingredientList: [
      {
        icon: faBurger,
        ingredient: "Seeded Buns (cafe)",
        conversion: 1.0,
        detail: "1 unit of Seeded Buns (cafe) can make 1 Veggie Brekkie",
      },
      {
        icon: faMortarPestle,
        ingredient: "Pesto (pizza)",
        conversion: 0.083,
        detail: "1 unit of Pesto (pizza) can make 12 Veggie Brekkies",
      },
      {
        icon: faEgg,
        ingredient: "Egg Patties (cafe)",
        conversion: 1.0,
        detail: "1 unit of Egg Patties (cafe) can make 1 Veggie Brekkie",
      },
      {
        icon: faCheese,
        ingredient: "Italian Cheese (cafe)",
        conversion: 0.009,
        detail: "1 unit of Italian Cheese (cafe) can make 113 Veggie Brekkies",
      },
      {
        icon: faJar,
        ingredient: "Roasted Cherry Tomato",
        conversion: 0.143,
        detail: "1 unit of Roasted Cherry Tomato can make 7 Veggie Brekkies",
      },
      {
        icon: faLeaf,
        ingredient: "Arugula (cafe)",
        conversion: 0.2,
        detail: "1 unit of Arugula (cafe) can make 5 Veggie Brekkies",
      },
    ],
  },
  {
    name: "Sausage Egg & Cheese Sandwich",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1706197450/web/items/e6e8sbljgburx2uak5ak.jpg",
    ingredientList: [
      {
        icon: faBurger,
        ingredient: "Seeded Buns (cafe)",
        conversion: 1.0,
        detail:
          "1 unit of Seeded Buns (cafe) can make 1 Sausage Egg & Cheese Sandwich",
      },
      {
        icon: faBurger,
        ingredient: "Sausage Patties (cafe)",
        conversion: 1.0,
        detail:
          "1 unit of Sausage Patties (cafe) can make 1 Sausage Egg & Cheese Sandwich",
      },
      {
        icon: faJar,
        ingredient: "Maple Butter (cafe)",
        conversion: 0.063,
        detail:
          "1 unit of Maple Butter (cafe) can make 16 Sausage Egg & Cheese Sandwichs",
      },
      {
        icon: faEgg,
        ingredient: "Egg Patties (cafe)",
        conversion: 1.0,
        detail:
          "1 unit of Egg Patties (cafe) can make 1 Sausage Egg & Cheese Sandwich",
      },
      {
        icon: faCheese,
        ingredient: "Cheddar Cheese Slices (cafe)",
        conversion: 0.031,
        detail:
          "1 unit of Cheddar Cheese Slices (cafe) can make 32 Sausage Egg & Cheese Sandwichs",
      },
    ],
  },
];

export const bagel = [
  {
    name: "Plain Bagel",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1679505173/web/items/zieodtcgblnpg94fw64c.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Cream Cheese (cafe)",
        conversion: 0.25,
        detail: "1 unit of Cream Cheese (cafe) can support 4 Plain Bagels",
      },
    ],
  },
  {
    name: "Everything Bagel",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1679505196/web/items/qrzlgyo9kg723oyichno.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Cream Cheese (cafe)",
        conversion: 0.25,
        detail: "1 unit of Cream Cheese (cafe) can support 4 Everything Bagels",
      },
    ],
  },
  {
    name: "Cheddar & Jalapeno Bagel",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1679505173/web/items/zieodtcgblnpg94fw64c.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Cream Cheese (cafe)",
        conversion: 0.25,
        detail:
          "1 unit of Cream Cheese (cafe) can support 4 Cheddar & Jalapeno Bagels",
      },
    ],
  },
];

export const cafeSalad = [
  {
    name: "Elote Caesar Salad",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1687884846/web/items/kfx3vcuxvgicvt5relii.jpg",
    ingredientList: [
      {
        icon: faBowlFood,
        ingredient: "Chicken Add on (cafe)",
        conversion: 0.056,
        detail:
          "1 unit of Chicken Add on (cafe) can make 18 Elote Caesar Salads",
      },
    ],
  },
];

export const breakfastTacos = [
  {
    name: "Breakfast Taco - Migas",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1646152814/products/dqs4siq2d8khtyystmvk.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Salsa Roja (cafe)",
        conversion: 0.013,
        detail:
          "1 unit of Salsa Roja (cafe) can support 80 Breakfast Taco - Migas",
      },
      {
        icon: faJar,
        ingredient: "Salsa Verde (cafe)",
        conversion: 0.019,
        detail:
          "1 unit of Salsa Verde (cafe) can support 54 Breakfast Taco - Migas",
      },
    ],
  },
  {
    name: "Breakfast Taco - Carnitas",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1675094983/web/items/pvy37l7513ovuslzbkrc.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Salsa Roja (cafe)",
        conversion: 0.013,
        detail:
          "1 unit of Salsa Roja (cafe) can support 80 Breakfast Taco - Carnitas",
      },
      {
        icon: faJar,
        ingredient: "Salsa Verde (cafe)",
        conversion: 0.019,
        detail:
          "1 unit of Salsa Verde (cafe) can support 54 Breakfast Taco - Carnitas",
      },
    ],
  },
  {
    name: "Breakfast Taco - Bean & Cheese",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1646152768/products/tgdvgvgwvgne65epos8r.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Salsa Roja (cafe)",
        conversion: 0.013,
        detail:
          "1 unit of Salsa Roja (cafe) can support 80 Breakfast Taco - Bean & Cheese",
      },
      {
        icon: faJar,
        ingredient: "Salsa Verde (cafe)",
        conversion: 0.019,
        detail:
          "1 unit of Salsa Verde (cafe) can support 54 Breakfast Taco - Bean & Cheese",
      },
    ],
  },
  {
    name: "Breakfast Taco - Bacon",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1646152863/products/x2q38zjhisps838tlgct.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Salsa Roja (cafe)",
        conversion: 0.013,
        detail:
          "1 unit of Salsa Roja (cafe) can support 80 Breakfast Taco - Bacon",
      },
      {
        icon: faJar,
        ingredient: "Salsa Verde (cafe)",
        conversion: 0.019,
        detail:
          "1 unit of Salsa Verde (cafe) can support 54 Breakfast Taco - Bacon",
      },
    ],
  },
];

export const cafeBowl = [
  {
    name: "Harvest Cous Cous Bowl",
    image:
      "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1691001529/web/items/kxck4kzpjv4gptm1ugq7.jpg",
    ingredientList: [
      {
        icon: faBowlFood,
        ingredient: "Chicken Add on (cafe)",
        conversion: 0.056,
        detail:
          "1 unit of Chicken Add on (cafe) can make 18 Harvest Cous Cous Bowl",
      },
    ],
  },
];

export const cafePizza = [
  {
    name: "Pepperoni Pizza - Whole",
    image: "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1682025288/web/items/mtfnnmm3rkhyjuxww59j.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Pizza Sauce (cafe)",
        conversion: 0.167,
        detail: "1 unit of Pizza Sauce (cafe) can make 6 Pepperoni Pizza - Whole"
      },
      {
        icon: faPizzaSlice,
        ingredient: "Pizza Dough (cafe)",
        conversion: 1.000,
        detail: "1 unit of Pizza Dough (cafe) can make 1 Pepperoni Pizza - Whole"
      },
      {
        icon: faPizzaSlice,
        ingredient: "Pepperoni (cafe)",
        conversion: 0.125,
        detail: "1 unit of Pepperoni (cafe) can make 8 Pepperoni Pizza - Whole"
      },
      {
        icon: faCheese,
        ingredient: "Parmesan (cafe)",
        conversion: 0.200,
        detail: "1 unit of Parmesan (cafe) can make 5 Pepperoni Pizza - Whole"
      },
      {
        icon: faCheese,
        ingredient: "Italian Cheese (cafe)",
        conversion: 0.045,
        detail: "1 unit of Italian Cheese (cafe) can make 22 Pepperoni Pizza - Whole"
      }
    ]
  },
  {
    name: "Pepperoni Pizza - Slice",
    image: "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1682025316/web/items/afcn6c3drj76si892ntw.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Pizza Sauce (cafe)",
        conversion: 0.042,
        detail: "1 unit of Pizza Sauce (cafe) can make 24 Pepperoni Pizza - Slice"
      },
      {
        icon: faPizzaSlice,
        ingredient: "Pizza Dough (cafe)",
        conversion: 0.250,
        detail: "1 unit of Pizza Dough (cafe) can make 4 Pepperoni Pizza - Slice"
      },
      {
        icon: faPizzaSlice,
        ingredient: "Pepperoni (cafe)",
        conversion: 0.167,
        detail: "1 unit of Pepperoni (cafe) can make 6 Pepperoni Pizza - Slice"
      },
      {
        icon: faCheese,
        ingredient: "Parmesan (cafe)",
        conversion: 0.050,
        detail: "1 unit of Parmesan (cafe) can make 20 Pepperoni Pizza - Slice"
      },
      {
        icon: faCheese,
        ingredient: "Italian Cheese (cafe)",
        conversion: 0.016,
        detail: "1 unit of Italian Cheese (cafe) can make 63 Pepperoni Pizza - Slice"
      }
    ]
  },
  {
    name: "Garden Pesto Pizza - Whole",
    image: "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1682025388/web/items/pbpscekefpdc2ukfgpk7.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Roasted Cherry Tomato",
        conversion: 0.250,
        detail: "1 unit of Roasted Cherry Tomato can make 4 Garden Pesto Pizza - Whole"
      },
      {
        icon: faPizzaSlice,
        ingredient: "Pizza Dough (cafe)",
        conversion: 1.000,
        detail: "1 unit of Pizza Dough (cafe) can make 1 Garden Pesto Pizza - Whole"
      },
      {
        icon: faJar,
        ingredient: "Pesto (pizza)",
        conversion: 0.571,
        detail: "1 unit of Pesto (pizza) can make 2 Garden Pesto Pizza - Whole"
      },
      {
        icon: faCheese,
        ingredient: "Italian Cheese (cafe)",
        conversion: 0.045,
        detail: "1 unit of Italian Cheese (cafe) can make 22 Garden Pesto Pizza - Whole"
      },
      {
        icon: faLeaf,
        ingredient: "Arugula (cafe)",
        conversion: 0.364,
        detail: "1 unit of Arugula (cafe) can make 3 Garden Pesto Pizza - Whole"
      }
    ]
  },
  {
    name: "Garden Pesto Pizza - Slice",
    image: "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1682025368/web/items/vbygwabfsiy0tc8fknpl.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Roasted Cherry Tomato",
        conversion: 0.100,
        detail: "1 unit of Roasted Cherry Tomato can make 10 Garden Pesto Pizza - Slice"
      },
      {
        icon: faPizzaSlice,
        ingredient: "Pizza Dough (cafe)",
        conversion: 0.250,
        detail: "1 unit of Pizza Dough (cafe) can make 4 Garden Pesto Pizza - Slice"
      },
      {
        icon: faJar,
        ingredient: "Pesto (pizza)",
        conversion: 0.143,
        detail: "1 unit of Pesto (pizza) can make 7 Garden Pesto Pizza - Slice"
      },
      {
        icon: faCheese,
        ingredient: "Italian Cheese (cafe)",
        conversion: 0.016,
        detail: "1 unit of Italian Cheese (cafe) can make 63 Garden Pesto Pizza - Slice"
      },
      {
        icon: faLeaf,
        ingredient: "Arugula (cafe)",
        conversion: 0.091,
        detail: "1 unit of Arugula (cafe) can make 11 Garden Pesto Pizza - Slice"
      }
    ]
  },
  {
    name: "Cheese Pizza - Whole",
    image: "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1682025344/web/items/ke7douzsd8zbqsvu8c5x.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Pizza Sauce (cafe)",
        conversion: 0.167,
        detail: "1 unit of Pizza Sauce (cafe) can make 6 Cheese Pizza - Whole"
      },
      {
        icon: faPizzaSlice,
        ingredient: "Pizza Dough (cafe)",
        conversion: 1.000,
        detail: "1 unit of Pizza Dough (cafe) can make 1 Cheese Pizza - Whole"
      },
      {
        icon: faCheese,
        ingredient: "Italian Cheese (cafe)",
        conversion: 0.045,
        detail: "1 unit of Italian Cheese (cafe) can make 22 Cheese Pizza - Whole"
      }
    ]
  },
  {
    name: "Cheese Pizza - Slice",
    image: "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1682025015/web/items/f9eouivqrnyw9vslbt0x.jpg",
    ingredientList: [
      {
        icon: faJar,
        ingredient: "Pizza Sauce (cafe)",
        conversion: 0.042,
        detail: "1 unit of Pizza Sauce (cafe) can make 24 Cheese Pizza - Slice"
      },
      {
        icon: faPizzaSlice,
        ingredient: "Pizza Dough (cafe)",
        conversion: 0.250,
        detail: "1 unit of Pizza Dough (cafe) can make 4 Cheese Pizza - Slice"
      },
      {
        icon: faCheese,
        ingredient: "Italian Cheese (cafe)",
        conversion: 0.016,
        detail: "1 unit of Italian Cheese (cafe) can make 63 Cheese Pizza - Slice"
      }
    ]
  }
];

export const cafeCoffee = [
    {
      name: "Foxtrot - Draft Cold Brew",
      image: "https://res.cloudinary.com/dbtk9pyvu/image/upload/v1682608486/web/items/fsvvotmxtobhzoqi10xp.jpg",
      ingredientList: [
        {
          icon: faMugHot,
          ingredient: "Foxtrot (IN STORE USE ONLY) - La Colombe Cold Brew Concentrate",
          conversion: 0.125,
          detail: "1 unit of Foxtrot (IN STORE USE ONLY) - La Colombe Cold Brew Concentrate can make 8 Foxtrot - Draft Cold Brew"
        }
      ]
    }
  ];
  