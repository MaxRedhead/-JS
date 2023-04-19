const bankBalance = 15000;
let price = 19999

if (price <= bankBalance) {
    console.log('Да, Вы можете позволить себе покупку смартфона')
} else if (price < 10000) {
    console.log('Пополните баланс')
} else {
    console.log('Нам не нужен телефон')
}
