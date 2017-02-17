var components = components || [];
components.push({
    name: 'ge-card',
    elementHtml: [
      { name: 'card', tag: 'div', requiredAttrs: [ {prop: 'style', val: 'width:20rem;'}], optionalAttrs: []}
    ],
    parentHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [], optionalAttrs: []}
    ],
    properties: {},
    states: [],
    innerHtml: [
      {
        name: 'basic card content',
        html: `<div class="ge-card__content">This is some text</div>`
      },
      {
        name: 'basic card with header',
        html: `<div class="ge-card__header">This is some text in a header</div>`
      },
      {
        name: 'card with header and category',
        html: `<div class="ge-card__category">
                <span style="border-radius:2px;height:20px;background-color: #7BEFB2;width:83px;text-transform: uppercase;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:bold;padding-top:.2rem">Category</span>
              </div>
              <div class="ge-card__header">This is some text</div>`
      },
      {
        name: 'card with header, menu, media and floating action area',
        html: `<div class="ge-card__header -has--menu-left">
                <div class="ge-card__menu" style="width:2rem;text-align:center">
                  <i style="font-size:1rem;" class="fa fa-bars"></i>
                </div>
                <div>Here is some text</div>
              </div>
              <div class="ge-card__content -ratio--16_9" >
                <div class="ge-card__media" style="background-color: skyblue;">This is media</div>
              </div>
              <div class="ge-card__actions -is--floating -align--bottom ">
                <button class="ge-button" style="width:4rem; height:2rem;">Click 1</button>
                <button class="ge-button" style="width:4rem; height:2rem;">Click 2</button>
                <button class="ge-button" style="width:4rem; height:2rem;">Click 3</button>
                <i style="font-size:2rem;" class="fa fa-info-circle"></i>
              </div>
            </div>`
      },
      {
        name: 'card with everything',
        html: `<div class="ge-card__menu -is--floating -align--right" style="width:2rem;text-align:center">
                <i style="font-size:1rem;" class="fa fa-bars"></i>
              </div>
              <div class="ge-card__category">
                <span style="border-radius:2px;height:20px;background-color: #7BEFB2;width:83px;text-transform: uppercase;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:bold;padding-top:.2rem">Category</span>
              </div>
              <div class="ge-card__header">This is some header text</div>
              <div class="ge-card__content -ratio--16_9" >
                <div class="ge-card__media" style="background-color: skyblue;">This is media at 16/9 ratio</div>
              </div>
              <div class="ge-card__content" style="border-bottom:1px gray solid">This is content</div>
              <div class="ge-card__actions">
                  <button class="ge-button" style="width:4rem; height:2rem;">Click 1</button>
                  <button class="ge-button" style="width:4rem; height:2rem;">Click 2</button>
                  <button class="ge-button" style="width:4rem; height:2rem;">Click 3</button>
                  <i style="font-size:2rem;" class="fa fa-info-circle"></i>
              </div>`
      },
      {
        name: 'card with table',
        html: `<div class="ge-card__header ge-datatable__header -border--off">This is the table header in a card</div>
                <div class="ge-card__table">
                  <table class="ge-datatable ge-card__content">
                    <thead>
                      <tr>
                        <th class="-is--sortable -is--anchor">Column 1</th>
                        <th class="-sorted--desc -is--anchor">Column 2</th>
                        <th class="-sorted--asc">Column 3</th>
                        <th>Column 4</th>
                        <th>Column 5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="-is--anchor">Data 1</td>
                        <td class="-is--anchor">Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td>Data 5</td>
                      </tr>
                      <tr>
                        <td class="-is--anchor">Data 1</td>
                        <td class="-has--error -is--anchor">Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td>Data 5</td>
                      </tr>
                      <tr>
                        <td class="-is--anchor">Data 1</td>
                        <td class="-is--anchor">Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td>Data 5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="ge-datatable__footer -border--off">This is the table footer in a card</div>`
      },
      {
        name: 'card with table and pagination and contextual header',
        html: `<div class="ge-card__header ge-datatable__header -has--selected">This is the table header in a card</div>
                <div class="ge-card__table">
                  <table class="ge-datatable ge-card__content">
                    <thead>
                      <tr>
                        <th class="-is--sortable -is--anchor">Column 1</th>
                        <th class="-sorted--desc">Column 2</th>
                        <th class="-sorted--asc">Column 3</th>
                        <th>Column 4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="-is--anchor">Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                      </tr>
                      <tr>
                        <td class="-is--anchor">Data 1</td>
                        <td class="-has--error">Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                      </tr>
                      <tr>
                        <td class="-is--anchor">Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="ge-datatable__footer">
                  <div class="ge-pagination">
                    <div class="max-rows-label">Rows per page</div>
                    <div class="max-rows-input">
                      <select>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                      </select>
                    </div>
                    <div class="row-tracker">1 - 10 of 1000</div>
                    <div style="width:2rem;" class="previous-page -is--disabled"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                    <div style="width:2rem;" class="next-page"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                  </div>
                </div>`
      },
      {
        name: 'card with checkboxes and selected rows',
        html: `<div class="ge-card__header ge-datatable__header -has--selected -has--menu-right">
                  <div>2 Items Selected</div>
                  <div class="ge-card__menu" style="width:2rem;text-align:center">
                    <i style="font-size:1rem;" class="fa fa-bars"></i>
                  </div>
                </div>
                <div class="ge-card__table">
                  <table class="ge-datatable ge-card__content">
                    <thead>
                      <tr>
                        <th class="-is--anchor"><input type="checkbox" class="ge-checkbox"></input></th>
                        <th class="-is--sortable -is--anchor">Column 2</th>
                        <th>Column With Numbers</th>
                        <th>Column 4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="-is--anchor"><input type="checkbox" class="ge-checkbox"></input></td>
                        <td class="-is--anchor">Data 2</td>
                        <td class="-align-text--right">1234</td>
                        <td>Data 4</td>
                      </tr>
                      <tr class="-is--selected">
                        <td class="-is--anchor"><input type="checkbox" class="ge-checkbox" checked></input></td>
                        <td class="-has--error -is--anchor">Data 2</td>
                        <td class="-align-text--right">1234</td>
                        <td>Data 4</td>
                      </tr>
                      <tr>
                        <td class="-is--anchor"><input type="checkbox" class="ge-checkbox"></input></td>
                        <td class="-is--anchor">Data 2</td>
                        <td class="-align-text--right">1234</td>
                        <td>Data 4</td>
                      </tr>
                      <tr class="-is--selected">
                        <td class="-is--anchor"><input type="checkbox" class="ge-checkbox" checked></input></td>
                        <td class="-is--anchor">Data 2</td>
                        <td class="-align-text--right">1234</td>
                        <td>Data 4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="ge-datatable__footer">
                  <div class="ge-pagination">
                    <div class="max-rows-label">Rows per page</div>
                    <div class="max-rows-input">
                      <select>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                      </select>
                    </div>
                    <div class="row-tracker">1 - 10 of 1000</div>
                    <div style="width:2rem;" class="previous-page -is--disabled"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                    <div style="width:2rem;" class="next-page"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                  </div>`
        }
    ],
    preset: []
  }
);

