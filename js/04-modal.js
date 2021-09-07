const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки открыть модалки

modalButtons.forEach( function(item) {
  item.addEventListener('click', function() {
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    modal.classList.remove('hidden');

    // Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх по цепочке родителям"
    modal.querySelector('.modal-window').addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
});
// Кнопки закрыть модалки
modalClosebuttons.forEach(function(item) {
  item.addEventListener('click', function() {
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');
  });
});

// Закрытие модалки по фейду
allModals.forEach(function(item) {
  item.addEventListener('click', function() {
    this.classList.add('hidden');
  });
});



