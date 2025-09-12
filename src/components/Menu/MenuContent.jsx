import EggCombo from '../../assets/images/menu-images/eggcombo.png';
import HealthyPicks from '../../assets/images/menu-images/healthy-picks.png';
import BreakFastBagels from '../../assets/images/menu-images/breakfast-bagels.png';
import BiscuitsGravy from '../../assets/images/menu-images/biscuits-gravy.png';
import ButterMilkPancakes from '../../assets/images/menu-images/butter-milk-pancakes.png';
import FrenchToast from '../../assets/images/menu-images/french-toast.png';
import BelgianWaffles from '../../assets/images/menu-images/belgian-waffles.png';




const MenuData = [
  {
    title: "Egg",
    span: "Combos",
    sideDes: false,
    lunchSpecials: false,
    background: false,
    addOn: true,
    addOnText: "Add Any Topping to Pancakes $1.99 Each",
    menuImg: EggCombo,
    menuList: [
      {
        menuTitle: "TWO EGG BREAKFAST WITH BACON",
        menuDesc:
          "Bacon, two eggs your way, served with hash browns or side of fresh fruit and your choice of toast or pancakes",
        price: "11.99",
      },
      {
        menuTitle: "TWO EGG BREAKFAST WITH SAUSAGE",
        menuDesc:
          "Sausage (links or patties), two eggs your way, served with hash browns or side of fresh fruit and your choice of toast or pancakes",
        price: "11.99",
      },
      {
        menuTitle: "TWO EGG BREAKFAST",
        menuDesc:
          "Two eggs your way, served with hash browns or side of fresh fruit and your choice of toast or pancakes",
        price: "10.99",
      },
      {
        menuTitle: "HAM STEAK & EGGS",
        menuDesc:
          "Ham Steak, two eggs your way, served with hash browns or side of fresh fruit and your choice of toast or pancakes",
        price: "12.99",
      },
      {
        menuTitle: "CORNED BEEF HASH & EGGS",
        menuDesc:
          "Corned beef hash, two eggs your way, served with hash browns or side of fresh fruit and your choice of toast or pancakes",
        price: "15.99",
      },
    ],
  },
  {
    title: "Healthy",
    span: "Picks",
    sideDes: false,
    lunchSpecials: false,
    background: true,
    addOn: false,
    menuImg: HealthyPicks,
    menuList: [
      {
        menuTitle: "OATMEAL",
        menuDesc: "Cinnamon or brown sugar, with fresh fruit",
        price: "9.99",
      },
      {
        menuTitle: "EGG WHITE SCRAMBLE ",
        menuDesc: "Two egg whites scrambled with two turkey patties, with fresh fruit",
        price: "11.99",
      },
      {
        menuTitle: "FRESH FRUIT AND YOGURT",
        menuDesc: " Yogurt, fresh strawberries, bananas topped with granola",
        price: "10.99",
      },
    ],
  },
  {
    title: "Breakfast",
    span: "Bagels",
    sideDes: false,
    lunchSpecials: false,
    background: false,
    addOn: false,
    menuImg: BreakFastBagels,
    menuList: [
      {
        menuTitle: "BAGEL, EGG & CHEESE SANDWICH",
        menuDesc: "Two fried eggs, American cheese",
        price: "9.99",
      },
      {
        menuTitle: "BAGEL, MEAT, EGG & CHEESE SANDWICH",
        menuDesc: "Two fried eggs, choice of ham or bacon or sausage, American cheese",
        price: "11.99",
      },
      {
        menuTitle: "BAGEL & EGG WHITE SANDWICH",
        menuDesc: "Two egg whites, spinach, feta cheese, turkey sausage",
        price: "12.99",
      },
    ],
  },
  {
    title: "Biscuits &",
    span: "Gravy",
    sideDes: false,
    lunchSpecials: false,
    background: true,
    addOn: false,
    menuImg: BiscuitsGravy,
    menuList: [
      { menuTitle: "ONE", menuDesc: "", price: "6.99" },
      { menuTitle: "TWO", menuDesc: "", price: "8.99" },
      {
        menuTitle: "BISCUIT COMBO",
        menuDesc:
          "Two eggs any style, two biscuits, gravy, two bacon, two sausage links",
        price: "13.99",
      },
      {
        menuTitle: "BISCUIT COMBO",
        menuDesc:
          "Two eggs any style over two biscuits, gravy, hash browns (stacked)",
        price: "12.99",
      },
    ],
  },
  {
    title: "Buttermilk",
    span: "Pancakes",
    sideDes: false,
    lunchSpecials: false,
    background: false,
    addOn: true,
    addOnText: "Add Any Topping to Pancakes $1.99 Each",
    menuImg: ButterMilkPancakes,
    menuList: [
      { menuTitle: "2 ORIGINAL PANCAKES", menuDesc: "", price: "8.99" },
      { menuTitle: "2 PECAN (Inside)", menuDesc: "", price: "11.99" },
      { menuTitle: "2 FRESH STRAWBERRY", menuDesc: "", price: "12.99", },
      { menuTitle: "2 BACON (inside)", menuDesc: "", price: "12.99" },
      { menuTitle: "2 FRESH BLUEBERRY (inside)", menuDesc: "", price: "11.99" },
      { menuTitle: "2 STRAWBERRY BANANA", menuDesc: "", price: "12.99" },
      { menuTitle: "2 CINNAMON APPLE GLAZE", menuDesc: "", price: "11.99", },
      { menuTitle: "2 CHOCOLATE CHIP (inside)", menuDesc: "", price: "11.99" },
      { menuTitle: "2 FRESH BANANA (inside)", menuDesc: "", price: "11.99" },
      { menuTitle: "PANCAKE COMBO",
        menuDesc: "Two pancakes, two eggs, two bacon, two sausage links",
        price: "13.99",
      },
    ],
  },
  {
    title: "French",
    span: "Toast",
    sideDes: false,
    lunchSpecials: false,
    background: true,
    addOn: true,
    addOnText: "Add Any Topping to French Toast $1.99 Each",
    menuImg: FrenchToast,
    menuList: [
      { menuTitle: "2 ORIGINAL FRENCH TOAST", menuDesc: "", price: "8.99" },
      { menuTitle: "2 FRESH STRAWBERRY", menuDesc: "", price: "11.99" },
      { menuTitle: "2 FRESH BLUEBERRY", menuDesc: "", price: "11.99" },
      { menuTitle: "2 STRAWBERRY BANANA", menuDesc: "", price: "12.99" },
      { menuTitle: "2 CINNAMON APPLE GLAZE", menuDesc: "", price: "11.99" },
      {
        menuTitle: "FRENCH TOAST COMBO",
        menuDesc: "Two slices of French toast, two eggs, two bacon, two sausage links",
        price: "13.99",
      },
    ],
  },
  {
    title: "Belgian",
    span: "Waffles",
    sideDes: false,
    lunchSpecials: false,
    background: false,
    addOn: true,
    addOnText: "Add Any Topping to Waffles $1.99 Each",
    menuImg: BelgianWaffles,
    menuList: [
      { menuTitle: "ORIGINAL", menuDesc: "", price: "10.99" },
      { menuTitle: "BACON", menuDesc: "", price: "12.99" },
      { menuTitle: "FRESH STRAWBERRY", menuDesc: "", price: "11.99" },
      { menuTitle: "STRAWBERRY BANANA", menuDesc: "", price: "13.99" },
      { menuTitle: "FRESH BLUEBERRY", menuDesc: "", price: "11.99" },
      { menuTitle: "CINNAMON APPLE GLAZE", menuDesc: "", price: "11.99" },
      { menuTitle: "PECAN", menuDesc: "", price: "11.99" },
      {
        menuTitle: "WAFFLE COMBO",
        menuDesc: "Plain waffle, two eggs any style, two bacon strips, two sausage links",
        price: "14.99",
      },
    ],
  },
  {
    title: "Lunch",
    span: "Specials",
    sideDes: true,
    lunchSpecials: true,
    background: true,
    addOn: false,
    sideText: 'All sandwiches come with a choice of: cup of soup of the day, fruit, hash browns, or French fries.',
    menuImg: "",
    menuList: [
      {
        menuTitle: "Cheeseburger",
        menuDesc: "Hamburger patty on a toasted bun with American cheese",
        price: "14.99",
      },
      {
        menuTitle: "Italian Burger",
        menuDesc: "Hamburger patty on a toasted bun with sautéed onions, green peppers, topped with mozzarella cheese",
        price: "14.99",
      },
      {
        menuTitle: "Double Cheeseburger",
        menuDesc: "Two Hamburger patties with American cheese ",
        price: "18.99",
      },
      {
        menuTitle: "Bacon Cheeseburger",
        menuDesc: "Hamburger patty with bacon, topped with American cheese ",
        price: "15.99",
      },
      {
        menuTitle: "Patty Melt",
        menuDesc: "Hamburger patty on toasted Rye bread with sautéed onions and American cheese ",
        price: "15.99",
      },
      {
        menuTitle: "Turkey Melt",
        menuDesc: "Turkey breast on toasted rye and mozzarella cheese ",
        price: "14.99",
      },
      {
        menuTitle: "Chicken Bacon Melt",
        menuDesc: "Grilled chicken and bacon on toasted rye with mozzarella cheese ",
        price: "15.99",
      },
      {
        menuTitle: "Turkey Club",
        menuDesc: "Turkey, bacon, mayo, lettuce, tomato ",
        price: "14.99",
      },
      {
        menuTitle: "BLT Club",
        menuDesc: "Bacon, mayo, lettuce, tomato ",
        price: "13.99",
      },
      {
        menuTitle: "BLT Single",
        menuDesc: "Bacon, mayo, lettuce, tomato ",
        price: "12.99",
      },
      {
        menuTitle: "Turkey Wrap",
        menuDesc: "Turkey, cheddar cheese, mayo, lettuce, tomato on a white wrap ",
        price: "14.99",
      },
      {
        menuTitle: "Garden Wrap",
        menuDesc: "Onions, green peppers, mushrooms, zucchini, tomatoes, spinach, mayo on a white wrap ",
        price: "12.99",
      },
      {
        menuTitle: "Buffalo Ranch Chicken Wrap",
        menuDesc: "Grilled chicken, lettuce, tomatoes, cheddar cheese ",
        price: "15.99",
      },
      {
        menuTitle: "Grilled Chicken Wrap",
        menuDesc: "Grilled chicken, cheddar cheese, mayo, lettuce, tomatoes ",
        price: "14.99",
      },
      {
        menuTitle: "Dressings",
        menuDesc: "Ranch • Italian • Thousands Island",
        submenu: [
            {   
                subMenuTitle: "Cobb Salad ", 
                subMenuDesc: "Grilled chicken, bacon, tomatoes, cucumber, mozzarella cheese " , 
                price: "13.99" 
            },
            {   
                subMenuTitle: "Chef Salad", 
                subMenuDesc: "Ham, turkey, tomato, cucumber, cheddar cheese " , 
                price: "13.99" 
            },
            {   
                subMenuTitle: "Grilled Chicken Salad", 
                subMenuDesc: "Grilled chicken, tomato, cucumber cheddar cheese" , 
                price: "15.99" 
            },
            {   
                subMenuTitle: "Grilled Cheese with Cup of Soup", 
                subMenuDesc: "" , 
                price: "9.99" 
            },
            {   
                subMenuTitle: "Bowl of Soup", 
                subMenuDesc: "Grilled chicken, tomato, cucumber cheddar cheese" , 
                price: "8.99" 
            },
            {   
                subMenuTitle: "Cup of Soup", 
                subMenuDesc: "Grilled chicken, bacon, tomatoes, cucumber, mozzarella cheese" , 
                price: "6.99" 
            },
        ],
      },
    ],
  },
  {
    title: "Children's",
    span: "Menu",
    sideDes: false,
    lunchSpecials: false,
    background: false,
    addOn: false,
    menuImg: "",
    menuList: [
      { menuTitle: "GOLDEN MOUSE PANCAKE ", menuDesc: "Served with whipped cream ", price: "7.99" },
      { menuTitle: "5 SILVER DOLLAR PANCAKES", menuDesc: "", price: "7.99" },
      { menuTitle: "3 MINI CHOCOLATE CHIP PANCAKES ", menuDesc: "", price: "8.99" },
      { menuTitle: "2 EGGS SCRAMBLED WITH", menuDesc: "2 SAUSAGE LINKS OR 2 BACON AND TOAST", price: "9.99" },
      {
        menuTitle: "WAFFLE COMBO",
        menuDesc: "Plain waffle, two eggs any style, two bacon strips, two sausage links",
        price: "14.99",
      },
    ],
  },
  {
    title: "Sides & ",
    span: "Add-Ons",
    sideDes: false,
    lunchSpecials: false,
    background: true,
    addOn: false,
    menuImg: "",
    menuList: [
      { menuTitle: "ADD-ONS ", menuDesc: "", price: "4.59" },
      { menuTitle: "3 SAUSAGE LINKS", menuDesc: "", price: "4.59" },
      { menuTitle: "2 SAUSAGE PATTIES", menuDesc: "", price: "4.59" },
      { menuTitle: "2 TURKEY PATTIES ", menuDesc: "", price: "4.59" },
      { menuTitle: "HASH BROWNS", menuDesc: "", price: "3.59" },
      { menuTitle: "CORNED BEEF HASH", menuDesc: "", price: "8.99" },
      { menuTitle: "FRESH FRUIT (Strawberries, blueberries, bananas)", menuDesc: "", price: "SIDE $4.99 | BOWL $8.99" },
      { menuTitle: "TOAST (White, wheat or rye) ", menuDesc: "", price: "2.99" },
      { menuTitle: "CUP OF GRAVY ", menuDesc: "", price: "3.99" },
      { menuTitle: "EXTRA CHEESE ", menuDesc: "", price: "1.99" },
      { menuTitle: "ONE EGG  ", menuDesc: "", price: "1.99" }
    ],
  },
  {
    title: "Beverages",
    span: "",
    sideDes: false,
    lunchSpecials: false,
    background: false,
    addOn: false,
    menuImg: "",
    menuList: [
      { menuTitle: "COFFEE ", menuDesc: "", price: "3.59" },
      { menuTitle: "HOT TEA (Breakfast Blend, Green Tea, Chamomile)", menuDesc: "", price: "3.59" },
      { menuTitle: "ICED COFFEE (no free refills)", menuDesc: "", price: "4.59" },
      { menuTitle: "2 TURKEY PATTIES ", menuDesc: "", price: "3.59" },
      { menuTitle: "SOFT DRINKS", menuDesc: "", price: "3.59" },
      { menuTitle: "ICED TEA", menuDesc: "", price: "3.59" },
      { menuTitle: "APPLE JUICE (no free refills)", menuDesc: "", price: "3.59" },
      { menuTitle: "ORANGE JUICE (no free refills)", menuDesc: "", price: "3.59" },
      { menuTitle: "TOMATO JUICE (no free refills)", menuDesc: "", price: "3.59" },
      { menuTitle: "MILK (no free refills)", menuDesc: "", price: "3.59" },
      { menuTitle: "CHOCOLATE MILK (no free refills)", menuDesc: "", price: "3.59" }
    ],
  },
  {
    title: "3-Egg",
    span: "Omelets",
    sideDes: true,
    lunchSpecials: false,
    background: true,
    addOn: true,
    addOnText: "ADD ANY TOPPING TO PANCAKES 1.99 each",
    sideText: "Served with hash browns or side of fresh fruit and choice of toast (white, wheat or rye) or pancakes. Egg Whites + 1.99. Add any veggie 1.00 Each. Add any meat $2.99 each.",
    menuImg: "",
    menuList: [
      {
        menuTitle: "GARDEN",
        menuDesc: "tomatoes, zucchini, onions, mushrooms, green peppers, spinach, American cheese",
        price: "13.99"
      },
      {
        menuTitle: "WESTERN",
        menuDesc: "Ham, onions, green peppers, American cheese",
        price: "13.99"
      },
      {
        menuTitle: "COUNTRY",
        menuDesc: "Ham, bacon, sausage, American cheese",
        price: "14.99"
      },
      {
        menuTitle: "SOUTH OF THE BORDER",
        menuDesc: "Sausage, onions, green peppers, tomatoes, jalapeños, cheddar cheese",
        price: "14.99"
      },
      {
        menuTitle: "CHEESE OMELET",
        menuDesc: "With American cheese 12.99 WITH HAM 13.99 WITH BACON 13.99 WITH SAUSAGE 13.99",
        price: null
      },
      {
        menuTitle: "MUSHROOM AND CHEESE",
        menuDesc: "Mushrooms, American cheese",
        price: "13.99"
      },
      {
        menuTitle: "SPARTAN",
        menuDesc: "Spinach, tomatoes, feta cheese",
        price: "14.99"
      },
      {
        menuTitle: "ITALIAN",
        menuDesc: "Onion, tomato, green pepper, mozzarella cheese",
        price: "13.99"
      }
    ]
  },
  {
    title: "Breakfast",
    span: "Skillets",
    sideDes: true,
    lunchSpecials: false,
    background: false,
    addOn: false,
    addOnText: "",
    sideText: "Served with toast (white, wheat or rye) or pancakes. Add any veggie 1.00 Each. Add any meat $2.99 each.",
    menuImg: "",
    menuList: [
      {
        menuTitle: "TEXAS THREE STEP",
        menuDesc: "Hash browns, ham, bacon, sausage, cheddar cheese, three eggs* your way",
        price: "15.99"
      },
      {
        menuTitle: "IRISH",
        menuDesc: "Hash browns, corned beef hash, onions, cheddar cheese, three eggs* your way",
        price: "15.99"
      },
      {
        menuTitle: "GARDEN",
        menuDesc: "Hash browns, tomatoes, zucchini, onions, mushrooms, green peppers, spinach, cheddar cheese, three eggs* your way",
        price: "14.99"
      },
      {
        menuTitle: "SOUTH OF THE BORDER",
        menuDesc: "Hash browns, sausage, onions, green peppers, tomatoes, jalapeños, cheddar cheese, three eggs* your way",
        price: "15.99"
      },
      {
        menuTitle: "GOLDEN",
        menuDesc: "Hash browns, ham, bacon, sausage, onions, green peppers, mushrooms, cheddar cheese, three eggs* your way",
        price: "16.99"
      },
      {
        menuTitle: "SPARTAN",
        menuDesc: "Hash browns, spinach, tomatoes, feta, three eggs* your way",
        price: "15.99"
      },
      {
        menuTitle: "ITALIAN SKILLET",
        menuDesc: "Hash browns, onions, tomatoes, green pepper, mozzarella cheese, three eggs* your way",
        price: "14.99"
      },
      {
        menuTitle: "BACON & CHEDDAR",
        menuDesc: "",
        price: "14.99"
      },
      {
        menuTitle: "HAM & CHEDDAR",
        menuDesc: "",
        price: "14.99"
      },
      {
        menuTitle: "SAUSAGE & CHEDDAR",
        menuDesc: "",
        price: "14.99"
      }
    ]
  },
  {
    title: "Breakfast",
    span: "Burritos",
    sideDes: false,
    lunchSpecials: false,
    background: true,
    addOn: false,
    addOnText: "",
    sideText: "",
    menuImg: "",
    menuList: [
      {
        menuTitle: "BREAKFAST BURRITO",
        menuDesc: "Three eggs scrambled, sausage, mozzarella cheese",
        price: "11.99"
      },
      {
        menuTitle: "SOUTH OF THE BORDER BURRITO",
        menuDesc: "Three scrambled eggs, sausage, onion, green pepper, tomato, jalapeño, cheddar cheese",
        price: "13.99"
      },
      {
        menuTitle: "GARDEN BURRITO",
        menuDesc: "Three eggs scrambled, tomatoes, zucchini, onions, mushrooms, green peppers, spinach, cheddar cheese",
        price: "13.99"
      },
      {
        menuTitle: "COUNTRY BURRITO",
        menuDesc: "Three eggs scrambled, ham, bacon, sausage, cheddar cheese with gravy on top",
        price: "15.99"
      }
    ]
  }
];

export default MenuData;
