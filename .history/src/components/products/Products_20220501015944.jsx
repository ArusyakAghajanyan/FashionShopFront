import Cards from "../card/Cards";
import useResponseInfo from "../customHook/useResponseInfo";

function Products() {
  const [MessageComp, setResponseInfo] = useResponseInfo();
  let countPageProduct = 4;
  return (
    <div className="home ui container">
       <MessageComp />
      <Cards pageDevider={countPageProduct} />
        setResponseInfo={setResponseInfo}
    </div>
  );
}

export default Products;
