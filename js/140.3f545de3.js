"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[140],{4140:function(t,a,i){i.r(a),i.d(a,{default:function(){return L}});var n=i(9389),o=i(849);const e={class:"section-50"},l={class:"container"},s=(0,n._)("h3",{class:"m-b-50 heading-line"},[(0,n.Uk)(" Notifications "),(0,n._)("i",{class:"fa fa-bell text-muted"})],-1),c={class:"notification-ui_dd-content"},d={class:"notification-list_content"},r=(0,n._)("div",{class:"notification-list_img pe-3"},[(0,n._)("h3",null,[(0,n._)("i",{class:"fa fa-bell text-muted"})])],-1),u={class:"notification-list_detail"},g=(0,n.Uk)(" reacted to your post "),f={class:"text-muted"},_=(0,n._)("p",{class:"text-muted"},[(0,n._)("small",null,"10 mins ago")],-1),h=(0,n._)("div",{class:"text-center"},[(0,n._)("a",{href:"#!",class:"dark-link"},"Load more activity")],-1);function p(t,a,i,p,m,v){const k=(0,n.up)("loading");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("section",e,[(0,n._)("div",l,[s,(0,n._)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.allData,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"notification-list notification-list--unread",key:t},[(0,n._)("div",d,[r,(0,n._)("div",u,[(0,n._)("p",null,[(0,n._)("b",null,(0,o.zw)(t["title"]),1),g]),(0,n._)("p",f,(0,o.zw)(t["body"]),1),_])])])))),128))]),h])]),(0,n.Wm)(k,{active:m.isLoading,"onUpdate:active":a[0]||(a[0]=t=>m.isLoading=t),"can-cancel":!0,"on-cancel":t.onCancel,"is-full-page":t.fullPage},null,8,["active","on-cancel","is-full-page"])],64)}var m=i(3669),v=i(4961),k=i.n(v),b={data(){return{allData:[],isLoading:!1}},mounted(){this.getNotification()},components:{Loading:k()},methods:{getNotification(){this.isLoading=!0;try{const t=localStorage.getItem("token"),a=localStorage.getItem("user_id");console.log(a),console.log("Bearer "+t);const i={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}};m.Z.get("http://18.177.139.152/notification/getNotification/",{headers:i.headers}).then((t=>{console.log(t.data),this.allData=[...t.data],console.log(this.allData)})).catch((t=>{console.error(t)})),this.isLoading=!1}catch(t){console.log(t)}}}},w=i(1935);const D=(0,w.Z)(b,[["render",p]]);var L=D}}]);
//# sourceMappingURL=140.3f545de3.js.map