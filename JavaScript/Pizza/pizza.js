function pizzaOven( deepDish, traditional, mozzarella, pepperoni){
    var pizza={};
    pizza.deepDish = deepDish
     pizza.traditional= traditional
     pizza.mozzarella= mozzarella
      pizza.pepperoni=  pepperoni
      return pizza;
}

var pizza1 = pizzaOven('crustType', 'sauceType', ["cheeses"], ['toppings']);
console.log(pizza1);
