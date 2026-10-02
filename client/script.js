const roleItems = document.querySelectorAll('.role-item');
const paragraphs = document.querySelectorAll('.overlay-container .paragraph');
const experienceList = document.getElementById('experience-list');

roleItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const targetClass = item.getAttribute('data-target');
        const activeParagraph = document.querySelector(`.overlay-container .${targetClass}`);

        paragraphs.forEach((p) => p.classList.remove('p-active'));

        if (activeParagraph) {
            activeParagraph.classList.add('prep-left');
            
            void activeParagraph.offsetHeight;

            activeParagraph.classList.remove('prep-left');
            activeParagraph.classList.add('p-active');
        }
    });
});

if (experienceList) {
    experienceList.addEventListener('mouseleave', () => {
        paragraphs.forEach((p) => {
            p.classList.remove('p-active', 'prep-left');
        });
    });
}