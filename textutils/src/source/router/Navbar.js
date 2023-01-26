import React from "react";
import PropTypes from "prop-types";
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "../icons/AcmeLogo.js";
import SwitchComponent from "../components/Switch.js";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const NavigationLinks = [
    {
      name: props.home,
      isActive: true,
      href: "/",
      index: Math.floor(Math.random() * 10),
    },
    {
      name: "News",
      isActive: false,
      href: "/newsApp",
      index: Math.floor(Math.random() * 10),
    },
    {
      name: "About",
      isActive: false,
      href: "/",
      index: Math.floor(Math.random() * 10),
    },
    {
      name: "Paper",
      isActive: false,
      href: "/",
      index: Math.floor(Math.random() * 10),
    },
    {
      name: "Forums",
      isActive: false,
      href: "/",
      index: Math.floor(Math.random() * 10),
    },
  ];

  return (
    <>
      <Layout>
        <Navbar
          isBordered
          style={{
            position: "fixed",
            left: 0,
            width: "100%",
            bottom: 0,
          }}
        >
          <Navbar.Toggle showIn="xs" />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          >
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
              {props.heading}
            </Text>
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="highlight-rounded"
          >
            {NavigationLinks.map(({item}) => {
              return (
                <>
                  <div key={item.index}>
                    <Link to={item.href} >
                      {item.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </Navbar.Content>
          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
          >
            <Dropdown placement="top-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="secondary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Content>
          <Navbar.Collapse
            style={{
              position: "fixed",
              top: 0,
              width: "100%",
              left: 0,
            }}
          >
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem
                key={item}
                activeColor="secondary"
                css={{
                  color: index === collapseItems.length - 1 ? "$error" : "",
                }}
                isActive={index === 2}
              >
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  to={"/"}
                >
                  {item}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </>
  );
};

NavbarComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};
NavbarComponent.defaultProps = {
  heading: "Pass heading here",
  home: "Pass links here",
};

export default NavbarComponent;
