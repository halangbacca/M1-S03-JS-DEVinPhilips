const procuraMinMax = (array) => {
    if(array != null){    
        let max = (Math.max(...array));
        let min = (Math.min(...array));
        console.log({max, min});
    }else{
        console.log("Não é possível encontrar"); 
    }
};

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);