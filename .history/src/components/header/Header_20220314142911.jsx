import { Menu } from "semantic-ui-react";

function Header() {
  return(
         <div>
        <Menu inverted>
          <Menu.Item name="home" active={true} />
          <Menu.Item name="products" active={false} />
          <Menu.Item name="friends" active={false} />
          <Menu.Menu position="right">
            <Menu.Item name="log in" active={false} />
          </Menu.Menu>
        </Menu>

      </div>
)}

export default Header;