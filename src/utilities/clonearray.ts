const cloneArray = (arr: any[]) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const newObj = {...arr[i]}
        newArr.push(newObj);
    }
    return newArr;
}

export default cloneArray;
