interface IDataGridColumnCell {
    data: any; // TODO changer le type any quand j'aurai le type de devexpress
    index?: number;
}
function DataGridColumnCell({ data }: IDataGridColumnCell) {
    return (
        <div style={{width: '100%', height: '100%'}}>
            {data.displayValue instanceof Date ? data.text : data.displayValue}
        </div>
    );
}

export { DataGridColumnCell };
