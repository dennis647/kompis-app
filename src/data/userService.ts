// userService.ts
import { db } from '../firebaseConfig';
import { ref, set, push, get, child } from 'firebase/database';
import { User } from '../types';

export const addUser = async (user: {
    name: string;
    email: string;
    password: string;
    location: string;
    rating: number;
    completedJobs: number
}): Promise<string> => {
    const userRef = push(ref(db, 'users'));
    const newUser: User = {
        ...user, id: userRef.key!,
        avatar: ''
    };
    await set(userRef, newUser);
    return newUser.id;
};

export const fetchUsers = async (): Promise<User[]> => {
    const snapshot = await get(child(ref(db), 'users'));
    if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.values(data);
    }
    return [];
};

export const loginUser = async (email: string, password: string): Promise<User | null> => {
    const users = await fetchUsers();
    return users.find(u => u.email === email && u.password === password) || null;
};
