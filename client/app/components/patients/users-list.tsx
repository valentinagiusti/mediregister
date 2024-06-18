import { UsersListProps } from '@/app/types';
import { useState, useEffect, FC } from 'react';
import UserCard from './user-card';

const UsersList: FC<UsersListProps> = ({ users }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' && window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      const currentIsSmallScreen = window.innerWidth < 640;
      setIsSmallScreen(currentIsSmallScreen);
      if (currentIsSmallScreen) {
        setExpandedIds(new Set(users.map(user => user.id)));
      } else {
        setExpandedIds(new Set());
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [users]);

  const toggleExpand = (id: string) => {
    if (isSmallScreen) {
      return;
    }
    setExpandedIds((prevExpandedIds) => {
      const newExpandedIds = new Set(prevExpandedIds);
      if (newExpandedIds.has(id)) {
        newExpandedIds.delete(id);
      } else {
        newExpandedIds.add(id);
      }
      return newExpandedIds;
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isExpanded={expandedIds.has(user.id)}
          onToggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default UsersList;
