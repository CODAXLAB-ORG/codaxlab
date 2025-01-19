import { useState } from "react"

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const openModal2 = () => setIsOpen2(true)
  const closeModal2 = () => setIsOpen2(false)

  return { isOpen, isOpen2, openModal, closeModal, openModal2, closeModal2 }
}