# jQuery JSON-to-table plugin

[jQuery JSON-to-table plugin](https://github.com/gajus/json-to-table/) ([demonstration](https://dev.anuary.com/1e405a1b-1f81-5050-87b1-57bf81b5e273/)) is a jQuery plugin that can represent a hierarchical data (JSON) in HTML table.

The script is designed to handle all data types passable through JSON without a need for a pre-defined template. At any time only one level of data is shown. The data tree can be navigated from node-to-node without refreshing the page. For your convenience, the script suggests (by assigning classes to the table rows) the value (in case of `boolean`) and the data type.

## Usage

The table is not created by the script. The script only interacts with the `<tbody>`.

	<script type="text/javascript">
	$(function(){
	    $('table').ayJsonToTable({"foo"});
	});
	</script>

	<table>
	    <thead>
	        <tr>
	            <th class="name">Name</th>
	            <th>Value</th>
	        </tr>
	    </thead>
	    <tbody></tbody>
	</table>

## Roadmap

* Long strings collapsing with ability to expand the original string.

## License & Notes

The BSD License - Copyright (c) 2012 [Gajus Kuizinas](g.kuizinas@anuary.com).