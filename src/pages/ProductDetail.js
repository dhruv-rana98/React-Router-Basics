import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId); //params.keyName //Keyname is passed with the route as dynamic value;
  return (
    <section>
      <h1> Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
