import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Member',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Data Peserta',
        path: '/DataPeserta',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Data Penguji',
        path: '/DataPenguji',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Fit & proper',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pendaftaran Fit & Proper',
        path: '/DaftarFit',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Pendaftaran Wawancara',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Pendaftaran Fit & Proper',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Penilaian Wawancara',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  // {
  //   title: 'Products',
  //   path: '/products',
  //   icon: <FaIcons.FaCartPlus />
  // },
  {
    title: 'pencarian Fit Propper',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Administrasi user',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
];