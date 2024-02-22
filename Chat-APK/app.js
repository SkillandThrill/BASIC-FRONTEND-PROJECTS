    // JavaScript code for real-time chat application
    document.addEventListener('DOMContentLoaded', function() {
        const chatMessages = document.getElementById('chat-messages');
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');

        // Function to add a new message to the chat interface
        function addMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.innerText = message;
            chatMessages.appendChild(messageElement);
        }

        // Function to send a message
        function sendMessage() {
            const message = messageInput.value.trim();
            if (message !== '') {
                addMessage('You: ' + message);
                // Simulate sending message to server (not implemented in this example)
                messageInput.value = '';
            }
        }

        // Event listener for send button click
        sendButton.addEventListener('click', function() {
            sendMessage();
        });

        // Event listener for pressing Enter key in message input field
        messageInput.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) { // Enter key
                sendMessage();
            }
        });

        // Simulated incoming messages (for demonstration purposes)
        setTimeout(function() {
            addMessage('Friend: Hi there!');
        }, 1000);

        setTimeout(function() {
            addMessage('Friend: How are you?');
        }, 2000);
    });