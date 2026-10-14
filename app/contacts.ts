// Single source of truth for contact details shown across the site.
export const CONTACTS = {
  phoneDisplay: "+380 66 766 70 94",
  phoneHref: "tel:+380667667094",
  email: "meredian18@gmail.com",
  emailHref: "mailto:meredian18@gmail.com",
  telegramHref: "https://t.me/+380667667094",
  whatsappHref: "https://wa.me/380667667094",
};

// Maps a channel's mono code (TG / WA / IG / @) to its link.
export const CHANNEL_HREFS: Record<string, string> = {
  TG: CONTACTS.telegramHref,
  WA: CONTACTS.whatsappHref,
  "@": CONTACTS.emailHref,
};
