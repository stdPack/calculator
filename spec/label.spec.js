/*
*
* this is spec for label
* author scoder
* date 2016
*
*/

describe('label',function(){
	var l;
	beforeEach(function(){
		l = label();
		loadFixtures('default.html');
	});
	
	it('should be a function',function(){
		expect(label).toEqual(jasmine.any(Function));
	});
	it('should return an obj',function(){
		expect(label()).toEqual(jasmine.any(Object));
	});
	describe('return obj',function(){
		describe('.elem',function(){
			it('should take 0 arg',function(){
				expect(l.elem.length).toBe(0);
			});
			it('throws if not created yet!',function(){
				expect(function(){l.elem();}).toThrow();
			});
			it('should return an jquery element of div',function(){
				l.create('#label');
				expect(l.elem()).toEqual('div');
			});
		});
		describe('.create',function(){
			it('should take 1 arg',function(){
				expect(l.create.length).toBe(1);
			});
			it('should be in dom after creating',function(){
				expect($('#label')).toBeEmpty();
				l.create('#label');
				//console.log($('#label'));
				expect($('#label')).not.toBeEmpty();
			});
			it('should return an obj itself ',function(){
				expect(l.create('#label')).toEqual(jasmine.any(Object));
			});
		});
		describe('.txt',function(){
			it('should take 1 or 0 arg',function(){
				expect(l.txt.length).toBe(1);
			});
			it('throws if not created',function(){
				expect(function(){
					l.txt('asd');
				}).toThrow();
			});
			it('throws if given non string arg',function(){
				l.create('#label');
				expect(function(){l.txt(2);}).toThrow();
			});
			it('if take one arg will set the txt',function(){
				l.create('#label');
				l.txt('awesome');
				expect(l.txt()).toEqual('awesome');
				expect($('#label').find('div')).toHaveText(l.txt());
			});
			it('if take 0 arg will return txt',function(){
				l.create('#label');
				//l.txt('');
				expect(l.txt()).toEqual('');
			});
			it('will return obj itself',function(){
				l.create('#label');
				expect(l.txt('asd')).toEqual(jasmine.any(Object));
			});
		});
		describe('.style',function(){
			it('should take one arg',function(){
				expect(l.style.length).toBe(1);

			});
			it('should throws if not created yet!',function(){
				expect(function(){l.style({});}).toThrow();
			});
			it('should throw if arg is not obj',function(){
				l.create('#label');
				expect(function(){l.style(23);}).toThrow();
			});
			it('should return obj itself',function(){
				l.create('#label');
				expect(l.style({})).toEqual(jasmine.any(Object));
			});
			it('should change the style of element',function(){
				l.create('#label');
				expect(l.elem().css('margin')).not.toEqual('32px');
				l.style({margin : '32px'});
				expect(l.elem().css('margin')).toEqual('32px');
			});
		});
		xdescribe('.class',function(){

		});
	});
});