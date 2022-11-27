const form = document.querySelector('#main-form');
const url = document.querySelector('#url');
const addBtn = document.querySelector('#add');
const priority = document.querySelector('#priority');
const emptyform = document.querySelector('#empty');



addBtn.addEventListener('click', function (event){
    event.preventDefault;
    const imageurl = url.value;
    const img = document.createElement('img');
    img.src = imageurl;
    document.body.appendChild(img);
})


const deletebtn = document.createElement('button');
deletebtn.innerHTML = 'Delete';

emptyform.appendChild(deletebtn);

deletebtn.addEventListener('click', () => {
    img.remove();
})


deletebtn.style.backgroundColor='blue';
deletebtn.style.margin='20px';
deletebtn.style.color='whitesmoke';


img.style.margin='100px';


filterObj('all')
function filterObj(c) {
    const x = document.querySelector('img')
    if (c == 'all') c = '';
    for (let i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element, name) {
    const arr1 = element.className.split('');
    const arr2 = name.split('');
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i] == -1)) {
            element.className += " " + arr1[i];
        }
    }
}

function removeClass(element, name) {
    const arr1 = element.className.split('');
    const arr2 = name.split('');
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.index(arr2[i] > -1)) {
            arr1.splice(arr1.indexOf(arr2[i], 1));
        }
    }
    element.className = arr1.join(' ');
}