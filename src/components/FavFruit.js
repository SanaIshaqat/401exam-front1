import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavCards from './FavCards';
import UpdateForm from './UpdateForm';
import axios from 'axios';

class FavFruit extends React.Component {

  constructor(props){
    super(props);
    this.state={
  favDataApi:[],
  showFavData:false,
  url:process.env.REACT_APP_SERVER_URL,
  showFormData:false,
  slugName:'',
  flowerPrice:''

  
    }
  }
  
  componentDidMount=async()=>{
    const request=await axios.get(`${this.state.url}/get-fav`)
    this.setState({
      favDataApi:request.data,
  showFavData:true,
    })
  }
  handleDelete=async(slug)=>{
    await axios.delete(`${this.state.url}/delete-fav/${slug}`);
    const newFavDataApi=this.state.favDataApi.filter(obj=>obj.slug!==slug);
    this.setState({
      favDataApi:newFavDataApi
    })
  }
  handleShowForm=(price,slug)=>{
    this.setState({
      flowerPrice:price,
      slugName:slug,
      showFormData:true
    })
  }
   
  submitUpdate=async()=>{
    const request=await axios.put(`${this.state.url}/update-fav/${this.state.slugName}`,{flowerPrice:this.state.flowerPrice});
    this.setState({
      favDataApi:request.data,
    })
    
  }
  updatePriceState=(e)=>this.setState({
    flowerPrice:e.target.value
  })

  render() {
    return(
      <>
     {
                        this.state.showFormData&&
                        <UpdateForm showFormData={this.state.showFormData} 
                        updatePriceState={this.updatePriceState}                        
                        submitUpdate={this.submitUpdate} 
                        flowerPrice={this.state.flowerPrice}
                        />
                    }
        {
          this.state.showFavData&&(<FavCards favDataApi={this.state.favDataApi} handleDelete={this.handleDelete} handleShowForm={this.handleShowForm}  />)
        }
      </>
    )
  }
}

export default FavFruit;
