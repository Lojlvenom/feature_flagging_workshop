const socket = io("http://localhost:3000/")

function home_image(checkbox) {
    if (checkbox.checked) {
        socket.emit('features', 'home_image_enable');
    } else {
        socket.emit('features', 'home_image_disable');
    }
}

function check_background(checkbox) {
    if (checkbox.checked) {
        socket.emit('features', 'backgroun_enable');
    } else {
        socket.emit('features', 'backgroun_disable');
    }
}

function check_form(checkbox) {
    if (checkbox.checked) {
        socket.emit('features', 'form_enable');
    } else {
        socket.emit('features', 'form_disable');
    }
}

function check_navigation(checkbox) {
    if (checkbox.checked) {
        socket.emit('features', 'navigation_enable');
    } else {
        socket.emit('features', 'navigation_disable');
    }
}