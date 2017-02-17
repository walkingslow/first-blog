var components = components || [];
components.push(
    {
        name: 'ge-pill',
        properties: {},
        states: [],
        preset: [],
        elementHtml: [
          { name: 'pill', tag: 'input', requiredAttrs: [{prop: 'type', val: 'checkbox'}, {prop: 'data-content', val:'BUTTON'}], optionalAttrs: [] },
          { name: 'pill with icon (left)', tag: 'input', requiredAttrs: [{prop: 'type', val: 'checkbox'}, {prop: 'data-content', val:'BUTTON'}, {prop: 'class', val: 'ge-pill fa fa-times'}], optionalAttrs: [] },
          { name: 'pill with icon (right)', tag: 'input', requiredAttrs: [{prop: 'type', val: 'checkbox'}, {prop: 'data-content', val:'BUTTON'}, {prop: 'class', val: 'ge-pill fa fa-times -icon-align--right'}], optionalAttrs: [] }
        ],
        parentHtml: [],
        innerHtml: []
      }
);