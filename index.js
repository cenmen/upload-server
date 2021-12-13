const express = require("express")
const cors = require("cors")
const multer = require("multer")
const app = express()
const upload = multer({ dest: "files/" })
app.use(cors({ credentials: true, origin: true }))

app.post("/upload", upload.single("file"), (req, res) => {
  const { filename } = req.body
  console.log(filename)
  console.log(req.file)
  res.send({ message: "success" })
})

app.listen(2000, () => console.log("==> server listen 2000"))
