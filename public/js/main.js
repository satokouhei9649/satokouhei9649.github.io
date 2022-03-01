'use strict'; 
{
const mysite = document.getElementById('mysite');
const show = document.getElementById('show');
const close = document.getElementById('btn');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');
const myapp_btn = document.querySelector('.myapp_btn');
const myapp_modal = document.getElementById('modal-work1');
const myapp_back = document.querySelector('.myapp_back');

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
myapp_btn.addEventListener('click', ()=> {
  myapp_modal.classList.remove('hidden');
});
myapp_back.addEventListener('click', ()=> {
  myapp_modal.classList.add('hidden');
  mask.classList.add('hidden');
})


}