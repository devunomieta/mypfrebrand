import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// Point a Sanity webhook (Manage → API → Webhooks) at:
//   https://your-domain.com/api/revalidate?secret=YOUR_SECRET
// Trigger on: Create, Update, Delete, for the "post" document type.
// Set REVALIDATE_SECRET to the same value in your environment variables.
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  revalidatePath('/blog');
  revalidatePath('/blog/[slug]', 'page');
  revalidatePath('/');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
