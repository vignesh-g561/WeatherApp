var React = require('react');
var Link = require('react-router').Link;
var WeatherData = React.createClass({

render : function(){
var data=this.props.dbData;
console.log(data);
var cnames = this.props.cities;
var ref=this.props.mydata;
var cityRender = cnames.map(function (city) {
  var cities=[];
     for(var i=0;i<data.length;i++){
       if(data[i].name == city.name){
         console.log(data[i].name);
         cities.push(data[i]);
       }
     }
     console.log(cities.length);
     if(cities.length > 0){
       return(
         <div className="container">
           <div className="row panel ">
             <div className="col-md-8">
               <div  style={{"float":"left"}}>
                 <Link to={"/DataComponent/"+city.name}>{city.name}</Link>
                 <p> Min Temperature {cities[0].main.temp_min} Max Temperature {cities[0].main.temp_max} </p>
                 <p> Wind : {cities[0].wind.speed}</p>
               </div>
                 <button className="btn btn-primary" key={city} style={{"float":"right"}} onClick={(cities)=>ref(city.name)}>Refresh</button>
             </div>
           </div>
         </div>
       );
     }
     else{
       return(
         <div className="container">
         <div className="row panel ">
           <div className="col-md-8">
             <h3 style={{"float":"left"}}>{city}</h3>
             <button className="btn btn-primary" key={city} style={{"float":"right"}} onClick={(cities)=>ref(city.name)}>Refresh</button>
             </div>
           </div>
         </div>
       );
      }
});
  return (
    <span>{cityRender}</span>
  );
}
});
module.exports = WeatherData ;
