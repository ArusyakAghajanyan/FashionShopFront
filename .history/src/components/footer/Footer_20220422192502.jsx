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
                  <List.Item href="https://www.facebook.com/" as='a'>
                    <Icon name='facebook' />
                  </List.Item>
                  <List.Item href="https://www.linkedin.com/in/narek-tom/" as='a'>
                    <Icon name='linkedin' />
                    </List.Item>
                  <List.Item href="https://github.com/NarekTovmasyan" as='a'>
                    <Icon name='github' />
                    </List.Item>
                  <List.Item as='a'><Icon name='phone' />+374 94 27 67 00</List.Item>
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
