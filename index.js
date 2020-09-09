const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser")
const port = 5000
const download = require('image-downloader')
const moment = require('moment')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', async (req, res) => {
    const date = await moment().format();
    const options = {
        url: "https://ro.expertaccounts.com//?include=ws.img&wsaid=4011&itmid=36388&offset=0", //repalce the URL Here
        // url: image,
        dest: `/home/okay/Downloads/${date}.jpg`                // change the path here from behind the date like `/some/path/${date}.jpg`
                                                                //these are ticks(``), not quotes("") so make sure you don't replace them
      }
 
      
      download.image(options)
        .then(({ filename }) => {
            console.log(filename)  
            res.send(`Saved to ${filename}`)
        })
        .catch((err) => console.error(err))

        
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})