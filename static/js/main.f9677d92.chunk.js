(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{57:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n,a,i=c(1),r=c(0),s=c.n(r),o=c(17),d=c.n(o),u=c(10),l=c(8),j=c(15),b=c(11),O=c(12),m=c(28),p=c(7),h=Object(l.b)("ADD_CARD"),f=Object(l.b)("DELETE_CARD"),x=Object(l.b)("EDIT_CARD_NAME"),v=Object(l.b)("ADD_DESCRIPTION"),y=Object(l.b)("DELETE_DESCRIPTION"),N=Object(l.c)([{name:"create page",id:11,columnId:1,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus, nesciunt similique ratione neque aspernatur consequatur veniam exercitationem nostrum quo laborum ipsa, esse nihil pariatur. Ex quasi explicabo fugit unde.",author:"Jack"},{name:"add feature",id:12,columnId:1,description:"",author:"Jack"},{name:"deploy",id:13,columnId:1,description:"",author:"Phil"},{name:"design for new page",id:14,columnId:2,description:"",author:"Helen"},{name:"write unit tests",id:15,columnId:3,description:"",author:"Yanis"},{name:"hand testing",id:16,columnId:3,description:"",author:"Yanis"},{name:"create architecture",id:17,columnId:4,description:"",author:"Jack"}],(n={},Object(b.a)(n,h.type,(function(e,t){var c=Object(p.a)(t.payload,3),n=c[0],a=c[1],i=c[2];return[].concat(Object(m.a)(e),[{name:a,id:e[e.length-1].id+1,columnId:n,description:"",author:i}])})),Object(b.a)(n,f.type,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(b.a)(n,x.type,(function(e,t){var c=Object(p.a)(t.payload,2),n=c[0],a=c[1];return e.map((function(e){return e.id===n?Object(O.a)(Object(O.a)({},e),{},{name:a}):e}))})),Object(b.a)(n,v.type,(function(e,t){var c=Object(p.a)(t.payload,2),n=c[0],a=c[1];return e.map((function(e){return e.id===n?Object(O.a)(Object(O.a)({},e),{},{description:a}):e}))})),Object(b.a)(n,y.type,(function(e,t){return e.map((function(e){return e.id===t.payload?Object(O.a)(Object(O.a)({},e),{},{description:""}):e}))})),n)),g=Object(l.b)("ADD_COMMENT"),I=Object(l.b)("EDIT_COMMENT"),_=Object(l.b)("DELETE_COMMENT"),C=Object(l.c)([{name:"Jessy",text:"LOL",id:101,cardId:11},{name:"Nancy",text:"Is this lorem ipsum??? Where is real description?",id:102,cardId:11},{name:"Chief",text:"good luck!",id:103,cardId:14},{name:"Michael Scott",text:"NO... no no no please no",id:104,cardId:16}],(a={},Object(b.a)(a,g.type,(function(e,t){var c=Object(p.a)(t.payload,3),n=c[0],a=c[1],i=c[2];return[].concat(Object(m.a)(e),[{name:i,text:a,id:e[e.length-1].id+1,cardId:n}])})),Object(b.a)(a,I.type,(function(e,t){var c=Object(p.a)(t.payload,2),n=c[0],a=c[1];return e.map((function(e){return e.id===n?Object(O.a)(Object(O.a)({},e),{},{text:a}):e}))})),Object(b.a)(a,_.type,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),E=Object(l.b)("EDIT_COLUMN_NAME"),k=Object(l.c)([{id:1,name:"TODO"},{id:2,name:"add feature"},{id:3,name:"In Progress"},{id:4,name:"Done"}],Object(b.a)({},E.type,(function(e,t){var c=Object(p.a)(t.payload,2),n=c[0],a=c[1];return e.map((function(e){return e.id===n?Object(O.a)(Object(O.a)({},e),{},{name:a}):e}))}))),S=Object(l.b)("SET_CURRENT_USER"),D=Object(l.c)({currentUser:null},Object(b.a)({},S.type,(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{currentUser:t.payload})}))),T=Object(j.c)({cards:N,comments:C,columns:k,user:D}),w=Object(l.a)({reducer:T}),P=function(){return Object(u.b)()},A=(c(56),c(57),c(73)),F=c(43),M=c(75),z=function(e){var t=e.isShow,c=e.onHide,n=P(),a=Object(r.useState)(""),s=Object(p.a)(a,2),o=s[0],d=s[1],u=function(){o&&(c(),n(S(o)))};return Object(i.jsxs)(A.a,{show:t,onHide:c,size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(i.jsx)(A.a.Header,{closeButton:!0,children:Object(i.jsx)(A.a.Title,{id:"contained-modal-title-vcenter",children:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?"})}),Object(i.jsx)(A.a.Body,{children:Object(i.jsx)(F.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",onChange:function(e){d(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&u()},autoFocus:!0})}),Object(i.jsx)(A.a.Footer,{children:Object(i.jsx)(M.a,{onClick:u,variant:"success",children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})})]})},H=c(74),L=c.p+"static/media/comments.44398cb6.svg",U=c(70),R=c(71),B=c(72),J=(c(59),function(e){var t=e.name,c=e.text,n=e.commentId,a=P(),s=Object(r.useState)(""),o=Object(p.a)(s,2),d=o[0],l=o[1],j=Object(r.useState)(!1),b=Object(p.a)(j,2),O=b[0],m=b[1],h=Object(u.c)((function(e){return e.user.currentUser}));return Object(i.jsx)(i.Fragment,{children:O?Object(i.jsxs)(U.a,{className:"mb-3",children:[Object(i.jsx)(F.a,{id:"basic-url",placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",value:d,onChange:function(e){l(e.target.value)}}),Object(i.jsx)(U.a.Append,{children:Object(i.jsx)(M.a,{variant:"outline-success",onClick:function(){d&&(a(I([n,d])),l("")),m(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}):Object(i.jsxs)("li",{className:"comments-item",children:[Object(i.jsxs)("div",{className:"comments-body",children:[Object(i.jsx)("h5",{children:t}),Object(i.jsx)("p",{children:c})]}),Object(i.jsxs)("div",{className:"header__icons",children:[Object(i.jsx)(R.a,{className:"icon-edit",size:17,onClick:function(){h===t?m(!0):alert("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")}}),Object(i.jsx)(B.a,{className:"icon-delete",size:17,onClick:function(){return h===t?a(_(n)):alert("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")}})]})]})})}),q=(c(60),function(e){var t=e.cardId,c=P(),n=Object(r.useState)(""),a=Object(p.a)(n,2),s=a[0],o=a[1],d=Object(u.c)((function(e){var c;return null===e||void 0===e||null===(c=e.comments)||void 0===c?void 0:c.filter((function(e){return e.cardId===t}))})),l=Object(u.c)((function(e){return e.user.currentUser}));return Object(i.jsxs)(A.a.Footer,{className:"card-options__footer",children:[Object(i.jsxs)(U.a,{className:"mb-3",children:[Object(i.jsx)(F.a,{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",onChange:function(e){o(e.target.value)},value:s}),Object(i.jsx)(U.a.Append,{children:Object(i.jsx)(M.a,{variant:"outline-success",onClick:function(){s&&(c(g([t,s,l])),o(""))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(i.jsx)("ul",{className:"comments-list",children:null===d||void 0===d?void 0:d.map((function(e){return Object(i.jsx)(J,{name:e.name,text:e.text,commentId:e.id},e.id)}))})]})}),K=(c(61),function(e){var t=e.cardId,c=e.description,n=P(),a=Object(r.useState)(""),s=Object(p.a)(a,2),o=s[0],d=s[1],u=Object(r.useState)(!1),l=Object(p.a)(u,2),j=l[0],b=l[1];return Object(i.jsxs)(A.a.Body,{className:"card-options__body",children:[Object(i.jsxs)("div",{className:"description-title",children:[Object(i.jsx)("h3",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 "}),Object(i.jsxs)("div",{className:"header__icons",children:[Object(i.jsx)(R.a,{className:"icon-edit",size:17,onClick:function(){return b(!0)}}),Object(i.jsx)(B.a,{className:"icon-delete",size:17,onClick:function(){return n(y(t))}})]})]}),c&&!j?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("p",{children:c})}):Object(i.jsxs)(U.a,{className:"mb-3",children:[Object(i.jsx)(F.a,{id:"basic-url",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){d(e.target.value)},value:o}),Object(i.jsx)(U.a.Append,{children:Object(i.jsx)(M.a,{variant:"outline-success",onClick:function(){o&&(n(v([t,o])),d("")),b(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})}),G=(c(62),function(e){var t=e.cardName,c=e.cardId,n=e.columnName,a=e.author,s=P(),o=Object(r.useState)(""),d=Object(p.a)(o,2),u=d[0],l=d[1],j=Object(r.useState)(!1),b=Object(p.a)(j,2),O=b[0],m=b[1];return Object(i.jsx)(A.a.Header,{closeButton:!0,children:Object(i.jsx)(A.a.Title,{id:"contained-modal-title-vcenter",className:"header__container",children:O?Object(i.jsxs)(U.a,{className:"mb-3",children:[Object(i.jsx)(F.a,{id:"basic-url",placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){l(e.target.value)},value:u}),Object(i.jsx)(U.a.Append,{children:Object(i.jsx)(M.a,{variant:"outline-success",onClick:function(){u&&(s(x([c,u])),l("")),m(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("p",{children:[n," > ",t,Object(i.jsxs)("small",{children:["(",a,")"]})]}),Object(i.jsxs)("div",{className:"header__icons",children:[Object(i.jsx)(R.a,{className:"icon-edit",size:20,onClick:function(){return m(!0)}}),Object(i.jsx)(B.a,{className:"icon-delete",size:20,onClick:function(){s(f(c))}})]})]})})})}),Y=(c(63),function(e){var t=e.cardName,c=e.isShow,n=e.onHide,a=e.description,r=e.columnName,s=e.cardId,o=e.author;return Object(i.jsx)("div",{onClick:function(e){return e.stopPropagation()},role:"button",onKeyPress:function(e){"Enter"===e.key&&e.stopPropagation()},tabIndex:0,children:Object(i.jsxs)(A.a,{show:c,onHide:n,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(i.jsx)(G,{cardId:s,cardName:t,columnName:r,author:o}),Object(i.jsx)(K,{description:a,cardId:s}),Object(i.jsx)(q,{cardId:s})]})})}),W=(c(64),function(e){var t=e.card,c=e.columnName,n=Object(r.useState)(!1),a=Object(p.a)(n,2),s=a[0],o=a[1],d=Object(u.c)((function(e){return e.comments.filter((function(e){return e.cardId===t.id}))})),l=function(){return o(!0)};return Object(i.jsxs)("div",{className:"card__wrapper",onClick:l,onKeyPress:function(e){"Enter"===e.key&&l()},role:"button",tabIndex:0,children:[Object(i.jsx)("p",{children:t.name}),(null===d||void 0===d?void 0:d.length)?Object(i.jsxs)("div",{className:"comments-icon",children:[Object(i.jsx)("img",{src:L,alt:"comments"}),Object(i.jsx)("p",{className:"comments-icon__text",children:d.length})]}):"",Object(i.jsx)(Y,{cardName:t.name,columnName:c,isShow:s,onHide:function(){return o(!1)},description:t.description,cardId:t.id,author:t.author})]})}),Q=(c(65),c.p+"static/media/plus.05989119.svg"),V=function(e){var t=e.item,c=P(),n=Object(r.useState)(!1),a=Object(p.a)(n,2),s=a[0],o=a[1],d=Object(r.useState)(""),l=Object(p.a)(d,2),j=l[0],b=l[1],O=Object(r.useState)(""),m=Object(p.a)(O,2),f=m[0],x=m[1],v=Object(r.useState)(!1),y=Object(p.a)(v,2),N=y[0],g=y[1],I=Object(u.c)((function(e){return e.cards.filter((function(e){return e.columnId===t.id}))})),_=Object(u.c)((function(e){return e.user.currentUser})),C=function(){g(!0)};return Object(i.jsxs)("div",{className:"card-list__wrapper",children:[N?Object(i.jsx)(F.a,{autoFocus:!0,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:t.name,onChange:function(e){b(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(g(!1),j&&c(E([t.id,j])))}}):Object(i.jsx)("div",{onClick:C,role:"button",onKeyPress:function(e){"Enter"===e.key&&C()},tabIndex:0,children:Object(i.jsx)("h4",{children:t.name})}),null===I||void 0===I?void 0:I.map((function(e){return Object(i.jsx)(W,{card:e,columnName:t.name},e.id)})),s?Object(i.jsxs)(H.a,{onSubmit:function(e){e.preventDefault(),f&&(c(h([t.id,f,_])),x(""),o(!1)),o(!1)},className:"card-list__form",children:[Object(i.jsx)(H.a.Group,{controlId:"formBasicPassword",children:Object(i.jsx)(H.a.Control,{type:"text",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",autoFocus:!0,onChange:function(e){x(e.target.value)}})}),Object(i.jsx)(M.a,{variant:"success",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]}):Object(i.jsxs)("button",{className:"card-list__new-card",onClick:function(){o(!0)},type:"button",children:[Object(i.jsx)("img",{src:Q,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"]})]})},X=(c(66),function(){var e=Object(u.c)((function(e){return e.columns}));return Object(i.jsxs)("div",{className:"board__wrapper",children:[e.map((function(e){return Object(i.jsx)(V,{item:e},e.id)})),Object(i.jsxs)("div",{className:"board__new-card",children:[Object(i.jsx)("img",{src:Q,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"]})]})}),Z=(c(67),function(){var e=Object(r.useState)(!0),t=Object(p.a)(e,2),c=t[0],n=t[1],a=Object(u.c)((function(e){return e.user.currentUser}));return Object(i.jsx)("div",{className:"App",children:a?Object(i.jsx)(X,{}):Object(i.jsx)(z,{isShow:c,onHide:function(){return n(!1)}})})}),$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};d.a.render(Object(i.jsx)(u.a,{store:w,children:Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[68,1,2]]]);
//# sourceMappingURL=main.f9677d92.chunk.js.map