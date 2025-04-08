const filterButton = document.querySelector('.filter-button');
const filterForm = document.getElementById('filter-form');

// Добавляем обработчик события на кнопку
filterButton.addEventListener('click', function() {
    // Переключаем видимость формы
    if (filterForm.style.display === 'none' || filterForm.style.display === '') {
        filterForm.style.display = 'block'; // Показываем форму
    } else {
        filterForm.style.display = 'none'; // Скрываем форму
    }
});