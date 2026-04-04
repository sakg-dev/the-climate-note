import { joinReqType } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(payload: NextRequest) {
    const { emailId } = (await payload.json()) as joinReqType
    // Here we will be appending the emailId in db but rn simulating it through setTimeOut
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })
    return NextResponse.json({ success: true })
}