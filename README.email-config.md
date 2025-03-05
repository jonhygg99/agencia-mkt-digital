# Configuración del Formulario de Contacto

Este documento explica cómo configurar el sistema de envío de emails para el formulario de contacto.

## Variables de Entorno Requeridas

Para que el sistema de email funcione correctamente, debes agregar las siguientes variables de entorno a tu archivo `.env.local`:

```
# Email de remitente (debe ser una cuenta de Gmail)
EMAIL_USER=tu-email@gmail.com
# Contraseña de aplicación (no usar la contraseña regular de Gmail)
EMAIL_PASSWORD=tu-contraseña-de-aplicación
# Email donde recibirás los mensajes
EMAIL_RECIPIENT=destinatario@email.com
```

## Configuración de Gmail

Si estás usando Gmail como servicio de email:

1. Asegúrate de habilitar la verificación en dos pasos en tu cuenta de Gmail
2. Crea una "Contraseña de aplicación" específica para esta aplicación:
   - Ve a tu cuenta de Google > Seguridad
   - En "Cómo accedes a Google" selecciona "Contraseñas de aplicaciones"
   - Crea una nueva contraseña para la aplicación
   - Usa esta contraseña generada en la variable `EMAIL_PASSWORD`

## Solución de Problemas

- Si recibes errores de autenticación, asegúrate de que estás usando una contraseña de aplicación y no tu contraseña regular
- Verifica que la cuenta no tenga restricciones adicionales de seguridad que bloqueen accesos de aplicaciones menos seguras
- Si cambias a otro proveedor de email, modifica la configuración del transporter en `app/lib/email.ts`
