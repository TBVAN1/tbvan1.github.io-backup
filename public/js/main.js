document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.querySelector('.image-container');

    imageContainer.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});
