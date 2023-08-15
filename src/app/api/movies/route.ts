import { NextResponse } from 'next/server'
 

export async function GET() {
  const res = await fetch('https://mttlioitimpeuzlwsgql.supabase.co/rest/v1/movies', {
    headers: {
      'Content-Type': 'application/json',
      'apiKey': process.env.API_KEY || '',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}