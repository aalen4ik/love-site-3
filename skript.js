// Дата начала отношений
const startDate = new Date(2024, 10, 2);

function updateTimer() {

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById('days').textContent = days;

    document.getElementById('hours').textContent =
        String(hours).padStart(2, '0');

    document.getElementById('minutes').textContent =
        String(minutes).padStart(2, '0');

    document.getElementById('seconds').textContent =
        String(seconds).padStart(2, '0');
}

// Обновляем каждую секунду
updateTimer();

setInterval(updateTimer, 1000);