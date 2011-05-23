YUI.add("gallery-mustache",function(b){var a=function(){var c=function(){};c.prototype={otag:"{{",ctag:"}}",pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":true},context:{},render:function(g,f,e,h){if(!h){this.context=f;this.buffer=[];}if(!this.includes("",g)){if(h){return g;}else{this.send(g);return;}}g=this.render_pragmas(g);var d=this.render_section(g,f,e);if(h){return this.render_tags(d,f,e,h);}this.render_tags(d,f,e,h);},send:function(d){if(d!=""){this.buffer.push(d);}},render_pragmas:function(d){if(!this.includes("%",d)){return d;}var f=this;var e=new RegExp(this.otag+"%([\\w-]+) ?([\\w]+=[\\w]+)?"+this.ctag);return d.replace(e,function(i,g,h){if(!f.pragmas_implemented[g]){throw ({message:"This implementation of mustache doesn't understand the '"+g+"' pragma"});}f.pragmas[g]={};if(h){var j=h.split("=");f.pragmas[g][j[0]]=j[1];}return"";});},render_partial:function(d,f,e){d=this.trim(d);if(!e||e[d]===undefined){throw ({message:"unknown_partial '"+d+"'"});}if(typeof(f[d])!="object"){return this.render(e[d],f,e,true);}return this.render(e[d],f[d],e,true);},render_section:function(f,e,d){if(!this.includes("#",f)&&!this.includes("^",f)){return f;}var h=this;var g=new RegExp(this.otag+"(\\^|\\#)\\s*(.+)\\s*"+this.ctag+"\n*([\\s\\S]+?)"+this.otag+"\\/\\s*\\2\\s*"+this.ctag+"\\s*","mg");return f.replace(g,function(j,k,i,l){var m=h.find(i,e);if(k=="^"){if(!m||h.is_array(m)&&m.length===0){return h.render(l,e,d,true);}else{return"";}}else{if(k=="#"){if(h.is_array(m)){return h.map(m,function(n){return h.render(l,h.create_context(n),d,true);}).join("");}else{if(h.is_object(m)){return h.render(l,h.create_context(m),d,true);}else{if(typeof m==="function"){return m.call(e,l,function(n){return h.render(n,e,d,true);});}else{if(m){return h.render(l,e,d,true);}else{return"";}}}}}}});},render_tags:function(m,d,f,h){var g=this;var l=function(){return new RegExp(g.otag+"(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?"+g.ctag+"+","g");};var j=l();var k=function(p,i,o){switch(i){case"!":return"";case"=":g.set_delimiters(o);j=l();return"";case">":return g.render_partial(o,d,f);case"{":return g.find(o,d);default:return g.escape(g.find(o,d));}};var n=m.split("\n");for(var e=0;e<n.length;e++){n[e]=n[e].replace(j,k,this);if(!h){this.send(n[e]);}}if(h){return n.join("\n");}},set_delimiters:function(e){var d=e.split(" ");this.otag=this.escape_regex(d[0]);this.ctag=this.escape_regex(d[1]);},escape_regex:function(e){if(!arguments.callee.sRE){var d=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];arguments.callee.sRE=new RegExp("(\\"+d.join("|\\")+")","g");}return e.replace(arguments.callee.sRE,"\\$1");},find:function(e,f){e=this.trim(e);function d(h){return h===false||h===0||h;}var g;if(d(f[e])){g=f[e];}else{if(d(this.context[e])){g=this.context[e];}}if(typeof g==="function"){return g.apply(f);}if(g!==undefined){return g;}return"";},includes:function(e,d){return d.indexOf(this.otag+e)!=-1;},escape:function(d){d=String(d===null?"":d);return d.replace(/&(?!\w+;)|["'<>\\]/g,function(e){switch(e){case"&":return"&amp;";case"\\":return"\\\\";case'"':return"&quot;";case"'":return"&#39;";case"<":return"&lt;";case">":return"&gt;";default:return e;}});},create_context:function(e){if(this.is_object(e)){return e;}else{var f=".";if(this.pragmas["IMPLICIT-ITERATOR"]){f=this.pragmas["IMPLICIT-ITERATOR"].iterator;}var d={};d[f]=e;return d;}},is_object:function(d){return d&&typeof d=="object";},is_array:function(d){return Object.prototype.toString.call(d)==="[object Array]";},trim:function(d){return d.replace(/^\s*|\s*$/g,"");},map:function(h,f){if(typeof h.map=="function"){return h.map(f);}else{var g=[];var d=h.length;for(var e=0;e<d;e++){g.push(f(h[e]));}return g;}}};return({name:"mustache.js",version:"0.3.1-dev",to_html:function(f,d,e,h){var g=new c();if(h){g.send=h;}g.render(f,d,e);if(!h){return g.buffer.join("\n");}}});}();b.mustache=a.to_html;},"@VERSION@");