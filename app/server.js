const express = require('express')
const app = express()
const router = require("./routers/root.routers")
const port = 3000

app.use(router)


//change req vs res ve json



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})