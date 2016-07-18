var React = require('react');
var WeatherData = require('./WeatherData');

var WeatherReport = React.createClass({
  getInitialState : function() {
    return ({dObj:{},wData:[],cityNames :[{"name":'Bangalore'},{"name":'Chennai'},{"name":'Vijayawada'},{"name":'Hyderabad'},{"name":'Delhi'},{"name":'Kolkata'}]});
  },

  addData:function(city){
    console.log(city);
    var my_url = "http://api.openweathermap.org/data/2.5/weather/?q="+city+'&APPID=651461505bc14e4059cfe70cac957db3'
    $.ajax({
          url: my_url,
          dataType: 'json',
          cache: false,
          success: function(data) {
            var WeatherData = this.state.wData;
            WeatherData.push(data);
            this.setState({wData:WeatherData})
            $.ajax({
              url: "http://localhost:8080/api/cities/add",
              dataType: 'json',
              type: 'POST',
              data: data,
              success: function(data) {
                console.log('saved');
              }.bind(this),
              error: function(xhr, status, err) {
                console.error("http://localhost:8080/api/cities/add", status, err.toString());
              }.bind(this)
        });
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(my_url, status, err.toString());
          }.bind(this)
        });

  },
  componentDidMount :function(){
         $.ajax({
               url : "http://localhost:8080/api/cities/render",
               dataType : 'json',
               type : "GET",
               cache : false,
               success : function(data){
                 this.setState({wData:data})
                 //console.log(wData);
               }.bind(this),
               error : function(xhr, status, err) {
               console.error("http://localhost:8080/api/cities/render", status, err.toString());
               }.bind(this)
             });
       },
  render:function(){
    var data = this.state.cityNames;
    var tData = this.state.wData;
    var city = this.state.dObj
    var wind = city.wind;
    console.log(JSON.stringify(city));
    return (
      <div>
        <WeatherData cities={data} dbData={tData} mydata={this.addData}/>
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">{city.name}</h4>
              </div>
              <div className="modal-body">
              <table className="table">
              <tr>
                <td>COD</td>
                <td>{city.cod}</td>
              </tr>
            </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherReport ;
