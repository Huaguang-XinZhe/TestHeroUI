import {Button, Form, Link, Input, Textarea} from "@heroui/react";
import {useCallback} from "react";


type CalendarBookingStepType = "booking_initial" | "booking_confirmation" | "booking_form";
interface BookingFormProps {
  onConfirm: ({name, email, notes}: {name: string; email: string; notes: string}) => void;
  setCalendarBookingStep?: (step: CalendarBookingStepType) => void;
}


export default function BookingForm({onConfirm, setCalendarBookingStep}: BookingFormProps) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const notes = formData.get("notes") as string;


    onConfirm({name, email, notes});
  };


  const handlerBack = useCallback(() => {
    if (setCalendarBookingStep) {
      setCalendarBookingStep("booking_initial");
    }
  }, [setCalendarBookingStep]);


  return (
    <Form
      className="flex w-full flex-col gap-4 px-6 py-6 md:w-[340px] md:px-0"
      validationBehavior="native"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        classNames={{label: "text-tiny text-default-600"}}
        label="Your name"
        labelPlacement="outside"
        name="name"
        placeholder=" "
      />
      <Input
        isRequired
        classNames={{label: "text-tiny text-default-600"}}
        label="Email address"
        labelPlacement="outside"
        name="email"
        placeholder=" "
        type="email"
      />
      <Textarea
        classNames={{label: "text-tiny text-default-600"}}
        label="Additional notes"
        labelPlacement="outside"
        minRows={4}
        name="notes"
      />
      <p className="text-default-500 text-xs">
        By proceeding you agree to our{" "}
        <Link className="text-default-800 text-xs" href="#" size="sm">
          Terms
        </Link>{" "}
        and{" "}
        <Link className="text-default-800 text-xs" href="#" size="sm">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-2 flex w-full justify-end gap-2">
        <Button variant="flat" onPress={handlerBack}>
          Back
        </Button>
        <Button color="primary" type="submit">
          Confirm
        </Button>
      </div>
    </Form>
  );
}

