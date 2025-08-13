document.getElementById('photo-btn').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

document.getElementById('video-btn').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const previewArea = document.getElementById('preview-area');
    previewArea.innerHTML = '';

    if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = '100%';
        previewArea.appendChild(img);
    } 
    else if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.controls = true;
        video.style.maxWidth = '100%';
        previewArea.appendChild(video);
    }

    document.getElementById('download-btn').disabled = false;
});

document.getElementById('download-btn').addEventListener('click', () => {
    alert('HD Conversion Complete! Downloading...');
    // In a real app, you would process the file here
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent! We will contact you soon.');
    this.reset();
});
