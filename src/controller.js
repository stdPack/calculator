/*
*
* src of controller
* 
* controlls all part of calculator
* author scoder
* date 2016
*/

/* monitor limit lengthg ot show words is 22 characters */
var b,r,m,btg,btg2,qlabel;
window.addEventListener('DOMContentLoaded',function(){
	qlabel = label();
	m = monitor();

	b = body();

	b.create('#father');

	b.style({width : '320px',height : '400px',/*border : '1px solid red',*/
			background : 'url(img/calculator.png) no-repeat'});

	b.elem().attr({id : 'body'});

	m.create('#body');
	b.style({margin : '5em auto'})
	m.style({position : 'relative',left : '60px',top:'58px',width:'190px',
					height : '40px',background:'transparent',border:'0',color : '#eeffcc',fontSize : '1.1em'});
	b.add('monit',m.elem());

	r = [];

	for(var i = 1;i<=10;i++){
		if(i === 10){
			r.push(btn(0+'',50,50));
			break;
		} 
		r.push(btn(i+'',50,50));

	}
	r.push(btn('Ans',50,50));
	r.push(btn('+',50,50));
	r.push(btn('Clear',200,30));

	btg = btnGroup();
	btg2 = btnGroup();

	btg.create('#father');
	btg2.create('#father');

	btg.style({/*border : '1px solid #000',*/position : 'relative',width : '220px',top : '134px',left : '59px'});
	btg2.style({/*border : '1px solid #000',*/position : 'relative',width : '250px',top : '-79px',left : '59px'});

	btg.elem().attr({id : 'btg'});
	btg2.elem().attr({id : 'btg2'});

	//b.del();

	r.forEach(function(item,i){
		item.create('#btg');
		btg.add(item);
	});
	var rr = [btn('/',40,30),
			  btn('*',40,30),
			  btn('-',40,30),
			  btn('%',40,30),
			  btn('.',40,30)];
	rr.forEach(function(item){
		item.create('#btg2');
		btg2.add(item);
	});
	b.add('btg1',btg.elem());
	b.add('btg2',btg2.elem());

	qlabel.create('#father');
	qlabel.txt('Created by scoder');
	qlabel.style({/*border : '1px solid #000',*/margin : '-2em auto',width : '400px',textAlign : 'center',
		color : '#888'});
});

var state = 'run';

setTimeout(function(){
	btg.event('click',function(e){
if(e.target.id === 'Ans'){
	var t = m.txt().replace(/\s+/g,'');
	try{
		m.txt(eval(t)+'');
	}catch(e){
		console.log(t);
		m.txt('');
	}

state = 'stop';
return false;
}else if(e.target.id === 'Clear'){
	var t = m.txt().replace(/\s+/g,'');
	m.txt(t.substr(0,t.length-1));
	return false
}
if(state === 'run'){
	m.txt(m.txt()+' '+e.target.id);
}
else{m.txt(e.target.id);state = 'run';}
});
btg2.event('click',function(e){
	if(state === 'run'){
	m.txt(m.txt()+' '+e.target.id);
	}
	else{m.txt(e.target.id);state = 'run';}
});
},100);