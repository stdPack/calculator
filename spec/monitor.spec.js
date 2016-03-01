/*
*
* spec for my monitor
* 
* author scoder
* date 2016
*
*/

describe('monitor',function(){
	var m;
	beforeEach(function(){
		m = monitor();
	});
	it('should be a function',function(){
		expect(monitor).toEqual(jasmine.any(Function));
	});
	it('should return an obj',function(){
		expect(monitor()).toEqual(jasmine.any(Object));
	});
	describe('return obj ',function(){
		describe('.txt',function(){
			it('should throw error if not createdyet!',function(){
				expect(function(){m.txt('asd');}).toThrow();
			});
			it('should take one or 0 arg',function(){
				expect(m.txt.length).toBe(1);
			});
			it('if take no arg returns txt inside monitor',function(){
				m.create('#monitor');
				expect(m.txt()).toEqual('');
			});
			it('throw if give non string arg',function(){
				expect(function(){m.txt(1);}).toThrow();
			});
			it('if take one arg will set txt inside monitor',function(){
				m.create('#monitor');
				
				expect(m.txt()).toEqual('');
				m.txt('awesome');
				expect(m.txt()).toEqual('awesome');
				expect(m.elem().val()).toEqual('awesome');
			});

		});
		describe('.elem',function(){
			it('should take 0 arg',function(){
				expect(m.elem.length).toEqual(0);
			});
			it('should throw error if not created yet ',function(){

				expect(function(){m.elem();}).toThrow();
			});
			it('should return a jquery input elem',function(){
				m.create('#monitor');
				expect(m.elem()).toEqual('input');
			});
		});	
		describe('.create',function(){
			it('should take 1 arg',function(){
				expect(m.create.length).toBe(1);

			});
			it('should return obj itself',function(){
				expect(m.create()).toEqual(jasmine.any(Object));
			});
		});
		describe('.style',function(){
			it('should take one arg',function(){
				expect(m.style.length).toBe(1);
			});
			it('throws if not created yet!',function(){
				expect(function(){m.style({});}).toThrow();
			});
			it('should take one obj as arg or throws',function(){
				m.create('#monitor');
				expect(function(){m.style(1);}).toThrow();
			});
			it('should return obj itself',function(){
				m.create('#monitor');
				expect(m.style({})).toEqual(jasmine.any(Object));
			});
			it('should set the styles',function(){
				m.create('#monitor');
				expect(m.elem().css('margin')).not.toEqual('34px');
				m.style({margin : '34px'});
				expect(m.elem().css('margin')).toEqual('34px');
			});
		});
		describe('.class',function(){
			it('throws if not created yet!',function(){
				expect(function(){m.class();}).toThrow();
			});
			it('should take 0 | 1 arg',function(){
				expect(m.class.length).toBe(1);
			});
			it('if take 1 arg will set the class',function(){
				m.create('#monitor');
				expect(m.class()).toBeUndefined('');
				m.class('mine');
				expect(m.class()).toEqual('mine');
			});
			it('returns obj itself',function(){
				m.create('#monitor');
				expect(m.class('awe')).toEqual(jasmine.any(Object));
			});
			it('if take 0 arg will get the class',function(){
				m.create('#monitor');
				m.class('mine');
				expect(m.class()).toBe('mine');
			});
		});
	});
});