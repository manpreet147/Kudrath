function ProductName({product}){
    const[quantity, setQuantity] = useState(1);
    return(
        <div className = "product-card">
            <img src={product.image_url} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {
                product.quantity > 0 ?
                (
                    <>
                    <p>In Stock{product.quantity}</p>
                    <input type="number" min="1" max={product.quantity} value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                    <button>Add To Cart</button>
                    </>
                )
            }
        </div>
    )
}