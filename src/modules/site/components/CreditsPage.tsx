import { ImageCreditsList } from "./ImageCreditsList";

export function CreditsPage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl">Créditos de imágenes</h1>
        <p>
          Las fotografías de este sitio son material libre de Wikimedia Commons. Gracias a sus autores.
        </p>
      </div>
      <ImageCreditsList />
    </section>
  );
}
