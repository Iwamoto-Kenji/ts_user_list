import React, { ChangeEvent, useState } from 'react';

import { useUserList } from './hooks/userUserList';

function App() {
  const {
    filter,
    filteredUsers,
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
    onChangeNewUser
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
        <select onChange={(e) => setSortType({ name: e.target.value, isAsc: sortType.isAsc })}>
          <option value="studyMinutes">Study Minutes</option>
          <option value="score">Happiness Score</option>
        </select>
        <select onChange={(e) => setSortType({ name: sortType.name, isAsc: e.target.value === "true" })}>
          <option value="true">昇順</option>
          <option value="">降順</option>
        </select>
      </>
    )}
      {currentRole === 'mentor' && (
    <>
      <select onChange={(e) => setSortType({ name: e.target.value, isAsc: sortType.isAsc })}>
        <option value="experienceDays">Experience Days</option>
      </select>
      <select onChange={(e) => setSortType({ name: "experienceDays", isAsc: e.target.value === "true" })}>
        <option value="true">昇順</option>
        <option value="">降順</option>
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
          {filteredUsers.map((user: any) => (
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
      <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={onChangeNewUser} />
      <input type="text" name="role" placeholder="Role" value={newUser.role} onChange={onChangeNewUser} />
      <input type="text" name="email" placeholder="Email" value={newUser.email} onChange={onChangeNewUser} />
      <input type="text" name="age" placeholder="Age" value={newUser.age} onChange={onChangeNewUser} />
      <input type="text" name="postCode" placeholder="Post Code" value={newUser.postCode} onChange={onChangeNewUser} />
      <input type="text" name="phone" placeholder="Phone" value={newUser.phone} onChange={onChangeNewUser} />
      <input type="text" name="hobbies" placeholder="Hobbies (comma separated)" value={newUser.hobbies} onChange={onChangeNewUser} />
      <input type="text" name="url" placeholder="URL" value={newUser.url} onChange={onChangeNewUser} />
      <input type="text" name="studyMinutes" placeholder="Study Minutes" value={newUser.studyMinutes} onChange={onChangeNewUser} />
      <input type="text" name="taskCode" placeholder="Task Code" value={newUser.taskCode} onChange={onChangeNewUser} />
      <input type="text" name="studyLangs" placeholder="Study Languages (comma separated)" value={newUser.studyLangs} onChange={onChangeNewUser} />
      <input type="text" name="score" placeholder="Happiness Score" value={newUser.score} onChange={onChangeNewUser} />
      <input type="text" name="experienceDays" placeholder="Experience Days" value={newUser.experienceDays} onChange={onChangeNewUser} />
      <input type="text" name="useLangs" placeholder="Used Languages (comma separated)" value={newUser.useLangs} onChange={onChangeNewUser} />
      <input type="text" name="availableStartCode" placeholder="Available Start Code" value={newUser.availableStartCode} onChange={onChangeNewUser} />
      <input type="text" name="availableEndCode" placeholder="Available End Code" value={newUser.availableEndCode} onChange={onChangeNewUser} />
      <button onClick={addUser}>Add User</button>
      <button onClick={clearAllUsers}>Clear All Users</button>
      </div>
    </div>
  );
}

export default App;
