'use client';

import Navigation from '../../components/navigation/NavBar';
import DeviceCard from '../../components/cards/DeviceCard';
import { FaPlusCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import AddDeviceCatalog from '@/app/components/dialogs/AddDeviceDialog';
import { Device } from '@/app/models/Device';
import { useRouter } from 'next/navigation';
import { AuthenticatedView } from '@/app/components/AuthenticatedView/AuthenticatedView';

export default function Devices() {
  let [isOpen, setIsOpen] = useState(false);
  const [render, setRender] = useState(true);
  const [displayData, setDisplayData] = useState<Device[]>([{ name: '', categoryName: '' }]);
  const router = useRouter();

  const fetchDevices = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_HOST_HOUSEHOLDMANAGEMENT + '/device/get', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }).catch((e) => {
        throw e;
      });

      if (res.ok) {
        const data = await res.json();
        setDisplayData(data);
        return 200;
      }
      return res.status;
    } catch (error) {
      return 500;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (render) {
          const devicesStatus: number = await fetchDevices();

          if (devicesStatus != 200) {
            devicesStatus === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
          }

          setRender(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [render, router]);

  return (
    <div className="CurrentDevices">
      <header>
        <Navigation />
      </header>
      <div className="flex-col flex justify-center items-center space-y-8 mb-5">
        <div className="text-xl sm:text-2xl md:text-4xl font-bold">Deine Geräte</div>
        <div
          className={
            displayData.length > 2 ? 'flex-col flex justify-center items-center space-y-8 mb-5' : 'flex-col flex md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 mb-5'
          }
        >
          {displayData.map((d) => (
            <DeviceCard key={d.name} device={d} setRender={setRender}></DeviceCard>
          ))}
        </div>
        <AuthenticatedView role="Admin">
          <div className="flex justify-center items-center">
            <div className="ActiveButton mt-8 inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <button onClick={() => setIsOpen(true)} className="Default text-white text-sm sm:text-base">
                Neues Gerät hinzufügen{' '}
              </button>
              <FaPlusCircle className="text-white"></FaPlusCircle>
            </div>
          </div>
          <AddDeviceCatalog isOpen={isOpen} setIsOpen={setIsOpen} setRender={setRender}></AddDeviceCatalog>
        </AuthenticatedView>
      </div>
    </div>
  );
}
