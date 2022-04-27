import { Card, Image, Button } from "semantic-ui-react";
import "./cardItem.css";
import BuyProduct from "../buyProduct/BuyProduct";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import productImg from "../../img/img1.jpg";

function CardItem({ description, image, name, price, item }) {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Card id="card" centered>
        <Image id="imageContainer" src={image?image.imagePath: productImg} wrapped ui={false} />
      <Card.Content id="cardContent">
        <Card.Header>{name}</Card.Header>
       
        <Card.Description>
       
          <h5>{description}</h5>
          </Card.Description>
      </Card.Content>

      <Card.Content extra className="buy-info">
        {price}
        {isAuthenticated ? (
          <BuyProduct
            item={item}
            productInfo={{ description, image, name, price }}
          />
        ) : (
          <Button as={Link} to="/login" id="buyButton"   floated="right">
            BUY
          </Button>
        )} 
        
      </Card.Content>
    </Card>
  );
}
 export default CardItem;
