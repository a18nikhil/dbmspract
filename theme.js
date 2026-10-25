(function(){
 const root=document.documentElement;
 const btn=document.getElementById('theme-toggle');
 if(!btn)return;
 const COPY_SUN='<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';
 const COPY_MOON='<path d="M20.985 12.486A9 9 0 0 1 11.514 3.015a9 9 0 1 0 9.47 9.47Z"/>';
 function current(){return root.getAttribute('data-theme')==='light'?'light':'dark'}
 function render(){
   const mode=current();
   const target=mode==='dark'?'light':'dark';
   btn.setAttribute('aria-label','Switch to '+target+' mode');
   btn.setAttribute('title','Switch to '+target+' mode');
   btn.setAttribute('aria-pressed',String(mode==='dark'));
   const label=btn.querySelector('.theme-label');if(label)label.textContent=target==='light'?'Light mode':'Dark mode';
   const icon=btn.querySelector('.theme-icon');if(icon)icon.innerHTML=mode==='dark'?COPY_SUN:COPY_MOON;
 }
 btn.addEventListener('click',()=>{
   const next=current()==='dark'?'light':'dark';
   root.setAttribute('data-theme',next);
   try{localStorage.setItem('dbmspract-theme',next)}catch(e){}
   render();
 });
 render();
})();
