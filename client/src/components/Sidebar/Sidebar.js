import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoBlackPNG, logoWhitePNG } from '../../assets'
import { SHeader, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLogo, SSidebar } from './styles'

//icons
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { BiLibrary } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { SlWallet } from 'react-icons/sl'
import { IoIosLogIn, IoIosLogOut } from 'react-icons/io'
import { UserContext } from '../../context/user'

function Sidebar({ theme }) {
  
  let navigate = useNavigate()

  const [user, setUser] = useContext(UserContext)

  const handleSignOut = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const linksArray = [
    {
      label: "Store",
      icon: <MdOutlineLocalGroceryStore />,
      to: '/',
      visible: true
    },
    {
      label: "Library",
      icon: <BiLibrary />,
      to: '/library',
      visible: user
    },
    {
      label: "Profile",
      icon: <CgProfile />,
      to: '/profile',
      visible: user
    },
    {
      label: "Wallet",
      icon: <SlWallet />,
      to: '/wallet',
      visible: user
    },
    {
      label: "Sign In",
      icon: <IoIosLogIn />,
      to: '/signIn',
      visible: !user
    }
]
  
  return (
        <SSidebar>
            <SLogo onClick={() => navigate('/')}>
                <img src={theme == "light" ? logoBlackPNG : logoWhitePNG} alt='logo'/>
            </SLogo>
            <SHeader>
              <SLinkLabel>{user ? `Signed in as: ${user.username}` : "Please sign in for full access"}</SLinkLabel>
            </SHeader>
            <br/>
            {linksArray.map(({icon, label, to, visible}) => ( visible &&
            <SLinkContainer key={label}>
                <SLink to={to}>
                    <SLinkIcon>{icon}</SLinkIcon>
                    <SLinkLabel>{label}</SLinkLabel>
                </SLink>
            </SLinkContainer>
            ))}
            {user &&
            <SLinkContainer key="signOut">
                <SLink to='/' onClick={handleSignOut}>
                    <SLinkIcon>{<IoIosLogOut />}</SLinkIcon>
                    <SLinkLabel>Sign Out</SLinkLabel>
                </SLink>
            </SLinkContainer>}
        </SSidebar>
    )
}

export default Sidebar
