import nodemailer from "nodemailer";

// Definimos la interfaz para los datos de contacto
export interface ContactFormData {
  name: string;
  email: string;
  website?: string;
  message: string;
  currentPage?: string;
}

// Creamos un transporter de nodemailer usando las variables de entorno
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

/**
 * Envía un correo electrónico con los datos del formulario de contacto
 * @param formData - Datos del formulario de contacto
 * @returns Objeto con el resultado del envío
 */
export async function sendContactEmail(formData: ContactFormData) {
  try {
    const {
      name,
      email,
      website = "No proporcionado",
      message,
      currentPage = "Formulario de contacto",
    } = formData;

    // Configurar el correo
    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuevo contacto desde ${currentPage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nuevo mensaje de contacto</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Página Web:</strong> ${website}</p>
            <p><strong>Mensaje:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 5px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="font-size: 12px; color: #777; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            <p>Este mensaje fue enviado desde ${currentPage}.</p>
          </div>
        </div>
      `,
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return {
      success: false,
      error,
    };
  }
}
