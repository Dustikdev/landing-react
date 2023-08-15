import React from 'react';
import './HomePage.scss';
import { PresentationSection } from './components/PresentationSection/PresentationSection';
import { MenuSection } from './components/MenuSection/MenuSection';
import { EventTouristSection } from './components/EventTouristSection/EventTouristSection';

export const HomePage = () => {
  return (
    <>
    <PresentationSection/>
    <MenuSection/>
    <EventTouristSection/>
    </>

  )
}
