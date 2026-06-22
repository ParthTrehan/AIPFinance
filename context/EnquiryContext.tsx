import { createContext, useContext, useState, ReactNode } from "react";

interface EnquiryContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <EnquiryContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export const useEnquiry = () => useContext(EnquiryContext);
