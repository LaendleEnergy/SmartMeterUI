'use client';

import Navigation from '../../components/navigation/NavBar';
import { FaPlusCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import MemberCard from '@/app/components/cards/MemberCard';
import AddMemberDialog from '../../components/dialogs/AddMemberDialog';
import { Member } from '@/app/models/Member';
import { useRouter } from 'next/navigation';
import { AuthenticatedView } from '@/app/components/AuthenticatedView/AuthenticatedView';

export default function Members() {
  const [render, setRender] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [displayData, setDisplayData] = useState<Member[]>([{ name: 'Name', dateOfBirth: 'Geburtsdatum (Optional)', gender: 'Geschlecht (Optional)', id: '' }]);
  const router = useRouter();

  const fetchMemberData = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_HOST_ACCOUNTMANAGEMENT + '/member/get', {
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
          const memberStatus: number = await fetchMemberData();

          if (memberStatus != 200) {
            memberStatus === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
          }

          setRender(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [render, router]);

  return (
    <div className="Members">
      <header>
        <Navigation />
      </header>
      <div
        className={
          displayData.length > 2 ? 'flex-col flex justify-center items-center space-y-8 mb-5' : 'flex-col flex md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 mb-5'
        }
      >
        {displayData.map((m) => (
          <MemberCard key={m.name} member={m} setRender={setRender}></MemberCard>
        ))}
      </div>
      <AuthenticatedView role="Admin">
        <div className="flex justify-center items-center">
          <div className="ActiveButton mt-8 inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
            <button onClick={() => setIsOpen(true)} className="Default text-white text-sm sm:text-base">
              Neues Mitglied hinzufügen{' '}
            </button>
            <FaPlusCircle className="text-white"></FaPlusCircle>
          </div>
        </div>
      </AuthenticatedView>
      <AddMemberDialog isOpen={isOpen} setIsOpen={setIsOpen} setRender={setRender}></AddMemberDialog>
    </div>
  );
}
