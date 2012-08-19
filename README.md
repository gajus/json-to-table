# jQuery JSON-to-table plugin

[ay-fb-friend-rank](https://github.com/anuary/jquery-json-to-table/) ([demonstration](https://dev.anuary.com/1e405a1b-1f81-5050-87b1-57bf81b5e273/)) is a jQuery plugin that represent hierarchical in HTML table.

The script is developed to handle all data types passable through JSON. At any time only one level of data is shown. The data tree can be navigated from node-to-node without refreshing the page.

## Usage

The script only interacts with the <tbody>. The table is not created by the script. Any headings need to be added under <thead>.

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

* Long strings collapsing with ability to expand to the original string.

## License & Notes

The BSD License - Copyright (c) 2012 [Gajus Kuizinas](http://anuary.com/gajus).