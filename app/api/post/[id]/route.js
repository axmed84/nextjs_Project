import { readData, writeData } from "@/helper/utility"
import { NextResponse } from "next/server"

export async function GET(request, {params}) {

    const {id} = params

    const posts = await readData()

    const post = posts.find(post => post.id === parseInt(id))

    if(!post) {
        return NextResponse.json({error: "Unknown post"}, {status:400})
    }

    return NextResponse.json(post, {status: 200})
}

export async function PUT(request, {params}) {
    const posts = await readData()


    const { id } = params;

    const { title, body } = await request.json()

    const postIndex = posts.findIndex(post => post.id === parseInt(id))

    if(postIndex === -1)  {
        return NextResponse.json({error: "Unknown post"}, {status:400})
    }

    posts[postIndex] = {...posts[postIndex], title, body}

    await writeData(posts)

    return NextResponse.json(posts[postIndex], { status: 201 })
}

export async function DELETE(request, {params}) {

    const {id} = params

    const posts = await readData()

    const postIndex = posts.findIndex(post => post.id === parseInt(id))

    if(postIndex === -1)  {
        return NextResponse.json({error: "Unknown post"}, {status:400})
    }

    posts.splice(postIndex, 1);

    await writeData(posts)
    return NextResponse.json("deleted", { status: 201 })
}