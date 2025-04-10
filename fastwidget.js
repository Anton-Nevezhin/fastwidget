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
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom {position: fixed; bottom: 15px; z-index: 99; width: 60px; justify-content: center; padding: 5px 0; height: 60px; ' + fast_config.config[0].position + ': 15px; background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjEuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+Cjxzdmcgcm9sZT0icHJlc2VudGF0aW9uIiBjbGFzcz0idDg5OF9faWNvbiB0ODk4X19pY29uLXdyaXRlIiB3aWR0aD0iMzUiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzNSAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTExLjI2NjcgMTIuNjk4MUgyMy4zNjY3TTExLjI2NjcgMTYuNDcxN0gyMy4zNjY3TTQuODEwNCAyMy41Nzc3QzIuNDMxMSAyMS4xOTA5IDEgMTguMTIxNSAxIDE0Ljc3MzZDMSA3LjE2Njc5IDguMzg3MjMgMSAxNy41IDFDMjYuNjEyOCAxIDM0IDcuMTY2NzkgMzQgMTQuNzczNkMzNCAyMi4zODA0IDI2LjYxMjggMjguNTQ3MiAxNy41IDI4LjU0NzJDMTUuNjI3OCAyOC41NDcyIDEzLjgyODYgMjguMjg2OCAxMi4xNTExIDI3LjgwNzJMMTIgMjcuNzkyNUw1LjAzMzMzIDMxVjIzLjgyMTlMNC44MTA0IDIzLjU3NzdaIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiPjwvcGF0aD4gPC9zdmc+Cg==) no-repeat center center / 30px, #00ABAA; cursor: pointer; border-radius: 50%; box-shadow: 0 0 20px 0 rgb(0 0 0 / 30%);}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-mob-bottom-open {position: fixed; overflow: hidden; z-index: 99; visibility: hidden; min-width: 300px;' + fast_config.config[0].position + ': 26px; bottom: 90px; background: white; padding: 10px; box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%); border-radius: 5px;}'
  newstyle.innerHTML = newstyle.innerHTML + '.fast-widget-close {background: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJwcmVzZW50YXRpb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBjbGFzcz0idDg5OF9faWNvbiB0ODk4X19pY29uLWNsb3NlIiB2aWV3Qm94PSIwIDAgMjMgMjMiPiA8ZyBmaWxscnVsZT0iZXZlbm9kZCI+IDxwYXRoIGQ9Ik0xMC4zMTQgLTMuNjg2SDEyLjMxNFYyNi4zMTRIMTAuMzE0eiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDExLjMxNCAxMS4zMTQpIj48L3BhdGg+IDxwYXRoIGQ9Ik0xMC4zMTQgLTMuNjg2SDEyLjMxNFYyNi4zMTRIMTAuMzE0eiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTEuMzE0IDExLjMxNCkiPjwvcGF0aD4gPC9nPiA8L3N2Zz4=) no-repeat center center / 20px, white;}'
  
  
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
