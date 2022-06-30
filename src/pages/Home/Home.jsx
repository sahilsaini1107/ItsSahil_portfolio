import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Hero, Content, CTA } from './components';
import { BackToTop } from '../../common/components/UIElements';
import useHttpClient from '../../common/hooks/http-hook';

const Home = () => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `${process.env.REACT_APP_BACKEND_URL}/project/projects`
  //       );
  //       setProjects(responseData);
  //     } catch (err) {}
  //   };
  //   fetchData();
  // }, [sendRequest]);

  return (
    <React.Fragment>
      <Helmet>
        <title>its Sahil Saini</title>
        <meta
          name="description"
          content="Hi! I'm Sahil - a web developer, web designer and a passionate learner. I love to contribute to open source projects"
        />
        <meta property="og:title" content="Sahil Saini" />
        <meta
          property="og:description"
          content="Hi! I'm Sahil - a web developer, web designer and a passionate learner. I love to contribute to open source projects"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsSahil/Portfolio/its_Sahil_5zlx0DELg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652255362"
        />
        <meta property="twitter:title" content="Sahil Saini" />
        <meta
          property="twitter:description"
          content="Hi! I'm Sahil - a web developer, web designer and a passionate learner. I love to contribute to open source projects"
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsSahil/Portfolio/its_Sahil_5zlx0DELg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652255362"
        />
      </Helmet>
      <Hero />
      <Content projects={projects} isLoading={isLoading} error={error} />
      <CTA />
      <BackToTop />
    </React.Fragment>
  );
};

export default Home;
