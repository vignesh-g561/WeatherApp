var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Master = require('./Components/Master');
var WeatherReport = require('./Components/WeatherReport');
var DataComponent= require('./Components/DataComponent');
module.exports = (
<Route>
  <Route handler={Master}>
  <DefaultRoute handler={WeatherReport} name="WeatherReport" />
</Route>
<Route handler={DataComponent} name="DataComponent" path="/DataComponent/id"/>
</Route>
);
