var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'customer-data.csv');
let jsonOutput;

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    const array = data.split("\r\n");
    const keys = array.shift().split(",");    
    const length = keys.length
    var output = [];
    
    while (array.length) {
        const values = array.shift().split(",");        
        var obj = {}; 

        for(i=0; i < length; i++) {
            obj[ keys[i] ] = values[i];           
        }

        output.push(obj);        
    }
    
    jsonOutput = JSON.stringify(output);    
    
    fs.writeFile('customer-data.json', jsonOutput, 'utf8', (err) => {
        if(err) throw err;
        console.log('The file has been saved!');
    });
});

