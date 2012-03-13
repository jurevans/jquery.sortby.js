/**
  * =====================================================================
  * Copyright (C) 2008 Justin Evans
  *
  * The JavaScript code in this page is free software: you can
  * redistribute it and/or modify it under the terms of the GNU
  * General Public License (GNU GPL) as published by the Free Software
  * Foundation, either version 3 of the License, or (at your option)
  * any later version.  The code is distributed WITHOUT ANY WARRANTY;
  * without even the implied warranty of MERCHANTABILITY or FITNESS
  * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

  * As additional permission under GNU GPL version 3 section 7, you
  * may distribute non-source (e.g., minimized or compacted) forms of
  * that code without the copy of the GNU GPL normally required by
  * section 4, provided you include this license notice and a URL
  * through which recipients can access the Corresponding Source.
  * =====================================================================
  */

/* 
 * lib/jquery.sortby.js
 * 
 * Extends jQuery by adding sort functionality to arrays of objects.
 * 
 * Usage:
 * 
 * var dataArray = [ 
 *  { firstName : 'John', lastName : 'Smith' },
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
 *  { firstName : 'John', lastName : 'Smith' }
 * ]
 * 
 */

;(function($) {
	
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
