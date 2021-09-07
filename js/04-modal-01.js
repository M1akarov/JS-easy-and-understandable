// Находи нужные элементы : кнопка модалки , модалка , кнопка закрытия
const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');

// Слушаем кнопку открытия - открываем модалку
button.addEventListener('click', function() {
        modal.classList.remove('hidden');
});

// Слушаем кнопку закрытия - закрываем модалку

buttonClose.addEventListener('click', function() {
        modal.classList.add('hidden');
  });

  modal.addEventListener('click', function(){
    modal.classList.add('hidden');
  });

  modal.querySelector('.modal-window').addEventListener('click', function(e) {
    e.stopPropagation();
  });