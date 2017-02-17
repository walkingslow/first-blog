angular.module('editorApp', [])
  .controller('editorController', function($sce) {
    var editor = this;
    editor.components = components; //from components.js
    editor.testParams = {};
    editor.testParams.ge = true;
    editor.testParams.prop = [];
    editor.testParams.states = [];
    editor.url = $sce.trustAsResourceUrl('component.html');

    editor.changed = function(comp) {
      editor.testParams.parentHtml = comp.parentHtml[0].name;
      editor.testParams.elementHtml = comp.elementHtml[0].name;
      editor.testParams.innerHtml = comp.innerHtml[0].name;
    }

    editor.createUrl = function() {
      var query = "?component=" + editor.component.name + "&cache=" + Date.now();

      query+= "&ge=" + editor.testParams.ge;
      if(editor.testParams.base) query+= "&base=" + editor.testParams.base;
      if(editor.testParams.theme) query+= "&theme=" + editor.testParams.theme;
      if(editor.testParams.parentHtml) query+= "&parent=" + editor.testParams.parentHtml;
      if(editor.testParams.elementHtml) query+= "&element=" + editor.testParams.elementHtml;
      if(editor.testParams.innerHtml) query+= "&inner=" + editor.testParams.innerHtml;
      if(editor.testParams.preset) query+= "&preset=" + editor.testParams.preset;
      for(i in editor.testParams.prop) {
        query+= "&" + editor.testParams.prop[i];
      }
      for(i in editor.component.states) {
        if(editor.component.states[i].checked) query+= "&" + 'state-' + editor.component.states[i].name + '=' + editor.component.states[i].prefix;
      }
      editor.url = $sce.trustAsResourceUrl('component.html' + query);
      return editor.url;
    }
    editor.refresh = function() {
      return editor.createUrl();
    }
    editor.openNewWindow = function() {
      window.open(editor.url);
    }

  });
