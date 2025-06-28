import { User, Mission, Bid, ChatMessage } from '../types';
import dennisAvatar from '../img/dennis.jpg';

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
        id: '3',
        name: 'Dennis Jacob Brokking',
        email: 'dennis@example.com',
        avatar: dennisAvatar,
        rating: 4.7,
        completedJobs: 22,
        location: 'Oslo, Norge'
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