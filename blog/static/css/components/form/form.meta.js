var components = components || [];
components.push({
    name: 'ge-form',
    elementHtml: [
      { name: 'form', tag: 'form', requiredAttrs: [ ], optionalAttrs: [ ]}
    ],
    parentHtml: [
      { name: 'relativeDiv', tag:'div', requiredAttrs: [{prop:'style', val:'position:relative'}]}
    ],
    properties: {
      spacing: ['dense', 'standard'],
      'label-align': ['horizontal', 'vertical']
    },
    states: [ ],
    innerHtml: [
      {
        name: 'form with inputs',
        html: `<div class="ge-form__item">
                  <label class="ge-label">This is a label</label>
                  <div class="ge-form__controls">
                    <input type="text" class="ge-text-input" placeholder="Please enter something">
                    <div class="ge-label--helper">This is some helper text</div>
                    <div class="ge-label--error">This is some error helper text</div>
                  </div>
                </div>
                <div class="ge-form__item">
                  <label class="ge-label">This is a label</label>
                  <div class="ge-form__controls">
                    <input type="text" class="ge-text-input" placeholder="Please enter something">
                    <div class="ge-label--helper">This is some helper text</div>
                    <div class="ge-label--error">This is some error helper text</div>
                  </div>
                </div>
                <div class="ge-form__item">
                  <label class="ge-label">This is a label</label>
                  <div class="ge-form__controls">
                    <input type="text" class="ge-text-input" placeholder="Please enter something">
                    <div class="ge-label--helper">This is some helper text</div>
                    <div class="ge-label--error">This is some error helper text</div>
                  </div>
                </div>
                <div class="ge-form__item">
                  <label class="ge-label">This is a label</label>
                  <div class="ge-form__controls">
                    <input type="text" class="ge-text-input" placeholder="Please enter something">
                    <div class="ge-label--helper">This is some helper text</div>
                    <div class="ge-label--error">This is some error helper text</div>
                </div>
               </div>`
      },
      {
        name: 'two column',
        html: `<div style="display:flex">
        <div style="width:50%; margin-right: 1rem">
          <div class="ge-form__item">
            <label class="ge-label">This is a label</label>
            <div class="ge-form__controls">
              <input type="text" class="ge-text-input" placeholder="Please enter something">
              <div class="ge-label--helper">This is some helper text</div>
              <div class="ge-label--error">This is some error helper text</div>
            </div>
          </div>
          <div class="ge-form__item">
            <label class="ge-label">This is a label</label>
            <div class="ge-form__controls">
              <input type="text" class="ge-text-input" placeholder="Please enter something">
              <div class="ge-label--helper">This is some helper text</div>
              <div class="ge-label--error">This is some error helper text</div>
            </div>
          </div>
        </div>
        <div style="width: 50%; margin-left: 1rem">
          <div class="ge-form__item">
            <label class="ge-label">This is a label</label>
            <div class="ge-form__controls">
              <input type="text" class="ge-text-input" placeholder="Please enter something">
              <div class="ge-label--helper">This is some helper text</div>
              <div class="ge-label--error">This is some error helper text</div>
            </div>
          </div>
          <div class="ge-form__item">
            <label class="ge-label">This is a label</label>
            <div class="ge-form__controls">
              <input type="text" class="ge-text-input" placeholder="Please enter something">
              <div class="ge-label--helper">This is some helper text</div>
              <div class="ge-label--error">This is some error helper text</div>
            </div>
          </div>
      </div>`
      },
       {
        name: 'form with different controls',
        html: `<div class="ge-form__item">
                  <label class="ge-label">This is a label</label>
                  <div class="ge-form__controls">
                    <input type="text" class="ge-text-input" placeholder="Please enter something">
                    <div class="ge-label--helper">This is some helper text</div>
                    <div class="ge-label--error">This is some error helper text</div>
                  </div>
                </div>
                <div class="ge-form__item">
                  <label class="ge-label">This is a label</label>
                  <div class="ge-form__controls">
                  <textarea rows="5" class="ge-text-area" placeholder="Please enter something"></textarea>
                    <div class="ge-label--helper">This is some helper text</div>
                    <div class="ge-label--error">This is some error helper text</div>
                  </div>
                </div>
               </div>`
      },
    ]
  }
);
