YUI.add("gallery-prettify",function(a){a["PR_SHOULD_USE_CONTINUATION"]=true;(function(){var i=["break,continue,do,else,for,if,return,while"];var v=[i,"auto,case,char,const,default,"+"double,enum,extern,float,goto,int,long,register,short,signed,sizeof,"+"static,struct,switch,typedef,union,unsigned,void,volatile"];var q=[v,"catch,class,delete,false,import,"+"new,operator,private,protected,public,this,throw,true,try,typeof"];var m=[q,"alignof,align_union,asm,axiom,bool,"+"concept,concept_map,const_cast,constexpr,decltype,"+"dynamic_cast,explicit,export,friend,inline,late_check,"+"mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,"+"template,typeid,typename,using,virtual,where"];var y=[q,"abstract,boolean,byte,extends,final,finally,implements,import,"+"instanceof,null,native,package,strictfp,super,synchronized,throws,"+"transient"];var S=[y,"as,base,by,checked,decimal,delegate,descending,dynamic,event,"+"fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,"+"object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,"+"stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"];var s="all,and,by,catch,class,else,extends,false,finally,"+"for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,"+"true,try,unless,until,when,while,yes";var x=[q,"debugger,eval,export,function,get,null,set,undefined,var,with,"+"Infinity,NaN"];var t="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,"+"goto,if,import,last,local,my,next,no,our,print,package,redo,require,"+"sub,undef,unless,until,use,wantarray,while,BEGIN,END";var J=[i,"and,as,assert,class,def,del,"+"elif,except,exec,finally,from,global,import,in,is,lambda,"+"nonlocal,not,or,pass,print,raise,try,with,yield,"+"False,True,None"];var g=[i,"alias,and,begin,case,class,"+"def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,"+"rescue,retry,self,super,then,true,undef,unless,until,when,yield,"+"BEGIN,END"];var I=[i,"case,done,elif,esac,eval,fi,"+"function,in,local,set,then,until"];var B=[m,S,x,t+J,g,I];var f=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/;var D="str";var A="kwd";var k="com";var P="typ";var H="lit";var M="pun";var G="pln";var n="tag";var F="dec";var K="src";var Q="atn";var o="atv";var O="nocode";var N="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";function l(aa){var ae=0;var T=false;var ad=false;for(var W=0,V=aa.length;W<V;++W){var af=aa[W];if(af.ignoreCase){ad=true;}else{if(/[a-z]/i.test(af.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){T=true;ad=false;break;}}}var Z={"b":8,"t":9,"n":10,"v":11,"f":12,"r":13};function ac(ai){var ah=ai.charCodeAt(0);if(ah!==92){return ah;}var ag=ai.charAt(1);ah=Z[ag];if(ah){return ah;}else{if("0"<=ag&&ag<="7"){return parseInt(ai.substring(1),8);}else{if(ag==="u"||ag==="x"){return parseInt(ai.substring(2),16);}else{return ai.charCodeAt(1);}}}}function U(ag){if(ag<32){return(ag<16?"\\x0":"\\x")+ag.toString(16);}var ah=String.fromCharCode(ag);return(ah==="\\"||ah==="-"||ah==="]"||ah==="^")?"\\"+ah:ah;}function Y(am){var aq=am.substring(1,am.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}"+"|\\\\x[0-9A-Fa-f]{2}"+"|\\\\[0-3][0-7]{0,2}"+"|\\\\[0-7]{1,2}"+"|\\\\[\\s\\S]"+"|-"+"|[^-\\\\]","g"));var ag=[];var ao=aq[0]==="^";var an=["["];if(ao){an.push("^");}for(var ar=ao?1:0,ak=aq.length;ar<ak;++ar){var ai=aq[ar];if(/\\[bdsw]/i.test(ai)){an.push(ai);}else{var ah=ac(ai);var al;if(ar+2<ak&&"-"===aq[ar+1]){al=ac(aq[ar+2]);ar+=2;}else{al=ah;}ag.push([ah,al]);if(!(al<65||ah>122)){if(!(al<65||ah>90)){ag.push([Math.max(65,ah)|32,Math.min(al,90)|32]);}if(!(al<97||ah>122)){ag.push([Math.max(97,ah)&~32,Math.min(al,122)&~32]);}}}}ag.sort(function(av,au){return(av[0]-au[0])||(au[1]-av[1]);});var aj=[];var ap=[];for(var ar=0;ar<ag.length;++ar){var at=ag[ar];if(at[0]<=ap[1]+1){ap[1]=Math.max(ap[1],at[1]);}else{aj.push(ap=at);}}for(var ar=0;ar<aj.length;++ar){var at=aj[ar];an.push(U(at[0]));if(at[1]>at[0]){if(at[1]+1>at[0]){an.push("-");}an.push(U(at[1]));}}an.push("]");return an.join("");}function X(am){var ak=am.source.match(new RegExp("(?:"+"\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]"+"|\\\\u[A-Fa-f0-9]{4}"+"|\\\\x[A-Fa-f0-9]{2}"+"|\\\\[0-9]+"+"|\\\\[^ux0-9]"+"|\\(\\?[:!=]"+"|[\\(\\)\\^]"+"|[^\\x5B\\x5C\\(\\)\\^]+"+")","g"));var ai=ak.length;var ao=[];for(var al=0,an=0;al<ai;++al){var ah=ak[al];if(ah==="("){++an;}else{if("\\"===ah.charAt(0)){var ag=+ah.substring(1);if(ag){if(ag<=an){ao[ag]=-1;}else{ak[al]=U(ag);}}}}}for(var al=1;al<ao.length;++al){if(-1===ao[al]){ao[al]=++ae;}}for(var al=0,an=0;al<ai;++al){var ah=ak[al];if(ah==="("){++an;if(!ao[an]){ak[al]="(?:";}}else{if("\\"===ah.charAt(0)){var ag=+ah.substring(1);if(ag&&ag<=an){ak[al]="\\"+ao[an];}}}}for(var al=0,an=0;al<ai;++al){if("^"===ak[al]&&"^"!==ak[al+1]){ak[al]="";}}if(am.ignoreCase&&T){for(var al=0;al<ai;++al){var ah=ak[al];var aj=ah.charAt(0);if(ah.length>=2&&aj==="["){ak[al]=Y(ah);}else{if(aj!=="\\"){ak[al]=ah.replace(/[a-zA-Z]/g,function(ap){var aq=ap.charCodeAt(0);return"["+String.fromCharCode(aq&~32,aq|32)+"]";});}}}}return ak.join("");}var ab=[];for(var W=0,V=aa.length;W<V;++W){var af=aa[W];if(af.global||af.multiline){throw new Error(""+af);}ab.push("(?:"+X(af)+")");}return new RegExp(ab.join("|"),ad?"gi":"g");}function b(W){var V=/(?:^|\s)nocode(?:\s|$)/;var Y=[];var U=0;var aa=[];var X=0;var T;if(W.currentStyle){T=W.currentStyle.whiteSpace;}else{if(window.getComputedStyle){T=document.defaultView.getComputedStyle(W,null).getPropertyValue("white-space");}}var Z=T&&"pre"===T.substring(0,3);function ab(ac){switch(ac.nodeType){case 1:if(V.test(ac.className)){return;}for(var af=ac.firstChild;af;af=af.nextSibling){ab(af);}var ae=ac.nodeName;if("BR"===ae||"LI"===ae){Y[X]="\n";aa[X<<1]=U++;aa[(X++<<1)|1]=ac;}break;case 3:case 4:var ad=ac.nodeValue;if(ad.length){if(!Z){ad=ad.replace(/[ \t\r\n]+/g," ");
}else{ad=ad.replace(/\r\n?/g,"\n");}Y[X]=ad;aa[X<<1]=U;U+=ad.length;aa[(X++<<1)|1]=ac;}break;}}ab(W);return{sourceCode:Y.join("").replace(/\n$/,""),spans:aa};}function C(T,V,X,U){if(!V){return;}var W={sourceCode:V,basePos:T};X(W);U.push.apply(U,W.decorations);}var w=/\S/;function p(T){var W=undefined;for(var V=T.firstChild;V;V=V.nextSibling){var U=V.nodeType;W=(U===1)?(W?T:V):(U===3)?(w.test(V.nodeValue)?T:W):W;}return W===T?undefined:W;}function h(V,U){var T={};var W;(function(){var ae=V.concat(U);var ai=[];var ah={};for(var ac=0,aa=ae.length;ac<aa;++ac){var Z=ae[ac];var ad=Z[3];if(ad){for(var af=ad.length;--af>=0;){T[ad.charAt(af)]=Z;}}var ag=Z[1];var ab=""+ag;if(!ah.hasOwnProperty(ab)){ai.push(ag);ah[ab]=null;}}ai.push(/[\0-\uffff]/);W=l(ai);})();var Y=U.length;var X=function(ai){var aa=ai.sourceCode,Z=ai.basePos;var ae=[Z,G];var ag=0;var ao=aa.match(W)||[];var ak={};for(var af=0,ar=ao.length;af<ar;++af){var ah=ao[af];var aq=ak[ah];var aj=void 0;var an;if(typeof aq==="string"){an=false;}else{var ab=T[ah.charAt(0)];if(ab){aj=ah.match(ab[1]);aq=ab[0];}else{for(var ap=0;ap<Y;++ap){ab=U[ap];aj=ah.match(ab[1]);if(aj){aq=ab[0];break;}}if(!aj){aq=G;}}an=aq.length>=5&&"lang-"===aq.substring(0,5);if(an&&!(aj&&typeof aj[1]==="string")){an=false;aq=K;}if(!an){ak[ah]=aq;}}var ac=ag;ag+=ah.length;if(!an){ae.push(Z+ac,aq);}else{var am=aj[1];var al=ah.indexOf(am);var ad=al+am.length;if(aj[2]){ad=ah.length-aj[2].length;al=ad-am.length;}var at=aq.substring(5);C(Z+ac,ah.substring(0,al),X,ae);C(Z+ac+al,am,r(at,am),ae);C(Z+ac+ad,ah.substring(ad),X,ae);}}ai.decorations=ae;};return X;}function j(U){var X=[],T=[];if(U["tripleQuotedStrings"]){X.push([D,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]);}else{if(U["multiLineStrings"]){X.push([D,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]);}else{X.push([D,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);}}if(U["verbatimStrings"]){T.push([D,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);}var Z=U["hashComments"];if(Z){if(U["cStyleComments"]){if(Z>1){X.push([k,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]);}else{X.push([k,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]);}T.push([D,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null]);}else{X.push([k,/^#[^\r\n]*/,null,"#"]);}}if(U["cStyleComments"]){T.push([k,/^\/\/[^\r\n]*/,null]);T.push([k,/^\/\*[\s\S]*?(?:\*\/|$)/,null]);}if(U["regexLiterals"]){var Y=("/(?=[^/*])"+"(?:[^/\\x5B\\x5C]"+"|\\x5C[\\s\\S]"+"|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+"+"/");T.push(["lang-regex",new RegExp("^"+N+"("+Y+")")]);}var W=U["types"];if(W){T.push([P,W]);}var V=(""+U["keywords"]).replace(/^ | $/g,"");if(V.length){T.push([A,new RegExp("^(?:"+V.replace(/[\s,]+/g,"|")+")\\b"),null]);}X.push([G,/^\s+/,null," \r\n\t\xA0"]);T.push([H,/^@[a-z_$][a-z_$@0-9]*/i,null],[P,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[G,/^[a-z_$][a-z_$@0-9]*/i,null],[H,new RegExp("^(?:"+"0x[a-f0-9]+"+"|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)"+"(?:e[+\\-]?\\d+)?"+")"+"[a-z]*","i"),null,"0123456789"],[G,/^\\[\s\S]?/,null],[M,/^.[^\s\w\.$@\'\"\`\/\#\\]*/,null]);return h(X,T);}var L=j({"keywords":B,"hashComments":true,"cStyleComments":true,"multiLineStrings":true,"regexLiterals":true});function R(W,ah){var V=/(?:^|\s)nocode(?:\s|$)/;var ac=/\r\n?|\n/;var ad=W.ownerDocument;var T;if(W.currentStyle){T=W.currentStyle.whiteSpace;}else{if(window.getComputedStyle){T=ad.defaultView.getComputedStyle(W,null).getPropertyValue("white-space");}}var aa=T&&"pre"===T.substring(0,3);var ag=ad.createElement("LI");while(W.firstChild){ag.appendChild(W.firstChild);}var X=[ag];function af(am){switch(am.nodeType){case 1:if(V.test(am.className)){break;}if("BR"===am.nodeName){ae(am);if(am.parentNode){am.parentNode.removeChild(am);}}else{for(var ao=am.firstChild;ao;ao=ao.nextSibling){af(ao);}}break;case 3:case 4:if(aa){var an=am.nodeValue;var ak=an.match(ac);if(ak){var aj=an.substring(0,ak.index);am.nodeValue=aj;var ai=an.substring(ak.index+ak[0].length);if(ai){var al=am.parentNode;al.insertBefore(ad.createTextNode(ai),am.nextSibling);}ae(am);if(!aj){am.parentNode.removeChild(am);}}}break;}}function ae(al){while(!al.nextSibling){al=al.parentNode;if(!al){return;}}function aj(am,at){var ar=at?am.cloneNode(false):am;var ap=am.parentNode;if(ap){var aq=aj(ap,1);var ao=am.nextSibling;aq.appendChild(ar);for(var an=ao;an;an=ao){ao=an.nextSibling;aq.appendChild(an);}}return ar;}var ai=aj(al.nextSibling,0);for(var ak;(ak=ai.parentNode)&&ak.nodeType===1;){ai=ak;}X.push(ai);}for(var Z=0;Z<X.length;++Z){af(X[Z]);}if(ah===(ah|0)){X[0].setAttribute("value",ah);}var ab=ad.createElement("OL");ab.className="linenums";var Y=Math.max(0,((ah-1))|0)||0;for(var Z=0,U=X.length;Z<U;++Z){ag=X[Z];ag.className="L"+((Z+Y)%10);if(!ag.firstChild){ag.appendChild(ad.createTextNode("\xA0"));}ab.appendChild(ag);}W.appendChild(ab);}function E(ad){var aj=/\bMSIE\b/.test(navigator.userAgent);var am=/\n/g;var al=ad.sourceCode;var an=al.length;var W=0;var ab=ad.spans;var U=ab.length;var ah=0;var Y=ad.decorations;var Z=Y.length;var aa=0;Y[Z]=an;var ar,aq;for(aq=ar=0;aq<Z;){if(Y[aq]!==Y[aq+2]){Y[ar++]=Y[aq++];Y[ar++]=Y[aq++];}else{aq+=2;}}Z=ar;for(aq=ar=0;aq<Z;){var at=Y[aq];var ac=Y[aq+1];var X=aq+2;while(X+2<=Z&&Y[X+1]===ac){X+=2;}Y[ar++]=at;Y[ar++]=ac;aq=X;}Z=Y.length=ar;var af=null;while(ah<U){var ag=ab[ah];var T=ab[ah+2]||an;var ap=Y[aa+2]||an;var X=Math.min(T,ap);var ak=ab[ah+1];var V;if(ak.nodeType!==1&&(V=al.substring(W,X))){if(aj){V=V.replace(am,"\r");}ak.nodeValue=V;var ai=ak.ownerDocument;var ao=ai.createElement("SPAN");ao.className=Y[aa+1];var ae=ak.parentNode;ae.replaceChild(ao,ak);ao.appendChild(ak);if(W<T){ab[ah+1]=ak=ai.createTextNode(al.substring(X,T));ae.insertBefore(ak,ao.nextSibling);
}}W=X;if(W>=T){ah+=2;}if(W>=ap){aa+=2;}}}var u={};function d(V,W){for(var T=W.length;--T>=0;){var U=W[T];if(!u.hasOwnProperty(U)){u[U]=V;}else{if(a["console"]){console["warn"]("cannot override language handler %s",U);}}}}function r(U,T){if(!(U&&u.hasOwnProperty(U))){U=/^\s*</.test(T)?"default-markup":"default-code";}return u[U];}d(L,["default-code"]);d(h([],[[G,/^[^<?]+/],[F,/^<!\w[^>]*(?:>|$)/],[k,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[M,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);d(h([[G,/^[\s]+/,null," \t\r\n"],[o,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[n,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[Q,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[M,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);d(h([],[[o,/^[\s\S]+/]]),["uq.val"]);d(j({"keywords":m,"hashComments":true,"cStyleComments":true,"types":f}),["c","cc","cpp","cxx","cyc","m"]);d(j({"keywords":"null,true,false"}),["json"]);d(j({"keywords":S,"hashComments":true,"cStyleComments":true,"verbatimStrings":true,"types":f}),["cs"]);d(j({"keywords":y,"cStyleComments":true}),["java"]);d(j({"keywords":I,"hashComments":true,"multiLineStrings":true}),["bsh","csh","sh"]);d(j({"keywords":J,"hashComments":true,"multiLineStrings":true,"tripleQuotedStrings":true}),["cv","py"]);d(j({"keywords":t,"hashComments":true,"multiLineStrings":true,"regexLiterals":true}),["perl","pl","pm"]);d(j({"keywords":g,"hashComments":true,"multiLineStrings":true,"regexLiterals":true}),["rb"]);d(j({"keywords":x,"cStyleComments":true,"regexLiterals":true}),["js"]);d(j({"keywords":s,"hashComments":3,"cStyleComments":true,"multilineStrings":true,"tripleQuotedStrings":true,"regexLiterals":true}),["coffee"]);d(h([],[[D,/^[\s\S]+/]]),["regex"]);function e(W){var V=W.langExtension;try{var T=b(W.sourceNode);var U=T.sourceCode;W.sourceCode=U;W.spans=T.spans;W.basePos=0;r(V,U)(W);E(W);}catch(X){if("console" in window){console["log"](X&&X["stack"]?X["stack"]:X);}}}function z(X,W,V){var T=document.createElement("PRE");T.innerHTML=X;if(V){R(T,V);}var U={langExtension:W,numberLines:V,sourceNode:T};e(U);return T.innerHTML;}function c(ae){function Z(ag){return document.getElementsByTagName(ag);}var ad=[Z("pre"),Z("code"),Z("xmp")];var U=[];for(var ab=0;ab<ad.length;++ab){for(var aa=0,W=ad[ab].length;aa<W;++aa){U.push(ad[ab][aa]);}}ad=null;var X=Date;if(!X["now"]){X={"now":function(){return +(new Date);}};}var Y=0;var T;var ac=/\blang(?:uage)?-([\w.]+)(?!\S)/;var af=/\bprettyprint\b/;function V(){var ah=(a["PR_SHOULD_USE_CONTINUATION"]?X["now"]()+250:Infinity);for(;Y<U.length&&X["now"]()<ah;Y++){var ak=U[Y];var aj=ak.className;if(aj.indexOf("prettyprint")>=0){var ai=aj.match(ac);var an;if(!ai&&(an=p(ak))&&"CODE"===an.tagName){ai=an.className.match(ac);}if(ai){ai=ai[1];}var am=false;for(var al=ak.parentNode;al;al=al.parentNode){if((al.tagName==="pre"||al.tagName==="code"||al.tagName==="xmp")&&al.className&&al.className.indexOf("prettyprint")>=0){am=true;break;}}if(!am){var ag=ak.className.match(/\blinenums\b(?::(\d+))?/);ag=ag?ag[1]&&ag[1].length?+ag[1]:true:false;if(ag){R(ak,ag);}T={langExtension:ai,sourceNode:ak,numberLines:ag};e(T);}}}if(Y<U.length){setTimeout(V,250);}else{if(ae){ae();}}}V();}a["prettyPrintOne"]=z;a["prettyPrint"]=c;a["PR"]={"createSimpleLexer":h,"registerLangHandler":d,"sourceDecorator":j,"PR_ATTRIB_NAME":Q,"PR_ATTRIB_VALUE":o,"PR_COMMENT":k,"PR_DECLARATION":F,"PR_KEYWORD":A,"PR_LITERAL":H,"PR_NOCODE":O,"PR_PLAIN":G,"PR_PUNCTUATION":M,"PR_SOURCE":K,"PR_STRING":D,"PR_TAG":n,"PR_TYPE":P};})();},"@VERSION@",{skinnable:true});