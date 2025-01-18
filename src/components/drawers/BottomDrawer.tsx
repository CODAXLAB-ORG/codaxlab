// import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BottomDrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl z-50 overflow-hidden max-h-[70vh]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="p-4 lg:px-[4rem] flex flex-col justify-center items-center">
              <button
                onClick={onClose}
                className="absolute top-4 w-full px-20 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close drawer"
              >
                <div className='flex items-center justify-center w-full'>
                    <div className='w-[6rem] md:w-[13rem] h-2 bg-gray-500 rounded-full'></div>
                </div>
              </button>
              <div className="mt-6 w-full">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BottomDrawer
