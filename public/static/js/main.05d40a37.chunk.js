(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,a,t){e.exports=t(363)},192:function(e,a,t){},194:function(e,a,t){},363:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(57),c=t.n(r),l=(t(192),t(15)),s=t(16),i=t(18),u=t(17),m=t(19),d=(t(194),t(379)),p=t(353),g=t(374),h=t(372),v=t(375),b=t(40),y=t.n(b),f=t(43),E=t.n(f),O="http://localhost:3000/auth/login",j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={auth:{},loading:!1},t.login=function(e){e.preventDefault(),t.setState({loading:!0});var a=t.state.auth;y.a.post(O,a).then(function(e){console.log(e),E.a.success("Iniciaste sesi\xf3n correctamente"),localStorage.setItem("my-fuel-user",JSON.stringify(e.data.user)),t.setState({loading:!1}),t.props.history.push("/profile")}).catch(function(e){E.a.error("email o contrae\xf1a incorrectos"),t.setState({loading:!1})})},t.onChange=function(e){var a=e.target.name,n=e.target.value,o=t.state.auth;o[a]=n,t.setState({auth:o})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.loading;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Iniciar Sesi\xf3n"),o.a.createElement(g.a,{onSubmit:this.login},o.a.createElement(g.a.Field,null,o.a.createElement(h.a,{name:"email",label:"Email",type:"email",onChange:this.onChange,placeholder:"Email"})),o.a.createElement(g.a.Field,null,o.a.createElement(h.a,{name:"password",label:"Password",type:"password",onChange:this.onChange,placeholder:"Password"})),o.a.createElement(v.a,{loading:e,className:"huge ui button",type:"submit"},"Inciar Sesi\xf3n"))))}}]),a}(n.Component),w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={signup:{username:"new username",name:"your name",email:"your email",password:"your password",password2:"confirm password"},loading:!1},t.onChange=function(e){var a=e.target.name,n=e.target.value,o=t.state.signup;o[a]=n,t.setState({signup:o})},t.createUser=function(e){e.preventDefault();var a=t.state.signup;if(a.password!==a.password2)return E.a.error("Las contrase\xf1as no coinciden");y.a.post("http://localhost:3000/auth/login",a).then(function(e){console.log(e),E.a.success("Registrado correctamente"),t.props.history.push("/")}).catch(function(e){console.log(e),E.a.error("Error al registrarte")})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.signup,t=e.loading;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Crear Cuenta"),o.a.createElement(g.a,{onSubmit:this.createUser},o.a.createElement(g.a.Field,null,o.a.createElement(h.a,{name:"username",label:"Username",placeholder:"@Username",type:"Text",onChange:this.onChange,value:a.username})),o.a.createElement(g.a.Field,null,o.a.createElement(h.a,{name:"name",label:"Nombre",placeholder:"john",type:"Text",onChange:this.onChange,value:a.name})),o.a.createElement(g.a.Field,null,o.a.createElement(h.a,{name:"email",label:"Email",placeholder:"user@mail.com",type:"email",onChange:this.onChange,value:a.email})),o.a.createElement(g.a.Field,null,o.a.createElement(h.a,{name:"password",label:"Password",placeholder:"*********",type:"password",onChange:this.onChange,value:a.password})),o.a.createElement(g.a.Field,null,o.a.createElement(h.a,{name:"password2",label:"Confirma tu password",placeholder:"*********",type:"password",onChange:this.onChange,value:a.password2})),o.a.createElement(v.a,{loading:t,className:"huge ui button",type:"submit"},"Crear Cuenta"))))}}]),a}(n.Component),C=t(20),k=t.n(C),I=t(349),M=t(378),N=t(376),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={},t.handleItemClick=function(e,a){var n=a.name;return t.setState({activeItem:n})},t.logOut=function(e){return e.preventDefault(),localStorage.removeItem("my-fuel-user"),t.props.history.push("/login")},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return o.a.createElement("div",null,o.a.createElement(N.a,{stackable:!0},o.a.createElement(N.a.Item,null,o.a.createElement("img",{src:"https://res.cloudinary.com/procode/image/upload/v1539804125/fuel_zdlrpr.png"})),o.a.createElement(N.a.Item,{name:"mis-consumos",active:"mis-consumos"===e},o.a.createElement(I.a,{to:"/mis-consumos"},"Mis consumos")),o.a.createElement(N.a.Item,{name:"log-out",active:"log-out"===e,onClick:this.logOut},"Cerrar Sesi\xf3n")))}}]),a}(n.Component),A=Object(M.a)(S);k.a.accessToken="pk.eyJ1IjoiYWRuY29kZSIsImEiOiJjam16bHJiYzEwMjI5M3Btemh5d2N3NHkyIn0.eqcpU52HvvJ8YxgGz55dpA";var L=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.drawMap()}},{key:"drawMap",value:function(){new k.a.Map({container:"cover-map",zoom:3,center:[-96,37.8],style:"mapbox://styles/mapbox/streets-v9"}).addControl(new k.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"Map",id:"cover-map"}))}}]),a}(n.Component),T=t(373),_=(t(351),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={},t.handleItemClick=function(e,a){var n=a.name;return t.setState({activeItem:n})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return o.a.createElement("div",null,o.a.createElement(N.a,{stackable:!0},o.a.createElement(N.a.Item,null,o.a.createElement("img",{src:"https://react.semantic-ui.com/logo.png"})),o.a.createElement(N.a.Item,{name:"iniciar sesi\xf3n",active:"iniciar sesi\xf3n"===e,onClick:this.handleItemClick},o.a.createElement(T.a,{to:"/login"},"Iniciar Sesi\xf3n")),o.a.createElement(N.a.Item,{name:"crear cuenta",active:"crear cuenta"===e},o.a.createElement(T.a,{to:"/signup"},"Crear Cuenta"))))}}]),a}(n.Component)),J=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("section",{className:"Footer ui grid"},o.a.createElement("div",{className:"ten wide column ui middle aligned"},o.a.createElement("h2",{className:"center aligned two column row"},"Encuentra tu gasolinera mas cercana con los precios mas bajos")),o.a.createElement("div",{className:"six wide column ui middle aligned"},o.a.createElement("h3",null,"Con solo unos clicks encontraras la mejor gasolinera"))))}}]),a}(n.Component),x=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:""},o.a.createElement("header",{className:""},o.a.createElement(_,null),o.a.createElement(L,null),o.a.createElement(J,null)))}}]),a}(n.Component),P=t(67),F=t.n(P);k.a.accessToken="pk.eyJ1IjoiYWRuY29kZSIsImEiOiJjam16bHJiYzEwMjI5M3Btemh5d2N3NHkyIn0.eqcpU52HvvJ8YxgGz55dpA";var H=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={user:{},consumo:0},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("my-fuel-user"));if(!e)return this.props.history.push("/login");this.setState({user:e}),this.drawMap()}},{key:"drawMap",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){var t=new k.a.Map({container:"map",zoom:15,center:[a.coords.longitude,a.coords.latitude],style:"mapbox://styles/adncode/cjn7kawvq24wx2smn41yav5vs"});(new k.a.Marker).setLngLat([a.coords.longitude,a.coords.latitude]).addTo(t);t.addControl(new k.a.NavigationControl),t.addControl(new F.a({accessToken:k.a.accessToken}),"top-left");var n=new k.a.Popup({closeButton:!0,closeOnClick:!0});t.on("mouseenter","gas-layer",function(a){var o=t.queryRenderedFeatures(a.point,{layers:["gas-layer"]})[0];console.log(o.properties.address_street),t.getCanvas().style.cursor="pointer";var r=o.geometry.coordinates.slice(),c=o.properties.name,l=o.properties.address_street;for(console.log(r,c);Math.abs(a.lngLat.lng-r[0])>180;)r[0]+=a.lngLat.lng>r[0]?360:-360;var s='\n        <div class="ui three column divided center aligned grid">\n          <div class="column">\n            <h4 class="ui header">'.concat(c,"</h4>\n            <p><b>").concat(l,'</b></p>\n          </div>\n          <div class="column">\n            <h4 class="ui header">MAGNA</h4>\n            <h3><b>').concat(o.properties.gas_price_regular,"</b></h3>\n            <button id='consumo-magna' class='ui green button'>Agregar consumo</button>\n          </div>\n          <div class=\"column\">\n            <h4 class=\"ui header\">PREMIUM</h4>\n            <h3><b>").concat(o.properties.gas_price_premium,"</b></h3>\n            <div>").concat(e.state.consumo,"</div>\n          </div>");n.setLngLat(r).setHTML(s).addTo(t)})},function(e){alert("Please enable your gps position")},{maximumAge:6e5,timeout:5e3,enableHighAccuracy:!0})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(A,null),o.a.createElement("div",{className:"Map",id:"map"}))}}]),a}(n.Component),z=Object(M.a)(H),U=function(){console.log("click!!!!!!!"),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var a=e.coords.longitude,t=e.coords.latitude;console.log(t);return y.a.get("https://final-project3.herokuapp.com/near-stations/stations/premium/",{params:{longitude:a,latitude:t}}).then(function(n){console.log(JSON.parse(JSON.stringify(n.data))),console.log(n.data[0].geometry.coordinates[0]),document.getElementById("map");var o=new k.a.Map({container:"map",zoom:18,center:[a,t],style:"mapbox://styles/adncode/cjn7kawvq24wx2smn41yav5vs"});(new k.a.Marker).setLngLat([e.coords.longitude,e.coords.latitude]).addTo(o);o.addControl(new k.a.NavigationControl),o.addControl(new F.a({accessToken:k.a.accessToken}),"top-left"),o.flyTo({center:[n.data[0].geometry.coordinates[0],n.data[0].geometry.coordinates[1]]});var r=new k.a.Popup({closeButton:!0,closeOnClick:!0});o.on("mouseenter","gas-layer",function(e){var a=o.queryRenderedFeatures(e.point,{layers:["gas-layer"]})[0];console.log(a.properties.address_street),o.getCanvas().style.cursor="pointer";var t=a.geometry.coordinates.slice(),n=a.properties.name,c=a.properties.address_street;for(console.log(t,n);Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;var l='\n          <div class="ui three column divided center aligned grid">\n            <div class="column">\n              <h4 class="ui header">'.concat(n,"</h4>\n              <p><b>").concat(c,'</b></p>\n            </div>\n            <div class="column">\n              <h4 class="ui header">MAGNA</h4>\n              <h3><b>').concat(a.properties.gas_price_regular,"</b></h3>\n              <button id='consumo-magna' class='ui green button'>Agregar consumo</button>\n            </div>\n            <div class=\"column\">\n              <h4 class=\"ui header\">PREMIUM</h4>\n              <h3><b>").concat(a.properties.gas_price_premium,"</b></h3>\n              <button id='consumo-premium' class='ui red button'>Agregar consumo</button>\n            </div>");r.setLngLat(t).setHTML(l).addTo(o)}),console.log(typeof n.data)}).catch(function(e){console.log(e.message)})})},B=function(){console.log("click!!!!!!!"),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var a=e.coords.longitude,t=e.coords.latitude;console.log(t);return y.a.get("https://final-project3.herokuapp.com/near-stations/stations/",{params:{longitude:a,latitude:t}}).then(function(n){console.log(JSON.parse(JSON.stringify(n.data))),console.log(n.data[0].geometry.coordinates[0]),document.getElementById("map");var o=new k.a.Map({container:"map",zoom:18,center:[a,t],style:"mapbox://styles/adncode/cjn7kawvq24wx2smn41yav5vs"});(new k.a.Marker).setLngLat([e.coords.longitude,e.coords.latitude]).addTo(o);o.addControl(new k.a.NavigationControl),o.addControl(new F.a({accessToken:k.a.accessToken}),"top-left"),o.flyTo({center:[n.data[0].geometry.coordinates[0],n.data[0].geometry.coordinates[1]]});var r=new k.a.Popup({closeButton:!0,closeOnClick:!0});o.on("mouseenter","gas-layer",function(e){var a=o.queryRenderedFeatures(e.point,{layers:["gas-layer"]})[0];console.log(a.properties.address_street),o.getCanvas().style.cursor="pointer";var t=a.geometry.coordinates.slice(),n=a.properties.name,c=a.properties.address_street;for(console.log(t,n);Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;var l='\n            <div class="ui three column divided center aligned grid">\n              <div class="column">\n                <h4 class="ui header">'.concat(n,"</h4>\n                <p><b>").concat(c,'</b></p>\n              </div>\n              <div class="column">\n                <h4 class="ui header">MAGNA</h4>\n                <h3><b>').concat(a.properties.gas_price_regular,"</b></h3>\n                <button id='consumo-magna' class='ui green button'>Agregar consumo</button>\n              </div>\n              <div class=\"column\">\n                <h4 class=\"ui header\">PREMIUM</h4>\n                <h3><b>").concat(a.properties.gas_price_premium,"</b></h3>\n                <button id='consumo-premium' class='ui red button'>Agregar consumo</button>\n              </div>");r.setLngLat(t).setHTML(l).addTo(o)}),console.log(typeof n.data)}).catch(function(e){console.log(e.message)})})},R=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={gasolineras:[]},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("section",{className:"Footer ui grid "},o.a.createElement("div",{className:"sixteen wide column ui center aligned"},o.a.createElement(v.a.Group,{size:"large"},o.a.createElement(v.a,{positive:!0,onClick:B},"Magna"),o.a.createElement(v.a.Or,null),o.a.createElement(v.a,{negative:!0,onClick:U},"Premium")))))}}]),a}(n.Component),q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={user:{}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){if(!JSON.parse(localStorage.getItem("my-fuel-user")))return this.props.history.push("/login")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement(R,null))}}]),a}(n.Component),Y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={user:{}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("my-fuel-user"));if(!e)return this.props.history.push("/login");this.setState({user:e})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(A,null),o.a.createElement("h1",null,"Componente para consumos"))}}]),a}(o.a.Component),G=function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,{exact:!0,path:"/",component:x}),o.a.createElement(p.a,{path:"/signup",component:w}),o.a.createElement(p.a,{path:"/login",component:j}),o.a.createElement(p.a,{path:"/profile",component:q}),o.a.createElement(p.a,{path:"/mis-consumos",component:Y}))},W=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(G,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(354),t(356),t(359),t(361);var D=t(377);c.a.render(o.a.createElement(function(){return o.a.createElement(D.a,null,o.a.createElement(W,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[187,2,1]]]);
//# sourceMappingURL=main.05d40a37.chunk.js.map