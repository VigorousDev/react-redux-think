import _ from 'lodash'

export function fetch(subject, type){
  switch(subject){
    case 'project':
      if(type == 'fetch'){
        var projects = [
            {
                pid: '101',
                current: 'Active',
                name: 'It\'s A Wonderful Life',
                created_time: '01.08.2017 10:04AM',
                users: 8,
                owner_picture: '/imgs/app/avatars/avatar0.png',
                owner_name: 'John Smith1',
                checked: false
            },
            {
                pid: '102',
                current: 'Switch',
                name: '2Casablanca',
                created_time: '01.09.2017 09:23AM',
                users: 3,
                owner_picture: '/imgs/app/avatars/avatar1.png',
                owner_name: 'John Smith2',
                checked: false
            },
            {
                pid: '103',
                current: 'Switch',
                name: '3Casablanca',
                created_time: '01.09.2017 09:23AM',
                users: 3,
                owner_picture: '/imgs/app/avatars/avatar2.png',
                owner_name: 'John Smith3',
                checked: false
            },
            {
                pid: '4',
                current: 'Switch',
                name: '4Casablanca',
                created_time: '01.09.2017 09:23AM',
                users: 3,
                owner_picture: '/imgs/app/avatars/avatar3.png',
                owner_name: 'John Smith4',
                checked: false
            },
            {
                pid: '5',
                current: 'Switch',
                name: '5Casablanca',
                created_time: '01.09.2017 09:23AM',
                users: 3,
                owner_picture: '/imgs/app/avatars/avatar4.png',
                owner_name: 'John Smith5',
                checked: false
            },
            {
                pid: '6',
                current: 'Switch',
                name: '6Casablanca',
                created_time: '01.09.2017 09:23AM',
                users: 3,
                owner_picture: '/imgs/app/avatars/avatar5.png',
                owner_name: 'John Smith6',
                checked: false
            },
            {
                pid: '7',
                current: 'Switch',
                name: '7Casablanca',
                created_time: '01.09.2017 09:23AM',
                users: 3,
                owner_picture: '/imgs/app/avatars/avatar6.png',
                owner_name: 'John Smith7',
                checked: false
            },
            {
                pid: '1002',
                current: 'Switch',
                name: '8Casablanca',
                created_time: '01.09.2017 09:23AM',
                users: 3,
                owner_picture: '/imgs/app/avatars/avatar7.png',
                owner_name: 'John Smith8',
                checked: false
            }
        ];
        return projects
      }
      break
    case 'user':
      if(type == 'fetch'){
        var users = [
            {
                uid: '101',
                status: 'Online',
                name: 'Anthony Jackson',
                email: 'gravida@rbisit.com',
                phone: '(323) 555-1211',
                photo: '/imgs/app/avatars/avatar0.png',
                about: 'User101 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                schedule_view: true,
                schedule_edit: false,
                checked: false
            },
            {
                uid: '102',
                status: 'Offline',
                name: 'Rooney Lindsay',
                email: 'rooney@proin.com',
                phone: '(323) 555-1212',
                photo: '/imgs/app/avatars/avatar1.png',
                about: 'User102 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                schedule_view: true,
                schedule_edit: false,
                checked: false
            },
            {
                uid: '103',
                status: 'Offline',
                name: 'Lionel Mcmillan',
                email: 'pacheco@manga.com',
                phone: '(323) 555-1213',
                photo: '/imgs/app/avatars/avatar2.png',
                about: 'User103 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                schedule_view: true,
                schedule_edit: false,
                checked: false
            },
            {
                uid: '104',
                status: 'Offline',
                name: 'Edan Randall',
                email: 'rooney@proin.com',
                phone: '(323) 555-1214',
                photo: '/imgs/app/avatars/avatar3.png',
                about: 'User104 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                schedule_view: true,
                schedule_edit: false,
                checked: false
            }
        ];
        return users
      }
      break
    case 'schedule':
      if(type == 'fetch'){
        var schedules = [
            {
                sid: '101',
                name: 'Locked White',
                shoot_days: 31,
                created_time: '01.08.2017 10:04AM',
                owner_name: 'John Smith',
                checked: false
            },
            {
                sid: '102',
                name: 'Prelim Blue Draft',
                shoot_days: 30,
                created_time: '01.09.2017 10:04AM',
                owner_name: 'John Smith',
                checked: false
            },
            {
                sid: '103',
                name: 'Locked Blue',
                shoot_days: 28,
                created_time: '01.12.2017 10:04AM',
                owner_name: 'John Smith1',
                checked: false
            }
        ];
        return schedules
      }      
      break
    default:
      break
  }
}