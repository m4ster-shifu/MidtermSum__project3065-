let users = [
    {
        "name":"nsalim",
        "email":"nsalim@usiu.ac.ke",
        "password":123,
        "room": 216
    }
]

let rooms = [
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 
    301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 
    401, 402, 403, 404, 405, 406, 407, 408, 
    501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 
    601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 
    701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 
    801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816
]

function checkNameExists(name){
    newUsers = users.filter((user) => user.name === name);
    if(newUsers.length>0){
        return ("Name already exists!")
    }
    else{
        return ("Name doesn't exist!")
    }
}

function checkEmailExists(email){
    newUsers = users.filter((user) => user.email === email);
    if(newUsers.length>0){
        return ("Email already exists!")
    }
    else{
        return ("Email doesn't exist!")
    }
}

function checkEmailUSIU(email){
    let split_domain = email.split("@")[1]
    if(split_domain==="usiu.ac.ke"){
        return ("Valid email!")
    }
    else{
        return ("Invalid email!")
    }
}

function checkPassword(password){
    if(password.length >= 8){
        return ("Right!")
    }
    else{
        return ("Wrong!")
    }
}

function checkRoom(room){
    for(let i=0; i<rooms.length; i++){
        if(rooms[i]===room){
            return ("Right!")
        }
    }
    return ("Wrong!")
}

function calculatePrice(price, item){
    if(typeof(price)!=="number" || typeof(item)!=="number"){
        return "Input numbers only!"
    }
    if(price<=0 || price>2000){
        return "Invalid price!"
    }
    if(item<0 || item>10){
        return "Invalid number of items!"
    }
    return price*item
}

function calculatePrices(prices, items){
    if(typeof(prices) !== "object" || typeof(items) !== "object"){
        return "Not arrays!"
    }
    if(prices.length !== items.length){
        return "Wrong array sizes!"
    }
    let alltotal = []
    for(let i=0; i<prices.length; i++){
        let total = calculatePrice(prices[i], items[i])
        if(typeof(total) !== "number"){
            return total
        }
        alltotal.push(total)
    }
    return alltotal
}

function calculateTotal(totalArray){
    let sum = 0
    if(typeof(totalArray) !== "object"){
        return "Not an array!"
    }
    for(let i=0; i<totalArray.length; i++){
        if(typeof(totalArray[i]) !== "number"){
            return "Input numbers only!"
        }
        sum += totalArray[i]
    }
    if(sum > 20000){
        return "Too expensive!"
    }
    return sum
}

module.exports = {checkNameExists, checkEmailExists, checkEmailUSIU, checkPassword, checkRoom, calculatePrice, calculatePrices, calculateTotal};
