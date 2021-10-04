import React, { Component } from 'react'

 class UpdateForm extends Component {
    render() {
        return (
            <div>
                      <form onSubmit={this.props.submitUpdate}>
                    <input onChange={this.props.updatePriceState} type="text" value={this.props.flowerPrice} />
                    <input type="submit" value="Update Data" />
                   
                    
                </form>
            </div>
        )
    }
}

export default UpdateForm
