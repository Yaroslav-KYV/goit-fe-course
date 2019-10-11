/*
Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};



const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking ${action.name} opeartion on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Аптечка', inventory.add);
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction('Фильтр', inventory.remove);
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
*/

/*
* ====Start code====
*/

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName); 
  },
};

 const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking ${action.name} operation on ${itemName}`);
  action(itemName);
  // (action === inventory.add) ? inventory.add(itemName) : inventory.remove(itemName);
};



invokeInventoryAction('Аптечка', inventory.add.bind(inventory));
// Invoking add operation on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction('Фильтр', inventory.remove.bind(inventory));
// Invoking remove operation on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']

