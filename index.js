const cart_items= [];
var total_price= 0;
const map1 = new Map();
const map2 = new Map();

map2.set('Beauty Kit', 300);
map2.set('Creme', 130);
map2.set('Lipstick', 75);
map2.set('Nail Polish', 30);
map2.set('Perfume', 400);
map2.set('Liner', 200);

function itemsInCart(itemsMap) {
    var items = Object.fromEntries(itemsMap)
    return JSON.stringify(items).replace('{','').replace('}','');
}

function buy(item, price) {

    if (map1.has(item)) {
        var quantity= map1.get(item);

        quantity++;

        map1.set(item, quantity);

        total_price= map2.get(item) + total_price;
    }
    else {
        map1.set(item, 1);
        total_price= map2.get(item) + total_price;

    }
    
   /*  total_price = total_price + price; */

    alert(item + " added to cart.\n\n Total Items: \n" + itemsInCart(map1) + "\n\nTotal Price: "+ total_price ); 
}

function check(item) {
    alert("Check out all "+ item + " products on our website.");
}

function explore(item) {
    alert("Explore more "+ item + " on our website.");
}