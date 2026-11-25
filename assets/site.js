(function(){
  var d=document.documentElement;
  d.classList.remove('no-js');d.classList.add('js');

  // mobile menu
  var h=document.querySelector('header.site'),b=document.querySelector('.burger');
  if(h&&b){b.addEventListener('click',function(){
    var o=h.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');
  });}

  // tagline words fade in as they scroll into view
  var w=[].slice.call(document.querySelectorAll('.tagline span'));
  if(!w.length)return;
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    w.forEach(function(s){s.classList.add('on')});return;
  }
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){var i=w.indexOf(e.target);setTimeout(function(){e.target.classList.add('on')},i*40);io.unobserve(e.target)}
  })},{rootMargin:'0px 0px -20% 0px'});
  w.forEach(function(s){io.observe(s)});
})();
