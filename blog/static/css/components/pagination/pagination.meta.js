var components = components || [];
components.push({
    name: 'ge-pagination',
    elementHtml: [
      { name: 'ge-pagination', tag: 'div', requiredAttrs: [], optionalAttrs: []}
    ],
    parentHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [], optionalAttrs: []}
    ],
    properties: {},
    states: [],
    innerHtml: [
      {
        name: 'normal',
        html: `<div class="max-rows-label">Rows per page</div>
                <div class="max-rows-input">
                <input type="checkbox" class="fa fa-chevron-down ge-dropdown -spacing--dense" data-content="10" class="ge-dropdown">
                  <div class="ge-menu -position--below">
                      <ul>
                          <li><a href="#">10</a></li>
                          <li><a href="#">20</a></li>
                          <li><a href="#">30</a></li>
                          <li><a href="#">40</a></li>
                          <li><a href="#">50</a></li>
                      </ul>
                  </div>
                </input>
                </div>
                <div class="row-tracker">3 - 10 of 1000</div>
                <div style="width:2rem;" class="previous-page"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                <div style="width:2rem;" class="next-page"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>`
      },
      {
        name: 'disabled previous',
        html: `<div class="max-rows-label">Rows per page</div>
                <div class="max-rows-input">
                <input type="checkbox" class="fa fa-chevron-down ge-dropdown -spacing--dense" data-content="10" class="ge-dropdown">
                  <div class="ge-menu -position--below">
                      <ul>
                          <li><a href="#">10</a></li>
                          <li><a href="#">20</a></li>
                          <li><a href="#">30</a></li>
                          <li><a href="#">40</a></li>
                          <li><a href="#">50</a></li>
                      </ul>
                  </div>
                </input>
                </div>
                <div class="row-tracker">1 - 10 of 1000</div>
                <div style="width:2rem;" class="previous-page -is--disabled"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                <div style="width:2rem;" class="next-page"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>`
      },
      {
        name: 'disabled next',
        html: `<div class="max-rows-label">Rows per page</div>
                <div class="max-rows-input">
                <input type="checkbox" class="fa fa-chevron-down ge-dropdown -spacing--dense" data-content="10" class="ge-dropdown">
                  <div class="ge-menu -position--below">
                      <ul>
                          <li><a href="#">10</a></li>
                          <li><a href="#">20</a></li>
                          <li><a href="#">30</a></li>
                          <li><a href="#">40</a></li>
                          <li><a href="#">50</a></li>
                      </ul>
                  </div>
                </input>
                </div>
                <div class="row-tracker">999 of 1000</div>
                <div style="width:2rem;" class="previous-page"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                <div style="width:2rem;" class="next-page -is--disabled"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>`
      }
    ],
    preset: []
  }
);

