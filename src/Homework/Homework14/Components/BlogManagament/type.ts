import type { Dispatch, SetStateAction } from "react"

export interface CreateText{
   name:string 
   lastName:string
};

export interface MainCardContextType1{
    info:Message|undefined
    onDataChange:Dispatch<SetStateAction<Message|undefined>>
};