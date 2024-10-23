let itemBorder = document.getElementsByClassName('nav__item-border')
let item = document.getElementsByClassName('nav__item')
let title = document.getElementsByClassName('header__top-title')
let tab = document.getElementsByClassName('tab')
let tabBorder = document.getElementsByClassName('tab__border')
let settingsTab = document.getElementsByClassName('settings-tab')
let burger = document.getElementById('burger')
let nav = document.getElementById('header__nav')
let burgerSpan = document.getElementById('burger__span')
let overlay = document.getElementById('overlay')

Array.from(item).forEach((el, index) => {
   el.onclick = () => {
      for (let i = 0; i < item.length; i++) {
         item[i].classList.remove('nav__item--acive')
         itemBorder[i].classList.remove('nav__item-border--active')
      }
      itemBorder[index].classList.toggle('nav__item-border--active');
      el.classList.toggle('nav__item--acive');
      title[0].innerText = el.innerText
   };
});
Array.from(tab).forEach((el, index) => {
   el.onclick = () => {
      for (let i = 0; i < tab.length; i++) {
         tab[i].classList.remove('tab--active')
         tabBorder[i].classList.remove('tab__border--active')
         settingsTab[i].classList.add('settings-tab--off')
      }
      tabBorder[index].classList.toggle('tab__border--active');
      settingsTab[index].classList.remove('settings-tab--off')
      el.classList.toggle('tab--active');
   };
});

burger.onclick = () => {
   nav.classList.toggle('header__nav--open')
   burgerSpan.classList.toggle('burger__span--active')
   burger.classList.toggle('burger--active')
   overlay.classList.toggle('overlay--active')
}