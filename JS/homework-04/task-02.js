/*
Исправь ошибки которые будут в консоли, чтобы скрипт заработал.
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
  if(action === inventory.add) {
    return inventory.add(itemName);
  } else {
    return inventory.remove(itemName);
  }
};

invokeInventoryAction('Аптечка', inventory.add);
// Invoking add operation on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction('Фильтр', inventory.remove);
// Invoking remove operation on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']

