jQuery(function($){
	$.fn.simplemarquee = function(options){
		var settings = $.extend( {
		  'speed'         : 5000,
		  'direction' : 'rtl', // "rtl" (right to left) or "ltr" (left to right)
		  'pause' : true,
		  'wrapclass' : 'sections'
		}, options);
		var html = '';
		var width = 0;
		var animation;
		return this.each(function() {
			if($(this).length){
				html = '<div class="section">'+$(this).html()+'</div>';
				$(this).html('<div class="'+settings.wrapclass+'">'+html+'</div>');
				width = $('.'+settings.wrapclass,this).width();
				if($(this).css('height') == '0px'){
					$(this).height($('.section:eq(0)',this).height());
				}

				var n = 0;
				for(i=0;i<30;i++){
					$('.'+settings.wrapclass,this).append(html);
					if($('.'+settings.wrapclass,this).width() > $(this).width()){
						n++;
					}
					if(n > 1){
						break;
					}
				}
				$('.'+settings.wrapclass,this).width('9999px');
				animateit($('.'+settings.wrapclass,this),true);
			}
			if(settings.pause){
				$('.'+settings.wrapclass,this).mouseover(function(){
					animation.stop();
				});
				$('.'+settings.wrapclass,this).mouseout(function(){
					animateit($(this),false);
				});
			}
		});
		function animateit(obj,rst){
			if(settings.direction == 'ltr'){
				if(rst){
					obj.css('left','-'+(width*2)+'px');
				}
				var goto = (width-2);
			}else{
				if(rst){
					obj.css('left','0px');
				}
				var goto = (width+2);
			}
			animation = obj.animate({left: '-'+goto+'px'},settings.speed,'linear',function(){
				animateit(obj,true);
			});
		}
	}
});

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
(function()
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
}());


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

