import React from "react";
import {
  Form,
  Input,  
  Radio,
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const FormFieldError = ({ userName, changeOptions }) => {

  function handleChange(event) {
    
    changeOptions({ [event.target.name]: event.target.value });
    // },1200);
    // return ()=>clearTimeout(id);
  }
  return (
    <Form>
      {/* <Form.Group widths='equal'> */}
      <Form.Field
        id="form-input-control-full-name"
        control={Input}
        label="Full name"
        placeholder="Full name"
        value={userName}
        readOnly
      />
      <Form.Field
        id="form-input-control-address"
        control={Input}
        label="Address"
        placeholder="Address"
        name="address"
        onChange={(e) => {
          handleChange(e)
          // const idSetAdress =setTimeout(()=>{
            // handleChange(e);
          // },1200) ;
          // return ()=>clearTimeout(idSetAdress)
        }}
      />
      <Form.Field
        id="form-input-control-phone-number"
        control={Input}
        label="Phone number"
        placeholder="Phone number"
        name="phone"
        type = "number"
        onChange={(e) => {
          handleChange(e)
          // const idSetPhone =setTimeout(()=>{
            // handleChange(e);
          // },1200) ;
          // return ()=>clearTimeout(idSetPhone)
        }}
      />

      <Form.Field>
        <Radio
          label="Pay Buy Cash"
          name="paymentMethod"
          value="cash"
          checked={true}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </Form.Field>
      <Form.Field>
        <Radio label="Pay Buy Card" name="card" value="card" readOnly />
      </Form.Field>
      {/* </Form.Group> */}
    </Form>
  );
};

export default FormFieldError;
