'use strict'; 
{
const mysite = document.getElementById('mysite')
const show = document.getElementById('show')
const close = document.getElementById('btn')
const mask = document.getElementById('mask')

mysite.addEventListener('click', () => {
  show.classList.remove('hidden');
  mask.classList.remove('hidden');
});
close.addEventListener('click', () => {
  show.classList.add('hidden');
  mask.classList.add('hidden');
});
mask.addEventListener('click', () => {
  show.classList.add('hidden');
  mask.classList.add('hidden');
});


}