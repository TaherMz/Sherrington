import React from 'react'
import './productsList.css'
import ProductCard from './productCard'
import dataItems from './dateItems'
import Search from './search'


class ProductsList extends React.Component {
    constructor (){
        super()
        this.state={
            itemsToDisplay:dataItems,
            filter:''
        }


    }
    changeFilter=(e)=>{
        this.setState({
            filter:e
        })
    }
    handleFilter(arr){
        return (arr.filter(el => el.title.toUpperCase().includes (this.state.filter.toUpperCase())))
    }
    render(){

    return (
     <section className="items-list-container"> 


     
          <Search filterSearch={this.state.filter} changeFilter={this.changeFilter}/>  
                
            <div className="items-list">
            
                { this.handleFilter(this.state.itemsToDisplay).map( el => <ProductCard  item={el} key={el.id} /> )

                        
                 }

             </div>
        
     </section>  
    )}
}


export default ProductsList