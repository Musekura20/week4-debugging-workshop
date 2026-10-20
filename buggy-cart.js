const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen", price: 300, qty: 5 },
  { name: "Bag", price: 12000, qty: 1 },
];

function getSubtotal(items) {
  let subtotal = 0;

  // FIX 1: Changed i <= items.length to i < items.length.
  // The original loop went one step too far and tried to read
  // the price of an undefined item. I found this in the browser
  // Console: "Cannot read properties of undefined (reading 'price')".
  for (let i = 0; i < items.length; i++) {
    // FIX 2: Converted the price to a number using Number().
    // The Notebook price was stored as a string ("1500"), while
    // the other prices were numbers. Converting it ensures that
    // all prices are treated as numbers during calculations.
    subtotal += Number(items[i].price) * items[i].qty;
  }

  return subtotal;
}

function getDiscount(subtotal) {
  // FIX 3: Checked the larger discount condition first.
  // The original code checked subtotal > 10000 before
  // subtotal > 20000, so a subtotal above 20000 received
  // only the 10% discount. Reordering the conditions fixes this.
  if (subtotal > 20000) return 0.2;
  else if (subtotal > 10000) return 0.1;

  return 0;
}

function getTotal(items) {
  const subtotal = getSubtotal(items);
  const discount = getDiscount(subtotal);

  // FIX 4: Calculated the discount amount before subtracting it.
  // The original code subtracted the discount rate (0.1 or 0.2)
  // directly from the subtotal instead of subtracting 10% or 20%.
  const total = subtotal - subtotal * discount;

  return total;
}

console.log(getTotal(cart))