"use client"

import {createContext, ReactNode } from  "react";

type EditContextData = {
    isOpen: boolean;
    onRequestOpen: () => void;
    onRequestClose: () => void;
}

export const EditConst = createContext({} as EditContextData);