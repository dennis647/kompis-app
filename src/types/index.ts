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
    category: 'moving' | 'shopping' | 'disposal' | 'delivery' | 'cleaning' | 'other';
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
    missionId: string;
    senderId: string;
    senderName: string;
    message: string;
    timestamp: string;
    type: 'text' | 'image' | 'location';
}