/*
*
*
* label for my calculator
* author scoder
* date 2016
*
*/

function label(){
	var o = {};
	o._created = false;
	o._txt = '';
	o.create = function(id){
		o._created = true;
		o._elem = $('<div>');
		o._elem.text(o._txt);
		$(id).append(o._elem);
		return o;
	};
	o.elem = function(){
		if(!o._created) throw new Error('not created yet!');

		return o._elem;
	};
	o.txt = function(t){
		if(typeof t === 'undefined'){
			return o._txt;
		}
		if(typeof t !== 'string') throw new Error('give string arg');
		o._txt = t;
		o.elem().text(t);
		return o;
	};
	o.style = function(obj){
		if(!o._created) throw new Error('not created yet!');
		if(typeof obj !== 'object')throw new Error('give arg an obj');

		o.elem().css(obj);
		return o;
	}
	return o;
}

/* tests 


 var d = $('<div id ="11">');
 d.appendTo('body');
 var l = label();
 l.create('#11');
 l.txt('awesome');

*/