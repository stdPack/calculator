/*
*
* test for our btn obj
* author scoder
* date 2016
*/

describe('btn',function(){
	var myBtn;
	beforeEach(function(){
		myBtn = btn('1',100,100);
		loadFixtures('default.html');
	});
	it('should be a function',function(){
		expect(btn).toEqual(jasmine.any(Function));
	});
	it('should take 3 params',function(){
		expect(btn.length).toBe(3);
	});
	it('should throw error when we give 2 or 1 or 0 params',function(){
		expect(function(){btn('1');}).toThrow();
	});
	it('should return obj',function(){
		expect(myBtn).toEqual(jasmine.any(Object));
	});
	describe('return obj',function(){
		it('should have w = width prop',function(){
			expect(myBtn.w).toEqual(jasmine.any(Number));
		});
		it('should have h = height prop',function(){
			expect(myBtn.h).toEqual(jasmine.any(Number));
		});
		it('should have txt prop',function(){
			expect(myBtn.txt).toEqual(jasmine.any(String));
		});
		it('should have setTxt method',function(){
			expect(myBtn.setTxt).toEqual(jasmine.any(Function));
		});
		it('should have setSize method',function(){
			expect(myBtn.setSize).toEqual(jasmine.any(Function));
		});
		describe('.create',function(){
			it('should return obj itself',function(){
				expect(myBtn.create('#btnPlace')).toEqual(jasmine.any(Object));
			});
			it('take one arg and append the btn to elem',function(){
				expect(myBtn.create.length).toBe(1);
			});
			it('should throw if none arg given',function(){
				expect(function(){myBtn.create();}).toThrow();
			});
			it('should append to the element after creating',function(){
				expect($('#btnPlace').html()).not.toContain("input");
				myBtn.create('#btnPlace');
				expect($('#btnPlace').html()).toContain("input");
			});
			it('should create input element with id of txt',function(){
				var id = myBtn.txt;
				myBtn.create('#btnPlace');
				expect($('#btnPlace')).toHaveHtml(myBtn.div());
			});
			it('should create input elem with value of txt',function(){
				var id = myBtn.txt;
				var txt = myBtn.txt;
				myBtn.create('#btnPlace');
				expect($('#btnPlace')).toHaveHtml(myBtn.div());
			});
			it('should create div element with size of h,w',function(){
				myBtn.create('#btnPlace');
				expect($('#btnPlace').find('#1').css('height')).toEqual('100px');
				expect($('#btnPlace').find('#1').css('width')).toEqual('100px');
			});
		});
		describe('.div',function(){
			it('takes no arg',function(){
				expect(myBtn.div.length).toBe(0);
			});
			it('throws if btn has not created yet',function(){
				expect(function(){myBtn.div();}).toThrow();
			});
			it('returns an jquery div obj',function(){
				myBtn.create('#btnPlace');
				expect(myBtn.div()).toEqual('input');
			});
		});
		describe('.elem',function(){
			it('is second name for .div',function(){
				myBtn.create('#btnPlace');
				expect(myBtn.elem()).toEqual('input');
			});	
		});
		describe('.style',function(){
			it('should take one arg',function(){
				expect(myBtn.style.length).toBe(1);
			});
			it('throws error if not created yet',function(){
				expect(function(){
					myBtn.style({});
				}).toThrow();
			});
			it('should take arg of type object or throws',function(){
				myBtn.create('#btnPlace');
				expect(function(){myBtn.style(1);}).toThrow();
			});
			it('should throw error if no arg is given',function(){
				myBtn.create('#btnPlace');
				expect(function(){myBtn.style();}).toThrow();
			});
			it('should return obj itself',function(){
				myBtn.create('#btnPlace');
				expect(myBtn.style({})).toEqual(jasmine.any(Object));
			});
			it('should set the style of element',function(){
				myBtn.create('#btnPlace');
				expect(myBtn.elem().css('margin')).not.toEqual('11px');
				myBtn.style({margin : '11px'});
				expect(myBtn.elem().css('margin')).toEqual('11px');
			});
		});
		describe(".setPos",function(){
			/*beforeEach(function(){
				myBtn.create('#btnPlace');
			});*/
			it('should return obj itself',function(){
				myBtn.create('#btnPlace');
				expect(myBtn.setPos(22,22)).toEqual(jasmine.any(Object));
			});
			it('should take 2 arg',function(){
				expect(myBtn.setPos.length).toBe(2);

			});
			it('should throw error on 1 or 0 arg ',function(){
				myBtn.create('#btnPlace');
				expect(function(){myBtn.setPos();}).toThrow();
			});	
			it('should throw error if we doesn\'t created this btn yet',function(){

				expect(function(){myBtn.setPos(2,2);}).toThrow();
			});
			it('should change the pos of element relative to parent of this elem',function(){
				myBtn.create('#btnPlace');
				myBtn.setPos(33,43);
				expect($("#btnPlace").find('#1').css('position')).toEqual('relative');
				expect($("#btnPlace").find('#1').css('left')).toEqual('33px');
				expect($("#btnPlace").find('#1').css('top')).toEqual('43px');
			});
		});
		describe('.setTxt',function(){
			it('should take 1 param',function(){
				expect(myBtn.setTxt.length).toBe(1);
			});
			it('should take one or throw error',function(){
				expect(function(){myBtn.setTxt();}).toThrow();
			});
			it('should return obj itself ',function(){
				expect(myBtn.setTxt('1')).toEqual(jasmine.any(Object));
			});
			it('should set the txt of return obj',function(){
				var t = myBtn.txt;
				myBtn.setTxt('4');
				expect(myBtn.txt).not.toEqual(t);
			});
		});
		describe('.setSize',function(){
			it('should take 2 params',function(){
				expect(myBtn.setSize.length).toBe(2);
			});
			it('should take 2 or throw error',function(){
				expect(function(){myBtn.setSize();}).toThrow();
			});
			it('should return obj itself ',function(){
				expect(myBtn.setSize(1,1)).toEqual(jasmine.any(Object));
			});
			it('should set the size of return obj',function(){
				var h = myBtn.h;
				myBtn.setSize(47,56);
				expect(myBtn.h).not.toEqual(h);
			});
		});
		xdescribe('.class',function(){

		});
	});
});