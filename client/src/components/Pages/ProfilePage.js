import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../context/user'
import BackButton from './styles/BackButton'
import Error from '../../styles/Error.js'
import { Divider, Wrapper } from './StorePage'
import { PageTitle } from './LibraryPage'
import { FiEdit2, FiCheckCircle } from 'react-icons/fi'
import FormField from '../../styles/FormField'
import DeleteProfileButton from './styles/DeleteProfileButton'
import LargeLogo from '../Logos/LargeLogo'

function ProfilePage() {
    
    const [user, setUser] = useContext(UserContext)

    const [errors, setErrors] = useState([])
    const [doneLoading, setDoneLoading] = useState(true)
    const [editValue, setEditValue] = useState('')
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [editing, setEditing] = useState({
        username: false,
        email: false,
        first_name: false,
        last_name: false
    })

    let navigate = useNavigate()

    const editClick = (e) => {
        let keyToUpdate = e.currentTarget.id
        let newValue = true
        let newObj = {...editing, [keyToUpdate]: newValue}
        setEditing(newObj)
    }

    const saveClick = (e) => {
        let keyToUpdate = e.currentTarget.id
        let newValue = false
        let newObj = {...editing, [keyToUpdate]: newValue}

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ [keyToUpdate]: editValue })
        }).then(r => {
            if (r.ok){
                r.json().then((user) => {
                    setUser(user)
                    setErrors([])
                })
            } else {
                r.json().then((err) => setErrors(err.errors));}
        })

        setEditing(newObj)
        setEditValue("")
    }

    const handleSubmit = e => {
        e.preventDefault()
        saveClick(e)
    }

    const handleDelete = () => {
        navigate('/')
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          })
          .then(
            fetch(`/users/${user.id}`, {
                method: 'DELETE'
            })
          )
    }

    const deleteClick = () => {
        setConfirmDelete(true)
    }

    const cancelClick = () => {
        setConfirmDelete(false)
    }
    
    return (
        <>
        <BackButton onClick={() => navigate('/')}>{"< Back"}</BackButton>
        <Wrapper>
            <LargeLogo />
            <Divider/>
            <PageTitle>Profile</PageTitle>
            <Divider/>
            <Divider/>
            <Divider/>
            {user && <Container>
                <InfoContainer>
                    <InfoLabel>Username</InfoLabel>
                    {editing.username ? <><form id="username" onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            autoFocus='autofocus'
                            id="username"
                            autoComplete="off"
                            value={editValue}
                            placeholder={user.username}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                    </form><FiCheckCircle id="username" onClick={saveClick} style={editStyle}/></> : <>
                    <InfoValue>{user.username}</InfoValue>
                    <FiEdit2  id="username" onClick={editClick} style={editStyle}/>
                    </>}
                </InfoContainer>
                <InfoContainer>
                    <InfoLabel>Email</InfoLabel>
                    {editing.email ? <><form id="email" onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            autoFocus='autofocus'
                            id="email"
                            autoComplete="off"
                            value={editValue}
                            placeholder={user.email}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                    </form><FiCheckCircle id="email" onClick={saveClick} style={editStyle}/></> : <>
                    <InfoValue>{user.email}</InfoValue>
                    <FiEdit2 id="email" onClick={editClick} style={editStyle}/>
                    </>}
                </InfoContainer>
                <InfoContainer>
                    <InfoLabel>First Name</InfoLabel>
                    {editing.first_name ? <><form id="first_name" onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            autoFocus='autofocus'
                            id="first_name"
                            autoComplete="off"
                            value={editValue}
                            placeholder={user.first_name == null ? "Enter your first name" : user.first_name}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                    </form><FiCheckCircle id="first_name" onClick={saveClick} style={editStyle}/></> : <>
                    <InfoValue>{user.first_name == null || user.first_name == "" ? "No first name entered" : user.first_name}</InfoValue>
                    <FiEdit2 id="first_name" onClick={editClick} style={editStyle}/>
                    </>}
                </InfoContainer>
                <InfoContainer>
                    <InfoLabel>Last Name</InfoLabel>
                    {editing.last_name ? <><form id="last_name" onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            autoFocus='autofocus'
                            id="last_name"
                            autoComplete="off"
                            value={editValue}
                            placeholder={user.last_name == null ? "Enter your last name" : user.last_name}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                    </form><FiCheckCircle id="last_name" onClick={saveClick} style={editStyle}/></> : <>
                    <InfoValue>{user.last_name == null || user.last_name == "" ? "No last name entered" : user.last_name}</InfoValue>
                    <FiEdit2 id="last_name" onClick={editClick} style={editStyle}/>
                    </>}
                </InfoContainer>
                <Divider/>
                <Divider/>
                <FormField>
                    {errors.map((err) => (
                        <Error key={err}>{`Error saving update: ${err}`}</Error>
                    ))}
                </FormField>
                {!confirmDelete && <DeleteProfileButton onClick={deleteClick}>Delete User Profile</DeleteProfileButton>}
                {confirmDelete && 
                    <ConfirmDeleteContainer>
                        <ConfirmDeleteLabel>Are you sure you want to delete your profile?</ConfirmDeleteLabel>
                        <ConfirmYes onClick={handleDelete}>Yes</ConfirmYes>
                        <ConfirmNo onClick={cancelClick}>No</ConfirmNo>
                    </ConfirmDeleteContainer>
                }
            </Container>
            }
        </Wrapper>
        </>
    )
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    * {font-size: 20px;
    font-weight: normal;
    color: white;}
