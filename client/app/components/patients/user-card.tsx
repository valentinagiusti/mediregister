import { UserCardProps } from '@/app/types';
import { FC } from 'react';
import Image from 'next/image';

const UserCard: FC<UserCardProps> = ({ user, isExpanded, onToggleExpand }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <button
        onClick={() => onToggleExpand(user.id)}
        className="w-full text-left p-5 focus:outline-none bg-blue-500 text-white hover:bg-blue-600"
      >
        <div className="flex items-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL_BACKEND}${user.documentPhoto}`}
            alt={`${user.firstName} ${user.lastName}`}
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
      </button>
      {isExpanded && (
        <div className="p-5 bg-white">
          <p>
            <strong>Address:</strong> {user.address}
          </p>
          <p>
            <strong>Phone:</strong> {user.phoneNumber}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
