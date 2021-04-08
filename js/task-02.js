const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй
// document.createElement().
const ingredientsEl = document.querySelector('#ingredients');

// ingredients.forEach(elemenet =>{
//     const li = document.createElement('li');
//     li.textContent = elemenet;
//     ingredientsEl.appendChild(li);
// });
 
const ingredientItemsElements = ingredients.map(element => {
  const li = document.createElement('li');
  li.textContent = element;
  return li;
});
ingredientsEl.append(...ingredientItemsElements);