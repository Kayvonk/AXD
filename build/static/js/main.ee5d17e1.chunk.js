(this["webpackJsonpredux-clone"]=this["webpackJsonpredux-clone"]||[]).push([[0],{56:function(n,e,t){},57:function(n,e,t){},84:function(n,e,t){"use strict";t.r(e);var i,s,r,c,a,o,j,b,d,l,p=t(1),x=t.n(p),h=t(30),g=t.n(h),u=(t(56),t(57),t(4)),m=t(17),O=t.n(m),f=t(24),v=t(22),w=t(5),y=t(41),k=t.n(y),S=t(42),z=t.n(S),N=t(31),A=t.n(N),I=t(43),E=t.n(I),T=t(44),P=t.n(T),C=t(45),H=t.n(C),L=t(32),D=(t(59),L.a.initializeApp({apiKey:"AIzaSyCjqLOLzsXr8ZbYYiyFP6e83yjIAEhpn44",authDomain:"animexd-f6015.firebaseapp.com",projectId:"animexd-f6015",storageBucket:"animexd-f6015.appspot.com",messagingSenderId:"312349742541",appId:"1:312349742541:web:aa9502fbc267b4fd28a084"}),L.a.auth()),R=new L.a.auth.GoogleAuthProvider,F=t(6),K=t(0),U=x.a.createContext();function W(){return Object(p.useContext)(U)}function B(n){var e=n.children,t=Object(p.useState)(),i=Object(v.a)(t,2),s=i[0],r=i[1],c=Object(p.useState)(!0),a=Object(v.a)(c,2),o=a[0],j=a[1];Object(F.g)();function b(){return(b=Object(f.a)(O.a.mark((function n(e,t){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:D.signInWithEmailAndPassword(e,t);case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(p.useEffect)((function(){return D.onAuthStateChanged((function(n){r(n),j(!1)}))}),[]);var d={currentUser:s,login:function(n,e){return b.apply(this,arguments)},signup:function(n,e){return D.createUserWithEmailAndPassword(n,e)},logout:function(){return D.signOut()},resetPassword:function(n){return D.sendPasswordResetEmail(n)},updateEmail:function(n){return s.updateEmail(n)},updatePassword:function(n){return s.updatePassword(n)},updatePhotoURL:function(n){return s.updateProfile({photoURL:n})}};return Object(K.jsx)(U.Provider,{value:d,children:!o&&e})}function X(){var n=W(),e=n.logout,t=n.currentUser,i=Object(p.useState)(!1),s=Object(v.a)(i,2),r=(s[0],s[1]),c=Object(F.g)();function a(){return(a=Object(f.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:c.push("/"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("Failed to logout");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}return Object(K.jsx)(G,{children:t?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(V,{children:[Object(K.jsx)(Z,{src:"/images/AXD.png"}),Object(K.jsxs)(J,{children:[Object(K.jsx)("h4",{children:"Home"}),Object(K.jsx)("br",{}),Object(K.jsx)("h4",{children:"Search"}),Object(K.jsx)("br",{}),Object(K.jsx)("h4",{children:"Watchlist"}),Object(K.jsx)("br",{}),Object(K.jsx)("h4",{children:"Originals"}),Object(K.jsx)("br",{}),Object(K.jsx)("h4",{children:"Movies"}),Object(K.jsx)("br",{}),Object(K.jsx)("h4",{children:"Series"})]})]}),Object(K.jsxs)($,{children:[Object(K.jsxs)("a",{children:[Object(K.jsx)(k.a,{className:"nav-icon",style:{color:"#fff"}}),Object(K.jsx)("span",{className:"nav-text",children:" HOME "})]}),Object(K.jsxs)("a",{children:[Object(K.jsx)(z.a,{className:"nav-icon",style:{color:"#fff"}}),Object(K.jsx)("span",{className:"nav-text",children:" SEARCH "})]}),Object(K.jsxs)("a",{children:[Object(K.jsx)(A.a,{className:"nav-icon",style:{color:"#fff"}}),Object(K.jsx)("span",{className:"nav-text",children:" WATCHLIST "})]}),Object(K.jsxs)("a",{children:[Object(K.jsx)(E.a,{className:"nav-icon",style:{color:"#fff"}}),Object(K.jsx)("span",{className:"nav-text",children:" ORIGINALS "})]}),Object(K.jsxs)("a",{children:[Object(K.jsx)(P.a,{className:"nav-icon",style:{color:"#fff"}}),Object(K.jsx)("span",{className:"nav-text",children:" MOVIES "})]}),Object(K.jsxs)("a",{children:[Object(K.jsx)(H.a,{className:"nav-icon",style:{color:"#fff"}}),Object(K.jsx)("span",{className:"nav-text",children:" SERIES "})]})]}),Object(K.jsxs)(en,{children:[Object(K.jsx)(Q,{src:t.photoURL}),Object(K.jsx)(nn,{children:Object(K.jsx)("span",{onClick:function(){return a.apply(this,arguments)},children:"Sign out"})})]})]}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(q,{src:"/images/AXD.png"}),Object(K.jsx)(_,{onClick:function(){try{r(!0),D.signInWithPopup(R)}catch(n){console.log("Falied to Login")}r(!1)},children:"LOGIN"})]})})}var Y,M,G=w.a.nav(i||(i=Object(u.a)(["\n  height: 70px;\n  background: #222222;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1rem;\n"]))),q=w.a.img(s||(s=Object(u.a)(["\n  width: 60px;\n"]))),Z=Object(w.a)(q)(r||(r=Object(u.a)(["\n  width: 60px;\n  position: relative;\n  cursor: pointer;\n"]))),J=w.a.div(c||(c=Object(u.a)(["\n  position: absolute;\n  top: 48px;\n  left: 0px;\n  background: rgb(34, 34, 34);\n  border: 1px solid rgba(151, 151, 151, 0.34);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n  padding: 10px;\n  font-size: 14px;\n  letter-spacing: 3px;\n  width: 200px;\n  opacity: 0;\n"]))),V=w.a.div(a||(a=Object(u.a)(["\n  position: relative;\n  height: 60px;\n  width: 60px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n      z-index: 1;\n    }\n  }\n"])),Z,J),$=w.a.div(o||(o=Object(u.a)(['\n  @media (max-width: 1200px) {\n    display: none;\n  }\n  @media (min-width: 1200px) {\n    display: flex;\n    flex: 1;\n\n    a {\n      margin-left: 3rem;\n      display: flex;\n      align-items: center;\n      padding: 0 12px;\n      cursor: pointer;\n\n      span {\n        color: white;\n        letter-spacing: 1.4px;\n        position: relative;\n        margin-left: 5px;\n\n        &:after {\n          content: "";\n          background: #fff;\n          height: 2px;\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: -6px;\n          opacity: 0;\n          transform-origin: left center;\n          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n          transform: scaleX(0);\n        }\n      }\n\n      &:hover {\n        span:after {\n          transform: scaleX(1);\n          opacity: 1;\n        }\n      }\n    }\n  }\n']))),Q=w.a.img(j||(j=Object(u.a)(["\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  cursor: pointer;\n"]))),_=w.a.a(b||(b=Object(u.a)(["\n  background-color: hsl(0, 0%, 13.3%);\n  cursor: pointer;\n  color: #fff;\n  padding: 8px 16px;\n  letter-spacing: 1.5px;\n  border: 1px solid #f9f9f9;\n  border-radius: 4px;\n  transition: all 0.2s ease 0s;\n  &:hover {\n    background-color: hsl(0, 0%, 23.3%);\n  }\n"]))),nn=w.a.div(d||(d=Object(u.a)(["\n  position: absolute;\n  top: 48px;\n  right: 0px;\n  background: rgb(19, 19, 19);\n  border: 1px solid rgba(151, 151, 151, 0.34);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n  padding: 10px;\n  font-size: 14px;\n  letter-spacing: 3px;\n  width: 100px;\n  opacity: 0;\n"]))),en=w.a.div(l||(l=Object(u.a)(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n      z-index: 1;\n    }\n  }\n"])),Q,nn),tn=t(7),sn=t(25),rn=t.n(sn);t(34),t(35);function cn(){return Object(K.jsxs)(bn,Object(tn.a)(Object(tn.a)({},{infinite:!0,arrows:!1,speed:1e3,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3}),{},{children:[Object(K.jsx)(dn,{children:Object(K.jsx)("img",{src:"images/banner1.jpg"})}),Object(K.jsx)(dn,{children:Object(K.jsx)("img",{src:"/images/banner2.jpg"})}),Object(K.jsx)(dn,{children:Object(K.jsx)("img",{src:"images/banner3.jpg"})})]}))}var an,on,jn,bn=Object(w.a)(rn.a)(Y||(Y=Object(u.a)(["\n  padding-top: 20px;\n\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: #d2d2d2;\n    }\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n\n  button {\n    z-index: 1;\n  }\n"]))),dn=w.a.div(M||(M=Object(u.a)(["\n  img {\n    border: 4px solid transparent;\n    border-radius: 4px;\n    height: 100%;\n    width: 100%;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 /73%) 0px 16px 10px -10px;\n    transition-duration: 300ms;\n\n    &:hover {\n      border: 3px solid rgba(249, 249, 249, 0.8);\n    }\n  }\n"])));function ln(){var n={infinite:!0,arrows:!1,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}},{breakpoint:425,settings:{slidesToShow:1}}]};return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(hn,{children:[Object(K.jsx)("h2",{children:" Recommended for You"}),Object(K.jsxs)(gn,Object(tn.a)(Object(tn.a)({},n),{},{children:[Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Dororo.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Steins;Gate.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/MushishiZokuShou2.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Akira.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/CowboyBebop.png"})})]})),Object(K.jsx)("h2",{children:"Action"}),Object(K.jsxs)(gn,Object(tn.a)(Object(tn.a)({},n),{},{children:[Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Yuu\u2606Yuu\u2606Hakusho.png"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Shingeki no Kyojin Gaiden Kuinaki Sentaku.png"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/FateZero.png"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Naruto Shippuuden.png"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Boku no Hero Academia 2.png"})})]})),Object(K.jsx)("h2",{children:"Comedy"}),Object(K.jsxs)(gn,Object(tn.a)(Object(tn.a)({},n),{},{children:[Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Hinamatsuri.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Ansatsu Kyoushitsu 2.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Chuunibyou demo Koi ga Shitai!.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Saiki Kusuo no \u03a8-nan.png"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Kono Subarashii Sekai ni Shukufuku wo! Kurenai Densetsu.png"})})]})),Object(K.jsx)("h2",{children:"Sports"}),Object(K.jsxs)(gn,Object(tn.a)(Object(tn.a)({},n),{},{children:[Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Haikyuu!! Sainou to Sense.png"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Kuroko no Basket Saikou no Present Desu.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Slam Dunk.jpg"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Yuri!!! on ICE.png"})}),Object(K.jsx)(un,{children:Object(K.jsx)("img",{src:"/images/thumbnails/Megalo Box.jpg"})})]}))]})})}var pn,xn,hn=w.a.div(an||(an=Object(u.a)(["\n  padding-bottom: 5rem;\n  h2 {\n    margin-top: 3rem;\n  }\n"]))),gn=Object(w.a)(rn.a)(on||(on=Object(u.a)(["\n  padding-top: 20px;\n\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: #d2d2d2;\n    }\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n\n  button {\n    z-index: 1;\n  }\n"]))),un=w.a.div(jn||(jn=Object(u.a)(["\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  border-radius: 5px;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 /73%) 0px 16px 10px -10px;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: 360px) {\n    height: 315px;\n  }\n  @media (min-width: 360px) {\n    height: 315px;\n  }\n  @media (min-width: 425px) {\n    height: 248px;\n  }\n  @media (min-width: 576px) {\n    height: 345px;\n  }\n  @media (min-width: 992px) {\n    height: 405px;\n  }\n  @media (min-width: 1200px) {\n    height: 370px;\n  }\n  @media (min-width: 1400px) {\n    height: 455px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  &:hover {\n    transform: scaleX() (1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 /72%) 0px 30px 22px -10px;\n  }\n"])));function mn(){return Object(K.jsxs)(fn,Object(tn.a)(Object(tn.a)({},{infinite:!0,arrows:!1,dots:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}},{breakpoint:425,settings:{slidesToShow:1}}]}),{},{children:[Object(K.jsxs)(vn,{children:[Object(K.jsx)("img",{src:"/images/studioghibli.png"}),Object(K.jsx)("div",{children:Object(K.jsx)("img",{src:"images/anime-ghibli.jpg"})})]}),Object(K.jsxs)(vn,{children:[Object(K.jsx)("img",{src:"/images/trigger.png"}),Object(K.jsx)("div",{children:Object(K.jsx)("img",{src:"images/anime-trigger.jpg"})})]}),Object(K.jsxs)(vn,{children:[Object(K.jsx)("img",{src:"/images/toei.png"}),Object(K.jsx)("div",{children:Object(K.jsx)("img",{src:"images/anime-toei.jpg"})})]}),Object(K.jsxs)(vn,{children:[Object(K.jsx)("img",{src:"/images/madhouse.png"}),Object(K.jsx)("div",{children:Object(K.jsx)("img",{src:"images/anime-madhouse.jpg"})})]}),Object(K.jsxs)(vn,{children:[Object(K.jsx)("img",{src:"/images/bones.png"}),Object(K.jsx)("div",{children:Object(K.jsx)("img",{src:"images/anime-bones.jpg"})})]})]}))}var On,fn=Object(w.a)(rn.a)(pn||(pn=Object(u.a)(["\n  padding-top: 20px;\n\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: #d2d2d2;\n    }\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n\n  button {\n    z-index: 1;\n  }\n"]))),vn=w.a.div(xn||(xn=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 /73%) 0px 16px 10px -10px;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  position: relative;\n  overflow: hidden;\n\n  img {\n    margin-left: auto;\n    margin-right: auto;\n    width: 90%;\n    height: 100%;\n    z-index: 1;\n  }\n\n  div {\n    opacity: 0;\n    transition: opacity 500ms ease-in-out 0s;\n    img {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 0;\n    }\n  }\n\n  &:hover {\n    transform: scaleX() (1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 /72%) 0px 30px 22px -10px;\n\n    div {\n      opacity: 1;\n    }\n  }\n"])));function wn(){return Object(K.jsx)("div",{children:Object(K.jsxs)(Tn,{children:[Object(K.jsx)(cn,{}),Object(K.jsx)(mn,{}),Object(K.jsx)(ln,{})]})})}var yn,kn,Sn,zn,Nn,An,In,En,Tn=w.a.main(On||(On=Object(u.a)(['\n  min-height: calc(100vh - 70px);\n  padding: 0 calc(3.5vw + 5px);\n  position: relative;\n\n  &:before {\n    background: url("/images/black-background.png") center center / cover\n      no-repeat fixed;\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n']))),Pn=t(23),Cn=t(38),Hn=t.n(Cn),Ln=t(49),Dn=t.n(Ln);function Rn(){return Object(K.jsxs)(Un,{children:[Object(K.jsx)(Wn,{children:Object(K.jsx)("img",{src:"/images/backgrounds/background-Dororo.jpg"})}),Object(K.jsx)("div",{style:{fontSize:90,fontFamily:"coolvetica",color:" white"},children:"Dororo"}),Object(K.jsxs)(Bn,{children:[Object(K.jsxs)(Xn,{children:[Object(K.jsx)(Hn.a,{className:"nav-icon",style:{color:"#222222"}}),Object(K.jsx)("span",{children:"PLAY"})]}),Object(K.jsxs)(Yn,{children:[Object(K.jsx)(Hn.a,{className:"nav-icon",style:{color:"#fff"}}),Object(K.jsx)("span",{children:"TRAILER"})]}),Object(K.jsx)(Mn,{children:Object(K.jsx)(A.a,{className:"nav-icon",style:{color:"#fff"}})}),Object(K.jsx)(Gn,{children:Object(K.jsx)(Dn.a,{className:"nav-icon",style:{color:"#fff"}})})]}),Object(K.jsx)(qn,{children:"Dororo, a young orphan thief, meets Hyakkimaru, a powerful ronin. Hyakkimaru's father, a greedy feudal lord, had made a pact with 12 demons, offering his yet-unborn son's body parts in exchange for great power. Thus, Hyakkimaru - who was born without arms, legs, eyes, ears, a nose or a mouth - was abandoned in a river as a baby. Rescued and raised by Dr. Honma, who equips him with artificial limbs and teaches him sword-fighting techniques, Hyakkimaru discovers that each time he slays a demon, a piece of his body is restored. Now, he roams the war-torn countryside in search of demons."})]})}var Fn,Kn,Un=w.a.div(yn||(yn=Object(u.a)(["\n  min-height: calc(100vh - 70px);\n  padding: 0 calc(3.5vw + 5px);\n  position: relative;\n"]))),Wn=w.a.div(kn||(kn=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0.8;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),Bn=w.a.div(Sn||(Sn=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]))),Xn=w.a.div(zn||(zn=Object(u.a)(["\n  border-radius: 4px;\n  display: flex;\n  width: fit-content;\n  margin-right: 22px;\n  padding: 5px 15px 5px 5px;\n  align-items: center;\n  background: rgb(249, 249, 249);\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    background: rgb(222, 222, 222);\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),Yn=Object(w.a)(Xn)(Nn||(Nn=Object(u.a)(["\n  background: rgb(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n\n  &:hover {\n    background: rgb(100, 100, 100, 0.3);\n  }\n\n  span {\n    font-weight: 400;\n    color: white;\n  }\n"]))),Mn=w.a.div(An||(An=Object(u.a)(["\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid rgb(249, 249, 249);\n  border-radius: 50%;\n  background: rgb(0, 0, 0, 0.3);\n  margin-right: 16px;\n\n  &:hover {\n    background: rgb(100, 100, 100, 0.3);\n  }\n"]))),Gn=Object(w.a)(Mn)(In||(In=Object(u.a)(["\n  background: rgb(0, 0, 0, 0.6);\n"]))),qn=w.a.div(En||(En=Object(u.a)(["\n  margin-top: 10px;\n  color: rgb(249, 249, 249);\n  font-size: 20px;\n  font-weight: 600;\n  width: 30vw;\n"])));function Zn(){var n=W().currentUser,e=Object(p.useState)(!1),t=Object(v.a)(e,2),i=(t[0],t[1]),s=Object(F.g)();return Object(p.useEffect)((function(){(function(){var e=Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n?s.push("/home"):D.signOut();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(K.jsx)(Jn,{children:Object(K.jsx)(Vn,{onClick:function(){try{i(!0),D.signInWithPopup(R)}catch(n){console.log("Falied to Login")}i(!1)},children:Object(K.jsx)("span",{children:"Sign Up"})})})}var Jn=w.a.div(Fn||(Fn=Object(u.a)(['\n  min-height: calc(100vh - 70px);\n  padding: 0 calc(3.5vw + 5px);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:before {\n    background: url("/images/backgrounds/anime-background1.jpg") center center /\n      cover no-repeat fixed;\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n']))),Vn=w.a.div(Kn||(Kn=Object(u.a)(["\n  border-radius: 15px;\n  display: flex;\n  height: 50px;\n  width: 20vw;\n  justify-content: center;\n  padding: 10px 0;\n  align-items: center;\n  background: hsl(204, 58.9%, 14.3%);\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    background: hsl(204, 58.9%, 24.3%);\n  }\n\n  span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-weight: 700;\n  }\n"])));t(50);var $n=function(){return Object(K.jsx)("div",{className:"App",children:Object(K.jsxs)(Pn.a,{children:[Object(K.jsx)(X,{}),Object(K.jsxs)(F.d,{children:[Object(K.jsx)(F.b,{path:"/",exact:!0,component:Zn}),Object(K.jsx)(F.b,{path:"/login",exact:!0,component:Zn}),Object(K.jsx)(F.b,{path:"/home",exact:!0,component:wn}),Object(K.jsx)(F.b,{path:"/detail",exact:!0,component:Rn})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(Object(K.jsx)(x.a.StrictMode,{children:Object(K.jsx)(B,{children:Object(K.jsx)($n,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[84,1,2]]]);
//# sourceMappingURL=main.ee5d17e1.chunk.js.map