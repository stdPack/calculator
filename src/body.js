/*
*
* body src for my calc
* 
* author scoder
*
* date 2016
*/

function body(){
	var o = {},
		err = function(){
			if(!o._created) throw new Error('not creted yet!');
	};
	o._created = false;
	o._items = {};
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
	o.style = function(obj){
		err();

		o.elem().css(obj);
		return o;
	};
	o.class = function(c){
		err();
		if(typeof c === 'undefined')
			return o.elem().attr('class');
		return o.elem().attr({class : c});
	};
	o.add =function(name , element){
		err();
		if(typeof name === 'undefined' ||
			typeof element === 'undefined')throw new Error('give this method 2 args');

		if(typeof o._items[name] === 'undefined'){
			o._items[name] = {elem : element,appended : false};
		}
		
		Object.keys(o._items).forEach(function(item){
			if(!o._items[item].appended){
				o.elem().append(o._items[item].elem);
				o._items[item].appended = true;
			}
			
		});
		return o;	
	};
	o.del = function(name){
		err();
		var _deleted = false,
			_delete = function(name1){
				_deleted = true;
				o._items[name1].elem.remove();;
				delete o._items[name1];
				return _deleted;
		};
		if(typeof name === 'undefined'){
			var all = Object.keys(o._items);
			if(all.length === 0 ) return false;//nothing added so far!
			all.forEach(function(item){
				o._items[item].elem.remove();
			});
			o._items = {};
			
			return true; //no item added so far!
		}
		
		if(typeof o._items[name] === 'undefined')
			return _deleted;
		return _delete(name);

	};
	return o;
}