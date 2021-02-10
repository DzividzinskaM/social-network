import React, {useEffect, useState} from 'react';
import style from './ProfileInfo.module.css';


const ProfileStatusWithHooks = ({status: statusProp, updateStatus}) => {
    console.log("Render");
    console.log(statusProp);

    let [editMode, setEditMode]  = useState(false);
    let [status, setStatus] = useState(statusProp);

    useEffect(() => {
        setStatus(statusProp);
    }, [statusProp]);


    let activateEditMode = () => {
        setEditMode(true);
    }

    let disactivateEditMode = () => {
        updateStatus(status);
        setEditMode(false);
    }

    let onChangeStatus = (e) => {
        setStatus(e.target.value);
    }

    return <div>
        {
            !editMode
            && <div className={style.status} onDoubleClick={activateEditMode} >
                <span>{status}</span>
            </div>
        }
        {
            editMode
            && <div>
                <input onBlur={disactivateEditMode}
                       onChange={onChangeStatus}
                       autoFocus={true} type="text" value={status}/>
            </div>
        }
    </div>
}

export default ProfileStatusWithHooks;
