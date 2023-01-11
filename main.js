let obj = receipt();
let zakaz = '';
let cena = 0;

console.log(obj);

for(let key in obj) {
        zakaz += `${key} ${obj[key].info}, `;
        cena += obj[key].price;         
}

console.log('Вы заказали ' + zakaz + ' | Общая стоимость ' + (cena + 9000) + ' сумм с доставкой (9000)');