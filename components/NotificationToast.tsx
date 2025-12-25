
import React from 'react';
import { Notification } from '../types';

interface Props {
  notification: Notification;
}

const NotificationToast: React.FC<Props> = ({ notification }) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-[100] animate-in slide-in-from-top-4 duration-300">
      <div className={`glass p-4 rounded-2xl flex items-center space-x-4 border border-white/10 shadow-2xl ${
        notification.type === 'success' ? 'border-emerald-500/30' : 
        notification.type === 'warning' ? 'border-amber-500/30' : 'border-cyan-500/30'
      }`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          notification.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 
          notification.type === 'warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-cyan-500/10 text-cyan-400'
        }`}>
          {notification.type === 'success' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">DEMO</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span className="text-xs text-gray-400">{new Date(notification.timestamp).toLocaleTimeString()}</span>
          </div>
          <p className="text-sm font-medium text-white">{notification.message}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;
