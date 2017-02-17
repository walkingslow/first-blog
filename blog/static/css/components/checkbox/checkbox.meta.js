var components = components || [];
components.push({
    name: 'ge-checkbox',
    properties: {
      theme: ['light', 'dark'],
      color: ['mono', 'blue']
    },
    states: [],
    preset: [],
    elementHtml: [
      { name: 'input', tag: 'input', requiredAttrs: [{prop:'type', val:'checkbox'}, {prop:'id', val:'core1'}], optionalAttrs: [] },
      { name: 'input checked', tag: 'input', requiredAttrs: [{prop:'type', val:'checkbox'}, {prop:'id', val:'core1'}, {prop:'checked', val:'true'}], optionalAttrs: [] },
      { name: 'input disabled', tag: 'input', requiredAttrs: [{prop:'type', val:'checkbox'}, {prop:'id', val:'core1'}, {prop:'disabled', val:'true'}], optionalAttrs: [] },
      { name: 'input checked and disabled', tag: 'input', requiredAttrs: [{prop:'type', val:'checkbox'}, {prop:'id', val:'core1'}, {prop:'disabled', val:'true'}, {prop:'checked', val:'true'}], optionalAttrs: [] }
    ],
    parentHtml: [
      { name: 'none', tag:'', requiredAttrs: [], content: '' }
    ],
    innerHtml: []
  }
);
