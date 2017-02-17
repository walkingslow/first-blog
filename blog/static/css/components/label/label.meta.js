var components = components || [];
components.push({
    name: 'ge-label',
    elementHtml: [
      { name: 'label', tag: 'label', requiredAttrs: [], optionalAttrs: []}
    ],
    parentHtml: [
      { name: 'relativeDiv', tag:'div', requiredAttrs: [{prop:'style', val:'position:relative'}]}
    ],
    properties: {
      spacing: ['dense', 'standard']
    },
    states: [
      { name: 'error', prefix: 'has'},
      { name: 'visible', prefix: 'is'}
    ],
    innerHtml: [ { name: 'text', html: `This is a label` }],
    preset: ['error', 'helper']
  }
);
