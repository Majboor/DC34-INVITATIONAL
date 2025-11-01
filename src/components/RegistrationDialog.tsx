import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  ageGroup: z.string().nonempty({ message: "Please select an age group" }),
  teamName: z.string()
    .trim()
    .nonempty({ message: "Team name is required" })
    .max(100, { message: "Team name must be less than 100 characters" }),
  coach: z.string()
    .trim()
    .nonempty({ message: "Coach name is required" })
    .max(100, { message: "Coach name must be less than 100 characters" }),
  state: z.string().nonempty({ message: "Please select a state" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ageGroups = ["10U", "12U", "14U", "16U", "18U"];

const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

export const RegistrationDialog = ({ open, onOpenChange }: RegistrationDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ageGroup: "",
      teamName: "",
      coach: "",
      state: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual registration logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Registration submitted!", {
        description: `We'll contact ${data.coach} at ${data.email} with next steps.`,
      });
      
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to submit registration", {
        description: "Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-background">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl font-black uppercase tracking-tight">
            REGISTER YOUR TEAM
          </DialogTitle>
          <DialogDescription className="font-body text-base">
            Complete the form below to register for the DC34 Invitational
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Age Group */}
            <FormField
              control={form.control}
              name="ageGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body font-semibold uppercase tracking-wide text-xs">
                    Age Group
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background z-50">
                      {ageGroups.map((age) => (
                        <SelectItem key={age} value={age}>
                          {age}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Team Name */}
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body font-semibold uppercase tracking-wide text-xs">
                    Team Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter team name" 
                      {...field}
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Coach */}
            <FormField
              control={form.control}
              name="coach"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body font-semibold uppercase tracking-wide text-xs">
                    Coach Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter coach name" 
                      {...field}
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* State */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body font-semibold uppercase tracking-wide text-xs">
                    State
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background z-50 max-h-[300px]">
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body font-semibold uppercase tracking-wide text-xs">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="coach@example.com" 
                      {...field}
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="hero"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
