import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../lib/planetscale';
import Search from './search';
import UsersTable from './table';
import { getServerSession } from 'next-auth';
import { getUserGroupByEmail } from './staff/planetscale';
import DummyTable from './components/dummyTable';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const session = await getServerSession();
  const email = session?.user?.email ?? '';

  const userGroup = await getUserGroupByEmail(email);

  const search = searchParams.q ?? '';
  const users = await queryBuilder
    .selectFrom('users')
    .select(['id', 'name', 'username', 'email'])
    .where('name', 'like', `%${search}%`)
    .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Bestandskunden{' '}
        {/* Show text is not authorized */}
        {userGroup !== 'admin' && <a className='inline text-red-700'>(Keine Zugriffsberechtigung)</a>}
      </Title>
      <Text>Eine Liste aller aktiven Bestandskunden von Hanseatic Ads</Text>

      <Search />
      <Card className="mt-6">
        {(userGroup === 'admin' && (
          <div>
            <UsersTable users={users} />
          </div>
        )) || (
          <div>
            <DummyTable />
          </div>
        )}
      </Card>
    </main>
  );
}
