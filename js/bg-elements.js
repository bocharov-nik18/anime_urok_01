// Запись в констаннту elements все объекты (массив) с классом .set-bg    <div> с адресами картинок
const elements = document.querySelectorAll('.set-bg')
// Просмотр в консоле
// console.log(elements);
for (let i = 0; i < elements.length; i++) {
    // data-setbg
    //    console.log(elements[i]);
    //    console.log(i);
    // раскрыть элементы div.product__item__pic.set-bg  обект dataset -> путь к картинке setbg:
    //console.dir(elements[i]);
    const src = elements[i].dataset.setbg
    //    elements[i].style.backgroundImage = 'url(' + src + ')'
    elements[i].style.backgroundImage = `url(${src})`
    //    console.log(src);
    //    console.dir(elements[i]);
}
