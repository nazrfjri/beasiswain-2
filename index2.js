// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Find the 'Daftar Beasiswa' button
    const daftarButton = document.querySelector('a.bg-blue-500');

    // Add an event listener to the button
    daftarButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        window.location.href = 'https://rencanamu.id/'; // Redirect to the scholarship site
    });
});