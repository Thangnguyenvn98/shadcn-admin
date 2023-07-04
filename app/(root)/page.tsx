"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"
import { useEffect } from "react";

export default function SetupPage() {
    //Seperate it out so it works better in the useEffect as the original one will not be working nicely
    const onOpen = useStoreModal((state)=> state.onOpen);
    const isOpen = useStoreModal((state)=> state.isOpen);

    useEffect(()=>{
      if(!isOpen) {
        onOpen();
      }
    }
    ,[isOpen, onOpen])

    return (
      <div className="p-4">
        Root Page
      </div>
    )
  }
  