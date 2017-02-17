var components = components || [];
components.push({
    name: 'ge-toggle',
    properties: {
      theme: ['light', 'dark'],
      color: ['mono', 'blue']
    },
    states: [],
    preset: [],
    elementHtml: [
      { name: 'label', tag: 'label', requiredAttrs: [], optionalAttrs: [] }
    ],
    parentHtml: [{name: ''}],
    innerHtml: [
        { name: 'toggle', html: '<input type="checkbox"><div class="ge-toggle__slider"></div>'},
        { name: 'toggle disabled', html: '<input type="checkbox" disabled><div class="ge-toggle__slider"></div>'},
        { name: 'toggle checked', html: '<input type="checkbox" checked><div class="ge-toggle__slider"></div>'},
        { name: 'toggle disabled and checked', html: '<input type="checkbox" disabled checked><div class="ge-toggle__slider"></div>'}
      ]
  }
);
