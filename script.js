
/*
//practice task 1
//find the lowest value in the array below
const heights2 = [167, 190, 120, 165, 137];
let lowest = heights2[0];
// console.log(lowest);
for(let findLowest of heights2) {
    // console.log(findLowest);
    if(findLowest < lowest){
        lowest = findLowest;
    }
}
console.log(lowest);
*/
/*
//practice task 2 
//find the smallest name in the  array below
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'ab'];
let smallest = heights2[0];

for(const name of heights2){
    // console.log(name);
    if(name.length < smallest.length){
        smallest = name;
    }
}
console.log(smallest);
*/
/*
//practice task 3
//Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop, tablet, mobile){
    const laptopPrice = 35000 ;
    const tabletPrice = 15000 ;
    const mobilePrice = 20000 ;
    const totalPrice = laptopPrice + tabletPrice + mobilePrice ;
    const totalBudget = laptop + tablet + mobile;
    const requiredMoney = totalPrice - totalBudget;

    return (totalBudget < totalPrice) ?`You have to need more ${requiredMoney}`: "You have enough money to but the electronics"
}

const output = calculateElectronicsBudget(50000, 12000, 10000);
console.log(output); 
*/
/*
//practice task 4
//write a JavaScript function named findAveragePhonePrice and returns the average price of phone
function findAveragePhonePrice(arr) {
    let phonesPrice = 0;
    const totalPhone = arr.length;
    // console.log(totalPhone)
    
    //iterate the array
    for(const phone of arr){
        phonesPrice += phone.price;
        
    }
    const averagePrice = phonesPrice / totalPhone;
    const average = Math.round(averagePrice);
    return average;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const input = findAveragePhonePrice(phones);
console.log(input);
*/
/*
//practice task 5
//For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

function calculateSelery(arr) {
    let totalSelery = 0;        
    for( const employee of employees){
        const currentSelery = employee.starting + (employee.experience * employee.increment);
        // return currentSelery;
        totalSelery += currentSelery;
    }
    return totalSelery;
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const input = calculateSelery(employees);
console.log(input);
*/