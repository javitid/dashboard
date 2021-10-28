// Add hoved class in selected menu element
let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach(item => {
        item.classList.remove('hovered');
        this.classList.add('hovered');
    })
}

list.forEach(item => {
    item.addEventListener('mouseover', activeLink);
});

// Menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let principal = document.querySelector('.principal');

toggle.onclick = function () {
    navigation.classList.toggle('active');
    principal.classList.toggle('active');
}