const express =  require('express');
const bodyParser=require('body-parser');
const app = express();

const PORT = 3000;


//mimic the db using an array
let blogsList =[];


app.listen(PORT, () => {
    console.log("Server started on PORT ", PORT);
});