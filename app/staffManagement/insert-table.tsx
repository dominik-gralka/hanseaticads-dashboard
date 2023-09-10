'use client';

import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Button,
  Card
} from '@tremor/react';
import axios from 'axios';

export default function InsertTable() {
  // State for input fields
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('basic'); // Default role is 'basic'

  const [response, setResponse] = useState(''); // Response from server
  const [error, setError] = useState(false); // Error from server

  // Function to handle email input change
  function handleEmailChange(emailValue: string) {
    setEmail(emailValue);
  }

  // Function to handle role select change
  function handleRoleChange(roleValue: string) {
    setRole(roleValue);
  }

  // Function to add a new user to the list
  async function addUser() {
    if (email && role) {
      const data = {
        email: email,
        role: role
      };

      const url_addUser = window.location.origin + '/api/staffManagement/addStaff'

      console.log(url_addUser)

      let a_response = await axios.post(
        url_addUser,
        data
      );
      setResponse(a_response.data.message);
    }
  }

  // Function to remove a user from the list
  async function removeUser() {
    if (email && role) {
      const data = {
        email: email,
        role: role
      };

      const url_removeUser = window.location.origin + '/api/staffManagement/removeStaff'

      let a_response = await axios.post(
        url_removeUser,
        data
      );
      setResponse(a_response.data.message);
    }
  }

  async function getAllUsers() {

    const url_getStaff = window.location.origin + '/api/staffManagement/getStaff'

    let a_response = await axios.get(
      'http://localhost:3000/api/staffManagement/getStaff'
    );

    return a_response.data

  }

  return (
    <div>
      {response && (
        <div className="h-10 w-full rounded-md border bg-white font-mono border-gray-200 pl-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm flex justify-center items-center mt-5">
          {response}
        </div>
      )}
      <Card className="mt-6">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Gruppe</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Text>
                <input
                  className="h-10 block w-full rounded-md border border-gray-200 pl-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  placeholder="example@hanseaticads.com"
                  required
                />
              </Text>
            </TableCell>
            <TableCell>
              <select
                className="h-10 block w-full rounded-md border border-gray-200 pl-3 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={role}
                onChange={(e) => handleRoleChange(e.target.value)}
                required
              >
                <option value="basic">Standard</option>
                <option value="admin">Admin</option>
              </select>
            </TableCell>
            <TableCell>
              <div className="flex gap-3">
                <button
                  className="text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-full h-10 flex items-center justify-center whitespace-nowrap"
                  onClick={addUser}
                >
                  Nutzer hinzufügen
                </button>
                <button
                  className="text-white text-[13px] font-mono bg-red-700 hover:bg-gray-700 transition-all rounded-md w-full h-10 flex items-center justify-center whitespace-nowrap"
                  onClick={removeUser}
                >
                  Nutzer entfernen
                </button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </Card>
    </div>
  );
}
