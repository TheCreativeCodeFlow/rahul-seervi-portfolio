import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  // This endpoint is no longer used since we switched to EmailJS
  // EmailJS handles email sending directly from the client-side

  return NextResponse.json(
    {
      message: "This endpoint is deprecated. The contact form now uses EmailJS for direct client-side email sending.",
      redirect: "Please use the contact form on the website.",
    },
    { status: 200 },
  )
}
