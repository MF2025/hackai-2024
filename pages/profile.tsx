import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Appbar from './Appbar'
import Footer from './Footer';
import Snowfall from 'react-snowfall';
import { Coda } from 'coda-js';

export default function Profile() {
  {/*for the appbar*/}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const [inputtedUsername, setUsername] = useState('');
  const [inputtedPassword, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  //for hamburger on appbar
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //for closing hamburger on appbar
  const handleClose = () => {
    setAnchorEl(null);
  };

  //for profile/login button on appbar
  const handleProfileClick = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  //for other appbar buttons
  const handleItemClick = (secName) => {
    setAnchorEl(null);
    document.getElementById(secName).scrollIntoView()
  };

  const handleLogin = async (e) => {
    try {
      const CodaAPI = new Coda(process.env.CODA_AUTH_API_KEY); 
      const doc = await CodaAPI.getDoc('jyEelX25ju'); // Grab Event Tracking Doc from Coda API using the Doc ID at https://coda.io/developers/apis/v1
      const table = await doc.getTable('Submissions'); // Grab the actual table from the doc
      const rows = await table.listRows({ useColumnNames: true, valueFormat: 'rich' }); // Grab all the event entries in the doc
      
      console.log('hi');
      for (let i = 0; i < rows.length; i++) {
        console.log('hi1');
        for (const netID of rows[i].values['Net ID'])
          if (netID == inputtedUsername) {
            if (rows[i].values['First Name'] == inputtedPassword) {
              setAuth(true);
              break;
            } else {
              alert('Invalid credentials');
            }
          }
        }
  }  catch (error) {
      console.error('Login error', error);
      alert('Login failed');
    }
  };
  
function login()
{
  return (
    <>
      <div className="text-black">not authorized lol</div>
      <br/>
      <form onSubmit={handleLogin}>
        <input
          className='text-black'
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <br/>
        <input
          className='text-black'
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br/>
        <br/>

        <button className="text-black" type="submit">Login</button>
      </form>
    </>
  );
}

//need to verify that the password inputs match
function signup()
{
  return (
    <>
      <form onSubmit={null}>
        <input
          className='text-black'
          type="text"
          placeholder="Username"
        />
        <br/>
        <br/>
        <input
          className='text-black'
          type="password"
          placeholder="Password"
        />

        <br/>
        <br/>

        <input
          className='text-black'
          type="password"
          placeholder="Confirm Password"
        />

        <br/>
        <br/>

        <button className="text-black" type="submit">Sign Up</button>
      </form>
    </>
  );
}

function profile()
{
  return (
    <>
      <div className="text-hai-navy">authorized</div>
    </>
  );
}

function Snow()
{
  return (
    <Snowfall
      color="#FFFFFF"
      radius={[0.5,3.0]}
      snowflakeCount={150}
      speed={[0.5,1.5]}
      wind={[-0.3,0.7]}
      rotationSpeed={[0,0]}
    />
  );
}

  return (
    <>
      <Head>
        <title>HackAI</title>
        <link rel="icon" type="image/svg+xml" href="/hai-logo.svg" />
        <meta
          name="description"
          content="Welcome to HackAI: the biggest AI hackathon in North Texas!"
        />
      </Head>
      <main className="min-h-screen bg-hai-beige font-oriya text-ais-white subpixel-antialiased overflow-x-hidden">
        <section id="appbar" className="fixed z-50 uppercase text-white font-bold text-xl">
          <Appbar/>
        </section>
        <section id="snow" className="fixed w-[100vw] h-[100vh] z-40 [pointer-events:none]">
          <Snow/>
        </section>
        <section id="profile" className="relative w-[100vw] h-[100vh] pt-[5rem] z-0">
          {auth ? profile() : login()}
        </section>
        <section id="footer" className="relative">
          <Footer/>
        </section>
      </main>
    </>
  );
}
