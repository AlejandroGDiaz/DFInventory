const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

const app = express();

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use(cookieSession({
  signed: false,
  maxAge:60*60*1000 //1 hora
}));

require("./routes/productsRoutes")(app);
require("./routes/registerRoutes")(app);
require("./routes/inventoryRoutes")(app);
require("./routes/orderRoutes")(app);
require("./routes/productsAdminRoutes")(app);
require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
    console.log("Listening on port 8000");
})

