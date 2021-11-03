const arrNums = [[3,6],[2,4],[8,3]];
let index = 8;
for(let i=12;i>2;i--)
{
    index = index-1;
}

const firstIndex = index + 4;
const secondIndex = index + 2;

const outputNum = arrNums[firstIndex][secondIndex];


console.log(outputNum);