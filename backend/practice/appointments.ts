import { api } from "encore.dev/api";
import { SQLDatabase } from "encore.dev/storage/sqldb";

const db = SQLDatabase.named("practice");

export interface AppointmentRequest {
  patientName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  isNewPatient: boolean;
}

export interface AppointmentResponse {
  success: boolean;
  message: string;
}

// Odošle požiadavku o termín.
export const requestAppointment = api<AppointmentRequest, AppointmentResponse>(
  { expose: true, method: "POST", path: "/appointments/request" },
  async (req) => {
    await db.exec`
      INSERT INTO appointment_requests (
        patient_name, email, phone, preferred_date, preferred_time, 
        reason, is_new_patient, status, created_at
      )
      VALUES (
        ${req.patientName}, ${req.email}, ${req.phone}, ${req.preferredDate}, 
        ${req.preferredTime}, ${req.reason}, ${req.isNewPatient}, 'pending', NOW()
      )
    `;

    return {
      success: true,
      message: "Vaša požiadavka o termín bola odoslaná. Kontaktujeme vás na potvrdenie vášho termínu.",
    };
  }
);
