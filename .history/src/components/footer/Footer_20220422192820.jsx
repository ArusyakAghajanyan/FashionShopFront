import { Container, Grid, Header, Icon, Segment,List } from "semantic-ui-react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Home" />
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Products" />
              </Grid.Column>

              {/* <Grid.Column width={3}>
                <Header as="h4" inverted>
                  <Icon name="facebook" />
                  <Icon name="instagram" />
                  <Icon name="twitter square" />
                </Header>
              </Grid.Column> */}
<Grid.Column width={4}>
                <Header inverted as='h4' content='Contacts' />
                <List link inverted>
               
                  <List.Item href="https://www.linkedin.com/in/arusyak-aghajanyan/" as='a'>
                    <Icon name='linkedin' />
                    </List.Item>
                  <List.Item href="https://github.com/ArusyakAghajanyan" as='a'>
                    <Icon name='github' />
                    </List.Item>
                  <List.Item as='a'><Icon name='phone' />+374 91 </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Icon name="phone square" />
                +374 91 348 598
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
