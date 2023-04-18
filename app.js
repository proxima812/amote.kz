// Фильтр элементов - товарво

const filterSelectEl = document.querySelector('#filter');
const itemsEl = document.querySelector('.items');

filterSelectEl.onchange = function() {
  console.log(this.value);
  const items = itemsEl.querySelectorAll('.item');
  items.forEach(item => {
    if (item.classList.contains(this.value)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};
