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

    // Check if a user with the specified email exists
    const users = await queryBuilder
      .selectFrom('staff')
      .select(['id', 'email', 'role'])
      .where('email', '=', email)
      .execute();

    if (users.length > 0) {
      return NextResponse.json({ message: email + ' existiert bereits' });
    }

    // Insert the user data into the database
    await queryBuilder
      .insertInto('staff')
      .values(
        {
          email: email,
          role: role,
        }
      )
      .execute();

      return NextResponse.json({ message: email + ' erfolgreich hinzugefügt' });
  } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json({ message: 'Error inserting user' }, { status: 500 });
  }

}

