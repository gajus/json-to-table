/**
 * jQuery JSON-to-table v0.0.2
 * https://github.com/anuary/jquery-json-to-table
 *
 * Licensed under the BSD.
 * https://github.com/anuary/jquery-json-to-table/blob/master/LICENSE
 *
 * Author: Gajus Kuizinas @anuary
 */
(function($){
	$.fn.ayJsonToTable	= function(json)
	{
		var populate_data	= function(name, index)
		{
			if(typeof name === 'undefined')
			{
				this.path.pop();
			}
			
			var json	= $.extend(true, {}, this.json);
			
			if(typeof index === 'undefined')
			{				
				for(var i = 0, j = this.path.length; i < j; i++)
				{
					var json	= json[this.path[i]];
				}
				
				if(typeof name !== 'undefined')
				{
					if(typeof json[name] === 'undefined')
					{
						throw 'Key does not exist.';
					}
					
					var json	= json[name];
					
					this.path.push(name);
				}
			}
			else
			{
				if(!this.path[name].length)
				{
					throw 'Index is out of the bounds.';
				}
				
				for(var i = 0, j = name; i < j; i++)
				{
					var json	= json[this.path[i]];
				}
				
				this.path	= this.path.slice(0, name);
			}
			
		
			var tbody	= $(this).find('tbody').empty();
			
			if(this.path.length)
			{
				var navigation	= $('<tr class="navigation"><td colspan="2"></td></tr>').appendTo(tbody);
				
				for(var i = 0, j = this.path.length; i < j; i++)
				{
					$('<span>').text(this.path[i]).data('ay-path-index', i).appendTo(navigation.find('td'));
				}
			
				navigation.find('span').on('click', {reference: this}, function(e){
					populate_data.call(e.data.reference, $(this).data('ay-path-index'), true);
				});
			}
			
			for(var i in json)
			{
				if(json.hasOwnProperty(i))
				{
					if(typeof json[i] == 'string')
					{
						var value	= $('<span>').text($('<div />').text(json[i]).html());
					}
					else if(typeof json[i] == 'number')
					{
						var value	= $('<span>').text(json[i]);
					}					
					else if(typeof json[i] === 'boolean')
					{
						var value	= $('<span>').text(json[i] ? 'true' : 'false').addClass(json[i] ? 'true' : 'false');
					}
					else if(json[i] === null)
					{
						var value	= $('<span>').text('null').addClass('null');
					}
					else if(typeof json[i] == 'object')
					{
						var value	= $('<span>').text('object (' + $(json[i]).length + ')').addClass('object').on('click', {reference: this, name: i}, function(e){
							populate_data.call(e.data.reference, e.data.name);
						});
					}
					
					var name	= $('<td></td>').text(i);
					var value	= $('<td></td>').append(value);

					$('<tr></tr>').addClass('data-type-' + (typeof json[i])).append(name, value).appendTo(tbody);
				}
			}
		};
	
		return this.each(function()
		{
			this.json	= json;
			this.path	= [];
			
			populate_data.call(this);
		});
	}
})($);