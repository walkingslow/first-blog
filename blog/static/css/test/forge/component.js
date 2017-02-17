//read the query string from the page
function readQueryString() {
  var query = {};
  location.search.substr(1).split("&").forEach(function(item) {
    var str = item.split("="),
        key = str[0],
        val = str[1] && decodeURIComponent(str[1]);
    query[key] = val;
  })
  return query;
}

//find the matching component for the component.js file
function findByName(arr, name) {
  var result;
  arr.forEach(function(item) {
    if(item.name === name) {
      result = item;
    }
  });
  return result;
}

//create classes
function createPropertyClass(component, prop, index) {
  return ' -' + prop + '--' + component.properties[prop][index];
}
function createStateClass(state, prefix) {
  return ' -' + prefix + '--' + state;
}
function createClassesFromComponent(component, query) {
  var classes = '';
  var states = '';
  var preset;
  for(var item in query) {
    if(item.startsWith('prop-')) {
      classes += createPropertyClass(component, item.replace('prop-',''), query[item]);
    }
    if(item.startsWith('state-')) {
      states += createStateClass(item.replace('state-',''), query[item]);
    }
    if(item == 'preset') {
      preset = query[item];
    }
  };
  if(preset) {
    return ' class="' + component.name + '--' + preset + states + '"';
  }
  else {
    return ' class="' + component.name + classes + states + '"';
  }
}

//output the start of the tag
function startTag(elements, name, component, query) {
  if(!name) return '';
  var element = findByName(elements, name);
  if(!element || element.tag==='') return '';

  //we found the tag, create the HTML
  var result =  '<' + element.tag;

  //add required and optional attributes
  element.requiredAttrs.forEach(function(item) {
    result += ' ' + item.prop + '="' + item.val +'"'
  });
  if(element.optionalAttrs) {
    element.optionalAttrs.forEach(function(item) {
      result += ' ' + item.prop + '="' + item.val +'"'
    });
  }

  //add class attrbute from component prop/state/var
  if(component) {
    result += createClassesFromComponent(component, query)
  }
  if(element.content) {
    return result + '>' + element.content;
  }
  return result + '>';
}

//output the END of the tag
function endTag(elements, name) {
  if(!name) return '';
  var element = findByName(elements, name);
  if(!element || element.tag==='') return '';

  //we found the tag, create the HTML
  return '</' + element.tag + '>';
}

//generate the HTML for the given component
function generate(component, query) {
  var result;

  //START PARENT and ELEMENT tags
  result = startTag(component.parentHtml, query.parent);
  result += startTag(component.elementHtml, query.element, component, query);

  //if its a named inner html than inject it, otherwise just inject whatever they put in the query string
  //***SECURITY RISK for test use only
  var inner = findByName(component.innerHtml, query.inner);
  if(inner) {
    result += inner.html;
  }
  else {
    if(query.inner) {
      result += query.inner;
    }
  }

  //END PARENT and ELEMENT tags
  result += endTag(component.elementHtml, query.element);
  result += endTag(component.parentHtml, query.parent);
  return result;
}
function setHtmlRootClass(query) {
  var rootClass = '';
  if(query.ge == 'true') rootClass += 'ge';
  if(query.base) rootClass += ' -base--' + query.base;
  if(query.theme) rootClass += ' -theme--' + query.theme;

  var root = document.documentElement;
  root.className = rootClass;
}


//generate HTML for the component based on query string options
function createComponentHTML() {
  var query = readQueryString();
  setHtmlRootClass(query);
  var component = findByName(components, query.component);
  if(component) return window.html_beautify(generate(component, query));
  return '';
}

// create a root instance
new Vue({
  el: '#area',
  computed: {
    componentHTML: createComponentHTML
  }
})
