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

//Get all the data for Registration Activity
app.get(
  "/api/RegistrationActivity/GetData/:startYear(\\d{4})-:startMonth(\\d{2})-:startDay(\\d{2})/:endYear(\\d{4})-:endMonth(\\d{2})-:endDay(\\d{2})",
  (req, res) => {
    let startDate =
      req.params.startYear +
      "-" +
      req.params.startMonth +
      "-" +
      req.params.startDay;
    let endDate =
      req.params.endYear + "-" + req.params.endMonth + "-" + req.params.endDay;

    // let endDate = new Date(
    //   +req.params.endYear,
    //   +req.params.endMonth - 1,
    //   +req.params.endDay
    // );
    //connect to database
    mssql.connect(config, function (err) {
      if (err) {
        console.log(err);
      }
      // create the request
      var request = new mssql.Request();
      var dataList = [];
      //database query
      request.query(
        "SELECT SUM([TotalRegistrations])AS 'value', 'Total Registrations' as 'category' FROM [DesignSenseStatistics].[dbo].[RegistrationActivity] WHERE [Date] >= '" +
          startDate +
          "' AND [Date] <= '" +
          endDate +
          "'",
        function (err, recordSet) {
          if (err) {
            console.log(err);
          } else {
            const totalRegistrations = recordSet.recordset[0];
            if (totalRegistrations.value === null) {
              totalRegistrations.value = 0;
            }
            dataList.push(totalRegistrations);
            request.query(
              "SELECT SUM([RegisteredUsers])AS 'value', 'Registered Users' as 'category' FROM [DesignSenseStatistics].[dbo].[RegistrationActivity] WHERE [Date] >= '" +
                startDate +
                "' AND [Date] <= '" +
                endDate +
                "'",
              function (err, recordSet) {
                if (err) {
                  console.log(err);
                } else {
                  const registeredUsers = recordSet.recordset[0];
                  if (registeredUsers.value === null) {
                    registeredUsers.value = 0;
                  }
                  dataList.push(registeredUsers);
                  request.query(
                    "SELECT SUM([RegistrationAttempts])AS 'value', 'Registration Attempts' as 'category' FROM [DesignSenseStatistics].[dbo].[RegistrationActivity] WHERE [Date] >= '" +
                      startDate +
                      "' AND [Date] <= '" +
                      endDate +
                      "'",
                    function (err, recordSet) {
                      if (err) {
                        console.log(err);
                      } else {
                        const registrationAttempts = recordSet.recordset[0];
                        if (registrationAttempts.value === null) {
                          registrationAttempts.value = 0;
                        }
                        dataList.push(registrationAttempts);
                        request.query(
                          "SELECT SUM([TotalCustomers])AS 'value', 'Total Customers' as 'category' FROM [DesignSenseStatistics].[dbo].[RegistrationActivity] WHERE [Date] >= '" +
                            startDate +
                            "' AND [Date] <= '" +
                            endDate +
                            "'",
                          function (err, recordSet) {
                            if (err) {
                              console.log(err);
                            } else {
                              const totalCustomers =
                                recordSet.recordset[0];
                              if (totalCustomers.value === null) {
                                totalCustomers.value = 0;
                              }
                              dataList.push(totalCustomers);
                              res.send(dataList);
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    });
  }
);

//Get all the data for Customer Activity
app.get(
  "/api/CustomerActivity/GetData/:startYear(\\d{4})-:startMonth(\\d{2})-:startDay(\\d{2})/:endYear(\\d{4})-:endMonth(\\d{2})-:endDay(\\d{2})",
  (req, res) => {
    let startDate =
      req.params.startYear +
      "-" +
      req.params.startMonth +
      "-" +
      req.params.startDay;
    let endDate =
      req.params.endYear + "-" + req.params.endMonth + "-" + req.params.endDay;

    //connect to database
    mssql.connect(config, function (err) {
      if (err) {
        console.log(err);
      }
      // create the request
      var request = new mssql.Request();
      var dataList = [];
      //database query
      request.query(
        "SELECT SUM([ActiveUsers])AS 'value', 'Active Users' as 'category' FROM [DesignSenseStatistics].[dbo].[CustomerActivity] WHERE [Date] >= '" +
          startDate +
          "' AND [Date] <= '" +
          endDate +
          "'",
        function (err, recordSet) {
          if (err) {
            console.log(err);
          } else {
            dataList.push(recordSet.recordset[0]);
            request.query(
              "SELECT SUM([ModelsExported])AS 'value', 'Models Exported' as 'category' FROM [DesignSenseStatistics].[dbo].[CustomerActivity] WHERE [Date] >= '" +
                startDate +
                "' AND [Date] <= '" +
                endDate +
                "'",
              function (err, recordSet) {
                if (err) {
                  console.log(err);
                } else {
                  dataList.push(recordSet.recordset[0]);
                  request.query(
                    "SELECT SUM([DesignersWhoExportedParts])AS 'value', 'Designers Who Exported Parts' as 'category' FROM [DesignSenseStatistics].[dbo].[CustomerActivity] WHERE [Date] >= '" +
                      startDate +
                      "' AND [Date] <= '" +
                      endDate +
                      "'",
                    function (err, recordSet) {
                      if (err) {
                        console.log(err);
                      } else {
                        dataList.push(recordSet.recordset[0]);
                        request.query(
                          "SELECT SUM([PartSearchesViaWeb])AS 'value', 'Part Searches Via Web' as 'category' FROM [DesignSenseStatistics].[dbo].[CustomerActivity] WHERE [Date] >= '" +
                            startDate +
                            "' AND [Date] <= '" +
                            endDate +
                            "'",
                          function (err, recordSet) {
                            if (err) {
                              console.log(err);
                            } else {
                              dataList.push(recordSet.recordset[0]);
                              request.query(
                                "SELECT SUM([PartRequests])AS 'value', 'Part Requests' as 'category' FROM [DesignSenseStatistics].[dbo].[CustomerActivity] WHERE [Date] >= '" +
                                  startDate +
                                  "' AND [Date] <= '" +
                                  endDate +
                                  "'",
                                function (err, recordSet) {
                                  if (err) {
                                    console.log(err);
                                  } else {
                                    dataList.push(recordSet.recordset[0]);
                                    res.send(dataList);
                                  }
                                }
                              );
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    });
  }
);

app.listen(3001, () => {
  console.log("Running on port 3001");
});
