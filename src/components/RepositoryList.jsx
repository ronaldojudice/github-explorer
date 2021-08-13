import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState,useEffect } from 'react';

//https://api.github.com/users/ronaldojudice/repos

const repository = {
  name: 'Unform',
  description:'This is a way to easy programming',
  link: 'https://g1.com.br/tvriosul'
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);

 useEffect(()=>{
  fetch('https://api.github.com/users/ronaldojudice/repos').then()
 },[]);
 
  //


  return(
    <section className="repository-list">
    <h1>list of repositories</h1>    
    <ul>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
    </ul>
    
    
  </section>
    );
}