'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

export default function NoActiveLead() {
  return (
    <Card className="mt-8">
      <div className='flex flex-row justify-between'>
        <div>
          <Title>Aktiver Lead</Title>
          <Text>Sie sind aktuell keinem Betrieb zugewiesen</Text>
        </div>
        <button className='w-auto h-12 bg-emerald-600 hover:bg-emerald-700 rounded-md text-white transition-all px-10'>Kontakt anfragen</button>
      </div>

      <div className="blur-md select-none">
        <hr className="my-4" />

        <div className="w-full flex flex-row justify-start">
          <div className="w-full flex flex-col justify-start">
            <Title>Unternehmen</Title>
            <Text>Dieters Dackdecker</Text>
          </div>
          <div className="w-full flex flex-col justify-start">
            <Title>Tätigkeit</Title>
            <Text>Dachdecker</Text>
          </div>
          <div className="w-full flex flex-col justify-start">
            <Title>Telefonnummer</Title>
            <Text>+49 157 1234567</Text>
          </div>
        </div>

        <hr className="my-4" />

        <div className="w-full flex flex-col">
          <Title>Anmerkungen</Title>
          <div className="w-full h-21 text-gray-500 bg-gray-50 rounded-md border border-gray-200 mt-3 p-3">
            Lorem ipsum dolor sit amet
          </div>
        </div>

        <hr className="my-4" />
      </div>
    </Card>
  );
}
