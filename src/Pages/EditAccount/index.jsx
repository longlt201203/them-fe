import { useState, useRef } from 'react';

import { useLoaderData } from 'react-router-dom';

import LoginBg from '../../assets/Background/LoginBg.png';
import Placeholder from '../../assets/Background/placeholder.png';
import localFileApi from '../../utils/api/localFIleApi';
import EditAccountForm from './components/EditAccountForm';
import {
    BackgroundUser,
    ImageUpload,
    AvaUnknown,
    ALignAvatar,
    ALignButtonEdit,
    CoverUpload,
} from './styled';

const EditAccount = () => {
    const fileRef = useRef(null);
    const coverRef = useRef(null);

    const reader = new FileReader();
    const data = useLoaderData();
    const [files, setFiles] = useState();
    const [files2, setFiles2] = useState();
    console.log(data);
    const [cover, setCover] = useState();
    const [ava, setAva] = useState();
    function handleChangeAva(e) {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        reader.onload = function (e) {
            setAva(e.target.result);
        };
        selectedFiles.forEach((file) => reader.readAsDataURL(file));
    }
    function handleChangeCover(e) {
        const selectedFiles = Array.from(e.target.files);
        setFiles2(selectedFiles);
        reader.onload = function (e) {
            setCover(e.target.result);
        };
        selectedFiles.forEach((file) => reader.readAsDataURL(file));
    }
    // data?.data.data.cover === null && cover
    // ? !cover
    //     ? Placeholder
    //     : cover
    // : `${localFileApi.getImg(data?.data.data.cover)}`

    return (
        <div>
            <BackgroundUser
                url={
                    data?.data.data.cover !== null && cover === undefined
                        ? `${localFileApi.getImg(data?.data.data.cover)}`
                        : cover
                        ? cover
                        : Placeholder
                }
                className="position-relative mb-5"
            >
                <ALignAvatar>
                    {!ava && data?.data.data.avt === null ? (
                        <AvaUnknown className="rounded-circle position-absolute top-100 start-50 translate-middle">
                            <i className="bi bi-camera"></i>
                        </AvaUnknown>
                    ) : (
                        <img
                            className="object-fit-contain rounded-circle position-absolute top-100 start-50 translate-middle"
                            src={!ava ? `${localFileApi.getImg(data?.data.data.avt)}` : ava}
                            alt="avatar user"
                            width="100"
                            height="100"
                        />
                    )}

                    <ImageUpload type="button" onClick={() => fileRef.current.click()}>
                        <i class="bi bi-pencil"></i>
                        <input ref={fileRef} hidden type="file" onChange={handleChangeAva}></input>
                    </ImageUpload>
                </ALignAvatar>
                <ALignButtonEdit>
                    {' '}
                    <CoverUpload type="button" onClick={() => coverRef.current.click()}>
                        <i class="bi bi-pencil"></i>
                        <input
                            ref={coverRef}
                            hidden
                            type="file"
                            onChange={handleChangeCover}
                        ></input>
                    </CoverUpload>
                </ALignButtonEdit>
            </BackgroundUser>
            <EditAccountForm file={files} cover={files2} data={data?.data.data} />
        </div>
    );
};

export default EditAccount;
