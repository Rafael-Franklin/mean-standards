//worker.js

console.log("worker started");
const queue = require("./queue");
queue.consume("add-standard", message => {
    //process the message
    console.log("processing " + message.content.toString());
})
