(this["webpackJsonpblog-cms"]=this["webpackJsonpblog-cms"]||[]).push([[0],{130:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(39),s=n.n(c),o=n(37),i=(n(129),n(130),n(11)),u=n(9),l=n.n(u),d=n(10),j=n(8),h=n(1);n(36).config();var p=Object(r.createContext)(),m=function(e){var t=Object(r.useState)(!0),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),o=Object(j.a)(s,2),i=o[0],u=o[1],m=Object(r.useState)(null),b=Object(j.a)(m,2),f=b[0],x=b[1],O=Object(r.useState)(!0),v=Object(j.a)(O,2),g=v[0],y=v[1],w=Object(r.useState)(""),k=Object(j.a)(w,2),N=k[0],C=k[1],S=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/create",n={method:"POST",mode:"cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/create",n);case 5:r=e.sent,r.json().then((function(e){200!==r.status?C(e.message[0].msg):(localStorage.setItem("token",e.token),localStorage.setItem("user",e.user),x(localStorage.getItem("user")),C(""))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),C(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/login",n={method:"POST",mode:"cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/login",n);case 5:r=e.sent,r.json().then((function(e){200!==r.status?C(e.message):(localStorage.setItem("token",e.token),localStorage.setItem("user",e.user),x(localStorage.getItem("user")),C(""))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),C(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){x(localStorage.getItem("user"))}),[]);var P={showModal:a,setShowModal:c,newAdmin:i,setNewAdmin:u,currentUser:f,setCurrentUser:x,showLogin:g,setShowLogin:y,createAdmin:S,loginAdmin:T,error:N};return Object(h.jsx)(p.Provider,{value:P,children:e.children})},b=n(94),f=n(121),x=n(123),O=n(15),v=function(){var e=Object(r.useContext)(p),t=e.currentUser,n=e.setCurrentUser;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b.a,{sticky:"top",bg:"dark",variant:"dark",children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(o.b,{className:"nav-link",to:"/",children:Object(h.jsx)(b.a.Brand,{children:"Blog CMS"})}),Object(h.jsxs)(x.a,{className:"me-auto",children:[Object(h.jsx)(o.b,{className:"nav-link",to:"/",children:"Posts"}),Object(h.jsx)(o.b,{className:"nav-link",to:"/drafts",children:"Drafts"})]}),Object(h.jsx)(b.a.Collapse,{className:"justify-content-end",children:t&&Object(h.jsxs)("div",{children:[Object(h.jsx)(b.a.Text,{className:"me-3",children:t}),Object(h.jsx)(O.a,{className:"me-3",variant:"outline-light",onClick:function(){localStorage.removeItem("user"),n(null)},children:"Logout"}),Object(h.jsx)(o.b,{className:"btn btn-outline-light",to:"/drafts/create",children:"New Draft"})]})})]})})})},g=n(17),y=function(){var e=Object(r.useContext)(p).loginAdmin,t=Object(r.useRef)(),n=Object(r.useRef)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(g.a,{onSubmit:function(r){!function(t,n,r){t.preventDefault();var a={adminName:n.current.value,password:r.current.value};e(a)}(r,t,n)},children:[Object(h.jsxs)(g.a.Group,{className:"mb-3",controlId:"adminName",children:[Object(h.jsx)(g.a.Label,{children:"Admin Name"}),Object(h.jsx)(g.a.Control,{type:"text",placeholder:"Enter your Admin name",ref:t})]}),Object(h.jsxs)(g.a.Group,{className:"mb-3",controlId:"adminPassword",children:[Object(h.jsx)(g.a.Label,{children:"Admin Password"}),Object(h.jsx)(g.a.Control,{type:"password",placeholder:"Enter your Admin password",ref:n})]}),Object(h.jsx)(O.a,{variant:"primary",type:"submit",children:"Login"})]})})},w=function(){var e=Object(r.useContext)(p).createAdmin,t=Object(r.useRef)(),n=Object(r.useRef)(),a=Object(r.useRef)(),c=Object(r.useRef)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(g.a,{onSubmit:function(r){!function(t,n,r,a,c){t.preventDefault();var s={adminName:n.current.value,password:r.current.value,confirmPassword:a.current.value,passcode:c.current.value};e(s)}(r,t,n,a,c)},children:[Object(h.jsxs)(g.a.Group,{className:"mb-3",controlId:"adminName",children:[Object(h.jsx)(g.a.Label,{children:"Admin Name"}),Object(h.jsx)(g.a.Control,{inputype:"text",placeholder:"Enter an Admin name",ref:t,required:!0})]}),Object(h.jsxs)(g.a.Group,{className:"mb-3",controlId:"adminPassword",children:[Object(h.jsx)(g.a.Label,{children:"Admin Password"}),Object(h.jsx)(g.a.Control,{type:"password",placeholder:"Enter a password",ref:n,required:!0})]}),Object(h.jsxs)(g.a.Group,{className:"mb-3",controlId:"confirmPassword",children:[Object(h.jsx)(g.a.Label,{children:"Confirm Admin Password"}),Object(h.jsx)(g.a.Control,{type:"password",placeholder:"Confirm password",ref:a,required:!0})]}),Object(h.jsxs)(g.a.Group,{className:"mb-3",controlId:"passcode",children:[Object(h.jsx)(g.a.Label,{children:"Passcode"}),Object(h.jsx)(g.a.Control,{type:"password",placeholder:"Enter passcode",ref:c,required:!0}),Object(h.jsx)(g.a.Text,{className:"text-muted",children:"Enter the secret password to create an admin."})]}),Object(h.jsx)(O.a,{variant:"primary",type:"submit",children:"Create"})]})})},k=n(85),N=n(91),C=function(){var e=Object(r.useContext)(p),t=e.showModal,n=e.setShowModal,a=e.currentUser,c=e.error,s=e.showLogin,o=e.setShowLogin,i=function(){o(!s)},u=Object(r.useCallback)((function(){n(!1)}),[n]);return Object(h.jsx)(h.Fragment,{children:!a&&Object(h.jsxs)(k.a,{show:t,onHide:u,backdrop:"static",centered:!0,children:[Object(h.jsx)(k.a.Header,{children:Object(h.jsx)(k.a.Title,{children:s?"Login":"Create New Admin"})}),Object(h.jsx)(k.a.Body,{children:s?Object(h.jsx)(y,{}):Object(h.jsx)(w,{})}),Object(h.jsx)(k.a.Footer,{children:s?Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("p",{className:"mb-0",children:"Don't have an admin account?"}),Object(h.jsx)(O.a,{className:"ms-3",variant:"primary",onClick:i,children:"Create Admin"})]}):Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("p",{className:"mb-0",children:"Do you have an admin account?"}),Object(h.jsx)(O.a,{className:"ms-3",variant:"primary",onClick:i,children:"Login"})]})}),c&&Object(h.jsx)(N.a,{className:"mx-3",variant:"danger",children:c})]})})},S=n(21),T=n(104),P=n(29),D=n(83),I=n(118);n(36).config();var A=function(){var e=Object(r.useContext)(p),t=e.currentUser,n=e.setCurrentUser,a="https://shielded-caverns-91568.herokuapp.com/admin/posts",c=localStorage.getItem("token"),s={method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}},o=Object(r.useState)(null),i=Object(j.a)(o,2),u=i[0],h=i[1],m=Object(r.useState)(!0),b=Object(j.a)(m,2),f=b[0],x=b[1];function O(){return(O=Object(d.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,fetch(a,s);case 3:return 401===(t=e.sent).status&&n(null),e.next=7,t.json();case 7:(r=e.sent)&&(h(r),x(!1));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[t]),[f,u]};n(36).config();var B=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/posts/publish",n=localStorage.getItem("token"),r={method:"POST",mode:"cors",body:JSON.stringify({slug:t}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/posts/publish",r);case 5:return a=e.sent,e.abrupt("return",a.ok);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(36).config();var E=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/posts/convert",n=localStorage.getItem("token"),r={method:"POST",mode:"cors",body:JSON.stringify({slug:t}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/posts/convert",r);case 5:return a=e.sent,e.abrupt("return",a.ok);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(36).config();var L=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/posts/delete",n=localStorage.getItem("token"),r={method:"DELETE",mode:"cors",body:JSON.stringify({slug:t}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/posts/delete",r);case 5:return a=e.sent,e.abrupt("return",a.ok);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e,t=Object(r.useContext)(p).currentUser,n=Object(i.f)(),a=new DOMParser,c=A(),s=Object(j.a)(c,2),o=s[0],u=s[1],m=Object(h.jsxs)(P.a,{id:"popover-convert",children:[Object(h.jsx)(P.a.Header,{as:"h4",children:"Convert to Draft"}),Object(h.jsx)(P.a.Body,{children:"You will find this post in drafts to edit it again."})]}),b=Object(h.jsxs)(P.a,{id:"popover-delete",children:[Object(h.jsx)(P.a.Header,{as:"h4",children:"Delete Post"}),Object(h.jsx)(P.a.Body,{children:"Are you sure you want to delete this post?"})]}),f=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:e.sent&&window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:e.sent&&window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(t)&&n("/drafts");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:t&&Object(h.jsxs)("div",{className:"mx-auto mt-3 d-flex flex-column align-items-center",children:[Object(h.jsx)("h1",{className:"text-center text-muted",children:"Post List"}),o&&Object(h.jsx)(T.a,{className:"mt-5",animation:"grow",variant:"dark",children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(h.jsx)("div",{className:"w-50",children:!o&&u.map((function(t,r){return e=a.parseFromString(t.description,"text/html"),Object(h.jsxs)(S.a,{className:"mx-auto my-3 w-75",children:[Object(h.jsxs)(S.a.Header,{className:"d-flex justify-content-between",as:"h5",children:[t.published?Object(h.jsx)(I.a,{bg:"success",children:"Published"}):Object(h.jsx)(I.a,{bg:"danger",children:"Not Published"}),"Post ",r+1]}),Object(h.jsxs)(S.a.Body,{children:[Object(h.jsxs)(S.a.Title,{children:["Title: ",t.title]}),Object(h.jsxs)(S.a.Text,{children:["Description: ",e.getElementsByTagName("p")[0].textContent]}),Object(h.jsxs)(S.a.Text,{children:["Comments: ",t.comments.length]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)(D.a,{placement:"left",overlay:m,children:Object(h.jsx)(O.a,{onClick:function(){return v(t.slug)},variant:"outline-primary",children:"Edit Post"})}),t.published?Object(h.jsx)(O.a,{onClick:function(){return f(t.slug)},variant:"outline-primary",children:"Unpublish Post"}):Object(h.jsx)(O.a,{onClick:function(){return f(t.slug)},variant:"outline-primary",children:"Publish Post"}),t.comments.length>0&&Object(h.jsx)(O.a,{onClick:function(){return e=t.slug,r=t.comments,void n("/post/comments",{state:{slug:e,comments:r}});var e,r},variant:"outline-primary",children:"Manage Comments"}),Object(h.jsx)(D.a,{placement:"right",overlay:b,children:Object(h.jsx)(O.a,{onClick:function(){return x(t.slug)},variant:"outline-danger",children:"Delete Post"})})]})]})]},r)}))})]})})};n(36).config();var z=function(){var e=Object(r.useContext)(p).setCurrentUser,t="https://shielded-caverns-91568.herokuapp.com/admin/drafts",n=localStorage.getItem("token"),a={method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},c=Object(r.useState)(null),s=Object(j.a)(c,2),o=s[0],i=s[1],u=Object(r.useState)(!0),h=Object(j.a)(u,2),m=h[0],b=h[1];function f(){return(f=Object(d.a)(l.a.mark((function n(){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(!0),n.next=3,fetch(t,a);case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,401===r.status?e(null):(i(c),b(!1));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),[m,o]};n(36).config();var J=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://shielded-caverns-91568.herokuapp.com/"+"admin/drafts/".concat(t),r=localStorage.getItem("token"),a={method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},e.next=5,fetch(n,a);case 5:return c=e.sent,e.next=8,c.json();case 8:if(s=e.sent,200===c.status){e.next=13;break}return e.abrupt("return",!1);case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(36).config();var F=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/drafts/delete",n=localStorage.getItem("token"),r={method:"DELETE",mode:"cors",body:JSON.stringify({slug:t}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/drafts/delete",r);case 5:return a=e.sent,e.abrupt("return",a.ok);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(36).config();var M=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/drafts/publish",n=localStorage.getItem("token"),r={method:"POST",mode:"cors",body:JSON.stringify({slug:t}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/drafts/publish",r);case 5:return a=e.sent,e.abrupt("return",a.ok);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=n(124),G=function(){var e,t=Object(r.useContext)(p).currentUser,n=Object(r.useState)(""),a=Object(j.a)(n,2),c=a[0],s=a[1],o=z(),u=Object(j.a)(o,2),m=u[0],b=u[1],f=Object(h.jsxs)(P.a,{id:"popover-edit",children:[Object(h.jsx)(P.a.Header,{as:"h4",children:"Edit Draft"}),Object(h.jsx)(P.a.Body,{children:"You can edit, publish or delete this draft."})]}),x=Object(h.jsxs)(P.a,{id:"popover-delete",children:[Object(h.jsx)(P.a.Header,{as:"h4",children:"Delete Draft"}),Object(h.jsx)(P.a.Body,{children:"Are you sure you want to delete this draft?"})]}),v=Object(i.f)(),g=new DOMParser,y=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t);case 2:(n=e.sent)?v("/drafts/update",{state:{response:n}}):s("Ooops... Something went wrong.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:e.sent&&v("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:e.sent&&window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:t&&Object(h.jsxs)("div",{className:"mx-auto mt-3 d-flex flex-column align-items-center",children:[Object(h.jsx)("h1",{className:"text-center text-muted",children:"Draft List"}),m&&Object(h.jsx)(T.a,{className:"mt-5",animation:"grow",variant:"dark",children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(h.jsx)("div",{className:"w-50",children:!m&&b.map((function(t,n){return e=g.parseFromString(t.description,"text/html"),Object(h.jsxs)(S.a,{className:"mx-auto my-3 w-75",children:[Object(h.jsxs)(S.a.Header,{as:"h5",children:["Draft ",n+1]}),Object(h.jsxs)(S.a.Body,{children:[Object(h.jsxs)(S.a.Title,{children:["Title: ",t.title]}),Object(h.jsxs)(S.a.Text,{children:["Description: ",e.getElementsByTagName("p")[0].textContent]}),Object(h.jsxs)("div",{className:" d-flex justify-content-between",children:[Object(h.jsx)(D.a,{placement:"left",overlay:f,children:Object(h.jsx)(O.a,{onClick:function(){return y(t.slug)},variant:"outline-primary",children:"Edit Draft"})}),Object(h.jsx)(O.a,{onClick:function(){return w(t.slug)},variant:"outline-primary",children:"Publish Post"}),Object(h.jsx)(D.a,{placement:"right",overlay:x,children:Object(h.jsx)(O.a,{onClick:function(){return k(t.slug)},variant:"outline-danger",children:"Delete Draft"})})]})]})]},n)}))}),c&&Object(h.jsx)(R.a,{variant:"danger",children:c})]})})},H=n(95);n(36).config();var q=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/drafts/create",n=localStorage.getItem("token"),r={method:"POST",mode:"cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/drafts/create",r);case 5:return a=e.sent,e.abrupt("return",a.ok);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(36).config();var K=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/drafts/update",n=localStorage.getItem("token"),r={method:"POST",mode:"cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/drafts/update",r);case 5:return a=e.sent,e.abrupt("return",a.ok);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(36).config();var V=function(){var e,t,n,a,c=Object(r.useRef)(null),s=Object(r.useRef)(null),o=Object(r.useRef)(null),u=Object(r.useRef)(null),p=Object(r.useState)(),m=Object(j.a)(p,2),b=m[0],f=m[1],x=Object(r.useState)(),v=Object(j.a)(x,2),g=v[0],y=v[1],w=Object(r.useState)(),k=Object(j.a)(w,2),C=k[0],S=k[1],T=Object(r.useState)(),P=Object(j.a)(T,2),D=P[0],I=P[1],A=Object(r.useState)(!1),B=Object(j.a)(A,2),E=B[0],L=B[1],U=Object(r.useState)(""),z=Object(j.a)(U,2),J=z[0],F=z[1],M=Object(i.f)(),R=Object(i.e)(),G=null===(e=R.state)||void 0===e?void 0:e.response.title,V=null===(t=R.state)||void 0===t?void 0:t.response.description,Y=null===(n=R.state)||void 0===n?void 0:n.response.text,Q=null===(a=R.state)||void 0===a?void 0:a.response.notes,W=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),t={title:b,description:g,text:C,notes:D},e.next=4,q(t);case 4:e.sent?(F(""),L(!1),M("/drafts")):(L(!1),F("Ooops... Something went wrong."));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),t={editTitle:G,title:b,description:g,text:C,notes:D},e.next=4,K(t);case 4:e.sent?(F(""),L(!1),M("/drafts")):(L(!1),F("Ooops... Something went wrong."));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"mx-auto mt-4 py-2 px-5 h-auto w-50 d-flex flex-column bg-secondary bg-opacity-10 rounded",children:[Object(h.jsxs)("div",{className:"mt-2",children:[Object(h.jsx)("h3",{className:"mb-3 text-center text-muted",children:"Title"}),Object(h.jsx)(H.a,{onInit:function(e,t){return c.current=t},initialValue:G&&"<h2>".concat(G,"</h2>")||"<h2>Post Title</h2>",apiKey:"6dnfru6k3o08t2b76u6ybo0o4cbuhw9657lh9nu2o2weiojr",init:{height:150,menubar:!1,plugins:["preview wordcount paste"],toolbar:"undo redo | bold italic |                 alignleft aligncenter alignright"},onChange:function(e){e.preventDefault(),f(c.current.getContent({format:"text"}))}})]}),Object(h.jsxs)("div",{className:"mt-2",children:[Object(h.jsx)("h3",{className:"mb-3 text-center text-muted",children:"Description"}),Object(h.jsx)(H.a,{onInit:function(e,t){return s.current=t},initialValue:V||"<p>Description</p>",apiKey:"6dnfru6k3o08t2b76u6ybo0o4cbuhw9657lh9nu2o2weiojr",init:{height:250,menubar:!1,plugins:["preview wordcount paste"],toolbar:"undo redo | bold italic |                 alignleft aligncenter alignright"},onChange:function(e){e.preventDefault(),y(s.current.getContent())}})]}),Object(h.jsxs)("div",{className:"mt-2",children:[Object(h.jsx)("h3",{className:"mb-3 text-center text-muted",children:"Post"}),Object(h.jsx)(H.a,{onInit:function(e,t){return o.current=t},initialValue:Y||"<p>Post Text</p>",apiKey:"6dnfru6k3o08t2b76u6ybo0o4cbuhw9657lh9nu2o2weiojr",init:{height:400,menubar:!1,plugins:["preview wordcount"],toolbar:"undo redo | bold italic |                 alignleft aligncenter alignright"},onChange:function(e){e.preventDefault(),S(o.current.getContent())}})]}),Object(h.jsxs)("div",{className:"mt-2",children:[Object(h.jsx)("h3",{className:"mb-3 text-center text-muted",children:"Notes"}),Object(h.jsx)(H.a,{onInit:function(e,t){return u.current=t},initialValue:Q||"<p>Notes</p>",apiKey:"6dnfru6k3o08t2b76u6ybo0o4cbuhw9657lh9nu2o2weiojr",init:{height:150,menubar:!1,plugins:["preview wordcount"],toolbar:"undo redo | bold italic |                 alignleft aligncenter alignright"},onChange:function(e){e.preventDefault(),I(u.current.getContent())}})]}),Object(h.jsx)("div",{className:"my-4",children:null===R.state?Object(h.jsx)(O.a,{variant:"outline-primary",size:"lg",onClick:W,children:"Save Draft"}):Object(h.jsx)(O.a,{variant:"outline-primary",size:"lg",onClick:X,children:"Update Draft"})}),J&&Object(h.jsx)(N.a,{variant:"danger",children:J}),E&&Object(h.jsx)(N.a,{variant:"info",children:"Saving..."})]})})};n(36).config();var Y=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://shielded-caverns-91568.herokuapp.com/admin/posts/comments",r=localStorage.getItem("token"),a={method:"POST",mode:"cors",body:JSON.stringify({slug:t,index:n}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},e.next=5,fetch("https://shielded-caverns-91568.herokuapp.com/admin/posts/comments",a);case 5:return c=e.sent,e.abrupt("return",c.ok);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(r.useContext)(p).currentUser,t=Object(i.f)(),n=Object(i.e)(),a=n.state.comments,c=n.state.slug,s=function(){var e=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(c,n);case 2:e.sent&&t("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:e&&Object(h.jsxs)("div",{className:"mx-auto mt-3 d-flex flex-column align-items-center",children:[Object(h.jsx)("h1",{className:"text-center text-muted",children:"Comments"}),Object(h.jsx)("div",{className:"w-50",children:a.map((function(e,t){return Object(h.jsxs)(S.a,{className:"mx-auto my-3 w-75",children:[Object(h.jsxs)(S.a.Header,{className:"d-flex justify-content-between",as:"h5",children:["Comment ",t+1]}),Object(h.jsxs)(S.a.Body,{children:[Object(h.jsxs)(S.a.Title,{children:["User: ",e.user]}),Object(h.jsxs)(S.a.Text,{children:["Message: ",e.message]}),Object(h.jsx)(O.a,{onClick:function(){return s(t)},variant:"outline-danger",children:"Delete Comment"})]})]},t)}))})]})})},W=function(){return Object(h.jsx)("div",{className:"pb-5 bg-secondary bg-opacity-25",children:Object(h.jsxs)(m,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/",element:Object(h.jsx)(U,{})}),Object(h.jsx)(i.a,{path:"/drafts",element:Object(h.jsx)(G,{})}),Object(h.jsx)(i.a,{path:"/drafts/create",element:Object(h.jsx)(V,{})}),Object(h.jsx)(i.a,{path:"/drafts/update",element:Object(h.jsx)(V,{})}),Object(h.jsx)(i.a,{path:"/post/comments",element:Object(h.jsx)(Q,{})})]}),Object(h.jsx)(C,{})]})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(W,{})})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.64f29c3c.chunk.js.map