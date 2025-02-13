<script>
    // Функция для отображения текущей даты и времени
    function displayCurrentDateTime() {
        const dateTimeElement = document.createElement('div');
        dateTimeElement.className = 'text-gray-400 mb-4';
        const now = new Date();
        dateTimeElement.innerText = `Текущая дата и время: ${now.toLocaleString()}`;
        document.querySelector('.container').prepend(dateTimeElement);
    }

    // Функция для поиска мероприятий
    function searchEvents() {
        const searchInput = document.querySelector('input[type="text"]');
        const eventCards = document.querySelectorAll('.bg-gray-800');

        eventCards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchInput.value.toLowerCase())) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Добавляем обработчик события для поиска
    document.querySelector('input[type="text"]').addEventListener('input', searchEvents);

    // Вызываем функцию для отображения текущей даты и времени
    displayCurrentDateTime();
</script>
