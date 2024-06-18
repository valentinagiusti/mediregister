import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './components/fonts';
import Image from 'next/image';
import MediRegisterLogo from './components/mediregister-logo';

export default function Page() {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="flex h-20 md:h-52 bg-blue-500 p-4 items-end">
        <MediRegisterLogo />
      </div>
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="flex flex-col justify-center gap-6 bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to MediRegister.</strong> This is the place for storing your patients&apos; data.
          </p>
          <Link
            href="/patients"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>See All Patients</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/happy.jpeg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="happy people enjoying life"
          />
        </div>
      </div>
    </main>
  );
}
