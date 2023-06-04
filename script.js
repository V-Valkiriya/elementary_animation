const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');

//function myAnimation() {
//    const elem = document.querySelector('.box');
//    let pos = 0;

//    const id = setInterval(frame, 10);
//    function frame() {
//        if (pos === 300) {
//            clearInterval();
//        } else {
//            pos++;
//            elem.style.top = pos + 'px';
//            elem.style.left = pos + 'px';
//        }
//    } 
// }

// btn.addEventListener('click', myAnimation);

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);
