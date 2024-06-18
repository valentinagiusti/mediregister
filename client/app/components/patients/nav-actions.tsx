"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const NavActions: FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center my-4 border-gray-200 pb-4">
      <button
        onClick={() => router.push('/')}
        className="mx-4 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
      >
        Go Back
      </button>
      <Link href="/patients/new">
        <span className="mx-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add New Patient
        </span>
      </Link>
    </div>
  );
};

export default NavActions;
