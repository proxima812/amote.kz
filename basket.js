
// const basketName = document.getElementById('basket-name').innerText;
// const basketDesc = document.getElementById('basket-desc').innerText;

// const button = document.getElementById('button');

// button.addEventListener('click', () => {

// const basketItems = document.querySelectorAll('.item-card');

//     basketItems.forEach(basketItem => {
//     const basketName = basketItem.querySelector('#basket-name').innerText;
//     const basketDesc = basketItem.querySelector('#basket-desc').innerText;


//     });

//         const spanText = basketName;
//     const pText = basketDesc;

//     const text = `${spanText}` + `${pText}`;
//     const link = `https://api.whatsapp.com/send/?phone=77087568296&text=Здравствуйте! Хочу заказать:${text}`;

//         const btnAll = document.querySelector('.all-basket');
//     btnAll.href = link;
//     console.log(btnAll.href = link)

// });







// const productsBlock = document.querySelector('.item-card');
// const products = productsBlock.querySelectorAll('.grid-cards');

// const phoneNumber = '77087568296';

// let message = 'Здравствуйте! Подборка товаров: \n';

// const add = document.getElementById('button');
// 4
// add.addEventListener('click', () => {

//     products.forEach(product => {
//   const name = product.querySelector('#basket-name').textContent;
//   const price = product.querySelector('#basket-desc').textContent;

//   message += `- ${name} - ${price} \n`;
// });

// const link = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

// const button = document.querySelector('.all-basket');
// button.setAttribute('href', link);
// console.log(link)

// });








// const button = document.getElementById('button');

// button.addEventListener('click', () => {

//   const basketItems = document.querySelectorAll('.grid-cards');

//   let text = '';

// basketItems.forEach(basketItem => {
//   const basketName = basketItem.querySelectorAll('#basket-name');
//   const basketDesc = basketItem.querySelectorAll('#basket-desc');

//   text += `${basketName} - ${basketDesc}`;

// });

//   const link = `https://api.whatsapp.com/send/?phone=77087568296&text=Здравствуйте! Хочу заказать: ${text}`;

//   const btnAll = document.querySelector('.all-basket');
//   btnAll.href = link;
//   console.log(btnAll.href = link)
// });








// const button = document.getElementById('button');

// button.addEventListener('click', () => {
//   const itemCards = document.querySelectorAll('.item-card');
//   let text = 'Здравствуйте! Хочу заказать: ';

//   itemCards.forEach(itemCard => {
//     const basketName = itemCard.querySelector('#basket-name');
//     const basketDesc = itemCard.querySelector('#basket-desc');

//     text += `${basketName} - ${basketDesc}`;
//     text += ' - ';
//   });

//   const link = `https://api.whatsapp.com/send/?phone=77087568296&text=${text}`;
//   const btnAll = document.querySelector('.all-basket');
//   btnAll.href = link;
//   console.log(btnAll.href = link)
// });








// const button = document.getElementById('button');

// button.addEventListener('click', event => {


//   const itemCard = event.target.closest('.item-card');
//   const basketName = itemCard.querySelector('#basket-name');
//   const basketDesc = itemCard.querySelector('#basket-desc');


//   const text = `Здравствуйте! Хочу заказать: ${basketName} - ${basketDesc}`;
//   const link = `https://api.whatsapp.com/send/?phone=77087568296&text=${text}`;
//   const btnAll = document.querySelector('.all-basket');
//   btnAll.href = link;

// });








// $('.item-card #button').click(function() {
//   var basketName = $(this).closest('.item-card').find('#basket-name').text();
//   var basketDesc = $(this).closest('.item-card').find('#basket-desc').text();
//   var url = "https://api.whatsapp.com/send/?phone=77087568296&text=Здравствуйте! Меня заинтересовал корзина " + basketName + ": " + basketDesc;
//   $('.all-basket').attr('href', url);
// });

// function collectInfo() {
//   var itemCards = document.querySelectorAll('.item-card');
//   var info = [];

//   itemCards.forEach(function(itemCard) {
//     var basketName = itemCard.querySelector('#basket-name');
//     var basketDesc = itemCard.querySelector('#basket-desc');
//     info.push({
//       name: basketName,
//       desc: basketDesc
//     });
//   });

//   return info;
// }

// document.querySelector('#button').addEventListener('click', function() {
//   var info = collectInfo();
//   console.log(info);
// });





const dataArray = [];

// Обработчик события "click" на элементы #button
document.querySelectorAll('.item-card #button').forEach(button => {
  button.addEventListener('click', event => {
    // Получение элементов #basket-name и #basket-desc
    const basketName = event.target.closest('.item-card').querySelector('#basket-name').textContent;
    const basketDesc = event.target.closest('.item-card').querySelector('#basket-desc').textContent;

    // Поиск элемента в массиве
    const index = dataArray.findIndex(item => item.name === basketName && item.desc === basketDesc);

    // Если элемент найден, то удаляем его из массива
    if (index !== -1) {
      dataArray.splice(index, 1);
    }
    // Если элемент не найден, то добавляем его в массив
    else {
      dataArray.push({ name: basketName, desc: basketDesc });
    }

    const convert = JSON.stringify(dataArray)
    

    // Обновление ссылки в элементе .all-basket
    const allBasketLink = document.querySelector('.all-basket');
    allBasketLink.setAttribute('href', 'https://api.whatsapp.com/send/?phone=77087568296&text=' + encodeURIComponent(convert));

    // localStorage.setItem('dataArray', JSON.stringify(dataArray));


    console.log(allBasketLink.href)
  });
});