import { getUserGroupByEmail, queryBuilder } from '../../../staff/planetscale';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Get session from next auth

  const session = await getServerSession();

  // Check user group (Restricted access)
  const userGroup = await getUserGroupByEmail(session?.user?.email ?? '');

  if (userGroup !== 'admin') return new Response('Forbidden', { status: 403 });


  try {

    // Get all users
    const users = await queryBuilder
        .selectFrom('staff')
        .select(['id', 'email', 'role'])
        .execute();

    return NextResponse.json(users);

  } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json({ message: 'Error inserting user' }, { status: 500 });
  }

}

