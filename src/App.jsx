import React from 'react'
import "./App.css"
const App = () => {

  const [test,setTest] = React.useState([
    {
      title:"Electronics",
      active:false
    },
    {
      title:"Clothing",
      active:false
    },
    {
      title:"Electronics",
      active:true
    },
    {
      title:"Clothing",
      active:false
    },
  ])
  return (
    <div className="main">
         <div className="header-container">
             <div className="logo">
               <img src={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="logo"
                 style={{maxWidth:"100%",objectFit:"cover"}}
               />
             </div>
             <div className="header-right">
                <h3>Waseem</h3>
                <h3>+91 6361378734</h3>
             </div>
          </div>  

          <div className="filter-cat">
              <h2>My Products</h2>
              <ul className="filter-list">
                  <li className="item-name">Product cost</li>
                  <li className="item-name">Product category</li>
                  <li className="item-name">Available quantity</li>
              </ul>
              <div className="logoContainer">
               <img src={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="logo"
                 style={{maxWidth:"100%",objectFit:"cover"}}
               />
             </div>

          </div>
          
          <ul className="category-list">
               {
test.map((item,i) => {
  return (
    <li className= {item.active ? "c-item-active" : "c-item"} key={i}>{item.title}</li>
  )
})
               }   
          </ul>

          <div className="product-list">
   
       {test.map((item,i) => {
  return (
      <div key={i} className="image-container">
           <img src={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"} 
           alt="product image"
            className="product-image"
           /> 
           <h4 style={{textAlign:"center"}}>Ear Phones</h4>
           <h4 style={{textAlign:"center"}}>$ 10.00</h4>
           <h4 style={{textAlign:"center"}}>Hp</h4>       
       </div> 
  )
})}

 </div>

    </div>
  )
}

export default App
