import Meal from '../models/meal';
import asparagus_salad from '../assets/Asparagus_Salad_with_Cherry_Tomatoes.jpeg';
import Chocolate_Souffle from '../assets/Chocolate_Souffle.jpg';
import Creamy_Indian_Chicken_Curry from '../assets/Creamy_Indian_Chicken_Curry.jpg';
import Delicious_Orange_Mousse from '../assets/Delicious_Orange_Mousse.jpeg';
import hamburger from '../assets/hamburger.jpg';
import Pancakes from '../assets/Pancakes.jpg';
import Salad_with_Smoked_Salmon from '../assets/Salad_with_Smoked_Salmon.jpg';
import spaghetti_with_tomato_sauce from '../assets/spaghetti-with-tomato-sauce.jpg';
import toast_Hawaii from '../assets/toast-hawaii.jpg';
import Wiener_Schnitzel from '../assets/Wiener_Schnitzel.jpg';
export const INGREDIENTS = [
  {
    id: 1,
    name: "Tomato"
  },
  { id: 2, name: 'Olive Oil' },
  { id: 3, name: 'Onion' },
  { id: 4, name: 'Spaghetti' },
  { id: 5, name: 'Spice' },
  { id: 6, name: 'Cheese' },
  { id: 7, name: 'Bread' },
  { id: 8, name: 'Ham' },
  { id: 9, name: 'Pineapple' },
  { id: 10, name: 'Butter' },
  { id: 11, name: 'Cucumber' },
  { id: 12, name: 'Ketchup' },
  { id: 13, name: 'Cattle Hack' },
  { id: 14, name: 'Egg' },
  { id: 15, name: 'Flour' },
  { id: 16, name: 'Vegetable Oil' },
  { id: 17, name: 'Veal Cutlets' },
  { id: 18, name: 'Salt' },
  { id: 19, name: 'Lemon' },
  { id: 20, name: 'Arugula' },
  { id: 21, name: 'Parsley' },
  { id: 22, name: "Lamb's Lettuce" },
  { id: 23, name: 'Smoked Salmon' },
  { id: 24, name: 'Mustard' },
  { id: 25, name: 'Pepper' },
  { id: 26, name: 'Balsamic Vinegar' },
  { id: 27, name: 'Gelatine' },
  { id: 28, name: 'Sugar' },
  { id: 29, name: 'Yoghurt' },
  { id: 30, name: 'Cream' },
  { id: 31, name: 'Orange Juice' },
  { id: 32, name: 'Milk' },
  { id: 33, name: 'Baking Powder' },
  { id: 34, name: 'Garlic' },
  { id: 35, name: 'Ginger' },
  { id: 36, name: 'Chicken Breasts' },
  { id: 37, name: 'Almond' },
  { id: 39, name: 'Dark Chocolate' },
  { id: 40, name: 'Cream of Tartar' },
  { id: 41, name: 'Asparagus' },
  { id: 42, name: 'Pine Nuts' },
  { id: 43, name: 'Salad' }
]

export const MEALS = [
  new Meal(
    'm1',
    'Spaghetti with Tomato Sauce',
    spaghetti_with_tomato_sauce,
    [
      'Tomato',
      'Olive Oil',
      'Onion',
      'Spaghetti',
      'Spice',
      'Cheese'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ]
  ),

  new Meal(
    'm2',
    'Toast Hawaii',
    toast_Hawaii,
    [
      'Bread',
      'Ham',
      'Pineapple',
      'Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ]
  ),

  new Meal(
    'm3',
    'Classic Hamburger',
    hamburger,
    [
      'Cattle Hack',
      'Tomato',
      'Cucumber',
      'Onion',
      'Ketchup',
      'Bread'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ]
  ),

  new Meal(
    'm4',
    'Wiener Schnitzel',
    Wiener_Schnitzel,
    [
      'Veal Cutlets',
      'Egg',
      'Bread',
      'Flour',
      'Butter',
      'Vegetable Oil',
      'Salt',
      'Lemon'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ]
  ),

  new Meal(
    'm5',
    'Salad with Smoked Salmon',
    Salad_with_Smoked_Salmon,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      'Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt',
      'Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ]
  ),

  new Meal(
    'm6',
    'Delicious Orange Mousse',
    Delicious_Orange_Mousse,
    [
      'Gelatine',
      'Orange Juice',
      'Sugar',
      'Yoghurt',
      'Cream',
      'Orange'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ]
  ),

  new Meal(
    'm7',
    'Pancakes',
    Pancakes,
    [
      'Flour',
      'Baking Powder',
      'Salt',
      'Sugar',
      'Milk',
      'Egg',
      'Butter'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ]
  ),

  new Meal(
    'm8',
    'Creamy Indian Chicken Curry',
    Creamy_Indian_Chicken_Curry,
    [
      'Chicken Breasts',
      'Onion',
      'Garlic',
      'Ginger',
      'Almond',
      'Pepper',
      'Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add milk',
      'Serve with rice'
    ]
  ),

  new Meal(
    'm9',
    'Chocolate Souffle',
    Chocolate_Souffle,
    [
      'Butter',
      'Sugar',
      'Dark Chocolate',
      'Butter',
      'Flour',
      'Milk',
      'Salt',
      'Pepper',
      'Egg',
      'Cream of Tartar',
      'Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ]
  ),
  new Meal(
    'm10',
    'Asparagus Salad with Cherry Tomatoes',
    asparagus_salad,
    [
      'Asparagus',
      'Pine Nuts',
      'Tomatoes',
      'Salad',
      'Salt',
      'Pepper',
      'Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ]
  )
];
