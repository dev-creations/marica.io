import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../src/form";
import { Button, InputText } from "../src";
import { Combobox } from "../src/combobox";
import { getDefaultsFromZodSchema } from "../src/lib/utils";

type Story = StoryObj<typeof Form>;

const meta: Meta<typeof Form> = {
  title: "Form/Form",
  component: Form,
  argTypes: {},
};

export default meta;

const simpleFormSchema = z.object({
  name: z
    .string({
      required_error: "Please choose a name.",
    })
    .default(""),
});

const kitchensinkFormSchema = z.object({
  name: z
    .string({
      required_error: "Please choose a name.",
    })
    .default(""),
  item: z
    .string({
      required_error: "Please choose an item.",
    })
    .optional(),
});

export const SimpleForm: Story = {
  args: {
    schema: simpleFormSchema,
    defaultValues: getDefaultsFromZodSchema(simpleFormSchema),
    onSubmit: (data) => {
      console.log({ data });
    },
    children: (form) => {
      return (
        <>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <InputText placeholder="name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Sub</Button>
        </>
      );
    },
  },
};

export const KitchenSinkForm: Story = {
  args: {
    schema: kitchensinkFormSchema,
    defaultValues: getDefaultsFromZodSchema(kitchensinkFormSchema),
    onSubmit: (data) => {
      console.log({ data });
    },
    children: (form) => {
      return (
        <>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <InputText placeholder="name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="item"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Items</FormLabel>
                <FormControl>
                  <Combobox
                    {...field}
                    items={[
                      { key: "foo", label: "Foo" },
                      { key: "bar", label: "Bar" },
                    ]}
                  />
                </FormControl>
                <FormDescription>Items</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={!form.formState.isValid}>
            Sub
          </Button>
        </>
      );
    },
  },
};
