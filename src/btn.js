/*
*
* this is btn of my calculator 
* which has methods and will return 
* an obj 
* author scoder
* date 2016
*
*/

function btn(txt,w,h){
	if(typeof txt === 'undefined' ||
		typeof w === 'undefined' ||
		typeof h === 'undefined') throw new Error('you should give this btn function 3 params');

	var o = {};
	o.w = w || 10;
	o.h = h || 10;
	o.txt = txt || '';
	o._created = false;
	o.setTxt = function(t){
		if(typeof t === 'undefined') throw new Error('give this method a param');
		o.txt = t;
		return o;
	};
	o.setSize = function(ww,hh){
		if(typeof ww === 'undefined' ||
			typeof hh === 'undefined') throw new Error('give this method 2 params');
		o.w = ww;
		o.h = hh;
		return o;
	};
	o.create = function(elem){
		o._created = true;
		if(typeof elem === 'undefined') throw new Error('give this method an arg');
		var input = $('<input type="button" >').attr({id : o.txt,value : o.txt});
		input.css({width : o.w+'px',height : o.h+'px'});
		o._input = input;
		$(elem).append(input);
		return o;
	};
	o.div = function(){
		if(!o._created) throw new Error('not created yet');
		return o._input;
	};
	o.elem = o.div;
	o.setPos = function(left,top){
		if(typeof left === 'undefined'||
			typeof top === 'undefined')throw new Error('give this method 2 args');
		if(!o._created) throw new Error('you doesnot created this yet!');
		o.div().css('position','relative');
		o.div().css({left : left+'px',
					top : top+'px'});
		return o;
	};
	o.style = function(obj){
		if(typeof obj === 'undefined'||
			typeof obj !== 'object') throw new Error('argument error');
		if(!o._created) throw new Error('not created yet!');
		o.div().css(obj);
		return o;
	};
	return o;
}