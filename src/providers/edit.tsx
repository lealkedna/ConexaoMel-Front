"use client"

import {createContext, ReactNode, useState} from  "react";

type EditContextData = {
    isOpen: boolean;
    onRequestOpen: () => void;
    onRequestClose: () => void;
}

type EditProviderProps = {
    children: ReactNode;
}
export const EditContext = createContext({} as EditContextData);

export function EditProvider({ children }: EditProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    function onRequestOpen() {
        setIsOpen(true);
    };

    function onRequestClose() {
        setIsOpen(false);
    };

    return (
        <EditContext.Provider 
            value={{ 
                isOpen, 
                onRequestOpen, 
                onRequestClose 
            }}
            >
            {children}
        </EditContext.Provider>
    );
}