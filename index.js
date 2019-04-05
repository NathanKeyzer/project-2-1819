const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port =  process.env.PORT || 5000;

const baseUrl = "https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages";

const https = require("https");
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");


app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/offline", (req, res) => {
  res.render("offline.ejs");
});


app.get("/studentenwerk", (req, res) => {
  const data = fetch(`${baseUrl}/7`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
    });
});

app.get("/samenwerken", (req, res) => {
  https.get(
    "https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/758",
    response => {
      let data = "";

      response.on("data", buffer => (data += buffer));

      response.on("end", () => {
        const html = JSON.parse(data).content.rendered;

        // Selects all the: [full-width] bs
        const rx1 = /\[.+\]/g;

        // Selects all white spaces
        const rx2 = /(?<=\>)[\t\n\r\s]+(?=\<)/g;

        // Selects all the useful tags
        const rx3 = /\<(p|a|form|button|h[1-6]).+?\1\>|\<img.+?\/?\>|(?<=(div|span).+\>).[^\<\>]+(?=\<\/(div|span))/g;

        const normalHtml = html.replace(rx1, "");
        const minifiedHtml = normalHtml.replace(rx2, "");

        const temp = [];
        let result;

        while ((result = rx3.exec(minifiedHtml)) !== null) {
          temp.push(result[0]);
        }
        console.log(temp);
      });
    }
  );
});

//app listen to port 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
