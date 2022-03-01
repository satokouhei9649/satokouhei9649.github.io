'use strict'; 
{
const mysite = document.getElementById('mysite');
const show = document.getElementById('show');
const close = document.getElementById('btn');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');
const myapp1_btn = document.querySelector('.myapp1_btn');
const myapp2_btn = document.querySelector('.myapp2_btn');
const myapp_modal1 = document.getElementById('modal-work1');
const myapp_modal2 = document.getElementById('modal-work2');
const myapp1_back = document.querySelector('.myapp1_back');
const myapp2_back = document.querySelector('.myapp2_back');

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
myapp1_btn.addEventListener('click', ()=> {
  myapp_modal1.classList.remove('hidden');
  mask.classList.remove('hidden');
});
myapp2_btn.addEventListener('click', ()=> {
  myapp_modal2.classList.remove('hidden');
  mask.classList.remove('hidden');
});
myapp1_back.addEventListener('click', ()=> {
  myapp_modal1.classList.add('hidden');
  mask.classList.add('hidden');
})
myapp2_back.addEventListener('click', ()=> {
  myapp_modal2.classList.add('hidden');
  mask.classList.add('hidden');
})


}