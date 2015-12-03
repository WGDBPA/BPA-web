/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(a){function b(a){var b=a.css("background-image");a.css("background-image","");var c=a.css("background-image");b!=c&&a.css("background-image",b);return c.replace(/^\s*url\(\"?/,"").replace(/['"]?\)$/,"")}if(!Muse.Browser.Features.checkCSSFeature("background-size")){var c=function(c){var d=a(c),f=b(d),j=document.createElement("img"),g=document.createElement("div"),l=this,k=!1,p=!1,q=!0,o={};a(g).css({overflow:"hidden",position:"absolute",top:"0px",left:"0px",width:c.clientWidth+"px",height:c.clientHeight+
"px",marginBottom:"-"+c.clientHeight+"px",marginRight:"-"+c.clientWidth+"px",zIndex:"-1"}).addClass("museBgSizePolyfill");j.src=f;j.alt="";j.style.position="absolute";g.appendChild(j);c.children.length>0?c.insertBefore(g,c.children[0]):c.appendChild(g);if(c===document.body)d=a("html"),c=d.get(0),f=b(d),j.src=f,d.css("background-attachment")=="fixed"?(g.style.position="fixed",q=!1):g.style.position="absolute";else if(d.is("#page"))d.css("marginLeft").toLowerCase()=="auto"&&(p=!0),g.style.top=d.offset().top+
parseInt(d.css("borderTopWidth"))+"px",g.style.bottom=parseInt(d.parent().css("paddingBottom"))+parseInt(d.css("borderBottomWidth"))+"px",g.style.left=d.offset().left+parseInt(d.css("borderLeftWidth"))+"px",g.style.right=d.offset().left+parseInt(d.css("borderRightWidth"))+"px",g.style.zIndex=0;else if(d.css("position")=="static")c.style.position="relative";this.reloadImage=function(){var a=b(d),f=d.css("background-color");if(a!=j.src)j.src=a;c.style.backgroundImage="none";c.style.backgroundColor=
"transparent";g.style.backgroundColor=f;a=(d.css("background-position-x")+" "+d.css("background-position-y")).replace(/^\s+/,"").replace(/\s+$/,"").split(/\s+/);a.length==1&&a[0].indexOf("center")>=0&&a.push("center");if(d.data("hasBackgroundPositionScrollEffect")!=!0)for(var f=0,i=a.length;f<i;f++)switch(a[f]){case "center":case "50%":f==0?(j.style.right="",j.style.left="50%",j.style.marginLeft="-"+Math.ceil(j.offsetWidth/2)+"px"):(j.style.bottom="",j.style.top="50%",j.style.marginTop="-"+Math.ceil(j.offsetHeight/
2)+"px");break;case "left":j.style.right="";j.style.left="0px";j.style.marginLeft="0px";break;case "right":j.style.left="";j.style.right="0px";j.style.marginLeft="0px";break;case "top":j.style.bottom="";j.style.top="0px";j.style.marginTop="0px";break;case "bottom":j.style.top="";j.style.bottom="0px";j.style.marginTop="0px";break;default:f==0?(j.style.left=a[f],j.style.marginLeft="-"+Math.ceil(j.offsetWidth/2)+"px"):(j.style.top=a[f],j.style.marginTop="-"+Math.ceil(j.offsetHeight/2)+"px")}};this.resizeImage=
function(a){var b=c.getBoundingClientRect(),f=c.scrollWidth-(Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder?b.right-b.left-d.innerWidth():0),b=c.scrollHeight-(Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder?b.bottom-b.top-d.innerHeight():0),f=!q?c.clientWidth:Math.max(f,c.clientWidth),b=!q?c.clientHeight:Math.max(b,c.clientHeight);!o[j.src]&&j.clientWidth&&(o[j.src]={width:j.clientWidth,height:j.clientHeight});var i=f/(o[j.src]?o[j.src].width:1),l=b/(o[j.src]?o[j.src].height:1);g.style.height=
b+"px";g.style.marginBottom="-"+b+"px";g.style.width=f+"px";g.style.marginRight="-"+f+"px";i<l==a?(j.style.height=b+1+"px",j.style.width="auto"):(j.style.width=f+1+"px",j.style.height="auto")};this.update=function(){if(k){c.style.backgroundImage="";d.css("background-color","");var a=d.css("background-image").toLowerCase(),b=(c.currentStyle||window.getComputedStyle(c,null))["background-size"];b&&b.toLowerCase();if(a!="none"&&(b=="cover"||b=="contain")){if(l.reloadImage(),g.style.display="block",g.style.width=
"0px",g.style.height="0px",l.resizeImage(b=="cover"),p)g.style.left=d.offset().left+parseInt(d.css("borderLeftWidth"))+"px",g.style.right=d.offset().left+parseInt(d.css("borderRightWidth"))+"px"}else g.style.display="none"}};if(j.complete||f=="none")k=!0;else a(j).one("load",function(){k=!0;l.update()});this.update()},d=[];a(".museBGSize").each(function(){var b=new c(this);this!==document.body?d.push(b):(a(window).resize(function(){setTimeout(function(){b.update()},10)}),a(window).load(function(){setTimeout(function(){b.update()},
10)}))});var f=d.length;f>0&&setInterval(function(){for(var a=0;a<f;a++)d[a].update()},Math.max(120,16*f))}})(jQuery);
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var a=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"jquery.musepolyfill.bgsize.js");if(-1!=a){Muse.assets.required.splice(a,1);for(var a=document.getElementsByTagName("meta"),b=0,c=a.length;b<c;b++){var d=a[b];if("generator"==d.getAttribute("name")){"2014.0.0.264"!=d.getAttribute("content")&&Muse.assets.outOfDate.push("jquery.musepolyfill.bgsize.js");break}}}}})();
