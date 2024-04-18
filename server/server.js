const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cityRoutes = require('./routes/cityRoutes')
const copRoutes = require('./routes/copRoutes')



const app = express()
dotenv.config({ path: './.env' })
app.use(cors())
app.use(express.json())


//routes
app.use('/api/city', cityRoutes)
app.use('/api/cop', copRoutes)



const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})