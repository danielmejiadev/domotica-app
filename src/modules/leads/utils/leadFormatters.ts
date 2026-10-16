export function formatLeadDate(isoDate: string): string {
  return new Intl.DateTimeFormat("es-CO", { dateStyle: "medium", timeStyle: "short" }).format(new Date(isoDate));
}

/** Colombian mobile numbers get the 57 country prefix so the wa.me link opens a chat; anything already prefixed or foreign is left as typed digits. */
export function buildLeadWhatsappUrl(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const internationalNumber = digits.length === 10 ? `57${digits}` : digits;
  return `https://wa.me/${internationalNumber}`;
}
