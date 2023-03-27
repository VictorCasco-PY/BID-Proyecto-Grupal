import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');

const CardBlog = ({ _id, title, summary, cover, content, createdAt, author }) => {
    return (
        <div>
            <div className="card" style={{ width: '100%', height: '32rem' }}>
                <img src={'http://localhost:4000/' + cover} className="card-img-top" alt="imagen ref" />
                <div className="card-body h-100 d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title text-bold">{title}</h5>
                        <span>{author.username}</span>
                        <time>  {moment(createdAt).fromNow()}</time>
                        <hr />
                        <div className='summary'>
                            <p className="card-text">{summary}</p>
                        </div>
                    </div>
                    <Link to={`/post/${_id}`} className="btn btn-secondary mt-3">Leer más</Link>
                </div>
            </div>
        </div>
    )
}

export default CardBlog
