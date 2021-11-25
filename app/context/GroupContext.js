import React, { createContext, useState, useContext, useEffect } from 'react';

export const GroupContext = createContext();

export const GroupContextProvider = (props) => {
  const [groupData, setGroupData] = useState({});

  return (
    <GroupContext.Provider value={{ groupData, setGroupData }}>
      {props.children}
    </GroupContext.Provider>
  )
}

export const useGroup = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error('useGroup must be used within an GroupContextProvider');
  }
  return context;
};


