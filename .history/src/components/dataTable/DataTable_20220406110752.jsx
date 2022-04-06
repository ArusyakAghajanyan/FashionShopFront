import { Table, Icon } from "semantic-ui-react";

function DataTable({list}){
  console.log(list)
    return(
        <Table celled> 
                 
            <Table.Body>
            {
          list.map(item => {            
            <Table.Row>
            <Table.Cell><img src = item.product.image[0]"/ ></Table.Cell>
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