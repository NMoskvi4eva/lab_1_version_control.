let count = 0;

// ❌ БАГ: Вказано ID "count-btn", але в index.html кнопка має ID "counter-btn"
const button = document.getElementById('counter-btn');
const counterDisplay = document.getElementById('counter-value');

button.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});