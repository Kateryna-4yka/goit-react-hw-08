import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import {  useEffect, lazy , Suspense} from 'react';
import MoviesDetailsPage from '../MoviesDetailsPage/MoviesDetailsPage';
import MoviesCast from '../MoviesCast/MoviesCast';
import MoviesReviews from '../MoviesReviews/MoviesReviews';
import { refresUser } from '../../redux/auth/operations';
import { selectRefreshing } from '../../redux/auth/selectors';
import {NotPrivatePages, PrivatePages} from '../Rules/Rules';


const HomePage = lazy (()=> import ('../HomePage/HomePage'));
const RegistrationPage = lazy (()=> import ('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy (()=> import ('../../pages/LoginPage/LoginPage'));
const Layout = lazy (()=> import ('../Layout/Layout'));
const TasksPage = lazy (()=> import ('../../pages/TasksPage/TasksPage'));
const ContactsPage = lazy (()=> import ('../../pages/ContactsPage/ContactsPage'));
const DiaryPage = lazy (()=> import ('../../pages/DiaryPage/DiaryPage'));
const ImgPage = lazy (()=> import ('../../pages/ImgPage/ImgPage'));
const MovePage = lazy (()=> import ('../../pages/MovePage/MovePage'));




export default function App() {
const dispatch = useDispatch ();
useEffect (()=>{
  dispatch(refresUser())}, [dispatch])

  const isRefreshing = useSelector(selectRefreshing); 

    return isRefreshing ? (<p>Loading page...</p>) :( 
    
    
    <Suspense fallback={`Loading page...`}>
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={
        <NotPrivatePages component={<RegistrationPage />} redirect="/" />} />

        <Route 
        path="/login" 
        element={
        <NotPrivatePages component={<LoginPage />} redirect="/" />} />

        <Route path="/tasks" element={
        <PrivatePages component={<TasksPage />} redirect="/register" />} />

        <Route path="/contacts" element={
        <PrivatePages component={<ContactsPage />} redirect="/register" />} />

        <Route path="/diary" element={
        <PrivatePages component={<DiaryPage />} redirect="/register" />} />

        <Route path="/img" element={
        <PrivatePages component={<ImgPage />} redirect="/register" />} />

        <Route path="/move" element={
        <PrivatePages component={<MovePage />} redirect="/register" />} />
        
          <Route path='/move/:moviesId' element={
          <PrivatePages component={<MoviesDetailsPage />} redirect="/register" />}>


            <Route path='cast' element={<MoviesCast />} />
            <Route path='reviews' element={<MoviesReviews />} />
          </Route>
      </Route>

    </Routes>
    </Suspense>
    )
}