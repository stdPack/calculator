/*
*
*
* spec for my body of calc
* 
* author scode
* date 2016
*
*/

describe('body',function(){
	var bod;
	beforeEach(function(){
		bod = body();
		loadFixtures('default.html');
	});
	it('should be a function',function(){
		expect(body).toEqual(jasmine.any(Function));
	});
	it('should retrn obj',function(){
		expect(body()).toEqual(jasmine.any(Object));
	});
	describe('.create',function(){
		it('should take 1 arg',function(){
			expect(bod.create.length).toBe(1);
		});
		it('should throws if no arg given',function(){
			expect(function(){bod.create();}).toThrow();
		});
		it('should return obj itself',function(){
			expect(bod.create('#body')).toEqual(jasmine.any(Object));
		});
		it('should append div of body to dom',function(){
			expect($('#body')).toBeEmpty();
			bod.create('#body');
			expect($('#body').html()).toEqual('<div></div>');
		});

	});
	describe('.elem',function(){
		it('should take 0 arg',function(){
			expect(bod.elem.length).toBe(0);
		});
		it('should throw if not created yet',function(){
			expect(function(){bod.elem();}).toThrow();
		});
		it('should return jquery of div element',function(){
			bod.create('#body');
			expect(bod.elem()).toEqual(jasmine.any(Object));
		});
	});
	describe('.style',function(){
		it('should take 1 arg',function(){
			expect(bod.style.length).toBe(1);
		});
		it('should throw if not created yet',function(){
			expect(function(){bod.style();}).toThrow();
		});
		it('should change or set the style of an element',function(){
			bod.create('#body');
			expect(bod.elem().css('margin')).not.toEqual('12px');
			bod.style({margin : '12px'});
			expect(bod.elem().css('margin')).toEqual('12px');
			bod.style({margin : '13px'});
			expect(bod.elem().css('margin')).toEqual('13px');
		});
		it('should return obj itself',function(){
			bod.create('#body');
			expect(bod.style({})).toEqual(jasmine.any(Object));
		});
	});
	describe('.add',function(){
		it('should take 2 args',function(){
			expect(bod.add.length).toBe(2);
		});
		it('should throws if not created yet!',function(){
			expect(function(){bod.add('asd',$('<div>'));}).toThrow();
		});
		it('should append the added item in the body in dom',function(){
			bod.create('#body');
			expect($('#body').html()).toBeEmpty();
			bod.add('mine',$('<span>'));
			expect($('#body').html()).toEqual('<div><span></span></div>');
		});
		it('should not append one element with one name 2 times',function(){
			bod.create('#body');
			bod.add('awesome',$('<span>'));
			expect($('#body').html()).toEqual('<div><span></span></div>');
			bod.add('awesome',$('<span>'));
			expect($('#body').html()).toEqual('<div><span></span></div>');
		});
		it('should return obj itself',function(){
			bod.create('#body');
			expect(bod.add('adsa',$('<div>'))).toEqual(jasmine.any(Object));
		});
	});
	describe('.del',function(){
		it('should take 1 or 0 arg',function(){
			expect(bod.del.length).toEqual(1);
		});
		it('should throw if not created yet!',function(){
			expect(function(){bod.del('asd');}).toThrow();
		});
		it('should return true if element with name specified deleted successfully otherwise false',function(){
			bod.create('#body');
			bod.add('aaa',$('<div>'));
			expect(bod.del('aaa')).toEqual(true);
			expect(bod.del('aaa')).not.toEqual(true);
		});
		it('should delete the item with name specified',function(){
			bod.create('#body');
			bod.add('aaa',$('<div>'));
			expect(bod.elem().html()).toEqual('<div></div>');
			expect(bod.del('aaa')).toEqual(true);
			expect(bod.elem().html()).not.toEqual('<div></div>');
		});
		it('should delete all items withing body with no arg',function(){
			bod.create('#body');
			bod.add('aaa',$('<div>'));
			bod.add('bbb',$('<div>'));
			bod.add('ccc',$('<div>'));
			bod.del();
			expect(bod.elem()).toBeEmpty();
		});
	});
	describe('.class',function(){
		it('should take 0 or 1 arg ',function(){
			expect(bod.class.length).toBe(1);
		});
		it('should throws if not created yet!',function(){
			expect(function(){bod.class();}).toThrow();
		});
		it('should return class ',function(){
			bod.create('#body');
			bod.class('awesome');
			expect(bod.class()).toEqual('awesome');
		});
		it('should set the class of body',function(){
			bod.create('#body');
			bod.class('what');
			expect(bod.class()).toEqual('what');
		});
	});
});