/*
*
* src for btnGroup
* author scoder
* date 2016
*
*/

function btnGroup(){
	var o = {};
	o._created = false;
	o._items = [];
	var err =function(){
		if(!o._created) throw new Error('Not created yet!');
	}
	o.create = function(id){
		if(typeof id === 'undefined') throw new Error('give this method an arg');
		o._created = true;
		o._elem = $('<div>');
		$(id).append(o._elem);
		return o;
	};
	o.elem = function(){
		err();
		return o._elem;
	};
	o.add = function(button){
		if(typeof button === 'undefined'||
			typeof button !== 'object') throw new Error('arg is wrong give btn');

		o._items.push({btn : button,appended : false});
		o._items.forEach(function(item,i,arr){
			if(!item.appended){
				o.elem().append(item.btn.elem());
				item.appended = true;
			}
		});
	};
	o.class = function(c){
		err();
		if(typeof c === 'undefined'){
			return o.elem().attr('class');
		}
		o.elem().attr({class : c});
		return o;
	}
	o.style = function(obj){
		if(typeof obj !== 'object') throw new Error('arg is wrong type give an obj');
		err();
		o.elem().css(obj);
		return o;
	};
	o.event = function(name,callback){
		o.elem()[0].addEventListener(name,callback);
	};
	return o;
}