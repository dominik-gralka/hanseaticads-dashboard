import { Card, Title, Text } from '@tremor/react';
import { getUserByEmail, queryBuilder } from './planetscale';
import Search from '../search';
import UsersTable from './table';
import InsertTable from '../staffManagement/insert-table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const users = await queryBuilder
    .selectFrom('staff')
    .select(['id', 'email', 'role'])
    .where('email', 'like', `%${search}%`)
    .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Mitarbeiterverwaltung</Title>
      <Text>
        Übersicht aller Mitarbeiter:innen, die Zugriff auf das Dashboard haben.
      </Text>
      <div className="w-full flex justify-between items-center">
        <Search />
        <a
          className="text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[220px] h-10 flex items-center justify-center whitespace-nowrap mt-5"
          href="./staffManagement"
          rel="noreferrer"
        >
          Bearbeiten
        </a>
      </div>
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}