const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);


carouselList.addEventListener('click', function (event) {
    let newActive = event.target;
    let isItem = newActive.closest('.carousel__item');

    if (!isItem || newActive.classList.contains('carousel__item_active')) {
        return;
    };

    update(newActive);
});


const update = function (newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first0 = elems.find((elem) => elem.dataset.pos == -2);
    const last0 = elems.find((elem) => elem.dataset.pos == 2);
    const first = elems.find((elem) => elem.dataset.pos == -3);
    const last = elems.find((elem) => elem.dataset.pos == 3);

    current.classList.remove('carousel__item_active');

    [current, prev, next, first0, last0, first, last].forEach(item => {
        let itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 3) {
        return -current
    }

    return diff;
}

  