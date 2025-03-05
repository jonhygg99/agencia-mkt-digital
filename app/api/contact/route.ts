import { NextResponse } from "next/server";
import { sendContactEmail } from "@/app/lib/email-service";

export async function POST(request: Request) {
  try {
    // Validar y procesar los datos del formulario
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Enviar el email usando el servicio
    const emailResult = await sendContactEmail({
      name: body.name,
      email: body.email,
      website: body.website,
      message: body.message,
      currentPage: body.currentPage,
    });

    if (!emailResult.success) {
      throw new Error("Error al enviar el email");
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al procesar solicitud:", error);
    return NextResponse.json(
      {
        message: "Error al enviar el mensaje. Por favor, inténtalo más tarde.",
      },
      { status: 500 }
    );
  }
}
