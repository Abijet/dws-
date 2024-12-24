import React, { useState } from "react";

const Inventory = () => {
    const [search, setSearch] = useState('')

    const [id, setId] = useState('')
    const [id2, setId2] = useState([])

    const [product, setProduct] = useState('')
    const [product2, setProduct2] = useState([])

    const [quantity, setQuantity] = useState('')
    const [quantity2, setQuantity2] = useState([])
  

    const filteredIds = id2.filter((value) => {
        return value.includes(search);
      });

      let handelButton = ()=>{
        if (id2.includes(id)) {
          alert("This id already exist choose new one")
          setId('')
        }else{
        setId2([...id2, id]);
         setProduct2([...product2, product]);
         setQuantity2([...quantity2, quantity]);
         setId('')
        }
      }
  return (
    <div>
        <input style={{margin: "1rem"}} type="text"placeholder="search" value={search} onChange={e=>{setSearch(e.target.value)}} /><br></br>
        <br />
        <br/>
    
        <div className="input-field" style={{margin: "1rem"}}>
            <input type="text" placeholder="id" value={id} onChange={e=>{setId(e.target.value)}}/>
            <input type="text" placeholder="product" value={product} onChange={e=>{setProduct(e.target.value)}}/>
            <input type="text" placeholder="quantity" value={quantity} onChange={e=>{setQuantity(e.target.value)}}/>
            <button style={{margin: "1rem"}} onClick={()=>{handelButton()}}>Submit</button>
        </div>
       

      <div className="table-field">
        <table style={{border: "1px solid black", marginLeft: "10rem"}}>
          <tr >
            <th style={{border: "1px solid black"}}>Id</th>
            <th style={{border: "1px solid black"}}>Product</th>
            <th style={{border: "1px solid black"}}>Quantity</th>
          </tr>

          {filteredIds.map((value, i) => (
            <tr key={i}>
              <td style={{border: "1px solid black"}}>{value}</td>
              <td style={{border: "1px solid black"}}>{product2[i]}</td>
              <td style={{border: "1px solid black"}}>{quantity2[i]}</td>
            </tr>
          ))}
        </table>
      </div>

      
    </div>
  );
};

export default Inventory;
