import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Favourite() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "100%" }}
        >
            Favourite
            <Link to={"/"}>FAV</Link>
        </motion.div>
    )
}
