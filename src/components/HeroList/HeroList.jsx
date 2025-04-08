import css from './HeroList.module.css';

export default function HeroList () {

return <ul className={css.ul}>
    <li className={css.li}>
        <h3 className={css.h3}>Task Manager:</h3>
        <p className={css.p}>
            Our app provides a convenient and modern notebook, allowing you to easily add, delete, and track the completion of your tasks for the future.
        </p>
    </li>

    <li className={css.li}>
        <h3 className={css.h3}>Contacts Book:</h3> 
        <p className={css.p}>
            In this section, you can comfortably add, store, search, and manage the contacts of your friends, colleagues, family members, and anyone else important to you. Keep their names, photos, and phone numbers all in one place.
        </p>
    </li>

    <li className={css.li}>
        <h3 className={css.h3}>Your Personal Diary:</h3> 
        <p className={css.p}>
            Here, you can write down anything that concerns you throughout the day. This allows you to  structure your present and plan your future. A diary is the easiest way to improve your mental well-being.
        </p>
    </li>

    <li className={css.li}>
        <h3 className={css.h3}>Photo and Image Search:</h3> 
        <p className={css.p}>
            On this page, you can easily search and download photos without the need for additional resources. Everything is included in our notebook.
        </p>
    </li>

    <li className={css.li}>
        <h3 className={css.h3}>Movie Search:</h3> 
        <p className={css.p}>
            Planning to watch a movie but don’t know which one? Our app helps you find the latest releases and the most popular films of the week. You can always search for the movie you’re interested in.
        </p>
    </li>
</ul>

}