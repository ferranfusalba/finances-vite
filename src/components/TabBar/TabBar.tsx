// React
import { ReactNode } from "react";

// Routes
import { router } from "@/router/router";

// Dependencies > Carbon Icons
import {
  Home,
  TableBuilt,
  Currency,
  ChartLineData,
  Settings,
} from "@carbon/icons-react";

// Domain
import { StyledTabBar } from "./StyledTabBar";

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
    <router.Link to={link}>
      <li>
        {children}
        {sectionTitle}
      </li>
    </router.Link>
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
