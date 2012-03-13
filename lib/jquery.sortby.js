/**
 * @author Ryan Pfister, Justin Evans
 * 
 * jquery.sortby.js
 * 
 * Extends jQuery by adding sort functionality to arrays of objects.
 * 
 * Usage:
 * 
 * var dataArray = [ 
 *  { firstName : 'Ryan', lastName : 'Pfister' },
 *  { firstName : 'Justin', lastName : 'Evans' }
 * ];
 * 
 * var sortedArray = $(dataArray).sortBy(function(name){
 *     return name.lastName;
 * };
 * 
 * // Results of 'sortedArray':
 * 
 * [
 *  { firstName : 'Justin', lastName: 'Evans' },
 *  { firstName : 'Ryan', lastName : 'Pfister' }
 * ]
 * 
 */

(function($) {
	
	$.fn.extend({
    	sortBy: function(iterator) 
	{
		var results = [];
		var r = [];

		$(this).each(function(index,value){		
			r.push({value: value, criteria : iterator.call(this, value, index)});
		});

		r.sort(function(left, right) {
			var a = left.criteria, b = right.criteria;
			return a < b ? -1 : a > b ? 1 : 0;
		});
		
		$(r).each(function(index, value){
			results.push(value['value']);
		});
		
		return results;
    	}
	});
})(jQuery);
