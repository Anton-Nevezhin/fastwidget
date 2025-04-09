
   
  let newdiv = document.createElement('div');
  document.body.appendChild(newdiv)
  let newbtn = document.createElement('div');
  document.body.appendChild(newbtn)
  let newstyle = document.createElement('style');
  document.head.appendChild(newstyle)
  newstyle.innerHTML = '.fast-widget-mob-bottom-item {border-bottom: 1px solid #f3f3f3; padding: 0; font-size: 15px; display: flex; align-items: center;}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-item:last-child {border-bottom: 0px solid lightgrey;} .fast-widget-mob-bottom-item a, .fast-widget-mob-bottom-item a:hover {text-decoration:none; color:' + fast_config.config[0].color + ';}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-item a {padding: 8px; display: flex; flex-grow: 1; align-items: center;} .fast-widget-mob-bottom-item a:hover {cursor:pointer; background:' + fast_config.config[0].background + ';}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-item svg {margin: 0 5px 0 0;}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom {position: fixed; bottom: 15px; z-index: 99; width: 60px; justify-content: center; padding: 5px 0; height: 60px; ' + fast_config.config[0].position + ': 15px; background: url(https://esteticmed39.ru/themes/simple-v1.0/images/in-touch.svg) no-repeat center center / 30px, #00ABAA; cursor: pointer; border-radius: 50%; box-shadow: 0 0 20px 0 rgb(0 0 0 / 30%);}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-open {position: fixed; overflow: hidden; z-index: 99; visibility: hidden; min-width: 300px;' + fast_config.config[0].position + ': 26px; bottom: 90px; background: white; padding: 10px; box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%); border-radius: 5px;}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-close {background: url(https://esteticmed39.ru/themes/simple-v1.0/images/icon-close.svg) no-repeat center center / 20px, white;}'
  
  
   for (let item of fast_config.elements) { //проходимся по кнопкам и выводим их
     if(item.url==undefined) {
       newdiv.innerHTML = newdiv.innerHTML + '<div class="fast-widget-mob-bottom-item"><a href="' + window.location.href + item.modal + '" target="_blank">' + item.icon + item.name + '</a></div>'
     } else {
      newdiv.innerHTML = newdiv.innerHTML + '<div class="fast-widget-mob-bottom-item"><a href="' + item.url + '" target="_blank">' + item.icon + item.name + '</a></div>'
     }
  }
  
  newdiv.classList.add('fast-widget-mob-bottom-open');
  newbtn.classList.add('fast-widget-mob-bottom');
  newbtn.onclick = function() {
      if (getComputedStyle(newdiv).visibility === 'hidden') {
          newdiv.style.visibility = 'visible';
          newbtn.classList.add('fast-widget-close');
      } else {
          newdiv.style.visibility = 'hidden';
          newbtn.classList.remove('fast-widget-close')
      }
    }

console.log(a)
