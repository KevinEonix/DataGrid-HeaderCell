import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';

interface IDataGridHeaderCell {
 data: any; // TODO changer le type any quand on aura trouvé le type de devexpress
 index?: number;
}

const DataGridHeaderCell = ({ data }: IDataGridHeaderCell) => {
 return (
     <div style={{
         padding: 5,
         backgroundColor: 'orange'
     }}>
      {data.column.caption}
      {data.column.sortOrder !== undefined ? (
          data.column.sortOrder === 'asc' ? (
              <ArrowUpIcon className="ml-auto w-5 h-5 arrow-up-icon" />
          ) : (
              <ArrowDownIcon className="ml-auto w-5 h-5 arrow-down-icon" />
          )
      ) : null}
     </div>
 );
};

export { DataGridHeaderCell };
