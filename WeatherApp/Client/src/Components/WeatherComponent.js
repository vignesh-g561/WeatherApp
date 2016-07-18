var React = require('react');
var Content = React.createClass({
    getInitialState : function() {
      return({data:[],imdbobj:{},temp:[],dbObj:[]})
    },
    componentDidMount :function(){
         $.ajax({
               url : "http://localhost:8080/api/movies/render",
               dataType : 'json',
               type : "GET",
               cache : false,
               success : function(data){
                 this.setState({dbObj:data})
                 console.log(JSON.stringify(data));
               }.bind(this),
               error : function(xhr, status, err) {
               console.error("http://localhost:8080/api/movies/render", status, err.toString());
               }.bind(this)
             });
       },

    render : function () {
      return(
        <div>
          <div className="col-12 panel">
            
          </div>

        </div>
      );
    }
});

module.exports = Content ;
