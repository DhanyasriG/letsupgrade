import Product from "./Product"

function Products(){
    return(
        <div className="Products">
            <Product name="jeans" price="500" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZFCZwo9Th3fpiMo_15FBkkLSCD-35S7X_g&usqp=CAU"></Product>
            <Product name="mobile" price="18000" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2XOgnGyIL_bH0gq1M-pcJIWUF3ZuE-23Uw&usqp=CAU"></Product>
            <Product name="laptop" price="45000" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnc7zzSnndj8-PfX8USijlbv7jUPNtgLlAg&usqp=CAU"></Product>
        </div>
    )
}

export default Products