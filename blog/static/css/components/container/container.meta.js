var components = components || [];
components.push({
    name: 'ge-container',
    properties: {
      theme: ['light', 'dark'],
      height: ['auto', 'vh'],
      width: ['full', 'very-wide', 'wide', 'normal', 'narrow', 'very-narrow'],
      align: ['left', 'center', 'right'],
      padding: ['none', 'xs', 's', 'm', 'l', 'xl'],
      image: ['cover', 'contain', 'fixed'],
      'image-position': ['left', 'center', 'right'],
      color: ['transparent', 'blue-darker-2','blue-darker-1','blue','blue-lighter-1','blue-lighter-2','gray-darker-2','gray-darker-1','gray','gray-lighter-1','gray-lighter-2','gray-lighter-3','gray-lighter-4','white','green','green-lighter-1']
    },
    elementHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [], optionalAttrs: [] },
      { name: 'image', tag: 'div', requiredAttrs: [{prop:'style', val: "background-image:url('/pages/core-design/core-css/test/resources/bridge.jpeg');"}], optionalAttrs: [] }
    ],
    parentHtml: [
      { name: 'div', tag:'div', requiredAttrs: [{prop:'class', val:'_test'}], content: '' }
    ],
    innerHtml: [
      { name: 'content', html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    ]
  }
);
