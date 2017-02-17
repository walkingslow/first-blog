var components = components || [];
components.push({
    name: 'ge-text-input',
    elementHtml: [
      { name: 'input with placeholder', tag: 'input', requiredAttrs: [ { prop: 'type', val: 'text'} ], optionalAttrs: [ { prop: 'placeholder', val: 'Hint' }]},
      { name: 'input no placeholder', tag: 'input', requiredAttrs: [ { prop: 'type', val: 'text'} ], optionalAttrs: []},
      { name: 'disabled', tag: 'input', requiredAttrs: [ { prop: 'type', val: 'text'} ], optionalAttrs: [ { prop: 'placeholder', val: 'Hint' }, { prop: 'disabled', val: 'true'}]}
    ],
    parentHtml: [
      { name: 'relativeDiv', tag:'div', requiredAttrs: [{prop:'style', val:'position:relative'}]}
    ],
    properties: {
      spacing: ['dense', 'standard']
    },
    states: [
      { name: 'error', prefix: 'has'}
    ],
    innerHtml: []
  }
);
