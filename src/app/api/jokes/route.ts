import { NextResponse } from 'next/server';
import { fetchJokes } from "@/lib/jokes";

export async function GET() {
    const jokes = await fetchJokes();
    return NextResponse.json(jokes);
}