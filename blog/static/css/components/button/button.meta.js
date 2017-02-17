var components = components || [];
components.push(
    {
      name: 'ge-button',
      properties: {
        theme: ['light', 'dark'],
        fill: ['solid', 'outline', 'transparent'],
        size: ['small', 'medium', 'large'],
        color: ['blue', 'gray']
      },
      states: [{name:'icon', prefix:'is'}],
      preset: ['ge-button--primary', 'ge-button--secondary'],
      elementHtml: [
        { name: 'button', tag: 'button', requiredAttrs: [], optionalAttrs: [] },
        { name: 'a', tag: 'a', requiredAttrs: [{prop: 'href', val: '#'}], optionalAttrs: [] },
        { name: 'input button', tag: 'input', requiredAttrs: [{prop: 'type', val: 'button'}, {prop: 'value', val:'BUTTON'}], optionalAttrs: [] },
        { name: 'input submit', tag: 'input', requiredAttrs: [{prop: 'type', val: 'submit'}, {prop: 'value', val:'BUTTON'}], optionalAttrs: [] }
      ],
      parentHtml: [
        { name: 'empty', tag:'div', requiredAttrs: []}
      ],
      innerHtml: [
        { name: 'text', html: 'button' },
        { name: 'empty', html: '' },
        { name: 'icon only', html: '<i class="fa fa-home"></i>' },
        { name: 'text with icon', html: 'BUTTON <i class="fa fa-home"></i>' },
        { name: 'text with icon pull left', html: 'BUTTON <i class="fa fa-home pull-left"></i>' }
      ]
    }
);

