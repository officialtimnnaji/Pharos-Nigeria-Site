import React from "react";
import MembersList from "../components/MembersList";

const Members = () => {
  return (
    <div className="min-h-screen bg-pharosDark text-nigeriaWhite px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Pharos Nigeria Members</h1>
      <MembersList />
    </div>
  );
};

export default Members;
