const express = require("express");
const app = express();
const mssql = require("mssql/msnodesqlv8");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

//database config
const config = {
  server: "(localdb)\\Local_New",
  user: "sa",
  password: "PeanutJacket215",
  database: "DesignSenseStatistics",
  port: 3001,
  connectTimeout: 30000,
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

const db = mysql.createPool({
  host: "(localdb)\\Local_New",
  user: "sa",
  password: "PeanutJacket2156",
  database: "DesignSenseStatistics",
  port: 3001,
  connectTimeout: 30000,
  options: {
    trustedConnection: true,
  },
});

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/GetRegistrationActivity", (req, res) => {
  //connect to database
  mssql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    // create the request
    var request = new mssql.Request();
    //database query
    request.query(
      "SELECT [TotalRegistrations] AS 'Total Registrations'" +
        ",[RegisteredUsers] AS 'Registered Users'" +
        ",[RegistrationAttempts] AS 'Registration Attempts'" +
        ",[TotalCustomers] AS 'Total Customers'" +
        ",[Date]" +
        "FROM [DesignSenseStatistics].[dbo].[RegistrationActivity]",
      function (err, recordSet) {
        if (err) {
          console.log(err);
        } else {
          res.send(recordSet.recordset);
        }
      }
    );
  });
});

app.get("/api/RegistrationActivity/GetTotalRegistrations", (req, res) => {
  //connect to database
  mssql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    // create the request
    var request = new mssql.Request();
    //database query
    request.query(
      "SELECT SUM([TotalRegistrations])AS 'value' FROM [DesignSenseStatistics].[dbo].[RegistrationActivity]",
      function (err, recordSet) {
        if (err) {
          console.log(err);
        } else {
          res.send(recordSet.recordset);
        }
      }
    );
  });
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
