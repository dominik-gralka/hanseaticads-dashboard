import { Card, Title, Text } from '@tremor/react';
import InsertTable from './insert-table';

export const dynamic = 'force-dynamic';

export default async function IndexPage() {

  

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Mitarbeiterverwaltung</Title>
      <Text>
        Übersicht aller Mitarbeiter:innen, die Zugriff auf das Dashboard haben.
      </Text>

      <InsertTable />

    </main>
  );
}