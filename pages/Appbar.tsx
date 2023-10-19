import * as React from 'react';
import { Typography, Button, Menu, MenuItem } from '@mui/material';
import AppbarBG from '../components/appbar-bg'

export default function Landing() {
  {/*for the appbar*/}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (secName) => {
    setAnchorEl(null);
    document.getElementById(secName).scrollIntoView()
  };

  return (
    <>
      <AppbarBG transparencyThreshold="0.1" className="z-10"/>
      <nav className="bg-none w-[100vw] h-[5rem] grid grid-cols-2 md:grid-cols-3 place-items-center">
        <div onClick={() => {handleItemClick('landing')}} className="flex gap-4 items-center [cursor:pointer]">
          <img src="hackai-logo.png" className="h-[3rem] object-contain"/>
          <div className="">Hack AI</div>
        </div>
        <div className="bg-dark-blue gap-10 col-span-2 justify-self-start hidden md:flex lg:col-span-1 lg:justify-self-center">
          <div onClick={() => {handleItemClick('about')}} className="[cursor:pointer]">About</div>
          <div onClick={() => {handleItemClick('schedule')}} className="[cursor:pointer]">Schedule</div>
          <div onClick={() => {handleItemClick('faqs')}} className="[cursor:pointer]">Faqs</div>
          <div onClick={() => {handleItemClick('partners')}} className="[cursor:pointer]">Partners</div>
        </div>
        <div className="flex md:hidden">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <img src="hamburger-icon.svg" className="h-[1.5rem] object-contain"/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => {handleItemClick('about')}}>About</MenuItem>
            <MenuItem onClick={() => {handleItemClick('schedule')}}>Schedule</MenuItem>
            <MenuItem onClick={() => {handleItemClick('faqs')}}>Faqs</MenuItem>
            <MenuItem onClick={() => {handleItemClick('partners')}}>Partners</MenuItem>
          </Menu>
        </div>
        <div className="hidden lg:flex gap-4">
          <button onClick={() => window.open("https://www.aisutd.org", "_blank")}>
            <img src="www-icon.svg" className="h-[1.5rem] object-contain"/>
          </button>
          <button onClick={() => window.open("https://www.instagram.com/utdais", "_blank")}>
            <img src="insta-icon.svg" className="h-[1.5rem] object-contain"/>
          </button>
          <button onClick={() => window.open("https://www.youtube.com/@artificialintelligencesoci9846", "_blank")}>
            <img src="yt-icon.svg" className="h-[1.5rem] object-contain"/>
          </button>
          <button onClick={() => window.open("https://www.linkedin.com/company/ais-utd", "_blank")}>
            <img src="linkedin-icon.svg" className="h-[1.5rem] object-contain"/>
          </button>
          <button onClick={() => window.open("https://discord.gg/YgC62K9qga", "_blank")}>
            <img src="discord-icon.svg" className="h-[1.5rem] object-contain"/>
          </button>
        </div>
      </nav>
    </>
  );
}
