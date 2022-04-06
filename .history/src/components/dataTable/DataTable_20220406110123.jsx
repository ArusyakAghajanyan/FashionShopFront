import { Table, Icon } from "semantic-ui-react";

function DataTable({list}){
    return(
        <Table celled>
           
            <Table.Body>
              <Table.Row>
                <Table.Cell>Product1</Table.Cell>
                <Table.Cell>Pending</Table.Cell>
                <Table.Cell negative>Notes</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
    )
}

export default DataTable;