

function isUserEvent(message) {
    let evt = JSON.parse(message.data);
    return evt.type === 'userevent';
}

function isGameEvent(message) {
    let evt = JSON.parse(message.data);
    return evt.type === 'gamechange';
}