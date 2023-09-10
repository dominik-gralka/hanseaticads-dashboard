'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

export default function ActiveLead() {
  return (
    <Card className="mt-8">
      <Title>Aktiver Lead</Title>
      <Text>Sie wurden diesem Betrieb zugewiesen</Text>

      <hr className='my-4' />

      <div className='w-full flex flex-row justify-start'>
        <div className='w-full flex flex-col justify-start'>
          <Title>Unternehmen</Title>
          <Text>Dieters Dackdecker</Text>
        </div>
        <div className='w-full flex flex-col justify-start'>
          <Title>Tätigkeit</Title>
          <Text>Dachdecker</Text>
        </div>
        <div className='w-full flex flex-col justify-start'>
          <Title>Telefonnummer</Title>
          <Text>+49 157 1234567</Text>
        </div>
      </div>

      <hr className='my-4' />

      <div className='w-full flex flex-col'>
        <Title>Anmerkungen</Title>
        <div className='w-full h-21 text-sm text-gray-500 bg-gray-50 rounded-md border border-gray-200 mt-3 p-3'>Lorem ipsum dolor sit amet</div>
      </div>

      <hr className='mt-5 mb-10' />

      {/* Verwerfen, Meeting, Interessent Knopf */}

      <div className='w-full flex flex-row justify-between gap-4'>
        <button className='w-1/3 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-md text-white transition-all'>Meeting vereinbaren</button>
        <button className='w-1/3 h-12 bg-gray-800 rounded-md text-white transition-all opacity-40 hover:cursor-not-allowed'>Verschieben</button>
        <button className='w-1/3 h-12 bg-red-500 hover:bg-red-600 rounded-md text-white transition-all'>Absage verzeichnen</button>
      </div>
      
    </Card>
  );
}
