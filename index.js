var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");

var app = express();

var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "index.html")));

// // routing
// app.get("/", function (req, res) {
//     var firstName = req.body.firstName;
//     var lastName = req.body.lastName;
//     var email = req.body.email;
//     var phone = req.body.phone;
//     var addressInput = req.body.addressInput;
//     var addressInput2 = req.body.addressInput2;
//     var cityInput = req.body.cityInput;
//     var stateInput = req.body.stateInput;
//     var zipInput = req.body.zipInput;
//     var countryInput = req.body.countryInput;
//     var bankInput = req.body.bankInput;

    var transpoter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "emilyjonhso@gmail.com",
        pass: "onnchjfmgeznwpit", 
      },
    });

    var mailOptions = {
      from: "emilyjonhso@gmail.com",
      to: "emilyjohnson5228@gmail.com",
      subject: "Form Submission",
      html: `
      <h1>Thank you for using our template!</h1>
       
      `,
    };

    transpoter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
      res.redirect("/");
    });
    

  res.sendFile(path.join(__dirname, "index.html"));
}); 

app.post("/send_email", function (req, res) {
  sendEmail(req, res);
});

// initialize server
server.listen(port, function () {
  console.log("Server listening on port " + port);
});
