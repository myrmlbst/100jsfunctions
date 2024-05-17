function rotateArray(items, n) {
    let res = [...items];

    for (let i=1; i<=n; i++) {
        res = rotateOnce(res);
    }
    
    return res;
}


function rotateOnce(items) {
    if (items.length === 0) {
        return [];
    }

    let res = [];

    for (let i=0; i<(items.length-1); i++) {
        res[i+1] = items[i];
    }

    res[0] = items[items.length - 1];
    return res;
}


export { rotateArray };
