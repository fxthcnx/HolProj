const restaurant = [
    {
        restaurant:"Jinjja Chicken",
        type:"Korean Restaurant"
    },
    {
        restaurant:"Saap Saap Thai",
        type:"Thai Restaurant"
    },
    {
        restaurant:"The Coffee Bean and Tea Leaf",
        type:"Cafe"
    },
    {
        restaurant:"FatPapas Burgers and Shakes",
        type:"Western Restaurant"
    },
    {
        restaurant:"Eighteen Chefs ",
        type:"Local and Western Restaurant"
    },
    {
        restaurant:"Secret Recipe",
        type:"Cafe & Bakery" 
    }

];

function getRandomRestaurant(){
    const randomNumber=getRandomNumber(); //getting an index number
    const restaurantObject=restaurant[randomNumber];
    setElement(restaurantObject);
}

function getRandomNumber(){
    return Math.floor(Math.random() * restaurant.length);
}

function setElement(restaurantObject){
    document.getElementById("restaurant").innerHTML = restaurantObject.restaurant;
    document.getElementById("type").innerHTML = restaurantObject.type;
}

