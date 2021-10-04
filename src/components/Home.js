import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ApiCards from'./ApiCards';

class Home extends React.Component {
constructor(props){
  super(props);
  this.state={
dataApi:[],
showData:false,
url:process.env.REACT_APP_SERVER_URL

  }
}

componentDidMount=async()=>{
  const request=await axios.get(`${this.state.url}/get-flowers`)
  this.setState({
    dataApi:request.data,
showData:true,
  })
}
createFav=async(obj)=>{
  axios.post(`${this.state.url}/create-fav`,obj)
}


  render() {
    return (
      <>
        {
          this.state.showData&&(<ApiCards dataApi={this.state.dataApi} createFav={this.createFav} />)
        }
      </>
    )
  }
}

export default Home;
