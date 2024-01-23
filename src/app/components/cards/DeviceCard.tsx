import { Device } from '@/app/models/Device';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import DeleteDialog from '../dialogs/DeleteDialog';
import EditDeviceDialog from '../dialogs/EditDeviceDialog';
import { AuthenticatedView } from '../AuthenticatedView/AuthenticatedView';

interface DeviceCardProps {
  device: Device;
  setRender: Dispatch<SetStateAction<boolean>>;
}

export default function DeviceCard(props: DeviceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteIsOpen, deleteSetIsOpen] = useState(false);
  const [currentDevice, setCurrentDevice] = useState<Device>(props.device);
  const router = useRouter();

  useEffect(() => {});

  async function deleteDevice() {
    const currentDeviceName: string = currentDevice.name ? currentDevice.name : '';

    if (currentDeviceName == '') {
      router.push('../pages/errors/error');
      return;
    }

    await fetch(process.env.NEXT_PUBLIC_HOST_HOUSEHOLDMANAGEMENT + `/device/${currentDeviceName}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        props.setRender(true);

        if (!res.ok) {
          res.status === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div className="flex items-center justify-center border-2 border-solid border-black">
      <div className="grid grid-rows-3 bg-primary-100 p-5 md:p-7 space-y-3">
        <div className="Wrapper flex justify-center relative">
          <div className="font-bold">{currentDevice.name}</div>
          <AuthenticatedView role="Admin">
            <div className="DeleteButton absolute top-6 right-0">
              <button onClick={() => deleteSetIsOpen(true)} className="PrimaryMedium h-7 w-12 rounded-full bg-red-600 inline-flex justify-center items-center">
                <FaTrash className="text-white"></FaTrash>
              </button>
            </div>
          </AuthenticatedView>
        </div>
        <div className="text-sm sm:text-base text-center mt-2">
          <div>Kategorie: {currentDevice.categoryName}</div>
        </div>
        <AuthenticatedView role="Admin">
          <div className="flex grow space-x-8 justify-center items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="Edit justify-center items-center inline-flex space-x-3 bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow"
            >
              <span className="Bearbeiten text-sm sm:text-base font-medium text-white">Bearbeiten</span>
              <FaEdit class="text-white"></FaEdit>
            </button>
          </div>
        </AuthenticatedView>
      </div>
      <EditDeviceDialog isOpen={isOpen} setIsOpen={setIsOpen} device={currentDevice} setCurrentDevice={setCurrentDevice}></EditDeviceDialog>
      <DeleteDialog isOpen={deleteIsOpen} setIsOpen={deleteSetIsOpen} handleDelete={deleteDevice} deleteDevice={true}></DeleteDialog>
    </div>
  );
}
