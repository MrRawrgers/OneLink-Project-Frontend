import React from 'react';
import Select from './SelectField';
import '../MainForm.css';

const MainForm = ({ desc, setDesc, url, setUrl, setCategory, submit }) => {
    return (
        <div className="form-wrapper">
            <form className="form">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Description"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />
                <input
                    type="text"
                    className="input-field"
                    placeholder="URL"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
                <Select
                    setCategory={setCategory}
                />
                <input
                    className="input-field"
                    type="submit"
                    value="Save"
                    onClick={submit}
                />
            </form>
        </div>
    )
}

export default MainForm;
