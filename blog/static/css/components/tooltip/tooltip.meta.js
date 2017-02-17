var components = components || [];
components.push(
    {
        name: 'ge-tooltip',
        properties: {
            spacing: ['dense', 'standard']
        },
        states: [],
        preset: [],
        elementHtml: [
          { name: 'tooltip', tag: 'div', requiredAttrs: [{ prop: 'style', val: 'position:absolute; left:60px; top: 80px;width: 40px; height:40px; background:gray;'}, { prop: 'data-content', val: 'TOOLTIP TEXT'}], optionalAttrs: [] }
        ],
        parentHtml: [ {name: ''}],
        innerHtml: [ {name: ''}]
      }
);