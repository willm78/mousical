(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(20)},16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(3),c=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(4),s=n(5),l=n(8),u=n(6),h=n(9),v=n(1),f=n.n(v),d=n(7),m=n.n(d),w=(n(16),(new f.a.AMSynth).toMaster()),p=function(t){function e(){var t,n;Object(r.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={on:!1,x:0,y:0,started:!1},n.toggleOnOff=function(){n.setState(function(t){return t.on?{on:!1}:window.confirm("This app makes noise! Is this ok?")?{on:!0}:null})},n.onMouseMove=function(t){var e=t.clientX,o=t.clientY;w.triggerAttackRelease(e,"8n"),n.setState({x:e,y:o})},n.onTouchMove=function(t){var e=t.touches[0],o=e.clientX,a=e.clientY;w.triggerAttackRelease(o,"8n"),n.setState({x:o,y:a})},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){m()(f.a.context,"#root").then(this.setState({started:!0}))}},{key:"render",value:function(){var t=this.state,e=t.on,n=t.x;t.y;return a.a.createElement("div",{className:"App",onMouseMove:e?this.onMouseMove:function(){return null},onTouchMove:e?this.onTouchMove:function(){return null}},a.a.createElement("h1",null,"Mousical"),a.a.createElement("button",{onClick:this.toggleOnOff,className:"StartBtn"},e?"Stop":"Start"),a.a.createElement("div",{style:{visibility:e?"visible":"hidden"}},"Frequency: ".concat(n,"Hz")))}}]),e}(o.Component);n(18);c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.9563c47b.chunk.js.map