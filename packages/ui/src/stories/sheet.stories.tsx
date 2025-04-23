import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import { Button } from "../button";

type Story = StoryObj<typeof Sheet>;

const meta: Meta<typeof Sheet> = {
  title: "Atoms/Sheet",
  component: Sheet,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <div className="mx-auto w-full max-w-sm">
            <SheetHeader>
              <SheetTitle>Move Goal</SheetTitle>
              <SheetDescription>Set your daily activity goal.</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <Button>Submit</Button>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </SheetContent>
      </>
    ),
  },
};
