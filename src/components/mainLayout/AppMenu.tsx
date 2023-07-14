import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  ContactsOutlined,
  HomeOutlined,
  ProjectOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import paths from '../../routes/paths';

type MenuItem = Required<MenuProps>['items'][number];

function AppMenu() {
  const projectItems: MenuItem[] = [
    {
      label: <Link to={paths.projectsPaths.base}>Overview</Link>,
      key: '11',
    },
    {
      label: (
        <Link to={paths.projectsPaths.previousPortfolio}>
          Previous Portfolio
        </Link>
      ),
      key: '12',
    },
    {
      label: 'New Projects',
      key: 'sub2',
      children: [
        {
          label: (
            <Link to={paths.projectsPaths.newProjectsOverview}>Overview</Link>
          ),
          key: '21',
        },
        {
          label: <Link to={paths.projectsPaths.budget}>Budget</Link>,
          key: '22',
        },
      ],
    },
  ];

  const items: MenuItem[] = [
    {
      label: <Link to={paths.home}>Welcome</Link>,
      key: '1',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={paths.about}>About me</Link>,
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: 'Projects',
      key: 'sub1',
      icon: <ProjectOutlined />,
      children: projectItems,
    },
    {
      label: <Link to={paths.contactMe}>Contact me</Link>,
      key: '3',
      icon: <ContactsOutlined />,
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={items}
    />
  );
}

export default AppMenu;
