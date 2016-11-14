//伪造的数据
var data = [
  {id: 1, author: "Jack", comms: "This is one comment"},
  {id: 2, author: "Joe", comms: "This is another comment"}
];
//每个评论组件
var Comments=React.createClass({
	render:function(){
		return (
			<div className="comments">
				<div className="author"><strong>{this.props.author}</strong></div>&nbsp;&nbsp;&nbsp;:
				&nbsp;&nbsp;&nbsp;&nbsp;<div className="comms">{this.props.comms}</div>
			</div>
		)
	}
})
//外边大的包含组件
var Container=React.createClass({
	getInitialState:function(){
	  return {data:[]}
	},
	componentDidMount:function(){
	  this.setState({data:this.props.data})
	},
	updataCommentList:function(obj){
		var tmp_data=this.state.data;
		tmp_data.push(obj);
		this.setState({data:tmp_data});
	},
	render: function() {
	      return (
	      	<div>
		      	<MainContext />
		      	<div className="comArea">评论区：</div>
	      		<CommentList data={this.state.data}/>
		      	<Comment  updataCommentList={this.updataCommentList}/>
	      	</div>
	      );
	    }

});
//大评论组件
var CommentList=React.createClass({
	render:function(){
	            var Comments_tmp=this.props.data.map(function(comment){
	              return (   	
	                  <Comments author={comment.author} comms={comment.comms} key={comment.id} ></Comments>
	                );
	            });
	            return (
	              <div>
	                 {Comments_tmp}
	              </div>
	            );
          }
})
//具体的文章组件
var MainContext=React.createClass({
	render:function(){
		return(
			<div>
				<h1>安装webpack报错</h1>
				<div>
				安装webpack报一下错误：
				npm ERR! Windows_NT 6.1.7601<br/>
				npm ERR! argv "C:\\Program Files\\nodejs\\node.exe" "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js" "install" "webpack" "--save-dev"<br/>
				npm ERR! node v4.4.7<br/>
				npm ERR! npm  v3.10.9<br/>
				npm ERR! code ENOSELF<br/>

				npm ERR! Refusing to install webpack as a dependency of itself<br/>
				npm ERR!<br/>
				npm ERR! If you need help, you may report this error at:<br/>
				npm ERR!     https://github.com/npm/npm/issues<br/>
				npm ERR!  Please include the following file with any support request:<br/>
				npm ERR!     H:\tmp\webpack\npm-debug.log<br/>
				
				<br/>
				后来发现是在创建测试文件夹时取名为webpack,在用npm init 时用的是默认选项，所以在package.json里面的name也为webpack，
				换个名字即可解决。

				</div>
			</div>
		)
	}
});
//总的评论组件
var Comment=React.createClass({
	getInitialState:function(){		
		return {author:' ',comms:' ',id:''}
	},
	handleName:function(e){
		this.setState({author:e.target.value});
	},
	handleText:function(e){
		this.setState({comms:e.target.value});
	},
	handleForm:function(e){
		e.preventDefault();
		// 处理评论的数据
		var tmp_author=this.state.author.trim();
		          var tmp_comms=this.state.comms.trim();
			          if(!tmp_author || !tmp_comms){
			            return
		          };
		          var obj={id:new Date(),author:this.state.author,comms:this.state.comms}
		          this.props.updataCommentList(obj);
		          this.setState({author:'',comms:''});
	},
	render:function(){
		return(
			<div className="comment">
				<form onSubmit={this.handleForm}>
					<input type="text" className="commentAuthor" value={this.state.author} onChange={this.handleName} />
					<textarea  className="commentInput"  rows="10" value={this.state.comms}  onChange={this.handleText} />
					<button type="submit">发表</button>
				</form>
			</div>
		)
	}
})





 ReactDOM.render(
        <Container data={data}/>,
        document.getElementById('context')
 );