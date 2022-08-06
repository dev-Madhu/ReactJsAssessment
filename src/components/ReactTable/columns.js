const COLUMNS = [
  {
    Header: 'Head',
    columns: [
      {
        id: 'checkbox',
        accessor: '',
        Cell: () => (
          <input
            type="checkbox"
            className="checkbox"
            // checked={this.state.selected[original.firstName] === true}
          />
        ),
        Header: () => (
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
        sortable: true,
        width: 70,
      },
    ],
  },

  {
    Header: 'TITLE',
    accessor: 'title',
  },
  {
    Header: 'DESCRIPTION',
    accessor: 'description',
  },
  {
    Header: 'LINK',
    accessor: 'link',
  },
]

export default COLUMNS
