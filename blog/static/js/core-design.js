var core_design;
(function (core_design) {
  core_design.showMenu = function() {
    core_design.bodyScrollOff();
    core_design.addClass('#menu', '-is--open');
  }
  core_design.hideMenu = function() {
    core_design.bodyScrollOn();
    core_design.removeClass('#menu', '-is--open');
    core_design.hideSecondMenu();
  }
  core_design.showSecondMenu = function() {
    core_design.addClass('.-menu--first', '-is--second-open');
    core_design.addClass('.-menu--second', '-is--open');
  }
  core_design.hideSecondMenu = function() {
    core_design.removeClass('.-menu--first', '-is--second-open');
    core_design.removeClass('.-menu--second', '-is--open');
  }

  core_design.isScrolledIntoView = function(el) {
    return (el.getBoundingClientRect().top <= window.innerHeight-100);
  }

  core_design.bodyScrollOff = function() {
    document.body.style.overflow = 'hidden';
  }
  core_design.bodyScrollOn = function() {
    document.body.style.overflow = '';
  }
  core_design.hasClass = function(selector, className) {
    var el = core_design.element(selector);
    if (el.classList)
      return el.classList.contains(className);
    else
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
  core_design.addClass = function(selector, className) {
    var el = core_design.element(selector);
    if (el && el.classList)
      el.classList.add(className);
    else if (el)
      el.className += ' ' + className;
  }
  core_design.removeClass = function(selector, className) {
    var el = core_design.element(selector);
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  core_design.elements = function(selector) {
    return document.querySelectorAll(selector);
  }
  core_design.element = function(selector) {
    var els = core_design.elements(selector);
    if(els.length > 0) {
      return els[0];
    }
    else {
      return null;
    }
  }

})(core_design || (core_design = {}));
