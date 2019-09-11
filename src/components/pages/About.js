import React from 'react';
import PageContent from '../PageContent';

const About = () => (
  <PageContent narrow width="narrow">
    {/* <div className="about page-content" style={{ alignSelf: 'center', maxWidth: '33rem' }}> */}
    <h1>About this Site</h1>
    <p>Version V0.2</p>
    <p>
      Just a personal project gathering vehicle positions from several (~45)
      mobility service providers using the Multicyles Api
    </p>
    {/* </div> */}
  </PageContent>
);

export default About;
