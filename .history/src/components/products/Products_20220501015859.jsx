import Cards from "../card/Cards";
import useResponseInfo from "../customHook/useResponseInfo";

function Products() {
  let countPageProduct = 4;
  return (
    <div className="home ui container">
      <Cards pageDevider={countPageProduct} />
    </div>
  );
}

export default Products;