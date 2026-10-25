(function(){
 const root=document.documentElement;
 const btn=document.getElementById('theme-toggle');
 if(!btn)return;
 const media=window.matchMedia('(prefers-color-scheme: dark)');
 function current(){return root.getAttribute('data-theme')||(media.matches?'dark':'light')}
 function render(){const mode=current();btn.setAttribute('aria-label','Switch to '+(mode==='dark'?'light':'dark')+' mode');btn.setAttribute('title','Switch to '+(mode==='dark'?'light':'dark')+' mode');btn.setAttribute('aria-pressed',String(mode==='dark'));btn.querySelector('.theme-label').textContent=mode==='dark'?'Light mode':'Dark mode';btn.querySelector('.theme-icon').innerHTML=mode==='dark'?'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>':'<path d="M20.985 12.486A9 9 0 0 1 11.514 3.015a9 9 0 1 0 9.47 9.47Z"/>'}
 btn.addEventListener('click',()=>{const next=current()==='dark'?'light':'dark';root.setAttribute('data-theme',next);try{localStorage.setItem('dbmspract-theme',next)}catch(e){}render()});
 if(media.addEventListener)media.addEventListener('change',render);else if(media.addListener)media.addListener(render);
 render();
})();
