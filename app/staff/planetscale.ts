import 'server-only';
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface User {
  id: Generated<number>;
  email: string;
  role: string;
}

interface Database {
  staff: User;
  // https://github.com/nextauthjs/next-auth/issues/4922
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});

export async function getUserByEmail(email: string) {
  try {
    // Execute a query to fetch the user by email from the "users" table
    const users = await queryBuilder
      .selectFrom('staff')
      .select(['id', 'email', 'role'])
      .where('email', '=', email)
      .execute();

    // Check if a user with the specified email exists
    if (users.length > 0) {
      return true;
    } else {
      return false; // User with the specified email not found
    }
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
}

export async function getUserGroupByEmail(email: string) {
  try {
    // Execute a query to fetch the user by email from the "users" table
    const users = await queryBuilder
      .selectFrom('staff')
      .select(['role'])
      .where('email', '=', email)
      .execute();

    // Check if a user with the specified email exists
    if (users.length > 0) {
      return users[0].role;
    } else {
      return undefined; // User with the specified email not found
    }
  }
  catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
}

export async function addStaffUser(email: string, role: string) {
  try {
    // Execute an INSERT query to add the member to the "staff" table
    await queryBuilder
      .insertInto('staff') // Specify the columns to insert
      .columns(['email', 'role'])
      .values({
        email: email,
        role: role,
      })
      .execute();
    
    console.log('Member inserted successfully.');
  } catch (error) {
    console.error('Error inserting member:', error);
    throw error;
  }
}