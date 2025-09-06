import { api } from "encore.dev/api";
import { SQLDatabase } from "encore.dev/storage/sqldb";

const db = new SQLDatabase("practice", {
  migrations: "./migrations",
});

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: "email" | "phone";
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

// Odošle dotaz z kontaktného formulára.
export const submitContact = api<ContactRequest, ContactResponse>(
  { expose: true, method: "POST", path: "/contact" },
  async (req) => {
    await db.exec`
      INSERT INTO contact_inquiries (name, email, phone, message, preferred_contact, created_at)
      VALUES (${req.name}, ${req.email}, ${req.phone}, ${req.message}, ${req.preferredContact}, NOW())
    `;

    return {
      success: true,
      message: "Ďakujeme za váš dotaz. Čoskoro vás kontaktujeme.",
    };
  }
);
