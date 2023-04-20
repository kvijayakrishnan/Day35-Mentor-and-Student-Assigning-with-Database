require('dotenv').config();
const express = require('express');



// Import db
const db = require('./db/connect');

// importing routes
const studentsRoutes = require('./routes/students.routes');
const mentorsRoutes = require('./routes/mentors.routes');


const app = express();

db();


app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Mentor and Student Assigning with Date base');
})


// adding custome middleware
app.use("/students", studentsRoutes);
app.use("/mentors", mentorsRoutes);


const PORT = process.env.PORT || 4000;


app.listen(PORT, () =>{
    console.log(`App is running on the PORT ${PORT}`);
});





