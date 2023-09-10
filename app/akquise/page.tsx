import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';
import ActiveLead from './activeLead';
import NoActiveLead from './noActiveLead';
import { getServerSession } from 'next-auth';
import { hasActiveLead } from './planetscale';

export default async function Akquise() {
  const session = await getServerSession();
  const email = session?.user?.email ?? '';

  const lead = await hasActiveLead(email);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className='pb-5'>
      <Title>Übersicht</Title>
      </div>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        <Card>
          <Title>Leads</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <Metric>0</Metric>
            <Text>Potenzielle Kunden</Text>
          </Flex>
        </Card>
        <Card>
          <Title>Warteschlange</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <Metric>0</Metric>
            <Text>Potenzielle Kunden</Text>
          </Flex>
        </Card>
        <Card>
          <Title>Bearbeitet</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <Metric>0</Metric>
            <Text>Potenzielle Kunden</Text>
          </Flex>
        </Card>
      </Grid>
      <Grid numItemsSm={2} numItemsLg={2} className="gap-6 pt-6">
        <Card>
          <Title>Angeworben</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <Metric>0</Metric>
            <Text>Kunden/Betriebe</Text>
          </Flex>
        </Card>
        <Card>
          <Title>Auszahlung (verbleibend)</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <Metric>0</Metric>
            <Text>€/diesen Monat</Text>
          </Flex>
        </Card>
      </Grid>

      {lead ? <ActiveLead /> : <NoActiveLead />}

      {session ? (
        <div>
          <hr className="mt-8 mb-2" />

          <Grid numItemsSm={2} numItemsLg={2} className="gap-6 pt-6">
            <Card>
              <Title>Kontakt (Telefon)</Title>
              <Text>+49 152 5282 7477</Text>
            </Card>
            <Card>
              <Title>Kontakt (Email)</Title>
              <Text>dominik@hanseaticads.com</Text>
            </Card>
          </Grid>
        </div>
      ) : null}
    </main>
  );
}
