import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type SubmitHandler,
  type UseFormReturn,
  useForm,
} from "react-hook-form";
import { type FormEventHandler } from "react";
import { FormInternal } from "./internal-form";

interface FormProps<T extends z.ZodRawShape, K extends z.ZodObject<T>> {
  schema: K;
  onSubmit: SubmitHandler<z.infer<any>>;
  onChange?: FormEventHandler<HTMLFormElement>;
  children: (form: UseFormReturn<z.infer<K>>) => JSX.Element;
}

export function Form<T extends z.ZodRawShape, K extends z.ZodObject<T>>({
  schema,
  onSubmit,
  onChange,
  children,
}: FormProps<T, K>) {
  const form = useForm<z.infer<K>>({
    resolver: zodResolver(schema),
  });

  return (
    <FormInternal {...form}>
      <form onChange={onChange} onSubmit={form.handleSubmit(onSubmit)}>
        {children(form)}
      </form>
    </FormInternal>
  );
}
