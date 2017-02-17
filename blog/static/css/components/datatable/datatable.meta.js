var components = components || [];
components.push({
    name: 'ge-datatable',
    elementHtml: [
      { name: 'ge-datatable', tag: 'table', requiredAttrs: [{'prop': 'style', 'val': 'width:5rem;'}], optionalAttrs: []}
    ],
    parentHtml: [
      { name: 'div', tag: 'div', requiredAttrs: [
        {'prop': 'style', 'val': 'width:100%;padding:2rem;'}],
        optionalAttrs: []}
    ],
    properties: {
      'borders': ['all', 'top-bottom'],
      'hover': ['on', 'off'],
    },
    states: [],
    innerHtml: [
      {
        name: 'basic table',
        html: `<thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  <th>Column 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                </tr>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                </tr>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4">Something</td>
                </tr>
              </tfoot>`
      },
      {
        name: 'table with sorting and error',
        html: `<thead>
                <tr>
                  <th class="-is--sortable">Column 1</th>
                  <th class="-sorted--desc">Column 2</th>
                  <th class="-sorted--asc">Column 3</th>
                  <th>Column 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                </tr>
                <tr>
                  <td>Data 1</td>
                  <td class="-has--error">Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                </tr>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4">Something</td>
                </tr>
              </tfoot>`
      },
      {
        name: 'table with anchor column first',
        html: `<thead>
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
              <tfoot>
                <tr>
                  <td colspan="4">Something</td>
                </tr>
              </tfoot>`
      },
      {
        name: 'table without thead and tfoot and tbody',
        html: `<tr class="-hover--off">
                <th class="-is--sortable -is--anchor">Column 1</th>
                <th class="-sorted--desc">Column 2</th>
                <th class="-sorted--asc">Column 3</th>
                <th>Column 4</th>
              </tr>
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
              <tr class="-hover--off">
                <td colspan="4">Something</td>
              </tr>`
      }
    ],
    preset: []
  }
);