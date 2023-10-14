import Boardscss from "@/styles/Boardscss.module.css";


export default function Pagination({ currentPage, totalPosts, postsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
  
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <ul className={Boardscss.pagination}>
        <li className={currentPage === 1 ? Boardscss.disable : ''}>
          <a href="#" onClick={() => onPageChange(currentPage - 1)} style={{'color' : 'black'}}>
            이전
          </a>
        </li>
  
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? Boardscss.active : ''}>
            <a href="#" onClick={() => onPageChange(number)} style={{'color' : 'black'}}>
              {number}
            </a>
          </li>
        ))}
  
        <li className={currentPage === totalPages ? Boardscss.disabled : ''}>
          <a href="#" onClick={() => onPageChange(currentPage + 1)} style={{'color' : 'black'}}>
            다음
          </a>
        </li>
        
      </ul>
    );
  }
  