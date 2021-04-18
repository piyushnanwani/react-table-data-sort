import React from 'react';

function Articles(props) {
    let {articles, orderBy, ascending = false} = props; 
    console.log(orderBy)
    if (orderBy === 'upvotes' && ascending === false ) {
      articles = articles.sort(function(a,b){ return Number(b.upvotes)-Number(a.upvotes) ;});
    }
    else if (orderBy === 'date' && ascending === false ) {
      articles = articles.sort(function(a,b){ return  new Date(b.date)-new Date(a.date) });
    }
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                  {articles.map((value, index)=> (
                <tr data-testid="article" key={index}>
                    <td data-testid="article-title" >{value.title}</td>
                    <td data-testid="article-upvotes">{value.upvotes}</td>
                    <td data-testid="article-date">{value.date}</td>
                </tr>

                  ))}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
