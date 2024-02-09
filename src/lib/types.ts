export interface UserType {
    _id: string;
    fullName: string;
    email: string;
    image: string;
    country: string;
    bio?:string;
  }

export interface MessageType {
    _id: string;
    ownerId: string;
    receiverId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
