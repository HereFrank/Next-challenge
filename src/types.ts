import { type } from "os";
import { isTypeQueryNode } from "typescript";

export interface CardData {
    imageLink: string;
    user: string;
    createdAt: string;
    collects: number;
    mirrors: number;
    comments: number;
  }

export type SortMode = "TOP_COMMENTED" | "TOP_COLLECTED" | "TOP_MIRRORED" | "LATEST";
export type ActiveButton = Exclude<SortMode, "TOP_COMMENTED">

export interface PostData {
  imageLink: string;
  numberOfCollects: number | null;
  numberOfMirrors: number | null;
  numberOfComments: number | null;
  user: string;
  profileLink: string | null;
  postDescription: string;
  postId: string
}

export type ImagePost = Omit<PostData, "user" | "profileLink" | "postDescription"| "postId">
export type ImagePostData = Omit<PostData, "imageLink" | "numberOfCollects" | "numberOfMirrors">
export interface CommentData {
  profilePictureLink: string,
  user: string,
  commentContent: string
}