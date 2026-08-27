export type UserType =   'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'owner';
    userType: UserType;
}