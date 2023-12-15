console.log("CONNECTED");

/**
 * Write a loop in JavaScript that in range from 1 till 20 will write in the console every number,
 * and will add the "\n" new line after every even number otherwise it will add " " empty space.
 */


let i = 1;
result = ''

while(i <= 20){
    if(i%2 === 0){
        result = result + `${i}\n`;
        i++
    } else{
        result = result + `${i} `;
        i++
    }
};

console.log(result);