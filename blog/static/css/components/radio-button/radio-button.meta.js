var components = components || [];
components.push({
    name: 'ge-radio-button',
    properties: {
      theme: ['light', 'dark'],
      color: ['mono', 'blue']
      ,
    },
    states: [],
    preset: [],
    elementHtml: [
      { name: 'input', tag: 'input', requiredAttrs: [{prop:'type', val:'radio'}, {prop:'name', val:'core1'}], optionalAttrs: [] },
      { name: 'input checked', tag: 'input', requiredAttrs: [{prop:'type', val:'radio'}, {prop:'name', val:'core1'}, {prop:'checked', val:'true'}], optionalAttrs: [] },
      { name: 'input disabled', tag: 'input', requiredAttrs: [{prop:'type', val:'radio'}, {prop:'name', val:'core1'}, {prop:'disabled', val:'true'}], optionalAttrs: [] }
    ],
    parentHtml: [
      { name: 'div', tag:'div', requiredAttrs: [], content: '<label>This is a label:</label><input type="radio" name="core1" class="ge-radio-button"/>' }
    ],
    innerHtml: []
  }
);
