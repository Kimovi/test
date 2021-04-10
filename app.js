function testForLoop (obj) {
    for(let i=0; i<obj.length; i++) {
        const indexObj = obj[i]; 
        if(indexObj.obj === false) {
            return false;
        }
    }
}

console.log(testForLoop([{obj: false}, {obj: true}]))
