(this["webpackJsonpplatzi-punks-interface"]=this["webpackJsonpplatzi-punks-interface"]||[]).push([[0],{317:function(e,t){},319:function(e,t){},323:function(e,t){},324:function(e,t){},351:function(e,t){},353:function(e,t){},364:function(e,t){},366:function(e,t){},376:function(e,t){},378:function(e,t){},393:function(e,t){},427:function(e,t){},428:function(e,t){},498:function(e,t){},500:function(e,t){},505:function(e,t){},507:function(e,t){},514:function(e,t){},526:function(e,t){},529:function(e,t){},534:function(e,t){},608:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(48),s=n.n(r),c=n(12),o=n(20),l=n.n(o),u=n(55),p=n(18),d=n(254),b=n(153),y=n(154),j=n(155),m=n(30),f=n(26),h={address:{4:"0x68575507bc905aB64D20e7aEcB4c99EAE6786547"},abi:[{inputs:[{internalType:"uint256",name:"_maxSupply",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"address",name:"_minter",type:"address"}],name:"deterministicPseudoRandomDNA",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getAccesoriesType",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getClotheColor",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getClotheType",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getEyeBrowType",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getEyeType",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getFacialHairColor",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getFacialHairType",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getGraphicType",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getHairColor",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getHatColor",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getMouthType",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getSkinColor",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"getTopType",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dna",type:"uint256"}],name:"imageByDNA",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenDNA",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}]},x=h.address,O=h.abi,g=function(){var e,t=Object(f.c)(),n=t.active,i=t.library,r=t.chainId;return Object(a.useMemo)((function(){if(n)return new i.eth.Contract(O,x[r])}),[n,r,null===i||void 0===i||null===(e=i.eth)||void 0===e?void 0:e.Contract])},v=n(3),T=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),c=s[0],o=s[1],h=Object(f.c)(),x=h.active,O=h.account,T=g(),w=Object(d.a)(),k=Object(a.useCallback)(Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T){e.next=11;break}return e.next=3,T.methods.totalSupply().call();case 3:return t=e.sent,e.next=6,T.methods.deterministicPseudoRandomDNA(t,O).call();case 6:return n=e.sent,e.next=9,T.methods.imageByDNA(n).call();case 9:a=e.sent,o(a);case 11:case"end":return e.stop()}}),e)}))),[T,O]);Object(a.useEffect)((function(){k()}),[k]);return Object(v.jsxs)(b.j,{align:"center",spacing:{base:8,md:10},py:{base:20,md:28},direction:{base:"column-reverse",md:"row"},children:[Object(v.jsxs)(b.j,{flex:1,spacing:{base:5,md:10},children:[Object(v.jsxs)(b.h,{lineHeight:1.1,fontWeight:600,fontSize:{base:"3xl",sm:"4xl",lg:"6xl"},children:[Object(v.jsx)(b.k,{as:"span",position:"relative",_after:{content:"''",width:"full",height:"30%",position:"absolute",bottom:1,left:0,bg:"green.400",zIndex:-1},children:"Un Platzi Punk"}),Object(v.jsx)("br",{}),Object(v.jsx)(b.k,{as:"span",color:"green.400",children:"nunca para de aprender"})]}),Object(v.jsx)(b.k,{color:"gray.500",children:"Platzi Punks es una colecci\xf3n de Avatares randomizados cuya metadata es almacenada on-chain. Poseen caracter\xedsticas \xfanicas y s\xf3lo hay 10000 en existencia."}),Object(v.jsx)(b.k,{color:"green.500",children:"Cada Platzi Punk se genera de forma secuencial basado en tu address, usa el previsualizador para averiguar cu\xe1l ser\xeda tu Platzi Punk si minteas en este momento"}),Object(v.jsxs)(b.j,{spacing:{base:4,sm:6},direction:{base:"column",sm:"row"},children:[Object(v.jsx)(y.a,{rounded:"full",size:"lg",fontWeight:"normal",px:6,colorScheme:"green",bg:"green.400",_hover:{bg:"green.500"},disabled:!T,onClick:function(){i(!0),T.methods.mint().send({from:O}).on("transactionHash",(function(e){w({title:"Transacci\xf3n enviada",description:e,status:"info"})})).on("receipt",(function(){i(!1),w({title:"Transacci\xf3n confirmada",description:"Nunca pares de aprender.",status:"success"})})).on("error",(function(e){i(!1),w({title:"Transacci\xf3n fallida",description:e.message,status:"error"})}))},isLoading:n,children:"Obt\xe9n tu punk"}),Object(v.jsx)(m.b,{to:"/punks",children:Object(v.jsx)(y.a,{rounded:"full",size:"lg",fontWeight:"normal",px:6,children:"Galer\xeda"})})]})]}),Object(v.jsxs)(b.e,{flex:1,direction:"column",justify:"center",align:"center",position:"relative",w:"full",children:[Object(v.jsx)(j.a,{src:x?c:"https://avataaars.io/"}),x?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(b.e,{mt:2,children:[Object(v.jsxs)(b.a,{children:["Next ID:",Object(v.jsx)(b.a,{ml:1,colorScheme:"green",children:"1"})]}),Object(v.jsxs)(b.a,{ml:2,children:["Address:",Object(v.jsx)(b.a,{ml:1,colorScheme:"green",children:"0x0000...0000"})]})]}),Object(v.jsx)(y.a,{onClick:k,mt:4,size:"xs",colorScheme:"green",children:"Actualizar"})]}):Object(v.jsx)(b.a,{mt:2,children:"Wallet desconectado"})]})]})},w=n(109),k=n(156),C=n(67),I=n(56),M=n(113),S=n(91),z=["image","name"],A=function(e){var t=e.image,n=e.name,a=Object(M.a)(e,z);return Object(v.jsxs)(b.b,Object(I.a)(Object(I.a)({role:"group",p:6,maxW:"330px",w:"full",bg:Object(S.d)("white","gray.800"),boxShadow:"2xl",rounded:"lg",pos:"relative",zIndex:1},a),{},{children:[Object(v.jsx)(b.b,{rounded:"lg",pos:"relative",height:"230px",_after:{transition:"all .3s ease",content:'""',w:"full",h:"full",pos:"absolute",top:0,left:0,backgroundImage:"url(".concat(t,")"),filter:"blur(15px)",zIndex:-1},_groupHover:{_after:{filter:"blur(20px)"}},children:Object(v.jsx)(j.a,{rounded:"lg",height:230,width:282,objectFit:"cover",src:t})}),Object(v.jsx)(b.j,{pt:10,align:"center",children:Object(v.jsx)(b.h,{fontSize:"xl",fontFamily:"body",fontWeight:500,children:n})})]}))},_=n(107),P=function(){return Object(v.jsx)(b.c,{my:20,children:Object(v.jsx)(_.a,{})})},F=n(66),H=n(106),E=function(){return Object(v.jsxs)(F.a,{status:"error",children:[Object(v.jsx)(F.c,{}),Object(v.jsx)(F.d,{mr:2,children:"Conecta tu wallet"}),Object(v.jsx)(F.b,{children:"para acceder a la app"}),Object(v.jsx)(H.a,{position:"absolute",right:"8px",top:"8px"})]})},B=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,i,r,s,c,o,u,d,b,y,j,m,f,h,x,O,g,v,T,w,k;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.platziPunks,a=t.tokenId,e.next=3,Promise.all([n.methods.tokenURI(a).call(),n.methods.tokenDNA(a).call(),n.methods.ownerOf(a).call(),n.methods.getAccesoriesType(a).call(),n.methods.getAccesoriesType(a).call(),n.methods.getClotheColor(a).call(),n.methods.getClotheType(a).call(),n.methods.getEyeType(a).call(),n.methods.getEyeBrowType(a).call(),n.methods.getFacialHairColor(a).call(),n.methods.getFacialHairType(a).call(),n.methods.getHairColor(a).call(),n.methods.getHatColor(a).call(),n.methods.getGraphicType(a).call(),n.methods.getMouthType(a).call(),n.methods.getSkinColor(a).call(),n.methods.getTopType(a).call()]);case 3:return i=e.sent,r=Object(p.a)(i,16),s=r[0],c=r[1],o=r[2],u=r[3],d=r[4],b=r[5],y=r[6],j=r[7],m=r[8],f=r[9],h=r[10],x=r[11],O=r[12],g=r[13],v=r[14],T=r[15],e.next=23,fetch(s);case 23:return w=e.sent,e.next=26,w.json();case 26:return k=e.sent,e.abrupt("return",Object(I.a)({tokenId:a,attributes:{accessoriesType:u,clotheColor:d,clotheType:b,eyeType:y,eyeBrowType:j,facialHairColor:m,facialHairType:f,hairColor:h,hatColor:x,graphicType:O,mouthType:g,skinColor:v,topType:T},tokenURI:s,dna:c,owner:o},k));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.e)().search,t=Object(a.useState)(new URLSearchParams(e).get("address")),n=Object(p.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(!0),o=Object(p.a)(s,2),d=o[0],j=o[1],h=Object(a.useState)(!0),x=Object(p.a)(h,2),O=x[0],T=x[1],I=Object(c.f)(),M=Object(f.c)(),S=M.active,z=M.library,_=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).owner,t=void 0===e?null:e,n=Object(a.useState)([]),i=Object(p.a)(n,2),r=i[0],s=i[1],c=Object(f.c)().library,o=Object(a.useState)(!0),d=Object(p.a)(o,2),b=d[0],y=d[1],j=g(),m=Object(a.useCallback)(Object(u.a)(l.a.mark((function e(){var n,a,i,r,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=22;break}if(y(!0),c.utils.isAddress(t)){e.next=9;break}return e.next=5,j.methods.totalSupply().call();case 5:a=e.sent,n=new Array(Number(a)).fill().map((function(e,t){return t})),e.next=16;break;case 9:return e.next=11,j.methods.balanceOf(t).call();case 11:return i=e.sent,r=new Array(Number(i)).fill().map((function(e,n){return j.methods.tokenOfOwnerByIndex(t,n).call()})),e.next=15,Promise.all(r);case 15:n=e.sent;case 16:return o=n.map((function(e){return B({tokenId:e,platziPunks:j})})),e.next=19,Promise.all(o);case 19:u=e.sent,s(u),y(!1);case 22:case"end":return e.stop()}}),e)}))),[j,t,null===c||void 0===c?void 0:c.utils]);return Object(a.useEffect)((function(){m()}),[m]),{loading:b,punks:r,update:m}}({owner:d&&O?i:null}),F=_.punks,H=_.loading;return S?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),i){var t=z.utils.isAddress(i);T(t),j(!0),t&&I("/punks?address=".concat(i))}else I("/punks")},children:Object(v.jsxs)(w.a,{children:[Object(v.jsxs)(k.b,{mb:3,children:[Object(v.jsx)(k.c,{pointerEvents:"none",children:Object(v.jsx)(C.d,{color:"gray.300"})}),Object(v.jsx)(k.a,{isInvalid:!1,value:null!==i&&void 0!==i?i:"",onChange:function(e){var t=e.target.value;r(t),j(!1),T(!1)},placeholder:"Buscar por direcci\xf3n"}),Object(v.jsx)(k.d,{width:"5.5rem",children:Object(v.jsx)(y.a,{type:"submit",h:"1.75rem",size:"sm",children:"Buscar"})})]}),d&&!O&&Object(v.jsx)(w.b,{children:"Direcci\xf3n inv\xe1lida"})]})}),H?Object(v.jsx)(P,{}):Object(v.jsx)(b.f,{templateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:6,children:F.map((function(e){var t=e.name,n=e.image,a=e.tokenId;return Object(v.jsx)(m.b,{to:"/punks/".concat(a),children:Object(v.jsx)(A,{image:n,name:t})},a)}))})]}):Object(v.jsx)(E,{})},N=n(157),W=n(158),R=function(){var e=Object(f.c)(),t=e.active,n=e.account,i=e.library,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(a.useState)({}),n=Object(p.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(!0),c=Object(p.a)(s,2),o=c[0],d=c[1],b=g(),y=Object(a.useCallback)(Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!b||null==e){t.next=7;break}return d(!0),t.next=4,B({tokenId:e,platziPunks:b});case 4:n=t.sent,r(n),d(!1);case 7:case"end":return t.stop()}}),t)}))),[b,e]);return Object(a.useEffect)((function(){y()}),[y]),{loading:o,punk:i,update:y}}(Object(c.g)().tokenId),s=r.loading,o=r.punk,j=r.update,m=g(),h=Object(d.a)(),x=Object(a.useState)(!1),O=Object(p.a)(x,2),T=O[0],w=O[1];return t?s?Object(v.jsx)(P,{}):Object(v.jsxs)(b.j,{spacing:{base:8,md:10},py:{base:5},direction:{base:"column",md:"row"},children:[Object(v.jsxs)(b.j,{children:[Object(v.jsx)(A,{mx:{base:"auto",md:0},name:o.name,image:o.image}),Object(v.jsx)(y.a,{onClick:function(){w(!0);var e=prompt("Ingresa la direcci\xf3n: ");i.utils.isAddress(e)?m.methods.safeTransferFrom(o.owner,e,o.tokenId).send({from:n}).on("error",(function(){w(!1)})).on("transactionHash",(function(e){h({title:"Transacci\xf3n enviada",description:e,status:"info"})})).on("receipt",(function(){w(!1),h({title:"Transacci\xf3n confirmada",description:"El punk ahora pertenece a ".concat(e),status:"success"}),j()})):(h({title:"Direcci\xf3n inv\xe1lida",description:"La direcci\xf3n no es una direcci\xf3n de Ethereum",status:"error"}),w(!1))},disabled:n!==o.owner,colorScheme:"green",isLoading:T,children:n!==o.owner?"No eres el due\xf1o":"Transferir"})]}),Object(v.jsxs)(b.j,{width:"100%",spacing:5,children:[Object(v.jsx)(b.h,{children:o.name}),Object(v.jsx)(b.k,{fontSize:"xl",children:o.description}),Object(v.jsxs)(b.k,{fontWeight:600,children:["DNA:",Object(v.jsx)(N.a,{ml:2,colorScheme:"green",children:o.dna})]}),Object(v.jsxs)(b.k,{fontWeight:600,children:["Owner:",Object(v.jsx)(N.a,{ml:2,colorScheme:"green",children:o.owner})]}),Object(v.jsxs)(W.a,{size:"sm",variant:"simple",children:[Object(v.jsx)(W.e,{children:Object(v.jsxs)(W.f,{children:[Object(v.jsx)(W.d,{children:"Atributo"}),Object(v.jsx)(W.d,{children:"Valor"})]})}),Object(v.jsx)(W.b,{children:Object.entries(o.attributes).map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(v.jsxs)(W.f,{children:[Object(v.jsx)(W.c,{children:n}),Object(v.jsx)(W.c,{children:Object(v.jsx)(N.a,{children:a})})]},n)}))})]})]})]}):Object(v.jsx)(E,{})},L=n(19),U=["children"],G=function(e){var t=e.children,n=Object(M.a)(e,U);return Object(v.jsx)(b.i,Object(I.a)(Object(I.a)({px:2,py:1,as:m.b,rounded:"md",_hover:{textDecoration:"none",bg:Object(S.d)("gray.200","gray.700")}},n),{},{children:t}))},J=function(){return Object(v.jsx)(b.b,{bg:Object(S.d)("white","gray.800"),color:Object(S.d)("gray.700","gray.200"),children:Object(v.jsx)(b.b,{borderTopWidth:1,borderStyle:"solid",borderColor:Object(S.d)("gray.200","gray.700"),children:Object(v.jsx)(b.d,{as:b.j,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:Object(v.jsxs)(b.k,{children:["\xa9 ",(new Date).getFullYear()," Original designs by",Object(v.jsx)(b.i,{ml:1,href:"https://twitter.com/pablostanley",children:"Pablo Stanley \ud83c\udfa8"})]})})})})},V=n(258),Y=n.n(V),q=new(n(261).a)({supportedChainIds:[4]}),K=function(e){return Object(a.useMemo)((function(){return"".concat(null===e||void 0===e?void 0:e.substr(0,6),"...").concat(null===e||void 0===e?void 0:e.substr(-4))}),[e])},Q=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],i=t[1],r=Object(f.c)(),s=r.active,c=r.activate,o=r.deactivate,d=r.account,j=r.error,h=r.library,x=j instanceof f.a,O=Object(a.useCallback)((function(){c(q),localStorage.setItem("previouslyConnected","true")}),[c]),g=Object(a.useCallback)(Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.eth.getBalance(d);case 2:t=e.sent,i((t/1e18).toFixed(2));case 4:case"end":return e.stop()}}),e)}))),[null===h||void 0===h?void 0:h.eth,d]);Object(a.useEffect)((function(){s&&g()}),[s,g]),Object(a.useEffect)((function(){"true"===localStorage.getItem("previouslyConnected")&&O()}),[O]);var T=K(d);return Object(v.jsx)(b.e,{alignItems:"center",children:s?Object(v.jsxs)(N.a,{colorScheme:"green",borderRadius:"full",children:[Object(v.jsx)(N.c,{children:Object(v.jsx)(m.b,{to:"/punks",children:T})}),Object(v.jsxs)(b.a,{d:{base:"none",md:"block"},variant:"solid",fontSize:"0.8rem",ml:1,children:["~",n," \u039e"]}),Object(v.jsx)(N.b,{onClick:function(){o(),localStorage.removeItem("previouslyConnected")}})]}):Object(v.jsx)(y.a,{variant:"solid",colorScheme:"green",size:"sm",leftIcon:Object(v.jsx)(C.a,{}),onClick:O,disabled:x,children:x?"Red no soportada":"Conectar wallet"})})},X=[{name:"Home",to:"/"},{name:"Punks",to:"/punks"}],Z=function(e){var t=e.children,n=Object(L.c)(),a=n.isOpen,i=n.onOpen,r=n.onClose;return Object(v.jsxs)(b.e,{minH:"100vh",direction:"column",children:[Object(v.jsxs)(b.b,{mx:"auto",maxW:"7xl",width:"100%",bg:Object(S.d)("white","gray.800"),px:4,children:[Object(v.jsxs)(b.e,{bg:Object(S.d)("white","gray.800"),color:Object(S.d)("gray.600","white"),minH:"60px",py:{base:2},px:{base:4},borderBottom:1,borderStyle:"solid",borderColor:Object(S.d)("gray.200","gray.900"),alignItems:"center",justifyContent:"space-between",children:[Object(v.jsx)(y.b,{size:"md",icon:a?Object(v.jsx)(C.b,{}):Object(v.jsx)(C.c,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:a?r:i}),Object(v.jsxs)(b.g,{spacing:8,alignItems:"center",children:[Object(v.jsxs)(b.e,{alignItems:"center",children:[Object(v.jsx)(j.a,{src:"./images/platzi.svg",width:"80px"}),Object(v.jsx)(b.h,{size:"md",color:"purple",mt:.2,ml:1,children:"Punks"})]}),Object(v.jsx)(b.g,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:X.map((function(e){var t=e.name,n=e.to;return Object(v.jsx)(G,{to:n,children:t},t)}))})]}),Object(v.jsx)(Q,{})]}),a?Object(v.jsx)(b.b,{pb:4,display:{md:"none"},children:Object(v.jsx)(b.j,{as:"nav",spacing:4,children:X.map((function(e){var t=e.name,n=e.to;return Object(v.jsx)(G,{to:n,children:t},t)}))})}):null]}),Object(v.jsx)(b.b,{mx:"auto",flex:1,p:4,maxW:"7xl",width:"100%",children:t}),Object(v.jsx)(J,{})]})};var $=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(Z,{children:Object(v.jsxs)(c.c,{children:[Object(v.jsx)(c.a,{path:"/",element:Object(v.jsx)(T,{})}),Object(v.jsx)(c.a,{path:"/punks",element:Object(v.jsx)(D,{})}),Object(v.jsx)(c.a,{path:"/punks/:tokenId",element:Object(v.jsx)(R,{})})]})})})},ee=n(35);s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(m.a,{children:Object(v.jsx)(ee.a,{children:Object(v.jsx)(f.b,{getLibrary:function(e){return new Y.a(e)},children:Object(v.jsx)($,{})})})})}),document.getElementById("root"))}},[[608,1,2]]]);
//# sourceMappingURL=main.4d7cba88.chunk.js.map