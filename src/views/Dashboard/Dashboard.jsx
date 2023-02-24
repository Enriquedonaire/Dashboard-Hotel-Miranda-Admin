import React from "react";

import InsightsCards from "../../components/InsightsCards/InsightsCards";
import MainContainer from "../../components/MainContainer/MainContainer";

import {
  InsightsCardsContainer,
  ReviewsContainer,
  GeneralInsights
} from "./DashboardStyled";

import { BiBed } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import ReviewsSlider from "../../components/Reviews/Reviews_slider";

const Dashboard = () => {


  return (
    <>
      <MainContainer>
          <InsightsCardsContainer>
            <InsightsCards icon={<BiBed style={{width:'50', height: '50'}}/>}  number='8,461' title='New Booking'/>
            <InsightsCards icon={<AiOutlineCalendar style={{width:'50', height: '50'}}/>} number='963' title='Scheduled Room'/>
            <InsightsCards icon={<IoMdExit style={{width:'50', height: '50'}} />} number='753' title='Check In'/>
            <InsightsCards icon={<BiLogOut style={{width:'50', height: '50'}} />} number='516' title='Check Out'/>
          </InsightsCardsContainer>
          <GeneralInsights>
          </GeneralInsights>
          <ReviewsContainer>
            <ReviewsSlider />
          </ReviewsContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;