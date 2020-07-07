(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{148:function(e,t,a){e.exports=a(186)},153:function(e,t,a){},158:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(153),a(37)),l=a(15),s=a(19),u=a(29),m=a(5);a(158);function d(e){var t=e.leftItems,a=e.centerItems,n=e.rightItems,o=e.leftStyle,c=e.centerStyle,i=e.rightStyle;return r.a.createElement("div",{className:"flexbox",style:e.style},t&&r.a.createElement("div",{className:"flexbox",style:o},t.map((function(e,t){return r.a.createElement("div",{key:t},e)}))),a&&r.a.createElement("div",{className:"flexbox",style:c},a.map((function(e,t){return r.a.createElement("div",{key:t},e)}))),n&&r.a.createElement("div",{className:"flexbox",style:i},n.map((function(e,t){return r.a.createElement("div",{key:t},e)}))))}var f=a(3);function v(e){var t=e,a=t.showIcon,n=void 0===a||a,o=t.useNavLink,c=e.href.startsWith("/"),l=c?o?i.c:i.b:"a";return delete(e=c?Object(f.a)(Object(f.a)({},e),{},{to:e.href},o?{exact:!0}:{}):Object(f.a)({target:"_blank",rel:"noopener noreferrer"},e)).showIcon,delete e.useNavLink,r.a.createElement(l,Object.assign({},e,{style:Object(f.a)({margin:"auto 5px"},e.style)}),e.children,!c&&n&&r.a.createElement(m.Icon,{icon:"arrow-top-right",style:{color:"white"}}))}function y(e){var t=e.href,a=e.icon,n=e.children,o=e.useNavLink,c=e.btnStyle,i=void 0===c?{}:c,l=e.iconStyle,s=void 0===l?{}:l,u=e.btnProps,d=void 0===u?{}:u,y=!t.startsWith("/")&&"arrow-top-right";return r.a.createElement(v,{useNavLink:o,href:t,showIcon:!1},r.a.createElement(m.Button,Object.assign({minimal:!0,style:Object(f.a)({color:"white"},i),icon:a&&r.a.createElement(m.Icon,{icon:a,style:Object(f.a)({color:"white"},s),intent:"primary"}),rightIcon:y&&r.a.createElement(m.Icon,{icon:y,style:Object(f.a)({color:"white"},s),intent:"primary"})},d),n))}var h="https://dataservice.accuweather.com/",E=function(){return T(g)||"YGqnk3lBPGGPr4JN5DRxyG9zkCGGLAOz"},p=function(e){return"".concat(h,"forecasts/v1/daily/5day/").concat(e,"?apikey=").concat(E())},O={KEY:"215854",CITY:"Tel Aviv",COUNTRY:"Israel"},g="user-accu-weather-api-key",b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:365,n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"},T=function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""};function j(){var e=Object(s.c)(),t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),f=l[0],h=l[1],E=Object(s.d)((function(e){return e.settingsReducer})),p=E.isTempCels,O=E.isDarkMode,T=r.a.createElement(m.Alert,{isOpen:o,canEscapeKeyCancel:!0,canOutsideClickCancel:!0,intent:"success",confirmButtonText:"Update API Key",cancelButtonText:"Cancel",onClose:function(){return c(!1)},onCancel:function(){return h("")},onConfirm:function(){return h(""),b(g,f),void e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unknown error occurred";return function(t){t({type:"ADD_TOAST",toast:e})}}({intent:"SUCCESS",icon:"tick",message:"API key ".concat(f?"updated":"removed"," successfully")}))}},r.a.createElement(m.FormGroup,{label:"Set Your AccurWeather API Key",helperText:"The API key needs to be an AccuWeather \n            API key, it will be saved on your browser as a cookie."},r.a.createElement(m.InputGroup,{value:f,onChange:function(e){return h(e.target.value)}})));return r.a.createElement("div",{id:"navbar"},r.a.createElement(d,{style:{padding:0},leftItems:[r.a.createElement(v,{href:"/",style:{margin:0,textDecoration:"none"}},r.a.createElement("h1",{style:{margin:0,color:"white"}},r.a.createElement(m.Icon,{icon:"cloud",iconSize:"36"})," WeatherApp"))],rightItems:[r.a.createElement(m.Tooltip,{content:"".concat(O?"Light":"Dark"," Mode")},r.a.createElement(m.Button,{minimal:!0,style:{color:"white"},onClick:function(){return e((function(e,t){var a=t().settingsReducer.isDarkMode,n=void 0!==a&&a;b("is-dark-mode",!n),document.body.classList.toggle("bp3-dark",!n),e({type:"TOGGLE_DARK_MODE"})}))},icon:r.a.createElement(m.Icon,{icon:O?"flash":"moon",style:{color:"white"},intent:"primary"})})),r.a.createElement(m.Tooltip,{content:"Use Your Own API Key"},r.a.createElement(m.Button,{minimal:!0,style:{color:"white"},onClick:function(){return c(!0)},icon:r.a.createElement(m.Icon,{icon:"code",style:{color:"white"},intent:"primary"})})),r.a.createElement(m.Tooltip,{content:"Toggle Temp Unit"},r.a.createElement(m.Button,{minimal:!0,style:{color:"white"},text:p?"Cels.":"Fahr.",onClick:function(){return e((function(e,t){var a=t().settingsReducer.isTempCels;b("is-temp-fahr",!(void 0!==a&&a)),e({type:"TOGGLE_TEMP_UNIT"})}))},icon:r.a.createElement(m.Icon,{icon:"snowflake",style:{color:"white"},intent:"primary"})})),r.a.createElement(y,{useNavLink:!0,href:"/",icon:"home"},"Home"),r.a.createElement(y,{useNavLink:!0,href:"/favorites",icon:"star"},"Favorites")]}),T)}function k(){return r.a.createElement("div",{id:"footer"},r.a.createElement(d,{style:{height:"100%"},leftItems:[r.a.createElement("p",{style:{color:"white",margin:0}},"All Rights Reserved Goes Here \xa9 ",(new Date).getFullYear())],rightItems:[r.a.createElement(y,{style:{color:"white"},href:"/"},"Home"),r.a.createElement(y,{style:{color:"white"},href:"/favorites"},"Favorites"),r.a.createElement(y,{style:{color:"white"},href:"https://reactjs.org"},"ReactJS"),r.a.createElement(y,{style:{color:"white"},href:"https://react-redux.js.org/"},"React Redux"),r.a.createElement(y,{style:{color:"white"},href:"https://developer.accuweather.com/"},"AccurWeather API")]}))}function A(){var e=Object(s.d)((function(e){return e.toasterReducer.toasts})),t=Object(s.c)(),a=Object(n.useState)(!1),o=Object(u.a)(a,2),c=o[0],i=o[1];return Object(n.useEffect)((function(){e.forEach((function(e){var a=e.intent,n=void 0===a?"DANGER":a;c.show(Object(f.a)({intent:n,icon:"SUCCESS"==n.toUpperCase()?"tick":"warning-sign",message:"string"==typeof e?e:"Unknown error occurred"},"object"==typeof e?e:{})),t((function(e){e({type:"REMOVE_FIRST_TOAST"})}))}),[e])})),r.a.createElement(m.Toaster,{maxToasts:5,ref:function(e){i(e)}})}function w(e){var t=e.temp,a=Object(s.d)((function(e){return e.settingsReducer.isTempCels})),n=Number(a?(t-32)/1.8:t).toFixed(0),o=!isNaN(n)&&(a?"C":"F");return r.a.createElement(r.a.Fragment,null,isNaN(n)?t:n,"\xb0",o)}function C(e){var t=e.wrapperStyle,a=void 0===t?{}:t,n=e.style,o=void 0===n?{}:n,c=e.calloutStyle,i=void 0===c?{}:c,l=e.title,s=void 0===l?"An Error Occurred":l,u=e.intent,d=void 0===u?"danger":u,v=e.children,y=e.icon,h=void 0!==y&&y;return r.a.createElement("div",{style:Object(f.a)({width:"100%"},a)},r.a.createElement(m.Card,{style:Object(f.a)({margin:"auto",maxWidth:"500px",padding:0},o)},r.a.createElement(m.Callout,{style:i,intent:d,title:s,icon:h},v)))}function D(e){var t=Object(n.useRef)(null),a=e.items,o=e.itemRenderer,c=e.noResults,i=e.inputProps,l=void 0===i?{}:i,s=Object(n.useState)(!1),d=Object(u.a)(s,2),f=d[0],v=d[1];return r.a.createElement("div",null,r.a.createElement(m.InputGroup,Object.assign({large:!0},l,{inputRef:t,onFocus:function(){return v(!0)},onBlur:function(){return setTimeout((function(){v(!1)}),100)}})),f&&r.a.createElement(m.Menu,{style:{position:"absolute",zIndex:1,marginTop:"1px"},onClick:function(){return v(!1)}},!a||a.length<=0&&c,a.map(o)))}var L=function(e){return function(t){t({type:"UPDATE_SELECTED_LOCATION",data:{key:e.key||O.KEY,city:e.city||O.CITY,country:e.country||O.COUNTRY}})}},I=function(){return function(e,t){var a,n=t().searchReducer.searchQuery;n&&(e({type:"LOADING_AUTO_COMPLETE_ITEMS"}),fetch((a=n,"".concat(h,"locations/v1/cities/autocomplete?apikey=").concat(E(),"&q=").concat(a))).then((function(e){return e.json()})).then((function(t){var a=t.map((function(e){return{key:e.Key,city:e.LocalizedName,country:e.Country.LocalizedName}})).filter((function(e){return e.city.toLowerCase().includes(n.toLowerCase())||e.country.toLowerCase().includes(n.toLowerCase())}));e({type:"SET_AUTO_COMPLETE_ITEMS",data:a})})).catch((function(t){e({type:"SET_AUTO_COMPLETE_ITEMS",data:[]})})))}},S=function(e,t){return function(a){var n,r;fetch((n=e,r=t,"".concat(h,"locations/v1/cities/geoposition/search?apikey=").concat(E(),"&q=").concat(n,",").concat(r))).then((function(e){return e.json()})).then((function(e){a(L({key:e.Key,city:e.LocalizedName,country:e.Country.LocalizedName}))})).catch((function(e){var t=e.message;a({type:"ADD_TOAST",toast:"".concat(void 0===t?"Unknown error occurred":t,", loading default location...")}),a(L(O))}))}},_=function(){return function(e,t){var a=t().favoriteReducer,n=a.favorites,r=void 0===n?[]:n,o=a.favoriteWeatherData,c=void 0===o?[]:o;r.forEach((function(t){var a;c[t.key]||(e({type:"TOGGLE_LOADING_FAV_WEATHER",key:t.kew}),fetch((a=t.key,"".concat(h,"currentconditions/v1/").concat(a,"?apikey=").concat(E()))).then((function(e){return e.json()})).then((function(a){e({type:"SET_FAV_WEATHER_DATA",key:t.key,data:{temp:a[0].Temperature.Imperial.Value,text:a[0].WeatherText}})})).catch((function(a){e({type:"SET_FAV_WEATHER_DATA",key:t.key,data:{temp:"",text:"Error occurred"}})})))}))}},x=Object(s.b)((function(e){return{searchReducer:e.searchReducer,favoriteReducer:e.favoriteReducer}}),(function(e){return{updateSelectedLocation:function(t){return e(L(t))},updateSearchQuery:function(t){return e(function(e){return function(t){(/^[a-zA-Z ]+$/.test(e)||""==e)&&t({type:"UPDATE_SEARCH_QUERY",value:e})}}(t))},getLocationData:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return function(t,a){var n=a().searchReducer.locationsData,r=(void 0===n?{}:n)[e.key]||{};r.isLoading||r.overview&&r.fiveDaysForcast||(t({type:"TOGGLE_LOADING_LOCATION",locationKey:e.key}),fetch(p(e.key),{credentials:"include"}).then((function(e){return e.json()})).then((function(a){var n=a.DailyForecasts[0].Temperature.Minimum.Value,r=a.DailyForecasts[0].Temperature.Maximum.Value,o=(n+r)/2,c=Object(f.a)(Object(f.a)({},e),{},{overviewText:a.Headline.Text,link:a.Headline.Link,temp:isNaN(o)?n||r:o,iconId:a.DailyForecasts[0].Day.Icon}),i=a.DailyForecasts.map((function(e){var t=e.Temperature.Minimum.Value,a=e.Temperature.Maximum.Value,n=(t+a)/2;return{date:e.EpochDate,temp:isNaN(n)?t||a:n,link:e.Link}}));t({type:"SET_LOCATION_DATA",location:e,overview:c,fiveDaysForcast:i})})).catch((function(a){var n=a.message,r=void 0===n?"Unknown error occurred":n;t({type:"SET_LOCATION_ERROR",key:e.key,message:r})})))}}(t))},toggleFavoriteLocation:function(t){return e(function(e){return function(t,a){var n=a().favoriteReducer.favorites;!!n.find((function(t){return t.key==e.key}))?n=n.filter((function(t){return t.key!=e.key})):n.push(e),b("favorites",JSON.stringify(n)),t({type:"SET_FAVORITES",favorites:n})}}(t))},loadAutoComplete:function(){return e(I())},getUserGeolocation:function(){return e((function(e){var t=function(t){e({type:"ADD_TOAST",toast:t}),e(L(O))};navigator.geolocation?(e({type:"ADD_TOAST",toast:{intent:"PRIMARY",icon:"locate",message:"Locating...",timeout:1500}}),navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude;e(S(a,n))}),(function(){return t("Unable to retrieve your location")}))):t("Geolocation is not supported by your browser")}))}}}))((function(e){var t=e.searchReducer,a=t.autoComplete,o=void 0===a?[]:a,c=t.selectedLocation,i=t.searchQuery,l=t.locationsData,s=t.isLoadingAutoComplete,f=void 0!==s&&s,y=e.favoriteReducer.favorites,h=l[c.key]||{},E=h.isLoading,p=void 0===E||E,O=h.overview,g=void 0===O?{}:O,b=h.fiveDaysForcast,T=void 0===b?[]:b,j=h.errorMessage,k=void 0!==j&&j,A=g.overviewText,L=void 0===A?"":A,I=g.city,S=void 0===I?"":I,_=g.country,x=void 0===_?"":_,R=g.key,N=void 0===R?"":R,F=g.temp,G=void 0===F?"":F,M=g.link,U=void 0===M?"":M,W=g.iconId,P=void 0===W?"":W,H=!!y.find((function(e){return e.key==N})),V=!Object.keys(c).length;Object(n.useEffect)((function(){V?e.getUserGeolocation():e.getLocationData(c)}),[c]);var K=Object(n.useState)(null),Y=Object(u.a)(K,2),B=Y[0],z=Y[1];Object(n.useEffect)((function(){clearTimeout(B),z(setTimeout((function(){return e.loadAutoComplete()}),350))}),[i]);var Q=r.a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement(m.H2,{style:{color:"white"}},"Search For a Location"),r.a.createElement(D,{inputProps:{value:i,onChange:function(t){return e.updateSearchQuery(t.target.value)},placeholder:"Type a city to get its weather",style:{width:"100vw",maxWidth:"550px",margin:"auto"}},items:o,itemRenderer:function(t){return r.a.createElement(m.MenuItem,{style:{width:"100vw",maxWidth:"540px"},key:t.key,text:"".concat(t.city,", ").concat(t.country),onClick:function(){return e.updateSelectedLocation(t)}})},noResults:r.a.createElement(m.MenuItem,{style:{width:"100vw",maxWidth:"540px"},disabled:!0,text:f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bp3-skeleton"},"This is placeholder for shiver"),r.a.createElement("div",{className:"bp3-skeleton",style:{marginTop:"7.5px"}},"This is placeholder for shiver")):i.length>0?"No Results":"Start typing a location to see results"})})),J=!p&&k&&r.a.createElement(C,{style:{marginTop:"2.5vh"},title:"An Error Occurred",intent:"DANGER",icon:"error"},k),q=p?r.a.createElement("div",{style:{margin:"2.5vh 2.5vw"}},r.a.createElement(m.Spinner,{className:"white-spinner"})):r.a.createElement(m.Card,{elevation:"4",style:{marginTop:"2.5vh",minHeight:"55vh",display:"flex",flexFlow:"column",justifyContent:"space-between"}},r.a.createElement(d,{style:{alignItems:"start"},leftItems:[r.a.createElement(v,{href:U,style:{textDecoration:"none",margin:"unset"},showIcon:!1},r.a.createElement(m.Card,{elevation:"2",interactive:!0},"#",N,r.a.createElement("br",null),S,", ",x,r.a.createElement("br",null),r.a.createElement(w,{temp:G})))],leftStyle:{flex:1},rightStyle:{flex:1,justifyContent:"end"},rightItems:[r.a.createElement(m.Button,{onClick:function(){return e.toggleFavoriteLocation({key:N,city:S,country:x})},icon:H?"star":"star-empty"},H?"Location Marked As Favorite":"Favorite This Location")]}),r.a.createElement("div",{style:{textAlign:"center",margin:"0 auto 7.5vh"}},P&&r.a.createElement("img",{src:"https://www.accuweather.com/images/weathericons/".concat(P,".svg"),alt:L,style:{maxWidth:"100px",maxHeight:"100px"}}),r.a.createElement(m.H2,null,L)),r.a.createElement(d,{centerStyle:{width:"100%",justifyContent:"space-around"},centerItems:T.map((function(e){return r.a.createElement(v,{href:e.link,style:{textDecoration:"none"},showIcon:!1},r.a.createElement(m.Card,{interactive:!0,elevation:"2",style:{textAlign:"center",margin:"5px"}},r.a.createElement("div",null,r.a.createElement("b",null,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*e.date).getDay()])),r.a.createElement("div",null,r.a.createElement(w,{temp:e.temp}))))}))}));return r.a.createElement("div",null,Q,k?J:q)})),R=a(46);function N(e){var t=e.isLoading,a=e.title,n=e.text,o=e.degree,c=e.onClick;return r.a.createElement(m.Card,{onClick:function(){return c&&c()},elevation:"5",interactive:!t,style:{margin:"10px"}},r.a.createElement(m.H3,{className:t&&"bp3-skeleton",style:{textAlign:"center"}},t?"placeholder":a),r.a.createElement(m.H4,{className:t&&"bp3-skeleton",style:{textAlign:"center"}},t?"placeholder":n),r.a.createElement(m.H4,{className:t&&"bp3-skeleton",style:{textAlign:"center"}},t?"placeholder":o?r.a.createElement(w,{temp:o}):o))}function F(){var e=Object(s.c)(),t=Object(l.f)(),a=Object(s.d)((function(e){return e.favoriteReducer.favorites}))||[],o=Object(s.d)((function(e){return e.favoriteReducer.favoriteWeatherData}))||{};return Object(n.useEffect)((function(){e(_())}),[a]),r.a.createElement("div",null,r.a.createElement(m.H1,{style:{color:"white",margin:"2.5vh auto",textAlign:"center"}},"Favorites"),r.a.createElement(d,{centerStyle:{justifyContent:"center",width:"100%",alignItems:"stretch"},centerItems:Object(R.a)(a&&a.length>0?a.map((function(a,n){var c=o[a.key]||{},i=c.isLoading,l=void 0===i||i,s=c.text,u=void 0===s?"":s,m=c.temp,d=void 0===m?"":m;return r.a.createElement(N,{onClick:function(){e(L(a)),t.push("/")},isLoading:l,title:a.city,text:u,degree:d})})):[r.a.createElement(C,{title:"No Favorite Locations",intent:"primary",icon:"star"},r.a.createElement("p",null,"You don't have any favorite locations, go the homepage and add some favorite locations, then come back here to see a summary of all your favorite locations."))])}))}function G(){return r.a.createElement("div",{style:{textAlign:"center",marginTop:"5vh"}},r.a.createElement(m.H2,{style:{color:"white"}},"404 Page Not Found"),r.a.createElement(m.H4,{style:{color:"white",marginTop:"1.5vh"}},"Make sure you entered the correct URL in the browser's search bar."))}a(183),a(184),a(185);function M(){var e=Object(s.c)();return Object(n.useEffect)((function(){e((function(e){var t;try{t=JSON.parse(T("favorites"))||[]}catch(a){t=[]}e({type:"SET_FAVORITES",favorites:t})})),e((function(e){var t="true"==T("is-dark-mode"),a="true"==T("is-temp-fahr");document.body.classList.toggle("bp3-dark",t),e({type:"SET_SETTINGS",data:{isDarkMode:t,isTempCels:a}})}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{basename:"/shawn-weather-05-07-2020"},r.a.createElement(j,null),r.a.createElement("div",{id:"content"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:x}),r.a.createElement(l.a,{exact:!0,path:"/favorites",component:F}),r.a.createElement(l.a,{path:"*",component:G}))),r.a.createElement(k,null)),r.a.createElement(A,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(39),W=a(102),P=a(30),H={searchQuery:"",selectedLocation:{},locationsData:{},isLoadingAutoComplete:!1,autoComplete:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADING_LOCATION":return Object(f.a)(Object(f.a)({},e),{},{locationsData:Object(f.a)(Object(f.a)({},e.locationsData),{},Object(P.a)({},t.locationKey,Object(f.a)(Object(f.a)({},e.locationsData[t.locationKey]),{},{isLoading:!e.locationsData[t.locationKey]})))});case"SET_LOCATION_DATA":return Object(f.a)(Object(f.a)({},e),{},{locationsData:Object(f.a)(Object(f.a)({},e.locationsData),{},Object(P.a)({},t.location.key,Object(f.a)(Object(f.a)({},e.locationsData[t.location.key]),{},{errorMessage:"",isLoading:!1,overview:t.overview,fiveDaysForcast:t.fiveDaysForcast})))});case"SET_LOCATION_ERROR":return Object(f.a)(Object(f.a)({},e),{},{locationsData:Object(f.a)(Object(f.a)({},e.locationsData),{},Object(P.a)({},t.key,Object(f.a)(Object(f.a)({},e.locationsData[t.key]),{},{isLoading:!1,errorMessage:t.message})))});case"UPDATE_SELECTED_LOCATION":return Object(f.a)(Object(f.a)({},e),{},{selectedLocation:t.data});case"UPDATE_SEARCH_QUERY":return Object(f.a)(Object(f.a)({},e),{},{searchQuery:t.value});case"SET_AUTO_COMPLETE_ITEMS":return Object(f.a)(Object(f.a)({},e),{},{autoComplete:t.data,isLoadingAutoComplete:!1});case"LOADING_AUTO_COMPLETE_ITEMS":return Object(f.a)(Object(f.a)({},e),{},{isLoadingAutoComplete:!0});default:return e}},K={favorites:[],favoriteWeatherData:{}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITES":return Object(f.a)(Object(f.a)({},e),{},{favorites:t.favorites});case"TOGGLE_LOADING_FAV_WEATHER":return Object(f.a)(Object(f.a)({},e),{},{favoriteWeatherData:Object(f.a)(Object(f.a)({},e.favoriteWeatherData),{},Object(P.a)({},t.key,Object(f.a)(Object(f.a)({},e.favoriteWeatherData[t.key]),{},{isLoading:!0})))});case"SET_FAV_WEATHER_DATA":return Object(f.a)(Object(f.a)({},e),{},{favoriteWeatherData:Object(f.a)(Object(f.a)({},e.favoriteWeatherData),{},Object(P.a)({},t.key,Object(f.a)(Object(f.a)({},e.favoriteWeatherData[t.key]),{},{isLoading:!1},t.data)))});default:return e}},B={toasts:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TOAST":return{toasts:[].concat(Object(R.a)(e.toasts),[t.toast])};case"REMOVE_FIRST_TOAST":return{toasts:Object(R.a)(e.toasts.slice(1))};default:return e}},Q={isTempCels:!0,isDarkMode:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SETTINGS":return Object(f.a)(Object(f.a)({},e),t.data);case"TOGGLE_TEMP_UNIT":return Object(f.a)(Object(f.a)({},e),{},{isTempCels:!e.isTempCels});case"TOGGLE_DARK_MODE":return Object(f.a)(Object(f.a)({},e),{},{isDarkMode:!e.isDarkMode});default:return e}},q=Object(U.c)({searchReducer:V,favoriteReducer:Y,toasterReducer:z,settingsReducer:J}),$=Object(U.d)(q,Object(U.a)(W.a));c.a.render(r.a.createElement(s.a,{store:$},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[148,1,2]]]);
//# sourceMappingURL=main.915e4de8.chunk.js.map