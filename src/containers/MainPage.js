import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainForm from '../components/MainForm';
import Links from '../components/Links';
import LogOut from '../components/LogOut';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
    const [links, setLinks] = useState([]);
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");

    const user = localStorage.getItem('user');
    const history = useHistory()

    const getData = () => {
        if (user == null) {
            history.push('/');
        } else {
            axios.get("https://onelink2.herokuapp.com/onelink/links", {
                params: {
                    user: user
                }
            })
                .then((response) => {
                    setLinks(response.data.data);
                });
        }
    }

    useEffect(() => {
        getData();
    });

    const handleLogOut = () => {
        localStorage.clear();
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (description === "" || url === "" || category === "") return;
        const response = await fetch('https://onelink2.herokuapp.com/onelink/links', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: description,
                url: url,
                tag: category,
                user: user
            })
        });
        const data = await response.json();
        console.log(data);
        setDescription("");
        setUrl("");
        setCategory("");
        getData();
        window.location.reload(false);
    }

    const handleDelete = async (id) => {
        fetch(`https://onelink2.herokuapp.com/onelink/links/${id}`, {
            method: 'DELETE'
        });
        getData();
    }

    return (
        <div className="mainWrapper">
            <MainForm
                desc={description}
                setDesc={setDescription}
                url={url}
                setUrl={setUrl}
                setCategory={setCategory}
                submit={handleSubmit}
            />
            <LogOut
                handleLogOut={handleLogOut} />
            <Links
                onDelete={handleDelete}
                links={links}
            />
        </div >
    );
}

export default MainPage;