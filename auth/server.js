const express = require('express');
const app = express();
app.use(express.urlencoded());
app.post("/auth", function (req, res){
  /* This server is only available to nginx */
  const streamkey = req.body.key ;
  /* You can make database of users instead : ) */
  if (streamkey === "<Your_Password>") {
    res.status(200).send();
    return;
  }
  /* reject the stream */
  res.status(403).send();
  });
  app.listen(8000, function (){
    console.log("listening to port 8000!");
  });
