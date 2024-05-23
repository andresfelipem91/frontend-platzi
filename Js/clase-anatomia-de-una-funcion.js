function calculateDiscountedPrice(price,descountPercentage){
    const discount=(price * descountPercentage)/100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice= calculateDiscountedPrice(originalPrice,discountPercentage)

console.log('original Price=$' + originalPrice);
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with discount : $' + finalPrice)