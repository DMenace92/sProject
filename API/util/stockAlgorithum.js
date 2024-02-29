// const express = require("express");
// const WebSocket = require("ws");
// const Router = new express.Router();
// const { convertArrayToCSV } = require("convert-array-to-csv");
// const ss = require("simple-statistics");
// const fs = require("fs");

// // Example data
// const sample1 = [
//   /* array of numbers for sample 1 */
// ];
// const sample2 = [
//   /* array of numbers for sample 2 */
// ];

// // const Router = new express.Router()
// const socket = new WebSocket(
//   "wss://ws.finnhub.io?token=cneqofhr01qq13fnumdgcneqofhr01qq13fnume0"
// );

// // Connection opened -> Subscribe

// socket.addEventListener("open", function (event) {
//   // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))

//   socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" }));

//   // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
//   // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
//   // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'NKLA'}))
// });

// let sName;
// let globeValLow = 0;
// var globeValCurr;
// let globeValHigh = 0;
// console.log(globeValCurr);
// // const filename = 'StockData.csv';
// // const newData = [];
// // console.log(sName, globeValCurr)
// // newData.push([sName,globeValCurr])
// // appendToCSV(filename, newData);

// // Router.get('/', async (req,res, )=>{
// socket.addEventListener("message", function (event) {
//     try {
//       parsedData = JSON.parse(event.data);
//       if (parsedData && parsedData.data && parsedData.data.length > 0) {
//         price = parsedData.data[0].p;
//         sName = parsedData.data[0].s;
//         globeValCurr = price;

//         // Update lowest value if necessary

//         if (globeValLow === 0 || globeValCurr < globeValLow) {
//           globeValLow = globeValCurr;
//         }

//         // Update highest value if necessary
//         if (globeValCurr > globeValHigh) {
//           globeValHigh = globeValCurr;
//         }

//         // Example historical price data for stock 1 and stock 2 (closing prices)
//         // const stock1Prices = [/* array of closing prices for stock 1 */];
//         // const stock2Prices = [/* array of closing prices for stock 2 */];
//         // stock1Prices.push([sName,globeValCurr])
//         // // stock1Prices.push(sName,globeValLow)
//         // stock2Prices.push(sName,globeValHigh)
//         // console.log(stock1Prices)
//         const filename = "StockData.csv";
//         const newData = [];
//         console.log(sName, globeValCurr);
        
//         newData.push([globeValCurr]);
//         const appendToCSV = (filename, newData) => {
//           // Read existing content of the file
//           fs.readFile(filename, "utf8", (err, data) => {
//             if (err) {
//               console.error("Error reading file:", err);
//               return;
//             }

//             // Append new data and add a new line
//             const updatedContent = data + newData.join(",") + "\n";

//             // Write the updated content back to the file
//             fs.writeFile(filename, updatedContent, "utf8", (err) => {
//               if (err) {
//                 console.error("Error writing to file:", err);
//               }
//               // console.log("Data appended to file successfully.");
//             });
//           });
//         };
//         appendToCSV(filename, newData);
//       } else {
//         // console.error("JSON data is not in the expected format or is empty.");
//       }
//     } catch (e) {
//       console.error("Error parsing JSON data: ", e);
//     }

// });
// console.log(globeValCurr);
// var unsubscribe = function (symbol) {
//   socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
// };
// module.exports = Router;
