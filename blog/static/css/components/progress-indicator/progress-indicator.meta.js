var components = components || [];
components.push(
    {
        name: 'ge-progress-indicator',
        properties: {
          color: ['standard', 'green']
        },
        states: [],
        preset: [],
        elementHtml: [
          { name: 'progress indicator 0', tag: 'progress', requiredAttrs: [{prop: 'value', val: '0'}], optionalAttrs: [] },
          { name: 'progress indicator 20', tag: 'progress', requiredAttrs: [{prop: 'value', val: '0.2'}], optionalAttrs: [] },
          { name: 'progress indicator 40', tag: 'progress', requiredAttrs: [{prop: 'value', val: '0.4'}], optionalAttrs: [] },
          { name: 'progress indicator 60', tag: 'progress', requiredAttrs: [{prop: 'value', val: '0.6'}], optionalAttrs: [] },
          { name: 'progress indicator 80', tag: 'progress', requiredAttrs: [{prop: 'value', val: '0.8'}], optionalAttrs: [] },
          { name: 'progress indicator 100', tag: 'progress', requiredAttrs: [{prop: 'value', val: '1'}], optionalAttrs: [] }

        ],
        parentHtml: [{ name: 'none', tag:'', requiredAttrs: [], content: '' }],
        innerHtml: [ { name: ''}

    ]
      }
);