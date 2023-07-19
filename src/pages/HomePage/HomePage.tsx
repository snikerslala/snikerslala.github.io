import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import { StyledStepsSpace, StyledStepsTypographyText } from './Home.styles';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import paths from '../../routes/paths';

function HomePage() {
  const { lg } = useBreakpoint();

  return (
    <Space direction="vertical" size="middle">
      <Typography.Title level={2}>
        Welcome on my portfolio page!
      </Typography.Title>
      <Typography.Title>Hello! I'm Martyna, React developer</Typography.Title>
      <Space direction="vertical">
        <Typography.Text>
          I made this page so that you can get to know me a little bit.{' '}
        </Typography.Text>
        <StyledStepsSpace align="start" wrap size={lg ? 48 : 16}>
          <StyledStepsTypographyText>
            I encourage you to take a look at a few information{' '}
            <Link to={paths.about}>about me</Link> first. You will find out who
            I am, why I code and what I do when it's not the coding-time.
          </StyledStepsTypographyText>
          <StyledStepsTypographyText>
            Then check out some of my{' '}
            <Link to={paths.projectsPaths.base}>projects</Link> build with
            different tech stack. It will give you an overview of some of my
            skills.
          </StyledStepsTypographyText>
          <StyledStepsTypographyText>
            I left also a few options for you to{' '}
            <Link to={paths.contactMe}>contact me</Link>. Feel free to use them
            to let me know you would like to cooperate with me, have a question
            or tell me something nice.
          </StyledStepsTypographyText>
        </StyledStepsSpace>
      </Space>
    </Space>
  );
}

export default HomePage;
