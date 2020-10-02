const express = require("express");
const methodOverride = require("method-override");
const app = express();

const routes = require("./routes");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use("/pokemon", routes.pokemon);
app.use("/players", routes.players);
app.use("/team", routes.team);
app.use(express.static("public"));
app.listen(3000, () => {
    console.log("Habemus connexionem ad portum MMM");
});
