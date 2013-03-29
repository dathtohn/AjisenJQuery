jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}}),function(a,b){var c;a.rails=c={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(b){var c=a('meta[name="csrf-token"]').attr("content");c&&b.setRequestHeader("X-CSRF-Token",c)},fire:function(b,c,d){var e=a.Event(c);return b.trigger(e,d),e.result!==!1},confirm:function(a){return confirm(a)},ajax:function(b){return a.ajax(b)},href:function(a){return a.attr("href")},handleRemote:function(d){var e,f,g,h,i,j;if(c.fire(d,"ajax:before")){h=d.data("cross-domain")||null,i=d.data("type")||a.ajaxSettings&&a.ajaxSettings.dataType;if(d.is("form")){e=d.attr("method"),f=d.attr("action"),g=d.serializeArray();var k=d.data("ujs:submit-button");k&&(g.push(k),d.data("ujs:submit-button",null))}else d.is(c.inputChangeSelector)?(e=d.data("method"),f=d.data("url"),g=d.serialize(),d.data("params")&&(g=g+"&"+d.data("params"))):(e=d.data("method"),f=c.href(d),g=d.data("params")||null);return j={type:e||"GET",data:g,dataType:i,crossDomain:h,beforeSend:function(a,e){return e.dataType===b&&a.setRequestHeader("accept","*/*;q=0.5, "+e.accepts.script),c.fire(d,"ajax:beforeSend",[a,e])},success:function(a,b,c){d.trigger("ajax:success",[a,b,c])},complete:function(a,b){d.trigger("ajax:complete",[a,b])},error:function(a,b,c){d.trigger("ajax:error",[a,b,c])}},f&&(j.url=f),c.ajax(j)}return!1},handleMethod:function(d){var e=c.href(d),f=d.data("method"),g=d.attr("target"),h=a("meta[name=csrf-token]").attr("content"),i=a("meta[name=csrf-param]").attr("content"),j=a('<form method="post" action="'+e+'"></form>'),k='<input name="_method" value="'+f+'" type="hidden" />';i!==b&&h!==b&&(k+='<input name="'+i+'" value="'+h+'" type="hidden" />'),g&&j.attr("target",g),j.hide().append(k).appendTo("body"),j.submit()},disableFormElements:function(b){b.find(c.disableSelector).each(function(){var b=a(this),c=b.is("button")?"html":"val";b.data("ujs:enable-with",b[c]()),b[c](b.data("disable-with")),b.prop("disabled",!0)})},enableFormElements:function(b){b.find(c.enableSelector).each(function(){var b=a(this),c=b.is("button")?"html":"val";b.data("ujs:enable-with")&&b[c](b.data("ujs:enable-with")),b.prop("disabled",!1)})},allowAction:function(a){var b=a.data("confirm"),d=!1,e;return b?(c.fire(a,"confirm")&&(d=c.confirm(b),e=c.fire(a,"confirm:complete",[d])),d&&e):!0},blankInputs:function(b,c,d){var e=a(),f,g=c||"input,textarea";return b.find(g).each(function(){f=a(this);if(d?f.val():!f.val())e=e.add(f)}),e.length?e:!1},nonBlankInputs:function(a,b){return c.blankInputs(a,b,!0)},stopEverything:function(b){return a(b.target).trigger("ujs:everythingStopped"),b.stopImmediatePropagation(),!1},callFormSubmitBindings:function(c,d){var e=c.data("events"),f=!0;return e!==b&&e.submit!==b&&a.each(e.submit,function(a,b){if(typeof b.handler=="function")return f=b.handler(d)}),f},disableElement:function(a){a.data("ujs:enable-with",a.html()),a.html(a.data("disable-with")),a.bind("click.railsDisable",function(a){return c.stopEverything(a)})},enableElement:function(a){a.data("ujs:enable-with")!==b&&(a.html(a.data("ujs:enable-with")),a.data("ujs:enable-with",!1)),a.unbind("click.railsDisable")}},a.ajaxPrefilter(function(a,b,d){a.crossDomain||c.CSRFProtection(d)}),a(document).delegate(c.linkDisableSelector,"ajax:complete",function(){c.enableElement(a(this))}),a(document).delegate(c.linkClickSelector,"click.rails",function(d){var e=a(this),f=e.data("method"),g=e.data("params");if(!c.allowAction(e))return c.stopEverything(d);e.is(c.linkDisableSelector)&&c.disableElement(e);if(e.data("remote")!==b)return(d.metaKey||d.ctrlKey)&&(!f||f==="GET")&&!g?!0:(c.handleRemote(e)===!1&&c.enableElement(e),!1);if(e.data("method"))return c.handleMethod(e),!1}),a(document).delegate(c.inputChangeSelector,"change.rails",function(b){var d=a(this);return c.allowAction(d)?(c.handleRemote(d),!1):c.stopEverything(b)}),a(document).delegate(c.formSubmitSelector,"submit.rails",function(d){var e=a(this),f=e.data("remote")!==b,g=c.blankInputs(e,c.requiredInputSelector),h=c.nonBlankInputs(e,c.fileInputSelector);if(!c.allowAction(e))return c.stopEverything(d);if(g&&e.attr("novalidate")==b&&c.fire(e,"ajax:aborted:required",[g]))return c.stopEverything(d);if(f)return h?c.fire(e,"ajax:aborted:file",[h]):!a.support.submitBubbles&&a().jquery<"1.7"&&c.callFormSubmitBindings(e,d)===!1?c.stopEverything(d):(c.handleRemote(e),!1);setTimeout(function(){c.disableFormElements(e)},13)}),a(document).delegate(c.formInputClickSelector,"click.rails",function(b){var d=a(this);if(!c.allowAction(d))return c.stopEverything(b);var e=d.attr("name"),f=e?{name:e,value:d.val()}:null;d.closest("form").data("ujs:submit-button",f)}),a(document).delegate(c.formSubmitSelector,"ajax:beforeSend.rails",function(b){this==b.target&&c.disableFormElements(a(this))}),a(document).delegate(c.formSubmitSelector,"ajax:complete.rails",function(b){this==b.target&&c.enableFormElements(a(this))})}(jQuery),$(document).ready(function(){var a="home";$("#home").click(function(){a!="home"&&$("#mainbar").animate({left:"50%"},"slow"),$("#"+a+"bg").fadeOut(function(){setTimeout(function(){$("#headertxt").css({display:"block"}),animating=!1},500)}),$("#homebg").fadeIn("slow",function(){}),a="home"}),$("#locations").click(function(){a=="home"&&$("#mainbar").animate({left:"25%"},"slow"),$("#"+a+"bg").fadeOut("slow",function(){}),$("#menubg").fadeIn("slow",function(){}),a="locations"})}),function(){}.call(this);