"use strict";(self.webpackChunkflexy=self.webpackChunkflexy||[]).push([[922],{29396:function(n,e,t){t.d(e,{Kc:function(){return T},Lk:function(){return o},OQ:function(){return p},Oz:function(){return s},S$:function(){return _},Us:function(){return d},WJ:function(){return c},W_:function(){return m},ep:function(){return f},fN:function(){return l},pD:function(){return Z},pH:function(){return h},ru:function(){return x}});var r=t(74165),i=t(15861),a=t(31243),u=t(83708).iL;a.Z.defaults.baseURL=u;var o=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("table/listNames");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("table/data?table_name=".concat(e.tableName,"&limit=").concat(e.limit,"&skip=").concat(e.skip));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("levels");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("components");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("levels/data",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("layout-config",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("layout-config/bulk-create",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("table/addDataToExisting",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new FormData,i="",t.append("file",e.file),t.append("table_description",e.table_description),t.append("tableName",e.tableName),i+="selectionType=".concat(e.selectionType),t.append("selectionType",e.selectionType),e.configID&&(i+="&config_id=".concat(e.configID),t.append("config_id",e.configID)),n.next=10,a.Z.post("table/fileIntoDb?".concat(i),t);case 10:return n.abrupt("return",n.sent);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("authenticate",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new FormData).append("file",e.file),t.append("tableName",e.tableName),n.next=5,a.Z.post("table/addDataToExisting",t);case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("layout-config/builder-ui/create",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),T=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("layout-config/builder-ui/list",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},56768:function(n,e,t){t(72791);var r=t(54270),i=t(80184);e.Z=function(n){var e=n.title,t=n.description,a=n.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.q,{children:[(0,i.jsx)("title",{children:e}),(0,i.jsx)("meta",{name:"description",content:t})]}),a]})}},38914:function(n,e,t){var r=t(1413),i=(t(72791),t(66934)),a=t(20890),u=t(80184),o=(0,i.ZP)((function(n){return(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({variant:"h6"},n),{},{component:"label",htmlFor:n.htmlFor}))}))((function(){return{marginBottom:"5px",marginTop:"15px",display:"block"}}));e.Z=o},76242:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(1413),i=t(29439),a=t(72791),u=t(66934),o=t(64280),c=t(80184),s=(0,u.ZP)((function(n){return(0,c.jsx)(o.Z,(0,r.Z)({},n))}))((function(n){var e=n.theme,t=n.customheight;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:"#767e89",opacity:"1"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"".concat("dark"===e.palette.mode?"rgba(255, 255, 255, 0.12)":"#dee3e9")},"& .MuiOutlinedInput-input.Mui-disabled":{backgroundColor:"".concat("dark"===e.palette.mode?"rgba(0, 0, 0, 0.12)":"#f8f9fb")},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:"#767e89",opacity:"1"},input:{border:"1px solid grey"},"@media only screen and (min-width: 3600px)":{input:{height:t||"4rem",fontSize:"5rem",padding:"3rem"}},"@media only screen and (max-width: 3600px)":{input:{height:"1rem",fontSize:"0.8rem",padding:"12px"}}}})),p=t(38914),l=t(39230),f=t(81495),d=t.n(f),x=(t(34420),t(83708)),m=function(n){var e=(0,l.$G)().t,t=(0,a.useRef)(),u=(0,a.useState)(void 0),o=(0,i.Z)(u,2),f=o[0],m=o[1],h=(0,a.useState)("default"),Z=(0,i.Z)(h,2),_=Z[0],T=Z[1];return(0,c.jsxs)(c.Fragment,{children:[f&&x.w5&&"file"!==n.type&&(0,c.jsx)("div",{style:{position:"absolute",inset:0,width:"100vw",height:"100vh",zIndex:2},onClick:function(){return m(void 0)}}),(0,c.jsxs)("div",{style:{position:"relative"},children:[n.label&&(0,c.jsx)(p.Z,{htmlFor:n.id,children:e(n.label)}),(0,c.jsx)(s,{id:n.id,variant:"outlined",fullWidth:!0,inputRef:n.inputFile,placeholder:e(n.placeholder),type:n.type,onFocus:function(){return m(!0)},customheight:n.customheight,value:n.value,inputProps:{accept:n.accept},onChange:function(e){"file"===n.type?n.onChange(e.target.files[0]):n.onChange(e.target.value)},sx:(0,r.Z)({},n.textFieldStyles)}),x.w5&&f&&"file"!==n.type&&(0,c.jsx)("div",{style:{position:"absolute",top:300,left:300,width:"25vw",zIndex:3},children:(0,c.jsx)(d(),{keyboardRef:function(n){return t.current=n},layoutName:_,onChange:function(e){n.onChange(e)},onKeyPress:function(n){"{shift}"!==n&&"{lock}"!==n||T("default"===_?"shift":"default"),"{enter}"===n&&setTimeout((function(){m(void 0)}),100)}})})]})]})}},83708:function(n,e,t){t.d(e,{Ai:function(){return x},DC:function(){return R},JZ:function(){return j},LQ:function(){return p},LV:function(){return v},MY:function(){return b},Np:function(){return h},SX:function(){return s},TV:function(){return k},Uf:function(){return f},WG:function(){return l},Xr:function(){return S},Y6:function(){return o},ZK:function(){return _},Zz:function(){return H},a9:function(){return m},dF:function(){return d},dj:function(){return I},dr:function(){return a},f$:function(){return C},gB:function(){return c},gk:function(){return D},iL:function(){return O},qV:function(){return N},s2:function(){return A},uv:function(){return g},v4:function(){return w},vJ:function(){return T},v_:function(){return E},vl:function(){return u},w5:function(){return L},yA:function(){return y},ym:function(){return Z}});var r=1920,i=1080,a=12,u=[{name:"DISPLAY_1",x:0,y:0,WIDTH:3840,HEIGHT:2160,VERTICAL_SCREENS:2,HORIZONTAL_SCREENS:2},{name:"DISPLAY_2",x:0,y:0,WIDTH:r,HEIGHT:2160,VERTICAL_SCREENS:2,HORIZONTAL_SCREENS:1},{name:"DISPLAY_3",x:r,y:0,WIDTH:13440,HEIGHT:2160,VERTICAL_SCREENS:2,HORIZONTAL_SCREENS:7},{name:"DISPLAY_4",x:0,y:0,WIDTH:r,HEIGHT:2160,VERTICAL_SCREENS:2,HORIZONTAL_SCREENS:1},{name:"DISPLAY_5",x:r,y:0,WIDTH:3840,HEIGHT:2160,VERTICAL_SCREENS:2,HORIZONTAL_SCREENS:2},{name:"CONNECTING_SCREEN_1",x:0,y:0,WIDTH:r,HEIGHT:i,VERTICAL_SCREENS:1,HORIZONTAL_SCREENS:1},{name:"CONNECTING_SCREEN_2",x:0,y:0,WIDTH:r,HEIGHT:i,VERTICAL_SCREENS:1,HORIZONTAL_SCREENS:1},{name:"CONNECTING_SCREEN_3",x:0,y:0,WIDTH:r,HEIGHT:i,VERTICAL_SCREENS:1,HORIZONTAL_SCREENS:1}],o="LINE_CHART",c="SMOOTH_LINE_CHART",s="AREA_CHART",p="STACKED_LINE_CHART",l="STACKED_LINE_AREA_CHART",f="PIE_CHART",d="DONUT_CHART",x="HALF_DONUT_CHART",m="COLUMN_CHART",h="BAR_CHART",Z="POLAR_CHART",_="ROSE_PIE_CHART",T="FUNNEL_CHART",E="INDIA_STATE_HEAT_MAP",C="INDIA_DISTRICT_HEAT_MAP",b="STATE_DISTRICT_HEAT_MAP",v="TREEMAP_CHART",y="STACKED_BAR_CHART",S="HORIZONTAL_STACKED_BAR_CHART",A="POLAR_STACKED_BAR_CHART",I="SCATTER_PLOT_CHART",R="BAR_WITH_LINE",w="TEXT_COMPONENT",N="IFRAME_COMPONENT",g="IMAGE_COMPONENT",H="VIDEO_COMPONENT",O="".concat("http://13.201.4.247:3006","/admin/api/"),L=!1,D="http://13.201.4.247:3005",k="connection",j="disconnection"},2703:function(n,e,t){t.d(e,{a_:function(){return a},zb:function(){return u}});var r=t(1025),i=t.n(r),a=function(n){return n.split("_").map((function(n){return n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()})).join(" ")},u=function(n){var e=i().parse(n,{skipEmptyLines:!0});if(e.errors.length>0)return console.error("Error parsing CSV:",e.errors),null;var t=e.data.map((function(n){return n.map((function(n){return{value:n}}))}));return console.timeEnd("CSV Conversion Data"),{parsedData:e,data:t}}},33346:function(n,e,t){t.r(e);var r=t(74165),i=t(15861),a=t(29439),u=t(72791),o=t(56768),c=t(29396),s=t(56890),p=t(35855),l=t(53994),f=t(20890),d=t(64554),x=t(5274),m=t(39281),h=t(79836),Z=t(53382),_=t(57689),T=t(2703),E=t(39230),C=t(76242),b=t(80184);function v(n){return(0,b.jsx)(s.Z,{children:(0,b.jsx)(p.Z,{children:["Table Name","Table Description","Actions"].map((function(n,e){return(0,b.jsx)(l.Z,{sx:{"@media only screen and (min-width: 3600px)":{fontSize:"4rem"},"@media only screen and (max-width: 3600px)":{fontSize:"1.2rem",padding:"2px"},fontWeight:"bold"},children:n},e)}))})})}e.default=function(){var n=(0,E.$G)().t,e=(0,_.s0)(),t=(0,u.useState)([]),s=(0,a.Z)(t,2),y=s[0],S=s[1],A=(0,u.useState)(void 0),I=(0,a.Z)(A,2),R=I[0],w=I[1],N=(0,u.useState)([]),g=(0,a.Z)(N,2),H=g[0],O=g[1];return(0,u.useEffect)((function(){O(R?y.filter((function(n){return n.table_name.toLowerCase().includes(R.toLowerCase())})):y)}),[R]),(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Lk)();case 2:(e=n.sent).data&&(S(e.data.map((function(n){return{table_name:n.table_name,table_description:n.table_description}}))),O(e.data.map((function(n){return{table_name:n.table_name,table_description:n.table_description}}))));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,b.jsx)(o.Z,{title:"Table Details",description:"Table Details",children:(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,b.jsx)(f.Z,{sx:{"@media only screen and (min-width: 3600px)":{fontSize:"4rem"},"@media only screen and (max-width: 3600px)":{fontSize:"1.6rem"},fontWeight:"bold",whiteSpace:"nowrap"},children:n("list_of_existing_tables_in_db")}),(0,b.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,b.jsx)(x.Z,{color:"secondary",variant:"contained",size:"large",sx:{"@media only screen and (min-width: 3600px)":{fontSize:"4rem",minWidth:"150px",mr:"auto"},"@media only screen and (max-width: 3600px)":{minWidth:"40px",m:"0 2px",padding:"6px"}},onClick:function(){return e("/dashboards/tables/new")},children:n("add_new_table")}),(0,b.jsx)(C.Z,{id:"search",value:R,onChange:w,label:"search",customheight:"10px"})]}),H.length>0&&(0,b.jsx)(m.Z,{sx:{"@media only screen and (min-width: 3600px)":{minWidth:3e3,marginTop:"80px"},"@media only screen and (max-width: 3600px)":{minWidth:750,marginTop:"20px"},maxHeight:"65vh",overflowY:"auto"},children:(0,b.jsxs)(h.Z,{stickyHeader:!0,children:[(0,b.jsx)(v,{rowCount:H.length}),(0,b.jsx)(Z.Z,{children:H.map((function(t,r){return(0,b.jsxs)(p.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,b.jsx)(l.Z,{sx:{padding:"0px"},children:(0,b.jsx)(f.Z,{color:"textSecondary",sx:{"@media only screen and (min-width: 3600px)":{fontSize:"4rem"},"@media only screen and (max-width: 3600px)":{fontSize:"1.2rem",padding:"0px"}},children:(0,T.a_)(t.table_name)})}),(0,b.jsx)(l.Z,{children:(0,b.jsx)(f.Z,{color:"textSecondary",sx:{"@media only screen and (min-width: 3600px)":{fontSize:"4rem"},"@media only screen and (max-width: 3600px)":{fontSize:"1.2rem"}},children:t.table_description})}),(0,b.jsx)(l.Z,{children:(0,b.jsx)(x.Z,{color:"secondary",variant:"contained",size:"large",sx:{"@media only screen and (min-width: 3600px)":{fontSize:"3.2rem",minWidth:"64px",maxHeight:"64px"},"@media only screen and (max-width: 3600px)":{minWidth:"40px",m:"0 2px",padding:"6px"},ml:"20px"},onClick:function(){e("/dashboards/table/".concat(t.table_name))},children:n("view_table")})})]},r)}))})]})})]})})}}}]);
//# sourceMappingURL=922.c073a258.chunk.js.map