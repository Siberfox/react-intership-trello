(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(13),r=n.n(s),o=(n(40),n(41),n(28)),d=n(7),l=n(59),u=n(34),j=n(61),m=function(e){var t=e.isShow,n=e.onHide,i=e.setUserName,s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],m=r[1],b=function(){o&&(n(),i(o))};return Object(c.jsxs)(l.a,{show:t,onHide:n,size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(c.jsx)(l.a.Header,{closeButton:!0,children:Object(c.jsx)(l.a.Title,{id:"contained-modal-title-vcenter",children:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?"})}),Object(c.jsx)(l.a.Body,{children:Object(c.jsx)(u.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",onChange:function(e){m(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b()},autoFocus:!0})}),Object(c.jsx)(l.a.Footer,{children:Object(c.jsx)(j.a,{onClick:b,variant:"success",children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})})]})},b=n(60),O=n.p+"static/media/comments.44398cb6.svg",h=n(56),x=i.a.createContext(void 0),f=n(57),p=n(58),v=(n(45),function(e){var t=e.name,n=e.text,i=e.commentId,s=e.username,r=Object(a.useState)(""),o=Object(d.a)(r,2),l=o[0],m=o[1],b=Object(a.useState)(!1),O=Object(d.a)(b,2),v=O[0],g=O[1],N=Object(a.useContext)(x);return Object(c.jsx)(c.Fragment,{children:v?Object(c.jsxs)(h.a,{className:"mb-3",children:[Object(c.jsx)(u.a,{id:"basic-url",placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",value:l,onChange:function(e){m(e.target.value)}}),Object(c.jsx)(h.a.Append,{children:Object(c.jsx)(j.a,{variant:"outline-success",onClick:function(){l&&(null===N||void 0===N||N.editComment(i,l),m("")),g(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}):Object(c.jsxs)("li",{className:"comments-item",children:[Object(c.jsxs)("div",{className:"comments-body",children:[Object(c.jsx)("h5",{children:t}),Object(c.jsx)("p",{children:n})]}),Object(c.jsxs)("div",{className:"header__icons",children:[Object(c.jsx)(f.a,{className:"icon-edit",size:17,onClick:function(){s===t?g(!0):alert("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")}}),Object(c.jsx)(p.a,{className:"icon-delete",size:17,onClick:function(){return s===t?null===N||void 0===N?void 0:N.deleteComment(i):alert("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")}})]})]})})}),g=(n(46),function(e){var t,n=e.cardId,i=e.username,s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],m=r[1],b=Object(a.useContext)(x),O=null===b||void 0===b||null===(t=b.comments)||void 0===t?void 0:t.filter((function(e){return e.cardId===n}));return Object(c.jsxs)(l.a.Footer,{className:"card-options__footer",children:[Object(c.jsxs)(h.a,{className:"mb-3",children:[Object(c.jsx)(u.a,{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",onChange:function(e){m(e.target.value)},value:o}),Object(c.jsx)(h.a.Append,{children:Object(c.jsx)(j.a,{variant:"outline-success",onClick:function(){o&&(null===b||void 0===b||b.addNewComment(n,o),m(""))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(c.jsx)("ul",{className:"comments-list",children:null===O||void 0===O?void 0:O.map((function(e){return Object(c.jsx)(v,{name:e.name,text:e.text,commentId:e.id,username:i},e.id)}))})]})}),N=(n(47),function(e){var t=e.cardId,n=e.description,i=Object(a.useState)(""),s=Object(d.a)(i,2),r=s[0],o=s[1],m=Object(a.useState)(!1),b=Object(d.a)(m,2),O=b[0],v=b[1],g=Object(a.useContext)(x);return Object(c.jsxs)(l.a.Body,{className:"card-options__body",children:[Object(c.jsxs)("div",{className:"description-title",children:[Object(c.jsx)("h3",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 "}),Object(c.jsxs)("div",{className:"header__icons",children:[Object(c.jsx)(f.a,{className:"icon-edit",size:17,onClick:function(){return v(!0)}}),Object(c.jsx)(p.a,{className:"icon-delete",size:17,onClick:function(){return null===g||void 0===g?void 0:g.deleteDescription(t)}})]})]}),n&&!O?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("p",{children:n})}):Object(c.jsxs)(h.a,{className:"mb-3",children:[Object(c.jsx)(u.a,{id:"basic-url",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){o(e.target.value)},value:r}),Object(c.jsx)(h.a.Append,{children:Object(c.jsx)(j.a,{variant:"outline-success",onClick:function(){r&&(null===g||void 0===g||g.addNewDecription(t,r),o("")),v(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})}),C=(n(48),function(e){var t=e.cardName,n=e.cardId,i=e.columnName,s=e.author,r=Object(a.useState)(""),o=Object(d.a)(r,2),m=o[0],b=o[1],O=Object(a.useState)(!1),v=Object(d.a)(O,2),g=v[0],N=v[1],C=Object(a.useContext)(x);return Object(c.jsx)(l.a.Header,{closeButton:!0,children:Object(c.jsx)(l.a.Title,{id:"contained-modal-title-vcenter",className:"header__container",children:g?Object(c.jsxs)(h.a,{className:"mb-3",children:[Object(c.jsx)(u.a,{id:"basic-url",placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){b(e.target.value)},value:m}),Object(c.jsx)(h.a.Append,{children:Object(c.jsx)(j.a,{variant:"outline-success",onClick:function(){m&&(null===C||void 0===C||C.editCardName(n,m),b("")),N(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:[i," > ",t,Object(c.jsxs)("small",{children:["(",s,")"]})]}),Object(c.jsxs)("div",{className:"header__icons",children:[Object(c.jsx)(f.a,{className:"icon-edit",size:20,onClick:function(){return N(!0)}}),Object(c.jsx)(p.a,{className:"icon-delete",size:20,onClick:function(){null===C||void 0===C||C.deleteCard(n)}})]})]})})})}),I=(n(49),function(e){var t=e.cardName,n=e.isShow,a=e.onHide,i=e.description,s=e.columnName,r=e.cardId,o=e.username,d=e.author;return Object(c.jsx)("div",{onClick:function(e){return e.stopPropagation()},role:"button",onKeyPress:function(e){"Enter"===e.key&&e.stopPropagation()},tabIndex:0,children:Object(c.jsxs)(l.a,{show:n,onHide:a,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(c.jsx)(C,{cardId:r,cardName:t,columnName:s,author:d}),Object(c.jsx)(N,{description:i,cardId:r}),Object(c.jsx)(g,{cardId:r,username:o})]})})}),S=(n(50),function(e){var t,n=e.card,i=e.username,s=e.columnName,r=Object(a.useState)(!1),o=Object(d.a)(r,2),l=o[0],u=o[1],j=Object(a.useContext)(x),m=null===j||void 0===j||null===(t=j.comments)||void 0===t?void 0:t.filter((function(e){return e.cardId===n.id})),b=function(){return u(!0)};return Object(c.jsxs)("div",{className:"card__wrapper",onClick:b,onKeyPress:function(e){"Enter"===e.key&&b()},role:"button",tabIndex:0,children:[Object(c.jsx)("p",{children:n.name}),(null===m||void 0===m?void 0:m.length)?Object(c.jsxs)("div",{className:"comments-icon",children:[Object(c.jsx)("img",{src:O,alt:"comments"}),Object(c.jsx)("p",{className:"comments-icon__text",children:null===m||void 0===m?void 0:m.length})]}):"",Object(c.jsx)(I,{cardName:n.name,columnName:s,isShow:l,onHide:function(){return u(!1)},description:n.description,cardId:n.id,username:i,author:n.author})]})}),y=(n(51),n.p+"static/media/plus.05989119.svg"),k=function(e){var t,n=e.item,i=e.username,s=Object(a.useState)(!1),r=Object(d.a)(s,2),o=r[0],l=r[1],m=Object(a.useState)(""),O=Object(d.a)(m,2),h=O[0],f=O[1],p=Object(a.useState)(""),v=Object(d.a)(p,2),g=v[0],N=v[1],C=Object(a.useState)(!1),I=Object(d.a)(C,2),k=I[0],_=I[1],w=Object(a.useContext)(x),P=null===w||void 0===w||null===(t=w.cards)||void 0===t?void 0:t.filter((function(e){return e.columnId===n.id})),F=function(){_(!0)};return Object(c.jsxs)("div",{className:"card-list__wrapper",children:[k?Object(c.jsx)(u.a,{autoFocus:!0,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:n.name,onChange:function(e){f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(_(!1),h&&(null===w||void 0===w||w.editColumnName(n.id,h)))}}):Object(c.jsx)("div",{onClick:F,role:"button",onKeyPress:function(e){"Enter"===e.key&&F()},tabIndex:0,children:Object(c.jsx)("h4",{children:n.name})}),null===P||void 0===P?void 0:P.map((function(e){return Object(c.jsx)(S,{card:e,username:i,columnName:n.name},e.id)})),o?Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),g&&(null===w||void 0===w||w.addNewCard(n.id,g),N(""),l(!1)),l(!1)},className:"card-list__form",children:[Object(c.jsx)(b.a.Group,{controlId:"formBasicPassword",children:Object(c.jsx)(b.a.Control,{type:"text",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",autoFocus:!0,onChange:function(e){N(e.target.value)}})}),Object(c.jsx)(j.a,{variant:"success",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]}):Object(c.jsxs)("button",{className:"card-list__new-card",onClick:function(){l(!0)},type:"button",children:[Object(c.jsx)("img",{src:y,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"]})]})},_=(n(52),function(e){var t=e.username,n=e.columns;return Object(c.jsxs)("div",{className:"board__wrapper",children:[n.map((function(e){return Object(c.jsx)(k,{item:e,username:t},e.id)})),Object(c.jsxs)("div",{className:"board__new-card",children:[Object(c.jsx)("img",{src:y,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"]})]})}),w=[{id:1,name:"TODO"},{id:2,name:"add feature"},{id:3,name:"In Progress"},{id:4,name:"Done"}],P=[{name:"create page",id:11,columnId:1,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus, nesciunt similique ratione neque aspernatur consequatur veniam exercitationem nostrum quo laborum ipsa, esse nihil pariatur. Ex quasi explicabo fugit unde.",author:"Jack"},{name:"add feature",id:12,columnId:1,description:"",author:"Jack"},{name:"deploy",id:13,columnId:1,description:"",author:"Phil"},{name:"design for new page",id:14,columnId:2,description:"",author:"Helen"},{name:"write unit tests",id:15,columnId:3,description:"",author:"Yanis"},{name:"hand testing",id:16,columnId:3,description:"",author:"Yanis"},{name:"create architecture",id:17,columnId:4,description:"",author:"Jack"}],F=[{name:"Jessy",text:"LOL",id:101,cardId:11},{name:"Nancy",text:"Is this lorem ipsum??? Where is real description?",id:102,cardId:11},{name:"Chief",text:"good luck!",id:103,cardId:14},{name:"Michael Scott",text:"NO... no no no please no",id:104,cardId:16}],J=(n(53),function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!0),r=Object(d.a)(s,2),l=r[0],u=r[1],j=Object(a.useState)(w),b=Object(d.a)(j,2),O=b[0],h=b[1],f=Object(a.useState)(P),p=Object(d.a)(f,2),v=p[0],g=p[1],N=Object(a.useState)(F),C=Object(d.a)(N,2),I=C[0],S=C[1];Object(a.useEffect)((function(){var e=localStorage.getItem("username");e&&i(e);var t=localStorage.getItem("columns");t&&h(JSON.parse(t));var n=localStorage.getItem("cards");n&&g(JSON.parse(n));var c=localStorage.getItem("comments");c&&S(JSON.parse(c))}),[]),Object(a.useEffect)((function(){localStorage.setItem("columns",JSON.stringify(O)),localStorage.setItem("cards",JSON.stringify(v)),localStorage.setItem("comments",JSON.stringify(I))}),[O,v,I]);return Object(c.jsx)("div",{className:"App",children:n?Object(c.jsx)(x.Provider,{value:{editColumnName:function(e,t){h(O.map((function(n){return n.id===e&&(n.name=t),n})))},addNewCard:function(e,t){g([].concat(Object(o.a)(v),[{name:t,id:v[v.length-1].id+1,columnId:e,description:"",author:n}]))},addNewComment:function(e,t){S([].concat(Object(o.a)(I),[{name:n,text:t,id:I[I.length-1].id+1,cardId:e}]))},addNewDecription:function(e,t){g(v.map((function(n){return n.id===e&&(n.description=t),n})))},deleteDescription:function(e){g(v.map((function(t){return t.id===e&&(t.description=""),t})))},editCardName:function(e,t){g(v.map((function(n){return n.id===e&&(n.name=t),n})))},deleteCard:function(e){g(v.filter((function(t){return t.id!==e})))},editComment:function(e,t){S(I.map((function(n){return n.id===e&&(n.text=t),n})))},deleteComment:function(e){S(I.filter((function(t){return t.id!==e})))},cards:v,comments:I},children:Object(c.jsx)(_,{username:n,columns:O})}):Object(c.jsx)(m,{isShow:l,onHide:function(){return u(!1)},setUserName:function(e){i(e),localStorage.setItem("username",e)}})})}),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root")),z()}},[[54,1,2]]]);
//# sourceMappingURL=main.dacde228.chunk.js.map