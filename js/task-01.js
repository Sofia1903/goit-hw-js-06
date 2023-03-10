const categories = document.querySelector('#categories');
const categoriesCount = categories.querySelectorAll('li.item').length;
console.log(`Number of categories: ${categoriesCount}`);

const categoriesList = categories.querySelectorAll('li.item');
categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li').length;
  console.log(`Category title: ${categoryTitle}`);
  console.log(`Number of list items: ${categoryItems}`);
});