interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  queryType: string;
  message: string;
}

export function generateEmailTemplate({
  name,
  email,
  phone,
  queryType,
  message,
}: EmailTemplateProps): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
    .text{
    color: #0668E1;
    font-weight: 600;
    }
    .message{
        border: 1px solid #E0E0E0;
        padding: 10px;
        
    }
    </style>
  </head>
  <body class="">
    <div className="max-w-xl mx-auto bg-white mt-10 rounded-xl shadow-lg overflow-hidden">
      <div class="bg-blue-600 text-white text-center py-6">
        <h2 class="text-2xl font-semibold">Form Message</h2>
      </div>
      <div class="p-6 space-y-3">
        <p>Name: <span class="text">${name}</span> </p>
        <p>Email:<span  class="text"> ${email}</span></p>
        <p>Phone:<span class="text"> ${phone}</span></p>
        <p>Query Type:<span class="text"> ${queryType}</span></p>
        <div class="">
          <p class="message">${message}</p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}
