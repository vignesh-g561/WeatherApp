var React = require('react');
var Modal = React.createClass({
  var data = this.props.mydata;
  render : function() {
    return(
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div className="modal-body">
      <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  </div>
</div>
    );
  }
})
module.exports = Modal ;
