/*
*
*
* spec for btnGroup
* author scoder
* date 2016
*
*/

describe('btnGroup',function(){
	var btg;
	beforeEach(function(){
		btg = btnGroup();
		loadFixtures('default.html');
	});
	it('should be a function',function(){
		expect(btnGroup).toEqual(jasmine.any(Function));
	});
	it('should return an Object',function(){
		expect(btnGroup()).toEqual(jasmine.any(Object));
	});

	describe('.create',function(){
		it('should get one arg or throws',function(){
			expect(function(){btg.create();}).toThrow();
		});
		it('should return obj itself',function(){
			expect(btg.create('#btg')).toEqual(jasmine.any(Object));
		});
		it('should append the elem to dom',function(){
			expect($('#btg')).toBeEmpty();
			btg.create('#btg');
			expect($('#btg')).not.toBeEmpty();
		});

	});
	describe('.elem',function(){
		it('should take 0 arg',function(){
			expect(btg.elem.length).toBe(0);
		});
		it('should throws if not created yet!',function(){
			expect(function(){btg.elem()}).toThrow();
		});
		it('should return a jquery element',function(){
			btg.create('#btg');
			expect(btg.elem()).toEqual(jasmine.any(Object));
		});

	});
	describe('.add',function(){
		it('should take one arg which is btn or throws',function(){
			expect(btg.add.length).toBe(1);
			expect(function(){btg.add('asd');}).toThrow();
		});
		it('should throw if not createed yet',function(){
			expect(function(){btg.add(btn('asd',23,23));}).toThrow();
		});
		it('should add the btn in itself',function(){
			btg.create('#btg');
			expect(btg.elem()).toBeEmpty();
			var bb = btn('1',23,23);
			bb.create('#btnPlace');
			btg.add(bb);
			expect(btg.elem()).not.toBeEmpty();
		});
	});
	describe('.style',function(){
		it('should throw if no arg is given',function(){
			expect(function(){btg.style();}).toThrow();
		});
		it('should throw if not created yet',function(){
			expect(function(){btg.style({});}).toThrow();
		});
		it('should set the style of this group',function(){
			btg.create('#btg');
			expect(btg.elem().css('margin')).not.toEqual('23px');
			btg.style({margin : '23px'});
			expect(btg.elem().css('margin')).toEqual('23px');
		});
	});
	describe('.class',function(){
		it('should take one or zero arg',function(){
			expect(btg.class.length).toBe(1);
		});
		it('should throw if not created yet',function(){
			expect(function(){btg.class();}).toThrow();
		});
		it('should return the class',function(){
			btg.create('#btg');
			btg.elem().attr({class : 'mine'});
			expect(btg.class()).toEqual('mine');
		});
		it('should set the class',function(){
			btg.create('#btg');
			btg.class('aer');
			expect(btg.class()).toEqual('aer');
		});
	});

	describe('.event',function(){
		it('should take 2 args',function(){
			expect(btg.event.length).toBe(2);
		});
		it('should throw if not created yet',function(){
			expect(function(){btg.event('click',function(){});}).toThrow();
		});
		it('should bind the event name to it\'s btns',function(){
			var al = spyOn(window,'alert');
			btg.create('#btg');
			var r = [btn('1',30,30),btn('2',30,30)];
			r.forEach(function(item){
				item.create('#btg');
				btg.add(item);
			});
			btg.event('click',function(e){
				alert('awesome');
				console.log(e.target);
			});
			r[0].elem().click();
			expect(al).toHaveBeenCalledWith('awesome');
		});
	});
});