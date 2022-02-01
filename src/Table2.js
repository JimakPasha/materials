import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
	const actionButton = (params) => {
		alert(`${params.data.make} ${params.value}`);
	};

	const data = [
		{ make: 'Ford', model: 'asdasd', price: 900000 },
		{ make: 'Porsche', model: 'fdgw34', price: 1900000 },
		{ make: 'Ww', model: 'yujtr5', price: 10000000 },
	];

	const columns = [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' },
		{
			headerName: 'Action',
			field: 'price',
			cellRendererFramework: (params) => (
				<div>
					<button onClick={() => actionButton(params)}>Click</button>
				</div>
			),
			editable: false,
		},
	];

	const defaultColDef = {
		sortable: true,
		filter: true,
		editable: true,
		floatingFilter: true,
		flex: 1,
	};

	let gridApi;
	const onGridReady = (params) => {
		gridApi = params.api;
		console.log(gridApi);
	};

	const onExportClick = () => {
		gridApi.exportDataAsCsv();
	};

	return (
		<>
			<button onClick={() => onExportClick()}>export csv</button>
			<div className='ag-theme-alpine' style={{ height: 300, width: '100%' }}>
				<AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} onGridReady={onGridReady} />
			</div>
		</>
	);
};

export default Table;
