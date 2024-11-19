import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormFieldWithIcon from "@/components/ui/form-field-with-icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Asterisk, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import validator from "validator";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const ContactFormSchema = z.object({
  name: z.string(),
  email:z.string().refine(validator.isEmail),
  message: z.string()
})

export const ContactUsForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSendMessage = (data: z.infer<typeof ContactFormSchema>) => {
    console.log(data)
  }
  return (
        <div className="shrink-0 mt-">
          <h2  className="text-xs md:text-sm uppercase  font-bold text-[#0423A0] mb-2">Send us an email</h2>
          <h3 className="text-monochrome text-2xl md:text-5xl font-bold mb-3">
          Feel free to write
          </h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSendMessage)} className="lg:w-full w-full">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full mt-4">
                      <FormLabel className="text-sm font-medium">
                        Name
                      </FormLabel>
                      <FormControl className="w-full">
                        <Input
                          placeholder="Name"
                          {...field}
                          className="text-[14px] w-full"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="flex items-start text-sm font-medium gap-x-1">
                        Email
                        <Asterisk className="w-3 h-3 stroke-app-destructive" />
                      </FormLabel>
                      <FormFieldWithIcon FieldIcon={Mail}>
                        <FormControl>
                          <Input
                            placeholder="Enter Email"
                            type="email"
                            {...field}
                            className="auth-form_input-field pl-[42px] pr-[14px] focus-visible:outline-none focus-visible:ring-2 h-9 text-[14px]"
                          />
                        </FormControl>
                      </FormFieldWithIcon>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="text-sm font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          {...field}
                          className="text-[14px] h-[120px] resize-none"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button className="bg-monochrome hover:bg-monochrome/90 w-full mt-8">Send Message</Button>
            </form>
          </Form>
        </div>
  );
};



