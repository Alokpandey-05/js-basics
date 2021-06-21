let array=["delhi", "mumbai ", "maharastara " ," tamil nadu", 1947, " assam"];

for (let index = 0; index < array.length; index++) {
    if(typeof(array[index])!= 'string')
    continue;
    console.log(array[index]);
    
}