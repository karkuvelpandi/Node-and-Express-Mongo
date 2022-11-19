const csvtojson = require("csvtojson")
const fs = require("fs")
const path=require("path")

const csvfilepath=path.join(__dirname,"test","test","data.csv")  //path of the file

csvtojson()
    .fromFile(csvfilepath)
    .then((response) => {
        console.log(response);
        fs.writeFile('output.json', JSON.stringify(response), "utf-8", (err) => {
            if (err) throw err
        })
    })
