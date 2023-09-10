import { getUserGroupByEmail, queryBuilder } from '../../../staff/planetscale';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Get session from next auth
  const session = await getServerSession();
  const { email, role } = await req.json();
  // Check user group (Restricted access)
  const userGroup = await getUserGroupByEmail(session?.user?.email ?? '');
  if (userGroup !== 'admin') return new Response('Forbidden', { status: 403 });
  try {
    // Insert the user data into the database
    await queryBuilder.deleteFrom('staff').where('email', '=', email).execute();
    // OK and redirect to the index page
    return NextResponse.json({ message: email + ' erfolgreich entfernt' });

  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { message: 'Error deleting user' },
      { status: 500 }
    );
  }
}
