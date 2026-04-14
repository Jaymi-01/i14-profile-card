function updateCurrentTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now().toString();
  }
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
