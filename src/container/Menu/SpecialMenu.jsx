import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  // Restaurant location coordinates
  const latitude = 40.7128;
  const longitude = -74.006;

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Big Data Application Development</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((BigDataApplicationDevelopment, index) => (
              <MenuItem key={BigDataApplicationDevelopment.title + index} title={BigDataApplicationDevelopment.title} price={BigDataApplicationDevelopment.price} tags={BigDataApplicationDevelopment.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Data Analysis & Visualization</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((DataAnalysisandVisualization, index) => (
              <MenuItem key={DataAnalysisandVisualization.title + index} title={DataAnalysisandVisualization.title} price={DataAnalysisandVisualization.price} tags={DataAnalysisandVisualization.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>

      {/* Google Maps location */}
      <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
        <iframe
          title="locationMap"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&q=restaurant&center=${latitude},${longitude}&zoom=15`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SpecialMenu;
