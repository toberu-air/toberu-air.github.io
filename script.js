let rotation = 0;

const logo = document.getElementById('logo');

logo.addEventListener('click', function() {
    rotation += 360; // Her tıklamada 360 derece ekle
    logo.style.transform = `rotate(${rotation}deg)`; // Yeni rotasyonu uygula
});
