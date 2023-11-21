import { Document,Schema } from "mongoose";

export interface IUser extends Document{
   username: string;
   email: string;
   password: string;
   fullname:string,
   avatar:string,
   coverImage?:string,
   watchHistory:Schema.Types.ObjectId[],
   refreshToken?:string;
}
export interface Ivideo extends Document{
   videoFile: string;
   thumbnail: string;
   owner: Schema.Types.ObjectId;
   title: string;
   description: string;
   duration: number;
   views: number;
   isPublished: boolean;
}