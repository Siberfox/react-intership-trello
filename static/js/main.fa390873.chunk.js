(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),s=c(14),r=c.n(s),o=(c(38),c(39),c(8)),d=c(9),l=c(56),u=c(32),m=c(58),j=function(e){var t=e.show,c=e.onHide,i=e.setUserName,s=Object(a.useState)(""),r=Object(o.a)(s,2),d=r[0],j=r[1],b=function(){d&&(c(),i(d))};return Object(n.jsxs)(l.a,{show:t,onHide:c,size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(n.jsx)(l.a.Header,{closeButton:!0,children:Object(n.jsx)(l.a.Title,{id:"contained-modal-title-vcenter",children:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?"})}),Object(n.jsx)(l.a.Body,{children:Object(n.jsx)(u.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b()},autoFocus:!0})}),Object(n.jsx)(l.a.Footer,{children:Object(n.jsx)(m.a,{onClick:b,variant:"success",children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})})]})},b=c(57),O=c.p+"static/media/comments.44398cb6.svg",p=c(53),h=c(54),x=c(55),f=(c(43),function(e){var t=e.cardId,c=e.columnId,i=e.comments,s=Object(a.useState)(""),r=Object(o.a)(s,2),d=r[0],j=r[1],b=Object(a.useContext)(y);return Object(n.jsxs)(l.a.Footer,{className:"card-options__footer",children:[Object(n.jsxs)(p.a,{className:"mb-3",children:[Object(n.jsx)(u.a,{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",onChange:function(e){j(e.target.value)},value:d}),Object(n.jsx)(p.a.Append,{children:Object(n.jsx)(m.a,{variant:"outline-success",onClick:function(){d&&(null===b||void 0===b||b.addNewComment(c,t,d),j(""))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(n.jsx)("ul",{className:"comments-list",children:i.map((function(e){return Object(n.jsxs)("li",{className:"comments-item",children:[Object(n.jsxs)("div",{className:"comments-body",children:[Object(n.jsx)("h5",{children:e.name}),Object(n.jsx)("p",{children:e.text})]}),Object(n.jsxs)("div",{className:"header__icons",children:[Object(n.jsx)(h.a,{className:"icon-edit",size:17}),Object(n.jsx)(x.a,{className:"icon-delete",size:17})]})]},e.id)}))})]})}),N=(c(44),function(e){var t=e.cardId,c=e.columnId,i=e.description,s=Object(a.useState)(""),r=Object(o.a)(s,2),d=r[0],j=r[1],b=Object(a.useState)(!1),O=Object(o.a)(b,2),f=O[0],N=O[1],v=Object(a.useContext)(y);return Object(n.jsxs)(l.a.Body,{className:"card-options__body",children:[Object(n.jsxs)("div",{className:"description-title",children:[Object(n.jsx)("h3",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 "}),Object(n.jsxs)("div",{className:"header__icons",children:[Object(n.jsx)(h.a,{className:"icon-edit",size:17,onClick:function(){return N(!0)}}),Object(n.jsx)(x.a,{className:"icon-delete",size:17,onClick:function(){return null===v||void 0===v?void 0:v.deleteDescription(c,t)}})]})]}),i&&!f?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("p",{children:i})}):Object(n.jsxs)(p.a,{className:"mb-3",children:[Object(n.jsx)(u.a,{id:"basic-url",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){j(e.target.value)},value:d}),Object(n.jsx)(p.a.Append,{children:Object(n.jsx)(m.a,{variant:"outline-success",onClick:function(){d&&(null===v||void 0===v||v.addNewDecription(c,t,d),j("")),N(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})}),v=(c(45),function(e){var t=e.cardName,c=(e.cardId,e.columnId,e.columnName);return Object(n.jsx)(l.a.Header,{closeButton:!0,children:Object(n.jsxs)(l.a.Title,{id:"contained-modal-title-vcenter",className:"header__container",children:[Object(n.jsxs)("p",{children:[c," > ",t]}),Object(n.jsxs)("div",{className:"header__icons",children:[Object(n.jsx)(h.a,{className:"icon-edit",size:20}),Object(n.jsx)(x.a,{className:"icon-delete",size:20})]})]})})}),g=(c(46),function(e){var t=e.cardName,c=e.show,a=e.onHide,i=e.description,s=e.columnName,r=e.comments,o=e.cardId,d=e.columnId;return Object(n.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:Object(n.jsxs)(l.a,{show:c,onHide:a,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(n.jsx)(v,{cardId:o,columnId:d,cardName:t,columnName:s}),Object(n.jsx)(N,{description:i,cardId:o,columnId:d}),Object(n.jsx)(f,{comments:r,cardId:o,columnId:d})]})})}),C=(c(47),function(e){var t=e.cardName,c=e.comments,i=e.description,s=e.columnName,r=e.cardId,d=e.columnId,l=Object(a.useState)(!1),u=Object(o.a)(l,2),m=u[0],j=u[1];return Object(n.jsxs)("div",{className:"card__wrapper",onClick:function(){return j(!0)},children:[Object(n.jsx)("p",{children:t}),c.length?Object(n.jsxs)("div",{className:"comments-icon",children:[Object(n.jsx)("img",{src:O,alt:"comments"}),Object(n.jsx)("p",{className:"comments-icon__text",children:c.length})]}):"",Object(n.jsx)(g,{cardName:t,columnName:s,show:m,onHide:function(){return j(!1)},description:i,comments:c,columnId:d,cardId:r})]})}),I=(c(48),c.p+"static/media/plus.05989119.svg"),_=function(e){var t=e.item,c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0],r=i[1],d=Object(a.useState)(""),l=Object(o.a)(d,2),j=l[0],O=l[1],p=Object(a.useState)(""),h=Object(o.a)(p,2),x=h[0],f=h[1],N=Object(a.useState)(!1),v=Object(o.a)(N,2),g=v[0],_=v[1],w=Object(a.useContext)(y);return Object(n.jsxs)("div",{className:"card-list__wrapper",children:[g?Object(n.jsx)(u.a,{autoFocus:!0,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:t.columnName,onChange:function(e){O(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(_(!1),j&&(null===w||void 0===w||w.editColumnName(t.id,j)))}}):Object(n.jsx)("h4",{onClick:function(){_(!0)},children:t.columnName}),t.cards.map((function(e){return Object(n.jsx)(C,{cardName:e.cardName,description:e.description,comments:e.comments,columnName:t.columnName,columnId:t.id,cardId:e.id},e.id)})),s?Object(n.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),x&&(null===w||void 0===w||w.addNewCard(t.id,x),f(""),r(!1)),r(!1)},className:"card-list__form",children:[Object(n.jsx)(b.a.Group,{controlId:"formBasicPassword",children:Object(n.jsx)(b.a.Control,{type:"text",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",autoFocus:!0,onChange:function(e){f(e.target.value)}})}),Object(n.jsx)(m.a,{variant:"success",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]}):Object(n.jsxs)("button",{className:"card-list__new-card",onClick:function(){r(!0)},children:[Object(n.jsx)("img",{src:I,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"]})]})},w=(c(49),function(e){e.username;var t=e.data;return Object(n.jsxs)("div",{className:"board__wrapper",children:[t.map((function(e){return Object(n.jsx)(_,{item:e},e.id)})),Object(n.jsxs)("div",{className:"board__new-card",children:[Object(n.jsx)("img",{src:I,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"]})]})}),y=(c(50),i.a.createContext(void 0)),S=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(!0),r=Object(o.a)(s,2),l=r[0],u=r[1],m=Object(a.useState)([{id:Object(d.a)(),columnName:"TODO",cards:[{cardName:"create page",id:Object(d.a)(),description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus, nesciunt similique ratione neque aspernatur consequatur veniam exercitationem nostrum quo laborum ipsa, esse nihil pariatur. Ex quasi explicabo fugit unde.",comments:[{name:"Jessy",text:"LOL",id:Object(d.a)()},{name:"Nancy",text:"Is this lorem ipsum??? Where is real description?",id:Object(d.a)()}]},{cardName:"add feature",id:Object(d.a)(),description:"",comments:[]},{cardName:"deploy",id:Object(d.a)(),description:"",comments:[]}]},{id:Object(d.a)(),columnName:"In Progress",cards:[{cardName:"design for new page",id:Object(d.a)(),description:"",comments:[{name:"Michael Scott",text:"NO... no no no please no",id:Object(d.a)()}]}]},{id:Object(d.a)(),columnName:"Testing",cards:[{cardName:"write unit tests",id:Object(d.a)(),description:"",comments:[]},{cardName:"hand testing",id:Object(d.a)(),description:"",comments:[{name:"Chief",text:"good luck!",id:Object(d.a)()}]}]},{id:Object(d.a)(),columnName:"Done",cards:[{cardName:"create architecture",id:Object(d.a)(),description:"",comments:[]}]}]),b=Object(o.a)(m,2),O=b[0],p=b[1];Object(a.useEffect)((function(){var e=localStorage.getItem("username");e&&i(e);var t=localStorage.getItem("board");t&&p(JSON.parse(t))}),[]);return Object(n.jsx)("div",{className:"App",children:c?Object(n.jsx)(y.Provider,{value:{editColumnName:function(e,t){p(O.map((function(c){return c.id===e&&(c.columnName=t),c})))},addNewCard:function(e,t){p(O.map((function(c){return c.id===e&&c.cards.push({cardName:t,id:Object(d.a)(),description:"",comments:[]}),c})))},addNewComment:function(e,t,n){p(O.map((function(a){return a.id===e&&a.cards.map((function(e){return e.id===t&&e.comments.push({name:c,text:n,id:Object(d.a)()}),e})),a})))},addNewDecription:function(e,t,c){p(O.map((function(n){return n.id===e&&n.cards.map((function(e){return e.id===t&&(e.description=c),e})),n})))},deleteDescription:function(e,t){p(O.map((function(c){return c.id===e&&c.cards.map((function(e){return e.id===t&&(e.description=""),e})),c})))}},children:Object(n.jsx)(w,{username:c,data:O})}):Object(n.jsx)(j,{show:l,onHide:function(){return u(!1)},setUserName:function(e){i(e),localStorage.setItem("username",e)}})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),k()}},[[51,1,2]]]);
//# sourceMappingURL=main.fa390873.chunk.js.map