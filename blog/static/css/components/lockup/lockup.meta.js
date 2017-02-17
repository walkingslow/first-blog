var components = components || [];
components.push({
    name: 'ge-lockup',
    properties: {
      alignment: ['top-left', 'left', 'bottom', 'right', 'top-right'],
      size: ['smallest', 'small', 'medium', 'large', 'largest']
    },
    states: [],
    preset: [],
    elementHtml: [
      { name: 'relativeDiv', tag: 'div', requiredAttrs: [], optionalAttrs: [] }
    ],
    parentHtml: [{name: ''}],
    innerHtml: [
        {
            name: 'Lockup with text', html: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/2000px-General_Electric_logo.svg.png" />
            <span>Title</span>`
        }
      ]
  }
);
