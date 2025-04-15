// import toast, { Toaster } from 'react-hot-toast';
// import { GiMagnifyingGlass } from "react-icons/gi";
// import css from './SearchBar.module.css';

export default function SearchImg ({onSubmit}) {

// const handleSubmitForm =(event)=> {

//     event.preventDefault();

//     const word =(event.target.elements.search.value).trim().toLowerCase();

//     if (word === '' ) {return toast('Enter text to search for image', {
//         style: {
//           shadow: '0px 3px 3px rgba(168, 156, 142, 0.842)',
//           color: 'rgba(88, 72, 52, 0.84)',
//           background: 'rgba(235, 222, 208, 0.64)',
//           padding: '5px 10px',
//           fontSize: '12px',
//         }},)} 
    
//     onSubmit(word);

//     event.target.reset();
// }


return <header>
{/* <Toaster
  containerStyle={{
    left:-800,
  }}
/>
    <form className={css.form} onSubmit={handleSubmitForm}>
    <div className={css.flex}>
    <button className={css.icon} type="submit"><GiMagnifyingGlass /></button>
      <input className ={css.p} name='search'
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      </div>
     <button className ={css.btn} type="submit">Search</button>
    </form> */}
  </header>
}