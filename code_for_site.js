document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const messageDiv = document.getElementById('message');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const review = document.getElementById('review').value;

        if (name.trim() === '' || email.trim() === '' || review.trim() === '') {
            messageDiv.textContent = 'Пожалуйста, заполните все поля!';
            messageDiv.style.color = 'red';
            return;
        }

        console.log('Отзыв получен:', { name, email, review });

        messageDiv.textContent = 'Спасибо! Ваш отзыв успешно отправлен.';
        messageDiv.style.color = 'black';

        reviewForm.reset();
    });
});
