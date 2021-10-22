import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { useState, useContext } from 'react';

const  AppContext = React.createContext();


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
  <AppContext.Provider value={{
    isSidebarOpen,isModalOpen,openSidebar,
    closeSidebar,openModal,closeModal}}>
      <Home />
      <Modal />
      <Sidebar />
  </AppContext.Provider>
    </>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default App
