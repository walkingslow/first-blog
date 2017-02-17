var components = components || [];
components.push(
    {
        name: 'ge-dropdown',
        properties: {
                      theme: ['light', 'dark'],
                      spacing: ['dense', 'standard']
                    },
        states: [{name:'disabled', prefix:'is'}],
        preset: [],
        elementHtml: [
          { name: 'dropdown', tag: 'div', requiredAttrs: [], optionalAttrs: [] }
        ],
        parentHtml: [{ name: 'none', tag:'', requiredAttrs: [], content: '' }],
        innerHtml: [ { name: 'label', html: `<span>California</span><i class="fa fa-chevron-down"></i>`}

    ]
      }
);