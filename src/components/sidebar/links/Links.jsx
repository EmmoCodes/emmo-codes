import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
}

const Links = ({ setOpen }) => {
  const items = ['Website', 'Skills', 'Portfolio', 'Contact']

  return (
    <motion.div className="links" variants={variants}>
      {items.map(item => (
        <div onClick={() => setOpen(false)}>
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            {item}
          </motion.a>
        </div>
      ))}
    </motion.div>
  )
}

export default Links
