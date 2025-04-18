import css from './HeroList.module.css';
import tasks from '../../assets/img/HeroLisr/tasks.jpg';
import phone from '../../assets/img/HeroLisr/phone.jpg';
import movie from '../../assets/img/HeroLisr/move.jpg';
import diary from '../../assets/img/HeroLisr/diary.jpg';
import img from '../../assets/img/HeroLisr/img.jpg';
import { Link } from 'react-router-dom';

export default function HeroList () {

return <ul className={css.ul}>


    <li className={css.li}>
    <Link  to='tasks'>
        <div className={css.shadow}>
        <img className={css.img} src={tasks} alt='notebook'/>
        </div>
        <h3 className={css.h3}>Task Manager</h3>
        <p className={css.p}>
            Our app provides a convenient and modern notebook, allowing you to easily add, delete, and track the completion of your tasks for the future.
        </p>
        </Link>
    </li>


    <li className={css.li}>
    <Link to='contacts'>
        <div className={css.shadow}>
            <img className={css.img} src={phone} alt='contact book'/>
        </div>
        <h3 className={css.h3}>Contacts Book</h3> 
        <p className={css.p}>
            In this section, you can comfortably add, store, search, and manage the contacts of your friends, colleagues, family members, and anyone else important to you. Keep their names, photos, and phone numbers all in one place.
        </p>
        </Link>
    </li>


    <li className={css.li}>
    <Link to='diary'>
        <div className={css.shadow}>
            <img className={css.img} src={diary} alt='diary'/>
        </div>
        <h3 className={css.h3}>Personal Diary</h3> 
        <p className={css.p}>
            Here, you can write down anything that concerns you throughout the day. This allows you to  structure your present and plan your future. A diary is the easiest way to improve your mental well-being.
        </p>
        </Link>
    </li>


    <li className={css.li}>
    <Link to='img'>
        <div className={css.shadow}>
            <img className={css.img} src={img} alt='search image'/>
        </div>
        <h3 className={css.h3}>Image Search</h3> 
        <p className={css.p}>
            On this page, you can easily search and download photos without the need for additional resources. Everything is included in our notebook.
        </p>
        </Link>
    </li>


    <li className={css.li}>
    <Link to='move'>
        <div className={css.shadow}>
            <img className={css.img} src={movie} alt='search movie'/>
        </div>
        <h3 className={css.h3}>Movie Search</h3> 
        <p className={css.p}>
            Planning to watch a movie but don't know which one? Our app helps you find the latest releases and the most popular films of the week. You can always search for the movie you're interested in.
        </p>
        </Link>
    </li>

</ul>

}