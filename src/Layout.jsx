import { Outlet } from "react-router-dom";
import { AppShell, Burger, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { MantineLogo } from "@mantinex/mantine-logo";
import { NavLink } from "react-router-dom";
import { Container, Badge } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { rem } from '@mantine/core';

function Layout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <MantineLogo size={30} />
            <IconShoppingCart stroke={1.5} color="var(--mantine-color-blue-filled)" style={{ width: rem(30), height: rem(30) }} />
            <Group ml="xl" gap={0} visibleFrom="sm">
              <NavLink
                replace
                to="/dashboard"
                className={classes.control}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <UnstyledButton>แดชบอร์ด</UnstyledButton>
              </NavLink>
              <NavLink
                replace
                to="/profile"
                className={classes.control}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <UnstyledButton>โปรไฟล์</UnstyledButton>
              </NavLink>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <NavLink
          to="/dashboard"
          replace
          className={classes.control}
          onClick={toggle}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <UnstyledButton>แดชบอร์ด</UnstyledButton>
        </NavLink>
        <NavLink
          to="/profile"
          replace
          className={classes.control}
          onClick={toggle}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <UnstyledButton>โปรไฟล์</UnstyledButton>
        </NavLink>
      </AppShell.Navbar>

      <AppShell.Main>
        <Container fluid>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
