document.addEventListener('DOMContentLoaded', function() {
    const panoramaElement = document.getElementById('panorama');
    
    const viewer = document.createElement('div');
    viewer.classList.add('pannellum-viewer');
    panoramaElement.appendChild(viewer);

    const image = new Image();
    image.src = 'bankebiharitemple.jpeg';
    
    image.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0, 0);

        viewer.style.backgroundImage = `url(${canvas.toDataURL()})`;
};
});