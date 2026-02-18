interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  tier: string;
}

export function generateEmailTemplate({
  name,
  email,
  phone,
  company_name,
  tier,
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
        <p>Query Type:<span class="text"> ${company_name}</span></p>
                <p>Tier:<span class="text"> ${tier}</span></p>

      </div>
    </div>
  </body>
  </html>
  `;
}
