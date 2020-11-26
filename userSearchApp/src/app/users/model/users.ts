export interface UserName {
    first: string;
    last: string;
}

export interface Users {
    _id: string;
    index: number;
    guid: string;
    isActive: boolean;
    balance: string;
    picture: string;
    age: number;
    eyeColor: string;
    name: UserName;
    company: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: string;
    latitude: string;
    longitude: string;
    tags: string[];
}