(function($)
{
	$.fn.jTweetsAnywhere = function(config)
	{
		/** setup the default options */
		var options = $.extend(
		{
			/**
			 * The user's name who's tweet feed or list feed is displayed. This
			 * param is also used when a Twitter "Follow Button" is displayed. Usually
			 * this param is a string, but can also be an array of strings. If an array
			 * is supplied (and the params 'list' and 'searchParams' are null), a
			 * combined feed of all users is displayed.
			 *
			 * Sample: 'tbillenstein' or ['twitterapi', '...', '...']
			 */
			username: 'tbillenstein',

			/**
			 * The name of a user's list where the tweet feed is generated from. The special
			 * list name 'favorites' can be used to display a user's favorited tweets.
			 */
			list: null,

			/**
			 * A single search param string or an array of search params, to be used in
			 * a Twitter search call. All Twitter Search Params are supported
			 * See here for the details:
			 * http://apiwiki.twitter.com/Twitter-Search-API-Method%3A-search
			 *
			 * Sample: 'q=twitter' or ['q=twitter', 'geocode=48.856667,2.350833,30km']
			 */
			searchParams: null,

			/**
			 * The number of tweets shown in the tweet feed. If this param is 0, no feed
			 * is displayed. For user or list feeds the maximum count is 20, for search
			 * results the maximum count is 100.
			 *
			 * Unlike in previous releases, since 1.2.0 jTweetsAnywhere is based on a
			 * tweets caching algorithm that will always deliver the requested count of
			 * tweets accepting that this request can only be fullfilled by calling Twitter
			 * more than once.
			 *
			 * IMPORTANT: Please always keep in mind, that the use of the Twitter API is
			 * rate limited. Non-authenticated users are rated IP-based and you have only
			 * 150 calls per hour available. Every retrieval of tweets counts and so does
			 * for example hovering over a profile image to show the hovercard.
			 * jTweetsAnywhere will always check the remaining count of free API calls before
			 * actually calling Twitter to avoid black listing your visitor's IP.
			 */
			count: 0,

			/**
			 * A flag (true/false) that specifies whether to display a profile image in
			 * tweets. If the param is set to null (the default value), a profile image
			 * is displayed only if the feed represents a user's list or the result of a
			 * Twitter search.
			 *
			 * THIS OPTION IS DEPRECATED. You should use showTweetFeed.showProfileImages
			 * instead.
			 */
			tweetProfileImagePresent: null,

			/**
			 * Each tweet that is loaded from Twitter will pass the tweetFilter. if
			 * the filter returns true, the tweet will be added to the tweets cache
			 * otherwise it is ignored. The defaultTweetFilter alsways retruns true
			 * but you can supply your own tweet filter to customize the tweet feed.
			 */
			tweetFilter: defaultTweetFilter,

			/**
			 * An array of widget part names that define presence and sequence of the
			 * widget parts to be displayed. This option is closely related to the
			 * showTweetFeed, showConnectButton, showLoginInfo, showFollowButton and
			 * showTweetBox options. The parts option has more relevance than the show...
			 * options and will override them. Though any extended configuration of the
			 * show... options still remains there and hasn't changed.
			 *
			 * For example:
			 * The following configuration will result in displaying the connect button,
			 * the tweet box and the tweet feed in that order.
			 *
			 * ...
			 * parts: ['connect-button', 'tweet-box', 'tweets'],
			 *
			 * showTweetFeed: {
			 * 		showUserFullNames: true,
             *		showSource: true,
             *		showActionReply: true,
             *		showActionRetweet: true,
             *		showActionFavorite: true,
             *		paging: {
             *			mode: 'more'
             *		}
             * },
			 * showTweetBox: false,
			 * ...
			 *
			 * Currently available widget parts are:
			 * 'tweets', 'connect-button', 'login-info', 'follow-button' and 'tweet-box'
			 * (This also is the default sequence.)
			 *
			 * Sample: ['tweet-box', 'tweets']	// displays the tweet box on top of the
			 *  								// tweet feed
			 */
			parts: null,

			/**
			 * A flag (true/false) that specifies whether to display a Tweet Feed
			 * or an object literal representing the configuration options for the
			 * Tweet Feed. This flag works in conjunction with the count parameter:
			 * - if count equals 0, no feed is displayed, ignoring showTweetFeed
			 * - if count not equals 0 and showTweetFeed equals false, no feed
			 *   is displayed
			 * {
			 *     autoConformToTwitterStyleguide: false,
			 *     								// Boolean - as the name implies, sets all options to confirm to Twitter's
			 *     								// styleguide regulations. Implies:
			 *     								// showTweetFeed: {
			 *     								//     showUserFullNames: null,	// null means: if usernames are shown, show
			 *     								//								// fullnames too
			 *     								//     showTwitterBird: true,
			 *									//     showActionReply: true,
			 *									//     showActionRetweet: true,
			 *									//     showActionFavorite: true
			 *     								// }
			 *
			 *     showTwitterBird: true,		// Boolean - show Twitter bird icon beneath the timestamp of a tweet, linking to
			 *     								// the tweeter's MiniProfile Web Intent
			 *
			 *     showTimestamp: true, 		// A flag (true/false) that specifies whether to display a tweet's timestamp
			 * 									// or an object literal representing the configuration options for the
			 * 									// timestamp.
			 * 									// {
			 * 									//     refreshInterval: 0,	// Time in seconds to be waited until the
			 * 									//							// timestamps of the displayed tweets get refreshed
		     *									// 							// 0 means no refreshing.
			 * 									// }
			 *
			 *     showSource: false,			// Boolean - Show info about the source of the tweet.
			 *
			 *     showGeoLocation: true,		// Boolean - Show geolocation info and link to Google maps.
			 *
			 *     showInReplyTo: true,			// Boolean - Show link to the "replied to" tweet (if available).
			 *
			 *     showActionReply: false,		// Boolean - Show tweet's 'Reply' action (supplies a link to popup the tweet's
			 *     								// Reply Web Intent)
			 *
			 *     showActionRetweet: false,	// Boolean - Show tweet's 'Retweet' action (supplies a link to popup the tweet's
			 *     								// Retweet Web Intent)
			 *
			 *     showActionFavorite: false,	// Boolean - Show tweet's 'Favorite' action (supplies a link to popup the tweet's
			 *     								// Favorite Web Intent)
			 *
			 *     showProfileImages: null,		// A flag (true/false) that specifies whether to display a profile image in
			 * 									// tweets. If the param is set to null (the default value), a profile image
			 * 									// is displayed only if the feed represents a user's list or the result of a
			 * 									// Twitter search.
			 *
			 *     showUserScreenNames: null,	// A flag (true/false/null) that specifies whether to display a username in
			 * 									// tweets. If the param is set to null (the default value), a username
			 * 									// is displayed only if the feed represents a user's list or the result of a
			 * 									// Twitter search.
			 *
			 *     showUserFullNames: false,	// A flag (true/false/null) that specifies whether to display a user's full name
			 * 									// in tweets. If the param is set to null, a user's full name
			 * 									// is displayed only if the feed represents a user's list or the result of a
			 * 									// Twitter search.
			 *
			 *     expandHovercards: false,		// Boolean - Show Hovercards in expanded mode.
			 *
			 *	   includeRetweets: true,		// Boolean - Include native retweets in a user's tweet feed
			 *
			 *     paging:						// An object literal representing the configuration options for the
			 *     {							// paging support, that specifies how more/earlier tweets can be loaded
			 *         mode: "none"		   		// by using the supplied UI controls (more/next buttons, scrollbar).
			 *     },                           // Accepted values for mode are: "none" | "more" | "prev-next" | "endless-scroll"
			 *									// if mode equals "endless-scroll" you have to set the height of the tweet feed
			 *									// element (.jta-tweet-list) in your CSS to get a scrollbar! You should also set
			 *									// the "overflow" attribute to "auto".
			 *
		     *     autorefresh:					// An object literal representing the configuration options for the
		     *	   {							// autorefresh behaviour.
		     *
		     *									// IMPORTANT: Please always keep in mind, that using the Twitter API is rate
		     *									// limited. Non-authenticated users are rated IP-based and you have only 150
		     *									// calls per hour available. Every retrieval of tweets counts and so does for
		     *									// example hovering over a profile image to show the hovercard. jTweetsAnywhere will
			 *									// always check the remaining count of free API calls before actually calling
			 *									// Twitter to avoid black listing your visitor's IP.
			 *
			 * 									// However - choose your settings wisely to keep your visitors happy. An update
			 *									// interval of 30 seconds on a feed that is updated averaged once per hour
			 *									// does not make sense and is a total waste of remaining API calls!
			 *
		     *	       mode: "none",            // Accepted values for mode are: "none" | "auto-insert" | "trigger-insert"
		     *									// "none" (the default value) - disables the autorefresh feature
		     *									// "auto-insert" - automatically insert the new tweets on top of the tweet feed
		     *									// "trigger-insert" - if new tweets arrived, show or update a button that displays
		     *									// the number of new tweets. These new tweets are inserted on top of the tweet
		     *									// feed, if the user clicks on the button.
		     *
		     *	       interval: 60,			// Time in seconds to be waited until the next request for new tweets. Minimum
		     *									// value is 30.
		     *
		     *         duration: 3600			// Time in seconds for how long the autorefresh will be active. After
		     *									// this period of time, autorefreshing will stop. A value of -1 means
		     *									// autorefresh for ever.
		     *    }
			 * }
			 */
			showTweetFeed: true,

			/**
			 * A flag (true/false) that specifies whether to display a Twitter "Follow
			 * Button".
			 */
			showFollowButton: false,

			/**
			 * A flag (true/false) that specifies whether to display a Twitter "Connect
			 * Button" or an object literal representing the configuration options for
			 * the "Tweet Box".
			 * {
			 *     size: 'medium'				// String - The size of the Connect Button. Valid values are: small, medium, large, xlarge
			 * }
			 */
			showConnectButton: false,

			/**
			 * A flag (true/false) that specifies whether to display Login Infos.
			 */
			showLoginInfo: false,

			/**
			 * A flag (true/false) that specifies whether to display a Twitter "Tweet
			 * Box" or an object literal representing the configuration options for
			 * the "Tweet Box".
			 * {
			 *     counter: true,				// Boolean - Display a counter in the Tweet Box for counting characters
			 *     width: 515,					// Number - The width of the Tweet Box in pixels
			 *     height: 65,					// Number - The height of the Tweet Box in pixels
			 *     label: "What's happening?",	// String - The text above the Tweet Box, a call to action
			 *     defaultContent: <none>,		// String - Pre-populated text in the Tweet Box. Useful for an @mention, a #hashtag, a link, etc.
			 *     onTweet: <none>				// Function - Specify a listener for when a tweet is sent from the Tweet Box. The listener receives two arguments: a plaintext tweet and an HTML tweet
			 * }
			 */
			showTweetBox: false,

			/**
			 * Identifies the locale for I18N support. The default locale is 'en'. To use this option you have to inlude the
			 * adequate locale script, jtweetsanywhere-{language}-{version}.js, e.g. jtweetsanywhere-de-1.3.0.js
			 */
			locale: 'en',

			/**
			 * A dataProvider is a function that delivers the "raw" Twitter data in
			 * JSON format. ATM internal use only!
			 */
			tweetDataProvider: defaultTweetDataProvider,
			rateLimitDataProvider: defaultRateLimitDataProvider,

			/**
			 * A decorator is a function that is responsible for constructing a certain
			 * element of the widget. Most of the decorators return a HTML string.
			 * Exceptions are the mainDecorator, which defines the basic sequence of
			 * the widget's components, plus the linkDecorator, the usernameDecorator
			 * and the hashtagDecorator which return the string that is supplied as a
			 * function param, enriched with the HTML tags.
			 *
			 * For details, see the implementations of the default decorators. Each
			 * default decorator can be overwritten by your own implementation.
			 */
			mainDecorator: defaultMainDecorator,

			tweetFeedDecorator: defaultTweetFeedDecorator,

			tweetDecorator: defaultTweetDecorator,
			tweetProfileImageDecorator: defaultTweetProfileImageDecorator,
			tweetBodyDecorator: defaultTweetBodyDecorator,
			tweetUsernameDecorator: defaultTweetUsernameDecorator,
			tweetTextDecorator: defaultTweetTextDecorator,

			tweetAttributesDecorator: defaultTweetAttributesDecorator,
			tweetTwitterBirdDecorator: defaultTweetTwitterBirdDecorator,
			tweetTimestampDecorator: defaultTweetTimestampDecorator,
			tweetSourceDecorator: defaultTweetSourceDecorator,
			tweetGeoLocationDecorator: defaultTweetGeoLocationDecorator,
			tweetInReplyToDecorator: defaultTweetInReplyToDecorator,
			tweetRetweeterDecorator: defaultTweetRetweeterDecorator,

			tweetActionsDecorator: defaultTweetActionsDecorator,
			tweetActionReplyDecorator: defaultTweetActionReplyDecorator,
			tweetActionRetweetDecorator: defaultTweetActionRetweetDecorator,
			tweetActionFavoriteDecorator: defaultTweetActionFavoriteDecorator,

			tweetFeedControlsDecorator: defaultTweetFeedControlsDecorator,
			tweetFeedControlsMoreBtnDecorator: defaultTweetFeedControlsMoreBtnDecorator,
			tweetFeedControlsPrevBtnDecorator: defaultTweetFeedControlsPrevBtnDecorator,
			tweetFeedControlsNextBtnDecorator: defaultTweetFeedControlsNextBtnDecorator,

			tweetFeedAutorefreshTriggerDecorator: defaultTweetFeedAutorefreshTriggerDecorator,
			tweetFeedAutorefreshTriggerContentDecorator: defaultTweetFeedAutorefreshTriggerContentDecorator,

			connectButtonDecorator: defaultConnectButtonDecorator,

			loginInfoDecorator: defaultLoginInfoDecorator,
			loginInfoContentDecorator: defaultLoginInfoContentDecorator,

			followButtonDecorator: defaultFollowButtonDecorator,

			tweetBoxDecorator: defaultTweetBoxDecorator,

			linkDecorator: defaultLinkDecorator,
			usernameDecorator: defaultUsernameDecorator,
			hashtagDecorator: defaultHashtagDecorator,

			loadingDecorator: defaultLoadingDecorator,
			errorDecorator: defaultErrorDecorator,
			noDataDecorator: defaultNoDataDecorator,

			/**
			 * Formatters are currently used for date format processing only.
			 *
			 * The tweetTimestampFormatter formats the tweet's timestamp to be shown
			 * in the tweet attributes section
			 *
			 * For details, see the implementation of the defaultTweetTimestampFormatter.
			 */
			tweetTimestampFormatter : defaultTweetTimestampFormatter,

			/**
			 * The tweetTimestampTooltipFormatter formats the tweet's timestamp to be shown
			 * in the tooltip when hovering over the timestamp link.
			 */
			tweetTimestampTooltipFormatter : defaultTweetTimestampTooltipFormatter,

			/**
			 * A visualizer is a function that is responsible for adding one or more
			 * elements to the DOM and thereby making them visible to the user.
			 * A visualizer might also be responsible to do the opposite effect:
			 * To remove one or more elements from the DOM.
			 *
			 * The tweetVisualizer gets called each time a tweet element should be
			 * appended or prepended to the tweet feed element.
			 *
			 * For details, see the implementation of the defaultTweetVisualizer.
			 *
			 * Each default visualizer can be overwritten by your own implementation.
			 */
			tweetVisualizer: defaultTweetVisualizer,

			/**
			 * The loadingIndicatorVisualizer gets called each time data is retrieved
			 * from Twitter to visualize the loading indicator. This visualizer is also
			 * used to hide the loading indicator.
			 *
			 * For details, see the implementation of the defaultLoadingIndicatorVisualizer.
			 */
			loadingIndicatorVisualizer: defaultLoadingIndicatorVisualizer,

			/**
			 * The autorefreshTriggerVisualizer will be called if the autorefresh
			 * trigger should be visualized or hidden.
			 *
			 * For details, see the implementation of the autorefreshTriggerVisualizer.
			 */
			autorefreshTriggerVisualizer: defaultAutorefreshTriggerVisualizer,

			/**
			 * An event handler is a function that gets called whenever the event you
			 * are interested in, occurs.
			 *
			 * The onDataRequest event handler will be called immediatly before calling
			 * Twitter to retrieve new data and gives you the opportunity to deny
			 * the call by returning false from the function.
			 *
			 * This feature might be used in conjunction with the paging feature,
			 * especially when using the "endless-scroll" paging mode, to avoid the
			 * exhaustion of remaining Twitter API calls, before the rate limit is
			 * reached. The stats parameter contains statistical infos and counters
			 * that you can examine to base your decision whether to return true or
			 * false.
			 */
			onDataRequestHandler: defaultOnDataRequestHandler,

			/**
			 * The onRateLimitData event handler is called each time
			 * jTweetsAnywhere retrieved the rate limit data from Twitter. The actual
			 * rate limit data is contained in the stats object.
			 */
			onRateLimitDataHandler: defaultOnRateLimitDataHandler,

			/**
			 * The onOptionsInitializingHandler event handler is called before initializing
			 * the user options.
			 */
			onOptionsInitializingHandler: defaultOnOptionsInitializingHandler,

			/**
			 * The onReadyHandler event handler is called once after the tweets are
			 * initially loaded and added to the DOM. Immediately after calling this
			 * event handler the onFeedPopulationHandler is called with the invocations
			 * parameter set to 0.
			 */
			onReadyHandler: defaultOnReadyHandler,

			/**
			 * The onFeedPopulationHandler event handler is called each time new tweets were added to
			 * the tweet feed - and thereby to the DOM. The supplied event handler should have the
			 * following interface: function(invocations, options) {}
			 * The invocations parameter contains the present # of calls to the handler, starting
			 * at 0 for the first call
			 * This event handler is called either for populating the feed by paging or by
			 * autorefreshing.
			 */
			onFeedPopulationHandler: defaultOnFeedPopulationHandler,

			_tweetFeedConfig:
			{
				autoConformToTwitterStyleguide: false,
				showTwitterBird: true,
				showTimestamp:
				{
					refreshInterval: 0
				},
				showSource: false,
				showGeoLocation: true,
				showInReplyTo: true,
				showActionReply: false,
				showActionRetweet: false,
				showActionFavorite: false,
				showProfileImages: null,
				showUserScreenNames: null,
				showUserFullNames: false,
				expandHovercards: false,
				includeRetweets: true,
				paging:
				{
					mode: "none",
					_limit: 0,
					_offset: 0
				},
				autorefresh:
				{
					mode: "none",
					interval: 60,
					duration: 3600,
					_startTime: null,
					_triggerElement: null
				},
				_pageParam: 0,
				_maxId: null,
				_recLevel: 0,
				_noData: false,
				_clearBeforePopulate: false
			},
			_tweetBoxConfig:
			{
				counter: true,
				width: 515,
				height: 65,
				label: null,
				defaultContent: '',
				onTweet: function(textTweet, htmlTweet) {}
			},
			_connectButtonConfig:
			{
				size: "medium"
			},
			_baseSelector: null,
			_baseElement: null,
			_tweetFeedElement: null,
			_customFeedElement: null,
			_tweetFeedControlsElement: null,
			_followButtonElement: null,
			_loginInfoElement: null,
			_connectButtonElement: null,
			_tweetBoxElement: null,
			_loadingIndicatorElement: null,
			_noDataElement: null,
			_tweetsCache: [],
			_autorefreshTweetsCache: [],
			_stats:
			{
				dataRequestCount: 0,
				rateLimitPreventionCount: 0,
				rateLimit:
				{
					remaining_hits: 150,
					hourly_limit: 150
				}
			},
			_resourceBundle: null,
			_populationCount: 0,
			isArtistsFeed: null
		}, config);

		/** save the plugin's base selector */
		options._baseSelector = this.selector;

		options.onOptionsInitializingHandler(options);
		setupOptions(options);

		/** no main decorator? nothing to do! */
		if (!options.mainDecorator)
		{
			return;
		}

		$.ajaxSetup({ cache: true });

		return this.each(function()
		{
			/** the DOM element, where to display the widget */
			options._baseElement = $(this);

			/** create the widget's necessary sub DOM elements */
			options._tweetFeedElement = options.tweetFeedDecorator ? $(options.tweetFeedDecorator(options)) : null;
			options._customFeedElement = (options.isArtistsFeed == true) ? options._tweetFeedElement.children() : options._tweetFeedElement;
			options._tweetFeedControlsElement = options.tweetFeedControlsDecorator ? $(options.tweetFeedControlsDecorator(options)) : null;
			options._followButtonElement = options.followButtonDecorator ? $(options.followButtonDecorator(options)) : null;
			options._tweetBoxElement = options.tweetBoxDecorator ? $(options.tweetBoxDecorator(options)) : null;
			options._connectButtonElement = options.connectButtonDecorator ? $(options.connectButtonDecorator(options)): null;
			options._loginInfoElement = options.loginInfoDecorator ? $(options.loginInfoDecorator(options)) : null;

			/** add the widget to the DOM */
			options.mainDecorator(options);

			populateTweetFeed(options);
			populateAnywhereControls(options);

			bindEventHandlers(options);

			setupAutorefresh(options);
		});
	};
	defaultMainDecorator = function(options)
	{
		/** if options.parts is not set, use default sequence of the widget's elements */
		var sequence = options.parts ? options.parts : ['tweets', 'connect-button', 'login-info', 'follow-button', 'tweet-box'];

		for (var i = 0, len = sequence.length; i < len; i++)
		{
			switch(sequence[i])
			{
				case 'tweets':
				{
					if (options._tweetFeedElement)
					{
						options._baseElement.append(options._tweetFeedElement);
					}
					if (options._tweetFeedControlsElement)
					{
						options._baseElement.append(options._tweetFeedControlsElement);
					}
					break;
				}
				case 'connect-button':
				{
					if (options._connectButtonElement)
					{
						options._baseElement.append(options._connectButtonElement);
					}
					break;
				}
				case 'login-info':
				{
					if (options._loginInfoElement)
					{
						options._baseElement.append(options._loginInfoElement);
					}
					break;
				}
				case 'follow-button':
				{
					if (options._followButtonElement)
					{
						options._baseElement.append(options._followButtonElement);
					}
					break;
				}
				case 'tweet-box':
				{
					if (options._tweetBoxElement)
					{
						options._baseElement.append(options._tweetBoxElement);
					}
					break;
				}
			}
		}
	};
	defaultTweetFeedControlsDecorator = function(options)
	{
		/** the default tweet feed's paging controls */
		var html = '';

		if (options._tweetFeedConfig.paging.mode == 'prev-next')
		{
			if (options.tweetFeedControlsPrevBtnDecorator)
			{
				html += options.tweetFeedControlsPrevBtnDecorator(options);
			}

			if (options.tweetFeedControlsNextBtnDecorator)
			{
				html += options.tweetFeedControlsNextBtnDecorator(options);
			}
		}
		else if (options._tweetFeedConfig.paging.mode == 'endless-scroll')
		{
			/** nothing to do here */
		}
		else
		{
			if (options.tweetFeedControlsMoreBtnDecorator)
			{
				html += options.tweetFeedControlsMoreBtnDecorator(options);
			}
		}

		return '<div class="jta-tweet-list-controls">' + html + '</div>';
	};
	defaultTweetFeedControlsMoreBtnDecorator = function(options)
	{
		return '<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-more">' +
			options._resourceBundle._('More') + '</span>';
	};
	defaultTweetFeedControlsPrevBtnDecorator = function(options)
	{
		return '<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-prev">' +
			options._resourceBundle._('Prev') + '</span>';
	};
	defaultTweetFeedControlsNextBtnDecorator = function(options)
	{
		return '<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-next">' +
			options._resourceBundle._('Next') + '</span>';
	};
	defaultTweetFeedAutorefreshTriggerDecorator = function(count, options)
	{
		var html = '';

		if (options.tweetFeedAutorefreshTriggerContentDecorator)
		{
			html = options.tweetFeedAutorefreshTriggerContentDecorator(count, options);
		}

		return '<div class="jta-tweet-list-autorefresh-trigger">' + html + '</div>';
	};
	defaultTweetFeedAutorefreshTriggerContentDecorator = function(count, options)
	{
		var content = options._resourceBundle.__('%count% new tweet', '%count% new tweets', count, { '%count%' : count });

		return '<span class="jta-tweet-list-autorefresh-trigger-content">' + content + '</span>';
	};
	defaultTweetFeedDecorator = function(options)
	{
		/** the default placeholder for the tweet feed is an unordered list */
		return '<ul class="jta-tweet-list"></ul>';
	};
	customFeedElement = function(options) {
		return '<ul class="jta-tweet-list"></ul>';
	}
	defaultTweetDecorator = function(tweet, options)
	{
		/**
		 * the default tweet is made of the optional user's profile image and the
		 * tweet body inside a list item element
		 */
		var html = '';

		if (options._tweetFeedConfig.showProfileImages)
		{
			html += options.tweetProfileImageDecorator(tweet, options);
		}

		if (options.tweetBodyDecorator)
		{
			html += options.tweetBodyDecorator(tweet, options);
		}

		html += '<div class="jta-clear">&nbsp;</div>';

		return '<li class="jta-tweet-list-item">' + html + '</li>';
	};
	defaultTweetProfileImageDecorator = function(tweet, options)
	{
		/** if tweet is a native retweet, use the retweet's profile */
		var t = tweet.retweeted_status || tweet;

		/** the default profile image decorator simply adds a link to the user's Twitter profile */
		var screenName = getScreenName(tweet);
		var imageUrl = getProfileImageUrl(options, t);

		var html =
			'<a class="jta-tweet-profile-image-link" href="http://twitter.com/' + screenName + '" target="_blank">' +
			'<img src="' + imageUrl + '" alt="' + screenName + '"' +
			(isAnywherePresent() ? '' : (' title="' + screenName + '"')) +
			'/>' +
			'</a>';

		return '<div class="jta-tweet-profile-image">' + html + '</div>';
	};
	defaultTweetBodyDecorator = function(tweet, options)
	{
		/** the default tweet body contains the tweet text and the tweet's creation date */
		var html = '';

		if (options.tweetTextDecorator)
		{
			html += options.tweetTextDecorator(tweet, options);
		}

		if (options.tweetAttributesDecorator)
		{
			html += options.tweetAttributesDecorator(tweet, options);
		}

		if (options.tweetActionsDecorator)
		{
			html += options.tweetActionsDecorator(tweet, options);
		}

		return '<div class="jta-tweet-body ' +
			(options._tweetFeedConfig.showProfileImages ? 'jta-tweet-body-list-profile-image-present' : '') + '">' +
			html +
			'</div>';
	};
	defaultTweetTextDecorator = function(tweet, options)
	{
		var tweetText = tweet.text;

		/**
		 * if usernames should be visible and tweet is a native retweet, use
		 * the original tweet text
		 */
		if (tweet.retweeted_status &&
			(
				options._tweetFeedConfig.showUserScreenNames ||
				options._tweetFeedConfig.showUserScreenNames == null ||
				options._tweetFeedConfig.showUserFullNames ||
				options._tweetFeedConfig.showUserFullNames == null
			)
		)
		{
			tweetText = tweet.retweeted_status.text;
		}

		/**
		 * the default tweet text decorator optionally marks links, @usernames,
		 * and #hashtags
		 */
		if (options.linkDecorator)
		{
			tweetText = options.linkDecorator(tweetText, options);
		}

		if (options.usernameDecorator)
		{
			tweetText = options.usernameDecorator(tweetText, options);
		}

		if (options.hashtagDecorator)
		{
			tweetText = options.hashtagDecorator(tweetText, options);
		}

		if (options._tweetFeedConfig.showUserScreenNames ||
			options._tweetFeedConfig.showUserFullNames ||
			tweet.retweeted_status &&
			(
				options._tweetFeedConfig.showUserScreenNames == null ||
				options._tweetFeedConfig.showUserFullNames == null
			)
		)
		{
			tweetText = options.tweetUsernameDecorator(tweet, options) + ' ' + tweetText;
		}

		return '<span class="jta-tweet-text">' + tweetText + '</span>';
	};
	defaultTweetUsernameDecorator = function(tweet, options)
	{
		/** if tweet is a native retweet, use the retweet's profile */
		var screenName = getScreenName(tweet);
		var fullName = getFullName(tweet);
		var htmlScreenName = null;
		if (screenName && (options._tweetFeedConfig.showUserScreenNames || (options._tweetFeedConfig.showUserScreenNames == null && tweet.retweeted_status)))
		{
			htmlScreenName =
				'<span class="jta-tweet-user-screen-name">' +
				'<a class="jta-tweet-user-screen-name-link" href="http://twitter.com/' + screenName + '" target="_blank">' +
				screenName +
				'</a>' +
				'</span>';
		}

		var htmlFullName = null;
		if (fullName && (options._tweetFeedConfig.showUserFullNames || (options._tweetFeedConfig.showUserFullNames == null && tweet.retweeted_status)))
		{
			htmlFullName =
				'<span class="jta-tweet-user-full-name">' +
				(htmlScreenName ? ' ' : '') +
				'<a class="jta-tweet-user-full-name-link" href="http://twitter.com/' + screenName + '" name="' + screenName + '" target="_blank">' +
				fullName +
				'</a>' +
				'</span>';
		}

		var html = '';

		if (htmlScreenName)
		{
			html += htmlScreenName;
		}

		if (htmlFullName)
		{
			if (htmlScreenName)
			{
				html += ' ';
			}

			html += htmlFullName;
		}

		if (htmlScreenName || htmlFullName)
		{
			html =
				'<span class="jta-tweet-user-name">' +
				(tweet.retweeted_status ? '' : '') +
				html +
				'</span>';
		}

		return html;
	};
	defaultTweetAttributesDecorator = function(tweet, options)
	{
		var html = '';

		if (options.tweetTwitterBirdDecorator ||
			options.tweetTimestampDecorator ||
			options.tweetSourceDecorator ||
			options.tweetGeoLocationDecorator ||
			options.tweetInReplyToDecorator ||
			(tweet.retweeted_status && options.tweetRetweeterDecorator)
		)
		{
			html += '<span class="jta-tweet-attributes">';

			if (options.tweetTwitterBirdDecorator)
			{
				html += options.tweetTwitterBirdDecorator(tweet, options);
			}

			if (options.tweetTimestampDecorator)
			{
				html += options.tweetTimestampDecorator(tweet, options);
			}

			if (options.tweetSourceDecorator)
			{
				html += options.tweetSourceDecorator(tweet, options);
			}

			if (options.tweetGeoLocationDecorator)
			{
				html += options.tweetGeoLocationDecorator(tweet, options);
			}

			if (options.tweetInReplyToDecorator)
			{
				html += options.tweetInReplyToDecorator(tweet, options);
			}

			if (tweet.retweeted_status && options.tweetRetweeterDecorator)
			{
				html += options.tweetRetweeterDecorator(tweet, options);
			}

			html += '</span>';
		}

		return html;
	};
	defaultTweetTimestampDecorator = function(tweet, options)
	{
		/** the default tweet timestamp decorator does a little bit of Twitter like formatting. */

		/** if tweet is a native retweet, use the retweet's timestamp */
		var tw = tweet.retweeted_status || tweet;

		/** reformat timestamp from Twitter, so IE is happy */
		var createdAt = formatDate(tw.created_at);

		/** format the timestamp by the tweetTimestampFormatter */
		var tweetTimestamp = options.tweetTimestampFormatter(createdAt, options);
		var tweetTimestampTooltip = options.tweetTimestampTooltipFormatter(createdAt);

		var html =
			'<span class="jta-tweet-timestamp">' +
			'<a class="jta-tweet-timestamp-link" data-timestamp="' + createdAt +
			'" href="http://twitter.com/' + getScreenName(tweet) + '/status/' + tw.id + '" target="_blank" title="' +
			tweetTimestampTooltip + '">' +
			tweetTimestamp +
			'</a>' +
			'</span>';

		return html;
	};
	defaultTweetTwitterBirdDecorator = function(tweet, options)
	{
		var screenName = getScreenName(tweet);
		var intentUrl = 'https://twitter.com/intent/user?screen_name=' + screenName;
		var linkTitle = screenName + ' ' + options._resourceBundle._('on Twitter');

		var html =
			'<span class="jta-tweet-twitter-bird">' +
			'<a href="' + intentUrl + '" target="_blank" title="' + linkTitle + '">' +
			'<span class="jta-tweet-twitter-bird-icon">&nbsp;</span>' +
			'</a>' +
			'</span>';

		return html;
	};
	defaultTweetTimestampTooltipFormatter = function(timeStamp)
	{
		var d = new Date(timeStamp);

		return d.toLocaleString();
	};
	defaultTweetTimestampFormatter = function(timeStamp, options)
	{
		var now = new Date();

		var diff = parseInt((now.getTime() - Date.parse(timeStamp)) / 1000);

		var tweetTimestamp = '';
		if (diff < 60)
		{
			tweetTimestamp += options._resourceBundle.__('%secs% second ago', '%secs% seconds ago', diff, { '%secs%': diff });
		}
		else if (diff < 3600)
		{
			var t = parseInt((diff + 30) / 60);
			tweetTimestamp += options._resourceBundle.__('%mins% minute ago', '%mins% minutes ago', t, { '%mins%': t });
		}
		else if (diff < 86400)
		{
			var t = parseInt((diff + 1800) / 3600);
			tweetTimestamp += options._resourceBundle.__('%hours% hour ago', '%hours% hours ago', t, { '%hours%': t });
		}
		else
		{
			var d = new Date(timeStamp);

			var monthName = options._resourceBundle._('$$monthNames');
			tweetTimestamp += monthName[d.getMonth()] + ' ' + d.getDate();

			if (d.getFullYear() < now.getFullYear())
			{
				tweetTimestamp += ', ' + d.getFullYear();
			}

			var t = parseInt((diff + 43200) / 86400);
			tweetTimestamp += ' (' + options._resourceBundle.__('%days% day ago', '%days% days ago', t, { '%days%': t }) + ')';
		}

		return tweetTimestamp;
	};
	defaultTweetSourceDecorator = function(tweet, options)
	{
		/** if tweet is a native retweet, use the retweet's source */
		var tw = tweet.retweeted_status || tweet;

		var source = tw.source.replace(/\&lt\;/gi,'<').replace(/\&gt\;/gi,'>').replace(/\&quot\;/gi,'"');
		var html =
			'<span class="jta-tweet-source">' +
			' ' + options._resourceBundle._('via') + ' ' +
			'<span class="jta-tweet-source-link">' +
			source +
			'</span>' +
			'</span>';

		return html;
	};
	defaultTweetGeoLocationDecorator = function(tweet, options)
	{
		var html = '';

		/** if tweet is a native retweet, use the retweet's source */
		var tw = tweet.retweeted_status || tweet;

		var q = null;
		if (tw.geo && tw.geo.coordinates)
		{
			q = tw.geo.coordinates.join();
		}
		else if (tw.place && tw.place.full_name)
		{
			q = tw.place.full_name;
		}

		if (q)
		{
			var location = options._resourceBundle._('here');
			if (tw.place && tw.place.full_name)
			{
				location = tw.place.full_name;
			}

			var link = 'http://maps.google.com/maps?q=' + q;

			html =
				'<span class="jta-tweet-location">' +
				' ' + options._resourceBundle._('from') + ' ' +
				'<a class="jta-tweet-location-link" href="' + link + '" target="_blank">' +
				location +
				'</a>' +
				'</span>';
		}

		return html;
	};
	defaultTweetInReplyToDecorator = function(tweet, options)
	{
		/** if tweet is a native retweet, use the retweet's source */
		var tw = tweet.retweeted_status || tweet;

		var html = '';

		if (tw.in_reply_to_status_id && tw.in_reply_to_screen_name)
		{
			var linkHref = 'http://twitter.com/' + tw.in_reply_to_screen_name + '/status/' + tw.in_reply_to_status_id;
			var linkText = options._resourceBundle._('in reply to') + ' ' + tw.in_reply_to_screen_name;

			html =
				'<span class="jta-tweet-inreplyto">' +
				' ' +
				'<a class="jta-tweet-inreplyto-link" href="' + linkHref + '" target="_blank">' +
				linkText +
				'</a>' +
				'</span>';
		}

		return html;
	};
	defaultTweetRetweeterDecorator = function(tweet, options)
	{
		var html = '';

		if (tweet.retweeted_status)
		{
			var screenName = getUserScreenName(tweet);

			var rtc = (tweet.retweeted_status.retweet_count || 0) - 1;

			var link =
				'<a class="jta-tweet-retweeter-link" href="http://twitter.com/' + screenName + '" target="_blank">' +
				screenName +
				'</a>';

			var rtcount = options._resourceBundle.__(' and %rtc% other', ' and %rtc% others', rtc, { '%rtc%': rtc });

			html =
				'<br/>' +
				'<span class="jta-tweet-retweeter">' +
				options._resourceBundle._('Retweeted by') + ' ' + link +
				(rtc > 0 ? rtcount : '') +
				'</span>';
		}

		return html;
	};
	defaultTweetActionsDecorator = function(tweet, options)
	{
		var html = '';

		if (options.tweetActionReplyDecorator ||
			options.tweetActionRetweetDecorator ||
			options.tweetActionFavoriteDecorator
		)
		{
			html += '<span class="jta-tweet-actions">';

			if (options.tweetActionReplyDecorator)
			{
				html += options.tweetActionReplyDecorator(tweet, options);
			}

			if (options.tweetActionRetweetDecorator)
			{
				html += options.tweetActionRetweetDecorator(tweet, options);
			}

			if (options.tweetActionFavoriteDecorator)
			{
				html += options.tweetActionFavoriteDecorator(tweet, options);
			}

			html += '</span>';
		}

		return html;
	};
	defaultTweetActionReplyDecorator = function(tweet, options)
	{
		var intentUrl = 'https://twitter.com/intent/tweet?in_reply_to=' + tweet.id;
		var actionLabel = options._resourceBundle._('Reply');

		var html =
			'<span class="jta-tweet-action-reply">' +
			'<a href="' + intentUrl + '">' + actionLabel + '</a>' +
			'</span>';

		return html;
	};
	defaultTweetActionRetweetDecorator = function(tweet, options)
	{
		var intentUrl = 'https://twitter.com/intent/retweet?tweet_id=' + tweet.id;
		var actionLabel = options._resourceBundle._('Retweet');

		var html =
			'<span class="jta-tweet-action-retweet">' +
			'<a href="' + intentUrl + '">' + actionLabel + '</a>' +
			'</span>';

		return html;
	};
	defaultTweetActionFavoriteDecorator = function(tweet, options)
	{
		var intentUrl = 'https://twitter.com/intent/favorite?tweet_id=' + tweet.id;
		var actionLabel = options._resourceBundle._('Favorite');

		var html =
			'<span class="jta-tweet-action-favorite">' +
			'<a href="' + intentUrl + '">' + actionLabel + '</a>' +
			'</span>';

		return html;
	};
	defaultConnectButtonDecorator = function(options)
	{
		/** the default placeholder for the @Anywhere ConnectButton */
		return '<div class="jta-connect-button"></div>';
	};
	defaultLoginInfoDecorator = function(options)
	{
		/** the default placeholder for the LoginInfo */
		return '<div class="jta-login-info"></div>';
	};
	defaultLoginInfoContentDecorator = function(options, T)
	{
		/**
		 * the default markup of the LoginInfo content: the user's profile image, the
		 * user's screen_name and a "button" to sign out
		 */
		var html = '';

		if (T.isConnected())
		{
			var screenName = T.currentUser.data('screen_name');
			var imageUrl = T.currentUser.data('profile_image_url');

			html =
				'<div class="jta-login-info-profile-image">' +
				'<a href="http://twitter.com/' + screenName + '" target="_blank">' +
				'<img src="' + imageUrl + '" alt="' + screenName + '" title="' + screenName + '"/>' +
				'</a>' +
				'</div>' +
				'<div class="jta-login-info-block">' +
				'<div class="jta-login-info-screen-name">' +
				'<a href="http://twitter.com/' + screenName + '" target="_blank">' + screenName + '</a>' +
				'</div>' +
				'<div class="jta-login-info-sign-out">' +
				options._resourceBundle._('Sign out') +
				'</div>' +
				'</div>' +
				'<div class="jta-clear">&nbsp;</div>'
				;
		}

		return html;
	};
	defaultFollowButtonDecorator = function(options)
	{
		/** the default placeholder for the @Anywhere FollowButton */
		return '<div class="jta-follow-button"></div>';
	};
	defaultTweetBoxDecorator = function(options)
	{
		/** the default placeholder for the @Anywhere TweetBox */
		return '<div class="jta-tweet-box"></div>';
	};
	defaultLinkDecorator = function(text, options)
	{
		/** the regex to markup links */
		return text.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1" class="jta-tweet-a jta-tweet-link" target="_blank" rel="nofollow">$1<\/a>');
	};
	defaultUsernameDecorator = function(text, options)
	{
		/**
		 * the regex to markup @usernames. if @Anywhere is present the task is left to
		 * them
		 */
		return isAnywherePresent() ? text : text.replace(/\B@(\w+)/gi,'@<a href="http://twitter.com/$1" class="jta-tweet-a twitter-anywhere-user" target="_blank" rel="nofollow">$1<\/a>');
	};
	defaultHashtagDecorator = function(text, options)
	{
		/** the regex to markup #hashtags */
		return text.replace(/#([a-zA-Z0-9_]+)/gi,'<a href="http://search.twitter.com/search?q=%23$1" class="jta-tweet-a jta-tweet-hashtag" title="#$1" target="_blank" rel="nofollow">#$1<\/a>');
	};
	defaultLoadingDecorator = function(options)
	{
		/** the default loading decorator simply says: loading ... */
		return '<li class="jta-loading">' + options._resourceBundle._('loading') + ' ...</li>';
	};
	defaultErrorDecorator = function(errorText, options)
	{
		/** the default error decorator shows the error message */
		return '<li class="jta-error">' + options._resourceBundle._('ERROR') + ': ' + errorText + '</li>';
	};
	defaultNoDataDecorator = function(options)
	{
		/** the default no-data decorator simply says: No more data */
		return '<li class="jta-nodata">' + options._resourceBundle._('No more data') + '</li>';
	};

	defaultTweetFilter = function(tweet, options)
	{
		return true;
	};

	defaultTweetVisualizer = function(tweetFeedElement, tweetElement, inserter, options)
	{
		/** insert (append/prepend) the tweetElement to the tweetFeedElement */
		tweetFeedElement[inserter](tweetElement);
	};
	defaultLoadingIndicatorVisualizer = function(tweetFeedElement, loadingIndicatorElement, options, callback)
	{
		defaultVisualizer(tweetFeedElement, loadingIndicatorElement, 'append', 'fadeIn', 600, 'fadeOut', 200, callback);
	};
	defaultAutorefreshTriggerVisualizer = function(tweetFeedElement, triggerElement, options, callback)
	{
		defaultVisualizer($('.what-artists .wrapper'), triggerElement, 'append', 'fadeIn', 600, 'fadeOut', 200, callback);
	};
	defaultVisualizer = function(container, element, inserter, effectIn, durationIn, effectOut, durationOut, callback)
	{
		/**
		 * if param container is null element has to be removed from
		 * the DOM, else element has to be inserted in container
		 *
		 * if param callback is not null, the callback function must be called
		 * in any case, if the visualizer is done
		 */
		var cb = function()
		{
			if (callback)
			{
				callback();
			}
		};

		if (container)
		{
			element.hide();
			container[inserter](element);
			element[effectIn](durationIn, cb);
		}
		else
		{
			element[effectOut](durationOut, function()
			{
				element.remove();
				cb();
			});
		}
	};
	defaultOnDataRequestHandler = function(stats, options)
	{
		return true;
	};
	defaultOnRateLimitDataHandler = function(stats, options)
	{
	};
	defaultOnOptionsInitializingHandler = function(options)
	{
	};
	defaultOnReadyHandler = function(options)
	{
	};
	defaultOnFeedPopulationHandler = function(invocations, options)
	{
	};
	updateLoginInfoElement = function(options, T)
	{
		/** update the content of the LoginInfo element */
		if (options._loginInfoElement && options.loginInfoContentDecorator)
		{
			options._loginInfoElement.children().remove();
			options._loginInfoElement.append(options.loginInfoContentDecorator(options, T));
			$(options._baseSelector + ' .jta-login-info-sign-out').bind('click', function()
			{
				twttr.anywhere.signOut();
			});
		}
	};
	isAnywherePresent = function()
	{
		/** check, if @Anywhere is present */
		return (typeof(twttr) != 'undefined' && typeof(twttr.anywhere) != 'undefined');
	};
	clearTweetFeed = function(options)
	{
		if (options._tweetFeedElement)
		{
			options._tweetFeedElement.empty();
		}
	};
	setupOptions = function(options)
	{
		options._resourceBundle = JTA_I18N.getResourceBundle('jTweetsAnywhere', options.locale);

		options._tweetBoxConfig.label = options._resourceBundle._("What's happening?");

		if (options.parts && !(options.parts instanceof Array))
		{
			options.parts = [options.parts];
		}

		/** if username is an array, create the search query and flatten username */
		if (typeof(options.username) != 'string')
		{
			if (!options.searchParams)
			{
				options.searchParams = ['q=from:' + options.username.join(" OR from:")];
			}

			options.username = options.username[0];
		}

		/**
		 * if showTweetFeed is not set to a boolean value, we expect the configuration of
		 * the tweet feed
		 */
		if (typeof(options.showTweetFeed) == 'object')
		{
			$.extend(true, options._tweetFeedConfig, options.showTweetFeed);
		}

		/**
		 * if showTweetBox is not set to a boolean value, we expect the configuration of
		 * the TweetBox
		 */
		if (typeof(options.showTweetBox) == 'object')
		{
			$.extend(true, options._tweetBoxConfig, options.showTweetBox);
			options.showTweetBox = true;
		}

		/**
		 * if showConnectButton is not set to a boolean value, we expect the
		 * configuration of the Connect Button
		 */
		if (typeof(options.showConnectButton) == 'object')
		{
			options._connectButtonConfig = options.showConnectButton;
			options.showConnectButton = true;
		}

		/** to be compatible, check the deprecated option 'tweetProfileImagePresent' */
		if (options._tweetFeedConfig.showProfileImages == null)
		{
			options._tweetFeedConfig.showProfileImages = options.tweetProfileImagePresent;
		}

		/**
		 * if _tweetFeedConfig.showProfileImages is not set to a boolean value,
		 * we decide to show a profile image if the feed represents a user's
		 * list or the results of a Twitter search
		 */
		if (options._tweetFeedConfig.showProfileImages == null)
		{
			options._tweetFeedConfig.showProfileImages = (options.list || options.searchParams) && options.tweetProfileImageDecorator;
		}

		/** handle the autoConformToTwitterStyleguide */
		if (options._tweetFeedConfig.autoConformToTwitterStyleguide)
		{
			options._tweetFeedConfig.showUserFullNames = null;
			options._tweetFeedConfig.showTwitterBird = true;
			options._tweetFeedConfig.showActionReply = true;
			options._tweetFeedConfig.showActionRetweet = true;
			options._tweetFeedConfig.showActionFavorite = true;
		}

		/**
		 * if _tweetFeedConfig.showUserScreenNames is not set to a boolean value,
		 * we decide to show a username if the feed represents a user's
		 * list or the results of a Twitter search or a tweet is a native retweet
		 */
		if (options._tweetFeedConfig.showUserScreenNames == null)
		{
			if (options.list || options.searchParams)
			{
				options._tweetFeedConfig.showUserScreenNames = true;
			}

			if (!options.tweetUsernameDecorator)
			{
				options._tweetFeedConfig.showUserScreenNames = false;
			}
		}

		/**
		 * if _tweetFeedConfig.showUserFullNames is not set to a boolean value,
		 * we decide to show a user's full name if the feed represents a user's
		 * list or the results of a Twitter search or a tweet is a native retweet
		 */
		if (options._tweetFeedConfig.showUserFullNames == null)
		{
			if (options.list || options.searchParams)
			{
				options._tweetFeedConfig.showUserFullNames = true;
			}

			if (!options.tweetUsernameDecorator)
			{
				options._tweetFeedConfig.showUserFullNames = false;
			}
		}

		options.count = validateRange(options.count, 0, options.searchParams ? 100 : 20);

		options._tweetFeedConfig.autorefresh.interval = Math.max(30, options._tweetFeedConfig.autorefresh.interval);

		options._tweetFeedConfig.paging._offset = 0;
		options._tweetFeedConfig.paging._limit = options.count;

		/** decide which parts of the widget will be displayed */
		evaluateWidgetParts(options);

		/** decide which parts of a tweet will be displayed */
		evaluateTweetParts(options);
	};
	evaluateWidgetParts = function(options)
	{
		evaluateWidgetPartsOption(options);

		/**
		 * internally, the decision of what parts of a widget are to be
		 * displayed is based on the existence of the decorators
		 */
		if (options.count == 0 || !options.showTweetFeed)
		{
			options.tweetFeedDecorator = null;
			options.tweetFeedControlsDecorator = null;
		}

		if (options._tweetFeedConfig.paging.mode == 'none')
		{
			options.tweetFeedControlsDecorator = null;
		}

		if (!options.showFollowButton)
		{
			options.followButtonDecorator = null;
		}

		if (!options.showTweetBox)
		{
			options.tweetBoxDecorator = null;
		}

		if (!options.showConnectButton)
		{
			options.connectButtonDecorator = null;
		}

		if (!options.showLoginInfo)
		{
			options.loginInfoDecorator = null;
		}
	};
	evaluateWidgetPartsOption = function(options)
	{
		if (options.parts)
		{
			/**
			 * if parts option is set, switch on the corresponding show... option, only
			 * if not yet set
			 */
			for (var i = 0, len = options.parts.length; i < len; i++)
			{
				if (options.parts[i] == 'tweets' && !options.showTweetFeed)
				{
					options.showTweetFeed = true;
				}
				if (options.parts[i] == 'connect-button' && !options.showConnectButton)
				{
					options.showConnectButton = true;
				}
				if (options.parts[i] == 'login-info' && !options.showLoginInfo)
				{
					options.showLoginInfo = true;
				}
				if (options.parts[i] == 'follow-button' && !options.showFollowButton)
				{
					options.showFollowButton = true;
				}
				if (options.parts[i] == 'tweet-box' && !options.showTweetBox)
				{
					options.showTweetBox = true;
				}
			}
		}
	};
	evaluateTweetParts = function(options)
	{
		if (!options._tweetFeedConfig.showTwitterBird)
		{
			options.tweetTwitterBirdDecorator = null;
		}

		if (!options._tweetFeedConfig.showTimestamp)
		{
			options.tweetTimestampDecorator = null;
		}

		if (!options._tweetFeedConfig.showSource)
		{
			options.tweetSourceDecorator = null;
		}

		if (!options._tweetFeedConfig.showGeoLocation)
		{
			options.tweetGeoLocationDecorator = null;
		}

		if (!options._tweetFeedConfig.showInReplyTo)
		{
			options.tweetInReplyToDecorator = null;
		}

		if (!options._tweetFeedConfig.showActionReply)
		{
			options.tweetActionReplyDecorator = null;
		}

		if (!options._tweetFeedConfig.showActionRetweet)
		{
			options.tweetActionRetweetDecorator = null;
		}

		if (!options._tweetFeedConfig.showActionFavorite)
		{
			options.tweetActionFavoriteDecorator = null;
		}
	};
	setupAutorefresh = function(options)
	{
		options._tweetFeedConfig.autorefresh._startTime = new Date().getTime();

		startAutorefresh(options);
		startTimestampRefresh(options);
	};
	populateTweetFeed = function(options)
	{
		/** if a tweet feed is to be displayed, get the tweets and show them */
		if (options.tweetDecorator && options._tweetFeedElement)
		{
			getPagedTweets(options, function(tweets, options)
			{
				if (options._tweetFeedConfig._clearBeforePopulate)
				{
					clearTweetFeed(options);
				}

				hideLoadingIndicator(options, function()
				{
					/** process the tweets */
					$.each(tweets, function(idx, tweet)
					{
						/** decorate the tweet and give it to the tweet visualizer */
						options.tweetVisualizer(
							options._customFeedElement,
							$(options.tweetDecorator(tweet, options)),
							'append',
							options
						);
					});

					if (options._tweetFeedConfig._noData && options.noDataDecorator && !options._tweetFeedConfig._noDataElement)
					{
						options._tweetFeedConfig._noDataElement = $(options.noDataDecorator(options));
						options._tweetFeedElement.append(options._tweetFeedConfig._noDataElement);
					}

					if (options._tweetFeedConfig._clearBeforePopulate)
					{
						options._tweetFeedElement.scrollTop(0);
					}

					addHovercards(options);

					/**
					 * Here - if a tweet feed is configured - all initially loaded
					 * tweets were given to the configured tweet visualizer and should
					 * be inserted in the DOM now. Exception: A user supplied tweet
					 * visualizer that caches the tweets for later display, without
					 * inserting them immediatly in the DOM.
					 */
					if (options._populationCount < 1)
					{
						options.onReadyHandler(options);
					}

					options.onFeedPopulationHandler(options._populationCount++, options);
				});
			});
		}
	};
	populateTweetFeedMore = function(options) {
		/** if a tweet feed is to be displayed, get the tweets and show them */
		if (options.tweetDecorator && options._tweetFeedElement)
		{
			getPagedTweets(options, function(tweets, options)
			{
				if (options._tweetFeedConfig._clearBeforePopulate)
				{
					clearTweetFeed(options);
				}

				hideLoadingIndicator(options, function()
				{
					/** process the tweets */
					$.each(tweets, function(idx, tweet)
					{
					//	alert('hell oworld');
						/** decorate the tweet and give it to the tweet visualizer */
						options.tweetVisualizer(
							$('.jta-tweet-flexslider .jta-tweet-list'),
							$(options.tweetDecorator(tweet, options)),
							'append',
							options
						);
					});

					if (options._tweetFeedConfig._noData && options.noDataDecorator && !options._tweetFeedConfig._noDataElement)
					{
						options._tweetFeedConfig._noDataElement = $(options.noDataDecorator(options));
						options._tweetFeedElement.append(options._tweetFeedConfig._noDataElement);
					}

					if (options._tweetFeedConfig._clearBeforePopulate)
					{
						options._tweetFeedElement.scrollTop(0);
					}

					addHovercards(options);

					/**
					 * Here - if a tweet feed is configured - all initially loaded
					 * tweets were given to the configured tweet visualizer and should
					 * be inserted in the DOM now. Exception: A user supplied tweet
					 * visualizer that caches the tweets for later display, without
					 * inserting them immediatly in the DOM.
					 */
					if (options._populationCount < 1)
					{
						options.onReadyHandler(options);
					}

					options.onFeedPopulationHandler(options._populationCount++, options);
				});
			});
		}
	}
	populateTweetFeed2 = function(options)
	{
		if (options._tweetFeedElement && options._autorefreshTweetsCache.length > 0)
		{
			if (options._tweetFeedConfig.autorefresh.mode == 'trigger-insert')
			{
			//	alert('1 is true');
				if (options._tweetFeedConfig.autorefresh._triggerElement)
				{
			//		alert('2 is true');
					if (options.tweetFeedAutorefreshTriggerContentDecorator)
					{
				//		alert('3 is true');
				//		console.log(options._tweetFeedConfig.autorefresh._triggerElement);
						options._tweetFeedConfig.autorefresh._triggerElement.html(
							options.tweetFeedAutorefreshTriggerContentDecorator(options._autorefreshTweetsCache.length, options)
						);
					}
				}
				else
				{
					if (options.tweetFeedAutorefreshTriggerDecorator)
					{
						options._tweetFeedConfig.autorefresh._triggerElement =
							$(options.tweetFeedAutorefreshTriggerDecorator(options._autorefreshTweetsCache.length, options));
						options._tweetFeedConfig.autorefresh._triggerElement.bind('click', function()
						{
							options.autorefreshTriggerVisualizer(
								null,
								options._tweetFeedConfig.autorefresh._triggerElement,
								options,
								function()
								{
									insertTriggerTweets(options);
								}
							);
							options._tweetFeedConfig.autorefresh._triggerElement = null;
						});

						options.autorefreshTriggerVisualizer(options._tweetFeedElement, options._tweetFeedConfig.autorefresh._triggerElement, options);
					}
				}
			}
			else
			{
				insertTriggerTweets(options);
			}
		}
	};
	insertTriggerTweets = function(options)
	{
		/** populate the tweet feed with tweets from the autorefresh cache */
		if (options.tweetDecorator && options._autorefreshTweetsCache.length > 0)
		{
			/** process the autorefresh cache */
			while (options._autorefreshTweetsCache.length > 0)
			{
				/** get the last tweet and remove it from the autorefresh cache */
				var tweet = options._autorefreshTweetsCache.pop();

				/** put that tweet on top of the tweets cache */
				options._tweetsCache.unshift(tweet);

				/** adjust paging offset */
				options._tweetFeedConfig.paging._offset++;

				/** decorate the tweet and give it to the tweet visualizer */
			//	alert('heyo');
				
				options.tweetVisualizer(
					$('.jta-tweet-flexslider .jta-tweet-list'),
					$(options.tweetDecorator(tweet, options)),
					'prepend',
					options
				);
			}

			addHovercards(options);

			options.onFeedPopulationHandler(options._populationCount++, options);
		}
	};
	addHovercards = function(options)
	{
		if (isAnywherePresent())
		{
			/**
			 * if @Anywhere is present, append Hovercards to @username and
			 * profile images
			 */
			twttr.anywhere(function(T)
			{
				T(options._baseSelector + ' .jta-tweet-list').hovercards({expanded: options._tweetFeedConfig.expandHovercards});
				T(options._baseSelector + ' .jta-tweet-profile-image img').hovercards(
				{
					expanded: options._tweetFeedConfig.expandHovercards,
					username: function(node) { return node.alt; }
				});
				T(options._baseSelector + ' .jta-tweet-retweeter-link').hovercards(
				{
					expanded: options._tweetFeedConfig.expandHovercards,
					username: function(node) { return node.text; }
				});
				T(options._baseSelector + ' .jta-tweet-user-screen-name-link').hovercards(
				{
					expanded: options._tweetFeedConfig.expandHovercards,
					username: function(node) { return node.text; }
				});
				T(options._baseSelector + ' .jta-tweet-user-full-name-link').hovercards(
				{
					expanded: options._tweetFeedConfig.expandHovercards,
					username: function(node) { return node.name; }
				});
			});
		}
	};
	populateAnywhereControls = function(options)
	{
		if (isAnywherePresent())
		{
			twttr.anywhere(function(T)
			{
				/** optionally add an @Anywhere TweetBox */
				if (options.tweetBoxDecorator)
				{
					T(options._baseSelector + ' .jta-tweet-box').tweetBox(options._tweetBoxConfig);
				}

				/** optionally add an @Anywhere FollowButton */
				if (options.followButtonDecorator)
				{
					T(options._baseSelector + ' .jta-follow-button').followButton(options.username);
				}

				/** optionally add an @Anywhere ConnectButton */
				if (options.connectButtonDecorator)
				{
					var o = $.extend(
					{
						authComplete: function(user)
						{
							/** display/update login infos on connect/signin event */
							updateLoginInfoElement(options, T);
						},
						signOut: function()
						{
							/** display/update login infos on signout event */
							updateLoginInfoElement(options, T);
						}
					}, options._connectButtonConfig);

					T(options._baseSelector + ' .jta-connect-button').connectButton(o);

					/** display/update login infos */
					updateLoginInfoElement(options, T);
				}
			});
		}
	};
	bindEventHandlers = function(options)
	{
		if (options.tweetFeedControlsDecorator)
		{
			if (options._tweetFeedConfig.paging.mode == 'prev-next')
			{
				$(options._baseSelector + ' .jta-tweet-list-controls-button-prev').bind('click', function()
				{
					if (!isLoading(options) && options._tweetFeedConfig.paging._offset > 0)
					{
						prevPage(options, true);
					}
				});
				$(options._baseSelector + ' .jta-tweet-list-controls-button-next').bind('click', function()
				{
					if (!isLoading(options))
					{
						nextPage(options, true);
					}
				});
			}
			else if (options._tweetFeedConfig.paging.mode == 'endless-scroll')
			{
				options._tweetFeedElement.bind("scroll", function()
				{
				    if (!isLoading(options) && ($(this)[0].scrollHeight - $(this).scrollTop() == $(this).outerHeight()))
				    {
				    	nextPage(options, false);
				    }
				});
			}
			else
			{
				$(options._baseSelector + ' .jta-tweet-list-controls-button-more').bind('click', function()
				{
					if (!isLoading(options))
					{
						nextPageMore(options, false);
					}
				});
			}
		}
	};
	nextPage = function(options, flClear)
	{
		doPage(options, flClear, Math.min(options._tweetFeedConfig.paging._offset + options._tweetFeedConfig.paging._limit, options._tweetsCache.length));
	};
	nextPageMore = function(options, flClear) {
		doPageMore(options, flClear, Math.min(options._tweetFeedConfig.paging._offset + options._tweetFeedConfig.paging._limit, options._tweetsCache.length));
	}
	prevPage = function(options, flClear)
	{
		doPage(options, flClear, Math.max(0, options._tweetFeedConfig.paging._offset - options._tweetFeedConfig.paging._limit));
	};
	doPage = function(options, flClear, newOffset)
	{
		options._tweetFeedConfig.paging._offset = newOffset;
		options._tweetFeedConfig._clearBeforePopulate = flClear;

		populateTweetFeed(options);
	};
	doPageMore = function(options, flClear, newOffset) {
		options._tweetFeedConfig.paging._offset = newOffset;
		options._tweetFeedConfig._clearBeforePopulate = flClear;
		populateTweetFeedMore(options);
	}
	startAutorefresh = function(options)
	{
		if (options._tweetFeedConfig.autorefresh.mode != 'none' &&
			options._tweetFeedConfig.paging.mode != 'prev-next' &&
			options._tweetFeedConfig.autorefresh.duration != 0 &&
			(
				options._tweetFeedConfig.autorefresh.duration < 0 ||
				(new Date().getTime() - options._tweetFeedConfig.autorefresh._startTime) <= options._tweetFeedConfig.autorefresh.duration * 1000
			)
		)
		{
			window.setTimeout(function() { processAutorefresh(options); }, options._tweetFeedConfig.autorefresh.interval * 1000);
		}
	};
	stopAutorefresh = function(options)
	{
		options._tweetFeedConfig.autorefresh.duration = 0;
	};
	processAutorefresh = function(options)
	{
		if (options._tweetFeedConfig.autorefresh.duration != 0)
		{
			/** load the data ... */
			getRateLimitedData(options, true, getFeedUrl(options, false), function(data, options)
			{
				/** reverse the sequence of the autorefresh tweets ... */
				var tweets = (data.results || data).slice(0);
				tweets.reverse();

				/** ...then process them */
				$.each(tweets, function(idx, tweet)
				{
					/** Snowflake support: just update ids that are currently used */
					if (tweet.id_str)
					{
						tweet.id = tweet.id_str;
					}

					if (tweet.in_reply_to_status_id_str)
					{
						tweet.in_reply_to_status_id = tweet.in_reply_to_status_id_str;
					}

					if (tweet.retweeted_status)
					{
    					if (tweet.retweeted_status.id_str)
    					{
    						tweet.retweeted_status.id = tweet.retweeted_status.id_str;
    					}

    					if (tweet.retweeted_status.in_reply_to_status_id_str)
    					{
    						tweet.retweeted_status.in_reply_to_status_id = tweet.retweeted_status.in_reply_to_status_id_str;
    					}
					}

					/** if this tweet is already in one of the tweet caches, ignore it */
					if (!isTweetInAutorefreshCache(tweet, options) && !isTweetInCache(tweet, options))
					{
						/** optionally filter tweet ... */
						if (options.tweetFilter(tweet, options))
						{
							/** ... then put it to the top of the autorefresh cache */
							options._autorefreshTweetsCache.unshift(tweet);
						}
					}
				});

				populateTweetFeed2(options);
			});

			/** restart autorefresh */
			startAutorefresh(options);
		}
	};
	startTimestampRefresh = function(options)
	{
		if (
			options.tweetTimestampDecorator &&
			typeof(options._tweetFeedConfig.showTimestamp) == 'object' &&
			options._tweetFeedConfig.showTimestamp.refreshInterval > 0
		)
		{
			window.setTimeout(function() { processTimestampRefresh(options); }, options._tweetFeedConfig.showTimestamp.refreshInterval * 1000);
		}
	};
	processTimestampRefresh = function(options)
	{
		$.each(options._tweetFeedElement.find('.jta-tweet-timestamp-link'), function(idx, element)
		{
			var dataTimestamp = $(element).attr('data-timestamp');

			$(element).html(options.tweetTimestampFormatter(dataTimestamp, options));
		});

		startTimestampRefresh(options);
	};
	isTweetInCache = function(tweet, options)
	{
		var l = options._tweetsCache.length;

		for (var i = 0; i < l; i++)
		{
			if (tweet.id == options._tweetsCache[i].id)
			{
				return true;
			}
		}

		return false;
	};
	isTweetInAutorefreshCache = function(tweet, options)
	{
		var l = options._autorefreshTweetsCache.length;

		for (var i = 0; i < l; i++)
		{
			if (tweet.id == options._autorefreshTweetsCache[i].id)
			{
				return true;
			}
		}

		return false;
	};
	showLoadingIndicator = function(options)
	{
		if (options._tweetFeedElement && options.loadingDecorator && !options._loadingIndicatorElement)
		{
			options._loadingIndicatorElement = $(options.loadingDecorator(options));
			options.loadingIndicatorVisualizer(options._tweetFeedElement, options._loadingIndicatorElement, options, null);
			options._tweetFeedElement.scrollTop(1000000);
		}
	};
	hideLoadingIndicator = function(options, callback)
	{
		if (options._loadingIndicatorElement)
		{
			options.loadingIndicatorVisualizer(null, options._loadingIndicatorElement, options, callback);
			options._loadingIndicatorElement = null;
		}
		else
		{
			if (callback)
			{
				callback();
			}
		}
	};
	isLoading = function(options)
	{
		return options._loadingIndicatorElement != null;
	};
    formatDate = function(dateStr)
	{
    	return dateStr.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3');
    };
    getUserScreenName = function(tweet)
    {
		var screenName = tweet.user ? tweet.user.screen_name : false || tweet.from_user;

		return screenName;
    };
    getScreenName = function(tweet)
    {
		var t = tweet.retweeted_status || tweet;
		var screenName = t.user ? t.user.screen_name : false || t.from_user;

		return screenName;
    };
    getFullName = function(tweet)
    {
		var t = tweet.retweeted_status || tweet;
		if(t['user']) {
			var fullName = t.user ? t.user.name : undefined;
		} else {
			var fullName = t.from_user_name ? t.from_user_name : undefined;
		}
		return fullName;
    };
	validateRange = function(num, lo, hi)
	{
		if (num < lo)
			num = lo;

		if (num > hi)
			num = hi;

		return num;
	};
    showError = function(options, errorText)
	{
    	if (options.errorDecorator && options._tweetFeedElement)
    	{
    		options._tweetFeedElement.append(options.errorDecorator(errorText, options));
    	}
    };
    getPagedTweets = function(options, callback)
    {
    	options._tweetFeedConfig._recLevel = 0;

    	getRecPagedTweets(options, options._tweetFeedConfig.paging._offset, options._tweetFeedConfig.paging._limit, callback);
    };
    getRecPagedTweets = function(options, offset, limit, callback)
	{
    	++options._tweetFeedConfig._recLevel;

    	if (offset + limit <= options._tweetsCache.length ||
    		options._tweetFeedConfig._recLevel > 3 ||
    		options._tweetFeedConfig._noData
    	)
		{
    		/**
    		 * if the requested data is already cached or the max. no. of
    		 * consecutive API calls is reached, use the records
    		 */

    		if (offset + limit > options._tweetsCache.length)
    		{
    			limit = Math.max(0, options._tweetsCache.length - offset);
    		}

			var tweets = [];

			for (var i = 0; i < limit; i++)
			{
				tweets[i] = options._tweetsCache[offset + i];
			}

			callback(tweets, options);
		}
    	else
		{
    		/** ... if not, load the data, fill the cache and try again */
    		++options._tweetFeedConfig._pageParam;

    		getRateLimitedData(options, false, getFeedUrl(options, true), function(data, options)
    		{
    			var tweets = data.results || data;

    			if (tweets.length == 0)
    			{
    				options._tweetFeedConfig._noData = true;
   				}
    			else
				{
    				$.each(tweets, function(idx, tweet)
    				{
    					/** Snowflake support: just update ids that are currently used */
    					if (tweet.id_str)
    					{
    						tweet.id = tweet.id_str;
    					}

    					if (tweet.in_reply_to_status_id_str)
    					{
    						tweet.in_reply_to_status_id = tweet.in_reply_to_status_id_str;
    					}

    					if (tweet.retweeted_status)
						{
        					if (tweet.retweeted_status.id_str)
        					{
        						tweet.retweeted_status.id = tweet.retweeted_status.id_str;
        					}

        					if (tweet.retweeted_status.in_reply_to_status_id_str)
        					{
        						tweet.retweeted_status.in_reply_to_status_id = tweet.retweeted_status.in_reply_to_status_id_str;
        					}
						}

    					/** save the first tweet id for subsequent paging requests */
    					if (!options._tweetFeedConfig._maxId)
    					{
    						options._tweetFeedConfig._maxId = tweet.id;
    					}

    					/** optionally filter tweet ... */
    					if (options.tweetFilter(tweet, options))
    					{
    						/** then put it into the cache */
    						options._tweetsCache.push(tweet);
    					}
    				});
				}

    			getRecPagedTweets(options, offset, limit, callback);
    		});
		}
	};
	getRateLimitedData = function(options, flAutorefresh, url, callback)
	{
		getRateLimit(options, function(rateLimit)
		{
			if (rateLimit && rateLimit.remaining_hits <= 0)
			{
				options._stats.rateLimitPreventionCount++;
				hideLoadingIndicator(options, null);
				return;
			}

			getData(options, flAutorefresh, url, callback);
		});
	};
	getData = function(options, flAutorefresh, url, callback)
	{
		options._stats.dataRequestCount++;

		if (!options.onDataRequestHandler(options._stats, options))
		{
			hideLoadingIndicator(options, null);
			return;
		}

		if (!flAutorefresh)
		{
			showLoadingIndicator(options);
		}

		options.tweetDataProvider(url, function(data)
		{
			if (data.error)
			{
				/** in case of an error, display the error message */
				showError(options, data.error);
			}
			else
			{
				callback(data, options);
			}
		});
	};
	getRateLimit = function(options, callback)
	{
		options.rateLimitDataProvider(getRateLimitUrl(options), function(rateLimit)
		{
			options._stats.rateLimit = rateLimit;

			options.onRateLimitDataHandler(options._stats, options);

			callback(rateLimit);
		});
	};
	getFeedUrl = function(options, flPaging)
	{
		/** create the Twitter API URL based on the configuration options */
		var url = ('https:' == document.location.protocol ? 'https:' : 'http:');

		if (options.searchParams)
		{
			url += '//search.twitter.com/search.json?' +
				((options.searchParams instanceof Array) ? options.searchParams.join('&') : options.searchParams) +
				'&rpp=100';
		}
		else if (options.list)
		{
			if ('favorites' == options.list)
			{
				url += '//api.twitter.com/1/favorites/' + options.username + '.json?count=20';
			}
			else
			{
				url += '//api.twitter.com/1/' + options.username + '/lists/' + options.list + '/statuses.json?per_page=20';
			}
		}
		else
		{
			url += '//api.twitter.com/1/statuses/user_timeline.json?screen_name=' + options.username + '&count=20';
			if (options._tweetFeedConfig.includeRetweets)
				url += '&include_rts=true';
		}

		if (flPaging)
		{
			url +=
				(options._tweetFeedConfig._maxId ? '&max_id=' + options._tweetFeedConfig._maxId : '') +
				'&page=' + options._tweetFeedConfig._pageParam;
		}

		url += '&callback=?';

		return url;
	};
	getRateLimitUrl = function(options)
	{
		var url = ('https:' == document.location.protocol ? 'https:' : 'http:');

		url += '//api.twitter.com/1/account/rate_limit_status.json?callback=?';

		return url;
	};
	getProfileImageUrl = function(options, tweet)
	{
		var imageUrl;

		if (tweet.user)
		{
			imageUrl = ('https:' == document.location.protocol ? tweet.user.profile_image_url_https : tweet.user.profile_image_url);
		}
		else
		{
			imageUrl = tweet.profile_image_url;
		}

		return imageUrl;
	};
	defaultTweetDataProvider = function(url, callback)
	{
		$.getJSON(url, callback);
	};
	defaultRateLimitDataProvider = function(url, callback)
	{
		$.getJSON(url, callback);
	};
})(jQuery);




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
 
