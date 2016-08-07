webpackJsonp([1],{315:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=t(3),a=t(238),l=t(316),c=t(319),s=t(323),d=function(){function e(){}return e=r([i.NgModule({imports:[a.RouterModule.forChild(s.LAZY_ROUTES)],declarations:[l.LazyComponent,c.LazyDumbComponent]}),o("design:paramtypes",[])],e)}();n.LazyModule=d},316:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=t(3),a=function(){function e(){}return e=r([i.Component({selector:"labs-lazy",template:t(317),styles:[t(318)]}),o("design:paramtypes",[])],e)}();n.LazyComponent=a},317:function(e,n){e.exports='<h4> Lazy Component </h4>\r\n<ul>\r\n  <li><a routerLink="." routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" >Lazy</a></li>\r\n  <li><a routerLink="villain" routerLinkActive="active">Villains</a></li>\r\n</ul>\r\n\r\n\r\n<p> This component is lazily loaded i.e. the code for this module is loaded lazily </p>\r\n\r\n<div class="child">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<p style="font-size: bigger">Villain is again Lazily loaded</p>\r\n'},318:function(e,n){e.exports="ul, li {\r\n  list-style: none;\r\n  display: inline;\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  margin-left: 1rem;\r\n}\r\n\r\nul :first-child {\r\n  margin-left: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  background-color: lightgray;\r\n  padding: 0.2em 0.5em;\r\n  border-radius: 3px;\r\n}\r\n\r\na:hover {\r\n  background-color: lightskyblue;\r\n}\r\n\r\n.active {\r\n  background-color: lightcyan;\r\n}\r\n\r\n.child {\r\n  border: solid 1px gray;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 2rem;\r\n  min-height: 15rem;\r\n  max-width: 30rem;\r\n}\r\n"},319:function(e,n,t){"use strict";function r(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}r(t(320))},320:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=t(3),a=function(){function e(){}return e=r([i.Component({selector:"labs-lazy-dumb",template:t(321),styles:[t(322)]}),o("design:paramtypes",[])],e)}();n.LazyDumbComponent=a},321:function(e,n){e.exports="<p>\r\n  This is Just a Lazy Dumb component residing in Lazy Component.<br >\r\n  Javascript code is loaded for this component along with LazyModule code<br ><br >\r\n\r\n  <i>&lt;labs-lazy-dumb&gt;</i> is inside <i>lazy.component.html</i>, but it is not part of directives of <i>LazyComponent</i> decorator\r\n  because <i>LazyDumbComponent</i> is declared in <i>LazyModule</i> and hence is available for all components inside module\r\n</p>\r\n"},322:function(e,n){e.exports="p {\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.2rem;\r\n  line-height: 1.3;\r\n}\r\n\r\ni {\r\n  background-color: #d3d3d3;\r\n  border-radius: 2px;\r\n  font-style: normal;\r\n  font-size: smaller;\r\n  padding: 0 0.5rem;\r\n}\r\n"},323:function(e,n,t){"use strict";var r=t(316),o=t(319),i=t(302);n.LAZY_ROUTES=[{path:"",component:r.LazyComponent,children:[{path:"",component:o.LazyDumbComponent},{path:"villain",loadChildren:i.loadModule(function(){return new Promise(function(e){t.e(2,function(n){e(t(324).VillainModule)})})})}]}]}});
//# sourceMappingURL=1.9d3aa884177b664d201a.chunk.js.map