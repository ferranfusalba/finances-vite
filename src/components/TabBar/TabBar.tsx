import { ReactNode } from "react";
import styled from "styled-components";
import {
  Home,
  TableBuilt,
  Currency,
  ChartLineData,
  Settings,
} from "@carbon/icons-react";

export const StyledTabBar = styled.nav`
  // background-color: var(--primary);
  background-color: navy;
  height: 3.75rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    padding: 0;
    margin: 0;
    height: 100%;
    align-items: center;
    list-style-type: none;
    /* a {
      text-decoration: none;
      height: 100%;
      -webkit-tap-highlight-color: transparent; */
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.375rem;
        color: white;
        font-size: 0.75rem;
        font-weight: 500;
      }
    // }
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
    // <Link to={link}>
    <li>
      {children}
      {sectionTitle}
    </li>
    // </Link>
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
