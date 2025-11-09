require('dotenv').config({path: require('path').resolve(__dirname, '../.env')})

console.log(process.env.JWT_SECRET)