var components = components || [];
components.push({
    name: 'ge-text-area',
    elementHtml: [
      { name: 'textarea with placeholder', tag: 'textarea', requiredAttrs: [ ], optionalAttrs: [ { prop: 'placeholder', val: 'Hint' }, { prop: 'rows', val: '5'}]},
      { name: 'textarea no placeholder', tag: 'textarea', requiredAttrs: [ ], optionalAttrs: [ { prop: 'rows', val: '5'}]},
      { name: 'disabled', tag: 'textarea', requiredAttrs: [ ], optionalAttrs: [ { prop: 'placeholder', val: 'Hint' }, { prop: 'disabled', val: 'true'}, { prop: 'rows', val: '5'}]}
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
