// Route Handlers to Handle Contact Form Request

import { mailOptions, transporter } from "@/app/emails/client";
import { replaceMergeTags, stripHTMLTags } from "@/app/emails/helpers";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// For CloudFlare deploy
export const runtime = "edge";

export async function POST(request) {
    const data = await request.json(); //Our form data as json

    // Get HTML Template
    const htmlFilePath = path.join(process.cwd(), 'app/emails', 'contact-form.html' )
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8', (err, htmlContent) => {
        if(err) { 
            console.log('Error reading HTML File ', err);
            return
        }
    })

    // Replace Merge Tags with Values
    htmlContent = replaceMergeTags(data, htmlContent)
    const plainTextContent = stripHTMLTags(htmlContent)

    // Send Email
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: 'New Contact Inquiry',
            text: plainTextContent,
            html: htmlContent
        })

        return NextResponse.json({success: true})
    } catch (error) {
        console.error(error)
        return NextResponse.json({error: error.message}, {status: error.status})
    }
}