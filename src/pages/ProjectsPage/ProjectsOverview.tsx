import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Space, Typography } from 'antd';
import Card from '../../components/shared/Card';

function ProjectsOverview() {
  const { sm } = useBreakpoint();

  return (
    <Space direction="vertical" size={sm ? 'large' : 'small'} align="center">
      <Typography.Title level={2}>
        Are you curious about my coding skills?
      </Typography.Title>
      <Card>
        <Space direction="vertical" size="middle">
          <Typography.Text>
            In this section, I would like to present a few projects to you.
          </Typography.Text>
          <Typography.Text>
            Some of them are older and are a result of my learning process from
            the time when I was working on becoming a front-end developer.
          </Typography.Text>
          <Typography.Text>
            The others are newer, created this year. I used in these projects
            the skills and technologies developed and learned in the last 3
            years while I was working as a front-end developer.
          </Typography.Text>
          <Typography.Text>
            Please go to Menu, navigate to the Projects submenu and choose which
            project would you like to view.
          </Typography.Text>
        </Space>
      </Card>
    </Space>
  );
}

export default ProjectsOverview;
