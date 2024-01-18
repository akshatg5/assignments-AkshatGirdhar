/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
  let ansArr = [];
  let totalSpent = [];
  
  
  for(let i=0; i<transactions.length; i++){
    
    // storing elements of category in selected variable 
    let selected = transactions[i];

    // if category is not present in categories array then push it and also push its price in totalSpent array
    if(!totalSpent[selected.category]){
       totalSpent[selected.category] = selected.price;
    }
    
    // if category is already present in categories array then add its price in totalSpent array
    else{
       totalSpent[selected.category] += selected.price;
    }
    
  }
  
  // Adding in the ansArr
  for(let i in totalSpent){
    // pushing the object in ansArr
    ansArr.push({ category: i, totalSpent: totalSpent[i]});
  }
  
  return ansArr;
  }
  
  module.exports = calculateTotalSpentByCategory;
