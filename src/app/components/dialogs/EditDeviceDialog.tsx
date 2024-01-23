'use client';

import { Fragment, SetStateAction, Dispatch, useState, FormEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DeviceCategoryValidation, validateDeviceCategoryInput } from '../input/Validation';
import Label from '../input/Label';
import { useRouter } from 'next/navigation';
import { Device } from '@/app/models/Device';
import DeviceCategoryDropdown from '../input/DeviceCategoryDropdown';
import DisplayAttribute from '../input/DisplayAttribute';

interface DialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  device: Device;
  setCurrentDevice: Dispatch<SetStateAction<Device>>;
}

export default function EditDeviceDialog(props: DialogProps) {
  const device = props.device;
  const [formData, setFormData] = useState<Device>({ name: device.name, categoryName: device.categoryName });
  const router = useRouter();
  const [errors, setErrors] = useState({ categoryName: '' });

  const handleInput = (event: any) => {
    const { name, value } = event.currentTarget;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeviceCategoryInput = (selectedValue: any) => {
    setFormData((prevState) => ({
      ...prevState,
      ['categoryName']: selectedValue,
    }));
  };

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const inputValidation: DeviceCategoryValidation = { categoryName: formData.categoryName, setErrors: setErrors };

    if (!validateDeviceCategoryInput(inputValidation)) {
      return;
    }

    setErrors({ categoryName: '' });

    const device: Device = {
      name: formData.name,
      categoryName: formData.categoryName,
    };

    props.setCurrentDevice(device);

    await fetch(process.env.NEXT_PUBLIC_HOST_HOUSEHOLDMANAGEMENT + '/device/update', {
      method: 'POST',
      body: JSON.stringify(device),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          res.status === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
        }
      })
      .catch((e) => {
        console.error(e);
      });

    props.setIsOpen(false);
  }

  return (
    <div>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" open={props.isOpen} onClose={() => props.setIsOpen(false)}>
          <div className="min-h-[50%] max-h-[75%] px-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-4 my-4 space-y-4 md:space-y-8 overflow-hidden text-center align-middle transition-all transform bg-indigo-50 shadow-xl rounded-lg justify-center items-center border-2 border-solid border-black">
                <Dialog.Title>
                  <span className="text-xl sm:text-3xl font-bold pb-4">Gerät bearbeiten</span>
                </Dialog.Title>

                <div className="flex-col space-y-6">
                  <div className="inline-block w-full max-w-md p-6 text-center justify-center items-center">
                    <form method="POST" onSubmit={submitForm} className="flex flex-col items-center space-y-3">
                      <Label name="Name (Keine Änderung möglich)"></Label>
                      <DisplayAttribute name={formData.name}></DisplayAttribute>
                      <Label name="Kategorie"></Label>
                      <DeviceCategoryDropdown handleInput={handleDeviceCategoryInput} deviceCategoryName={formData.categoryName}></DeviceCategoryDropdown>
                      {errors.categoryName && <p className="text-red-600 text-sm sm:text-base">{errors.categoryName}</p>}
                      <div className="flex grow space-x-8 mt-10 justify-center items-center">
                        <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                          <button onClick={() => props.setIsOpen(false)} className="text-center text-white text-base font-medium leading-normal">
                            Abbrechen
                          </button>
                        </div>
                        <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                          <button type="submit" className="text-center text-white text-base font-medium leading-normal">
                            <span className="Text text-center text-white text-base font-medium leading-normal">Änderungen übernehmen</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
