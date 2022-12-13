//create custom events

const events = require("events");
const eventEmitter = new events.EventEmitter();

//create event handler

const eventHandle = () => {
  console.log("hello I am event");
};

//assign the handler to an event

eventEmitter.on("eventFire", eventHandle);

//firing event

eventEmitter.emit("eventFire");
