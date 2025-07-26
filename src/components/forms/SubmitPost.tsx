"use client";

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
import { createPost } from "@/actions/posts";
import { toast } from "sonner";
import { getCookie, setCookie, COOKIE_NAME } from "@/lib/cookies";
// import { useRouter } from "next/navigation";

const searchFormSchema = z.object({
  recipient: z.string().min(1, {
    message: "Recipient can't be empty.",
  }),
  message: z.string().min(1, {
    message: "Message can't be empty.",
  }),
  song: z.object({
    song_id: z.string().min(1),
    song_name: z.string().min(1),
    song_artist: z.string().min(1),
    song_image: z.string().min(1),
  }).refine((data) => data.song_id && data.song_name && data.song_artist && data.song_image, {
    message: "Please choose a song.",
  }),
});

const setHistoryData = (postId: string) => {
  const history = getCookie(COOKIE_NAME)

  // console.log('history', history)
  if(history && Array.isArray(history)) {
    history.push(postId)
    setCookie(COOKIE_NAME, JSON.stringify(history))
  } else {
    setCookie(COOKIE_NAME, JSON.stringify([postId]))
  }
}

const SubmitPost = () => {
  // const router = useRouter()

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
    // console.log(values);
    const { song, message, recipient } = values;
    const { song_id, song_name, song_artist, song_image } = song;
    const post = await createPost({recipient, message, song_id, song_name, song_artist, song_image});

    if(post.id) {
      toast.success('Message submitted successfully!')
      setHistoryData(post.id)
      // router.push(`/details/${post.id}`)
    }
  };

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
                <FormLabel>Recipient</FormLabel>
                <FormControl>
                  <Input placeholder="Enter recipient name" {...field} />
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
