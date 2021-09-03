const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = Number(counter.getAttribute('data-target'));
        const currentCounter = Number(counter.innerText);

        const increment = target / 200;

        if (currentCounter < target) {
            counter.innerText = `${Math.ceil(currentCounter + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});