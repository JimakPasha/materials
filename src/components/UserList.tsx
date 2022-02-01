import React, {FC} from 'react'
import UserItem from './UserItem';
import { IUser } from '../types/types';

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <ul>
           {users.map((user) => {
               return (
                <UserItem key={user.id} user={user}/>
               )
           })} 
        </ul>
    );
};

export default UserList;
