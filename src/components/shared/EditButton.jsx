import Image from "next/image"
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useOnClickOutside from "@hooks/useOnClickOutside";

const EditButton = ({type, className=''}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setShowMenu(false));

  const menuVariations = {
    closed: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
            delay: 0,
        }
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        }
    }
}

  return (
    <div className="relative">
        <button onClick={() => setShowMenu(!showMenu)}>
            <Image src="/icon-vertical-ellipsis.svg" height={16} width={4} />
        </button>
        <motion.div
            ref={menuRef}
            variants={menuVariations}
            initial="closed"
            animate={showMenu ? "open" : "closed"}
            className={`${className} space-y-4 absolute body-lg rounded p-4 w-48 shadow-main capitalize bg-white dark:bg-veryDarkGrey`}
        >
            <p className="text-mediumGrey">Edit {type}</p>
            <p className="text-mainRed">Delete {type}</p>
        </motion.div>
    </div>
  )
}
export default EditButton