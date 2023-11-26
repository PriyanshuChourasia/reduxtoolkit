import { useFetchProductByidQuery,useFetchAllProductsQuery } from "./features/dogsapi/dogs-api-Slice";


const Product = () =>{

    // const { data, isFetching } = useFetchAllProductsQuery();
    const {data, isError, isLoading} = useFetchProductByidQuery(3);
    // console.log(data);

  

    if(isLoading)
    {
        return <p>Loading...</p>
    }
    if(isError)
    {
        return null
    }

    if(!data)
    {
        return null;
    }

 
    return(
        <>
        <h1>Product</h1>
       

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {/* {
                data.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                    </tr>
                ))
               
            } */}

            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.price}</td>
            </tr>
              
            </tbody>
        </table>

        </>
    )
}


export default Product;