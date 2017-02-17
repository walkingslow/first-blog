var components = components || [];
components.push({
    name: 'ge-badge',
    properties: {
      theme: ['light', 'dark'],
      color: ['mono', 'blue']
      ,
    },
    states: [],
    preset: [],
    elementHtml: [
      { name: 'i', tag: 'i', requiredAttrs: [], optionalAttrs: [] }
    ],
    parentHtml: [ { name: 'relativeDiv', tag:'i', requiredAttrs: [{prop:'style', val:'position:relative;'},{prop:'class', val:'fa fa-envelope'}]}],
    innerHtml: [
        { name: 'badge', html: '<span class="ge-badge">1</span>'}
      ]
  }
);
