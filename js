const firstName = ['Nick', 'Susan', 'Mike', 'Bob', 'Steve'];
const lastName = 'White';
const newArray = [];

for (let i = 0; i < firstName.length; i++){
    const fullName = `${firstName[i]} ${lastName}`;
    newArray.push(fullName);
    
}
console.log(newArray)

for(let i = 0; i < newArray.length; i++){
    console.log(newArray[i])
}
