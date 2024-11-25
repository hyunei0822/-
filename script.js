document.addEventListener('DOMContentLoaded', function() {
    var sendButton = document.querySelector('.send-button');
    var messageInput = document.querySelector('.message-input');
    
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // 페이지 로드 시 저장된 대화를 불러와서 화면에 표시
    loadMessages();
});

function sendMessage() {
    var messageInput = document.querySelector('.message-input');
    var message = messageInput.value;
    displayMessage(message, true); // true는 내가 보낸 메시지인지 여부를 나타냄

    // 서버로 메시지를 보내는 Ajax 요청 등의 코드를 추가할 수 있음

    // 메시지를 로컬 스토리지에 저장
    saveMessage(message);

    // 메시지 입력란 초기화
    messageInput.value = '';
}

function displayMessage(message, fromMe) {
    var chatMessages = document.querySelector('.chat-messages');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (fromMe) {
        messageDiv.classList.add('from-me');
    }
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}

function saveMessage(message) {
    var messages = localStorage.getItem('chatMessages');
    if (!messages) {
        messages = [];
    } else {
        messages = JSON.parse(messages);
    }
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

function loadMessages() {
    var messages = localStorage.getItem('chatMessages');
    if (messages) {
        messages = JSON.parse(messages);
        messages.forEach(function(message) {
            displayMessage(message, false); // false는 상대방이 보낸 메시지인지 여부를 나타냄
        });
    }
}
