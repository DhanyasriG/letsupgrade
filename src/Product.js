function Product(props){
    return(
        <div className="Product">
            <img className="img1" src={props.url}></img>
            <h3>{props.name}</h3>
            <p>{props.price}Rs</p>
        </div>
    )
}

export default Product;