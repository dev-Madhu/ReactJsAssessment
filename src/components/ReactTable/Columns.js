const COLUMNS = [
  {
    Header: 'Head',
    columns: [
      {
        id: 'checkbox',
        accessor: '',
        Cell: ({original}) => (
          <input
            type="checkbox"
            className="checkbox"
            // checked={this.state.selected[original.firstName] === true}
            // onChange={() => this.toggleRow(original.firstName)}
          />
        ),
        Header: x => (
          <input
            type="checkbox"
            className="checkbox"
            // checked={this.state.selectAll === 1}
            // ref={input => {
            //     if (input) {
            //         input.indeterminate = this.state.selectAll === 2;
            //     }
            // }}
            // onChange={() => this.toggleSelectAll()}
          />
        ),
        sortable: false,
        width: 70,
      },
    ],
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Link',
    accessor: 'link',
  },
]

export default COLUMNS
