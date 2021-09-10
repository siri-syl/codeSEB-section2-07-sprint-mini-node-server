// 서버 구현
// const http = require('http');
// 
// const PORT = 5000;
// const ip = 'localhost';
// 
// 
// const server = http.createServer((request, response) => {
//   console.log(
//     `http request method is ${request.method}, url is ${request.url}`
//   );

//   const { method, url, headers } = request;

//   if(request.method === 'OPTIONS'){
//     response.writeHead(200,defaultCorsHeader);
//     response.end();
//   }
//   if(request.method === 'POST'){
//     let body = [];
//     if(request.url === '/upper'){
//       request.on('data',(chunk) => {
//         body.push(chunk);
//       }).on('end', () => {
//         body = body.toString().toUpperCase();
//         response.writeHead(201,defaultCorsHeader);
//         response.end(body);
//       })
//     }
//     else if(request.url === '/lower'){
//       request.on('data', (chunk) => {
//         body.push(chunk);
//       }).on('end', () => {
//         body = body.toString().toLowerCase();
//         response.writeHead(201,defaultCorsHeader);
//         response.end(body);
//       })
//     }
//     else {
//       resquest.on('end', () => {
//         response.writeHead(404,defaultCorsHeader);
//         response.end()
//       })
//     }
//   }

// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};


// express 구현

const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json({strict: false}));
app.use(express.static('client'))
// const router = express.Router()

const PORT = 5000;
const ip = 'localhost';


app.get('/', (req, res)=>{
  res.send('Hello world!');
})

app.post('/upper', (req, res)=>{
  let result = req.body;
  result = result.toUpperCase();
 
  res.json(result);
})
 
app.post('/lower', (req, res)=>{
  let result = req.body;
  result = result.toLowerCase();
 
  res.json(result);
})
 
app.listen(PORT, ()=>{
  console.log(`http server listen on ${ip}:${PORT}`);
})
