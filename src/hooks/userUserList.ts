import React, { ChangeEvent, useState } from 'react';

const USER_LIST = [
  { id: 1, name: "鈴木太郎", role: "student", email: "test1@happiness.com", age: 26, postCode: "100-0003", phone: "0120000001", hobbies: ["旅行", "食べ歩き", "サーフィン"], url: "https://aaa.com", studyMinutes: 3000, taskCode: 101, studyLangs: ["Rails", "Javascript"], score: 68 },
  { id: 2, name: "鈴木二郎", role: "mentor", email: "test2@happiness.com", age: 31, postCode: "100-0005", phone: "0120000002", hobbies: ["サッカー", "ランニング", "筋トレ"], url: "https://bbb.com", experienceDays: 1850, useLangs: ["Next.js", "GoLang"], availableStartCode: 201, availableEndCode: 302 },
  { id: 3, name: "鈴木三郎", role: "student", email: "test3@happiness.com", age: 23, postCode: "300-0332", phone: "0120000003", hobbies: ["アニメ", "ゲーム", "旅行"], url: "https://ccc.com", studyMinutes: 125000, taskCode: 204, studyLangs: ["Rails", "Next.js"], score: 90 },
  { id: 4, name: "鈴木四郎", role: "mentor", email: "test4@happiness.com", age: 31, postCode: "100-0005", phone: "0120000004", hobbies: ["食べ歩き", "ランニング", "旅行"], url: "https://ddd.com", experienceDays: 260, useLangs: ["PHP", "Javascript"], availableStartCode: 103, availableEndCode: 408 },
  { id: 5, name: "鈴木五郎", role: "student", email: "test5@happiness.com", age: 22, postCode: "300-0005", phone: "0120000005", hobbies: ["筋トレ", "ランニング"], url: "https://eee.com", studyMinutes: 47800, taskCode: 305, studyLangs: ["Next.js", "Rails"], score: 84 },
  { id: 6, name: "鈴木六郎", role: "mentor", email: "test6@happiness.com", age: 28, postCode: "100-0007", phone: "0120000006", hobbies: ["ゲーム", "サッカー"], url: "https://fff.com", experienceDays: 260, useLangs: ["PHP", "Javascript"], availableStartCode: 101, availableEndCode: 302 },
  { id: 7, name: "鈴木七郎", role: "student", email: "test7@happiness.com", age: 24, postCode: "300-0008", phone: "0120000007", hobbies: ["筋トレ", "ダーツ"], url: "https://ggg.com", studyMinutes: 26900, taskCode: 401, studyLangs: ["PHP", "Rails"], score: 73 },
  { id: 8, name: "鈴木八郎", role: "mentor", email: "test8@happiness.com", age: 33, postCode: "100-0009", phone: "0120000008", hobbies: ["ランニング", "旅行"], url: "https://hhh.com", experienceDays: 6000, useLangs: ["Golang", "Rails"], availableStartCode: 301, availableEndCode: 505 },
];

export const useUserList = () => {
  const [users, setUsers] = useState<any[]>(USER_LIST);
  const [filter, setFilter] = useState("");
  const [currentRole, setCurrentRole] = useState("all");
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [newUser, setNewUser] = useState<any>({
    name: "",
    role: "",
    email: "",
    age: "",
    postCode: "",
    phone: "",
    hobbies: "",
    url: "",
    studyMinutes: "",
    taskCode: "",
    studyLangs: "",
    score: "",
    experienceDays: "",
    useLangs: "",
    availableStartCode: "",
    availableEndCode: ""
  });

  // const event = {
  //   target: {
  //     name: "",
  //     value: ""
  //   }
  // }

  const [sortType, setSortType] = useState({name: "", isAsc: true});

  const handleTabClick = (role: string) => {
    setCurrentRole(role);
    setFilter("");
    setSortBy(null);
  };

  const clearFilter = () => {
    setFilter("");
  };

const addUser = () => {
  // 趣味文字列をカンマで分割して配列に変換
  const hobbiesArray = newUser.hobbies.split(",").map((hobby: string) => hobby.trim());
  const studyLangsArray = newUser.studyLangs.split(",").map((studyLangs: string) => studyLangs.trim());
  const useLangsArray = newUser.useLangs.split(",").map((useLangs: string) => useLangs.trim());

  if (newUser.name && newUser.role && newUser.email && newUser.age && newUser.postCode && newUser.phone && newUser.hobbies && newUser.url) {
    // newUser内のhobbiesは文字列だがhobbiesは元々配列なので
    setUsers([...users, { id: users.length + 1, ...newUser, hobbies: hobbiesArray, studyLangs: studyLangsArray, useLangs: useLangsArray }]);

    // テキスト欄で入力するので文字列
    setNewUser({
      name: "",
      role: "",
      email: "",
      age: "",
      postCode: "",
      phone: "",
      hobbies: "",
      url: "",
      studyMinutes: "",
      taskCode: "",
      studyLangs: "",
      score: "",
      experienceDays: "",
      useLangs: "",
      availableStartCode: "",
      availableEndCode: ""
    });
  } else {
    alert("All fields are required.");
  }
};

  const clearAllUsers = () => {
    setUsers([]);
  };

  const filteredUsers = users.filter((user: any) => {
    if (currentRole === "all" || user.role === currentRole) {
      if (filter === "") return true;
      return user.hobbies.includes(filter) || (user.studyLangs && user.studyLangs.includes(filter)) || (user.useLangs && user.useLangs.includes(filter));
    }
    return false;
  });
  // sortTypeを使用して並び替える
  // この部分の実装がわかりません。
  const sortedUsers = 

  return {
    filter,
    filteredUsers,
    sortedUsers,
    newUser,
    sortType,
    currentRole,
    setFilter,
    setSortType,
    setNewUser,
    clearFilter,
    handleTabClick,
    addUser,
    clearAllUsers,
  }
}
