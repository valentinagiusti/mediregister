"use client"
import useSWR from 'swr';
import UsersList from '../components/patients/users-list';
import { fetcher } from '../lib/fetcher';

const PatientsPage = () => {
  const { data: users, error } = useSWR(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users`, fetcher);

  if (error) {
    return <div>Failed to load.</div>;
  }
  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xl font-semibold my-4">Patients</h1>
      <UsersList users={users} />
    </div>
  );
};

export default PatientsPage;
