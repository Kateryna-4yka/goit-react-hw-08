import { useDispatch, useSelector  } from 'react-redux';
import {requestOnUnsplsh} from '../../redux/img/operations';
import css from './ImgPage.module.css';
import { GiMagnifyingGlass } from "react-icons/gi";
import { useEffect } from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

export default function ImgPage () {
    const dispatch =useDispatch(); 

useEffect(()=>{
    dispatch(requestOnUnsplsh({searchWord: 'cat'}))
},[dispatch]);

function handleSubmitForm (event) {
    event.preventDefault();
    const searchWord =(event.target.elements.search.value).trim().toLowerCase();
    dispatch(requestOnUnsplsh({searchWord: searchWord}))
}

return  <div className={css.div}>
    <form className={css.form} onSubmit={handleSubmitForm}>
    <input className ={css.input} name='search'
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="image search..."
    />

    <button className ={css.btn} type="submit"><GiMagnifyingGlass /> Search</button>
    </form>
    <ImageGallery />
    </div>
}