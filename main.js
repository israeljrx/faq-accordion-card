const headerFaqs = document.querySelectorAll('article header');
const paragraphAnswer = document.querySelectorAll('article p');
const titleFaqs = document.querySelectorAll('article header h2');
const arrowTitle = document.querySelectorAll('article header img');

function toggleAnswer(index) {
  titleFaqs[index].classList.toggle('active-title');
  paragraphAnswer[index].classList.toggle('close');
  paragraphAnswer[index].classList.toggle('open');
  arrowTitle[index].classList.toggle('active-img');
}

headerFaqs.forEach((item, index) => {
  item.addEventListener('click', () => {
    toggleAnswer(index);
  });
});
