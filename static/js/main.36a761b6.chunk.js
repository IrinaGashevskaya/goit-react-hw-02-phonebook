(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),s=(n(15),n(10)),o=n(8),l=n(3),u=n(4),b=n(6),m=n(5),d=n(23),h=n(2),j=(n(16),n(0)),f=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(h.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:"label-form",children:["Name",Object(j.jsx)("input",{className:"input",type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:"label-form",children:["Number",Object(j.jsx)("input",{className:"input",type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:"button-form",type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component),p=(n(18),function(e){var t=e.contacts,n=e.onDelete;return Object(j.jsx)("ul",{className:"list",children:t.map((function(e){return Object(j.jsxs)("li",{className:"item",children:[Object(j.jsxs)("p",{className:"name",children:[e.name,": ",e.number]}),Object(j.jsx)("button",{className:"button","data-key":e.id,type:"button",name:"delete",onClick:n,children:"Delete"})]},e.id)}))})}),O=(n(19),function(e){var t=e.value,n=e.handleChange;return Object(j.jsxs)("label",{className:"label",children:["Find contacts by name",Object(j.jsx)("input",{className:"input-filter",type:"text",value:t,onChange:n})]})}),C=(n(20),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContactSubmit=function(t){if(e.state.contacts.map((function(e){return e.name.toLowerCase()})).includes(t.name.toLowerCase().trim()))alert("".concat(t.name," is already in contacts "));else{var n=Object(o.a)(Object(o.a)({},t),{},{id:Object(d.a)()});e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[n])}}))}},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.onDeleteContact=function(t){var n=t.target.getAttribute("data-key");e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"header",children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addContactSubmit}),Object(j.jsx)("h2",{className:"title",children:"Contacts"}),Object(j.jsx)(O,{value:e,handleChange:this.changeFilter}),Object(j.jsx)(p,{contacts:t,onDelete:this.onDeleteContact})]})}}]),n}(c.a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),g()}],[[21,1,2]]]);
//# sourceMappingURL=main.36a761b6.chunk.js.map