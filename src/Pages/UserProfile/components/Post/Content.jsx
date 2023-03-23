import React from 'react';

import BgImage from '../../../../assets/Background/LoginBg.png';

const contents = {
    cause: 'Đang bị bệnh hoặc bận công việc, cần giao hàng',
    food: 'Một ly matcha cho một ngày mùa hạ mát mẻ, không đá, không matcha, không kem tươi 🐧',
    time: 'Trong hôm nay',
    where: 'Vũ trụ có khách duyệt lần đầu',
    pay: '29.999đ',
};

const Content = () => {
    return (
        <div className="px-3 my-2">
            <div>
                <span className="text-secondary fw-light-bold">Tôi: </span>
                <span>{contents.cause}</span>
            </div>
            <div>
                <span className="text-secondary fw-light-bold">Đang thèm: </span>
                <div>{contents.food}</div>
            </div>
            <div>
                <span className="text-secondary fw-light-bold">Cần: </span>
                <span>{contents.time}</span>
            </div>
            <div>
                <span className="text-secondary fw-light-bold">Tôi ở: </span>
                <span>{contents.where}</span>
            </div>
            <div>
                <span className="text-secondary fw-light-bold">Tôi có thể trả: </span>
                <span>{contents.pay}</span>
            </div>
            <img src={BgImage} className="post-img-size my-2"></img>
        </div>
    );
};

export default Content;
