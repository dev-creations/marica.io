import {
  createContext,
  useContext,
  type HTMLAttributes,
  useId,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from "react";
import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { cn } from "../lib/utils";
import { Label } from "../label";

const FormInternal = FormProvider;

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
}

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

interface FormItemContextValue {
  id: string;
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

function FormItem({
  ref,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement>;
}) {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("mio:space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}
FormItem.displayName = "FormItem";

function FormLabel({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  ref?: React.RefObject<ElementRef<typeof LabelPrimitive.Root>>;
}) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "mio:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}
FormLabel.displayName = "FormLabel";

function FormControl({
  ref,
  ...props
}: ComponentPropsWithoutRef<typeof Slot> & {
  ref?: React.RefObject<ElementRef<typeof Slot>>;
}) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={Boolean(error)}
      {...props}
    />
  );
}
FormControl.displayName = "FormControl";

function FormDescription({
  ref,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & {
  ref?: React.RefObject<HTMLParagraphElement>;
}) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("mio:text-muted-foreground mio:text-sm", className)}
      {...props}
    />
  );
}
FormDescription.displayName = "FormDescription";

function FormMessage({
  ref,
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & {
  ref?: React.RefObject<HTMLParagraphElement>;
}) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn(
        "mio:text-destructive mio:text-sm mio:font-medium",
        className
      )}
      {...props}
    >
      {body}
    </p>
  );
}
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  FormInternal,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
