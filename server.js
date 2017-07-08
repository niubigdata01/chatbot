'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');



}).listen(port);

'use strict';

console.log('Hello world');

// Example 2: adds user input and detects intents.

var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var prompt = require('prompt-sync')();

// Set up Conversation service wrapper.
var conversation = new ConversationV1
    (
    {
        username: 'b9520cbe-ad1e-47eb-b6ae-ea1e4f2eb189', // replace with username from service key
        password: 'AOeSgNzC6WJQ', // replace with password from service key
        path: { workspace_id: 'cb800e78-8e21-46f0-af5d-534487b4de34' }, // replace with workspace ID
        version_date: '2017-07-07'
    }
    );

// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
    if (err) {
        console.error(err); // something went wrong
        return;
    }

    // If an intent was detected, log it out to the console.
    if (response.intents.length > 0) {
        console.log('Detected intent: #' + response.intents[0].intent);
    }

    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }

    // Prompt for the next round of input.
    var newMessageFromUser = prompt('>> ');

    conversation.message
        ({
            input: { text: newMessageFromUser }

        }, processResponse
        )

    

}




