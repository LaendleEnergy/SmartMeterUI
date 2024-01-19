'use client';

import Navigation from '../../components/navigation/NavBar';
import Link from 'next/link';
import DeviceDropdown from '@/app/components/input/DeviceDropdown';
import { useState } from 'react';
import { Device } from '@/app/models/Device';

export default function DeviceOverview() {
  const [formData, setFormData] = useState<Device>({ name: '', categoryName: '' });

  const handleInput = (selectedValue: any) => {
    setFormData((prevState) => ({
      ...prevState,
      ['pricingPlan']: selectedValue.name,
    }));
  };

  return (
    <div className="DevicesOverview">
      <header>
        <Navigation />
      </header>
      <div className="flex-col flex justify-center items-center space-y-8 mb-5">
        <div className="space-y-2">
          <div className="text-xl sm:text-2xl md:text-4xl font-bold">Geräte</div>
        </div>
        <div className="DeviceOverview space-y-5 sm:inline-flex sm:space-x-5 sm:space-y-0 ml-5 mr-5 justify-center items-center text-center">
          <div className="w-80 h-24 sm:w-96 sm:h-32 border-2 bg-indigo-50 flex-col border-black border-solid">
            <span className="text-base sm:text-lg font-bold ">Schlechteste Energieineffizienz</span>
            <br />
            <span className="text-sm sm:text-base">
              Kühlschrank (200 kWh (Jahr) <br />
              mehr als Durchschnitt)
            </span>
          </div>
          <div className="w-80 h-24 sm:w-96 sm:h-32 border-2 bg-indigo-50 flex-col border-black border-solid">
            <span className="text-base sm:text-lg font-bold">Zweit-schlechteste Energieeffizienz</span>
            <br />
            <span className="text-sm sm:text-base">
              Haarföhn (300 kWh (Jahr) <br />
              mehr als Durchschnitt)
            </span>
          </div>
        </div>
        <div className="Trend ml-5 mr-5">
          <div className="justify-center items-center flex flex-col sm:inline-flex space-x-2 space-y-2">
            <span className="text-base sm:text-lg font-bold">Energieeffizienz von:</span>
            <DeviceDropdown handleInput={handleInput} deviceName={formData.name}></DeviceDropdown>
          </div>
        </div>
        <div className="Fazit border-2 bg-indigo-50 border-black border-solid p-2 ml-5 mr-5">
          <span className="text-sm sm:text-base font-bold">
            Fazit:
            <br />
          </span>
          <span className="text-sm sm:text-base">Dein Gerät verbraucht 200 kWh (Jahr) mehr als vergleichbare Geräte.</span>
        </div>
        <div className="inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
          <Link href="./devices">
            <span className="text-center text-white text-sm sm:text-base font-medium leading-normal">Geräte verwalten</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
