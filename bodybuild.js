var allscreen = document.createElement("div");
allscreen.className="allscreen";

var outscreen = document.createElement("span");
outscreen.className="outscreen";

var cursor = document.createElement("span");
cursor.innerHTML="&nbsp;";
cursor.className="cursor";

var aftercursor = document.createElement("div");
aftercursor.innerHTML="";
aftercursor.className="aftercursor";

allscreen.appendChild(outscreen);
outscreen.appendChild(cursor);
outscreen.appendChild(aftercursor);
document.body.appendChild(allscreen);

var iclist=document.createElement("div");
iclist.className="iclist";

var iclistyymarks=document.createElement("div");
iclistyymarks.className="iclistyymarks";
iclist.appendChild(iclistyymarks);
document.body.appendChild(iclist);

 var controllers=document.createElement("div");
 controllers.className="controllers";
 document.body.appendChild(controllers);

function log(s,l) {
	lnb=l?"":"<br>";
	outscreen.removeChild(cursor);
	outscreen.removeChild(aftercursor);
    outscreen.innerHTML+=s+lnb;
    outscreen.appendChild(cursor);
	outscreen.appendChild(aftercursor);
    aftercursor.scrollIntoView(false);
}

log("body builded.");
