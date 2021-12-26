require("dotenv").config();
//config will tak info from env and injected in port
const http = require("http");

const PORT = process.env.Port || 5000;

const firstRes = function (req, res ){
    res.writeHead(200);
    res.end("Hey, I am Server 🤓");
};

const server = http.createServer(firstRes);
server.listen(PORT, () => console.log(`Server is listen on port=${PORT}`));
