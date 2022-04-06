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