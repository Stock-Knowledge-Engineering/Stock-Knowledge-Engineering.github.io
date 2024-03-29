import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { baseUrl } from '../../docusaurus.config';



const FeatureList = [
  
  {
    title: 'Experiential Learning Technology That Students Love',
    Svg: require('../../static/img/body.svg').default,  
    description: (
      <>
      <p>
    Stock Knowledge brings innovation and education together to provide
    accesible experiential learning technology that students love.
    We make boring school lessons fun and interesting through Extended
    Reality, Gamification, and Adaptive Learning.
    </p>
    <p>
    Educator and physicist Anna Marie Benzon launched Stock Knowledge 
    to focus on how young learners could foster better appreciation 
    for their school subjects after realizing tha traditional methods 
    were not as engaging anymore in the age of internet.</p>
    <p>
    Stock Knowledge is proud to be part of the UNICEF Innovation Fund portfolio
    and supported by the Philippines' Department of Education.</p>
    
    <p>
      <center>
    <b>Stock Knowledge Open Source</b>
    </center>
   
     </p>
    <p>
    <center>
    Having an open solution in our business process, we make our technological
     progress faster and more effecient when a potential million
     developers from around the world would contribute to our project as oppose
     to having a tiny group of developers we have as a startup company.
     Your contribution will greatly help us build a more reliable, secure, cost-effecient, and flexible
     learning platform.
     </center>
    </p>
      </>
      

      
    ),


  }, 
  
  
  
  
  

 
  
];







function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--relative">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--justify padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="line">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
