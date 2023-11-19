import mobileNav from './modules/mobile-nav.js';
mobileNav();

const btnServ = document.getElementById('services');

btnServ.addEventListener('click', function show() {
    btnServ.classList.toggle('blue-btn-click');
});

const thanks = document.getElementById('thanks');
const btn_congr = document.getElementById('btn-congr');
const input_btn = document.getElementById('input-btn');

btn_congr.addEventListener('click', function showMes() {
    thanks.classList.add('thanks');
    input_btn.value = "";
    if (thanks.classList.contains('thanks')) {
        setTimeout( function() {
            thanks.classList.remove('thanks');
        }, 3600);
    }
})

const remove_btn = document.getElementById('remove-btn');

remove_btn.addEventListener('click', function rem() {
    input_btn.focus();
});
