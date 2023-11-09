import 'devextreme/dist/css/dx.light.css';

import {useRef, useState} from 'react'
import '@/App.css'
import {DataGrid} from "devextreme-react";
import {
    Column,
    Editing,
    Export,
    FilterRow,
    GroupPanel,
    Pager,
    Paging,
    Sorting,
    Toolbar
} from "devextreme-react/data-grid";
import {DataGridHeaderCell} from "./DataGridHeaderCell";
import {DataGridColumnCell} from "./DataGridColumnCell";
import CustomStore from "devextreme/data/custom_store";
import {wait} from "./utils/fakePromise";

function App() {
  const [count, setCount] = useState(0)

    const customStoreRef = useRef<CustomStore>(new CustomStore({
        async load(loadOptions) {
            const indexableLoadOptions = loadOptions as { [key: string]: any };
            const params: {[key:string]: string} = {};

            [
                'filter',
                'group',
                'groupSummary',
                'parentIds',
                'requireGroupCount',
                'requireTotalCount',
                'searchExpr',
                'searchOperation',
                'searchValue',
                'select',
                'sort',
                'skip',
                'take',
                'totalSummary'
            ].forEach(function (i) {
                if (i in loadOptions) {
                    params[i] = JSON.stringify(indexableLoadOptions[i]);
                }
            });


            await wait(2000);

            return structuredClone({
                data: [
                    {
                        id: 1,
                        name: 'Element 1'
                    },
                    {
                        id: 2,
                        name: 'Element 2'
                    }
                ],
                totalCount: 2,
                groupCount: 0,
                summary: {}
            });
        },
        async insert(values) {
            return values;
        },
        async update() {
        },
        async remove() {

        }
    }));

  return (
    <div>
      <h1>data grid header customization</h1>

      <button onClick={e => {
        e.preventDefault();
        setCount(previousCount => previousCount + 1);
      }}>
        increment count {count}
      </button>
      <DataGrid
        hoverStateEnabled
        wordWrapEnabled
        remoteOperations
        cacheEnabled={false}
        columnHidingEnabled
        dataSource={customStoreRef.current}
      >
          <GroupPanel
              visible="auto"
              allowColumnDragging={false}
          />
          <Editing
              allowUpdating={false}
              allowAdding={false}
              allowDeleting
              confirmDelete
              texts={{
                  confirmDeleteTitle: "Confirm delete title",
                  confirmDeleteMessage: "Confirm delete message"
              }}
          />
          <Sorting
              mode="multiple"
              ascendingText="Asc"
              descendingText="Desc"
              clearText="Clear"
          />
          <FilterRow visible />
          <Pager
              allowedPageSizes={[1, 10, 25, 50, 100]}
              visible={false}
          />
          <Paging
              enabled
              defaultPageSize={10}
          />
          <Export
              allowExportSelectedData={false}
              enabled
              formats={['csv']}
          />
          <Toolbar visible={false} />
        <Column
          dataField="id"
          dataType="number"
          caption="Customized id"
          headerCellComponent={DataGridHeaderCell}
          cellComponent={DataGridColumnCell}
          sortIndex={0}
        />
        <Column
          dataField="name"
          dataType="string"
          caption="Customized name"
          headerCellComponent={DataGridHeaderCell}
          cellComponent={DataGridColumnCell}
          sortIndex={1}
        />
      </DataGrid>
    </div>
  )
}

export default App
