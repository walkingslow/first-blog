var core_site;
(function (core_site) {
  core_site.showMenu = function() {
    core_site.bodyScrollOff();
    core_site.addClass('#menu', '-is--open');
  }
  core_site.hideMenu = function() {
    core_site.bodyScrollOn();
    core_site.removeClass('#menu', '-is--open');
    core_site.hideSecondMenu();
  }
  core_site.showSecondMenu = function() {
    core_site.addClass('.-menu--first', '-is--second-open');
    core_site.addClass('.-menu--second', '-is--open');
  }
  core_site.hideSecondMenu = function() {
    core_site.removeClass('.-menu--first', '-is--second-open');
    core_site.removeClass('.-menu--second', '-is--open');
  }
  core_site.stickyset = false;
  core_site.explodeset = false;
  core_site.checkScroll = function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 280 && !core_site.stickyset) {
      core_site.addClass('.ge-page', '-is--sticky');
      core_site.stickyset = true;
    }
    else if(scrollTop <= 280 && core_site.stickyset) {
      core_site.removeClass('.ge-page', '-is--sticky');
      core_site.stickyset = false;
    }
    if (scrollTop > 380 && scrollTop < 980 && !core_site.explodeset) {
      core_site.addClass('.card-explode', 'active');
      core_site.explodeset = true;
    }
    else if((scrollTop <= 380 || scrollTop >= 980) && core_site.explodeset) {
      core_site.removeClass('.card-explode', 'active');
      core_site.explodeset = false;
    }
    if (scrollTop < 700) {
      var dtv = core_site.element('.device-tv');
      var diphone = core_site.element('.device-iphone');
      var dipad = core_site.element('.device-ipad');
      var dmacbook = core_site.element('.device-macbook');
      var dflow = core_site.element('#device-flow');
      dtv.style.transform = 'translateY(' + (scrollTop * -0.1) + 'px)';
      diphone.style.transform = 'translateY(' + (scrollTop * -0.4) + 'px)';
      dipad.style.transform = 'translateY(' + (scrollTop * -0.3) + 'px)';
      dmacbook.style.transform = 'translateY(' + (scrollTop * -0.2) + 'px)';
      //dflow.style.backgroundPositionY = (70 + (scrollTop * -0.1)) + '%';
    }
    if (scrollTop > 400) {
      var icircle1 = core_site.element('.img-circle1');
      var icircle2 = core_site.element('.img-circle2');
      var offset = (icircle2.getBoundingClientRect().top - 500) * 2;
      if(offset > 0 && offset < 1000) {
        icircle1.style.transform = 'translateX(-' + (offset/4) + 'px)';
        icircle1.style.opacity = 1 - (offset * 0.002);
        icircle2.style.transform = 'translateX(' + (offset/4) + 'px)';
        icircle2.style.opacity = 1 - (offset * 0.002);
      }
      else if (icircle2.style.opacity != 1){
        icircle1.style.transform = 'translateX(0px)';
        icircle1.style.opacity = 1;
        icircle2.style.transform = 'translateX(0px)';
        icircle2.style.opacity = 1;
      }
    }

  }
  document.addEventListener('DOMContentLoaded',function(){
    if(core_site.hasClass('.ge-page', '-scroll--sticky')) {
      window.onscroll = core_site.checkScroll;
      core_site.checkScroll();
    }
  });
  core_site.isScrolledIntoView = function(el) {
    return (el.getBoundingClientRect().top <= window.innerHeight-100);
  }


  core_site.bodyScrollOff = function() {
    document.body.style.overflow = 'hidden';
  }
  core_site.bodyScrollOn = function() {
    document.body.style.overflow = '';
  }
  core_site.hasClass = function(selector, className) {
    var el = core_site.element(selector);
    if (el.classList)
      return el.classList.contains(className);
    else
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
  core_site.addClass = function(selector, className) {
    var el = core_site.element(selector);
    if (el && el.classList)
      el.classList.add(className);
    else if (el)
      el.className += ' ' + className;
  }
  core_site.removeClass = function(selector, className) {
    var el = core_site.element(selector);
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  core_site.elements = function(selector) {
    return document.querySelectorAll(selector);
  }
  core_site.element = function(selector) {
    var els = core_site.elements(selector);
    if(els.length > 0) {
      return els[0];
    }
    else {
      return null;
    }
  }

})(core_site || (core_site = {}));
