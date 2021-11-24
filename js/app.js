//dropdown in a sidebar

const subMenuDropDown = document.querySelector('.sidebar__dropdown-menu');
const menuDropDown = document.querySelector('.sidebar__dropdown-link');
const arrow = document.querySelector('.menu-arrow');

menuDropDown.addEventListener('click', () => {
	subMenuDropDown.classList.toggle('active');
	arrow.classList.toggle('active');
	menuDropDown.classList.toggle('active');	
})


//table sorting

document.addEventListener('DOMContentLoaded', () => {
    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    document.querySelectorAll('.table thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));   
});


// mobile burher menu
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile__menu-active');
})

// more btn
const mobileMenuMore = document.getElementById('mobileMenu_more');
const mobileSubMenu = document.getElementById('mobileSubMenu');


mobileMenuMore.addEventListener('click', () => {
    mobileSubMenu.classList.toggle('mobile__subMenu-active')
})
