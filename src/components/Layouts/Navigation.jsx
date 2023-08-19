import Link from 'next/link';
import React from 'react';
import styles from '../../app/page.module.css'

function Navigation() {

  const links = [
    {
      id: 1,
      name: 'Register',
      link: '/register'
    },
    {
      id: 2,
      name: 'Login',
      link: '/login'
    },
    
  ]
  return (
    <header className={styles.header}>
      <h1>naira<span>refill</span></h1>
      <nav>
        {links.map((link)=> (
          <Link key={link.id} href={link.link}>{link.name}</Link>
        ))}
      </nav>
      
    </header>
  )
}

export default Navigation;