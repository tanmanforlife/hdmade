
(function(e,t,n,r){"use strict";var i=n(e),s=n(t),o=n.fancybox=function(){o.open.apply(this,arguments)},u=null,a=t.createTouch!==r,f=function(e){return e&&e.hasOwnProperty&&e instanceof n},l=function(e){return e&&n.type(e)==="string"},c=function(e){return l(e)&&e.indexOf("%")>0},h=function(e){return e&&!(e.style.overflow&&e.style.overflow==="hidden")&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},p=function(e,t){var n=parseInt(e,10)||0;if(t&&c(e)){n=o.getViewport()[t]/100*n}return Math.ceil(n)},d=function(e,t){return p(e,t)+"px"};n.extend(o,{version:"2.1.3",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!a,fitToView:true,aspectRatio:false,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3e3,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},iframe:{scrolling:"auto",preload:true},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(n.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:true,title:true},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(!e){return}if(!n.isPlainObject(t)){t={}}if(false===o.close(true)){return}if(!n.isArray(e)){e=f(e)?n(e).get():[e]}n.each(e,function(i,s){var u={},a,c,h,p,d,v,m;if(n.type(s)==="object"){if(s.nodeType){s=n(s)}if(f(s)){u={href:s.data("fancybox-href")||s.attr("href"),title:s.data("fancybox-title")||s.attr("title"),isDom:true,element:s};if(n.metadata){n.extend(true,u,s.metadata())}}else{u=s}}a=t.href||u.href||(l(s)?s:null);c=t.title!==r?t.title:u.title||"";h=t.content||u.content;p=h?"html":t.type||u.type;if(!p&&u.isDom){p=s.data("fancybox-type");if(!p){d=s.prop("class").match(/fancybox\.(\w+)/);p=d?d[1]:null}}if(l(a)){if(!p){if(o.isImage(a)){p="image"}else if(o.isSWF(a)){p="swf"}else if(a.charAt(0)==="#"){p="inline"}else if(l(s)){p="html";h=s}}if(p==="ajax"){v=a.split(/\s+/,2);a=v.shift();m=v.shift()}}if(!h){if(p==="inline"){if(a){h=n(l(a)?a.replace(/.*(?=#[^\s]+$)/,""):a)}else if(u.isDom){h=s}}else if(p==="html"){h=a}else if(!p&&!a&&u.isDom){p="inline";h=s}}n.extend(u,{href:a,type:p,content:h,title:c,selector:m});e[i]=u});o.opts=n.extend(true,{},o.defaults,t);if(t.keys!==r){o.opts.keys=t.keys?n.extend({},o.defaults.keys,t.keys):false}o.group=e;return o._start(o.opts.index)},cancel:function(){var e=o.coming;if(!e||false===o.trigger("onCancel")){return}o.hideLoading();if(o.ajaxLoad){o.ajaxLoad.abort()}o.ajaxLoad=null;if(o.imgPreload){o.imgPreload.onload=o.imgPreload.onerror=null}if(e.wrap){e.wrap.stop(true,true).trigger("onReset").remove()}o.coming=null;if(!o.current){o._afterZoomOut(e)}},close:function(e){o.cancel();if(false===o.trigger("beforeClose")){return}o.unbindEvents();if(!o.isActive){return}if(!o.isOpen||e===true){n(".fancybox-wrap").stop(true).trigger("onReset").remove();o._afterZoomOut()}else{o.isOpen=o.isOpened=false;o.isClosing=true;n(".fancybox-item, .fancybox-nav").remove();o.wrap.stop(true,true).removeClass("fancybox-opened");o.transitions[o.current.closeMethod]()}},play:function(e){var t=function(){clearTimeout(o.player.timer)},r=function(){t();if(o.current&&o.player.isActive){o.player.timer=setTimeout(o.next,o.current.playSpeed)}},i=function(){t();n("body").unbind(".player");o.player.isActive=false;o.trigger("onPlayEnd")},s=function(){if(o.current&&(o.current.loop||o.current.index<o.group.length-1)){o.player.isActive=true;n("body").bind({"afterShow.player onUpdate.player":r,"onCancel.player beforeClose.player":i,"beforeLoad.player":t});r();o.trigger("onPlayStart")}};if(e===true||!o.player.isActive&&e!==false){s()}else{i()}},next:function(e){var t=o.current;if(t){if(!l(e)){e=t.direction.next}o.jumpto(t.index+1,e,"next")}},prev:function(e){var t=o.current;if(t){if(!l(e)){e=t.direction.prev}o.jumpto(t.index-1,e,"prev")}},jumpto:function(e,t,n){var i=o.current;if(!i){return}e=p(e);o.direction=t||i.direction[e>=i.index?"next":"prev"];o.router=n||"jumpto";if(i.loop){if(e<0){e=i.group.length+e%i.group.length}e=e%i.group.length}if(i.group[e]!==r){o.cancel();o._start(e)}},reposition:function(e,t){var r=o.current,i=r?r.wrap:null,s;if(i){s=o._getPosition(t);if(e&&e.type==="scroll"){delete s.position;i.stop(true,true).animate(s,200)}else{i.css(s);r.pos=n.extend({},r.dim,s)}}},update:function(e){var t=e&&e.type,n=!t||t==="orientationchange";if(n){clearTimeout(u);u=null}if(!o.isOpen||u){return}u=setTimeout(function(){var r=o.current;if(!r||o.isClosing){return}o.wrap.removeClass("fancybox-tmp");if(n||t==="load"||t==="resize"&&r.autoResize){o._setDimension()}if(!(t==="scroll"&&r.canShrink)){o.reposition(e)}o.trigger("onUpdate");u=null},n&&!a?0:300)},toggle:function(e){if(o.isOpen){o.current.fitToView=n.type(e)==="boolean"?e:!o.current.fitToView;if(a){o.wrap.removeAttr("style").addClass("fancybox-tmp");o.trigger("onUpdate")}o.update()}},hideLoading:function(){s.unbind(".loading");n("#fancybox-loading").remove()},showLoading:function(){var e,t;o.hideLoading();e=n('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body");s.bind("keydown.loading",function(e){if((e.which||e.keyCode)===27){e.preventDefault();o.cancel()}});if(!o.defaults.fixed){t=o.getViewport();e.css({position:"absolute",top:t.h*.5+t.y,left:t.w*.5+t.x})}},getViewport:function(){var t=o.current&&o.current.locked||false,n={x:i.scrollLeft(),y:i.scrollTop()};if(t){n.w=t[0].clientWidth;n.h=t[0].clientHeight}else{n.w=a&&e.innerWidth?e.innerWidth:i.width();n.h=a&&e.innerHeight?e.innerHeight:i.height()}return n},unbindEvents:function(){if(o.wrap&&f(o.wrap)){o.wrap.unbind(".fb")}s.unbind(".fb");i.unbind(".fb")},bindEvents:function(){var e=o.current,t;if(!e){return}i.bind("orientationchange.fb"+(a?"":" resize.fb")+(e.autoCenter&&!e.locked?" scroll.fb":""),o.update);t=e.keys;if(t){s.bind("keydown.fb",function(i){var s=i.which||i.keyCode,u=i.target||i.srcElement;if(s===27&&o.coming){return false}if(!i.ctrlKey&&!i.altKey&&!i.shiftKey&&!i.metaKey&&!(u&&(u.type||n(u).is("[contenteditable]")))){n.each(t,function(t,u){if(e.group.length>1&&u[s]!==r){o[t](u[s]);i.preventDefault();return false}if(n.inArray(s,u)>-1){o[t]();i.preventDefault();return false}})}})}if(n.fn.mousewheel&&e.mouseWheel){o.wrap.bind("mousewheel.fb",function(t,r,i,s){var u=t.target||null,a=n(u),f=false;while(a.length){if(f||a.is(".fancybox-skin")||a.is(".fancybox-wrap")){break}f=h(a[0]);a=n(a).parent()}if(r!==0&&!f){if(o.group.length>1&&!e.canShrink){if(s>0||i>0){o.prev(s>0?"down":"left")}else if(s<0||i<0){o.next(s<0?"up":"right")}t.preventDefault()}}})}},trigger:function(e,t){var r,i=t||o.coming||o.current;if(!i){return}if(n.isFunction(i[e])){r=i[e].apply(i,Array.prototype.slice.call(arguments,1))}if(r===false){return false}if(i.helpers){n.each(i.helpers,function(t,r){if(r&&o.helpers[t]&&n.isFunction(o.helpers[t][e])){r=n.extend(true,{},o.helpers[t].defaults,r);o.helpers[t][e](r,i)}})}n.event.trigger(e+".fb")},isImage:function(e){return l(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(e){return l(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t={},r,i,s,u,f;e=p(e);r=o.group[e]||null;if(!r){return false}t=n.extend(true,{},o.opts,r);u=t.margin;f=t.padding;if(n.type(u)==="number"){t.margin=[u,u,u,u]}if(n.type(f)==="number"){t.padding=[f,f,f,f]}if(t.modal){n.extend(true,t,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})}if(t.autoSize){t.autoWidth=t.autoHeight=true}if(t.width==="auto"){t.autoWidth=true}if(t.height==="auto"){t.autoHeight=true}t.group=o.group;t.index=e;o.coming=t;if(false===o.trigger("beforeLoad")){o.coming=null;return}s=t.type;i=t.href;if(!s){o.coming=null;if(o.current&&o.router&&o.router!=="jumpto"){o.current.index=e;return o[o.router](o.direction)}return false}o.isActive=true;if(s==="image"||s==="swf"){t.autoHeight=t.autoWidth=false;t.scrolling="visible"}if(s==="image"){t.aspectRatio=true}if(s==="iframe"&&a){t.scrolling="scroll"}t.wrap=n(t.tpl.wrap).addClass("fancybox-"+(a?"mobile":"desktop")+" fancybox-type-"+s+" fancybox-tmp "+t.wrapCSS).appendTo(t.parent||"body");n.extend(t,{skin:n(".fancybox-skin",t.wrap),outer:n(".fancybox-outer",t.wrap),inner:n(".fancybox-inner",t.wrap)});n.each(["Top","Right","Bottom","Left"],function(e,n){t.skin.css("padding"+n,d(t.padding[e]))});o.trigger("onReady");if(s==="inline"||s==="html"){if(!t.content||!t.content.length){return o._error("content")}}else if(!i){return o._error("href")}if(s==="image"){o._loadImage()}else if(s==="ajax"){o._loadAjax()}else if(s==="iframe"){o._loadIframe()}else{o._afterLoad()}},_error:function(e){n.extend(o.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:o.coming.tpl.error});o._afterLoad()},_loadImage:function(){var e=o.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null;o.coming.width=this.width;o.coming.height=this.height;o._afterLoad()};e.onerror=function(){this.onload=this.onerror=null;o._error("image")};e.src=o.coming.href;if(e.complete!==true){o.showLoading()}},_loadAjax:function(){var e=o.coming;o.showLoading();o.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){if(o.coming&&t!=="abort"){o._error("ajax",e)}else{o.hideLoading()}},success:function(t,n){if(n==="success"){e.content=t;o._afterLoad()}}}))},_loadIframe:function(){var e=o.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",a?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}});if(e.iframe.preload){o.showLoading();t.one("load",function(){n(this).data("ready",1);if(!a){n(this).bind("load.fb",o.update)}n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();o._afterLoad()})}e.content=t.appendTo(e.inner);if(!e.iframe.preload){o._afterLoad()}},_preloadImages:function(){var e=o.group,t=o.current,n=e.length,r=t.preload?Math.min(t.preload,n-1):0,i,s;for(s=1;s<=r;s+=1){i=e[(t.index+s)%n];if(i.type==="image"&&i.href){(new Image).src=i.href}}},_afterLoad:function(){var e=o.coming,t=o.current,r="fancybox-placeholder",i,s,u,a,l,c;o.hideLoading();if(!e||o.isActive===false){return}if(false===o.trigger("afterLoad",e,t)){e.wrap.stop(true).trigger("onReset").remove();o.coming=null;return}if(t){o.trigger("beforeChange",t);t.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()}o.unbindEvents();i=e;s=e.content;u=e.type;a=e.scrolling;n.extend(o,{wrap:i.wrap,skin:i.skin,outer:i.outer,inner:i.inner,current:i,previous:t});l=i.href;switch(u){case"inline":case"ajax":case"html":if(i.selector){s=n("<div>").html(s).find(i.selector)}else if(f(s)){if(!s.data(r)){s.data(r,n('<div class="'+r+'"></div>').insertAfter(s).hide())}s=s.show().detach();i.wrap.bind("onReset",function(){if(n(this).find(s).length){s.hide().replaceAll(s.data(r)).data(r,false)}})}break;case"image":s=i.tpl.image.replace("{href}",l);break;case"swf":s='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+l+'"></param>';c="";n.each(i.swf,function(e,t){s+='<param name="'+e+'" value="'+t+'"></param>';c+=" "+e+'="'+t+'"'});s+='<embed src="'+l+'" type="application/x-shockwave-flash" width="100%" height="100%"'+c+"></embed></object>";break}if(!(f(s)&&s.parent().is(i.inner))){i.inner.append(s)}o.trigger("beforeShow");i.inner.css("overflow",a==="yes"?"scroll":a==="no"?"hidden":a);o._setDimension();o.reposition();o.isOpen=false;o.coming=null;o.bindEvents();if(!o.isOpened){n(".fancybox-wrap").not(i.wrap).stop(true).trigger("onReset").remove()}else if(t.prevMethod){o.transitions[t.prevMethod]()}o.transitions[o.isOpened?i.nextMethod:i.openMethod]();o._preloadImages()},_setDimension:function(){var e=o.getViewport(),t=0,r=false,i=false,s=o.wrap,u=o.skin,a=o.inner,f=o.current,l=f.width,h=f.height,v=f.minWidth,m=f.minHeight,g=f.maxWidth,y=f.maxHeight,b=f.scrolling,w=f.scrollOutside?f.scrollbarWidth:0,E=f.margin,S=p(E[1]+E[3]),x=p(E[0]+E[2]),T,N,C,k,L,A,O,M,_,D,P,H,B,j,F;s.add(u).add(a).width("auto").height("auto").removeClass("fancybox-tmp");T=p(u.outerWidth(true)-u.width());N=p(u.outerHeight(true)-u.height());C=S+T;k=x+N;L=c(l)?(e.w-C)*p(l)/100:l;A=c(h)?(e.h-k)*p(h)/100:h;if(f.type==="iframe"){j=f.content;if(f.autoHeight&&j.data("ready")===1){try{if(j[0].contentWindow.document.location){a.width(L).height(9999);F=j.contents().find("body");if(w){F.css("overflow-x","hidden")}A=F.height()}}catch(I){}}}else if(f.autoWidth||f.autoHeight){a.addClass("fancybox-tmp");if(!f.autoWidth){a.width(L)}if(!f.autoHeight){a.height(A)}if(f.autoWidth){L=a.width()}if(f.autoHeight){A=a.height()}a.removeClass("fancybox-tmp")}l=p(L);h=p(A);_=L/A;v=p(c(v)?p(v,"w")-C:v);g=p(c(g)?p(g,"w")-C:g);m=p(c(m)?p(m,"h")-k:m);y=p(c(y)?p(y,"h")-k:y);O=g;M=y;if(f.fitToView){g=Math.min(e.w-C,g);y=Math.min(e.h-k,y)}H=e.w-S;B=e.h-x;if(f.aspectRatio){if(l>g){l=g;h=p(l/_)}if(h>y){h=y;l=p(h*_)}if(l<v){l=v;h=p(l/_)}if(h<m){h=m;l=p(h*_)}}else{l=Math.max(v,Math.min(l,g));if(f.autoHeight&&f.type!=="iframe"){a.width(l);h=a.height()}h=Math.max(m,Math.min(h,y))}if(f.fitToView){a.width(l).height(h);s.width(l+T);D=s.width();P=s.height();if(f.aspectRatio){while((D>H||P>B)&&l>v&&h>m){if(t++>19){break}h=Math.max(m,Math.min(y,h-10));l=p(h*_);if(l<v){l=v;h=p(l/_)}if(l>g){l=g;h=p(l/_)}a.width(l).height(h);s.width(l+T);D=s.width();P=s.height()}}else{l=Math.max(v,Math.min(l,l-(D-H)));h=Math.max(m,Math.min(h,h-(P-B)))}}if(w&&b==="auto"&&h<A&&l+T+w<H){l+=w}a.width(l).height(h);s.width(l+T);D=s.width();P=s.height();r=(D>H||P>B)&&l>v&&h>m;i=f.aspectRatio?l<O&&h<M&&l<L&&h<A:(l<O||h<M)&&(l<L||h<A);n.extend(f,{dim:{width:d(D),height:d(P)},origWidth:L,origHeight:A,canShrink:r,canExpand:i,wPadding:T,hPadding:N,wrapSpace:P-u.outerHeight(true),skinSpace:u.height()-h});if(!j&&f.autoHeight&&h>m&&h<y&&!i){a.height("auto")}},_getPosition:function(e){var t=o.current,n=o.getViewport(),r=t.margin,i=o.wrap.width()+r[1]+r[3],s=o.wrap.height()+r[0]+r[2],u={position:"absolute",top:r[0],left:r[3]};if(t.autoCenter&&t.fixed&&!e&&s<=n.h&&i<=n.w){u.position="fixed"}else if(!t.locked){u.top+=n.y;u.left+=n.x}u.top=d(Math.max(u.top,u.top+(n.h-s)*t.topRatio));u.left=d(Math.max(u.left,u.left+(n.w-i)*t.leftRatio));return u},_afterZoomIn:function(){var e=o.current;if(!e){return}o.isOpen=o.isOpened=true;o.wrap.css("overflow","visible").addClass("fancybox-opened");o.update();if(e.closeClick||e.nextClick&&o.group.length>1){o.inner.css("cursor","pointer").bind("click.fb",function(t){if(!n(t.target).is("a")&&!n(t.target).parent().is("a")){t.preventDefault();o[e.closeClick?"close":"next"]()}})}if(e.closeBtn){n(e.tpl.closeBtn).appendTo(o.skin).bind(a?"touchstart.fb":"click.fb",function(e){e.preventDefault();o.close()})}if(e.arrows&&o.group.length>1){if(e.loop||e.index>0){n(e.tpl.prev).appendTo(o.outer).bind("click.fb",o.prev)}if(e.loop||e.index<o.group.length-1){n(e.tpl.next).appendTo(o.outer).bind("click.fb",o.next)}}o.trigger("afterShow");if(!e.loop&&e.index===e.group.length-1){o.play(false)}else if(o.opts.autoPlay&&!o.player.isActive){o.opts.autoPlay=false;o.play()}},_afterZoomOut:function(e){e=e||o.current;n(".fancybox-wrap").trigger("onReset").remove();n.extend(o,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});o.trigger("afterClose",e)}});o.transitions={getOrigPosition:function(){var e=o.current,t=e.element,n=e.orig,r={},i=50,s=50,u=e.hPadding,a=e.wPadding,l=o.getViewport();if(!n&&e.isDom&&t.is(":visible")){n=t.find("img:first");if(!n.length){n=t}}if(f(n)){r=n.offset();if(n.is("img")){i=n.outerWidth();s=n.outerHeight()}}else{r.top=l.y+(l.h-s)*e.topRatio;r.left=l.x+(l.w-i)*e.leftRatio}if(o.wrap.css("position")==="fixed"||e.locked){r.top-=l.y;r.left-=l.x}r={top:d(r.top-u*e.topRatio),left:d(r.left-a*e.leftRatio),width:d(i+a),height:d(s+u)};return r},step:function(e,t){var n,r,i,s=t.prop,u=o.current,a=u.wrapSpace,f=u.skinSpace;if(s==="width"||s==="height"){n=t.end===t.start?1:(e-t.start)/(t.end-t.start);if(o.isClosing){n=1-n}r=s==="width"?u.wPadding:u.hPadding;i=e-r;o.skin[s](p(s==="width"?i:i-a*n));o.inner[s](p(s==="width"?i:i-a*n-f*n))}},zoomIn:function(){var e=o.current,t=e.pos,r=e.openEffect,i=r==="elastic",s=n.extend({opacity:1},t);delete s.position;if(i){t=this.getOrigPosition();if(e.openOpacity){t.opacity=.1}}else if(r==="fade"){t.opacity=.1}o.wrap.css(t).animate(s,{duration:r==="none"?0:e.openSpeed,easing:e.openEasing,step:i?this.step:null,complete:o._afterZoomIn})},zoomOut:function(){var e=o.current,t=e.closeEffect,n=t==="elastic",r={opacity:.1};if(n){r=this.getOrigPosition();if(e.closeOpacity){r.opacity=.1}}o.wrap.animate(r,{duration:t==="none"?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:o._afterZoomOut})},changeIn:function(){var e=o.current,t=e.nextEffect,n=e.pos,r={opacity:1},i=o.direction,s=200,u;n.opacity=.1;if(t==="elastic"){u=i==="down"||i==="up"?"top":"left";if(i==="down"||i==="right"){n[u]=d(p(n[u])-s);r[u]="+="+s+"px"}else{n[u]=d(p(n[u])+s);r[u]="-="+s+"px"}}if(t==="none"){o._afterZoomIn()}else{o.wrap.css(n).animate(r,{duration:e.nextSpeed,easing:e.nextEasing,complete:function(){setTimeout(o._afterZoomIn,20)}})}},changeOut:function(){var e=o.previous,t=e.prevEffect,r={opacity:.1},i=o.direction,s=200;if(t==="elastic"){r[i==="down"||i==="up"?"top":"left"]=(i==="up"||i==="left"?"-":"+")+"="+s+"px"}e.wrap.animate(r,{duration:t==="none"?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}};o.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!a,fixed:true},overlay:null,fixed:false,create:function(e){e=n.extend({},this.defaults,e);if(this.overlay){this.close()}this.overlay=n('<div class="fancybox-overlay"></div>').appendTo("body");this.fixed=false;if(e.fixed&&o.defaults.fixed){this.overlay.addClass("fancybox-overlay-fixed");this.fixed=true}},open:function(e){var t=this;e=n.extend({},this.defaults,e);if(this.overlay){this.overlay.unbind(".overlay").width("auto").height("auto")}else{this.create(e)}if(!this.fixed){i.bind("resize.overlay",n.proxy(this.update,this));this.update()}if(e.closeClick){this.overlay.bind("click.overlay",function(e){if(n(e.target).hasClass("fancybox-overlay")){if(o.isActive){o.close()}else{t.close()}}})}this.overlay.css(e.css).show()},close:function(){n(".fancybox-overlay").remove();i.unbind("resize.overlay");this.overlay=null;if(this.margin!==false){n("body").css("margin-right",this.margin);this.margin=false}if(this.el){this.el.removeClass("fancybox-lock")}},update:function(){var e="100%",r;this.overlay.width(e).height("100%");if(n.browser.msie){r=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth);if(s.width()>r){e=s.width()}}else if(s.width()>i.width()){e=s.width()}this.overlay.width(e).height(s.height())},onReady:function(e,r){n(".fancybox-overlay").stop(true,true);if(!this.overlay){this.margin=s.height()>i.height()||n("body").css("overflow-y")==="scroll"?n("body").css("margin-right"):false;this.el=t.all&&!t.querySelector?n("html"):n("body");this.create(e)}if(e.locked&&this.fixed){r.locked=this.overlay.append(r.wrap);r.fixed=false}if(e.showEarly===true){this.beforeShow.apply(this,arguments)}},beforeShow:function(e,t){if(t.locked){this.el.addClass("fancybox-lock");if(this.margin!==false){n("body").css("margin-right",p(this.margin)+t.scrollbarWidth)}}this.open(e)},onUpdate:function(){if(!this.fixed){this.update()}},afterClose:function(e){if(this.overlay&&!o.isActive){this.overlay.fadeOut(e.speedOut,n.proxy(this.close,this))}}};o.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=o.current,r=t.title,i=e.type,s,u;if(n.isFunction(r)){r=r.call(t.element,t)}if(!l(r)||n.trim(r)===""){return}s=n('<div class="fancybox-title fancybox-title-'+i+'-wrap">'+r+"</div>");switch(i){case"inside":u=o.skin;break;case"outside":u=o.wrap;break;case"over":u=o.inner;break;default:u=o.skin;s.appendTo("body");if(n.browser.msie){s.width(s.width())}s.wrapInner('<span class="child"></span>');o.current.margin[2]+=Math.abs(p(s.css("margin-bottom")));break}s[e.position==="top"?"prependTo":"appendTo"](u)}};n.fn.fancybox=function(e){var t,r=n(this),i=this.selector||"",u=function(s){var u=n(this).blur(),a=t,f,l;if(!(s.ctrlKey||s.altKey||s.shiftKey||s.metaKey)&&!u.is(".fancybox-wrap")){f=e.groupAttr||"data-fancybox-group";l=u.attr(f);if(!l){f="rel";l=u.get(0)[f]}if(l&&l!==""&&l!=="nofollow"){u=i.length?n(i):r;u=u.filter("["+f+'="'+l+'"]');a=u.index(this)}e.index=a;if(o.open(u,e)!==false){s.preventDefault()}}};e=e||{};t=e.index||0;if(!i||e.live===false){r.unbind("click.fb-start").bind("click.fb-start",u)}else{s.undelegate(i,"click.fb-start").delegate(i+":not('.fancybox-item, .fancybox-nav')","click.fb-start",u)}this.filter("[data-fancybox-start=1]").trigger("click");return this};s.ready(function(){if(n.scrollbarWidth===r){n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),r=t.innerWidth()-t.height(99).innerWidth();e.remove();return r}}if(n.support.fixedPosition===r){n.support.fixedPosition=function(){var e=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=e[0].offsetTop===20||e[0].offsetTop===15;e.remove();return t}()}n.extend(o.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")})})})(window,document,jQuery);(function(e){"use strict";var t,n,r;e.extend({roundaboutShapes:{def:"lazySusan",lazySusan:function(e,t,n){return{x:Math.sin(e+t),y:Math.sin(e+3*Math.PI/2+t)/8*n,z:(Math.cos(e+t)+1)/2,scale:Math.sin(e+Math.PI/2+t)/2+.5}}}});t={bearing:0,tilt:0,minZ:100,maxZ:280,minOpacity:.4,maxOpacity:1,minScale:.4,maxScale:1,duration:600,btnNext:null,btnNextCallback:function(){},btnPrev:null,btnPrevCallback:function(){},btnToggleAutoplay:null,btnStartAutoplay:null,btnStopAutoplay:null,easing:"swing",clickToFocus:true,clickToFocusCallback:function(){},focusBearing:0,shape:"lazySusan",debug:false,childSelector:"li",startingChild:null,reflect:false,floatComparisonThreshold:.001,autoplay:false,autoplayDuration:1e3,autoplayPauseOnHover:false,autoplayCallback:function(){},autoplayInitialDelay:0,enableDrag:false,dropDuration:600,dropEasing:"swing",dropAnimateTo:"nearest",dropCallback:function(){},dragAxis:"x",dragFactor:4,triggerFocusEvents:true,triggerBlurEvents:true,responsive:false};n={autoplayInterval:null,autoplayIsRunning:false,autoplayStartTimeout:null,animating:false,childInFocus:-1,touchMoveStartPosition:null,stopAnimation:false,lastAnimationStep:false};r={init:function(i,s,o){var u,f=(new Date).getTime();i=typeof i==="object"?i:{};s=e.isFunction(s)?s:function(){};s=e.isFunction(i)?i:s;u=e.extend({},t,i,n);return this.each(function(){var t=e(this),n=t.children(u.childSelector).length,i=360/n,f=u.startingChild&&u.startingChild>n-1?n-1:u.startingChild,l=u.startingChild===null?u.bearing:360-f*i,c=t.css("position")!=="static"?t.css("position"):"relative";t.css({padding:0,position:c}).addClass("roundabout-holder").data("roundabout",e.extend({},u,{startingChild:f,bearing:l,oppositeOfFocusBearing:r.normalize.apply(null,[u.focusBearing-180]),dragBearing:l,period:i}));if(o){t.unbind(".roundabout").children(u.childSelector).unbind(".roundabout")}else{if(u.responsive){e(window).bind("resize",function(){r.stopAutoplay.apply(t);r.relayoutChildren.apply(t)})}}if(u.clickToFocus){t.children(u.childSelector).each(function(n){e(this).bind("click.roundabout",function(){var i=r.getPlacement.apply(t,[n]);if(!r.isInFocus.apply(t,[i])){r.stopAnimation.apply(e(this));if(!t.data("roundabout").animating){r.animateBearingToFocus.apply(t,[i,t.data("roundabout").clickToFocusCallback])}return false}})})}if(u.btnNext){e(u.btnNext).bind("click.roundabout",function(){if(!t.data("roundabout").animating){r.animateToNextChild.apply(t,[t.data("roundabout").btnNextCallback])}return false})}if(u.btnPrev){e(u.btnPrev).bind("click.roundabout",function(){r.animateToPreviousChild.apply(t,[t.data("roundabout").btnPrevCallback]);return false})}if(u.btnToggleAutoplay){e(u.btnToggleAutoplay).bind("click.roundabout",function(){r.toggleAutoplay.apply(t);return false})}if(u.btnStartAutoplay){e(u.btnStartAutoplay).bind("click.roundabout",function(){r.startAutoplay.apply(t);return false})}if(u.btnStopAutoplay){e(u.btnStopAutoplay).bind("click.roundabout",function(){r.stopAutoplay.apply(t);return false})}if(u.autoplayPauseOnHover){t.bind("mouseenter.roundabout.autoplay",function(){r.stopAutoplay.apply(t,[true])}).bind("mouseleave.roundabout.autoplay",function(){r.startAutoplay.apply(t)})}if(u.enableDrag){if(!e.isFunction(t.drag)){if(u.debug){alert("You do not have the drag plugin loaded.")}}else if(!e.isFunction(t.drop)){if(u.debug){alert("You do not have the drop plugin loaded.")}}else{t.drag(function(e,n){var i=t.data("roundabout"),s=i.dragAxis.toLowerCase()==="x"?"deltaX":"deltaY";r.stopAnimation.apply(t);r.setBearing.apply(t,[i.dragBearing+n[s]/i.dragFactor])}).drop(function(e){var n=t.data("roundabout"),i=r.getAnimateToMethod(n.dropAnimateTo);r.allowAnimation.apply(t);r[i].apply(t,[n.dropDuration,n.dropEasing,n.dropCallback]);n.dragBearing=n.period*r.getNearestChild.apply(t)})}t.each(function(){var t=e(this).get(0),n=e(this).data("roundabout"),i=n.dragAxis.toLowerCase()==="x"?"pageX":"pageY",s=r.getAnimateToMethod(n.dropAnimateTo);if(t.addEventListener){t.addEventListener("touchstart",function(e){n.touchMoveStartPosition=e.touches[0][i]},false);t.addEventListener("touchmove",function(t){var s=(t.touches[0][i]-n.touchMoveStartPosition)/n.dragFactor;t.preventDefault();r.stopAnimation.apply(e(this));r.setBearing.apply(e(this),[n.dragBearing+s])},false);t.addEventListener("touchend",function(t){t.preventDefault();r.allowAnimation.apply(e(this));s=r.getAnimateToMethod(n.dropAnimateTo);r[s].apply(e(this),[n.dropDuration,n.dropEasing,n.dropCallback]);n.dragBearing=n.period*r.getNearestChild.apply(e(this))},false)}})}r.initChildren.apply(t,[s,o])})},initChildren:function(t,n){var i=e(this),s=i.data("roundabout");t=t||function(){};i.children(s.childSelector).each(function(t){var s,o,u,f=r.getPlacement.apply(i,[t]);if(n&&e(this).data("roundabout")){s=e(this).data("roundabout").startWidth;o=e(this).data("roundabout").startHeight;u=e(this).data("roundabout").startFontSize}e(this).addClass("roundabout-moveable-item").css("position","absolute");e(this).data("roundabout",{startWidth:s||e(this).width(),startHeight:o||e(this).height(),startFontSize:u||parseInt(e(this).css("font-size"),10),degrees:f,backDegrees:r.normalize.apply(null,[f-180]),childNumber:t,currentScale:1,parent:i})});r.updateChildren.apply(i);if(s.autoplay){s.autoplayStartTimeout=setTimeout(function(){r.startAutoplay.apply(i)},s.autoplayInitialDelay)}i.trigger("ready");t.apply(i);return i},updateChildren:function(){return this.each(function(){var t=e(this),n=t.data("roundabout"),i=-1,s={bearing:n.bearing,tilt:n.tilt,stage:{width:Math.floor(e(this).width()*.9),height:Math.floor(e(this).height()*.9)},animating:n.animating,inFocus:n.childInFocus,focusBearingRadian:r.degToRad.apply(null,[n.focusBearing]),shape:e.roundaboutShapes[n.shape]||e.roundaboutShapes[e.roundaboutShapes.def]};s.midStage={width:s.stage.width/2,height:s.stage.height/2};s.nudge={width:s.midStage.width+s.stage.width*.05,height:s.midStage.height+s.stage.height*.05};s.zValues={min:n.minZ,max:n.maxZ,diff:n.maxZ-n.minZ};s.opacity={min:n.minOpacity,max:n.maxOpacity,diff:n.maxOpacity-n.minOpacity};s.scale={min:n.minScale,max:n.maxScale,diff:n.maxScale-n.minScale};t.children(n.childSelector).each(function(o){if(r.updateChild.apply(t,[e(this),s,o,function(){e(this).trigger("ready")}])&&(!s.animating||n.lastAnimationStep)){i=o;e(this).addClass("roundabout-in-focus")}else{e(this).removeClass("roundabout-in-focus")}});if(i!==s.inFocus){if(n.triggerBlurEvents){t.children(n.childSelector).eq(s.inFocus).trigger("blur")}n.childInFocus=i;if(n.triggerFocusEvents&&i!==-1){t.children(n.childSelector).eq(i).trigger("focus")}}t.trigger("childrenUpdated")})},updateChild:function(t,n,i,s){var o,u=this,f=e(t),l=f.data("roundabout"),c=[],h=r.degToRad.apply(null,[360-l.degrees+n.bearing]);s=s||function(){};h=r.normalizeRad.apply(null,[h]);o=n.shape(h,n.focusBearingRadian,n.tilt);o.scale=o.scale>1?1:o.scale;o.adjustedScale=(n.scale.min+n.scale.diff*o.scale).toFixed(4);o.width=(o.adjustedScale*l.startWidth).toFixed(4);o.height=(o.adjustedScale*l.startHeight).toFixed(4);f.css({left:(o.x*n.midStage.width+n.nudge.width-o.width/2).toFixed(0)+"px",top:(o.y*n.midStage.height+n.nudge.height-o.height/2).toFixed(0)+"px",width:o.width+"px",height:o.height+"px",opacity:(n.opacity.min+n.opacity.diff*o.scale).toFixed(2),zIndex:Math.round(n.zValues.min+n.zValues.diff*o.z),fontSize:(o.adjustedScale*l.startFontSize).toFixed(1)+"px"});l.currentScale=o.adjustedScale;if(u.data("roundabout").debug){c.push('<div style="font-weight: normal; font-size: 10px; padding: 2px; width: '+f.css("width")+'; background-color: #ffc;">');c.push('<strong style="font-size: 12px; white-space: nowrap;">Child '+i+"</strong><br />");c.push("<strong>left:</strong> "+f.css("left")+"<br />");c.push("<strong>top:</strong> "+f.css("top")+"<br />");c.push("<strong>width:</strong> "+f.css("width")+"<br />");c.push("<strong>opacity:</strong> "+f.css("opacity")+"<br />");c.push("<strong>height:</strong> "+f.css("height")+"<br />");c.push("<strong>z-index:</strong> "+f.css("z-index")+"<br />");c.push("<strong>font-size:</strong> "+f.css("font-size")+"<br />");c.push("<strong>scale:</strong> "+f.data("roundabout").currentScale);c.push("</div>");f.html(c.join(""))}f.trigger("reposition");s.apply(u);return r.isInFocus.apply(u,[l.degrees])},setBearing:function(t,n){n=n||function(){};t=r.normalize.apply(null,[t]);this.each(function(){var n,i,s,o=e(this),u=o.data("roundabout"),f=u.bearing;u.bearing=t;o.trigger("bearingSet");r.updateChildren.apply(o);n=Math.abs(f-t);if(!u.animating||n>180){return}n=Math.abs(f-t);o.children(u.childSelector).each(function(n){var i;if(r.isChildBackDegreesBetween.apply(e(this),[t,f])){i=f>t?"Clockwise":"Counterclockwise";e(this).trigger("move"+i+"ThroughBack")}})});n.apply(this);return this},adjustBearing:function(t,n){n=n||function(){};if(t===0){return this}this.each(function(){r.setBearing.apply(e(this),[e(this).data("roundabout").bearing+t])});n.apply(this);return this},setTilt:function(t,n){n=n||function(){};this.each(function(){e(this).data("roundabout").tilt=t;r.updateChildren.apply(e(this))});n.apply(this);return this},adjustTilt:function(t,n){n=n||function(){};this.each(function(){r.setTilt.apply(e(this),[e(this).data("roundabout").tilt+t])});n.apply(this);return this},animateToBearing:function(t,n,i,s,o){var u=(new Date).getTime();o=o||function(){};if(e.isFunction(s)){o=s;s=null}else if(e.isFunction(i)){o=i;i=null}else if(e.isFunction(n)){o=n;n=null}this.each(function(){var l,p,v,m=e(this),y=m.data("roundabout"),w=!n?y.duration:n,E=i?i:y.easing||"swing";if(!s){s={timerStart:u,start:y.bearing,totalTime:w}}l=u-s.timerStart;if(y.stopAnimation){r.allowAnimation.apply(m);y.animating=false;return}if(l<w){if(!y.animating){m.trigger("animationStart")}y.animating=true;if(typeof e.easing.def==="string"){p=e.easing[E]||e.easing[e.easing.def];v=p(null,l,s.start,t-s.start,s.totalTime)}else{v=e.easing[E](l/s.totalTime,l,s.start,t-s.start,s.totalTime)}if(r.compareVersions.apply(null,[e().jquery,"1.7.2"])>=0&&!e.easing["easeOutBack"]){v=s.start+(t-s.start)*v}v=r.normalize.apply(null,[v]);y.dragBearing=v;r.setBearing.apply(m,[v,function(){setTimeout(function(){r.animateToBearing.apply(m,[t,w,E,s,o])},0)}])}else{y.lastAnimationStep=true;t=r.normalize.apply(null,[t]);r.setBearing.apply(m,[t,function(){m.trigger("animationEnd")}]);y.animating=false;y.lastAnimationStep=false;y.dragBearing=t;o.apply(m)}});return this},animateToNearbyChild:function(t,n){var i=t[0],s=t[1],o=t[2]||function(){};if(e.isFunction(s)){o=s;s=null}else if(e.isFunction(i)){o=i;i=null}return this.each(function(){var t,u,l=e(this),h=l.data("roundabout"),p=!h.reflect?h.bearing%360:h.bearing,v=l.children(h.childSelector).length;if(!h.animating){if(h.reflect&&n==="previous"||!h.reflect&&n==="next"){p=Math.abs(p)<h.floatComparisonThreshold?360:p;for(t=0;t<v;t+=1){u={lower:h.period*t,upper:h.period*(t+1)};u.upper=t===v-1?360:u.upper;if(p<=Math.ceil(u.upper)&&p>=Math.floor(u.lower)){if(v===2&&p===360){r.animateToDelta.apply(l,[-180,i,s,o])}else{r.animateBearingToFocus.apply(l,[u.lower,i,s,o])}break}}}else{p=Math.abs(p)<h.floatComparisonThreshold||360-Math.abs(p)<h.floatComparisonThreshold?0:p;for(t=v-1;t>=0;t-=1){u={lower:h.period*t,upper:h.period*(t+1)};u.upper=t===v-1?360:u.upper;if(p>=Math.floor(u.lower)&&p<Math.ceil(u.upper)){if(v===2&&p===360){r.animateToDelta.apply(l,[180,i,s,o])}else{r.animateBearingToFocus.apply(l,[u.upper,i,s,o])}break}}}}})},animateToNearestChild:function(t,n,i){i=i||function(){};if(e.isFunction(n)){i=n;n=null}else if(e.isFunction(t)){i=t;t=null}return this.each(function(){var s=r.getNearestChild.apply(e(this));r.animateToChild.apply(e(this),[s,t,n,i])})},animateToChild:function(t,n,i,s){s=s||function(){};if(e.isFunction(i)){s=i;i=null}else if(e.isFunction(n)){s=n;n=null}return this.each(function(){var o,u=e(this),l=u.data("roundabout");if(l.childInFocus!==t&&!l.animating){o=u.children(l.childSelector).eq(t);r.animateBearingToFocus.apply(u,[o.data("roundabout").degrees,n,i,s])}})},animateToNextChild:function(e,t,n){return r.animateToNearbyChild.apply(this,[arguments,"next"])},animateToPreviousChild:function(e,t,n){return r.animateToNearbyChild.apply(this,[arguments,"previous"])},animateToDelta:function(t,n,i,s){s=s||function(){};if(e.isFunction(i)){s=i;i=null}else if(e.isFunction(n)){s=n;n=null}return this.each(function(){var o=e(this).data("roundabout").bearing+t;r.animateToBearing.apply(e(this),[o,n,i,s])})},animateBearingToFocus:function(t,n,i,s){s=s||function(){};if(e.isFunction(i)){s=i;i=null}else if(e.isFunction(n)){s=n;n=null}return this.each(function(){var o=e(this).data("roundabout").bearing-t;o=Math.abs(360-o)<Math.abs(o)?360-o:-o;o=o>180?-(360-o):o;if(o!==0){r.animateToDelta.apply(e(this),[o,n,i,s])}})},stopAnimation:function(){return this.each(function(){e(this).data("roundabout").stopAnimation=true})},allowAnimation:function(){return this.each(function(){e(this).data("roundabout").stopAnimation=false})},startAutoplay:function(t){return this.each(function(){var n=e(this),i=n.data("roundabout");t=t||i.autoplayCallback||function(){};clearInterval(i.autoplayInterval);i.autoplayInterval=setInterval(function(){r.animateToNextChild.apply(n,[t])},i.autoplayDuration);i.autoplayIsRunning=true;n.trigger("autoplayStart")})},stopAutoplay:function(t){return this.each(function(){clearInterval(e(this).data("roundabout").autoplayInterval);e(this).data("roundabout").autoplayInterval=null;e(this).data("roundabout").autoplayIsRunning=false;if(!t){e(this).unbind(".autoplay")}e(this).trigger("autoplayStop")})},toggleAutoplay:function(t){return this.each(function(){var n=e(this),i=n.data("roundabout");t=t||i.autoplayCallback||function(){};if(!r.isAutoplaying.apply(e(this))){r.startAutoplay.apply(e(this),[t])}else{r.stopAutoplay.apply(e(this),[t])}})},isAutoplaying:function(){return this.data("roundabout").autoplayIsRunning},changeAutoplayDuration:function(t){return this.each(function(){var n=e(this),i=n.data("roundabout");i.autoplayDuration=t;if(r.isAutoplaying.apply(n)){r.stopAutoplay.apply(n);setTimeout(function(){r.startAutoplay.apply(n)},10)}})},normalize:function(e){var t=e%360;return t<0?360+t:t},normalizeRad:function(e){while(e<0){e+=Math.PI*2}while(e>Math.PI*2){e-=Math.PI*2}return e},isChildBackDegreesBetween:function(t,n){var r=e(this).data("roundabout").backDegrees;if(t>n){return r>=n&&r<t}else{return r<n&&r>=t}},getAnimateToMethod:function(e){e=e.toLowerCase();if(e==="next"){return"animateToNextChild"}else if(e==="previous"){return"animateToPreviousChild"}return"animateToNearestChild"},relayoutChildren:function(){return this.each(function(){var t=e(this),n=e.extend({},t.data("roundabout"));n.startingChild=t.data("roundabout").childInFocus;r.init.apply(t,[n,null,true])})},getNearestChild:function(){var t=e(this),n=t.data("roundabout"),r=t.children(n.childSelector).length;if(!n.reflect){return(r-Math.round(n.bearing/n.period)%r)%r}else{return Math.round(n.bearing/n.period)%r}},degToRad:function(e){return r.normalize.apply(null,[e])*Math.PI/180},getPlacement:function(e){var t=this.data("roundabout");return!t.reflect?360-t.period*e:t.period*e},isInFocus:function(e){var t,n=this,i=n.data("roundabout"),s=r.normalize.apply(null,[i.bearing]);e=r.normalize.apply(null,[e]);t=Math.abs(s-e);return t<=i.floatComparisonThreshold||t>=360-i.floatComparisonThreshold},getChildInFocus:function(){var t=e(this).data("roundabout");return t.childInFocus>-1?t.childInFocus:false},compareVersions:function(e,t){var n,r=e.split(/\./i),i=t.split(/\./i),s=r.length>i.length?r.length:i.length;for(n=0;n<=s;n++){if(r[n]&&!i[n]&&parseInt(r[n],10)!==0){return 1}else if(i[n]&&!r[n]&&parseInt(i[n],10)!==0){return-1}else if(r[n]===i[n]){continue}if(r[n]&&i[n]){if(parseInt(r[n],10)>parseInt(i[n],10)){return 1}else{return-1}}}return 0}};e.fn.roundabout=function(t){if(r[t]){return r[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||e.isFunction(t)||!t){return r.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist for jQuery.roundabout.")}}})(jQuery);(function(e){e.flexslider=function(t,n){var r=e(t),i=e.extend({},e.flexslider.defaults,n),s=i.namespace,o="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=o?"touchend":"click",a="vertical"===i.direction,f=i.reverse,l=0<i.itemWidth,c="fade"===i.animation,h=""!==i.asNavFor,p={};e.data(t,"flexslider",r);p={init:function(){r.animating=!1;r.currentSlide=i.startAt;r.animatingTo=r.currentSlide;r.atEnd=0===r.currentSlide||r.currentSlide===r.last;r.containerSelector=i.selector.substr(0,i.selector.search(" "));r.slides=e(i.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=0<e(i.sync).length;"slide"===i.animation&&(i.animation="swing");r.prop=a?"top":"marginLeft";r.args={};r.manualPause=!1;var t=r,n;if(n=!i.video)if(n=!c)if(n=i.useCSS)e:{n=document.createElement("div");var s=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],u;for(u in s)if(void 0!==n.style[s[u]]){r.pfx=s[u].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";n=!0;break e}n=!1}t.transitions=n;""!==i.controlsContainer&&(r.controlsContainer=0<e(i.controlsContainer).length&&e(i.controlsContainer));""!==i.manualControls&&(r.manualControls=0<e(i.manualControls).length&&e(i.manualControls));i.randomize&&(r.slides.sort(function(){return Math.round(Math.random())-.5}),r.container.empty().append(r.slides));r.doMath();h&&p.asNav.setup();r.setup("init");i.controlNav&&p.controlNav.setup();i.directionNav&&p.directionNav.setup();i.keyboard&&(1===e(r.containerSelector).length||i.multipleKeyboard)&&e(document).bind("keyup",function(e){e=e.keyCode;if(!r.animating&&(39===e||37===e))e=39===e?r.getTarget("next"):37===e?r.getTarget("prev"):!1,r.flexAnimate(e,i.pauseOnAction)});i.mousewheel&&r.bind("mousewheel",function(e,t){e.preventDefault();var n=0>t?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,i.pauseOnAction)});i.pausePlay&&p.pausePlay.setup();i.slideshow&&(i.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&r.play()}),0<i.initDelay?setTimeout(r.play,i.initDelay):r.play());o&&i.touch&&p.touch();(!c||c&&i.smoothHeight)&&e(window).bind("resize focus",p.resize);setTimeout(function(){i.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(s+"active-slide").eq(r.currentItem).addClass(s+"active-slide");r.slides.click(function(t){t.preventDefault();var t=e(this),n=t.index();!e(i.asNavFor).data("flexslider").animating&&!t.hasClass("active")&&(r.direction=r.currentItem<n?"next":"prev",r.flexAnimate(n,i.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){r.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var t=1,n;r.controlNavScaffold=e('<ol class="'+s+"control-nav "+s+("thumbnails"===i.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<r.pagingCount)for(var a=0;a<r.pagingCount;a++)n="thumbnails"===i.controlNav?'<img src="'+r.slides.eq(a).attr("data-thumb")+'"/>':"<a>"+t+"</a>",r.controlNavScaffold.append("<li>"+n+"</li>"),t++;r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);p.controlNav.set();p.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();var t=e(this),n=r.controlNav.index(t);t.hasClass(s+"active")||(r.direction=n>r.currentSlide?"next":"prev",r.flexAnimate(n,i.pauseOnAction))});o&&r.controlNavScaffold.delegate("a","click touchstart",function(e){e.preventDefault()})},setupManual:function(){r.controlNav=r.manualControls;p.controlNav.active();r.controlNav.live(u,function(t){t.preventDefault();var t=e(this),n=r.controlNav.index(t);t.hasClass(s+"active")||(n>r.currentSlide?r.direction="next":r.direction="prev",r.flexAnimate(n,i.pauseOnAction))});o&&r.controlNav.live("click touchstart",function(e){e.preventDefault()})},set:function(){r.controlNav=e("."+s+"control-nav li "+("thumbnails"===i.controlNav?"img":"a"),r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(s+"active").eq(r.animatingTo).addClass(s+"active")},update:function(t,n){1<r.pagingCount&&"add"===t?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):1===r.pagingCount?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();p.controlNav.set();1<r.pagingCount&&r.pagingCount!==r.controlNav.length?r.update(n,t):p.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+s+'direction-nav"><li><a class="'+s+'prev" href="#">'+i.prevText+'</a></li><li><a class="'+s+'next" href="#">'+i.nextText+"</a></li></ul>");r.controlsContainer?(e(r.controlsContainer).append(t),r.directionNav=e("."+s+"direction-nav li a",r.controlsContainer)):(r.append(t),r.directionNav=e("."+s+"direction-nav li a",r));p.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();t=e(this).hasClass(s+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(t,i.pauseOnAction)});o&&r.directionNav.bind("click touchstart",function(e){e.preventDefault()})},update:function(){var e=s+"disabled";1===r.pagingCount?r.directionNav.addClass(e):i.animationLoop?r.directionNav.removeClass(e):0===r.animatingTo?r.directionNav.removeClass(e).filter("."+s+"prev").addClass(e):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+s+"next").addClass(e):r.directionNav.removeClass(e)}},pausePlay:{setup:function(){var t=e('<div class="'+s+'pauseplay"><a></a></div>');r.controlsContainer?(r.controlsContainer.append(t),r.pausePlay=e("."+s+"pauseplay a",r.controlsContainer)):(r.append(t),r.pausePlay=e("."+s+"pauseplay a",r));p.pausePlay.update(i.slideshow?s+"pause":s+"play");r.pausePlay.bind(u,function(t){t.preventDefault();e(this).hasClass(s+"pause")?(r.manualPause=!0,r.manualPlay=!1,r.pause()):(r.manualPause=!1,r.manualPlay=!0,r.play())});o&&r.pausePlay.bind("click touchstart",function(e){e.preventDefault()})},update:function(e){"play"===e?r.pausePlay.removeClass(s+"pause").addClass(s+"play").text(i.playText):r.pausePlay.removeClass(s+"play").addClass(s+"pause").text(i.pauseText)}},touch:function(){function e(e){p=a?s-e.touches[0].pageY:s-e.touches[0].pageX;v=a?Math.abs(p)<Math.abs(e.touches[0].pageX-o):Math.abs(p)<Math.abs(e.touches[0].pageY-o);if(!v||500<Number(new Date)-d)e.preventDefault(),!c&&r.transitions&&(i.animationLoop||(p/=0===r.currentSlide&&0>p||r.currentSlide===r.last&&0<p?Math.abs(p)/h+2:1),r.setProps(u+p,"setTouch"))}function n(){t.removeEventListener("touchmove",e,!1);if(r.animatingTo===r.currentSlide&&!v&&null!==p){var a=f?-p:p,l=0<a?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(550>Number(new Date)-d&&50<Math.abs(a)||Math.abs(a)>h/2)?r.flexAnimate(l,i.pauseOnAction):c||r.flexAnimate(r.currentSlide,i.pauseOnAction,!0)}t.removeEventListener("touchend",n,!1);u=p=o=s=null}var s,o,u,h,p,d,v=!1;t.addEventListener("touchstart",function(c){r.animating?c.preventDefault():1===c.touches.length&&(r.pause(),h=a?r.h:r.w,d=Number(new Date),u=l&&f&&r.animatingTo===r.last?0:l&&f?r.limit-(r.itemW+i.itemMargin)*r.move*r.animatingTo:l&&r.currentSlide===r.last?r.limit:l?(r.itemW+i.itemMargin)*r.move*r.currentSlide:f?(r.last-r.currentSlide+r.cloneOffset)*h:(r.currentSlide+r.cloneOffset)*h,s=a?c.touches[0].pageY:c.touches[0].pageX,o=a?c.touches[0].pageX:c.touches[0].pageY,t.addEventListener("touchmove",e,!1),t.addEventListener("touchend",n,!1))},!1)},resize:function(){!r.animating&&r.is(":visible")&&(l||r.doMath(),c?p.smoothHeight():l?(r.slides.width(r.computedW),r.update(r.pagingCount),r.setProps()):a?(r.viewport.height(r.h),r.setProps(r.h,"setTotal")):(i.smoothHeight&&p.smoothHeight(),r.newSlides.width(r.computedW),r.setProps(r.computedW,"setTotal")))},smoothHeight:function(e){if(!a||c){var t=c?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(i.sync).data("flexslider"),s=r.animatingTo;switch(t){case"animate":n.flexAnimate(s,i.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}}};r.flexAnimate=function(t,n,u,d,v){h&&1===r.pagingCount&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,v)||u)&&r.is(":visible")){if(h&&d)if(u=e(i.asNavFor).data("flexslider"),r.atEnd=0===t||t===r.count-1,u.flexAnimate(t,!0,!1,!0,v),r.direction=r.currentItem<t?"next":"prev",u.direction=r.direction,Math.ceil((t+1)/r.visible)-1!==r.currentSlide&&0!==t)r.currentItem=t,r.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),t=Math.floor(t/r.visible);else return r.currentItem=t,r.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),!1;r.animating=!0;r.animatingTo=t;i.before(r);n&&r.pause();r.syncExists&&!v&&p.sync("animate");i.controlNav&&p.controlNav.active();l||r.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide");r.atEnd=0===t||t===r.last;i.directionNav&&p.directionNav.update();t===r.last&&(i.end(r),i.animationLoop||r.pause());if(c)o?(r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1}),r.slides.eq(t).css({opacity:1,zIndex:2}),r.slides.unbind("webkitTransitionEnd transitionend"),r.slides.eq(r.currentSlide).bind("webkitTransitionEnd transitionend",function(){i.after(r)}),r.animating=!1,r.currentSlide=r.animatingTo):(r.slides.eq(r.currentSlide).fadeOut(i.animationSpeed,i.easing),r.slides.eq(t).fadeIn(i.animationSpeed,i.easing,r.wrapup));else{var m=a?r.slides.filter(":first").height():r.computedW;l?(t=i.itemWidth>r.w?2*i.itemMargin:i.itemMargin,t=(r.itemW+t)*r.move*r.animatingTo,t=t>r.limit&&1!==r.visible?r.limit:t):t=0===r.currentSlide&&t===r.count-1&&i.animationLoop&&"next"!==r.direction?f?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&0===t&&i.animationLoop&&"prev"!==r.direction?f?0:(r.count+1)*m:f?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(t,"",i.animationSpeed);if(r.transitions){if(!i.animationLoop||!r.atEnd)r.animating=!1,r.currentSlide=r.animatingTo;r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,i.animationSpeed,i.easing,function(){r.wrapup(m)})}i.smoothHeight&&p.smoothHeight(i.animationSpeed)}};r.wrapup=function(e){!c&&!l&&(0===r.currentSlide&&r.animatingTo===r.last&&i.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&0===r.animatingTo&&i.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;i.after(r)};r.animateSlides=function(){r.animating||r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.playing=!1;i.pausePlay&&p.pausePlay.update("play");r.syncExists&&p.sync("pause")};r.play=function(){r.animatedSlides=setInterval(r.animateSlides,i.slideshowSpeed);r.playing=!0;i.pausePlay&&p.pausePlay.update("pause");r.syncExists&&p.sync("play")};r.canAdvance=function(e,t){var n=h?r.pagingCount-1:r.last;return t?!0:h&&r.currentItem===r.count-1&&0===e&&"prev"===r.direction?!0:h&&0===r.currentItem&&e===r.pagingCount-1&&"next"!==r.direction?!1:e===r.currentSlide&&!h?!1:i.animationLoop?!0:r.atEnd&&0===r.currentSlide&&e===n&&"next"!==r.direction?!1:r.atEnd&&r.currentSlide===n&&0===e&&"next"===r.direction?!1:!0};r.getTarget=function(e){r.direction=e;return"next"===e?r.currentSlide===r.last?0:r.currentSlide+1:0===r.currentSlide?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var s,o=e?e:(r.itemW+i.itemMargin)*r.move*r.animatingTo;s=-1*function(){if(l)return"setTouch"===t?e:f&&r.animatingTo===r.last?0:f?r.limit-(r.itemW+i.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:o;switch(t){case"setTotal":return f?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return f?e:r.count*e;case"jumpStart":return f?r.count*e:e;default:return e}}()+"px";r.transitions&&(s=a?"translate3d(0,"+s+",0)":"translate3d("+s+",0,0)",n=void 0!==n?n/1e3+"s":"0s",r.container.css("-"+r.pfx+"-transition-duration",n));r.args[r.prop]=s;(r.transitions||void 0===n)&&r.container.css(r.args)};r.setup=function(t){if(c)r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.eq(r.currentSlide).fadeIn(i.animationSpeed,i.easing)),i.smoothHeight&&p.smoothHeight();else{var n,u;"init"===t&&(r.viewport=e('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container),r.cloneCount=0,r.cloneOffset=0,f&&(u=e.makeArray(r.slides).reverse(),r.slides=e(u),r.container.empty().append(r.slides)));i.animationLoop&&!l&&(r.cloneCount=2,r.cloneOffset=1,"init"!==t&&r.container.find(".clone").remove(),r.container.append(r.slides.first().clone().addClass("clone")).prepend(r.slides.last().clone().addClass("clone")));r.newSlides=e(i.selector,r);n=f?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;a&&!l?(r.container.height(200*(r.count+r.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},"init"===t?100:0)):(r.container.width(200*(r.count+r.cloneCount)+"%"),r.setProps(n*r.computedW,"init"),setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});i.smoothHeight&&p.smoothHeight()},"init"===t?100:0))}l||r.slides.removeClass(s+"active-slide").eq(r.currentSlide).addClass(s+"active-slide")};r.doMath=function(){var e=r.slides.first(),t=i.itemMargin,n=i.minItems,s=i.maxItems;r.w=r.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();l?(r.itemT=i.itemWidth+t,r.minW=n?n*r.itemT:r.w,r.maxW=s?s*r.itemT:r.w,r.itemW=r.minW>r.w?(r.w-t*n)/n:r.maxW<r.w?(r.w-t*s)/s:i.itemWidth>r.w?r.w:i.itemWidth,r.visible=Math.floor(r.w/(r.itemW+t)),r.move=0<i.move&&i.move<r.visible?i.move:r.visible,r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1),r.last=r.pagingCount-1,r.limit=1===r.pagingCount?0:i.itemWidth>r.w?(r.itemW+2*t)*r.count-r.w-t:(r.itemW+t)*r.count-r.w-t):(r.itemW=r.w,r.pagingCount=r.count,r.last=r.count-1);r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();l||(e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&0!==e&&(r.currentSlide-=1),r.animatingTo=r.currentSlide);if(i.controlNav&&!r.manualControls)if("add"===t&&!l||r.pagingCount>r.controlNav.length)p.controlNav.update("add");else if("remove"===t&&!l||r.pagingCount<r.controlNav.length)l&&r.currentSlide>r.last&&(r.currentSlide-=1,r.animatingTo-=1),p.controlNav.update("remove",r.last);i.directionNav&&p.directionNav.update()};r.addSlide=function(t,n){var s=e(t);r.count+=1;r.last=r.count-1;a&&f?void 0!==n?r.slides.eq(r.count-n).after(s):r.container.prepend(s):void 0!==n?r.slides.eq(n).before(s):r.container.append(s);r.update(n,"add");r.slides=e(i.selector+":not(.clone)",r);r.setup();i.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():a&&f?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(i.selector+":not(.clone)",r);r.setup();i.removed(r)};p.init()};e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};e.fn.flexslider=function(t){void 0===t&&(t={});if("object"===typeof t)return this.each(function(){var n=e(this),r=n.find(t.selector?t.selector:".slides > li");1===r.length?(r.fadeIn(400),t.start&&t.start(n)):void 0==n.data("flexslider")&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"===typeof t&&n.flexAnimate(t,!0)}}})(jQuery);(function(e){e.fn.countdown=function(t,n){function r(e,t){return function(){return t.call(e)}}var i="seconds minutes hours days weeks daysLeft".split(" ");return this.each(function(){function s(){if(0===u.closest("html").length)clearInterval(p),o("removed");else{d--;0>d&&(d=0);c={seconds:d%60,minutes:Math.floor(d/60)%60,hours:Math.floor(d/60/60)%24,days:Math.floor(d/60/60/24),weeks:Math.floor(d/60/60/24/7),daysLeft:Math.floor(d/60/60/24)%7};for(var e=0;e<i.length;e++){var t=i[e];f[t]!=c[t]&&(f[t]=c[t],o(t))}0==d&&(clearInterval(p),o("finished"))}}function o(r){var i=e.Event(r);i.date=new Date((new Date).valueOf()+d);i.value=f[r]||"0";i.toDate=t;i.lasting=c;switch(r){case"seconds":case"minutes":case"hours":i.value=10>i.value?"0"+i.value.toString():i.value.toString();break;default:i.value&&(i.value=i.value.toString())}n.call(u,i)}if(!(t instanceof Date))if(String(t).match(/^[0-9]*$/))t=new Date(t);else if(t.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})\s([0-9]{1,2})\:([0-9]{2})\:([0-9]{2})/)||t.match(/([0-9]{2,4})\/([0-9]{1,2})\/([0-9]{1,2})\s([0-9]{1,2})\:([0-9]{2})\:([0-9]{2})/))t=new Date(t);else if(t.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})/)||t.match(/([0-9]{2,4})\/([0-9]{1,2})\/([0-9]{1,2})/))t=new Date(t);else throw Error("Doesn't seen to be a valid date object or string");var u=e(this),f={},c={},p=u.data("countdownInterval"),d=Math.floor((t.valueOf()-(new Date).valueOf())/1e3);s();p&&clearInterval(p);u.data("countdownInterval",setInterval(r(u,s),1e3));p=u.data("countdownInterval")})}})(jQuery);var Froogaloop=function(){function e(t){return new e.fn.init(t)}function t(e,t,n){if(!n.contentWindow.postMessage)return!1;var r=n.getAttribute("src").split("?")[0],e=JSON.stringify({method:e,value:t});n.contentWindow.postMessage(e,r)}function n(e){var t,n;try{t=JSON.parse(e.data),n=t.event||t.method}catch(r){}"ready"==n&&!s&&(s=!0);if(e.origin!=o)return!1;var e=t.value,u=t.data,a=""===a?null:t.player_id;t=a?i[a][n]:i[n];n=[];if(!t)return!1;void 0!==e&&n.push(e);u&&n.push(u);a&&n.push(a);return 0<n.length?t.apply(null,n):t.call()}function r(e,t,n){n?(i[n]||(i[n]={}),i[n][e]=t):i[e]=t}var i={},s=!1,o="";e.fn=e.prototype={element:null,init:function(e){"string"===typeof e&&(e=document.getElementById(e));this.element=e;for(var e=this.element.getAttribute("src").split("/"),t="",n=0,r=e.length;n<r;n++){if(3>n)t+=e[n];else break;2>n&&(t+="/")}o=t;return this},api:function(e,n){if(!this.element||!e)return!1;var i=this.element,s=""!==i.id?i.id:null,o=!n||!n.constructor||!n.call||!n.apply?n:null,u=n&&n.constructor&&n.call&&n.apply?n:null;u&&r(e,u,s);t(e,o,i);return this},addEvent:function(e,n){if(!this.element)return!1;var i=this.element,o=""!==i.id?i.id:null;r(e,n,o);"ready"!=e?t("addEventListener",e,i):"ready"==e&&s&&n.call(null,o);return this},removeEvent:function(e){if(!this.element)return!1;var n=this.element,r;e:{if((r=""!==n.id?n.id:null)&&i[r]){if(!i[r][e]){r=!1;break e}i[r][e]=null}else{if(!i[e]){r=!1;break e}i[e]=null}r=!0}"ready"!=e&&r&&t("removeEventListener",e,n)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",n,!1):window.attachEvent("onmessage",n,!1);return window.Froogaloop=window.$f=e}();(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];r.className="fit-vids-style";r.innerHTML="­<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";i.parentNode.insertBefore(r,i);if(t){e.extend(n,t)}return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","object","embed"];if(n.customSelector){t.push(n.customSelector)}var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=!isNaN(parseInt(t.attr("width"),10))?parseInt(t.attr("width"),10):t.width(),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(jQuery);

//Twitter feed
/**
 * jTweetsAnywhere - current development version
 * http://thomasbillenstein.com/jTweetsAnywhere/
 *
 * Copyright 2011, Thomas Billenstein
 * Licensed under the MIT license.
 * http://thomasbillenstein.com/jTweetsAnywhere/license.txt
 */


/**
 * The code below is used as supplied by Twitter (https://dev.twitter.com/docs/intents)
 *
 * Twitter says:

 * "Some sites may prefer to embed the unobtrusive Web Intents pop-up Javascript inline
 * or without a dependency to platform.twitter.com. The snippet below will offer the
 * equivalent functionality without the external dependency."
 */
/*(function()
{
  if (window.__twitterIntentHandler)
	  return;

  var intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
      windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
      width = 550,
      height = 420,
      winHeight = screen.height,
      winWidth = screen.width;


  function handleIntent(e)
  {
    e = e || window.event;

    var target = e.target || e.srcElement,
        m, left, top;

    while (target && target.nodeName.toLowerCase() !== 'a')
    {
      target = target.parentNode;
    }

    if (target && target.nodeName.toLowerCase() === 'a' && target.href)
    {
      m = target.href.match(intentRegex);
      if (m)
      {
        left = Math.round((winWidth / 2) - (width / 2));
        top = 0;

        if (winHeight > height)
        {
          top = Math.round((winHeight / 2) - (height / 2));
        }

        window.open(target.href, 'intent', windowOptions + ',width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  }

  if (document.addEventListener)
  {
    document.addEventListener('click', handleIntent, false);
  }
  else if (document.attachEvent)
  {
    document.attachEvent('onclick', handleIntent);
  }

  window.__twitterIntentHandler = true;
}());*/


/**
 * JTA_I18N is based on SimpleI18N V0.1.0
 *
 * SimpleI18N.js is a tiny library for simple i18n support in Javascript.
 * Currently only translation is supported.
 */
(function()
{
	if (window.__JTA_I18N)
	{
		return;
	}

	JTA_I18N = function()
	{
		var _resources = {};

		function ResourceBundle(locale, resources)
		{
			this.getLocale = function()
			{
				return locale;
			};

			this.get = function(key, params)
			{
				return xlate(key, 1, params);
			};

			this._ = this.get;

			this.nget = function(singular, plural, count, params)
			{
				return count === 1 ? xlate(singular, 1, params) : xlate(plural, count, params);
			};

			this.__ = this.nget;

			function xlate(key, count, params)
			{
				var resource = getValue(key);

				if (count !== 1 && typeof resource === "object")
				{
					resource = evalMulti(key, resource, count);
				}

				if (resource && params)
				{
					for (p in params)
					{
						resource = resource.replace(p, getValue(params[p]));
					}
				}

				return resource;
			};

			function getValue(resource)
			{
				return resources ? (resources[resource] || resource) : resource;
			};

			function evalMulti(key, resource, count)
			{
				for (pat in resource)
				{
					var re = /(\d+)\s*-\s*(\d+)/,
					match = re.exec(pat);

					if (match)
					{
						var from = match[1];
						var to = match[2];
						if (count >= from && count <= to)
						{
							return resource[pat];
						}
					}

					re = /([<>]=?)\s*(\d+)/;
					match = re.exec(pat);

					if (match)
					{
						var op = match[1];
						var num = match[2];
						if (op === '>' && count > num)
						{
							return resource[pat];
						}
						else if (op === '>=' && count >= num)
						{
							return resource[pat];
						}
						else if (op === '<' && count < num)
						{
							return resource[pat];
						}
						else if (op === '<=' && count <= num)
						{
							return resource[pat];
						}
					}

					re = /\s*,\s*/;
					match = pat.split(re);

					if (match)
					{
						for (var i = 0; i < match.length; i++)
						{
							if (count === ~~match[i])
							{
								return resource[pat];
							}
						}
					}
				}

				return key;
			}
		};

		return {

			addResourceBundle: function(project, locale, resources)
			{
				if (!_resources[project])
				{
					_resources[project] = {};
				}

				_resources[project][locale] = resources;
			},

			getResourceBundle: function(project, locale)
			{
				return new ResourceBundle(locale, _resources[project] ? _resources[project][locale] : null);
			}
		};
	}();

	window.__JTA_I18N = true;
}());

JTA_I18N.addResourceBundle('jTweetsAnywhere', 'en',
{
	'$$monthNames': [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
});



/* 	
	http://ogulcanorhan.com
  	CountUp for jQuery v1.4+
  	Licensed under the GPL (http://www.gnu.org/copyleft/gpl.html)
  	Developed by Ogulcan Orhan (mail@ogulcan.org) October 2011
 
	Please do not remove these copyright.
  
	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License, version 2, as
	published by the Free Software Foundation.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

(function ( $ ) {

	if (typeof Object.create !== 'function') {
		Object.create = function (o) {
			function F() {} 
			F.prototype = o;
			return new F();
		};
	}
	
	//example: $.countUp({ 'sinceDate':'01/01/2011', 'lang':'en', 'format':'day' });
	//date format: dd/mm/yyyy-hh:mm:ss
	//available langs: english (en), turkish (tr), deutsch (de), spanish (es)
	//format options: full, day, seconds
	
	var _defaults = { 'sinceDate' : '17/10/2007-19:37:25', 'expiryDate' : 'now', 'lang': 'tr', 'format': 'seconds' , 'div_id' : '#jq_count_up', 'class_prefix' : '', 'seperator': ',', 'write_zero':'false'};

	var _timeStructure = { 'year': '', 'month': '', 'day': '', 'hour': '', 'minute': '', 'seconds': '' };
	var _monthDayStructure = { 1: 31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31 };	
	var _lang = { 
		'en' : { 'year': 'years', 'month': 'months', 'day': 'days', 'hour': 'hours', 'minute': 'minutes', 'seconds': 'seconds'  },
		'tr' : { 'year': 'yıl', 'month': 'ay', 'day': 'gün', 'hour': 'saat', 'minute': 'dakika', 'seconds': 'saniye' },
		'es' : { 'year': 'año' ,'month': 'mes', 'day': 'día' ,'hour': 'horas' ,'minute': 'minuto','seconds': 'segundo'	},
		'de' : { 'year': 'jahr' ,'month': 'monat' ,'day': 'tag' ,'hour': 'stunde' ,'minute': 'minute','seconds': 'sekunden' }
    };
		    
	var methods = {
		
		init : function (options) {
			if(options) { var newOptions = $.extend({}, _defaults, options ); } 
			if(newOptions['expiryDate'] == 'now') newOptions.expiryDate = new Date();

			var _startDate = methods.getStartDateWithFormat(newOptions.sinceDate);
			var _endDate = methods.getExpiryDate(newOptions.expiryDate);
			var _timeDifference = methods.difference(_startDate, _endDate);
			
			_timeDifference = methods.formatted(_timeDifference, newOptions);
			setInterval(function() { methods.update(_timeDifference, newOptions); }, 999);	
		},
		
		difference : function(start, end) {

			var timeDiff = $.extend([], _timeStructure);
			//year difference
			timeDiff.year = end.year - start.year;
			var eYearString = parseInt(String(end.month)+String(end.day)+String(end.hour)+String(end.minute), 10);
			var sYearString = parseInt(String(start.month)+String(start.day)+String(start.hour)+String(start.minute), 10);			
			if( eYearString < sYearString ) { timeDiff.year--; }

			//month difference
			var eMonthString = parseInt(String(end.day)+String(end.hour)+String(end.minute));
			var sMonthString = parseInt(String(start.day)+String(start.hour)+String(start.minute));	
			
			if(end.month < start.month) {
				timeDiff.month = 12 - Math.abs(end.month - start.month);
				if(eMonthString < sMonthString) timeDiff.month--;
			} else if((end.month == start.month)) {
				if(eMonthString < sMonthString) timeDiff.month = 11;
				else timeDiff.month = 0;
			} else if( end.month > start.month) {
				timeDiff.month = end.month - start.month;
				if(eMonthString < sMonthString) timeDiff.month--;
			}
			
			//day difference
			var eDayString = parseInt(String(end.hour)+String(end.minute)+String(end.seconds), 10);
			var sDayString = parseInt(String(start.hour)+String(start.minute)+String(start.seconds), 10);
			
			if(end.day < start.day) {
				timeDiff.day = _monthDayStructure[parseInt(start.month, 10)] - Math.abs(end.day - start.day);
				if(eDayString < sDayString ) timeDiff.day--;
			} else if (end.day == start.day) {
				if(eDayString < sDayString) timeDiff.day = _monthDayStructure[start.month] - 1;
				else timeDiff.day = 0;
			} else if (end.day > start.day) {
				timeDiff.day = end.day - start.day;
				if(eDayString < sDayString ) timeDiff.day--;
			}

			//hour difference
			var eHourString = parseInt(String(end.minute)+String(end.seconds) ,10);
			var sHourString = parseInt(String(start.minute)+String(start.seconds),10);
			
			if(end.hour < start.hour) {
				timeDiff.hour = 24 - Math.abs(end.hour - start.hour);
				if(eHourString < sDayString) timeDiff.hour--;
			} else if (end.hour == start.hour) {
				if(eHourString < sHourString) timeDiff.hour = 23;
				else timeDiff.hour = 0;
			} else if (end.hour > start.hour) {
				timeDiff.hour = end.hour - start.hour;
				if(eHourString < sDayString) timeDiff.hour--;
			}
			
			//minute difference
			if(end.minute < start.minute) {
				timeDiff.minute = 60 - Math.abs(end.minute - start.minute);
				if(end.seconds < start.seconds) timeDiff.minute--;
			} else if(end.minute == start.minute) {
				if(end.seconds < start.seconds) timeDiff.minute = 59;
				else timeDiff.minute = 0;
			} else if(end.minute > start.minute) {
				timeDiff.minute = end.minute - start.minute;
				if(end.seconds < start.seconds) timeDiff.minute--;
			}
			
			
			//seconds difference
			if(end.seconds < start.seconds) {
				timeDiff.seconds = 60 - Math.abs(end.seconds - start.seconds);
			} else if (end.seconds == start.seconds) {
				timeDiff.seconds = 0;
			} else if (end.seconds > start.seconds) {
				timeDiff.seconds = end.seconds - start.seconds;
			}
			
			return timeDiff;		
		},
		
		formatted : function (timeDiff, options) {
			//format control
			if(options['format'] != 'full') {
				timeDiff.day = (timeDiff.year * 365) + (timeDiff.month * 30) + timeDiff.day;
				timeDiff.year = 0; 
				timeDiff.month = 0;
				if(options['format'] == 'seconds') {
					timeDiff.seconds = (timeDiff.day*86400) + (timeDiff.hour*3600) + (timeDiff.minute*60) + timeDiff.seconds;
					timeDiff.day = 0;
					timeDiff.hour = 0;
					timeDiff.minute = 0;
				}
			}
			
			return timeDiff;			
		},
		
		update : function (time, newOptions) {
			if ( time.seconds < 59 || newOptions['format'] == 'seconds' ) time.seconds++;
			else { 
				time.seconds = 0;
				if ( time.minute < 59 ) time.minute++;
				else {
					time.minute = 0;
					if ( time.hour < 23 ) time.hour++;
					else {
						time.hour = 0;
						if ( time.day < _monthDayStructure[newOptions.expiryDate.getMonth()] || newOptions['format'] == 'day' ) time.day++;
						else {
							time.day = 0;
							if ( time.month < 12 ) time.month++;
							else {
								time.month = 0;
								time.year++;
							} 
						}
					}
				}
			}	
			methods.print(time, newOptions);	
		},
		
		print : function(time, newOptions) {
			
			var year   = '<span id='+newOptions["class_prefix"]+'_year">'+time.year+' '+_lang[newOptions['lang']].year+newOptions['seperator']+' </span>';
			var month  = '<span id='+newOptions["class_prefix"]+'_month">'+time.month+' '+_lang[newOptions['lang']].month+newOptions['seperator']+' </span>';
			var day    = '<span id='+newOptions["class_prefix"]+'_day">'+time.day+' '+_lang[newOptions['lang']].day+newOptions['seperator']+' </span>';
			var hour   = '<span id='+newOptions["class_prefix"]+'_hour">'+time.hour+' '+_lang[newOptions['lang']].hour+newOptions['seperator']+' </span>';
			var minute = '<span id='+newOptions["class_prefix"]+'_minute">'+time.minute+' '+_lang[newOptions['lang']].minute+newOptions['seperator']+' </span>';
			var seconds = '<span id='+newOptions["class_prefix"]+'_seconds">'+time.seconds+' '+_lang[newOptions['lang']].seconds+' </span>';
			
			if(newOptions['write_zero'] == 'true') {
				$(newOptions['div_id']).html(year+month+day+hour+minute+seconds);
			} else {
				$(newOptions['div_id']).html(null);
				var zero = false;
				if((time.year > 0) ||  zero) {
					$(newOptions['div_id']).append(year);
					zero = true;
				}
				if((time.month > 0) || zero) {
					$(newOptions['div_id']).append(month);
				}
				if((time.day > 0) ||  zero) { 
					$(newOptions['div_id']).append(day);
					zero = true;
				}
				if((time.hour > 0) ||  zero) {
					$(newOptions['div_id']).append(hour);
					zero = true;
				}
				if((time.minute > 0) ||  zero) {
					$(newOptions['div_id']).append(minute);
					zero = true;
				}
				if((time.seconds > 0) ||  zero)
					$(newOptions['div_id']).append(seconds);				
			}
		},
		
		getStartDateWithFormat : function(sinceDate) {
			//split hour and date			
			var splittedExpiryDate = sinceDate.split("-");
			
			//use date
			var split_expiry_date = splittedExpiryDate[0].split("/");

			//use hour
			var split_expiry_time = splittedExpiryDate[1].split(":");

			//set time structure variables
			var startDate = $.extend([], _timeStructure);
		
			startDate.year   = split_expiry_date[2];
			startDate.month  = split_expiry_date[1];
			startDate.day    = split_expiry_date[0];
			
			startDate.hour   = split_expiry_time[0];
			startDate.minute = split_expiry_time[1];
			
			//if seconds
			(split_expiry_time[2]) ? startDate.seconds = split_expiry_time[2] : startDate.seconds = 0;			

			return startDate;
		},
		
		getExpiryDate : function(expiryDate) {

			var endDate = $.extend([], _timeStructure);

			endDate.year   = expiryDate.getFullYear();

			(expiryDate.getMonth()<9)    ? endDate.month   = "0" + (expiryDate.getMonth()+1) : endDate.month   = expiryDate.getMonth()+1;
			(expiryDate.getDate()<10)    ? endDate.day     = "0" + expiryDate.getDate()      : endDate.day     = expiryDate.getDate();
			(expiryDate.getHours()<10)   ? endDate.hour    = "0" + expiryDate.getHours()     : endDate.hour    = expiryDate.getHours();
			(expiryDate.getMinutes()<10) ? endDate.minute  = "0" + expiryDate.getMinutes()   : endDate.minute  = expiryDate.getMinutes();
			(expiryDate.getSeconds()<10) ? endDate.seconds = "0" + expiryDate.getSeconds()   : endDate.seconds = expiryDate.getSeconds();	

			return endDate;
		},
	};
	
	$.fn.countUp = function (method) {	
		_defaults['div_id'] = "#"+$(this).attr('id');
		_defaults['class_prefix'] = $(this).attr('id');
		var myMethods = Object.create(methods);
		myMethods.init(method);
	}

        $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator === undefined ?  " " : $l.wordSeparator;
      return $.trim([prefix, words, suffix].join(separator));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
	
})( jQuery );

function CountUp(initDate, id){
    this.beginDate = new Date(initDate);
    this.countainer = document.getElementById(id);
    this.numOfDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
    this.hours = 0, this.minutes = 0, this.seconds = 0;
    this.updateNumOfDays();
    this.updateCounter();
}
  
CountUp.prototype.updateNumOfDays=function(){
    var dateNow = new Date();
    var currYear = dateNow.getFullYear();
    if ( (currYear % 4 == 0 && currYear % 100 != 0 ) || currYear % 400 == 0 ) {
        this.numOfDays[1] = 29;
    }
    var self = this;
    setTimeout(function(){self.updateNumOfDays();}, (new Date((currYear+1), 1, 2) - dateNow));
}
  
CountUp.prototype.datePartDiff=function(then, now, MAX){
    var diff = now - then - this.borrowed;
    this.borrowed = 0;
    if ( diff > -1 ) return diff;
    this.borrowed = 1;
    return (MAX + diff);
}
  
CountUp.prototype.calculate=function(){
    var currDate = new Date();
    var prevDate = this.beginDate;
    this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
    this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
    this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
    this.days = this.datePartDiff(prevDate.getDate(), currDate.getDate(), this.numOfDays[currDate.getMonth()]);
    this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
    this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(),0);
}
  
CountUp.prototype.addLeadingZero=function(value){
    return value < 10 ? ("0" + value) : value;
}
  
CountUp.prototype.formatTime=function(){
    this.seconds = this.addLeadingZero(this.seconds);
    this.minutes = this.addLeadingZero(this.minutes);
    this.hours = this.addLeadingZero(this.hours);
}
 
CountUp.prototype.updateCounter=function(){
    this.calculate();
    this.formatTime();
    
    this.countainer.innerHTML = "<div class=digits><span class=unit>" + this.days + "</span>"+
        						"<span class=unit>" + this.hours + "</span>"+
        						"<span class=unit>" + this.minutes + "</span>"+
       							"</div>" +

						        "<div class=units>"+
						        	"<span class='timer-unit'>days</span>"+
						        	"<span class='timer-unit'>hours</span>"+
						        	"<span class='timer-unit'>minutes</span>"+
						        "</div>";

        var self = this;
    setTimeout(function(){self.updateCounter();}, 1000);
}
 
window.onload=function(){ new CountUp('December 12, 2012 19:00:00', 'countup'); }
 
/*
 * backgroundSize: A jQuery cssHook adding support for "cover" and "contain" to IE6,7,8
 *
 * Requirements:
 * - jQuery 1.7.0+
 *
 * Limitations:
 * - doesn't work with multiple backgrounds (use the :after trick)
 * - doesn't work with the "4 values syntax" of background-position
 * - doesn't work with lengths in background-position (only percentages and keywords)
 * - doesn't work with "background-repeat: repeat;"
 * - doesn't work with non-default values of background-clip/origin/attachment/scroll
 * - you should still test your website in IE!
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery.backgroundSize.js
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 *
 */
(function($,window,document,Math,undefined) {

var div = $( "<div>" )[0],
	rsrc = /url\(["']?(.*?)["']?\)/,
	watched = [],
	positions = {
		top: 0,
		left: 0,
		bottom: 1,
		right: 1,
		center: .5
	};

// feature detection
if ( "backgroundSize" in div.style && !$.debugBGS ) { return; }

$.cssHooks.backgroundSize = {
	set: function( elem, value ) {
		var firstTime = !$.data( elem, "bgsImg" ),
			pos,
			$wrapper, $img;

		$.data( elem, "bgsValue", value );

		if ( firstTime ) {
			// add this element to the 'watched' list so that it's updated on resize
			watched.push( elem );

			$.refreshBackgroundDimensions( elem, true );

			// create wrapper and img
			$wrapper = $( "<div>" ).css({
				position: "absolute",
				zIndex: -1,
				top: 0,
				right: 0,
				left: 0,
				bottom: 0,
				overflow: "hidden"
			});

			$img = $( "<img>" ).css({
				position: "absolute"
			}).appendTo( $wrapper ),

			$wrapper.prependTo( elem );

			$.data( elem, "bgsImg", $img[0] );

			pos = ( 
				// Firefox, Chrome (for debug)
				$.css( elem, "backgroundPosition" ) ||
				// IE8
				$.css( elem, "backgroundPositionX" ) + " " + $.css( elem, "backgroundPositionY" )
			).split(" ");

			// Only compatible with 1 or 2 percentage or keyword values,
			// Not yet compatible with length values and 4 values.
			$.data( elem, "bgsPos", [ 
				positions[ pos[0] ] || parseFloat( pos[0] ) / 100, 
				positions[ pos[1] ] || parseFloat( pos[1] ) / 100
			]);

			// This is the part where we mess with the existing DOM
			// to make sure that the background image is correctly zIndexed
			$.css( elem, "zIndex" ) == "auto" && ( elem.style.zIndex = 0 );
			$.css( elem, "position" ) == "static" && ( elem.style.position = "relative" );

			$.refreshBackgroundImage( elem );

		} else {
			$.refreshBackground( elem );
		}
	},

	get: function( elem ) {
		return $.data( elem, "bgsValue" ) || "";
	}
};

// The background should refresh automatically when changing the background-image
$.cssHooks.backgroundImage = {
	set: function( elem, value ) {
		// if the element has a backgroundSize, refresh its background
		return $.data( elem, "bgsImg") ?
			$.refreshBackgroundImage( elem, value ) :
			// otherwise set the background-image normally
			value;
	}
};

$.refreshBackgroundDimensions = function( elem, noBgRefresh ) {
	var $elem = $(elem),
		currDim = {
			width: $elem.innerWidth(),
			height: $elem.innerHeight()
		},
		prevDim = $.data( elem, "bgsDim" ),
		changed = !prevDim ||
			currDim.width != prevDim.width ||
			currDim.height != prevDim.height;

	$.data( elem, "bgsDim", currDim );

	if ( changed && !noBgRefresh ) {
		$.refreshBackground( elem );
	}
};

$.refreshBackgroundImage = function( elem, value ) {
	var img = $.data( elem, "bgsImg" ),
		currSrc = ( rsrc.exec( value || $.css( elem, "backgroundImage" ) ) || [] )[1],
		prevSrc = img && img.src,
		changed = currSrc != prevSrc,
		imgWidth, imgHeight;

	if ( changed ) {
		img.style.height = img.style.width = "auto";

		img.onload = function() {
			var dim = {
				width: img.width,
				height: img.height
			};

			// ignore onload on the proxy image
			if ( dim.width == 1 && dim.height == 1 ) { return; }

			$.data( elem, "bgsImgDim", dim );
			$.data( elem, "bgsConstrain", false );

			$.refreshBackground( elem );

			img.style.visibility = "visible";

			img.onload = null;
		};

		img.style.visibility = "hidden";
		img.src = currSrc;

		if ( img.readyState || img.complete ) {
			img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
			img.src = currSrc;
		}

		elem.style.backgroundImage = "none";
	}
};

$.refreshBackground = function( elem ) {
	var value = $.data( elem, "bgsValue" ),
		elemDim = $.data( elem, "bgsDim" ),
		imgDim = $.data( elem, "bgsImgDim" ),
		$img = $( $.data( elem, "bgsImg" ) ),
		pos = $.data( elem, "bgsPos" ),
		prevConstrain = $.data( elem, "bgsConstrain" ),
		currConstrain,
		elemRatio = elemDim.width / elemDim.height,
		imgRatio = imgDim.width / imgDim.height,
		delta;

	if ( value == "contain" ) {
		if ( imgRatio > elemRatio ) {
			$.data( elem, "bgsConstrain", ( currConstrain = "width" ) );

			delta = Math.floor( ( elemDim.height - elemDim.width / imgRatio ) * pos[1] );

			$img.css({
				top: delta
			});

			// when switchin from height to with constraint,
			// make sure to release contraint on height and reset left
			if ( currConstrain != prevConstrain ) {
				$img.css({
					width: "100%",
					height: "auto",
					left: 0
				});
			}

		} else {
			$.data( elem, "bgsConstrain", ( currConstrain = "height" ) );

			delta = Math.floor( ( elemDim.width - elemDim.height * imgRatio ) * pos[0] );

			$img.css({
				left: delta
			});

			if ( currConstrain != prevConstrain ) {
				$img.css({
					height: "100%",
					width: "auto",
					top: 0
				});
			}
		}

	} else if ( value == "cover" ) {
		if ( imgRatio > elemRatio ) {
			$.data( elem, "bgsConstrain", ( currConstrain = "height" ) );

			delta = Math.floor( ( elemDim.height * imgRatio - elemDim.width ) * pos[0] );

			$img.css({
				left: -delta
			});

			if ( currConstrain != prevConstrain ) {
				$img.css({
					height:"100%",
					width: "auto",
					top: 0
				});
			}

		} else {
			$.data( elem, "bgsConstrain", ( currConstrain = "width" ) );

			delta = Math.floor( ( elemDim.width / imgRatio - elemDim.height ) * pos[1] );

			$img.css({
				top: -delta
			});

			if ( currConstrain != prevConstrain ) {
				$img.css({
					width: "100%",
					height: "auto",
					left: 0
				});
			}
		}
	}
}

// Built-in throttledresize
var $event = $.event,
	$special,
	dummy = {_:0},
	frame = 0,
	wasResized, animRunning;

$special = $event.special.throttledresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments;

		wasResized = true;

        if ( !animRunning ) {
        	$(dummy).animate(dummy, { duration: Infinity, step: function() {
	        	frame++;

	        	if ( frame > $special.threshold && wasResized || execAsap ) {
	        		// set correct event type
        			event.type = "throttledresize";
	        		$event.dispatch.apply( context, args );
	        		wasResized = false;
	        		frame = 0;
	        	}
	        	if ( frame > 9 ) {
	        		$(dummy).stop();
	        		animRunning = false;
	        		frame = 0;
	        	}
	        }});
	        animRunning = true;
        }
	},
	threshold: 1
};

// All backgrounds should refresh automatically when the window is resized
$(window).on("throttledresize", function() {
	$(watched).each(function() {
		$.refreshBackgroundDimensions( this );
	});
});

})(jQuery,window,document,Math);