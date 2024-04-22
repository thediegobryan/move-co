"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  message: z.string().min(10).max(500),
});

function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-zinc-200 py-7 px-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-zinc-50 py-5 max-w-[1000px] mx-auto text-left px-8 rounded-xl shadow-md"
        >
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-normal pl-1">Name</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-xl border border-black/10 text-lg placeholder:text-zinc-500"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-normal pl-1">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="rounded-xl border border-black/10 text-lg placeholder:text-zinc-500"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-normal pl-1">
                  Phone
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    className="rounded-xl border border-black/10 text-lg placeholder:text-zinc-500"
                    placeholder="Enter your phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-normal pl-1">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="rounded-xl border border-black/10 text-lg placeholder:text-zinc-500"
                    placeholder="Enter your message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="rounded-xl w-full py-5 bg-accent text-zinc-950"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default function Page() {
  return (
    <div className="text-center">
      <section className="my-12">
        <h1 className="text-6xl font-bold my-2">
          Contact Us<span className="text-accent text-6xl">.</span>
        </h1>
        <h3 className="text-xl">Ask away, we&apos;re happy to help</h3>
      </section>
      <ProfileForm />
    </div>
  );
}
