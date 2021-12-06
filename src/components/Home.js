import React from "react";
import ReactDOM from "react-dom";
import Carousel from "flat-carousel";
import styles from './Carousel.module.css';

function Main () {
    const images = [
        {
            src:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573553922471&di=7b945e84e814257f816333d3afd0f4ae&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201312%2F04%2F20131204184148_hhXUT.jpeg"
        },
        {
            src:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573553944706&di=7eb52d9180ead96c4ee6a73f4db1abcc&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130527%2F9331768_163938364000_2.jpg"
        },
        {
            src:
                "http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg"
        }
    ];
    return (
        <Carousel>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={styles.demoItem}
                    style={{ backgroundImage: "url(" + image.src + ")" }}
                />
            ))}
        </Carousel>
    );
}
export default Main;