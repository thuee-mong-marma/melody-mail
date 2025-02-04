"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import SongSelector from "@/components/SongSelector";
import { createPost } from "@/app/actions/posts";
import { Posts } from "@prisma/client";
import { PostSuccess } from "../PostSuccess";
import { setHistoryData } from "@/lib/utils";


const searchFormSchema = z.object({
  recipient: z.string().min(1, {
    message: "Recipent can't be empty.",
  }),
  message: z.string().min(1, {
    message: "Message can't be empty.",
  }),
  song: z.object({
    song_id: z.string(),
    song_name: z.string(),
    song_artist: z.string(),
    song_image: z.string(),
  }),
});

const SubmitPost = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [submittedPost, setSubmittedPost] = useState<Posts | null>(null);

  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      recipient: "",
      message: "",
      song: {
        song_id: "",
        song_name: "",
        song_artist: "",
        song_image: "",
      },
    },
  });


  const onSubmit = async (values: z.infer<typeof searchFormSchema>) => {
    console.log(values);
    const { song, message, recipient } = values;
    const { song_id, song_name, song_artist, song_image } = song;
    const post = await createPost({recipient, message, song_id, song_name, song_artist, song_image});

    if(post) {
      setSubmitted(true);
      setSubmittedPost(post);
      setHistoryData(post.id)
    }
  };


  if(isSubmitted) {
    return <PostSuccess id={submittedPost?.id as string} />
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="recipient"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Recipent</FormLabel>
                <FormControl>
                  <Input placeholder="Enter recipent name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message"
                    {...field}
                    rows={5}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="song"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Song</FormLabel>
                <FormControl>
                  <SongSelector {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-md p-6" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>

      </Form>
    </div>
  );
};

export default SubmitPost;
