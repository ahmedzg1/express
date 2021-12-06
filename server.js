const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname,'comp')))


app.listen(5000, (err) => {  
    if(err){
        throw err
    }else{
        console.log('server is up and  running')
    }
})