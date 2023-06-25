import { ReactNode } from "react";
import styled from "styled-components";
import {
  Home,
  TableBuilt,
  Currency,
  ChartLineData,
  Settings,
} from "@carbon/icons-react";
import { Link } from "@tanstack/router";

export const StyledTabBar = styled.nav`
  background-color: #131313;
  height: 3.75rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  ul {
    display: grid;
    text-align: center;
    margin: 0;
    height: 100%;
    align-items: center;
    list-style-type: none;
    a,
    a > li {
      display: flex;
      align-items: center;
    }
    a {
      text-decoration: none;
      height: 100%;
      -webkit-tap-highlight-color: transparent;
      li {
        color: white;
        font-weight: 500;
      }
    }
  }
  @media screen and (min-width: 75rem) {
    ul {
      grid-template-columns: repeat(auto-fill, minmax(9.375rem, 1fr));
      padding: 0 0 0 1.625rem;
      a,
      a > li {
        flex-direction: row;
        gap: 0.75rem;
        justify-content: flex-start;
        font-size: 0.875rem;
      }
    }
  }
  @media screen and (max-width: 75rem) {
    ul {
      grid-template-columns: repeat(5, 1fr);
      padding: 0;
      a,
      a > li {
        flex-direction: column;
        gap: 0.375rem;
        justify-content: center;
        font-size: 0.75rem;
      }
    }
  }
`;

const TabBarSection = ({
  link,
  sectionTitle,
  children,
}: {
  link: string;
  sectionTitle: string;
  children: ReactNode;
}) => {
  return (
    <Link to={link}>
      <li>
        {children}
        {sectionTitle}
      </li>
    </Link>
  );
};

const TabBar = () => {
  return (
    <StyledTabBar>
      <ul>
        <TabBarSection link="/" sectionTitle="Home">
          <Home />
        </TabBarSection>
        <TabBarSection link="/budget" sectionTitle="Budget">
          <TableBuilt />
        </TabBarSection>
        <TabBarSection link="/accounts" sectionTitle="Accounts">
          <Currency />
        </TabBarSection>
        <TabBarSection link="/data" sectionTitle="Data">
          <ChartLineData />
        </TabBarSection>
        <TabBarSection link="/settings" sectionTitle="Settings">
          <Settings />
        </TabBarSection>
      </ul>
    </StyledTabBar>
  );
};

export default TabBar;
