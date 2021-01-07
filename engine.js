log("engine on.");
var timeevery;

function init(){
	timeevery=setInterval(function(){everytime();},timeforeveyturn);
		log("ignited.");
	} init();
	
function everytime(){
	 // flipifso();
	  createexpectations();
	  flipifso();
	  checklikes();
		//log(".",1);
}

function getslice(ss,se){
	return yymem.slice(ss,se);
}

function remember(amm){
	rect=getslice(yymem.length-amm,yymem.length);
	//log("remembered: "+rect);
//	log(yymem);
	return rect;
}

my_expectation_of_lines_are="Expectation: [$].";
i_liked_amount="Result: [$].";

function checklikes(){
    if(!ok(aik)){return false;}
    cc=0;
	while(ai[cc]){
	    aik=ai[cc];
	    yell(i_liked_amount,decformat(aik.expectation[remember(1)]));
	    cc++;
	}
}

function createexpectations(){
	if(yymem.length==0)return false;
	cc=0;
	while(ai[cc]){
		 aik=ai[cc];
		 expect=[];
		 
		 for(expi=0;expi<5;expi++){
    		 if(notempty(gothlns=
    		 		whereinBisA(remember(expi+1),aik.base))){
    		 		expect[expi]=calcexpectnextrelatedtoself(gothlns);
    		 }else{expect[expi]=[0,0,0,0];}
		 }
		 
		 aik.expectation=[0,0,0,0];
		 for(expi=1;expi<6;expi++){
		     aik.expectation[0]+=(expect[expi-1][0]*expi);
		     aik.expectation[1]+=(expect[expi-1][1]*expi);
		     aik.expectation[2]+=(expect[expi-1][2]*expi);
		     aik.expectation[3]+=(expect[expi-1][3]*expi);
		 }
		 aik.expectation=distributeOtoOne(aik.expectation);
		 
		 yell(my_expectation_of_lines_are,tworeadable(aik.expectation));
	     ai[cc]=aik;
		 cc++;
	}
}

function tworeadable(fourar){
    phret=" - - "+decformat(fourar[2])+", --- "+decformat(fourar[3])+"";
    return phret;
}

function fourreadable(fourar){
    phret="- -. "+decformat(fourar[0])+", ---. "+decformat(fourar[1])+", - - "+decformat(fourar[2])+", --- "+decformat(fourar[3])+"";
    return phret;
}

function decformat(anumtf){
    return anumtf.toFixed(3);
}

function yell(phrase,gvar){
    phrase=substitutevars(phrase,gvar);
    log(aik.name+": "+phrase);
}

function substitutevars(aph,given){
    aph = aph.replace("[$]",given);
    return aph;
}

function calcexpectnextrelatedtoself(lnsmatch){
	if(lnsmatch.length==0){return [0,0,0,0];}
	expct=[0,0,0,0];
	lncen=0;
	while(ok(lna=lnsmatch[lncen])){
		nxtln=aik.base[lna+1];
		expct[nxtln]+=1; 
		if(nxtln==0){expct[3]+=.5;expct[2]+=.25;}
		if(nxtln==1){expct[2]+=.5;expct[3]+=.25;}
		lncen++;
	}
	expct=distributeOtoOne(expct);
	
	//logsys("expct");
	return expct;
}

function distributeOtoOne(dta){
	censum=0;
	dotox=0;
	zerofail=[];
	while(ok(dta[dotox])){
		censum+=dta[dotox];
		zerofail.push(0);
		dotox++;
	}
	if(censum===0){return zerofail;}
	dotox=0;
	while(ok(dta[dotox])){
		dta[dotox]=dta[dotox]/censum;
		dotox++;
	}
	 return dta;
}
	
function logsys(lvar){
	log(lvar+":"+eval(lvar)+".");
}

function syslog(lvar){logsys(lvar);}

function whereinBisA(arA,arB){
	ret=[];
	lookW=0;
	while(lookW+arA.length<=arB.length) {
	    found=false;
	    for(wib=0;wib<arA.length;wib++){
	        if(arA[wib]==arB[lookW+wib]){found=true;}else{found=false;break;}
	    }
	    if(found){ret.push(lookW);}
	    lookW++;
	}
	
	
    //log(arA+"|"+arB+"|"+ret);
 	return ret;
}

function notempty(tar){
	if(tar.length>0)return true;
	return false;
}

function brl(){
	log("");
}

function cast(){
	flipc=Math.random();
		  if (inbet(flipc,0,1/16)){icp=0;}
		  if (inbet(flipc,1/16,4/16)){icp=1;}
		  if (inbet(flipc,4/16,9/16)){icp=2;}
		  if (inbet(flipc,9/16,1)){icp=3;}
		//  log("fail, out test:"+flipc);
}

function flipifso(){
	if (Math.random() < chancetoflip) {
		flip();
	}
}

function flip(){
	cast();
		yymem.push(icp);
		iclog();
}

function inbet(t,a,b){
		
		if((t>=a)&&(t<b)){return true;}
		return false;
		
}

function iclog(){
	//0 - -.
	//1 ---.
	//2 - -
	//3 ---
	//log(icp);

if(yymem.length>yymemory){yymem.shift();}
xresult="";
x=yymem.length-1;
while(ok(yymem[x])){
	
	xresult+=yysign[yymem[x]]+br;
	x--;
	
}
iclistyymarks.innerHTML=xresult;
//log(yymem);
	}
	
	function ok(tvar){
		if (typeof tvar !== 'undefined')return true;
		return false;
	}
