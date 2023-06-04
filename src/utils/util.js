export const calculateDeposit = (basePrice)=>{
    return basePrice * 2.5;
}
export const calculatePrice = (basePrice, days)=>{
    let price = 0;
    switch (days) {
        case '1':
            price = (60/100)*basePrice;
            break;
        case '2':
            price = (75/100)*basePrice;
            break;
        case '3':
            price = basePrice;
            break;
        case '4':
            price = basePrice + (18/100)*basePrice;
            break;
        case '5':
            price = basePrice + (36/100)*basePrice;
            break;
        case '6':
            price = basePrice + (48/100)*basePrice;
            break;
        case '7':
            price = basePrice + (60/100)*basePrice;
            break;
        case '8':
            price = basePrice + (69/100)*basePrice;
            break;
        case '9':
            price = basePrice + (78/100)*basePrice;
            break;
        case '10':
            price = basePrice + (86/100)*basePrice;
            break;
        default:
            const per = (days > 10 && days < 15) ? 6 : 4;
            price = basePrice + (86/100)*basePrice + (days * ((per/100)*basePrice));
            break;
    }
    console.log('price', price, ' days',days)
    return price;
}
