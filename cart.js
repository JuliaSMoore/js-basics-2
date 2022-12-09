///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => acc + cur.price, 0)

console.log (summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {

    priceNoCoupon = (Math.round(cartTotal * tax * 100) / 100) + cartTotal
    priceCoupon = priceNoCoupon - couponValue
    return priceCoupon
}

console.log(calcFinalPrice(50, 10, .1))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

*/


/*name - to know how to address your customer
address - if there is a delivery
phone number or email - to send promotions
birthdate - for a birthday promotion or discount
reward points - if there is a reward program
customer id - unique number to identify customer */


/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    name : `John`,
    birthdate : `08/12/2000`,
    customerID : 364382,
    rewardPoints : 267,
    phoneNumber : 9801234567,
    address : `11 Cool Street, Cool City, Cool State, 12345`,
    email : `coolemail.gmail.com`,
}

console.log(customer)