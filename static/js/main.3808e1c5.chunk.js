(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(13),r=n.n(s),o=(n(40),n(41),n(29)),d=n(7),l=n(59),u=n(34),m=n(61),j=function(e){var t=e.show,n=e.onHide,i=e.setUserName,s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],j=r[1],b=function(){o&&(n(),i(o))};return Object(c.jsxs)(l.a,{show:t,onHide:n,size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(c.jsx)(l.a.Header,{closeButton:!0,children:Object(c.jsx)(l.a.Title,{id:"contained-modal-title-vcenter",children:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?"})}),Object(c.jsx)(l.a.Body,{children:Object(c.jsx)(u.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b()},autoFocus:!0})}),Object(c.jsx)(l.a.Footer,{children:Object(c.jsx)(m.a,{onClick:b,variant:"success",children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})})]})},b=n(60),O=n.p+"static/media/comments.44398cb6.svg",h=n(56),p=n(57),x=n(58),f=(n(45),function(e){var t=e.name,n=e.text,i=e.commentId,s=e.username,r=Object(a.useState)(""),o=Object(d.a)(r,2),l=o[0],j=o[1],b=Object(a.useState)(!1),O=Object(d.a)(b,2),f=O[0],v=O[1],N=Object(a.useContext)(J);return Object(c.jsx)(c.Fragment,{children:f?Object(c.jsxs)(h.a,{className:"mb-3",children:[Object(c.jsx)(u.a,{id:"basic-url",placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",value:l,onChange:function(e){j(e.target.value)}}),Object(c.jsx)(h.a.Append,{children:Object(c.jsx)(m.a,{variant:"outline-success",onClick:function(){l&&(null===N||void 0===N||N.editComment(i,l),j("")),v(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}):Object(c.jsxs)("li",{className:"comments-item",children:[Object(c.jsxs)("div",{className:"comments-body",children:[Object(c.jsx)("h5",{children:t}),Object(c.jsx)("p",{children:n})]}),Object(c.jsxs)("div",{className:"header__icons",children:[Object(c.jsx)(p.a,{className:"icon-edit",size:17,onClick:function(){s===t?v(!0):alert("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")}}),Object(c.jsx)(x.a,{className:"icon-delete",size:17,onClick:function(){return s===t?null===N||void 0===N?void 0:N.deleteComment(i):alert("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")}})]})]})})}),v=(n(46),function(e){var t=e.cardId,n=e.username,i=e.comments,s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],j=r[1],b=Object(a.useContext)(J);return Object(c.jsxs)(l.a.Footer,{className:"card-options__footer",children:[Object(c.jsxs)(h.a,{className:"mb-3",children:[Object(c.jsx)(u.a,{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",onChange:function(e){j(e.target.value)},value:o}),Object(c.jsx)(h.a.Append,{children:Object(c.jsx)(m.a,{variant:"outline-success",onClick:function(){o&&(null===b||void 0===b||b.addNewComment(t,o),j(""))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(c.jsx)("ul",{className:"comments-list",children:i.filter((function(e){return e.cardId===t})).map((function(e){return Object(c.jsx)(f,{name:e.name,text:e.text,commentId:e.id,username:n},e.id)}))})]})}),N=(n(47),function(e){var t=e.cardId,n=e.description,i=Object(a.useState)(""),s=Object(d.a)(i,2),r=s[0],o=s[1],j=Object(a.useState)(!1),b=Object(d.a)(j,2),O=b[0],f=b[1],v=Object(a.useContext)(J);return Object(c.jsxs)(l.a.Body,{className:"card-options__body",children:[Object(c.jsxs)("div",{className:"description-title",children:[Object(c.jsx)("h3",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 "}),Object(c.jsxs)("div",{className:"header__icons",children:[Object(c.jsx)(p.a,{className:"icon-edit",size:17,onClick:function(){return f(!0)}}),Object(c.jsx)(x.a,{className:"icon-delete",size:17,onClick:function(){return null===v||void 0===v?void 0:v.deleteDescription(t)}})]})]}),n&&!O?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("p",{children:n})}):Object(c.jsxs)(h.a,{className:"mb-3",children:[Object(c.jsx)(u.a,{id:"basic-url",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){o(e.target.value)},value:r}),Object(c.jsx)(h.a.Append,{children:Object(c.jsx)(m.a,{variant:"outline-success",onClick:function(){r&&(null===v||void 0===v||v.addNewDecription(t,r),o("")),f(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})}),g=(n(48),function(e){var t=e.cardName,n=e.cardId,i=e.columnName,s=e.author,r=Object(a.useState)(""),o=Object(d.a)(r,2),j=o[0],b=o[1],O=Object(a.useState)(!1),f=Object(d.a)(O,2),v=f[0],N=f[1],g=Object(a.useContext)(J);return Object(c.jsx)(l.a.Header,{closeButton:!0,children:Object(c.jsx)(l.a.Title,{id:"contained-modal-title-vcenter",className:"header__container",children:v?Object(c.jsxs)(h.a,{className:"mb-3",children:[Object(c.jsx)(u.a,{id:"basic-url",placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){b(e.target.value)},value:j}),Object(c.jsx)(h.a.Append,{children:Object(c.jsx)(m.a,{variant:"outline-success",onClick:function(){j&&(null===g||void 0===g||g.editCardName(n,j),b("")),N(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:[i," > ",t,Object(c.jsxs)("small",{children:["(",s,")"]})]}),Object(c.jsxs)("div",{className:"header__icons",children:[Object(c.jsx)(p.a,{className:"icon-edit",size:20,onClick:function(){return N(!0)}}),Object(c.jsx)(x.a,{className:"icon-delete",size:20,onClick:function(){null===g||void 0===g||g.deleteCard(n)}})]})]})})})}),C=(n(49),function(e){var t=e.cardName,n=e.isShow,a=e.onHide,i=e.description,s=e.columnName,r=e.cardId,o=e.username,d=e.comments,u=e.author;return Object(c.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:Object(c.jsxs)(l.a,{show:n,onHide:a,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(c.jsx)(g,{cardId:r,cardName:t,columnName:s,author:u}),Object(c.jsx)(N,{description:i,cardId:r}),Object(c.jsx)(v,{cardId:r,username:o,comments:d})]})})}),I=(n(50),function(e){var t=e.card,n=e.username,i=e.columnName,s=e.comments,r=Object(a.useState)(!1),o=Object(d.a)(r,2),l=o[0],u=o[1];return Object(c.jsxs)("div",{className:"card__wrapper",onClick:function(){return u(!0)},children:[Object(c.jsx)("p",{children:t.name}),t.comments?Object(c.jsxs)("div",{className:"comments-icon",children:[Object(c.jsx)("img",{src:O,alt:"comments"}),Object(c.jsx)("p",{className:"comments-icon__text",children:t.comments})]}):"",Object(c.jsx)(C,{cardName:t.name,columnName:i,isShow:l,onHide:function(){return u(!1)},description:t.description,cardId:t.id,username:n,comments:s,author:t.author})]})}),S=(n(51),n.p+"static/media/plus.05989119.svg"),y=function(e){var t=e.item,n=e.username,i=e.cards,s=e.comments,r=Object(a.useState)(!1),o=Object(d.a)(r,2),l=o[0],j=o[1],O=Object(a.useState)(""),h=Object(d.a)(O,2),p=h[0],x=h[1],f=Object(a.useState)(""),v=Object(d.a)(f,2),N=v[0],g=v[1],C=Object(a.useState)(!1),y=Object(d.a)(C,2),_=y[0],k=y[1],w=Object(a.useContext)(J),F=i.filter((function(e){return e.columnId===t.id}));return Object(c.jsxs)("div",{className:"card-list__wrapper",children:[_?Object(c.jsx)(u.a,{autoFocus:!0,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:t.columnName,onChange:function(e){x(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(k(!1),p&&(null===w||void 0===w||w.editColumnName(t.id,p)))}}):Object(c.jsx)("h4",{onClick:function(){k(!0)},children:t.columnName}),null===F||void 0===F?void 0:F.map((function(e){return Object(c.jsx)(I,{card:e,username:n,columnName:t.columnName,comments:s},e.id)})),l?Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),N&&(null===w||void 0===w||w.addNewCard(t.id,N),g(""),j(!1)),j(!1)},className:"card-list__form",children:[Object(c.jsx)(b.a.Group,{controlId:"formBasicPassword",children:Object(c.jsx)(b.a.Control,{type:"text",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",autoFocus:!0,onChange:function(e){g(e.target.value)}})}),Object(c.jsx)(m.a,{variant:"success",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]}):Object(c.jsxs)("button",{className:"card-list__new-card",onClick:function(){j(!0)},children:[Object(c.jsx)("img",{src:S,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"]})]})},_=(n(52),function(e){var t=e.username,n=e.columns,a=e.cards,i=e.comments;return Object(c.jsxs)("div",{className:"board__wrapper",children:[n.map((function(e){return Object(c.jsx)(y,{item:e,username:t,cards:a,comments:i},e.id)})),Object(c.jsxs)("div",{className:"board__new-card",children:[Object(c.jsx)("img",{src:S,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"]})]})}),k=[{id:1,columnName:"TODO"},{id:2,columnName:"add feature"},{id:3,columnName:"In Progress"},{id:4,columnName:"Done"}],w=[{name:"create page",id:11,columnId:1,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus, nesciunt similique ratione neque aspernatur consequatur veniam exercitationem nostrum quo laborum ipsa, esse nihil pariatur. Ex quasi explicabo fugit unde.",author:"Jack",comments:2},{name:"add feature",id:12,columnId:1,description:"",author:"Jack",comments:0},{name:"deploy",id:13,columnId:1,description:"",author:"Phil",comments:0},{name:"design for new page",id:14,columnId:2,description:"",author:"Helen",comments:1},{name:"write unit tests",id:15,columnId:3,description:"",author:"Yanis",comments:0},{name:"hand testing",id:16,columnId:3,description:"",author:"Yanis",comments:1},{name:"create architecture",id:17,columnId:4,description:"",author:"Jack",comments:0}],F=[{name:"Jessy",text:"LOL",id:101,cardId:11},{name:"Nancy",text:"Is this lorem ipsum??? Where is real description?",id:102,cardId:11},{name:"Chief",text:"good luck!",id:103,cardId:14},{name:"Michael Scott",text:"NO... no no no please no",id:104,cardId:16}],J=(n(53),i.a.createContext(void 0)),z=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!0),r=Object(d.a)(s,2),l=r[0],u=r[1],m=Object(a.useState)(k),b=Object(d.a)(m,2),O=b[0],h=b[1],p=Object(a.useState)(w),x=Object(d.a)(p,2),f=x[0],v=x[1],N=Object(a.useState)(F),g=Object(d.a)(N,2),C=g[0],I=g[1];Object(a.useEffect)((function(){var e=localStorage.getItem("username");e&&i(e);var t=localStorage.getItem("columns");t&&h(JSON.parse(t));var n=localStorage.getItem("cards");n&&v(JSON.parse(n));var c=localStorage.getItem("comments");c&&I(JSON.parse(c))}),[]),Object(a.useEffect)((function(){localStorage.setItem("columns",JSON.stringify(O)),localStorage.setItem("cards",JSON.stringify(f)),localStorage.setItem("comments",JSON.stringify(C))}),[O,f,C]);return Object(c.jsx)("div",{className:"App",children:n?Object(c.jsx)(J.Provider,{value:{editColumnName:function(e,t){h(O.map((function(n){return n.id===e&&(n.columnName=t),n})))},addNewCard:function(e,t){v([].concat(Object(o.a)(f),[{name:t,id:f[f.length-1].id+1,columnId:e,description:"",author:n,comments:0}]))},addNewComment:function(e,t){I([].concat(Object(o.a)(C),[{name:n,text:t,id:C[C.length-1].id+1,cardId:e}])),v(f.map((function(t){return t.id===e&&(t.comments+=1),t})))},addNewDecription:function(e,t){v(f.map((function(n){return n.id===e&&(n.description=t),n})))},deleteDescription:function(e){v(f.map((function(t){return t.id===e&&(t.description=""),t})))},editCardName:function(e,t){v(f.map((function(n){return n.id===e&&(n.name=t),n})))},deleteCard:function(e){v(f.filter((function(t){return t.id!==e})))},editComment:function(e,t){I(C.map((function(n){return n.id===e&&(n.text=t),n})))},deleteComment:function(e){I(C.filter((function(t){return t.id!==e})))}},children:Object(c.jsx)(_,{username:n,columns:O,cards:f,comments:C})}):Object(c.jsx)(j,{show:l,onHide:function(){return u(!1)},setUserName:function(e){i(e),localStorage.setItem("username",e)}})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),D()}},[[54,1,2]]]);
//# sourceMappingURL=main.3808e1c5.chunk.js.map