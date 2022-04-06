import { Table, Icon } from "semantic-ui-react";
import productImg from "../../img/img1.jpg"

function DataTable({list}){
  console.log(list)
    return(
        <Table celled> 
                 
            <Table.Body>
            {
          list.map(item => {            
            <Table.Row>
            <Table.Cell><img src = {item.product.img[0]?.imagePath ? productImg }/ ></Table.Cell>
            <Table.Cell>Pending</Table.Cell>
            <Table.Cell negative>Notes</Table.Cell>
          </Table.Row>
          })
        } 
            </Table.Body>
          </Table>
    )
}

export default DataTable;