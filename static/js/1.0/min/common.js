var temwhats=temwhats||{},status="off";temwhats.config={status_whats:status,init:function(){var s=document.getElementsByTagName("body")[0],t=document.getElementsByClassName("content-whats-on")[0],a=document.getElementsByClassName("twitter-whats-on")[0],e=document.getElementsByClassName("twitter-whats-off")[0],n=document.getElementsByClassName("content-whats-off")[0];"on"===this.status_whats.toLowerCase()?(s.className=s.className+" whats-on",t.className=t.className+" showing",a.className=a.className+" showing"):"off"===this.status_whats.toLowerCase()&&(s.className=s.className+" whats-off",n.className=n.className+" showing",e.className=e.className+" showing"),console.log("Current status:",this.status_whats)}},function(){temwhats.config.init()}();