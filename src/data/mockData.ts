import { User, Mission, Bid, ChatMessage } from '../types';
import dennisAvatar from '../img/dennis.jpg';
import newUser from'../img/newuser.jpg';

type ChatMessages = {
    [key: string]: {
        id: string;
        senderId: string;
        message: string;
        timestamp: string;
        missionTitle: string;
        missionStatus: string;
        missionLocation: string;

    }[];
};


export const mockUsers: User[] = [
    {
        id: '1',
        name: 'Emma Johnson',
        email: 'emma@example.com',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.8,
        completedJobs: 47,
        location: 'Stockholm, Sweden'
    },
    {
        id: '2',
        name: 'Alex Chen',
        email: 'alex@example.com',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.9,
        completedJobs: 63,
        location: 'Göteborg, Sweden'
    },
    {
        id: '3',
        name: 'Sofia Andersson',
        email: 'sofia@example.com',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.7,
        completedJobs: 32,
        location: 'Malmö, Sweden'
    },
    {
        id: '4',
        name: 'Dennis Jacob Brokking',
        email: 'dennis@example.com',
        avatar: dennisAvatar,
        rating: 4.7,
        completedJobs: 22,
        location: 'Oslo, Norge'
    },
    {
        id: '5',
        name: 'Ola Normann',
        email: 'Ola@example.com',
        avatar: newUser,
        rating: 4.0,
        completedJobs: 21,
        location: 'Bergen, Norge'
    }
];

export const mockMissions: Mission[] = [
    {
        id: '1',
        title: 'Help move furniture to new apartment',
        description: 'Need help moving a couch, dining table, and some boxes from my current place to my new apartment. About 2km distance. I have a van, just need an extra pair of hands.',
        category: 'flytting',
        location: {
            address: 'Östermalm, Stockholm',
            lat: 59.3293,
            lng: 18.0686
        },
        payment: {
            type: 'paid',
            amount: 800
        },
        creator: mockUsers[0],
        status: 'open',
        createdAt: '2025-01-27T10:00:00Z',
        deadline: '2025-01-30T18:00:00Z',
        bids: [],
        assignedTo: undefined
    },
    {
        id: '2',
        title: 'Grocery shopping for elderly neighbor',
        description: 'My neighbor is 85 and needs someone to do her weekly grocery shopping. She has a list ready and will pay for all groceries. Just need someone kind to help out.',
        category: 'handel',
        location: {
            address: 'Södermalm, Stockholm',
            lat: 59.3181,
            lng: 18.0686
        },
        payment: {
            type: 'paid',
            amount: 200
        },
        creator: mockUsers[1],
        status: 'open',
        createdAt: '2025-01-27T08:30:00Z',
        deadline: '2025-01-28T15:00:00Z',
        bids: [],
        assignedTo: undefined
    },
    {
        id: '3',
        title: 'Free books and magazines',
        description: 'I have a collection of Swedish books and magazines that I need to give away. Fiction, non-fiction, and some design magazines. Perfect for book lovers!',
        category: 'annet',
        location: {
            address: 'Vasastan, Stockholm',
            lat: 59.3426,
            lng: 18.0569
        },
        payment: {
            type: 'free'
        },
        creator: mockUsers[2],
        status: 'open',
        createdAt: '2025-01-26T16:20:00Z',
        bids: [],
        assignedTo: undefined
    },
    {
        id: '4',
        title: 'Kast av elektronik',
        description: 'Har noen gamle datamaskiner, printere og kabler som trengs å kastes på resirkulerings senter. Jeg stiller med transport, trenger bare hjelp med bæring og sortering.',
        category: 'kast',
        location: {
            address: 'Høvik, Bærum',
            lat: 59.3538,
            lng: 17.9394
        },
        payment: {
            type: 'paid',
            amount: 400
        },
        creator: mockUsers[3],
        status: 'open',
        createdAt: '2025-06-25T12:00:00Z',
        deadline: '2025-07-29T17:00:00Z',
        bids: [],
        assignedTo: mockUsers[1]
    }
];

