'use server'

import { prismadb } from "@/lib/db";
import { Posts } from "@prisma/client";

interface GetPostsProps {
    page?: number;
    limit?: number;
    query?: string;
}

export async function createPost(data: Omit<Posts, 'id' | 'createdAt'>) {
  console.log('create post data', data)
  const newPost = await prismadb.posts.create({
      data
  });
  return newPost;
}

export async function getAllPosts() {

  const posts = await prismadb.posts.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  return posts;
}

export async function getPosts({page = 1, limit = 12, query = ""}: GetPostsProps) {
  const skip = (page - 1) * limit;
  const posts = await prismadb.posts.findMany({
    skip,
    take: limit,
    where: {
      recipient: { contains: query, mode: "insensitive" }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return posts;
}

export async function getPostById(id: string) {

    const post = await prismadb.posts.findUnique({
        where: { id }

    });
    return post;
}

export async function getPostByRecipient(recipient: string) {

    const post = await prismadb.posts.findMany({
        where: { recipient }

    });
    return post;
}



