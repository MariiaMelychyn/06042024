document.addEventListener('DOMContentLoaded', function () {
    
    // Перевірка наявності вибраної теми у локальному сховищі браузера
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme);  // Вивід у консоль значення теми, яке зберігається у локальному сховищі

    // Якщо тема збережена у локальному сховищі, додаємо відповідний клас до тіла сторінки 
    if (savedTheme) {
        document.body.classList.add(savedTheme);

    }

    // Додаємо обробник події для чекбоксу (зміни теми)
    document.getElementById('checkbox').addEventListener('change', function () {
        const isDarkMode = this.checked;  // Визначення чи включений чекбокс (темна тема)

        // Зберігаємо вибрану тему у локальному сховищі браузера
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // Додаємо або видаляємо класи для зміни теми в залежності від вибору користувача
        document.body.classList.toggle('dark', isDarkMode);
        document.body.classList.toggle('light', !isDarkMode);
    });
});