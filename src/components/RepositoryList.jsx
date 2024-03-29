import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState,useEffect } from 'react';

//https://api.github.com/users/ronaldojudice/repos


export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);

 useEffect(()=>{
  fetch('https://api.github.com/users/ronaldojudice/repos')
  .then(response=> response.json())
  .then(data => setRepositories(data))
 },[]);
 
  //


  return(
    <section className="repository-list">
    <h1>list of repositories</h1>    
    <ul>
      {
        repositories.map(repository=>{
          return  <RepositoryItem key={repository.name} repository={repository}/> 
          

        })}
          
    </ul>
    
    
  </section>
    );
}