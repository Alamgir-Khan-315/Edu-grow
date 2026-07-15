import { createContext, useContext, useState } from 'react'
import BookCallModal from '../components/BookCallModal'

const BookingContext = createContext(() => {})

// Call this hook in any component, then use openBooking() on a button
export const useBooking = () => useContext(BookingContext)

export function BookingProvider({ children, theme }) {
  const [open, setOpen] = useState(false)
  return (
    <BookingContext.Provider value={() => setOpen(true)}>
      {children}
      <BookCallModal open={open} onClose={() => setOpen(false)} theme={theme} />
    </BookingContext.Provider>
  )
}
