import React from "react";
import styled from "styled-components";
import PunchLists from "../svg/punch_lists.svg";
import Tasks from "../svg/tasks.svg";
import Documents from "../svg/documents.svg";
import RFI from "../svg/rfi.svg";
import Drawings from "../svg/drawings.svg";
import ChangeOrders from "../svg/change_orders.svg";
import DailyReports from "../svg/daily_reports.svg";
import Equipment from "../svg/equipment.svg";
import Timecards from "../svg/timecards.svg";
import PurchaseOrders from "../svg/purchase_orders.svg";
import PhotoManagement from "../svg/photo_management.svg";
import SafetyIcon from "../svg/safety.svg";
import Integrations from "../svg/integrations.svg";

const ProjectList = [
  {
    title: "Tasks",
    Icon: Tasks
  },
  {
    title: "Punch Lists",
    Icon: PunchLists
  },
  {
    title: "Documents",
    Icon: Documents
  },
  {
    title: "RFIs",
    Icon: RFI
  },
  {
    title: "Drawings",
    Icon: Drawings
  },
  {
    title: "Change Orders",
    Icon: ChangeOrders
  }
];

const FieldList = [
  { title: "Daily Reports", Icon: DailyReports },
  { title: "Equipment", Icon: Equipment },
  { title: "Timecards", Icon: Timecards },
  { title: "Purchase Orders", Icon: PurchaseOrders },
  { title: "Photo Management", Icon: PhotoManagement }
];

const FeatureDropdown = () => {
  return (
    <Wrapper id="section-product">
      <h1>Feature overview</h1>

      <Flex>
        <Project>
          <h4>Project Management</h4>
          <Cards>
            {ProjectList.map(({ title, Icon }, i) => (
              <Card key={i}>
                <Icon />
                <p>{title}</p>
              </Card>
            ))}
          </Cards>
        </Project>

        <Field>
          <h4>Field Management</h4>
          <Cards>
            {FieldList.map(({ title, Icon }, i) => (
              <Card key={i}>
                <Icon />
                <p>{title}</p>
              </Card>
            ))}
          </Cards>
        </Field>

        <Safety>
          <h4>Safety Management</h4>
          <Cards>
            <Card>
              <SafetyIcon />
              <p>Safety</p>
            </Card>
          </Cards>

          <h4>Other Features</h4>
          <Cards>
            <Card>
              <Integrations />
              <p>Integrations</p>
            </Card>
          </Cards>
        </Safety>
      </Flex>
    </Wrapper>
  );
};

export default FeatureDropdown;

const Wrapper = styled.div`
  display: none;
  border-radius: 6px;
  padding: 20px 30px;
  z-index: 999;

  h1 {
    margin-top: 0;
    font-size: 32px;
    font-family: "Airbnb Cereal App bolder";
  }

  @media (min-width: 1200px) {
    position: absolute;
    background: #f4f4f4;
    width: 1200px;
    left: 0;
    top: 60px;
    transform: translateX(-480px);
    box-shadow: 0 18px 25px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Flex = styled.div`
  display: grid;
  border-bottom: 1px solid #979797;
  grid-template-columns: 1fr;
  color: #08172b;
  grid-gap: 30px;
  padding-bottom: 30px;

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 2fr 1fr;
    grid-gap: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Project = styled.div`
  padding-left: 0;
  > h4 {
    margin: 0 0 10px;
    font-weight: normal;
  }

  @media (min-width: 1200px) {
    padding: 0 40px 0 0;
    border-right: 1px solid #d8d8d8;
  }
`;

const Field = styled(Project)`
  @media (min-width: 1200px) {
    padding-left: 40px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  align-items: center;
  > p {
    margin: 0;
    margin-left: 8px;
  }

  @media (max-width: 1200px) {
    background: #f4f4f4;
  }

  &:hover {
    color: ${({ theme }) => theme.color.p};
    background: #08172b;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    path {
      fill: ${({ theme }) => theme.color.p};
    }
  }
`;

const Safety = styled(Project)`
  border-right: none;

  ${Cards} {
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding-left: 40px;
  }
`;
