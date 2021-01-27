inputArray1 = [1,1,1,2,3,4,5]
inputArray2 = [1,2,3,4,5,6,7]
inputArray3 = [1,5,2,2,3,4,3,5,5,5,5,5]

console.log(main()+1);

function main(){
    let inputArray = inputArray2
    let counter=0;
    let arraySaved=[];
    let arrayCheck=[];
    let higherCounter=0;
    for(let i=0;i<inputArray.length-1;i++){
        let s = findDistinct(inputArray[i],inputArray[i+1])
        console.log("Check it "+ inputArray[i]+" & "+inputArray[i+1]);
        console.log("index : "+i)
        console.log("Selisih: "+s);
        if(s<2){
            let minArray = Math.min.apply(null,arrayCheck)
            let checkItRight = inputArray[i+1]-minArray;
            console.log(inputArray[i+1]+" & "+minArray)
            if(checkItRight<2){               
                arrayCheck.push(inputArray[i])
                console.log(arrayCheck)
                counter++;
            }else{
                if(higherCounter<counter){
                    higherCounter = counter;
                }
                arrayCheck=[]
                counter=0;
                }
            }else{
                if(higherCounter<counter){
                    higherCounter = counter;
                }
                arrayCheck=[]
                counter=0;
            }
            if(higherCounter<counter){
                higherCounter=counter
            }
            console.log("counter : "+counter);
            console.log("higher counter : "+higherCounter);
        }
        return higherCounter;
}

function findDistinct(x,y){
        let s;
        if(x<y){
            s = y-x;
        }else{
            s = x-y;
        }
        return s;
}