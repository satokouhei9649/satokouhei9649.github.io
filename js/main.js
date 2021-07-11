'use strict'; 
{
const mysite = document.getElementById('mysite');
const show = document.getElementById('show');
const close = document.getElementById('btn');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

mysite.addEventListener('click', () => {
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
});
close.addEventListener('click', () => {
  modal.classList.add('hidden');
  mask.classList.add('hidden');
});
mask.addEventListener('click', () => {
  close.click();
});


}