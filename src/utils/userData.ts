import {PostType, StoryType} from './types';

export type UserDataType = {
  id: number;
  name: string;
  username: string;
  profile: any;
  story: StoryType[];
  post: PostType;
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
    post: {
      time: '09:00:00',
      date: '01/05/2023',
      images: [
        require('../../assets/data/scorpio1.jpeg'),
        require('../../assets/data/scorpio2.webp'),
        require('../../assets/data/scorpio3.jpeg'),
      ],
      caption: 'The big daddy of Suv',
      like: 30,
    },
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
    post: {
      time: '04:00 PM',
      date: '08/04/2023',
      images: [
        require('../../assets/data/creata1.png'),
        require('../../assets/data/creata2.webp'),
        require('../../assets/data/creata3.png'),
      ],
      caption: 'Mountains are love',
      like: 25,
    },
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
    post: {
      time: '07:00 AM',
      date: '12/05/2023',
      images: [
        require('../../assets/data/mountain1.jpeg'),
        require('../../assets/data/mountain2.jpeg'),
        require('../../assets/data/mountain3.jpeg'),
      ],
      caption: 'A memorable time',
      like: 99,
    },
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
    post: {
      time: '07:00 AM',
      date: '12/05/2023',
      images: [
        require('../../assets/data/gt650.jpeg'),
        require('../../assets/data/gt650-1.jpeg'),
        require('../../assets/data/gt650-2.jpeg'),
      ],
      caption: 'No edit, No touch ups...',
      like: 88,
    },
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
    post: {
      time: '07:00 AM',
      date: '12/05/2023',
      images: [require('../../assets/data/road1.jpeg')],
      caption: 'No edit, No touch ups...',
      like: 88,
    },
  },
];

export const typeData = [
  {id: 1, image: require('../../assets/GridIcon.png')},
  {id: 2, image: require('../../assets/TagsIcon.png')},
];

export const chatItemsData = [
  {
    id: 1,
    name: 'Amit Kumar',
    message: 'Sent a reel by axis.bank',
    time: 4,
    avatar: require('../../assets/data/user1.jpeg'),
    unread: false,
  },
  {
    id: 2,
    name: 'Rohit Choudhary',
    message: 'Sent a reel by axis.bank',
    time: 2,
    avatar: require('../../assets/data/user2.jpeg'),
    unread: true,
  },
  {
    id: 3,
    name: 'Ashish',
    message: 'Sent a reel by axis.bank',
    time: 1,
    avatar: require('../../assets/data/user3.jpeg'),
    unread: false,
  },
  {
    id: 4,
    name: 'Shrug Bhardwaj',
    message: 'Sent a reel by axis.bank',
    time: 5,
    avatar: require('../../assets/data/user4.jpeg'),
    unread: false,
  },
  {
    id: 5,
    name: 'Monty Kumar',
    message: 'Sent a reel by axis.bank',
    time: 2,
    avatar: require('../../assets/data/user5.jpeg'),
    unread: false,
  },
  {
    id: 6,
    name: 'Raja Singh',
    message: 'Sent a reel by axis.bank',
    time: 8,
    avatar: require('../../assets/data/user6.jpeg'),
    unread: false,
  },
  {
    id: 7,
    name: 'Sanjay kumar',
    message: 'Sent a reel by axis.bank',
    time: 2,
    avatar: require('../../assets/data/user7.jpeg'),
    unread: false,
  },
  {
    id: 8,
    name: 'Rajat Singh',
    message: 'Sent a reel by axis.bank',
    time: 3,
    avatar: require('../../assets/data/user8.jpeg'),
    unread: true,
  },
  {
    id: 9,
    name: 'Ankita Singh',
    message: 'Sent a reel by axis.bank',
    time: 7,
    avatar: require('../../assets/data/user9.jpeg'),
    unread: true,
  },
  {
    id: 11,
    name: 'Amit Kumar',
    message: 'Sent a reel by axis.bank',
    time: 14,
    avatar: require('../../assets/data/user1.jpeg'),
    unread: true,
  },
  {
    id: 12,
    name: 'Rohit Choudhary',
    message: 'Sent a reel by axis.bank',
    time: 14,
    avatar: require('../../assets/data/user2.jpeg'),
    unread: false,
  },
  {
    id: 13,
    name: 'Ashish',
    message: 'Sent a reel by axis.bank',
    time: 12,
    avatar: require('../../assets/data/user3.jpeg'),
    unread: false,
  },
  {
    id: 14,
    name: 'Shrug Bhardwaj',
    message: 'Sent a reel by axis.bank',
    time: 18,
    avatar: require('../../assets/data/user4.jpeg'),
    unread: false,
  },
  {
    id: 15,
    name: 'Monty Kumar',
    message: 'Sent a reel by axis.bank',
    time: 19,
    avatar: require('../../assets/data/user5.jpeg'),
    unread: false,
  },
  {
    id: 16,
    name: 'Raja Singh',
    message: 'Sent a reel by axis.bank',
    time: 18,
    avatar: require('../../assets/data/user6.jpeg'),
    unread: false,
  },
  {
    id: 17,
    name: 'Sanjay kumar',
    message: 'Sent a reel by axis.bank',
    time: 4,
    avatar: require('../../assets/data/user7.jpeg'),
    unread: false,
  },
  {
    id: 18,
    name: 'Rajat Singh',
    message: 'Sent a reel by axis.bank',
    time: 4,
    avatar: require('../../assets/data/user8.jpeg'),
    unread: false,
  },
  {
    id: 19,
    name: 'Ankita Singh',
    message: 'Sent a reel by axis.bank',
    time: 4,
    avatar: require('../../assets/data/user9.jpeg'),
    unread: false,
  },
];