components.push({
    name: 'ge-card__header',
    elementHtml: [
      { name: 'header', tag: 'div', requiredAttrs: [], optionalAttrs: []}
    ],
    parentHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [{prop: 'class', val: 'ge-card'}, {prop: 'style', val: 'width:20rem;'}], optionalAttrs: []}
    ],
    properties: {},
    states: [{name: 'menu-left', prefix: 'has'},{name: 'menu-right', prefix: 'has'}],
    innerHtml: [
      {
        name: 'header with a menu',
        html: `<div class="ge-card__menu" style="width:2rem;text-align:center">
                 <i style="font-size:1rem;" class="fa fa-bars"></i>
               </div>
               <div>Here is some text</div>`
      }
    ],
    preset: []
  });

components.push({
    name: 'ge-card__category',
    elementHtml: [
      { name: 'category', tag: 'div', requiredAttrs: [], optionalAttrs: []}
    ],
    parentHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [{prop: 'class', val: 'ge-card'}, {prop: 'style', val: 'width:20rem;height:10rem'}], optionalAttrs: []}
    ],
    properties: { align: ['right', 'left', 'top', 'bottom']},
    states: [{name: 'floating', prefix: 'is'}],
    innerHtml: [
      {
        name: 'category',
        html: `<span style="border-radius:2px;height:20px;background-color: #7BEFB2;width:83px;text-transform: uppercase;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:bold;padding-top:.2rem">Category</span>`
      }
    ],
    preset: []
  });

components.push({
    name: 'ge-card__menu',
    elementHtml: [
      { name: 'menu', tag: 'div', requiredAttrs: [], optionalAttrs: []}
    ],
    parentHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [{prop: 'class', val: 'ge-card'}, {prop: 'style', val: 'width:20rem;height:10rem'}], optionalAttrs: []}
    ],
    properties: { align: ['right', 'left', 'top', 'bottom']},
    states: [{name: 'floating', prefix: 'is'}],
    innerHtml: [
      {
        name: 'menu icon',
        html: `<i style="font-size:1rem;" class="fa fa-bars"></i>`
      }
    ],
    preset: []
  });

components.push({
    name: 'ge-card__content',
    elementHtml: [
      { name: 'menu', tag: 'div', requiredAttrs: [], optionalAttrs: []}
    ],
    parentHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [{prop: 'class', val: 'ge-card'}, {prop: 'style', val: 'width:20rem;'}], optionalAttrs: []}
    ],
    properties: { ratio: ['16_9', '3_2', '4_3', '1_1']},
    states: [],
    innerHtml: [
      {
        name: 'media',
        html: '<div class="ge-card__media" style="background-color: skyblue;">This is media</div>'
      },
      {
        name: 'text',
        html: `This is some text`
      }
    ],
    preset: []
  });
