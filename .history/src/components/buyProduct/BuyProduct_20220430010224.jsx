import React, { useEffect, useState } from "react";
import { Button, Header, Image, Modal, Segment } from "semantic-ui-react";
import BuyForm from "./BuyForm";
import "./BuyProduct.css";
import { confirmOrder } from "../../services/api";
import { useAuth0 } from "@auth0/auth0-react";
// import { getOrders } from "../../Services/api";
import { getOrders } from '../../services'

function BuyProduct({ productInfo, item, setResponseInfo , stock }) {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently} = useAuth0();

  const { description, image, name, price, currency  } = productInfo;
  const [open, setOpen] = useState(false);
  const inintFormData = { address: "", phone: "", paymentMethod: "cash" };
  const [options, setOptions] = useState(inintFormData);
  const [disable, setDisable] = useState(true);

  async function confirmAction() {
    try {
      const token = await getAccessTokenSilently();
      const userObj = {
        id: user.sub,
        email: user.email,
        name: user.name,
        picture: user.picture,
      };
      const orderStatus = await confirmOrder(userObj, item, token, options);
      console.log(orderStatus);
      const getOrderName = await getOrders(userObj.id, token);
      const prodName = getOrderName.filter(
        (item) => item.id == orderStatus.info.OrderId
      );
      setResponseInfo(`You buy the product ${prodName[0].product.name}`);
    
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (open === false) {
      resetOptions();
    }
    console.log("disable", disable);
    let status = false;
    for (let key in options) {
      if (!options[key] && key !== "paymentMethod") {
        status = true;
      }
    }

    setDisable(status);
  }, [options, open]);
  function resetOptions() {
    for (let key in options) {
      if (key != "paymentMethod") {
        options[key] = "";
      }
    }
  }

  function changeOptions(prop) {
    setOptions({ ...options, ...prop });
  }
console.log("image", image)
  return (
    <Modal
      className="custom-modal"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className="buyButton" floated="right" disabled={stock<1?true:false}>
          BUY
        </Button>
      }
    >
      <Modal.Content image>
        <Image
          size="medium"
          src={
            image.imagePath ||
            "https://react.semantic-ui.com/images/avatar/large/rachel.png"
          }
          
          wrapped
        />
       

        <Modal.Description>
          <Header>{name}</Header>
          <p>{description}</p>
          <p>{price + "AMD"}</p>
        </Modal.Description>
        
        <BuyForm userName={user.name} changeOptions={changeOptions} />
     
      </Modal.Content>
      <Modal.Content>
          <BuyForm userName={user.name} changeOptions={changeOptions} />
          </Modal.Content>

     
      <Modal.Actions>
        <Segment>
          <Segment.Inline>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
              content="Confirm"
              disabled={disable}
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                setOpen(false);
                setDisable(true);
                confirmAction();
              }}
              positive
            />
          </Segment.Inline>
        </Segment>
      </Modal.Actions>
    </Modal>
  );
}
export default BuyProduct;
