var components = components || [];
components.push({
    name: 'ge-form__item',
    elementHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [ ], optionalAttrs: [ ]}
    ],
    parentHtml: [
      { name: 'relativeDiv', tag:'div', requiredAttrs: [{prop:'style', val:'position:relative'}]}
    ],
    properties: {
      spacing: ['dense', 'standard'],
      'label-align': ['horizontal', 'vertical']
    },
    states: [
      { name: 'error', prefix: 'has'},
      { name: 'focus', prefix: 'has'},
      { name: 'required', prefix: 'is'}
    ],
    innerHtml: [
      {
        name: 'label and input-text',
        html: `<label class="ge-label">This is a label</label>
               <div class="ge-form__controls">
                 <input type="text" class="ge-text-input" placeholder="Please enter something">
                 <div class="ge-label--helper">This is some helper text</div>
                 <div class="ge-label--error">This is some error helper text</div>
               </div>`
      },
      {
        name: 'label and textarea',
        html: `<label class="ge-label">This is a label</label>
               <div class="ge-form__controls">
                 <textarea class="ge-text-area" placeholder="Please enter something"></textarea>
                 <div class="ge-label--helper">This is some helper text</div>
                 <div class="ge-label--error">This is some error helper text</div>
               </div>`
      }
    ]
  }
);
