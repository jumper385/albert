const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

// Routers
const ProjectRoute = require('./routes/project');
const ComponentRoute = require('./routes/components')
app.use('/projects', ProjectRoute);
app.use('/components', ComponentRoute)

// Introduction
app.get('/', (req, res) => {
    res.json({
        message: "welcome to the inventory api",
        about: "made with love 💛🖤💛"
    })
})

// General Listening...
app.listen(5000, () => console.log('listening on port 5000'))