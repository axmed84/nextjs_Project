import { readData, writeData } from "@/helper/utility";
import { NextResponse } from "next/server";
import { resolve } from "styled-jsx/css";

export async function GET(request) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    const getData = await readData()
    
    return NextResponse.json(getData, { status: 200})
}

export async function POST(request) {
    
    const posts = await readData()

    const { title, body } = await request.json()

    const newPost = {id: posts.length + 1, title, body}

    posts.push(newPost)
    await writeData(posts)

    return NextResponse.json(newPost, { status: 201 })
    
}