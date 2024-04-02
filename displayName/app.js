const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
  let currentIndex = 0;

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % names.length;
    document.getElementById('nameDisplay').textContent = names[currentIndex];
  });

  document.getElementById('previousBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    document.getElementById('nameDisplay').textContent = names[currentIndex];
  });
