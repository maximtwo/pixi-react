(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/ParticleContainer.mdx":function(e,t,a){"use strict";a.r(t);var A=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=a("./node_modules/react/index.js"),n=a.n(i),c=a("./node_modules/@mdx-js/react/dist/index.es.js"),l=a("./node_modules/docz/dist/index.esm.js"),g=a("./src/stage/index.js"),s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),d=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),b=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),B=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C=a("./node_modules/pixi.js/lib/pixi.es.js"),I=a("./src/index.js"),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var A=arguments.length,o=new Array(A),i=0;i<A;i++)o[i]=arguments[i];return a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o))),Object(m.a)(Object(b.a)(a),"state",{loaded:!1}),Object(m.a)(Object(b.a)(a),"loader",null),a}return Object(B.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loader=new C.g,this.loader.add("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png").load(function(){e.setState({loaded:!0})})}},{key:"componentWillUnmount",value:function(){this.loader&&this.loader.destroy()}},{key:"render",value:function(){return this.state.loaded?n.a.createElement(I.e,this.props):null}}]),t}(n.a.PureComponent);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParticleContainerDocz",filename:"src/components/ParticleContainerDocz.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParticleContainerDocz",filename:"src/components/ParticleContainerDocz.js"}}),a.d(t,"default",function(){return h});var w={},O="wrapper";function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)(O,Object(A.a)({},w,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"particlecontainer"},"ParticleContainer"),Object(c.b)("p",null,"NOTE: Writing PIXI apps in vanilla js (the imperative way) is always more performant.\nThe React reconciler needs to pass and validate props which can be costly when dealing with lots of components. "),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Most of the time you won't notice any difference though (rendering 1000 sprites in a particle container is still fast).")),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,Object(c.b)("a",Object(A.a)({parentName:"p"},{href:"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html"}),"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html")),Object(c.b)("h3",{id:"maxsize"},"maxSize"),Object(c.b)("p",null,"The maximum number of particles that can be rendered by the container. Affects size of allocated buffers.\nThis will only affect the component once and will be applied during creation."),Object(c.b)("h3",{id:"properties"},Object(c.b)("a",Object(A.a)({parentName:"h3"},{href:"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html#ParticleContainer"}),"properties")),Object(c.b)("p",null,"The properties of children that should be uploaded to the gpu and applied."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"Default Value"),Object(c.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"vertices ",Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, vertices be uploaded and applied. if sprite's ",Object(c.b)("inlineCode",{parentName:"td"},"scale/anchor/trim/frame/orig")," is dynamic, please set true.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"position ",Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"true"),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, position be uploaded and applied.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"rotation ",Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, rotation be uploaded and applied.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"uvs ",Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, uvs be uploaded and applied.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"tint ",Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, alpha and tint be uploaded and applied.")))),Object(c.b)("h3",{id:"batchsize"},"batchSize"),Object(c.b)("p",null,"Number of particles per batch. If less than ",Object(c.b)("inlineCode",{parentName:"p"},"maxSize"),", it uses maxSize instead."),Object(c.b)("h3",{id:"autoresize"},"autoResize"),Object(c.b)("p",null,"If true, container allocates more batches in case there are more than ",Object(c.b)("inlineCode",{parentName:"p"},"maxSize")," particles."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)(l.c,{__position:0,__code:'<Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>\n  <ParticleContainer position={[150, 150]} properties={{ position: true }}>\n    <Sprite\n      anchor={0.5}\n      x={-75}\n      y={-75}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n    <Sprite\n      anchor={0.5}\n      x={0}\n      y={0}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n    <Sprite\n      anchor={0.5}\n      x={75}\n      y={75}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n  </ParticleContainer>\n</Stage>',__scope:{props:this?this.props:a,Playground:l.c,Stage:g.a,ParticleContainer:j,Sprite:I.h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZnAIVw0nQ2V2g9OABHISQUWImBcIgmDXGFWJYEcGhXDQDJSPdGiqIBdN9DgSRoOYmJyDY4DOOdAQtVOHCVVQPD1XYKDnH7F5ujQo0yIo_jVGwBj8PYQNJR4-UzXaMFUF0FFjnkwjEixdhuFU9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnHyABYgvYAA2IKQvWMBgIAMW9aBEh8_hnEOBEHUwGChH4JYiGoSg4HChFkurVKaGcCAsMudgAEZotC-RrNsqYAEE5hc9gIyg8gbCgdAw1QjkXLEIboxkdgUScmBuGAbDHKxeQtxrYBRugCbggAMkO8ZEnmShmj28bJu4W65TAZDJQGVB2nYAB-DZ9rDCNpquK6DtQLrqykGQqzfMwYRUzAwDCKAph-ma5uB_rl2rBNTIIHA0syFIrwIbaa1rQi6LzLgJlWpNfN8tDNggFJCApqm0MoGZu1QOBVqgjwJW2RC2gwRwoCFK5fJqGAwFasAAFZUK2ldCcYUSWIkmB2KIriBHlwm-0ql5ntWgBtVqpd8pZjd8gBdIHte1_sWYyGJ4E5nX8jZq5UQZWWtYsAmbaJjTaG97X3FGoVVt8nApetv3CawVbzQAdijoPCcSeOk-jmOLH5Oi-BAQhbnuR44CTc08nNEZ4AtAAmHBvVcLCexGOAPkiGiPnQGZUBwAZJHigBOJN4ta6vJAaVwAFVhQIdQcC7woQBT9hNyXxh1P6QO0azkPhgEcPI8zrO4-Aaml4sNOT8PmOc7SPOC7uB4aNL8vK5Rc1a_rxvUFcZvW6-FvyCd27r3AeQ8R5j0ntPWe89-BLxXlvG2a8A6MgQX7HeYcT4HzPuwY-GdsEXzwagm2N8Vr8HvkXJ-Zc4AVyru_OuUQv4_wAW3ABQCe6UD7oPYeo9x5TxuNAmcsCiE1ngTHKQStxKSQ4hrX225iZpF9lIDGWMcZ422lIFGYMzBfhAJRaitE0iSAMhoLQFBgL6AYMpe0GNzKmkVLaFSUEUZQFiNEZ6qFzIzAgFgCA_44BWSUoxaCA5LBnXgJ4gc5oCBhP8Q4-0aBWDMQgO4KUbp2hgA8JoSQLiPBGNQIk_oKSAlWMgjBEUOpoLOAAPpagaM4aCAAZXqABNKpOprwACkzz2EsB4nS7oPThGgMJO2dximMSgmiVASkZwNFQNeIQzduLaTSTgD0mwoCwliYE4yUFoLeIgGlCAgQjgrIwmsyQXRdDkGgBkcZuzOCoHUFsbUMBWAREoFAOwZzdIeknHcuJpSUbBMoKwLgyzzIejtmCqcASzA9XYKgYQMxBoI24LNYAQMzDGFMOYIw7BzSEqJcSklpKyXkrJUUfF8jug2LXNQF0EY8jdAmLYR5E5NSWkiG-dguLeXsAAAJ5DolSqlhMEUo1RdNdFSN-XazXkREiOJ0Dk2ACbU-eKs6E1pvTAgq11XW3xVqiwLM2Ycy5jzPmyF0CC2FuwUWYAwBUypqhMVxq9ioD1PzPVwAIwcvDF0AQSw4j5P8OwaVGK3XusLOzT5f4hYpEfNBBoAANBo_qpwZB8ksf5gaeVGujbZONOAE2PnsO4RJdh5wwDxtm1Yoa4D5ujfIOWmqaz5rFRSrt3ae3mipbyf0NlqB2VGaE-YdhXLAHWI8Y4_I6D5GHesZVEwrggpmGO-AOBUChCICc0KFgdWEFXSEmJW6d17ushYGdOIEgcoIH0cwubQTVmoF65CBBj0sw3S3B6Nl90eonqgcq77P3rtPb-8goVp2SAnMhcYsRtjcWiItIiwo3rrEyGAUD36cBeE-VB6sM7c2FkEpmZknx1yZhcWALYiQVYbHcGkOA6Hqy5p1KgelGYCD2D8DOFqa6cN4agARiw_0wzYdPUizAInl4weTWmvYrNnpwCWHAII1xbiPy8T4zQOATgjFQELDs0g3nSFOMJeTDQcDONcWzfAxAoBMiU8OiT46cBwD8PMYaK4UnJJcf4Vzm6hP_osGECIxNhSBZbsFlcy68BRbPbujIIXfAwDpke4qX7JPnuSyuVE7gqrMX0AlmLW9-zwAyKwGAWpMg4hnNeUIjqs2ZbA250rhMuhwE-UM6gCXt1JaDSuVKVFVYVoCy1wTwhhMrm5jsK1AtPl2oE9lgbKWVbMWvOLIUMAxQBpK1NlLSEMD7JqF8_b-GhtCgRGlFNvVernem1vWAKQJTZQm6e9rNZBSVwEME8WFwbL8ZPW5lE04UgpY80V9AlgEPNeW21g7K5IddHQA0ygHY4fA6C4jwdhMZ1gpgGMNlprnrxCWMyzgzRoXgvQCuAnIwrgRlGSpvsA4ABy3oYDBsdAymgHOjwRrcqghF85BrM4NqM_nMALZawgM0CMovbquWteLLi6BppTuEV0e9Ahcfayvo8gpySaBRmEaLtAtFAcXXYAACUsHqBp5aG0XhrfoFLhNihzMSS4nIoz2C8F4MUenAfih7GaNE-Y7AAAkwAI8wGt_OJQi1QhzBcbmCI0fdo8641LpPMIXm5hD4wENlbZou7xiH4oWseU1iUOseQHJOrdWHVMaGsMCBronULiwcWrgAA4qb_sPR-hKg-mSeu9VcJFLN_3UEA8BmgU_kX_sw-7NEXOMN0CnOxzj-geOMZah7DfgNrKQ3tBBtmI5uNjbgJ3pnA5G3d5jXZTrlXcyuQNmsnAOpMkvJwIhxIOAe_LLcdRvdgL_H_Z5SUf_GAQAiMaCcpSpGpOpRpFpNpTpbpSwDkGXPXbXB9dgSAv_AAoA5nGvCwHASAOGSMFFGVAAQlfwECq3QB7hsigFCHKCZw5DIPAJR1CARAjAjHiGE1ZxZkF2GnALWSEKWAlwHAtiuHF1GQtimiWExTfCxVYP8DsBpWhCwBAnQDsGUV30zE1wsCqRLzDVcm3QSHWFmBoMRVCGsL1wnjZ2cF6jSjPDMOz30AAHVoAoA30TcNcVwEkkkUkIwpkZkUg5kFlRg1MBAfolhignckVmxvV2AaUlg6t9M9hf8zI2UUjjhVdnR0Biga91DRMvCaAtQuAAiCAEYTCawEUoJX1vVMiyY8Alhh8lgSdh0c1XBmg0JXJWUW5mdL0axhi64BpLDCd2AbM4g2ZvNUE4t3dUt0sCAVj6d3YCQcAzCb8Viv8ej2YUsG8xiLAJjbCcBxJEMBA65whKAIsphXIYYvkUE8ttiLiriMgDZMN3o5RaJhRXofIUQWZ2gLYfpTj8RbAcAF8CA2dARBoTtDljkMgPhTRaA1ZpJIxzi5h3NFUYBuDESjkTkcAU90AsgMSNYIwJjTweMvo6AEjISW4YS4TpNGTwYt40AoDXl3kpsgD2TCYWj30qT3i5huCJjc0aVwTqxyiSNKNtQuAJ4ZgyTaB783lO9SQuhWBiZaANS3k1ZsACAgit4mjSYVUOjVjdU-iBjBoJjRi9cr0YNeN0BYAOV8hmpgj5dytWBO98A0tdV2BaC7ph92AAAfEM1nNUh_HAOLAMu6OLI0m2bEmYUMLfC4G4zrJqGACMZYi0wgbgmUh06YDAF0n40aA_D0oaL0n0n4wM1yTDBM7WJMy42HAQb4_o349of4l8dgIEiIGYUEqUwmAs2TIs50ykeAbrS_FjFcGdMANgjzQ0ZEzWLeQkpckkpU8kqSSk6k0cWk66eksAiY5kwEJYYYsU7YiUvEwc11PXGksaAGeolcE0sTYIQYxkueB_FcPA3XWsYFIQGFbib3BkVaJMraXae8sMeQDROYEFACgQbaGUijXneUm1aIUaBXAQIQINaETCoUOZVKBsio2NWAHADILCiMYoM8XCo4U4XoTC3MNAf3QPGlEPHAUop84dYtMioUDCrC7gotEi7i-IoS_CygMosYy8uiR840lvVSDNDIHfSo7jXjNIK0jxIY7Yu0isiMeg9s46eSgQRS0jZSg_Qi8YkU5Mp9dM1M-IpsgxfElcaORCpS3whIefb1aSwmW0qMufIDDypM_kmsVc4k0kzc6RGSCMKw4Qo871FkrnNkt4qEyStIa8s4iyvTKuIQRIa8mU3NTyxo2S5o5zdmdS98rSjk-XQ4uwfSqqnAenMy7OUNQpE3Wq-nR5S3BEa3O3B3J3StcvN3OUVqiAGYtsfQocdgQIEIdgYobqx3G_fqmgYoV8LWb88wKKxyiE1a2scwuwYAL_Gkm_O_bylmRtNCLoMAVacgRGYUqE3YhtQacgDkNCURG89QmlD8kA8JVyUdGJMwd6tvBwjvB_QaAGuGTvU_LAYyUGgiPE7RJQXRfiJCrjCzMSViVWLcmSOScgLCPxQCXQECAwMCEpOStHDHU5TxA5Pxe5FSGxfpCyexHZRxJiZWKRdWGSPpVZD0YxOFZ0SGqGcWdvHoOCOAOwCRNGikzG-SHQvQgwzUHAaCPodG4yp_WiWgQaKCIzTAdAK4Z4tTG8iwTW7iSwhwxzPXJG_Qao9AWo_KtKqEw2o4aYsYUmqcKUxKlue2uuTsR8chR-EuKhGhN-D-BhJuZhf-DuLudhThMBHhSBfhOeGcV8EtdHB8NFSNVBCYtTAgbUrMjW5O7INfT2E4reIuiwZy4y1yqAdyoUsyiY-29gfS2uvOm48oVESgbK8S3Amym25_UpQ2nIN8jOoiTeDrUcfAvu34xWVGlWCW7iPatZY6u4Z62aKfE2-vMwIGHRPRPJNQXG7QfGixImiZKwZpaCM8ZwJYREowqYH5XiIZL5T0S8fQam-0SZGyjm85S5Gy5-mGkmOmiiPE7-uS4KiFP-z-65W5AQQBqCfU3QkIOwFGGB9Y2YmC_88FbChB4dHdZLUmCYREyVG-8iGiPEyQanWFQFOS5lGHHYcnNTfByFSQYYSgbYbZYmqCWwpILUAWwGzvd-3SSQO-kZB_HmnFTtXtMR8RsVBWjwFxK63qZNUR8RxRrtftCGh5XNJYDInBvAPBuYC-g5K-vRnxIk5ZCGPml-5BmYWCtBpYDB9mLB9BuYRBm8s_UpShhDGhmAfB0xh5dhxIThmGbh4G9Qlxnu9ga8F4KIddA0waSwE-s-nAcJ4gWYSwA07xlSBFGeh24-0-5wHATJtJ-0BFAAcUyBmBsDOBibidyZKdmHKbgAKamARTZy4mcBkZgFgncG6FcliZyZwGaedFadiHabgmdAadCbFunoxqNuyfiYmdZsxOXJCYRXXk0kqd6ZWc3iWdkpSdge6aqZwB2dEF5uMgRRhxcRnA2a6ZmdybOYKEubGeWbwlgD1HgDxD2fWaeZgBeY8wedksal_BFHtjWfif-bJB23tjhuUC3oEZIajIAj3vMVAnAmMlsGaagHMiFjJI8yMTgDRcAZCOatSQwgySyRyTySNyKXIagkOcVqWGqKqjgkSEILMgIe018U0CgehCqxoBt0qFgAEBZ0zoADV4hC76G2XOWUjOj_AABpWA3hgZBh-cLZHmrZ9mKYewG3BoBpLUEUM8NnQadoF8l6bFEwMVMUOIpgkQu4UVTVAVOPVSZlggQ1AdNVuyBAipapPV5wM8EUIVs8LUdW9YA2TV7V3V_VuQ8Ydff9cKMMEfI_f9EYIUcaXqTZPwAu4_HvZN6HTIdmYbIgDNxN7NoV2wY5WAQt9e6yERzVfxwWlgBl-CHIrk61-pzVZwdTH2x4Z4V4d4T4SQIgWIPwIWUaKIVAT-s0c0Nl80SAE5SQaRygXJVwaKKoTsQIJ1R1DwddqWeKJMcgeKZdymBOeKeKcUauPvauC91wKWVqcUPiaiZnPxAAYgaX7ltf5XtbCUddyOdZUeOfSdko9aQNqXqSaVaXaS6R6SDerHiDKdcCuFan_Q8HCAiAn0wB1viDU3_TiFGk8bgEScifQ5eKw76C6zLHsISH_UoNoAEF6lNBXoo5SmgGo_uHI8ewPReFo_FHo7Y8eWo7NDYBal1szfYCiDgG2G45jbYBEBFhjd1jdntRXxstcGkcP2jYwxEDcV6wU_WDgDiHLban_TE8Jxk_WHyzzaFALdY__TBXyBU4rerCwBM-rDe1NkrcHWrf5Rt2Ve4jvsNCFENFHD2hnHxBZQNMVp4jtP5Sdwmu6DSwmG4loF0PC_85ITffxQFVje9FUlBwKDQmrTxg3TFQy-Yiy-AAXa5LQki_S9Wt2sswObC66BDKipdd-fVavxpa6GxkiB4dcgV0fpoA3Q1JOvVob0RgaIRRw52FRTQEG_YG9y4GiCFEFwaOzk9KjL8DgB1AMzXQdmypm7CS4Kf3FVkvm5yD4GEVO8W5uLjwuhbi6yPCpMRhu6pwfwNn2_mCUKV3GGmjDKDku4iBuItyIitzADu8iCzIgERnF3e-l3auB86uaAgG4MaopZN1O8SJj3y_0A3TQhjxh8q4HE4DsBCJ93YtQS2uh9QA3RwKHLXr1zl0rKjMS513xKO8N1CJNwfeZ_C6B5Dnj2aA6_iuKEx_64IBx_GAa-6FGrsAz0mue6YuKDq8F8r24Ip6Z8l_r2hBeLZ4RU60Bpci1km-2EfBIRCjkue5Y4Nk7NRAKFBKWF55B8t9moaCiDSAWoICUNG9--F02B2EfAAsoDN6ggt6uCt5y4Totnt_Vb59u9D9mpLcwEoHd895-5DMN99-N87PynohUKDhD_YDD5t4TqWHaH6xOTt6Dgd4R6d_twaRd7ond6WHj_BST9F6b9r96v8Eb6sEl8j61iLuCKauNzqNoPoPgEBox-ACx4G7CTQioAcJyAKNPAl6S66Ai4fzJ5Hp13MEF4oJlHCPH7hg7vUIRSo4yB68RREAjA27leys_zWSdZgLgMA69bPt9f9a1DAK_zeX0F5eLIyDgAWwuCVbM1pqmcTJBoaLbD1OwHpZkhG2TrOHnzyGgjBymeIIrCEFvTm0aAjaNLoKky6yhgAdXWAYyydZoQq-KCd9vgK_YVc9g40cGnayoHABSBiKQnPQN5SuszGUoR6Jfl8a1tAmJ1CMOQO6J0CH8SwZ0CME7wNkCWw_U3ITGIHwRH-dsCIHHh7i34hAygsJDqDACCDo-gORvCuHaDkCWB2QGXsODl5hJrcivVNFZnkFMtv2xQEvuwAADUcoFICIGmoABSOAEtRSzy9yB6wQKjOlCpq0f-mYJ0vy1barchotBcQT6TphIougZ4blgQEfwrdQmG3MUOVCqwNJbAIEaZn4N0EIgUyWQmADkJRDpAHad0dJNwOegBJjubXDbuxhtIWDEehQv8MyC-7VCbIbMHmoTGGxDRYAY4QaL5CVCcBawXLX_nywAElo6AKQCYKMIgBOCnBDVUJm8keITCeWUwgVm9xp7awGeEYT5OgE7wGw1hShWsiwIkGvdThKwqIVSRaG0CjhVw95J9yqEX5ah9dE6BkJrSgpShuQioTcJrDkDihPwsoXkOErvJhBjwk6icOeHI9a8lfeXPL1iFPCPeLkV4TUOoCvR9KjQ98Gz2IRtCcA1ABXBCIuHHDrhQcA3IfCcpjEEUyIlmLfy7yP9iCkVVgcDTDKqQB-hGR0sxByA_CBAIwDeIiFvTM4PoIaRaPMFzAp4-wGQfNnz3WD7C6RdwQkVVn5GCjJBbPfoRGEGFjDXIIwsYYwFJEDgGRMwmcPMM4BLCVhCKOwoqIZE7DZclVEQdCJmBnC7oiouABLiAF4iawwrUVhDzaGkgxBrIp0UAP74bUt4q1OnusCtHA1Haa6Y0Wf3iIJjJBYxTUdqMh66iFh4wh9rAFNF4AFhFonXrJT9zfVXuEAXYURTshAUrmbomQizBwLaVaCqLaABGCrGHc0hhZTOnN19GU5CikAYolrB9FsE_RHVeKqMiWCtjHKWvPWvsMbG4tmx5A2sc6Omj6U_cjFF_sgRA5oFwOmBFYTOjZSuBexgtKsR43xDRBDenFEiiMGYioAKKmdGIMF0gFVirgMeUZEnh0jPjgAC4xQmhAiAfiqx2kIUA4MQF6CBxo4EVkOJ0EjihuMwC-ogWqTAdUCYHDAj0kXEhji6U47oO2OfzForxuuCivEKFAFBrWH418UsH6R482hqEn8cOBjz_i_OAgICeQPzJ08N68NLehsi2Tb1sAu9MxHoCRZusxwcANKBiPMC9cv8zEFII_hlQSSW4P_AQNlQ4Ayp5eik9Ed0NqHskBJRPBAa5HK6IxFB6gkQGEkuL3Ei-KQD4EIQOGZJpUVQg2OVxeQEFv2FsVVpwPSGyt5WrkKgAkBeTuIZUDRbUZ5PRYeTPksAJ6NQDGIzjaOmQRIKoMinwQIwAUtsdpVsBOt4pwU7ydQESnC5gpg0JkbASAIBT0p74ScfOD1pYSJgiyC4ewCorkUjWaU0KWtSCBjVZeNIWYphUbb-cnWy1YupGOrAIpjEI3KMcFIoJCgzwEoPABGAAJjdB-agA2AAU-5RsGQ9eQKltUmlKT7hxiWabARdGuR2gKuPsdkACTBMXJtI9wa5CExpRRJs0CMOJM8hSTZotBc6TeJumSSNJx02ShEQKDRFFkcRKVE93uFZFRgsZHaXtLVwBJN6_EK5NQBuT8suJJiPGoi0JrIsaaWwKGRA1sScpIZNkCBoAxmC8xIUHoC5NVG2B0Q_EmI8hsMBRC6BIAs4UBhTIIBUy6Yzkk5gBwOTGMsmYocBvy2v6VR6Z1AamW-E0n-sRQzgBoDqANbfVeYdVAAc9Fa7uteo9gGVr1CKYeE2cvUPUGeDFySzv4R4SFgjWoi5pYZPEoCHxMRnE1pBKScyCS2EhktzZNATlpkwVbtA2WVNKljBFZlLkL68sxWcrKqSqz1ZSwIWSLLFmOyLkmM6GQCnc4wZsOmwCcM-BjRs0ABssqYEIBEBd5xB7APULMFdpjtQBUXPIBEFlC7ZM0y5flBPD1rDEtG-wEyJymDC4DiumQAgUYDy6i8iujAurpkzn5TMjggg0ivUHi7pE8STaeuaV2ElqTqAc_IQrNm2C_sQmbw5kHlWn5IN8aCzYNJPJ5iDQQZxRKQUPzCIrhMmH1DQfMFUEgpD5MALQalPCoZB9BW8doF7niBcAQgnkLBpmFKBdygJ-eSUAxTaFh5pq7ct-TgDqHhoxi2olOesNAUtxTwF8hOQIBrwzjQFZlGdMv37lzk8gmwHIDO24jLyNYX5OOa5GAY3FyAaJdGpfPiJYKZIqvZ8Hd1HBQKV5sckQB3WgyLQcO6ABwuEgPF9l2AsAKrOi2CEUC3ZRjNcrwsyZ9dXcNAHNM-HJzhh9piwVYAkCnmBCYMnJeyWgAzx2JW8aw3kvKKeQvJOGPJT5HyTGJEZR6P5fuaAuAkIhN82_fhUiWJKngpGMjQFiIDmQjjwiz4NQiAL5T4o5kzbFRcOBsS6KPkXyGeS5Lnm0htFkoAJbyXyr4KWCXJOZBEF0WWAolaQpDv_w3TyEhACIEWqRXyR9MdQWoDwvqyFZAy5QdsFhfVNegfRWoPZbTlvBVELpvI7AQOaLLZyHYbK5_HmHRClyrovZSslWWrLPApY-x6AG3DzOcXw8YAt4NmaundnElhloylEOMr57_oi6rEqFvxHsqwtQUaDI2fvSRbE1aaaSNRTzQybmJdm1cs0KiXFDokzldRKKuyQlQoNtlU4QaIg3lqoMpw8KWSrY3pBHgsmby9iL8ufRfK2u-YbRgcklSuRrwFIK-lNN6myUBRthaZsomGy4T0AYobQcATuA5pxYYhFcIwB-X2MxAwAWwojEYDQq1MsKueh9UXocoLqwAc6mhFsKrRbCS9KCpIEJV_LtowA6sIirmAol62cAxIFLkGjFAwVlmFGBGBjwUqlacpPTLYCFUir2RMqq-luk5wN4q8rGYxeYD5Wwg3OYzKCOKohW6MLGVjKcDY0caYM_lSwJxmsr1n8MYg99RebsoRmWJGItsolmRCtnZJjk5LDni-HIZcAfAdNINZy14FcMwaQTcVkI3Ib4ow0WAlIfjIEhyltkprTxbMUSTQBlOLpRVKdHHR1yHWTA79i1z_aFNtmVTKDhYHw7JMDSPkatVE10K1QLAmTHyJkybXsAamZTWICx3aCdq6m7a_pjAEGYIgOmzoHyIOuHXDNOm7auZsQugU-RZ1ba_9Jcx8iXN21hzHyIc3XXQA7myCTdTuoubIJ21oLZ5q81XWfNvmeAY9Z80BbzBz1ALe2LVBP6yUzwDSM8OrLZyWBnAOU79k_yAI9Mz6HIFMuUqzIiK8YLOOPGISgjf9ReLOA2HHkjYJr3RCG5QhyPZIecvF4SqYHHkiHpqP2keItRV2CXMy2uAG6pA0DZwQdLAAbAae51zn4p7ARCkIOYEXkTUKQvI8wLmrjxip_mWao4Kos5RWhOy01ZRIQuuUwB3eP0TVbylbklcCB4fFID-M_bu881FA9LowOYHM4HQytKrngLk3UCXkZ1OOY4rHBtCiuNXVSHVyMAhlN52QEtbPJEk9AiFkmuPNBK7yYpxFp01jg2VP6iSqpb6j9V-vg1hJ6x1YNMWZrC2jgQgqeRIPQPlGIj7hYAUSapIqVmUjBTxG8aArc0MLqwM4piWzxnQFFUo1qe3jL02Br8kQjyLkrmF6DAlZQCaljPULshKLP5Z3a5lUgo1UaA2wWj7klKw3ZAVh6WqrQXmYJiasgWKnAagiBEsAraaRVyC1toDMEZttRX4gtuyDyrZt76XDKoEgkTLfouQKRWrllwEib0ldPyu-kGhrbmCp2qupmA-hXboyfhW7ZjA8A7b8tVwWzbTim0EjfGF_B7b9uBr3b-tzBAHSdW20YBdtfPfbZ9rDGl1DFMGXxo8j1i9hmctBeLUNHy1pDQdg4ebegCwCQ7AcSwKpIjCqSTEyQsWh_NwX2Hy9sddgc4V0NS1ejadg0cNQE0jUnVYdNYWnQToRAqEk8pBHqRYC2r-CT8dG9NYxvE3aa5SdcxgQpqU3zBZNDcgzZKDQjUZaM9GI8BMCcC4aOBxkUJdYqvp3D5gSwNXeQDoywBt5qPEfrQVc1ygzwkNeyQ62am9i1cSwNwVMGKBeCfBqm2BTvJNy0EyNPW6XCX1hWe7vBhYBfpfymCTUxti2pYPEFNDoBkg2AXIcT3MCQCkNAC08gdzGJkaOtlGzAt1pQ2uRTd5u14lqqsXcbRd4M6iIw2YaGz4WvEgmgwBCb4pQGbjHYAElb30NmUKMMGWxP4gwtnZje42c3sPoPJoIlAFRUsB_yWts17TKfZmFZaU0OWgav3Z6vuiZJrZvqj1fizx3mRQ1gauceizpqYt_AeAHFniw8WSNmIetSzDrBUVdihx41ZiFFJ_lUAhQkULILhsV2lcm5T-xaXaws3ABYpiQezSEsc2xs1Mk-lRS2N9ENltRr-waAbFC23DlJ3YzoZ9tfBs8tqr-zXiVO6DU77hVYtETtIU3YGsdmFQaFWPcxkgXgj4RQF1NLoYSexRu_ngAa6ZVCy-dyMykgY_xVjdhzc6cfLlAMxS2pCk-A7waoMf4v8Ah_A9r32EkHzhUVD4aputwkHOhdkxUGZQRQ-Bcd-O48ewGJ0ypSdWAVPvag4ptdkg-huA0OKJ0k6cAiQcw75B8zSGC-JIFoIIZYNpDcDmFQXXenwKv6KCTHagojFnFotOCqh8I64DZycEgNkTCMGzhywwL9VOc9NZw2o4DtnQHBonqpp_kwGyMRwWfZVnn0FGjm_Kdtt0E7ZPBWQvbNuAOzLLDs8Ao7cdpKEnYHJp2S5OdkLEXbLsPAq7cWL5A3Zbsd2e7A9r5CPYntXAZ7C9tXCvY3tXAd7B1cMifYNJoofeGXfpuAD_6qx5m7VbtSEzihRd7AsZvrtsBlGN0thhkA2S2okHyB1uMo6GXDJ3G2h1uYo4wVKOL6jm6hDDVVOSGjkIhBaz9sAAU0oHwDJGuyKEIIB_8xyArZA-sCNYyNtg7a9oMBjUz6YXo_6VE4MG-FVYUTaJ-POEHxM4m-RxJ5lCnjJNqYU8-wfIJgBRNER-yWJiIHwTwBdl6TbQEdj8PZMsmt83JnDhgBpPgoUTgoFRRkBDQIgoAwpr4xkH2BSnRT_5O5FiZFN6BhQswOUyqYxPqnqOFJpU9KbRCChwgtJnPgieVOZGuTWJ_oLqgkgIYUTlpwgJqYtNrEdTCJu0_egNMpChTTJjk3gHFPzg-TmwAU4ac9MInmTnJvE16ZZNsnQooW34-2ymAkHmQB4ogQqpIHfseNHbG4A_C7a1G_4Y8LCFhBzijRWjFoNlt0YXaSBpj17fuPFGrjXtXArUJMNkH7geAPArUVqPFFcB94pYR7dAIPBgD9wwACICUHMfaj6J-IGMOrpoGfZtnoomxpXYQOsE4BbBzAkXZQK2Ny7rWv-xuWhF2N4pddKkfXYOIZA87RxA4ccfAafz7DzjXxy41-NkLLiTo15lRZcdbEIKo5LMZILucJh3m6xrcGYIkC65EArjDlaUiwavO34bzYSE86hMyl44YMUB7oHceaAHikUqAc0I8YdZspAgREzQvEPTzDgkzXx1TZYbsgf6BAX-2gF3gQtlHgLgVFHv6tkGNl7hZFii-Enp1YHVDLFtAN_pNFzC8Qs0fyPpS4vfxKLvFgsAaKTArF2g1gboKMl26eDw9-43-YubKOh5_OVgtNN_g8Bz6VOql5jTkCID5yYui0KLRngPGfAog5oNTJl0W0oYwcP816E4KDjtA4u5WtqHsCODVxCwn-7i5Rfj3uX_OXl1ja_sbZkKiJwl7_d0SOBJnrBMEL45IHeOJJdLXx-oI5ecsQhqASQD1N0Aitq02UzwbliF3MApp9L7AZpKTFvSTVOxGefuaQ1zA0Hq5CIATtrQUtqXw8n7MPXUHbWEwxxWsDpM4DFm4kwccuCQ0OOvmJliDvolcHRfMUwBUJ7mahblc3QeY5cdRMAktbu42AwAa1sot4ZnIwZ1ARlvwORbgb5AUg5gL84CMomKFqDU16Um5x0REySZmgagPDJNkMAGi_AbWYyCQD-4gI5QP4KWHNA_gwWpUdYPwHqUyzfr_ACOLDbBvVh-A5QQhRAGKr8Arg_AXqItE-Y6FvQYLQomSDbqSj8gwXNReaB-DFhqgoIEAP-n4BRA0AaNv68Yj8Tw2LAiNmAPMHDBYz4ADNtIYjfkgM3-AAAPVag4Ba4Lh6myuH4BqKBbIAYW_FBwB94cA8UFmzWH4DD76m0NkAFLBwARxZzEtreGrciQ4aZbwt7WwnFFsq3Wb4ALfSbZFtw39bhMfgGfp-aa3Bb0UHAK1HNvtRLbf10m2HIgYy2I41cO2-aBg5-AdbPt_gEGpNu1xtbyth26rZACwhZRgOc0EihGAx2PbEdhO1bdJtWhbb8txW_HZYk16wGqMmGXTIZlmSR9eyxGb8aUYN3yUYqBZRqz5l0xFyJFXAZUcQBRpqj3bPAGyD7YwwEQeGbYMWckCoggg_bfwNRxIadKmMxZ80P7f5a93MzFCfu4PbbjD2YAo98e_O1ySidZ7T1he37ZRlYyYZW9YbPXoxhsyW77EamR8HzmRBmbmqRu2_eJS_s19Vuy2Vvp9W5Jd95DZOxZz55wkxgdNIBwIFHYIg07owHmqwyc3iaVNBDC5DC0Xn2ytWOrPVq0ui3k6-B7OwcMg8GSOrBGJ1HmvrqRUCx7yTOIrGIs-jjQpBnpGh5jAih7l1cbPWNseBYdUP_oM1og-dEuj3kNtK2zoaEooPp99oQj71OZISDxT7ywaOR32CYfMT7rouswPrq6AlDWH1DuNvI_2gMOho8vf6I9rcrnbMwIjkSWI-NKCObtpjzGHpygCyP9ouj8aKSCUf-GOHNAYEVVi0c8OoxgjlullSlLqEzj7MB2JtmGxZkPHS8hR2u22ysPLdDF_6CUtiddBWHJffBfWgKIW4HYl_IqCk8IMpD5wYALqYNLa7_R7dqesXEw4-AQU6ALBNQOfJ4clLzQrUUp81vDB6HFHcbE8LuXvJzI1AEYfJ_E5pH3kKnKIOwB9CicLXlK-0fp9gEccuPHkagfbVM64f7ReodRf6FH2WepHEFUWlgI6hi4EBK4wQLy1oZSHYpHSa9x-BvbqNfBt7u9tRWWdyT9wE4MAauP3DbNz2dgdEYSHnZYSI008NASQBjGDBszVVU5hpFLGijK3UA-ug52AB24sR4ATOA5N31t3C0gaJ1QMboXVJ0LuMXc93ggai28LRITkZOoNHWp65UxUW0ZLf3ZSYv1RaQhUQaR9KNDtuA4Xblitv7mHaCjL9bv4C26oAkX0Sbl7AXMP8unRRoraWiO81ej8aaAQA7TwqqM96R7ku6KG0wf6tdxMGOEizHqCHM6HAMKPcnjmDqhsgxU7XlhJnRpR_OQhPYPFyOCYBBhuYOS8i-xCIhOwnAbDcOH7kABHBkAyHqDeFugzKLWDOn7koDNILidpyFxIwDspgsHaceq3FDMF7R0Q0l_BE1oAjM35LjsMgfLHwjUEubzWnPFQVivEgYgk2so7h3Uv_OWo2l9K-SCMVeaWLu4Dodkqtu10lL1l69zpdbSSLUwSV3YWHd07jat6D6KO8XG38lCH2w7f2PtKsGYhvbsHey-FecvhQ2Vft04aeMsDcXhPL7sO93csj93LMWVyof0pHvXR1by0cBEVd8La32lbd6QYcAYPw2bOHV-wD1fJke-sDY1ia_pBmucwX2ocntdQQ2u7XqAZICIDctuvokc4DAVeMAIhAvX44GqzHIDcwBPYlQIq3OHDcwYEx3rvYOEFyDE3ZwkbmwLQBjet4-gRE_uRZZeA4B03OlEt8nRzcblaAZLzWgW9DHFuOP7TLN8nTLceYK3OLttzW_1oBGfyrHjsKkZCaQCGip4EzXfduWuKRAmTJZXoJwPar8XGniLaXRkx3l9oKnvQLoW7pbVMU9eQz70-M88zEGtrgQEkL3xKVtHv_Oz7crMoU8mHJn5nlZ7GJ2K3gMjTT_wUx1fkdPq51CDJnKwcOHPaYBN93UK3Io_PndTOr1G2sZA4v9Bt85fxZjJeoxRC4Ly1Fj0Sa2-YxGwJgEK8nm0tBImzmWyuZCc8v1YZCOV5gCVehBLbDt211q8qcxcwNc4Z9tUNablDJtQbwK824cv7Ym7_3qWxU7YHJnUZbry6QzYQkgRi3q5mt8a-hZ-VGAOZMjqgCsOrgFDm1HI5THcWXEzUXbzEHiCsPvoSbci-i7CTZbtPVihr9KSi9dAOHipZUpE7Rdt9VNkIvF26M80EuSFhXzou59M-Glnv-BBFyK-GokFfvoipBrbsOGA-gx2K3T13MK9lEZMHmNoONDjOHN9SJuW3aQWh8_lXvBnsYnj4X6cMNIhEmIM1GcBvBJ7WZUn5TsLFtdbAqbWDiW1s4ukhi9wh9mHYPGYH53B03d8L7TYHiBLg7onkXIyDz7mh_DltimQDRK-xf0MUGZL6jK5oNfd0I_HL9sB8-6vyv9gw-zW8vvdp4v9AK9HZEW-ZvAvg3-vk2o6faCgguADz78Am-ev-lWwAr8yC-_HzcAH3xbs28IOsghzSr8z2B96eoJvHDIN_CgCFeYT_Lar1bojBCd0nsy7iCcHCQFFAPxkZnrNZbjsAy53QYoIwENebhZSyFUPED1TcAKcfYxGEk55oCG7sv0-GYOH94Vt-CXxlBLzBi7_h_whEm5IZYAknULO_SXt79T-YWsKYcR4fYFcEzqL_CT6xGkXzygBr_l_QtcUAIB3_hAZMSKQ_yPhacyZcJ7MJoHCQIC9QnoUUQ0Bh2PzrB078hGUcA8BygOZM5x_oB5ESAB_msLP2p8U8fCDgA9QcIE05GlBNmACgPFIWghpZcoUBxCOTDhgDQAm3ESAJoSAOQDn_QjFzkLAfFHftCA-MHxRwAoehlk0YAgMIC37YgIHQbCbb2O8nHMYiO9WHJJRbUcHLfDScJKXE1VgTvTuk0d7yQCzYCNHH4U4D6eUJ2FBwnbbG_9xAggDmRMmSQK6ArgbJwkCtsLoBkwGPAgC-9xtdrxk8ZFFH0dEMfN0TMpEDGLT-1v5P3x-1TAz8hVc2Da3GZ16dURxWFmdVyFZ128NgSLdCYbnXa9UfUQUNETqZvzNpIgBN2todA_jy49k6bPWN0HhNH0uF_AgrSH8Z_Kn0CCiABN0OYtAlUmZ4wfB4UOZAxEYEOZp_XL1n8UvUcCJ8EZVFx8QiXeIJy9u_IoLtUt6JDQb1TEUfQPokZe0HrVDXUBnaCDSQBgdlQGNtXIY-1btXoZBgs4EAYJ1NplHVugUBnGChmSYMAZF1LuXoYFgkhUAZLmehjXVyGDoNWRJALdU2CD1FIDWDQGW5kPVBRVYIvVXmdYPOCPMM4IfVI8UBhPVwWeYCZlHEdYC6DdCf9EyZ_0EYJUx1gGYJHURmYTmWDoFZdWQR_0HIPWBjgg4NBD1gB4MvVl1G9Xtgm8VAFLs69YSA71tgF1Xetx9FSA9Uf7Ulh3119TljmJIAx2XVtAGDGBUJSPCTSaxJQDxkQYPGDFUdljlV2VtUk1TZTqtIGayH110Q-KTXlqGaEG_gVONrSPwfNWSlJVlcSlVU9EGX3Qz8fMAaHuNmgYkLZgUsdoDhIHQSHz85rULRlat6gTOUQxk8Nfgzw-VWvy4xtQzq26s5QOriVDahFUL_JnlCOQsBAqBFAqAmCRkIlCdscWEipq3MYmZQzwGkLqJU6NnhdDsgDFUft6KMx1kUoAKeSs8C-exynk0JdYF9D_QgQmW5tKOgHn02HLCQRQriEGnnAiIRGGDD0VcWDDC42CMGdciIOEQ-IWyT2gfAriGayF0dPQMKwktvZMk-JrKEoSpIEMOESpEYwk4UFDYAdADQkjpB5HRCbyFEOEB69XvRxIa7V1WxDrETUEpDmUVkLppmQxmnMZlwzmiIY6ILZTgpng8_Ec0pwmYHyotqJcKlCPPB6wH1qIBoLeDMYGcKxDWg0pBvC4GaxSfDl9HxBdlB0BFCfDeuLLQ684VCsVKQY_FDGWhSqSLik8GpMYERIbwqkgNJVMaJDD9VHUtXUU2dKYBvDdZeoKUphIfeTvCx9B8LkoHZMNEvpFgt8PZZU1IdDa4HZXrkFx05IiJIVs5eTwjVW7EhXQjEaTCMkBvgzENwj4Hb4OfDESHiJIiPw-B1cD-BAhyTUh9GNU_DZKHiJ_CJFP8N8k2nKYFnBHaaxW-Ds5CwDMlnAjHX9Fog3wKMD_wgqja4oITAJGAlgL_C003yN0TlDcHRiLvxvAgwJZwBdRd32FjI1Q3l4XI8xzHkXoFYWMjpHBx3BxUgCT1yodPQoEQiGIlCI7VSmOphYirwtiL-Cp1Z0E4iWg-BzijJg3iIOQUogENJCV9FhiPpTwQXkAs8XYSPwdvkMSOIctlMZGbw2uDKM6ZUUX8LJ95I-FUMjOFcWAIBfCM0kGhWoU2CHAZgLzjWIOorqNdM2ogsFchOopYC8AbgSIF6j_SEaP8g3yMCOzDJeQaDyjJeAqIfxHwaqOdAzeRyIUjEUFpgmDMo5SMRINotn0l4TdFqKGjzSPsimjCAHNDWILosaJEAC5a6MNIxiGZCHV9ozpjJ0kgC_hPMAfXSPR87pTnzsgoIEhFPJToiQhpUSo2MWsDPAmLTwc23IAjsioRDH22ibAkhF3dueLoEG0CRTGKuZlo1fhgBVogQVVC9o2YIBCzeIwM50goqxTejJ1SYLk8XJSAWOjoo5NWQoUaFmjnUFmRKP2Uj6IEIWY0onxD5iNYLKPfDV9SSLa4hY9mhkiRAJ7waiAIuSiiAsARqGagOo9VDGi0KPAGVirmdsyTA-8DqBCA7iC1kzJBoITlAjrAnaLg94fStRrAv8LCRVFxIeAGwCViXTniBVOBkBWJBQV2Geh7OG2HUEsAhaWE5CYUIFYAWOaAPToVFH2NrwUsL_Am0aVB2Ctj2RVQhWUaRWSgCc26HUGKp3NFcFtjxHfckaUgA9Okl4nYrWG5g1MQXmLji6aOLWRY4tOKZZM43dyTj_DCbkWDDog5EljIwRWK1joJeOPgB1Y-mU1jMyePUNj4ATMidCu5YxzO0YSabm0itnLp30BUwjkgJFa4ssMyp04zOJy0GwqxTIVn0YcP5pwo9uOXJS7BoMuZuY02SPo1gwiIOQ1ggSLFj4HfGJZ4iYjHyKiEYkOSIdhkcqLIjlmZBFqjZI-qLTp5YqqEFEe3SCKvjkECMHvjFaR-KAJ2gNdWy1AqQBM0gvoinWG5euJGJiD1ROWIMjgYrMDogwYgmNMi1kcyOAT3AlsI4YbItaLQTfA1GO_N5cGCIJjVDHwLB1cYkpTdFLiSXnMNBBV3m6AaqeyJ7guElhIBi-EuiFgs9hHGMWjXICBM64ZQO_BgSj1XIOTFupFR0sV8CBBM3hd4-0EgF7mZEMvDWY5Gh2CDSU-LdUHkQ10vifEQ1xvjP47ZmiZpYpBj_in8E0mL8dpM3iWgBfDkTNiOdCvXwIaIg5EOY6EpBhcSQLdROQjBaQ5hZiGgyEJPicIpKKPoIk7-NMSIAWJKASLEzlkkTCY6RN8Dn4nhkIdlje-mZxOWaiyItskofQOQTlbZn2C1gmxNlj_40JkNV2ifqK6jgyGaNmjevDxPljmEiRJKCVo9JOJjEkzSC2jKdFOLa5E1VuLMTyksBNxi2iM0k6I_SPMjGIUhJBJ-jKE7Fz8D23fSPljg-W5GcA9OeKkdUF9L2OoB7eLhLwSWeAhMhjSqSyK3hMkihO0jGElGIGSnIxEVuRJ9fZNxEsJIEV2TnkvWGoBpna6UITb9BfVgMPkuTmegeVZV20pdkrZNdjsYkcWbJYASFJIpM6X5Lnh_kmiwhTtk0FKLckpfhPZFcY6FImU2E-hI6SxeLpO641o2RNOD5E-5OVdH3TxJMVW2IJMPF9eXpM3gj4tiNhDXmQxLnDSkdlIXJ4knlPNJdWXqG8IqkPUHyUz6EWNIiw1OGPITlk1JKgTX4nJJIcKo8WLsh-Un-Jli5I6pIWjCU9rhJSiAGRMvV-k_wJ2ioIe2KGYWcYOJZxVAc1KWBjIr1CKhXIQVOFTRUgpRuYRQBoF6g2cIpjfVv1OaPNjGouyHyBfwS9WATrFflL8TaWObnjislcnBDjtnG1OOBase1JAsdOK4LwAFkmMS0j4_W5JZw9IzBPWScE1ShX4TkiGKIToY1pK51pUlCNsibk-yOy0VveXHRicU9hK9F3k8RN1SCYqBMfBDUylONTFEmlM3iVEtNIZioaRiPSJh07RPWUYo4ymEgHg29T_AoknmIeQ50oFj5SEQyPGSSv7f1TxDt9f-0JDXZOVO6Sn4qtLcCo1P-jfjckiSJBVVU9dKuY1PWxI59ME7VJZ4lozpM7Sj06BJXSng-tIDTSkU0yhiW2QZJfwgWEZIgAv0k6PwSH9bAWWl7YDNJQSs0iZT-jlkvNOqSC00GOLTI0syKjVy0m1icj19CMFENufcQxZFYgpUX_SwCGBNvSoMxNWl5xqSai8EzedoFANFYFSy-MxAJg0rTrI6tOuTs0utI68G0jHWxTwyXFNbSxEnVMPTSU4mPAyKYgGMCiuAqxU5cR0veMFpwM9CMBtcAKu1JlkQhFnvCp0EAFoAfQLIDRt-AYryXtOUWwn4B5ABQBbQgAA",mdxType:"Playground"},Object(c.b)(g.a,{width:300,height:300,options:{backgroundColor:15659509},mdxType:"Stage"},Object(c.b)(j,{position:[150,150],properties:{position:!0},mdxType:"ParticleContainer"},Object(c.b)(I.h,{anchor:.5,x:-75,y:-75,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png",mdxType:"Sprite"}),Object(c.b)(I.h,{anchor:.5,x:0,y:0,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png",mdxType:"Sprite"}),Object(c.b)(I.h,{anchor:.5,x:75,y:75,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png",mdxType:"Sprite"})))),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("iframe",{height:600,scrolling:"no",title:"Particle Container",src:"//codepen.io/inlet/embed/db5dc6ecfb42bbf8dd5322a1015dff70/?height=600&theme-id=33987&default-tab=result&embed-version=2",frameBorder:"no",allowFullScreen:!0,style:{width:"100%"}}))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ParticleContainer.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=src-components-particle-container.3b045cdafaa302fec6a6.js.map