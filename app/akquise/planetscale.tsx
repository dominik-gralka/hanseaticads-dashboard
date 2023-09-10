import 'server-only';
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface Lead {
  id: Generated<number>;
  company: string;
  field: string;
  phone: string;
  notes?: string;
  agent: string;
}

interface Database {
    active_leads: Lead;
  // https://github.com/nextauthjs/next-auth/issues/4922
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});

// Check if agent has an active lead
export async function hasActiveLead(agent: string) {
    const result = await queryBuilder
        .selectFrom('active_leads')
        .select(['id', 'company', 'field', 'phone', 'notes', 'agent'])
        .where('agent', '=', agent)
        .execute();

    if (result.length < 1) {
        return false;
    } else {
        return result[0];
    }

}
