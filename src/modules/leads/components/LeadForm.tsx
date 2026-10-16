"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button, ButtonExternalLink } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Icon, WhatsappIcon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Spinner } from "@/components/ui/Spinner";
import { Textarea } from "@/components/ui/Textarea";
import { buildWhatsappUrl } from "@/modules/site/utils/whatsapp";
import { useCreateLead } from "../hooks/useCreateLead";
import { leadFormSchema, type LeadFormValues } from "../utils/leadFormSchema";
import { BUDGET_HINT_OPTIONS, SPACE_TYPE_OPTIONS } from "../utils/leadOptions";

const DEFAULT_VALUES: LeadFormValues = {
  name: "",
  phone: "",
  email: "",
  city: "",
  spaceType: "casa",
  budgetHint: "conversar",
  message: "",
};

export function LeadForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: DEFAULT_VALUES,
  });
  const createLeadMutation = useCreateLead();
  const fieldErrors = createLeadMutation.error?.fieldErrors;

  function onSubmit(formValues: LeadFormValues) {
    createLeadMutation.mutate(formValues, { onSuccess: () => reset(DEFAULT_VALUES) });
  }

  if (createLeadMutation.isSuccess) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl bg-surface p-8 shadow-lift">
        <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-success/10 text-success">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="text-2xl">¡Listo, recibimos tus datos!</h3>
        <p>
          Te contactaremos muy pronto para entender qué necesitas y armar una propuesta que se adapte a tu
          presupuesto. Si prefieres no esperar, escríbenos ahora.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonExternalLink href={buildWhatsappUrl()} variant="whatsapp">
            <WhatsappIcon /> Escribir por WhatsApp
          </ButtonExternalLink>
          <Button variant="ghost" onClick={() => createLeadMutation.reset()}>
            Enviar otra solicitud
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-xl bg-surface p-6 shadow-lift md:p-8"
    >
      <fieldset disabled={createLeadMutation.isPending} className="flex flex-col gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Tu nombre" error={errors.name?.message ?? fieldErrors?.name}>
            <Input autoComplete="name" placeholder="María Gómez" {...register("name")} />
          </Field>
          <Field label="Celular o WhatsApp" error={errors.phone?.message ?? fieldErrors?.phone}>
            <Input type="tel" autoComplete="tel" placeholder="300 123 4567" {...register("phone")} />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Correo (opcional)" error={errors.email?.message ?? fieldErrors?.email}>
            <Input type="email" autoComplete="email" placeholder="tucorreo@email.com" {...register("email")} />
          </Field>
          <Field label="Ciudad (opcional)" error={errors.city?.message ?? fieldErrors?.city}>
            <Input autoComplete="address-level2" placeholder="Medellín" {...register("city")} />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="¿Qué quieres automatizar?" error={errors.spaceType?.message ?? fieldErrors?.spaceType}>
            <Controller
              control={control}
              name="spaceType"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange} options={SPACE_TYPE_OPTIONS} />
              )}
            />
          </Field>
          <Field label="Presupuesto" error={errors.budgetHint?.message ?? fieldErrors?.budgetHint}>
            <Controller
              control={control}
              name="budgetHint"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange} options={BUDGET_HINT_OPTIONS} />
              )}
            />
          </Field>
        </div>

        <Field label="Cuéntanos qué necesitas (opcional)" error={errors.message?.message ?? fieldErrors?.message}>
          <Textarea
            rows={4}
            placeholder="Ej: quiero controlar las luces y el aire de mi apartamento desde el celular."
            {...register("message")}
          />
        </Field>
      </fieldset>

      {createLeadMutation.isError && !fieldErrors ? (
        <p role="alert" className="text-sm text-danger">
          {createLeadMutation.error.message}
        </p>
      ) : null}

      <Button type="submit" variant="accent" size="lg" disabled={createLeadMutation.isPending}>
        {createLeadMutation.isPending ? <Spinner size="sm" /> : null}
        {createLeadMutation.isPending ? "Enviando..." : "Quiero mi asesoría"}
      </Button>
      <p className="text-center text-xs text-ink-faint">
        Sin compromiso. Usamos tus datos solo para contactarte sobre tu proyecto.
      </p>
    </form>
  );
}
