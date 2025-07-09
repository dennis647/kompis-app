export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    rating: number;
    completedJobs: number;
    location: string;
}

export interface Mission {
    id: string;
    title: string;
    description: string;
    category: 'flytting' | 'handel' | 'kast' | 'levering' | 'vasking' | 'annet';
    location: {
        address: string;
        lat: number;
        lng: number;
    };
    payment: {
        type: 'paid' | 'free';
        amount?: number;
    };
    creator: User;
    status: 'open' | 'assigned' | 'in_progress' | 'completed';
    createdAt: string;
    deadline?: string;
    bids: Bid[];
    assignedTo?: User;
}

export interface Bid {
    id: string;
    missionId: string;
    bidder: User;
    amount?: number;
    message: string;
    estimatedTime: string;
    createdAt: string;
    status: 'pending' | 'accepted' | 'rejected';
}

export interface ChatMessage {
    id: string;
    senderId: string;
    message: string;
    timestamp: string;
    missionTitle: string;
    missionStatus: string;
    missionLocation: string;
    type: 'text' | 'image' | 'location';
}