export const mockBids: Bid[] = [
    {
        id: '1',
        missionId: '1',
        bidder: mockUsers[1],
        amount: 750,
        message: 'I have experience with furniture moving and can help you today or tomorrow. I have my own tools and moving straps.',
        estimatedTime: '3 hours',
        createdAt: '2025-01-27T11:00:00Z',
        status: 'pending'
    },
    {
        id: '2',
        missionId: '1',
        bidder: mockUsers[2],
        amount: 800,
        message: 'Available this weekend! I\'ve helped many people move and have great reviews. Can start early morning.',
        estimatedTime: '2.5 hours',
        createdAt: '2025-01-27T11:30:00Z',
        status: 'pending'
    },
    {
        id: '3',
        missionId: '4',
        bidder: mockUsers[2],
        amount: 250,
        message: 'Jeg er tilgjenglig imorgen! Jeg har hjulpet flere kaste og sortere slikt avfall før. :).',
        estimatedTime: '2.5 timer',
        createdAt: '2025-06-27T11:30:00Z',
        status: 'accepted'
    }
];

export const mockChatMessages: ChatMessage[] = [
    {
        id: '1',
        missionId: '4',
        senderId: '1',
        senderName: 'Emma Johnson',
        message: 'Hi! Thanks for accepting the job. When would be a good time to start?',
        timestamp: '2025-01-27T09:00:00Z',
        type: 'text'
    },
    {
        id: '2',
        missionId: '4',
        senderId: '2',
        senderName: 'Alex Chen',
        message: 'Hello! I can start tomorrow morning around 10 AM if that works for you?',
        timestamp: '2025-01-27T09:15:00Z',
        type: 'text'
    },
    {
        id: '3',
        missionId: '4',
        senderId: '1',
        senderName: 'Emma Johnson',
        message: 'Perfect! I\'ll have everything ready. The address is Bromma Recycling Center.',
        timestamp: '2025-01-27T09:20:00Z',
        type: 'text'
    }
];

export const mockChats: ChatMessages = { //m1 = message 1

    '2': [
        {
            id: 'm1',
            senderId: '1',
            message: 'Hey Alex, how are things going?',
            timestamp: '2025-06-28T10:15:00Z',
            missionTitle: 'Flytting',
            missionStatus: 'Under behandling',
            missionLocation: 'Oslo, Norge',
        },
        {
            id: 'm2',
            senderId: '2',
            message: 'All good, thanks for asking!',
            timestamp: '2025-06-28T10:16:00Z',
            missionTitle: 'Flytting',
            missionStatus: 'Under behandling',
            missionLocation: 'Oslo, Norge',
        },
    ],
    '3': [
        {
            id: 'm3',
            senderId: '3',
            message: 'Can you help me later today?',
            timestamp: '2025-06-28T09:00:00Z',
            missionTitle: 'Kast',
            missionStatus: 'Under behandling',
            missionLocation: 'Bergen, Norge',
        },
        {
            id: 'm4',
            senderId: '1',
            message: 'Of course, Sofia!',
            timestamp: '2025-06-28T09:05:00Z',
            missionTitle: 'Kast',
            missionStatus: 'Under behandling',
            missionLocation: 'Bergen, Norge',
        },
    ],
    '4': [
        {
            id: 'm5',
            senderId: '4',
            message: 'Don’t forget the tools.',
            timestamp: '2025-06-27T17:30:00Z',
            missionTitle: 'Handel',
            missionStatus: 'Fullført',
            missionLocation: 'Flesberg, Norge',
        },
        {
            id: 'm6',
            senderId: '1',
            message: 'Got it, see you soon!',
            timestamp: '2025-06-27T17:31:00Z',
            missionTitle: 'Handel',
            missionStatus: 'Fullført',
            missionLocation: 'Flesberg, Norge',
        },
    ],
    '5': [
        {
            id: 'm7',
            senderId: '5',
            message: 'Hei Emma! Når kan jeg hente denne?',
            timestamp: '2025-06-28T10:15:00Z',
            missionTitle: 'Annet',
            missionStatus: 'Fullført',
            missionLocation: 'Molde, Norge',
        },
        {
            id: 'm8',
            senderId: '1',
            message: 'Når enn det passer deg!',
            timestamp: '2025-06-28T10:16:00Z',
            missionTitle: 'Annet',
            missionStatus: 'Fullført',
            missionLocation: 'Molde, Norge',
        },
    ],
};