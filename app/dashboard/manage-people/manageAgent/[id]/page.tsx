"use client"

import React, { useEffect, useState, useRef } from 'react'
import styles from "./manageAgent.module.scss"
import Navbar from '@/component/navbar/page'
import { agent } from "@/utils/manageAgentData"
import AdminCard from '@/component/adminCard/page'
import Header from '@/component/header/page'
import Title from '@/component/title/page'
import AreaChartComponent from '@/component/areaChart/page'
import TableComponent from '@/component/table/page'
import Chart from '@/component/areaChartVisx/page'
import styled from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

interface Agent {
  id: string;
  name: string;
  idNum: number;
  DOB: string;
  phone: string;
  referrals: number;
  thumbnail: any;
  earning: string;
}

const Background = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const Container = styled.div`
  position: relative;
  background-color: #80FF0014;
  width: 100%;
  height: 400px;
  border-radius: 40px;
  overflow: hidden;
`;

const ManageAgentID = ({ params }: { params: { id: string } }) => {
  const [agents, setAgents] = useState<Agent | null>(null);

  useEffect(() => {
    const selected = agent.find((item) => item.id === params.id)
    console.log(selected);

    if (selected) {
      setAgents(selected)
    } else {
      setAgents(null)
    }

  }, [params.id])

  return (
    <div className={styles["manage-agent"]}>
      <Navbar icon="arrow" icons="notification" defaultImage="vector" />
      <div className={styles["manage-agent-right"]}>
        <Header
          right="approve"
          marginTop="mt-4rem"
          text="Manage Agents > Agent Profile"
          small="View all agents and perform various actions"
        />
        <div className={styles["manage-agent-right-agentpro"]}>
          <AdminCard
            src={agents?.thumbnail}
            typeText="Activated"
            typeColor="green"
            iconTrash="frame"
            title={agents?.name}
            text={agents?.id}
          />
          <div className={styles["manage-agent-right-agentpro-details"]}>
            <div className={styles["manage-agent-right-agentpro-details-top"]}>
              <div className={styles["manage-agent-right-agentpro-details-top-detail"]}>
                <small>Full Name</small>
                <p>{agents?.name}</p>
              </div>
              <div className={styles["manage-agent-right-agentpro-details-top-detail"]}>
                <small>Identification Number</small>
                <p>{agents?.idNum}</p>
              </div>
              <div className={styles["manage-agent-right-agentpro-details-top-detail"]}>
                <small>Earning</small>
                <p>{agents?.earning}.<span>00</span></p>
              </div>
            </div>
            <div className={styles["manage-agent-right-agentpro-details-bottom"]}>
              <div className={styles["manage-agent-right-agentpro-details-bottom-detail"]}>
                <small>Date Of Birth</small>
                <p>{agents?.DOB}</p>
              </div>
              <div className={styles["manage-agent-right-agentpro-details-bottom-detail"]}>
                <small>Phone Number</small>
                <p>{agents?.phone}</p>
              </div>
              <div className={styles["manage-agent-right-agentpro-details-bottom-detail"]}>
                <small>Referrals</small>
                <p>{agents?.referrals}</p>
              </div>
            </div>
          </div>
        </div>
        <Title text="Referral Deals" top="4rem" />
        <div className={styles["manage-agent-right-table"]}>
          <TableComponent />
        </div>
        <div className={styles["manage-agent-right-chart"]}>
          <div className={styles["manage-agent-right-chart-info"]}>
            <h1>Performance History</h1>
            <h2>91.54%</h2>
          </div>
          <div>
            {/* <AreaChartComponent /> */}
            <QueryClientProvider client={queryClient}>
              <Background>
                <Container>
                  <Chart />
                </Container>
              </Background>
            </QueryClientProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageAgentID