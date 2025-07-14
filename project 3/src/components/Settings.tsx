import React from "react";

export const Settings = (): JSX.Element => {
  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="font-inter font-semibold text-black text-[32px] mb-4">
          Settings
        </h1>
        <p className="text-gray-600 text-lg">
          Manage your account settings and preferences.
        </p>
      </div>
      
      <div className="max-w-2xl space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                defaultValue="User1254"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue="user1254@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Audio Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Auto-process uploads
              </span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Email notifications
              </span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};