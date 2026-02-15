const page = document.getElementById('gridPage');
const retired = document.getElementById('retiredToggle');

retired.addEventListener('change', (e) => {
  if(e.target.checked) {
    page.classList.add('showRetired');
  } else {
    page.classList.remove('showRetired');
  }
});