import { Card, Title, Text } from '@tremor/react';
import { getUserByEmail, queryBuilder } from './planetscale';
import Search from '../search';
import UsersTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const users = await queryBuilder
    .selectFrom('staff')
    .select(['id', 'email', 'role'])
    .where('email', 'like', `%${search}%`)
    .execute();

  getUserByEmail('gralka.dominik@gmail.com');

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>

    </main>
  );
}