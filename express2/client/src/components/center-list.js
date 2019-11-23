import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const Center = props => (
  <tr>
    <td>{props.center.username}</td>
    <td>{props.center.description}</td>
    <td>{props.center.duration}</td>
    <td>{props.center.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.center._id}>edit</Link> ||
       <a href="#l" onClick={() => { props.deleteCenter(props.center._id) }}>delete</a>
    </td>
  </tr>
)

export default class CenterList extends Component {
    constructor(props) {
      super(props);
      this.deleteCenter = this.deleteCenter.bind(this);
      this.state = {center :[]}
    }
  componentDidMount(){
    axios.get('http://localhost:5000/user/')
    .then(response => { 
        this.setState({center: response.data})
        
    })
    .catch((error) => {
      console.log(error);
    }) 
  }  
  deleteCenter(id) {
    axios.delete('http://localhost:5000/centar/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      centars: this.state.centars.filter(el => el._id !== id)
    })
  }
  centerList() {
    return this.state.centars.map(currentcenter => {
      return <Center center={currentcenter}
                     deleteCenter={this.deleteCenter} 
                     key={currentcenter._id}/>;
    })
  }
  render() {
    return (
      <div>
      <h3>Logged centars</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { this.centerList() }
        </tbody>
      </table>
    </div>
    );
  }
}