import React, { Component } from 'react';

const VideoListItem = (props) => {

    // console.log(props.video.snippet);

    const imgUrl = props.video.snippet.thumbnails.default.url;
    const title = props.video.snippet.title;

    return (
        <li onClick={() => props.onVideoSelect(props.video)} className = "list-group-item">
            <div className = "video-list mdeia">
                <div className = "media-left">
                    <img classNAme = "media-object" src = { imgUrl }/>
                </div>

                <div className = "media-body">
                    <div className = "media-heading">
                        { title }
                    </div>
                </div>
            </div>
        </li>
    );

}

export default VideoListItem;