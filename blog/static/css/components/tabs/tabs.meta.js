var components = components || [];
components.push({
    name: 'ge-tabs',
    properties: {
      theme: ['light', 'dark'],
      spacing: ['dense', 'standard'],
      align: ['standard', 'vertical']
    },
    states: [{ name: 'ul', prefix: 'has'}],
    preset: [],
    elementHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [], optionalAttrs: [] }
    ],
    parentHtml: [
      { name: 'div', tag:'div', requiredAttrs: [], content: '' }
    ],
    innerHtml: [
      { name: 'UL > LI > a', html: `<ul>
                <li><a href="#">PRODUCTS</a></li>
                <li class="-is--active"><a href="#">SERVICES</a></li>
                <li><a href="#">INDUSTRIES</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">MORE</a></li>
                <li class="-is--disabled"><a href="#">ITEM</a></li>
            </ul>`
      },
      { name: 'a', html: `
          <a href="#">PRODUCTS</a>
          <a href="#" class="-is--active">SERVICES</a>
          <a href="#">INDUSTRIES</a>
          <a href="#">MORE</a>
          <a class="-is--disabled" href="#">ABOUT US</a>
        `},
      { name: 'DIV', html: `
          <div class="ge-tab__item">PRODUCTS</div>
            <div class="ge-tab__item -is--active">SERVICES</div>
            <div class="ge-tab__item">INDUSTRIES</div>
            <div class="ge-tab__item">MORE</div>
            <div class="ge-tab__item -is--disabled">ABOUT US</div>
      `},
      {
        name: 'VERTICAL ONLY: ul > li > a > i', html: `<ul>
                <li>
                    <a href="#">
                        <i class="fa fa-bar-chart-o"></i>
                        <span class="ge-tab__label">PRODUCTS</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                </li>
                <li class="-is--active">
                    <a href="#">
                        <i class="fa fa-anchor"></i>
                        <span class="ge-tab__label">SERVICES</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-asl-interpreting"></i>
                        <span class="ge-tab__label">INDUSTRIES</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-area-chart"></i>
                        <span class="ge-tab__label">ABOUT US</span>
                    </a>
                </li>
                <li class="-is--disabled">
                    <a href="#">
                        <i class="fa fa-bomb"></i>
                        <span class="ge-tab__label">ITEM</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-bluetooth"></i>
                        <span class="ge-tab__label">INCREDIBLY LONG NAVIGATION ITEM TO DISPLAY</span>
                        <i class="fa fa-angle-right"></i></a>
                </li>
            </ul>`
      },
      {
        name: 'VERTICAL ONLY: a > i', html: `<a href="#"><i class="fa fa-bar-chart-o"></i>
              <span class="ge-tab__label">PRODUCTS</span>
              <i class="fa fa-angle-right"></i>
            </a>
            <a href="#" class="-is--active"><i class="fa fa-anchor"></i>SERVICES</a>
            <a href="#"><i class="fa fa-asl-interpreting"></i>INDUSTRIES</a>
            <a class="-is--disabled" href="#"><i class="fa fa-bomb"></i>ABOUT US</a>
            <a href="#"><i class="fa fa-bluetooth"></i>
                <span class="ge-tab__label">INCREDIBLY LONG NAVIGATION ITEM TO DISPLAY</span>
                <i class="fa fa-angle-right"></i></a>`
      },
      {
        name: 'VERTICAL ONLY: div > i', html: `
        <div class="ge-tab__item"><i class="fa fa-bar-chart-o"></i>PRODUCTS</div>
            <div class="ge-tab__item -is--active"><i class="fa fa-anchor"></i>SERVICES</div>
            <div class="ge-tab__item"><i class="fa fa-asl-interpreting"></i>INDUSTRIES</div>
            <div class="ge-tab__item -is--disabled"><i class="fa fa-bicycle"></i>ABOUT US</div>
            <div class="ge-tab__item"><i class="fa fa-bluetooth"></i>
                <span class="ge-tab__label">INCREDIBLY LONG NAVIGATION ITEM TO DISPLAY</span>
                <i class="fa fa-angle-right"></i></div>`
      }
    ]
  }
);