`

export const InfoContainer = styled.div`
    display: flex;
    position: relative;
    /* margin-left: 100px; */
    margin-top: 10px;
    justify-content: center
`

export const InfoLabel = styled.span`
    background: rgb(40,40,40);
    border-radius: 16px 0px 0px 16px;
    padding: 8px 8px;
    padding-right: 25px;
    padding-left: 20px;
    width: 250px;
    text-align: right;
`

export const InfoValue = styled.span`
    background: rgb(50,50,50);
    border-radius: 0px 16px 16px 0px;
    padding: 8px 8px;
    width: 475px;
    text-align:right;
    padding-right: 25px;
`

const editStyle = {
    marginTop: "-7px",
    marginLeft: "-10px",
    cursor: "pointer",
}

const Input = styled.input`
    border-radius: 0px 16px 16px 0px;
    background: rgb(50,50,50);
    padding: 8px 8px;
    width: 475px;
    height: 40px;
    text-align:right;
    padding-right: 25px;
    border: none;

    :focus {
        outline: none
    }
`

const ConfirmDeleteContainer = styled.div`
    display: flex;
    background: rgb(50,50,50);
    width: 700px;
    border: 1px solid transparent;
    border-radius: 6px;
    font-size: 18px;
    padding: 8px 16px;
    margin-bottom: 10px;
    margin-left: 135px;
`

const ConfirmDeleteLabel = styled.span`
    width: 600px;
    margin: auto;
`

const ConfirmYes = styled.button`
    cursor: pointer;
    background: rgb(142, 0, 0);
    display: flex;
    font-size: 20px;
    width: 100px;
    margin-left: 70px;
    border: 1px solid transparent;
    border-radius: 24px 0px 0px 24px;
    padding: 8px 16px;
    padding-left: 35px;
    text-decoration: none;

    :hover {
        background: rgb(152, 0, 0);
    }
`

const ConfirmNo = styled.button`
    cursor: pointer;
    display: flex;
    background: rgb(30,30,30);
    font-size: 20px;
    width: 100px;
    border: 1px solid transparent;
    border-radius: 0px 24px 24px 0px;
    padding: 8px 16px;
    text-decoration: none;

    :hover {
        background: rgb(35,35,35);
    }
`


export default ProfilePage
