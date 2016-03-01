/*
*
* sec for my monitor obj
* author scoder
* date 2016
*
*/

function monitor(){
	var o = {};
	o._txt = '';
	o._created = false;
	var err = function(what){
		throw new Error(what);
	};
	o.create = function(id){
		o._created = true;
		o._elem = $('<input type="text" value ="" placeholder = "Monitor is off" disabled/>');
		o.style({textAlign : 'center'});
		$(id).append(o._elem);
		
		return o;
	};
	o.elem = function(){
		if(!o._created) throw new Error('not created yet');

		return o._elem;
	};
	o.txt = function(t){
		if(typeof t === 'undefined'){
			return o._txt;
		}
		if(!o._created) err('not created yet');
		if(typeof t !== 'string') throw new Error('arg error give string');
		o._txt = t;
		o.elem().val(t);
	};
	o.style = function(obj){
		if(!o._created) throw new Error('not creatd yet');
		if(typeof obj !== 'object' ||
			typeof obj === 'undefined')throw new Error('arg error give obj');

		o.elem().css(obj);
		return o;
	};
	o.class = function(c){
		if(!o._created) throw new Error('not created yet');
		if(typeof c === 'undefined'){
			return o.elem().attr('class');
		}
		o.elem().attr({class : c});
		return o;
	};
	return o;
}

/*
 testing in browser
 var d = $('<div id ="11">');
 d.appendTo('body');
 var m = monitor();
 m.create('#11');
 m.txt('awesome');
*/