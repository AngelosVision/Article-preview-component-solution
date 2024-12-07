
function toggleMessage() {
    var btn = document.querySelector('.profile-btn');
    var messageBox = document.getElementById('messageBox');
    
    btn.classList.toggle('clicked');
    if (messageBox.style.display === 'none' || messageBox.style.display === '') {
        messageBox.style.display = 'flex';
        document.addEventListener('click', handleClickOutside, true);
    } else {
        messageBox.style.display = 'none';
        document.removeEventListener('click', handleClickOutside, true);
    }
}

function handleClickOutside(event) {
    var messageBox = document.getElementById('messageBox');
    var btn = document.querySelector('.profile-btn');
    
    if (!messageBox.contains(event.target) && !btn.contains(event.target)) {
        messageBox.style.display = 'none';
        document.removeEventListener('click', handleClickOutside, true);
    }
}
