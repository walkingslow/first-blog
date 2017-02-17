var components = components || [];
components.push({
    name: 'ge-menu',
    properties: {
      theme: ['light', 'dark'],
      position: ['below', 'above'],
      align: ['left', 'right'],
      spacing: ['dense', 'standard']
    },
    states: [{name:'open', prefix:'is'}],
    preset: [],
    elementHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [], optionalAttrs: [] }
    ],
    parentHtml: [
      { name: 'relativeDiv', tag:'div', requiredAttrs: [{prop:'style', val:'position:relative'}], content: '<button>test</button>' },
      { name: 'relativeDivMargin', tag:'div', requiredAttrs: [{prop:'style', val:'position:relative; margin-left:150px;margin-top:200px;'}], content: '<button>test</button>' }
    ],
    innerHtml: [
      { name: 'UL with icons', html: `<ul>
          <li><a href="#"><i class="fa fa-home"></i>ITEM</a></li>
          <li><a href="#"><i class="fa fa-area-chart"></i>ITEM with longer name</a></li>
          <li><a href="#"><i class="fa fa-battery-three-quarters"></i>ITEM</a></li>
          <li><a href="#"><i class="fa fa-bell-slash-o"></i>ITEM</a></li>
        </ul>` },
      { name: 'scroll', html: '<a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a><a href="#">test</a>' },
      { name: 'long text', html: '<div class="ge-menu__item">Super long text that is too long for the max width</a></div><div class="ge-menu__item"><i class="fa fa-area-chart"></i>Super long text that is too long for the max width</div>' },
      { name: 'disabled', html: `
          <a href="#"><i class="fa fa-home"></i>ITEM</a>
          <a href="#"><i class="fa fa-area-chart"></i>ITEM with longer name</a>
          <a href="#"><i class="fa fa-battery-three-quarters"></i>ITEM</a>
          <a href="#" class="-is--disabled"><i class="fa fa-bell-slash-o"></i>ITEM</a>
        `},
      { name: 'dividers', html: `
          <a href="#"><i class="fa fa-home"></i>ITEM</a>
          <a href="#"><i class="fa fa-area-chart"></i>ITEM with longer name</a>
          <hr/>
          <a href="#"><i class="fa fa-battery-three-quarters"></i>ITEM</a>
          <a href="#" class="-is--disabled"><i class="fa fa-bell-slash-o"></i>ITEM</a>
          <div class="ge-menu__divider"></div>
          <a href="#"><i class="fa fa-battery-three-quarters"></i>ITEM</a>
        `}
    ]
  }
);
