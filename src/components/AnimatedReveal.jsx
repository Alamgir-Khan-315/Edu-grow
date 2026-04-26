import { useInView } from '../hooks/useInView'

export default function AnimatedReveal({ children, type = 'reveal', className = '', style = {} }) {
  const { ref, visible } = useInView()
  
  return (
    <div ref={ref} className={`${type} ${visible ? 'visible' : ''} ${className}`} style={style}>
      {children}
    </div>
  )
}
