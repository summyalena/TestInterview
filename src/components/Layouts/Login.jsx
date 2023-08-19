import React from 'react'

import Link from 'next/link'
import styles from '../../app/page.module.css'
import Image from 'next/image';

import imageone from '../../../public/testimage.JPG'

function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.text}>
      <h2>We have missed you</h2>
      <p>Kindly signin and get first access to the very best, community and unlock more opportunities.</p>
      <form>
        <label>Email</label>
        <input type='email'/>
        <label>Password</label>
        <input type='password'/>
        <button>Login</button>
        <p>Forgot username or password?</p>
        <p>Dont have an account? <span><Link href="/">Sign up </Link></span></p>
      </form>
      </div>
       <Image className={styles.image} src={imageone} alt=""/>
    </section>
  )
}

export default Login