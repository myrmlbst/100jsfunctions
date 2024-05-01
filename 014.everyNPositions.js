function everyNPositions(message, step) {
    var result = "";
    
    for (var i=0; i<message.length; i+=step) {
        result = `${result}${message[i]}`;
    }
    
    return result;
}

export { everyNPositions };
