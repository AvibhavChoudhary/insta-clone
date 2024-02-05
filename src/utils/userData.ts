import {PostType, StoryType} from './types';

export type UserDataType = {
  id: number;
  name: string;
  username: string;
  profile: any;
  story: StoryType[];
  post: PostType[];
};
export const UserData: UserDataType[] = [
  {
    id: 1,
    name: 'Rajeev Roy',
    username: 'Your story',
    profile: require('../../assets/data/user1.jpeg'),
    story: [
      {
        time: 10,
        image: require('../../assets/data/user1.jpeg'),
      },
      {
        time: 10,
        image: require('../../assets/data/user1.jpeg'),
      },
      {
        time: 10,
        image: require('../../assets/data/user1.jpeg'),
      },
    ],
    post: [
      {
        time: '09:00:00',
        date: '01/05/2023',
        image: require('../../assets/data/scorpio1.jpeg'),
        caption: 'The big daddy of Suv',
        like: 30,
      },
    ],
  },
  {
    id: 2,
    name: 'Harsh Kumar',
    username: 'harsh',
    profile: require('../../assets/data/user2.jpeg'),
    story: [
      {
        time: 8,
        image: require('../../assets/data/user2.jpeg'),
      },
      {
        time: 10,
        image: require('../../assets/data/user1.jpeg'),
      },
    ],
    post: [
      {
        time: '04:00 PM',
        date: '08/04/2023',
        image: require('../../assets/data/mountain1.jpeg'),
        caption: 'Mountains are love',
        like: 25,
      },
    ],
  },
  {
    id: 3,
    name: 'Rohini Patel',
    username: 'rohinipatel',
    profile: require('../../assets/data/user3.jpeg'),
    story: [
      {
        time: 15,
        image: require('../../assets/data/user3.jpeg'),
      },
      {
        time: 8,
        image: require('../../assets/data/user2.jpeg'),
      },
      {
        time: 10,
        image: require('../../assets/data/user1.jpeg'),
      },
    ],
    post: [
      {
        time: '07:00 AM',
        date: '12/05/2023',
        image: require('../../assets/data/city1.jpeg'),
        caption: 'A memorable time',
        like: 99,
      },
    ],
  },
  {
    id: 4,
    name: 'Amit Kumar',
    username: 'amit112',
    profile: require('../../assets/data/user4.jpeg'),
    story: [
      {
        time: 13,
        image: require('../../assets/data/user4.jpeg'),
      },
    ],
    post: [
      {
        time: '07:00 AM',
        date: '12/05/2023',
        image: require('../../assets/data/creata1.png'),
        caption: 'No edit, No touch ups...',
        like: 88,
      },
    ],
  },
  {
    id: 5,
    name: 'Ankita Choudhary',
    username: 'ankita',
    profile: require('../../assets/data/user5.jpeg'),
    story: [
      {
        time: 13,
        image: require('../../assets/data/user5.jpeg'),
      },
    ],
    post: [
      {
        time: '07:00 AM',
        date: '12/05/2023',
        image: require('../../assets/data/train1.jpeg'),
        caption: 'No edit, No touch ups...',
        like: 88,
      },
    ],
  },
  // {
  //   id: 6,
  //   name: 'Rahul Kapoor',
  //   username: 'rahul001',
  //   profile: require('../../assets/data/user6.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user6.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/trail1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   name: 'Shayani Singh',
  //   username: 'shayani',
  //   profile: require('../../assets/data/user7.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user7.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   name: 'Ankur Rathi',
  //   username: 'rathi12',
  //   profile: require('../../assets/data/user8.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user8.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/sunset1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   name: 'Anandi Kapoor',
  //   username: 'anandi',
  //   profile: require('../../assets/data/user9.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user9.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650-1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   name: 'Harsh Kumar',
  //   username: 'harsh',
  //   profile: require('../../assets/data/user2.jpeg'),
  //   story: [
  //     {
  //       time: 8,
  //       image: require('../../assets/data/user2.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '04:00 PM',
  //       date: '08/04/2023',
  //       image: require('../../assets/data/mountain1.jpeg'),
  //       caption: 'hi....',
  //       like: 25,
  //     },
  //   ],
  // },
  // {
  //   id: 13,
  //   name: 'Rohini Patel',
  //   username: 'rohinipatel',
  //   profile: require('../../assets/data/user3.jpeg'),
  //   story: [
  //     {
  //       time: 15,
  //       image: require('../../assets/data/user3.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/city1.jpeg'),
  //       caption: 'A memorable time',
  //       like: 99,
  //     },
  //   ],
  // },
  // {
  //   id: 14,
  //   name: 'Amit Kumar',
  //   username: 'amit112',
  //   profile: require('../../assets/data/user4.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user4.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/creata1.png'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 15,
  //   name: 'Ankita Choudhary',
  //   username: 'ankita',
  //   profile: require('../../assets/data/user5.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user5.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/train1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 16,
  //   name: 'Rahul Kapoor',
  //   username: 'rahul001',
  //   profile: require('../../assets/data/user6.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user6.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/trail1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 17,
  //   name: 'Shayani Singh',
  //   username: 'shayani',
  //   profile: require('../../assets/data/user7.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user7.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 18,
  //   name: 'Ankur Rathi',
  //   username: 'rathi12',
  //   profile: require('../../assets/data/user8.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user8.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/sunset1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 19,
  //   name: 'Anandi Kapoor',
  //   username: 'anandi',
  //   profile: require('../../assets/data/user9.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user9.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650-1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 232,
  //   name: 'Harsh Kumar',
  //   username: 'harsh',
  //   profile: require('../../assets/data/user2.jpeg'),
  //   story: [
  //     {
  //       time: 8,
  //       image: require('../../assets/data/user2.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '04:00 PM',
  //       date: '08/04/2023',
  //       image: require('../../assets/data/mountain1.jpeg'),
  //       caption: 'hi....',
  //       like: 25,
  //     },
  //   ],
  // },
  // {
  //   id: 233,
  //   name: 'Rohini Patel',
  //   username: 'rohinipatel',
  //   profile: require('../../assets/data/user3.jpeg'),
  //   story: [
  //     {
  //       time: 15,
  //       image: require('../../assets/data/user3.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/city1.jpeg'),
  //       caption: 'A memorable time',
  //       like: 99,
  //     },
  //   ],
  // },
  // {
  //   id: 234,
  //   name: 'Amit Kumar',
  //   username: 'amit112',
  //   profile: require('../../assets/data/user4.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user4.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/creata1.png'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 235,
  //   name: 'Ankita Choudhary',
  //   username: 'ankita',
  //   profile: require('../../assets/data/user5.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user5.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/train1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 236,
  //   name: 'Rahul Kapoor',
  //   username: 'rahul001',
  //   profile: require('../../assets/data/user6.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user6.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/trail1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 237,
  //   name: 'Shayani Singh',
  //   username: 'shayani',
  //   profile: require('../../assets/data/user7.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user7.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 238,
  //   name: 'Ankur Rathi',
  //   username: 'rathi12',
  //   profile: require('../../assets/data/user8.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user8.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/sunset1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 239,
  //   name: 'Anandi Kapoor',
  //   username: 'anandi',
  //   profile: require('../../assets/data/user9.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user9.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650-1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 32,
  //   name: 'Harsh Kumar',
  //   username: 'harsh',
  //   profile: require('../../assets/data/user2.jpeg'),
  //   story: [
  //     {
  //       time: 8,
  //       image: require('../../assets/data/user2.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '04:00 PM',
  //       date: '08/04/2023',
  //       image: require('../../assets/data/mountain1.jpeg'),
  //       caption: 'hi....',
  //       like: 25,
  //     },
  //   ],
  // },
  // {
  //   id: 33,
  //   name: 'Rohini Patel',
  //   username: 'rohinipatel',
  //   profile: require('../../assets/data/user3.jpeg'),
  //   story: [
  //     {
  //       time: 15,
  //       image: require('../../assets/data/user3.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/city1.jpeg'),
  //       caption: 'A memorable time',
  //       like: 99,
  //     },
  //   ],
  // },
  // {
  //   id: 34,
  //   name: 'Amit Kumar',
  //   username: 'amit112',
  //   profile: require('../../assets/data/user4.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user4.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/creata1.png'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 35,
  //   name: 'Ankita Choudhary',
  //   username: 'ankita',
  //   profile: require('../../assets/data/user5.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user5.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/train1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 36,
  //   name: 'Rahul Kapoor',
  //   username: 'rahul001',
  //   profile: require('../../assets/data/user6.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user6.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/trail1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 37,
  //   name: 'Shayani Singh',
  //   username: 'shayani',
  //   profile: require('../../assets/data/user7.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user7.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 38,
  //   name: 'Ankur Rathi',
  //   username: 'rathi12',
  //   profile: require('../../assets/data/user8.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user8.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/sunset1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 39,
  //   name: 'Anandi Kapoor',
  //   username: 'anandi',
  //   profile: require('../../assets/data/user9.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user9.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650-1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 42,
  //   name: 'Harsh Kumar',
  //   username: 'harsh',
  //   profile: require('../../assets/data/user2.jpeg'),
  //   story: [
  //     {
  //       time: 8,
  //       image: require('../../assets/data/user2.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '04:00 PM',
  //       date: '08/04/2023',
  //       image: require('../../assets/data/mountain1.jpeg'),
  //       caption: 'hi....',
  //       like: 25,
  //     },
  //   ],
  // },
  // {
  //   id: 43,
  //   name: 'Rohini Patel',
  //   username: 'rohinipatel',
  //   profile: require('../../assets/data/user3.jpeg'),
  //   story: [
  //     {
  //       time: 15,
  //       image: require('../../assets/data/user3.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/city1.jpeg'),
  //       caption: 'A memorable time',
  //       like: 99,
  //     },
  //   ],
  // },
  // {
  //   id: 44,
  //   name: 'Amit Kumar',
  //   username: 'amit112',
  //   profile: require('../../assets/data/user4.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user4.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/creata1.png'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 45,
  //   name: 'Ankita Choudhary',
  //   username: 'ankita',
  //   profile: require('../../assets/data/user5.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user5.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/train1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 46,
  //   name: 'Rahul Kapoor',
  //   username: 'rahul001',
  //   profile: require('../../assets/data/user6.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user6.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/trail1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 47,
  //   name: 'Shayani Singh',
  //   username: 'shayani',
  //   profile: require('../../assets/data/user7.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user7.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 48,
  //   name: 'Ankur Rathi',
  //   username: 'rathi12',
  //   profile: require('../../assets/data/user8.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user8.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/sunset1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 49,
  //   name: 'Anandi Kapoor',
  //   username: 'anandi',
  //   profile: require('../../assets/data/user9.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user9.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650-1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 52,
  //   name: 'Harsh Kumar',
  //   username: 'harsh',
  //   profile: require('../../assets/data/user2.jpeg'),
  //   story: [
  //     {
  //       time: 8,
  //       image: require('../../assets/data/user2.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '04:00 PM',
  //       date: '08/04/2023',
  //       image: require('../../assets/data/mountain1.jpeg'),
  //       caption: 'hi....',
  //       like: 25,
  //     },
  //   ],
  // },
  // {
  //   id: 53,
  //   name: 'Rohini Patel',
  //   username: 'rohinipatel',
  //   profile: require('../../assets/data/user3.jpeg'),
  //   story: [
  //     {
  //       time: 15,
  //       image: require('../../assets/data/user3.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/city1.jpeg'),
  //       caption: 'A memorable time',
  //       like: 99,
  //     },
  //   ],
  // },
  // {
  //   id: 54,
  //   name: 'Amit Kumar',
  //   username: 'amit112',
  //   profile: require('../../assets/data/user4.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user4.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/creata1.png'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 55,
  //   name: 'Ankita Choudhary',
  //   username: 'ankita',
  //   profile: require('../../assets/data/user5.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user5.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/train1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 56,
  //   name: 'Rahul Kapoor',
  //   username: 'rahul001',
  //   profile: require('../../assets/data/user6.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user6.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/trail1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 57,
  //   name: 'Shayani Singh',
  //   username: 'shayani',
  //   profile: require('../../assets/data/user7.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user7.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 58,
  //   name: 'Ankur Rathi',
  //   username: 'rathi12',
  //   profile: require('../../assets/data/user8.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user8.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/sunset1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
  // {
  //   id: 59,
  //   name: 'Anandi Kapoor',
  //   username: 'anandi',
  //   profile: require('../../assets/data/user9.jpeg'),
  //   story: [
  //     {
  //       time: 13,
  //       image: require('../../assets/data/user9.jpeg'),
  //     },
  //   ],
  //   post: [
  //     {
  //       time: '07:00 AM',
  //       date: '12/05/2023',
  //       image: require('../../assets/data/gt650-1.jpeg'),
  //       caption: 'No edit, No touch ups...',
  //       like: 88,
  //     },
  //   ],
  // },
];

export const typeData = [
  {id: 1, image: require('../../assets/GridIcon.png')},
  {id: 2, image: require('../../assets/TagsIcon.png')},
];
