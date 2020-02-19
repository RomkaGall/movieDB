(this["webpackJsonpmovie-db"]=this["webpackJsonpmovie-db"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.02a9430b.svg"},19:function(e,t,a){e.exports=a(48)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(17),l=a.n(c),r=a(2),i=a(3),o=a(5),u=a(4),m=a(6),h=a(18),v=a.n(h),p=(a(24),function(){return s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"wr"},s.a.createElement("div",{className:"header__content"},s.a.createElement("a",{href:"/",className:"logo"},s.a.createElement("img",{src:v.a,alt:""})),s.a.createElement("nav",{className:"header__nav"},s.a.createElement("ul",{className:"list"},s.a.createElement("li",{className:"list_item"},s.a.createElement("a",{href:"/"},"Home")),s.a.createElement("li",{className:"list_item"},s.a.createElement("a",{href:"/"},"Movies")),s.a.createElement("li",{className:"list_item"},s.a.createElement("a",{href:"/"},"About")))))))}),d=(a(25),a(26),a(27),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"movie_item"},s.a.createElement("div",{className:"img_wr"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(this.props.imageUrl),alt:""})),s.a.createElement("span",{className:"movie_item__title"},this.props.title),s.a.createElement("p",{className:"movie_item__overview"},this.props.overview)))}}]),t}(n.Component)),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.show?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"movie_list"},s.a.createElement("div",{className:"wr"},s.a.createElement("p",{className:"movie_list__title"},this.props.title),s.a.createElement("div",{className:"movie_list__content"},this.props.movieList.map((function(e,t){return s.a.createElement(d,{key:t,title:e.title,imageUrl:e.poster_path,overview:e.overview})})))))):null}}]),t}(n.Component),g=(a(28),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value},(function(){a.props.searchMovie(a.state.value),console.log(a.state.value)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"movie_search"},s.a.createElement("div",{className:"wr"},s.a.createElement("div",{className:"movie_search__content"},s.a.createElement("input",{type:"text",value:this.state.value,className:"input movie_search__input",placeholder:"Lion King",onChange:function(t){e.handleChange(t)}}))))}}]),t}(n.Component)),E=a(7),b=a.n(E),y=(a(46),function(e){return e.show?s.a.createElement("nav",null,s.a.createElement("ul",{className:"pagination"},s.a.createElement("li",{className:"page-item"},s.a.createElement("button",{onClick:function(){e.prevPage()}},"Prev")),s.a.createElement("li",{className:"page-item"},s.a.createElement("button",{onClick:function(){e.nextPage()}},"Next")))):null}),_=(a(47),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={adult:!1,year:""},a.handleYear=function(e){a.setState({year:e.target.value},(function(){a.props.yearHandler(a.state.year),console.log(a.state.year)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.show?s.a.createElement("div",{className:"filters"},s.a.createElement("div",{className:"wr"},s.a.createElement("div",{className:"filters__content"},s.a.createElement("label",null,s.a.createElement("span",null,"year"),s.a.createElement("input",{value:this.state.year,type:"number",onChange:function(t){e.handleYear(t)}})),s.a.createElement("label",null,s.a.createElement("span",null,"Adult"),s.a.createElement("input",{type:"checkbox",defaultChecked:this.state.adult,onChange:function(){e.setState({adult:!e.state.adult},(function(){e.props.adultHandler(e.state.adult)}))}}))))):null}}]),t}(n.Component)),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={movieList:[],searchList:[],value:"",searchBlock:!1,page:1,year:"",adult:!1,results:""},a.searchMovie=function(e){a.setState({value:e},(function(){a.state.value.length<1?a.setState({searchBlock:!1,page:1}):b.a.get("".concat("https://api.themoviedb.org/3/search/movie?api_key=986b7e378730cbff3e87b1545000450c&language=en-US&query=").concat(a.state.value,"&page=").concat(a.state.page,"&include_adult=").concat(a.state.adult,"&year=").concat(a.state.year)).then((function(e){var t=e.data.results,n=e.data.total_results;a.setState({searchList:t,searchBlock:!0,results:n}),t.length<1&&a.setState({results:"0"})}))}))},a.nextPage=function(){a.setState({page:a.state.page+1}),a.searchMovie(a.state.value)},a.prevPage=function(){a.setState({page:a.state.page-1},(function(){a.state.page<1?a.setState({page:1}):a.searchMovie(a.state.value)}))},a.yearHandler=function(e){a.setState({year:e},(function(){a.searchMovie(a.state.value)}))},a.adultHandler=function(e){a.setState({adult:e},(function(){a.searchMovie(a.state.value)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=986b7e378730cbff3e87b1545000450c&language=en-US&page=".concat(this.state.page,"\n            ")).then((function(t){var a=t.data.results;e.setState({movieList:a,searchBlock:!1})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,null),s.a.createElement(g,{searchMovie:this.searchMovie}),s.a.createElement(_,{yearHandler:this.yearHandler,adultHandler:this.adultHandler,show:this.state.searchBlock}),s.a.createElement(f,{movieList:this.state.searchList,show:this.state.searchBlock,title:"Results: ".concat(this.state.results)}),s.a.createElement(f,{movieList:this.state.movieList,show:!this.state.searchBlock,title:"Now Playing:"}),s.a.createElement(y,{nextPage:this.nextPage,prevPage:this.prevPage,show:this.state.searchBlock}))}}]),t}(n.Component);l.a.render(s.a.createElement(N,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ff9e5f7c.chunk.js.map