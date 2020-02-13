/* анимация */
let circleClick = document.getElementById('btn');
let static = document.getElementById('static');
let moveUp = document.getElementById('move');
let showUp = document.getElementById('show_up');
let blockStatic = document.getElementById('block_static');
let showStatic = document.getElementById('show_static');

circleClick.addEventListener('click', show);

function show() {
	moveUp.classList.add('move_up');
	static.classList.add('hidden');
    showUp.classList.add('visible');
	setTimeout(function(){
		static.style.display = 'none';
		showStatic.classList.add('opacity');
        blockStatic.style.display = 'block';
    }, 1700);
};

/* активная вкладка */

function light(){
  let tags = document.getElementsByTagName('li');
  for (i in tags) {
    if (tags[i].className == 'check') {
        if (document.location.href == tags[i].firstChild.href){
            tags[i].className +=' active';
        }
    }
  }
};

light();


/* раскрытие блока в мобильной версии */

let openBtn = document.querySelector('.article_btn');
let arrow = document.querySelector('.arrow');
let itemDown = document.querySelector('.article_info');

openBtn.addEventListener('click', open);

function open() {
	arrow.classList.toggle('open');
	itemDown.classList.toggle('open');
}


