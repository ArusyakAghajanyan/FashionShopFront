import { Table, Icon } from "semantic-ui-react";
import productImg from "../../img/img1.jpg";
import {List} from "semantic-ui-react"
import "./DataTable.css"

function DataTable({list}){
  console.log(list)
    return(
      <List divided verticalAlign='middle'>
            {
          list.map(item => {     
            <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>Lena</List.Content>
    </List.Item>       
            <Table.Row>
            <Table.Cell><img className="product-icon" src = {item.product.img[0]?.imagePath || productImg }/ ></Table.Cell>
            <Table.Cell>Pending</Table.Cell>
            <Table.Cell negative>Notes</Table.Cell>
          </Table.Row>
          })
        } 
          </ List>
    )
}

export default DataTable;