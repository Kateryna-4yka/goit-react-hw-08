import css from './HomePage.module.css';
import HeroList from '../HeroList/HeroList';

export default function HomePage () {

return <div>
<div className={css.fon}></div>
<h1 className={css.h1}>Your Modern, Convenient, and Confidential Notebook</h1>
<HeroList />
</div>}