import React, { ChangeEvent, useState } from 'react';

import { useUserList } from './hooks/userUserList';

function App() {
  const {
    filter,
    filteredUsers,
    sortedUsers,
    newUser,
    sortType,
    currentRole,
    setFilter,
    setSortType,
    setNewUser,
    handleTabClick,
    clearFilter,
    addUser,
    clearAllUsers,
  } = useUserList()

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick("all")}>All</button>
        <button onClick={() => handleTabClick("student")}>Students</button>
        <button onClick={() => handleTabClick("mentor")}>Mentors</button>
      </div>
      <div>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by hobby or language" />
        <button onClick={clearFilter}>Clear Filter</button>
      </div>
     
      
      {/* オブジェクトを展開しつつnameを設定する */}
      {currentRole === 'student' && (
      <>
        <select onChange={(e) => setSortType({name:"", isAsc:Boolean(e.target.value)})}>
          {/* Booleanは引数に文字が入った時点でtrueになるのでfalseにするには空文字を入れる */}
          <option value="true">昇順</option>
          <option value="">降順</option>
        </select>
        <select onChange={(e) => setSortType({ ...sortType, name: e.target.value })}>
          <option value="studyMinutes">Study Minutes</option>
          <option value="score">Happiness Score</option>
        </select>
      </>
      )}
      {currentRole === 'mentor' && (
      <>
        <select onChange={(e) => setSortType({name:"", isAsc:Boolean(e.target.value)})}>
         {/* Booleanは引数に文字が入った時点でtrueになるのでfalseにするには空文字を入れる */}
         <option value="true">昇順</option>
         <option value="">降順</option>
        </select>
        <select onChange={(e) => setSortType({ ...sortType, name: e.target.value })}>
          <option value="experienceDays">Experience Days</option>
        </select>
      </>
      )}
      <table>
        {/* テーブルヘッダー */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Age</th>
            <th>Post Code</th>
            <th>Phone</th>
            <th>Hobbies</th>
            <th>URL</th>
            <th>Study Minutes</th>
            <th>Task Code</th>
            <th>Study Languages</th>
            <th>Happiness Score</th>
            <th>Experience Days</th>
            <th>Used Languages</th>
            <th>Available Start Code</th>
            <th>Available End Code</th>
          </tr>
        </thead>
        {/* テーブル */}
        <tbody>
          {sortedUsers.map((user: any) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.postCode}</td>
              <td>{user.phone}</td>
              <td>{user.hobbies ? user.hobbies.join(", ") : ""}</td>
              <td>{user.url}</td>
              <td>{user.studyMinutes ? user.studyMinutes : ""}</td>
              <td>{user.taskCode ? user.taskCode : ""}</td>
              <td>{user.studyLangs ? user.studyLangs.join(", ") : ""}</td>
              <td>{user.score ? user.score : ""}</td>
              <td>{user.experienceDays ? user.experienceDays : ""}</td>
              <td>{user.useLangs ? user.useLangs.join(", ") : ""}</td>
              <td>{user.availableStartCode ? user.availableStartCode : ""}</td>
              <td>{user.availableEndCode ? user.availableEndCode : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* User新規追加 */}
      <div>
        <h2>Add New User</h2>
        <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        <input type="text" placeholder="Role" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} />
        <input type="text" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        <input type="text" placeholder="Age" value={newUser.age} onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} />
        <input type="text" placeholder="Post Code" value={newUser.postCode} onChange={(e) => setNewUser({ ...newUser, postCode: e.target.value })} />
        <input type="text" placeholder="Phone" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
        <input type="text" placeholder="Hobbies (comma separated)" value={newUser.hobbies} onChange={(e) => setNewUser({ ...newUser, hobbies: e.target.value })} />
        <input type="text" placeholder="URL" value={newUser.url} onChange={(e) => setNewUser({ ...newUser, url: e.target.value })} />
        <input type="text" placeholder="Study Minutes" value={newUser.studyMinutes} onChange={(e) => setNewUser({ ...newUser, studyMinutes: e.target.value })} />
        <input type="text" placeholder="Task Code" value={newUser.taskCode} onChange={(e) => setNewUser({ ...newUser, taskCode: e.target.value })} />
        <input type="text" placeholder="Study Languages (comma separated)" value={newUser.studyLangs} onChange={(e) => setNewUser({ ...newUser, studyLangs: e.target.value })} />
        <input type="text" placeholder="Happiness Score" value={newUser.score} onChange={(e) => setNewUser({ ...newUser, score: e.target.value })} />
        <input type="text" placeholder="Experience Days" value={newUser.experienceDays} onChange={(e) => setNewUser({ ...newUser, experienceDays: e.target.value })} />
        <input type="text" placeholder="Used Languages (comma separated)" value={newUser.useLangs} onChange={(e) => setNewUser({ ...newUser, useLangs: e.target.value })} />
        <input type="text" placeholder="Available Start Code" value={newUser.availableStartCode} onChange={(e) => setNewUser({ ...newUser, availableStartCode: e.target.value })} />
        <input type="text" placeholder="Available End Code" value={newUser.availableEndCode} onChange={(e) => setNewUser({ ...newUser, availableEndCode: e.target.value })} />
        <button onClick={addUser}>Add User</button>
        <button onClick={clearAllUsers}>Clear All Users</button>
      </div>
    </div>
  );
}

export default App;
