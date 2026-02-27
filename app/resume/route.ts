import { redirect } from 'next/navigation';
import { profile } from '@/lib/data';

export async function GET() {
    redirect(profile.links.resume);
}
