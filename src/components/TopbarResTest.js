import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Menu,
  Button,
  Dropdown,
  Modal,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Document } from "react-pdf";
import file1 from "../pdf/izvodjenje.pdf";

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction="right"
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a" text="O meni" />
  </Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default class TopbarRes extends Component {
  state = {
    animation: "push",
    // direction: "left",
    dimmed: false,
    visible: false
  };

  handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible });

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked });

  handleDirectionChange = direction => () =>
    this.setState({ direction, visible: false });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { animation, dimmed, direction, visible } = this.state;
    const vertical = direction === "bottom" || direction === "top";

    const dropStyle = {
      // height: "30px",
      width: "380px",
      color: "black",
      margin: "5%"
    };

    const menuStyle = {
      width: "100%",
      position: "fixed",
      top: "0",
      backgroundColor: "#181818",
      zIndex: 1,
      borderRadius: 0,
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-around",
      maxHeight: "40px"
    };

    const menuButton = {
      backgroundColor: "white",
      color: "#181818",
      width: "50px",
      height: "30px",
      marginTop: "5%"
    };

    const dropButton = {
      backgroundColor: "#181818",
      color: "white",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    };

    const { activeItem } = this.state;

    return (
      <div>
        <div>
          <Menu style={menuStyle}>
            <div style={{ float: "left" }}>
              <Menu.Item
                as={Link}
                to="/"
                style={{
                  color: "white"
                }}
                onClick={this.handleItemClick}
              >
                MIŠKOVIĆ JELENA ARHITEKTA
              </Menu.Item>
            </div>
            <div>
              <Button
                icon="bars"
                onClick={this.handleAnimationChange("push")}
              />
            </div>
          </Menu>
        </div>
        <div>
          <Sidebar.Pushable
            // as={Segment}
            style={{
              height: "100vh",
              width: "100vw",
              position: "absolute"
            }}
          >
            {vertical ? null : (
              <VerticalSidebar
                animation={animation}
                direction={direction}
                visible={visible}
              />
            )}

            <Sidebar.Pusher dimmed={dimmed && visible}>
              {/* <Segment basic>
                <Header as="h3">Application Content</Header>
                <Image src="/images/wireframe/paragraph.png" />
              </Segment> */}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}
